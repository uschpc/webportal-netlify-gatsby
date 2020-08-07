---
author: J. Hong
id: 2
date: 2020-07-28T00:00:00.00Z
title: AWS Account Setup
excerpt: Information to request for an ITS-managed AWS account
route: User Guides
routePath: user-information/user-guides/hybrid-cloud-computing
path: aws-account-setup
parentPath: user-information/user-guides/hybrid-cloud-computing
cat: cloudComputing
parentPage: User Guides
backToTopBtnFlag: true
---

USC has a campus-wide Enterprise Customer Agreement (ECA) with DLT Solutions Inc. for Amazon Web Services (AWS). DLT is a value-added reseller. All technology is accessed through AWS as usual, but DLT is involved in setting up the account, billing, and offering support.

USC’s ECA is supported with a Business Associate Agreement (BAA), which gives USC AWS account users the option to designate their account as requiring HIPAA compliance if they manage patient health information. Customers must explicitly designate their accounts as requiring HIPAA BAA coverage in order to activate the BAA coverage.

USC’s contract also gives users a 5% discount over the standard Amazon consumer prices for AWS, and offers a 15% data egress discount on your monthly bill.

### Service description

Amazon Web Services (AWS) is a public cloud platform that provides infrastructure services, including:
 - Virtual machines
 - Storage
 - Databases
 - Containers and orchestration
 - Network tools
 - Security tools

