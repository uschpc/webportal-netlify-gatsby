class PurchaseCreateView3(LoginRequiredMixin, UserPassesTestMixin, CreateView):
    model = Purchase
    template_name = 'usc_purchase/usc_purchase_create3.html'
    fields = ['nodetype','system','cost','quantity','billing_name','billing_email','billing_department','billing_phonenumber']


    def test_func(self):
        """ UserPassesTestMixin Tests"""
        if self.request.user.is_superuser:
            return True
        if self.request.user.userprofile.is_pi:
            return True
        return False

    def get_initial(self):
        initial = super().get_initial()
        #if self.request.user.userprofile.billing_name is None and self.request.user.userprofile.billing_email is None and self.request.user.userprofil.billing_phonenumber is None:
        initial['billing_name'] = self.request.user.userprofile.billing_name
        initial['billing_email'] = self.request.user.userprofile.billing_email
        initial['billing_phonenumber'] = self.request.user.userprofile.billing_phonenumber
        initial['billing_department'] = self.request.user.userprofile.billing_department
        return initial


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # might need to convert the model to a dict
        nodetypes = PurchaseNodetypeChoice.objects.all().order_by('order')
        nodetypeList = []
        for nodetype in nodetypes:
          d = {}
          d["id"] = nodetype.id
          d["name"] = nodetype.name
          d["cost"] = nodetype.cost
          d["order"] = nodetype.order
          nodetypeList.append(d)
        #nodetypesjson = json.dumps(model_to_dict(PurchaseNodetypeChoice.objects.all()))
        #nodetypesjson = JsonResponse({"models": list(PurchaseNodetypeChoice.objects.all().values())}) # this doesnt work
        #nodetypesjson2 = list(PurchaseNodetypeChoice.objects.all().values())
        context['nodetype_list'] = nodetypeList
        #context['nodetypesjson'] = nodetypesjson
        return context


#    def get_queryset(self):
#        return None
    def form_valid(self, form):
        #logger.error("james create form")
        purchase_obj = form.save(commit=False)
        purchase_obj.date = datetime.datetime.now()

        form.instance.pi = self.request.user
        form.instance.status = PurchaseStatusChoice.objects.get(name='Pending')
        purchase_obj.save()
        return super().form_valid(form)

    def get_success_url(self):
        #return reverse('usc_purchase-detail', kwargs={'pk': self.object.pk})
        return reverse('usc_purchase-list')


def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # might need to convert the model to a dict
        nodetypes = PurchaseNodetypeChoice.objects.all().order_by('order')
        nodetypeList = []
        for nodetype in nodetypes:
          d = {}
          d["id"] = nodetype.id
          d["name"] = nodetype.name
          d["cost"] = nodetype.cost
          d["order"] = nodetype.order
          nodetypeList.append(d)
        #nodetypesjson = json.dumps(model_to_dict(PurchaseNodetypeChoice.objects.all()))
        #nodetypesjson = JsonResponse({"models": list(PurchaseNodetypeChoice.objects.all().values())}) # this doesnt work
        #nodetypesjson2 = list(PurchaseNodetypeChoice.objects.all().values())
        context['nodetype_list'] = nodetypeList
        #context['nodetypesjson'] = nodetypesjson
        return context


#    def get_queryset(self):
#        return None
    def form_valid(self, form):
        #logger.error("james create form")
        #logger.error(self.request.user.first_name+' '+self.request.user.last_name)
        #logger.error(self.request.user.email)
        #logger.error(form.cleaned_data['system'])
        #logger.error(form.cleaned_data['quantity'])
        #logger.error(form.cleaned_data['cost'])
        #logger.error(form.cleaned_data['billing_department'])
        #logger.error(form.cleaned_data['billing_name'])
        #logger.error(form.cleaned_data['billing_email'])
        #logger.error(form.cleaned_data['billing_phonenumber'])
        purchase_obj = form.save(commit=False)
        purchase_obj.date = datetime.datetime.now()

        form.instance.pi = self.request.user
        form.instance.status = PurchaseStatusChoice.objects.get(name='Pending')
        purchase_obj.save()

        # send email notification to hpc-condo@usc.edu
        # construct parameters to send to email template
        template_context = {
            'pi_name': self.request.user.first_name+' '+self.request.user.last_name,
            'pi_email': self.request.user.email,
            'system': form.cleaned_data['system'],
            'quantity': form.cleaned_data['quantity'],
            'cost': form.cleaned_data['cost'],
            'billing_dept': form.cleaned_data['billing_department'],
            'billing_name': form.cleaned_data['billing_name'],
            'billing_email': form.cleaned_data['billing_email'],
            'billing_phonenumber': form.cleaned_data['billing_phonenumber'],
        }





