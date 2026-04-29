

PowerScale Leaf Switch Guide
## June 2025
## Internal Use - Confidential

Notes, cautions, and warnings
NOTE: A NOTE indicates important information that helps you make better use of your product.
CAUTION: A CAUTION indicates either potential damage to hardware or loss of data and tells you how to avoid
the problem.
WARNING: A WARNING indicates a potential for property damage, personal injury, or death.
Copyright © 2018 - 2025 Dell Inc. All Rights Reserved. Dell Technologies, Dell, and other trademarks are trademarks of Dell Inc. or its
subsidiaries. Other trademarks may be trademarks of their respective owners.
## Internal Use - Confidential

Chapter 1: Leaf Switch Installation................................................................................................4
Install a Single Switch.........................................................................................................................................................4
Chapter 2: Upgrade the Dell Networking Operating System (DNOS) on a Leaf Fabric....................5
Prepare the USB..................................................................................................................................................................5
Preparing to upgrade a Leaf Fabric................................................................................................................................5
Upgrading a Leaf Fabric.....................................................................................................................................................5
Chapter 3: Leaf Switch Replacement.............................................................................................8
Replace a Leaf Switch........................................................................................................................................................8
Where to get help......................................................................................................................................................................9
Additional options for getting help..................................................................................................................................9
## Contents
## Contents3
## Internal Use - Confidential

## Leaf Switch Installation
Install a Single Switch
Leaf only configurations are limited to one switch per fabric.
About this task
This task requires the use of a script. The Pingtest script can be downloaded in advance from Tools and Downloads in
SolVe.
## Steps
1.Install the switch rails.
2.Install the Leaf switch.
NOTE: All shipping switches come preconfigured as Leaf. All switches should be physically installed.
3.Ensure that the switch operating system version is the current version.
The Upgrade the switch operating system section in this guide provides detailed instructions on how to check and upgrade
switches.
4.Confirm the switch internal networks are up.
show virtual-network 3939
show virtual-network 4091
## NOTE:
If no nodes are connected to the switch and powered on, no output is displayed for virtual-network 4091;
contact support for assistance.
## 1
4Leaf Switch Installation
## Internal Use - Confidential

Upgrade the Dell Networking Operating
System (DNOS) on a Leaf Fabric
Prepare the USB
The installation, replacement, and upgrade of the Dell Network Operating System (DNOS) is a USB installation.
## Prerequisites
●Use a USB 2.0 flash drive.
●Use a USB serial to micro-USB (USB C) switch console cable.
●Install PuTTy on the laptop.
## Steps
1.Download the switch firmware image from the Dell support site, using the Service Tag of the switch.
2.Under Drivers and Downloads, download the tar file and extract the PKGS_xxx.bin file.
3.From a Windows desktop, create a USB stick formatted with a FAT32.
4.Copy the downloaded image onto the USB stick and rename it onie-installer.
The USB device stores the onie-installer file and any license files that Dell Ethernet switches use.
Preparing to upgrade a Leaf Fabric
This section outlines the necessary prerequisites and preparation required before upgrading a leaf fabric.
Before you begin to upgrade a fabric:
●Add PuTTy software to your service laptop.
●Obtain a USB 2.0 flash drive
●Prepare the USB.
●Obtain a switch console cable USB serial to micro-USB.
●Obtain any usernames or passwords for the switches if the default has been changed.
●Obtain the username and password for the cluster.
●Download any necessary scripts from the Tools and Downloads area in SolVe.
Upgrading a Leaf Fabric
All switches in the same fabric, either internal-A or internal-B, must be upgraded to the latest DNOS.
About this task
Leaf fabric consists of a single switch.
CAUTION: Downgrading is not supported.
## Steps
1.Connect to the cluster.
## 2
Upgrade the Dell Networking Operating System (DNOS) on a Leaf Fabric5
## Internal Use - Confidential

2.Confirm that Failover is enabled.
Cluster-1# isi cluster internal-networks view
## Primary Network Configuration
## -----------------------------
Int-a IP Addresses: 1.1.1.1-1.1.1.4
Int-a Status: enabled
## Int-a Prefix Length: 24
Int-a MTU: 9000
## Int-a Fabric: Ethernet
## Failover Network Configuration
## ------------------------------
Int-b IP Addresses: 1.1.2.1-1.1.2.4
## Failover Status:
enabled
## Int-b Prefix Length: 24
Int-b MTU: 9000
## Int-b Fabric: Ethernet
Failover IP Addresses: 1.1.3.1-1.1.3.4
NOTE: Int-a Status and Failover Status should show 'enabled'. If the values differ, failover is not enabled and
operational. Without failover configured, a back-end switch going offline can result in cluster downtime.
CAUTION: If failover is not enabled, stop and contact PowerScale Technical Support.
3.Test the health of the fabric by running the Pingtest Script that is located under Tools and Downloads in SolVe.
CAUTION: If any ports display a fail status in the ping script output, do not proceed and contact PowerScale
Technical support for assistance.
4.Insert the USB stick into the switch.
5.Save the license file.
OS10# sudo cp /mnt/license/xxxxxxx.lic /mnt/usb/.
6.Confirm that the license is copied.
OS10# dir usb
7.Reload the switch using the reload command or power cycle the switch.
a.OS10# reload
b.At the save config prompt, enter: no
c.At the proceed with reload prompt, enter: yes
8.Select ONIE from the menu as it boots back up.
The boot menu only displays for a few seconds. Press F2 to keep the menu active (or the boot continues).
Figure 1. Boot menu
## 6
Upgrade the Dell Networking Operating System (DNOS) on a Leaf Fabric
## Internal Use - Confidential