USC’s AWS is offered through the Internet2 NET+ service agreement through the third party vendor DLT Solutions Inc. USC’s contract for AWS services through DLT is FERPA-, HIPAA- and [FISMA](https://aws.amazon.com/compliance/fisma/)-compliant. When HIPAA compliance is required, the USC AWS account that will be used to process the regulated data must explicitly be declared as needing HIPAA compliance.

### Requesting a USC AWS account

#### Who may request this service?

This service is available to USC academic and administrative units, researchers, faculty and staff. Each group/department may request multiple USC AWS Accounts, and each group/department will require a Purchase Order (PO) as the source of funding for its USC AWS Account(s).

#### Preparation steps to obtain your USC AWS account

1.	Determine the purpose of your AWS account.
    * Will your workloads be used with HIPAA-compliant data?
    * Will your workloads involve academic research?
        * AWS accounts used for research may qualify for free data egress - see [AWS Offers Data Egress Discount to Researchers](https://aws.amazon.com/blogs/publicsector/aws-offers-data-egress-discount-to-researchers/)
2.	Get a PO for your AWS operational funding.
    * Write the following exact text on the PO, to relate it to the Enterprise Customer Agreement with DLT for AWS:
        * The terms of the Net+ agreement for AWS through DLT are incorporated by reference.
        * This PO links to AWS account \<account number\> for a period of performance from now until \<date\>.
          * Include your account number, which is provided after your AWS account is provisioned by ITS.
          * Unless you have a specific date in mind, use the last day of your current fiscal year, e.g., 6/30/20xx.
    * Make the PO payable to:  
        >DLT Solutions Inc.  
        2411 Dulles Corner Park  
        Suite 800  
        Herndon, VA  20171  
        Tel.: 703-773-9236  
        Attn.: Doug.Logar@dlt.com  

#### Steps to obtain your USC AWS account

[Open a ServiceNow ticket to request a USC AWS account](https://itsusc.service-now.com/its_sp?id=sc_cat_item&sys_id=dd089a361be727801504fee8cd4bcbd6) and complete the responses to the following questions below:

1. Short Description:  *Short description of your project and purpose.*  
2. Account requester name: *Name & email of the requester.  Usually the technical contact.*
3. Account owner name: *Name & email of the owner. Usually the business owner who will be paying for the service.*
4. USC Organizational Account name used to manage USC AWS account: *Typically your USC department name.*
5. Proposed USC AWS account name: *Try to come up with a unique AWS account name that is not too long.  This will be used to identify your account.*
6. Does your USC AWS account need to be HIPAA compliant?: *Yes/No if your account requires HIPAA compliance.*
7. School and Research group name? (e.g. Dornsife and Biostatistics lab)
8. Project name
9. Lead technical contact name: *Name & email of the technical contact.*
10. Alternate contact number (cell number preferred)
11. Purchasing officer name: *Name & email of the purchasing officer.*
12. Will this USC AWS account be used for production services?: *Yes/No if your account will be used for production.*
13. Does your USC AWS account require GovCloud?: *Yes/No if your account will be used for GovCloud.*
    * *GovCloud is required for export-controlled data, such as research funded by certain government agencies. This service is more expensive than the generic consumer-grade AWS.*
14. Do your systems need access to the USC Datacenter?: *Yes/No if your AWS will require access to USC's public & private datacenter networks.*
15. Do your systems need access to the Internet?: *Yes/No if your AWS account will require public internet access.*
16. Maximum number of systems requiring USC IP addresses (CIDR)?: *CIDR - not currently used.*
17. Purchase order (PO) number
18. Is there anything else we need to know?
19. Enter request details here: *Enter your detailed request here.  Also mention if:*
    * *Your AWS account will be used for research, as it will receive an additional egress waiver.*
    * *Your AWS account requires support - business-level support is charged at +10% monthly.*

#### Steps ITS will take

1.	ITS will use your answers above to create your AWS account through DLT.
2.	ITS will escrow the root key of your account.
3.	ITS will Shibbolize your AWS account console and configure your lead technical contact with PowerUser access to your account. This means that you will be able to access your AWS account console via your USC NetID and password with DUO two-factor authentication.
4.	ITS will create generic roles that your PowerUser can configure as needed, to authorize additional users to access your AWS account as needed.
 *	ITS will communicate these roles and other information to your lead technical contact.
5.	ITS will create ITS Support and ITS Security roles in your AWS account. ITS will use these roles solely to comply with USC security and audit requirements and to support your network connectivity needs, upon request.

>Note: As part of your agreement to use your USC AWS account under the USC DLT Enterprise Customer Agreement, you agree to not remove the DLT or ITS users and roles.

### Using your USC AWS account

Your USC AWS account is connected to USC’s Shibboleth Single Sign-On (SSO). Log in with your USC NetID at:
[USC AWS Account Login](https://shibboleth.usc.edu/idp/profile/SAML2/Unsolicited/SSO?providerId=urn:amazon:webservices).

ITS will create the following USC Enterprise Directory (GDS) Groups for your USC AWS account’s key roles:
 -	USC-AWS-\<Console\>-PowerUser
 -	USC-AWS-\<Console\>-Role1
 -	USC-AWS-\<Console\>-Role2
 -	USC-AWS-\<Console\>-Role3

More role groups can be created on demand.

ITS will also create the following AWS IAM Roles in your AWS account:

 - SSO-ITS-InfoSec
 - SSO-ITS-Support
 - SSO-USC-PowerUser
 - SSO-USC-Role1
 - SSO-USC-Role2
 - SSO-USC-Role3

ITS will connect the AWS PowerUserAccess policy to the SSO-USC-PowerUser IAM Role.

The USC AWS Account Technical Contact (ATC) will manage the GDS Groups above, and they will also be a member of the USC-AWS-\<Console\>-PowerUser group. This will enable the ATC to log in to the USC AWS account with their USC NetID with full privileges and manage it. For example, the ATC may attach and detach AWS IAM policies to the SSO-USC roles above. The ATC will also be the manager of the GDS groups listed above, and can add USC NetIDs to the GDS groups through the [myGroups app](https://mygroups.usc.edu/myGroups). Adding a NetID to one of the GDS groups will authorize it to log in to the USC AWS account, with the policies that are attached to their corresponding role.

For example, if the ATC attaches the AWS IAM policy AmazonEC2FullAccess to SSO-USC-Role1, and adds NetID jsmith to GDS Group USC-AWS-\<Console\>-Role1, then user jsmith will be able to log in to the USC AWS account with privileges to manage EC2 resources.

>Note: Changes made in myGroups will take around 10-15 minutes to propagate.

>Note: If there is a need for non-USC accounts to log in to the USC AWS account console, that can be done through [iVIP accounts](https://itservices.usc.edu/iam/ivip/), or other mechanisms.

Avoid at all costs creating AWS local IAM accounts, except for API access. It is OK to create local IAM accounts with specific permissions, without a password, and with secret keys to enable only appropriate levels of API access.

### Service availability
Information for the AWS services is available from [Amazon Service Level Agreements](https://aws.amazon.com/de/legal/service-level-agreements/) and the [AWS Service Health Dashboard](http://status.aws.amazon.com/).

### Cost of the service

AWS Services incur an “operational expense” (OpEx) cost (as opposed to a “capital expense” (CapEx) cost, such as when you buy a computer and it lasts for a number of years). It’s a pay-as-you-use model, and therefore your cost for the service will be based on your use of the features within the AWS platform.

Pricing for AWS services is set by Amazon, and you can use the [AWS Pricing Calculator](https://calculator.aws/) to build a cost estimate for your use case.

A benefit of USC’s Internet2 Net+ contract for AWS services through DLT is that it offers a 5% discount from the simple calculator’s rates (as of this update on Oct. 11, 2018). There is also a 15% data egress charge waiver, which would apply against the overall totally monthly bill for the particular USC AWS account.

There is also a “Free Tier” for using AWS services, as described at [AWS Free Tier](https://aws.amazon.com/free/). You may use this to test drive your specific intended use.

### Operational considerations for HIPAA compliance

Security and compliance is a shared responsibility between AWS and the customer. In addition, ITS has taken steps to secure your account prior to configuring it for your use.

Recommended customer steps:

*	Any account that might handle patient health information (PHI) must be explicitly declared to require HIPAA BAA coverage with ITS and DLT.
*	AWS infrastructure is encrypted, and all traffic to/from it is encrypted as well. ITS uses strong password policies and processes, in addition to two-factor authentication to protect customer accounts. However, in case of an account compromise, all account content may be breached. The customer should encrypt all sensitive or regulated data files using reasonable industry standard technologies. The customer should also use encryption key management techniques using reasonable industry standard technologies.
*	The customer, in collaboration with the USC Office of Information Security, must use the highest levels of audit logging features made available by AWS, and maintain those audit logs according to policies specified by the USC Office of Information Security.

You must review and understand the following resources:

* [USC’s HIPAA Policy pages](https://policy.usc.edu/hipaa/)  
* [USC OOC’s Information Security page](https://ooc.usc.edu/data-privacy/information-security/)  
* [USC OOC’s HIPAA Privacy Regulations](https://ooc.usc.edu/data-privacy/health-information/hipaa-privacy-regulations/)  
* [USC OOC’s HIPAA Privacy Education Program](https://ooc.usc.edu/data-privacy/health-information/hipaa-privacy-education-program/)
* [The US Dept. Of HHS Guidance on HIPAA & Cloud Computing](https://www.hhs.gov/hipaa/for-professionals/special-topics/cloud-computing/index.html)
* [The AWS Shared Responsibility Model.](https://aws.amazon.com/compliance/shared-responsibility-model/)
* [NIST 800-66](https://csrc.nist.gov/publications/detail/sp/800-66/rev-1/final)

Additional resources regarding HIPAA on AWS:

* [HIPAA Compliance – Amazon Web Services (AWS)](https://aws.amazon.com/compliance/hipaa-compliance/)
* [2014 re:Invent video: Architecting for HIPAA Compliance on AWS](https://www.youtube.com/watch?v=c_06psX2obI)
* [Reference Architecture for HIPAA on the AWS Cloud](https://docs.aws.amazon.com/quickstart/latest/compliance-hipaa/welcome.html)
* [How to Automate HIPAA Compliance (Part 1): Use the Cloud to Protect the Cloud](https://aws.amazon.com/blogs/security/how-to-automate-hipaa-compliance-part-1-use-the-cloud-to-protect-the-cloud/)
