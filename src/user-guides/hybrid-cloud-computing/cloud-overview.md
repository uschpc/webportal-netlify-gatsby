---
author: James Hong
id: 1
date: 2020-06-04T00:00:00.00Z
title: Cloud Computing Overview
excerpt: Information on using cloud computing resources through our preferred cloud providers.
path: cloud-computing-overview
route: User Guides
routePath: user-information/user-guides/hybrid-cloud-computing
parentPath: user-information/user-guides/hybrid-cloud-computing
cat: cloudComputing
parentPage: User Guides
backToTopBtnFlag: true
---

There are three types of cloud computing resources: public, private, or hybrid cloud solutions.

### Public Cloud

Public cloud services, such as those from Amazon, Google, and Microsoft, are the most common way of deploying cloud computing. The cloud resources (like servers and storage) are owned and operated by a third-party cloud service provider and delivered over the Internet. With a public cloud, all hardware, software, and other supporting infrastructure is owned and managed by the cloud provider. In a public cloud, you share the same hardware, storage, and network devices with other organizations or cloud “tenants.” You access services and manage your account using a web browser. Public cloud deployments are frequently used to provide web-based email, online office applications, storage, and testing and development environments.

#### Cloud Storage

USC faculty, staff, and students already have access to one or more public cloud storage solutions. CARC researchers can use these cloud storage systems to back up and manage their data:

* [DropBox](https://itservices.usc.edu/dropbox/)
* [Google Drive](https://itservices.usc.edu/googledrive/)
* [Microsoft OneDrive](https://itservices.usc.edu/office365/onedrive/)

We recommend using Rclone for syncing your files to these cloud storage providers.  Read the [Rclone documentation](https://rclone.org/docs/) and our [Transferring Files using Rclone user guide](/user-information/user-guides/data-management/transferring-files-rclone) for detailed instructions and a few common scenarios.

#### Cloud Accounts

If your team is ready to use on-demand public cloud services, you will first need to open an account:

* Amazon Web Services, USC's **preferred** public vendor.
  * See our [AWS Account Setup user guide](aws-account-setup) for more details.
* Microsoft Azure
* Google Cloud Platform

### Private Cloud

A private cloud consists of computing resources used exclusively by one business or organization. The private cloud can be physically located at your organization’s on-site data center, or it can be hosted by a third-party service provider. In a private cloud, the services and infrastructure are always maintained on a private network and the hardware and software are dedicated solely to your organization. In this way, a private cloud can make it easier for an organization to customize its resources to meet specific IT requirements. Private clouds are often used by government agencies, financial institutions, and any other mid- to large-size organizations with business-critical operations seeking enhanced control over their environment.

### Hybrid Cloud

Often called “the best of both worlds,” hybrid clouds combine on-premises infrastructure, or private clouds, with public clouds so organizations can reap the advantages of both. In a hybrid cloud, data and applications can move between private and public clouds for greater flexibility and more deployment options. For instance, you can use the public cloud for high-volume, lower-security needs such as web-based email, and the private cloud (or other on-premises infrastructure) for sensitive, business-critical operations like financial reporting. In a hybrid cloud, “cloud bursting” is also an option. This is when an application or resource runs in the private cloud until there is a spike in demand (such as a seasonal event like online shopping or tax filing), at which point the organization can “burst through” to the public cloud to tap into additional computing resources.