NOTE: This step is critical. If it is missed, you must start the process over.
9.On the next menu, the default is: Install OS. Use this option.
The switch detects the inserted USB stick and installs without intervention.
NOTE: The switch Operating System must be the same. If the replacement switch has a newer operating system than
the existing fabric, upgrade the existing fabric first. Do not downgrade the new switch. See the 'Upgrade the Dell
Networking Operating System (DNOS) on a Leaf Fabric' chapter for more details.
## 10.
Stop the Zero Touch Deployment command.
OS10# ztd cancel
11.With the USB device still connected to the switch, run the command to reinstall the license file.
OS10# license install usb://<ServiceTag>.lic
NOTE: Ensure the Service Tag matches that of the switch you are configuring.
12.Confirm that the license is installed and configured.
OS10# show license status
## ---------------------------------------------------------
Vendor Name          :   Dell EMC
Product Name         :   Z9264F-ON
## Hardware Version     :   A02
Platform Name        :   x86_64-dellemc_z9264f_c3538-r0
## PPID                 :
Service Tag          :   XXXXXXX
## Product Base         :
## Product Serial Number:
## Product Part Number  :
## License Details
## ----------------
Software        :        OS10-Enterprise
## Version         :        10.5.2.13
## License Type    :
## Perpetual
## License Duration:
## Unlimited
## License Status  :        Active
License location:        /mnt/license/XXXXXXX.lic
## ------------------------------------------------------
13.Reconfigure a Leaf switch.
a.Run the command:
OS10# configure terminal
OS10# smartfabric l3fabric enable role LEAF
if prompted- no to save config
yes to reboot
b.After the switch has rebooted, confirm it was reconfigured.
OS10# show virtual-network 4091
## NOTE:
The output of this command should list all switchports with nodes attached. If no output appears, wait briefly
and run the command again. Do not proceed until the output is displayed.
Upgrade the Dell Networking Operating System (DNOS) on a Leaf Fabric7
## Internal Use - Confidential

## Leaf Switch Replacement
Replace a Leaf Switch
The following is the workflow for replacing a switch in a Leaf-Spine topology.
About this task
The credentials are user=admin and password=admin.
CAUTION: Do not power off any of the existing switches in the cluster.
## Steps
1.Test the health of the fabric by running the pingtest script that is located under Tools and Downloads in SolVe.
CAUTION: If any ports show a fail status, contact Dell Support.
2.Power off the old switch and remove it.
3.Install the new switch.
## NOTE:
All shipping switches come preconfigured as Leaf. All switches should be physically installed. The exception to
this is that you can power on the designated Spine switches to change the personality from Leaf to Spine.
NOTE: Do not connect any cables to the replacement switch at this stage.
4.Cable new switch.
5.Power on the switch.
6.Verify DNOS Version Compatibility.
When replacing a switch, ensure that the DNOS version of the new switch matches the DNOS version of the remaining
existing switches. If the versions do not match, upgrade the existing switch to the newer DNOS version to ensure
compatibility. See the "Upgrade Dell Networking Operating System" section for instructions.
7.Confirm the switch internal networks are up.
show virtual-network 4091
## NOTE:
If no output is displayed, do not proceed. Verify that all ports with connected nodes are listed before proceeding
to the next step.
8.Confirm that the switch has completed the process to join the fabric.
show smartfabric cluster members
9.Run the pingtest script to confirm operation success and ensure that there are no failures.
## 3
8Leaf Switch Replacement
## Internal Use - Confidential

Where to get help
The Dell Technologies Support site contains important information about products and services including drivers, installation
packages, product documentation, knowledge base articles, and advisories.
A valid support contract and account might be required to access all the available information about a specific Dell Technologies
product or service.
Additional options for getting help
This section contains resources for getting answers to questions about PowerScale products.
## Dell Technologies Support
●Contact Technical Support
Telephone support
●United States: 1-800-SVC-4EMC (1-800-782-4362)
●Canada: 1-800-543-4782
●Worldwide: 1-312-725-5401
●Local phone numbers for a specific country or region are available at Contact
## Technical Support.
PowerScale OneFS Documentation
## Info Hubs
●PowerScale OneFS Info Hubs
Dell Knowledge Base (KB) articlesKB articles are available on the Dell Technologies support site.
Where to get help9
## Internal Use - Confidential