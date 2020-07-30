---
author: J. Hong
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

USC has a campus-wide Enterprise Customer Agreement (ECA) with DLT Solutions Inc. for AWS services. DLT is our value added reseller. All technology is direct between customer and AWS as usual, but DLT is involved in setting up the account, and billing, and adds support options.

USC’s ECA is supported with a Business Associate Agreement (BAA), which gives USC AWS account users the option to designate their account as requiring HIPAA compliance, because they manage patient health information (PHI) Customers must explicitly designate their accounts as requiring HIPAA BAA coverage, in order to activate the BAA coverage.

USC’s contract also gives you a 5% discount over the standard Amazon consumer prices for AWS, and offers a 15% data egress discount on your monthly bill.

### Service description

Amazon Web Services (AWS) is a public cloud platform that provides infrastructure services such as virtual machines, storage, databases, containers and orchestration, network, security and other tools. USC’s AWS is offered through the Internet2 NET+ service agreement through third party vendor DLT Solutions, Inc. USC’s contract for AWS services through DLT is FERPA, HIPAA and FISMA compliant. When HIPAA compliance is required, the USC AWS account that will be used to process the regulated data must explicitly be declared as needing HIPAA compliance.

### Requesting a USC AWS account

#### Who may request this service?

This service is available to USC academic and administrative units, researchers, faculty and staff.
* Each group may request multiple USC AWS Accounts.
* Each group will require a Purchase Order (PO) as the source of funding for its USC AWS Account(s).

#### Preparation steps to obtain your USC AWS account:

1.	Determine the purpose of your AWS account. Will your workloads be used with HIPAA compliance data? Will your workloads involve academic research?
    * AWS accounts used for research may qualify for free data egress - [AWS Offers Data Egress Discount to Researchers](https://aws.amazon.com/blogs/publicsector/aws-offers-data-egress-discount-to-researchers/)
2.	Get a PO for your AWS operational funding.
    * You need money. (Sorry!)
    * Write the following exact text on the PO, to relate it to our Enterprise Customer Agreement with DLT for AWS:
    * The terms of the Net+ agreement for AWS through DLT are incorporated by reference.
    * This PO links to AWS account for a period of performance from now until <date>.
    * Note: Include your account number - provided after account is provisioned by ITS. Also, unless you have a specific date in mind, use the last day of your current fiscal year, e.g.: 6/30/20xx.
    * Make the PO payable to:  
        DLT Solutions Inc.  
        2411 Dulles Corner Park  
        Suite 800  
        Herndon, VA 20171  
        Tel: 703-773-9236  
        Attn: Doug.Logar@dlt.com  

#### Steps to obtain your USC AWS account:

Open a ServiceNow ticket [Request a USC AWS account](https://itsusc.service-now.com/its_sp?id=sc_cat_item&sys_id=dd089a361be727801504fee8cd4bcbd6) - the responses to the following questions below:
1. **Short Description**
2. **Account requester name**
3. **Account owner name**
4. **USC Organziational Account name used to manage USC AWS account**
5. **Proposed USC AWS account name**
6. **Does your USC AWS account need to be HIPAA compliant?**
7. **School and Research group name? (e.g. Dornsife and Biostatistics lab)**
8. **Project name**
9. **Lead technical contact name**
10. **Alternate contact number (cell number preferred)**
11. **Purchasing officer name**
12. **Will this USC AWS account be used for production services?**
13. **Does your USC AWS account require GovCloud?**
14. **Do your systems need access to the USC Datacenter?**
15. **Do your systems need access to the Internet?**
16. **Maximum number of systems requiring USC IP addresses (CIDR)?**
17. **Purchase order (PO) number**
18. **Is there anything else we need to know?**
19. **Enter request details here**

1.	Short DescriptionWhat is the name of the Org account you will use to manage communications for this USC AWS account? (From prep step 1 above: awsprjct@usc.edu)
2.	What is the AWS account name? (From prep step 2 above: PROJECTNAME-aws@usc.edu)
3.	Is your work eligible for the DLT egress Waiver? (Research accounts are)
4.	Does your account need to be HIPAA compliant?
•	Note: USC and DLT have signed a BAA for AWS services to provide a robust legal contract; but the technical due diligence remains with the account owner.
5.	Does your account require DLT business-level support?
*	(+10% charged monthly)
6.	What is your PO number? (from prep step 3 above)
7.	What is the name of your School, Division, Department, or Research Group?
8.	What is your project name?
9.	Who is your Purchasing Officer? Name, email, phone number.
10.	Who is your lead technical contact? Name, email, phone number.
11.	Will this account be used for production services, or test/dev?
12.	Does your account require GovCloud?
*	Required for export-controlled data, such as research funded by certain government agencies. This service is more expensive service more expensive than the generic consumer-grade AWS.

#### Steps ITS will take:

1.	ITS will use answers above to create your AWS account through DLT.
2.	ITS will escrow the root key of your account.
3.	ITS will Shibbolize your AWS account console, and configure your lead technical contact with PowerUser access to your account. This means that you will be able to access your AWS account console via your USC NetID and password (same as your Workday credentials), with DUO two-factor authentication.
4.	ITS will create generic roles that your PowerUser can configure as needed, to authorize additional users to access your AWS account as needed:
*	ITS will communicate these roles and other information to your lead technical contact.
5.	ITS will create ITS Support and ITS Security roles in your AWS account. We will use these roles solely to comply with USC security and audit requirements; and to support your network connectivity needs, upon request.
*	Note: as part of your agreement to use your USC AWS account under the USC DLT Enterprise Customer Agreement, you agree to not remove the DLT and the ITS users and roles.

#### How to use your USC AWS account:

Your USC AWS account is connected to USC’s Shibboleth Single Sign-On (SSO). Login with your USC NetID at:
[USC AWS Account LOGIN](https://shibboleth.usc.edu/idp/profile/SAML2/Unsolicited/SSO?providerId=urn:amazon:webservices)

ITS will create the following USC Enterprise Directory (GDS) Groups for your USC AWS account’s key roles:
1.	USC-AWS-<Console>-PowerUser
2.	USC-AWS-<Console>-Role1
3.	USC-AWS-<Console>-Role2
4.	USC-AWS-<Console>-Role3
5.	More Role groups can be created on demand

ITS will also create the following AWS IAM Roles in your AWS account:
1.	SSO-ITS-InfoSec
2.	SSO-ITS-support
3.	SSO-USC-PowerUser
4.	SSO-USC-Role1
5.	SSO-USC-Role2
6.	SSO-USC-Role3

ITS will connect the AWS PowerUserAccess policy to the SSO-USC-PowerUser IAM Role

The USC AWS Account Technical Contact (ATC) will manage the GDS Groups above, and also be a member of USC-AWS-<Console>-PowerUser group. This will enable the ATC to login to the USC AWS account with their USC NetID with full privileges and manage it. For example, the ATC may attach and detach AWS IAM policies to the SSO-USC roles above. The ATC will also be the manager of the GDS groups listed above, and can add USC NetID’s to the GDS groups through the myGroups app. Adding a NetID to one of the GDS groups will authorize it to login to the USC AWS account, with the policies that are attached to their corresponding role.

For example, if the ATC attaches the AWS IAM policy AmazonEC2FullAccess to SSO-USC-Role1, and adds NetID jsmith to GDS Group USC-AWS-<Console>-Role1, then user jsmith will be able to login to the USC AWS account with privileges to manage EC2 resources. (Note: changes made in myGroups will take around 10-15 minutes to propagate).

Note: if there is a need for non-USC accounts to login to the USC AWS account console, that can be done through iVIP accounts, or other mechanisms.

Avoid at all cost creating AWS local IAM accounts, except for API access. It is OK to create local IAM accounts with specific permissions, without a password, and with secret keys to enable only appropriate levels of API access.

#### Service availability

Information for the AWS services is available from Amazon Service Level Agreements and the AWS Service Health Dashboard.

#### Cost of this service

AWS Services incur an “operational expense” (OpEx) cost (as opposed to a “capital expense” (CapEx) cost, where you buy a computer and it lasts for a number of years). It’s a pay-as-you-use model, and therefore your cost for the service will be based on your use of the various features within the AWS platform.

Pricing for AWS services are set by Amazon, and you may use the Amazon Web Service Calculator to build a cost estimate for your use case.

A benefit of USC’s Internet2 Net+ contract for AWS services through DLT is that it offers a 4% discount from the simple calculator’s rates (as of this update on Oct. 11, 2018). There is also a 15% data egress charge waiver, which would apply against the overall totally monthly bill for the particular USC AWS account.
There is a “Free Tier” to using AWS services, as described at AWS Free Tier. You may use this to test drive your specific intended use.

#### Operational considerations for HIPAA compliance

Security and Compliance is a shared responsibility between AWS and the customer. In addition, ITS has taken steps to secure your account prior to configuring it for your use. (See steps described above).

Recommended customer steps:
*	Any account that might handle patient health information (PHI) must be explicitly declared to require HIPAA BAA coverage with ITS and DLT.
*	AWS infrastructure is encrypted, and all traffic to/from it is encrypted as well. ITS uses strong password policies and processes, in addition to two-factor authentication to protect customer accounts. However, in case of an account compromise, all account content may be breached. Customer should encrypt all sensitive or regulated data files using reasonable industry standard technologies, Customer should also use encryption key management techniques using reasonable industry standard technologies.
*	Customer, in collaboration with the USC Office of Information Security, must use the highest levels of audit logging features made available by AWS, and maintain those audit logs according to policies specified by the USC Office of Information Security.
*	Review and understand the following resources:
  *	USC’s HIPAA Policy pages
  *	USC OOC’s Information Security page
  *	USC OOC’s HIPAA Privacy Regulations
  *	USC OOC’s HIPAA Privacy Education Program
  *	The US Dept. Of HHS Guidance on HIPAA & Cloud Computing
  *	The AWS Shared Responsibility Model.
  *	NIST 800-66
*	Additional resources regarding HIPAA on AWS:
  *	HIPAA Compliance – Amazon Web Services (AWS)
  *	2014 re:Invent video: Architecting for HIPAA Compliance on AWS
  *	Reference Architecture for HIPAA on the AWS Cloud
  *	How to Automate HIPAA Compliance (Part 1): Use the Cloud to protect the Cloud
