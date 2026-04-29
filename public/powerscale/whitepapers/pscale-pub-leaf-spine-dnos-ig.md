

PowerScale Leaf Spine Guide
## October 2025
## Internal Use - Confidential

Notes, cautions, and warnings
NOTE: A NOTE indicates important information that helps you make better use of your product.
CAUTION: A CAUTION indicates either potential damage to hardware or loss of data and tells you how to avoid
the problem.
WARNING: A WARNING indicates a potential for property damage, personal injury, or death.
Copyright © 2018 - 2025 Dell Inc. All Rights Reserved. Dell Technologies, Dell, and other trademarks are trademarks of Dell Inc. or its
subsidiaries. Other trademarks may be trademarks of their respective owners.
## Internal Use - Confidential

Chapter 1: Leaf-Spine overview.....................................................................................................4
Leaf-Spine topology............................................................................................................................................................4
Dell S5232-ON switches..............................................................................................................................................4
Dell Z9100-ON switches..............................................................................................................................................6
Dell Z9264 switches......................................................................................................................................................8
Chapter 2: Leaf Switch Installation..............................................................................................11
Install a Leaf-Spine Switch Fabric..................................................................................................................................11
Chapter 3: Switch replacement....................................................................................................13
Replace a Leaf-Spine switch...........................................................................................................................................13
Chapter 4: Switch expansion.......................................................................................................15
Expand a Leaf-Spine cluster...........................................................................................................................................15
Chapter 5: Upgrade the DNOS on a Leaf-Spine fabric..................................................................17
Prepare the USB.................................................................................................................................................................17
Preparing to upgrade a Leaf-Spine fabric....................................................................................................................17
Upgrading a Leaf-Spine fabric........................................................................................................................................17
Chapter 6: Racks and rails installation.........................................................................................21
Install rails for the Dell Z9100 or S5232 switches......................................................................................................21
Install rails for the Dell Z9264 switches.......................................................................................................................22
Install Dell Z9264 switches in the rack.........................................................................................................................23
Racking guidelines for Leaf-Spine clusters.................................................................................................................24
Install Dell switches in the rack......................................................................................................................................25
Cable management for Leaf-Spine clusters................................................................................................................27
Where to get help...................................................................................................................................................................28
Additional options for getting help................................................................................................................................28
## Contents
## Contents3
## Internal Use - Confidential

Leaf-Spine overview
This guide provides instruction on how to install, upgrade, replace, and expand a Leaf-Spine switch. This section provides an
overview of Leaf-Spine architecture, supported switches, and workflows.
Leaf-Spine topology
OneFS 9.0.0.0 and later releases support Leaf-Spine network topology for internal networks that communicate with the
nodes to form clusters up to 252 nodes. For large clusters that are intended to grow over time, the Leaf-Spine topology is
recommended. For small clusters with fewer than 30 nodes, a flat or Top of Rack (TOR) topology is recommended.
## Architecture
In a Leaf-Spine topology, Dell Z9264-ON, Z9100-ON, and S5232-ON switches are arranged in a two-level hierarchy. Leaf
switches are connected to the top-level switches called Spine switches to provide connectivity for all the nodes in the cluster.
The Leaf switches are not connected to each other. OneFS requires two independent Leaf-Spine networks for intracluster
communication. These networks are known as Int-A and Int-B respectively.
## NOTE:
Leaf only configurations are limited to one switch per fabric.
See Dell PowerSwitch specifications:
●Dell PowerSwitch S5232-ON
●Dell PowerSwitch Z9264-ON
●Dell PowerSwitch Z9664F-ON
## NOTE:
Only supported on flat or TOR topology.
## NOTE:
Mixing of S5232, Z9100, Z9264, and Z9664F-ON switches are supported in a Leaf and Spine architecture. However, it
requires that all switches run a version of the Dell Networking Operating System (DNOS) qualified by PowerScale. Before
introducing an S5232 switch into an existing fabric, ensure that all switches are upgraded to the latest PowerScale-qualified
DNOS version. For the most current list of DNOS versions qualified by PowerScale, see the following Dell Knowledge Base
article:
## KB 000195220.
Dell S5232-ON switches
The S5232-ON switch is supported for Leaf-Spine network topology and is compatible with all Generation 6 and PowerEdge 14G
and 16G node types.
## S5232
## NOTE:
The S5232 switches arrive autoconfigured for installation. Do not make any configuration changes to the switches
or to the firmware before cabling them to the backend network.
The S5232 is:
●A 1U, 32-port switch supporting up to 100 GbE connections.
●The method through which PowerScale nodes communicate with one another for intracluster traffic.
## 1
4Leaf-Spine overview
## Internal Use - Confidential

Figure 1. S5232 I/O-side view
1.MicroUSB-B console port2.RS-232/RJ45 serial console port
3.Thirty–two 10/25/40/50/100 QSFP28 ports4.1G/10G SFP+ ports
5.Stack ID6.USB Type A storage
7.10/100/1000BaseT Ethernet management port8.Luggage tag
Figure 2. S5232 PSU-side view
1.Fan modules
2.Power supply units
## Table 1.
S5232 switch details
S5232 featuresDescription
DensityThis switch has 124x10/25 GbE ports using QSFP+ to SFP
through breakout. Each port can be broken out independent
of the breakout selection for other ports in the switch.
NOTE: Port 32 does not support breakout cables.
DesignThis switch has a compact form factor with a 1RU design.
Power consumptionThis switch has low power consumption at 605 W
(maximumd)/288 W (typical) per system with all ports
running at line rate with AOC optics).
AirflowThe PSU to I/O is the default airflow for the PowerScale
Leaf-Spine architecture.
High availabilityThis switch has redundant, hot-swappable power supplies and
fans.
S5232 switch requirements
The following table lists the number of S5232 switches required to create a cluster for a given number of nodes. The number
of switches that are listed is for one network only. Because the backend consists of two similar networks, the numbers must
be doubled to get the total number of switches. The number of nodes that are listed are performance nodes. Each performance
Leaf-Spine overview
## 5
## Internal Use - Confidential

node can be replaced by up to 4 archive nodes by using breakout cables. It is recommended that the total number of nodes on
any Leaf switch does not exceed 32.
Table 2. S5232 switch requirements for Leaf-Spine clusters
Maximum number of nodesNumber of spine switchesNumber of leaf switchesNumber of cables between
each pair of leaf and spine
switches
All 40 GbE ports
## 44129
## 66139
## 88245
## 110255
## 132265
## 144373
## 2525122
All 100 GbE ports
## 321216
## 64248
## 112474
## 128484
## 135593
## 1505103
Dell Z9100-ON switches
The Dell Z9100-ON switch is supported for Leaf-Spine network topology and is compatible with all Generation 6 and PowerEdge
14G and 16G nodes.
## Z9100-ON
## NOTE:
The Dell Z9100-ON switches arrive autoconfigured for installation. Do not make any configuration changes to the
switches or to the firmware before cabling them to the backend network.
The Dell Z9100-ON is:
●A 1U, 32-port (QSFP28) switch supporting up to 100 GbE connections.
●The method through which PowerScale nodes communicate with one another for intracluster traffic.
Figure 3. Z9100–ON I/O-side view
## 1.
MicroUSB-B console port2.RS-232/RJ45 serial console port
6Leaf-Spine overview
## Internal Use - Confidential

3.Thirty–two 10/25/40/50/100 QSFP28 ports4.1G/10G SFP+ ports
5.Stack ID6.USB Type A storage
7.10/100/1000BaseT Ethernet management port8.Luggage tag
Figure 4. Z9100–ON PSU-side view
1.Fan modules
2.Power supply units
Table 3. Z9100-ON switch details
Z9100-ON featuresDescription
DensityHigh-density 10/25/40/100 GbE core switch with 32 100-GbE
QSFP28 ports expandable to:
●128x10 GbE ports using QSFP+ to SFP+ breakout
●128x25 GbE ports using QSFP28 to SFP28 breakout
●32x40 GbE ports using QSFP+ optics/DACs
## ●
32x100 GbE ports using QSFP28 optics/DACs
Each port can be broken out independent of the breakout
selection for other ports in the switch.
DesignThis switch has a compact form factor with a 1RU design.
Power consumptionThis switch has low power consumption at 605 W
(maximumd)/288 W (typical) per system with all ports
running at line rate with AOC optics).
AirflowThe PSU to I/O is the default airflow for the Isilon Leaf-Spine
architecture.
High availabilityThis switch has redundant, hot-swappable power supplies and
fans.
Z9100-ON switch requirements
The following table lists the number of Z9100-ON switches required to create a cluster for a given number of nodes. The
number of switches that are listed is for one network only. Because the backend consists of two similar networks, the numbers
must be doubled to get the total number of switches. The number of nodes that are listed are performance nodes. You can
replace each performance node with up to four archive nodes by using breakout cables. It is recommended that the total
number of nodes on any Leaf switch does not exceed 32.
## Table 4.
Z9100-ON switch requirements for Leaf-Spine clusters
Maximum number of nodesNumber of spine switchesNumber of leaf switchesNumber of cables between
each pair of leaf and spine
switches
All 40 GbE ports
## 44129
Leaf-Spine overview7
## Internal Use - Confidential

Table 4. Z9100-ON switch requirements for Leaf-Spine clusters (continued)
Maximum number of nodesNumber of spine switchesNumber of leaf switchesNumber of cables between
each pair of leaf and spine
switches
## 66139
## 88245
## 110255
## 132265
## 144373
## 2525122
All 100 GbE ports
## 321216
## 64248
## 112474
## 128484
## 135593
## 1505103
Dell Z9264 switches
The Dell Z9264 switch is supported for Leaf-Spine network topology and is compatible with all Generation 6 and PowerEdge 14G
and 16G nodes.
## Z9264
## NOTE:
The Dell Z9264 switches arrive autoconfigured for installation. Do not make any configuration changes to the
switches or to the firmware before cabling them to the backend network.
The Dell Z9264 is:
●A 2U, 64-port (QSFP28) switch supporting up to 100 GbE connections.
●The method through which PowerScale nodes communicate with one another for intracluster traffic.
## 8
Leaf-Spine overview
## Internal Use - Confidential

Figure 5. Switch components for the Z9264
## 1.
MicroUSB-B console port2.RJ45 console port
3.Sixty-four QSFP28 ports4.Two SFP+ ports
5.USB Type A port6.RJ45 management port
7.Luggage tag
Figure 6. View of the fans and PSUs
1.Fan modules
2.Power supply units
Leaf-Spine overview
## 9
## Internal Use - Confidential

Table 5. Z9264 switch details
Z9264 featuresDescription
DensityHigh-density 10/25/40/100 GbE core switch with 64 100GbE
QSFP28 ports expandable to:
●64x40 GbE ports using QSFP+ optics/DACs
●64x100 GbE ports using QSFP28 optics/DACs
DesignThis switch has a compact form factor with a 2RU design.
Power consumptionThis switch has a low power consumption at 605 W
(maximumd) / 288 W (typical) per system with all ports
running at line rate with AOC optics).
AirflowThe PSU to I/O is the default airflow for the Isilon Leaf-Spine
architecture.
High availabilityThis switch has redundant, hot-swappable power supplies and
fans.
Z9264 switch requirements
The following table lists the number of Z9264 switches required to create a cluster for a given number of nodes. The number
of switches that are listed is for one network only. Because the backend consists of two similar networks, the numbers must be
doubled to get the total number of switches. The number of nodes that are listed is performance nodes. Each performance node
can be replaced by up to four archive nodes by using breakout cables. It is recommended that the total number of nodes on any
Leaf switch does not exceed 32.
## Table 6.
Z9264 switch requirements for Leaf-Spine clusters
Maximum number of nodesNumber of spine switchesNumber of leaf switchesNumber of cables between
each pair of leaf and spine
switches
All 40 GbE ports
## 881219
## 1321319
## 1601416
## 1762410
## 2202510
## 2523610
All 100 GbE ports
## 641232
## 1282416
## 1503510
## 1803610
## 252488
10Leaf-Spine overview
## Internal Use - Confidential

## Leaf Switch Installation
Install a Leaf-Spine Switch Fabric
The following is the workflow for installing a cluster with Leaf-Spine topology.
About this task
Use the Leaf-Spine topology to configure the backend network if you install a new or scale a cluster to include 32 performance
nodes with 40 GbE or 100 GbE backend ports or more than 96 archive nodes with 10 GbE or 25 GbE backend ports. See Table 1
for node types. Leaf switch ports 1 through 10 should be reserved for uplinks and Leaf switch ports 11 through 32 for downlinks.
The credentials are user=admin and password=admin.
CAUTION: If you are reusing switches from another cluster, they must be reinitialized using the ONIE method.
Follow the steps in the DNOS Upgrade chapter of this guide to confirm cluster health and resolve any
compatibility issues before upgrading OneFS.
CAUTION: Do not power on any switches until instructed to do so in the procedure. Failure to follow these
instructions might result in an unstable fabric and having to reinitialize all the switches and rebuild the fabric.
## Steps
1.Install the switch rails.
2.Install the Spine switches followed by the Leaf switches.
## NOTE:
All shipping switches come preconfigured as Leaf. All switches should be physically installed. The exception to
this is that you can power on the designated Spine switches to change the personality from Leaf to Spine.
3.Power on all Spine switches and unset the personality on each Spine switch.
OS10# ztd cancel
OS10# configure terminal
OS10(config)# no smartfabric l3fabric
When prompted to reboot, enter: yes
4.Cable all switches per cabling guidelines.
5.Power on a single Leaf switch
Switches are initially preconfigured as Leaf. To confirm that the switch is configured as leaf, enter:
OS10# show smartfabric personality
## Personality     : L3 Fabric
Role            : LEAF
## ICL             :
OS10#  show smartfabric cluster member
Service-tag    IP Address                                   Status     Role
Type      Chassis-Service-Tag    Chassis-Slot
--------------------------------------------------------------------------------------
## ------------------------------------
XXXXXXX        fde2:53ba:e9a0:cccc:185a:58ff:feec:eca4      ONLINE     MASTER
6.Connect to one of the switches previously designated as Spine.
## 2
## Leaf Switch Installation11
## Internal Use - Confidential

a.Log in and enter:
configure terminal
smartfabric l3fabric enable role SPINE
For DNOS 10.5.9 and later, log in and enter:
configure terminal
smartfabric l3fabric enable role SPINE no-leader
b.Reboot the switch.
CAUTION: Switches must be added serially. Failure to follow these instructions might result in an unstable
fabric and having to reinitialize all the switches and rebuild the fabric.
7.Confirm that the switch has joined the fabric.
a.Log in and enter:
OS10# show smartfabric personality
Personality     :L3 Fabric
Role            :SPINE
## ICL             :
OS10# show smartfabric cluster
## ----------------------------------------------------------
## CLUSTER DOMAIN ID : 100
VIP               : fde2:53ba:e9a0:cccc:0:5eff:fe00:1100
## ROLE              : BACKUP
## SERVICE-TAG      : ZZZZZZZ
## MASTER-IPV4       : 0.0.0.0
## PREFERRED MASTER :
## NOTE:
In this output, "ZZZZZZZ" represents the Service Tag of the switch.
OS10# show smartfabric cluster member
Service-tag    IP Address                                   Status     Role
Type      Chassis-Service-Tag    Chassis-Slot
------------------------------------------------------------------------------------
## --------------------------------------
XXXXXXX        fde2:53ba:e9a0:cccc:185a:58ff:feec:eca4      ONLINE     MASTER
## NOTE:
This output identifies the Master/Leader switch that has joined the fabric. The Service Tag should match the
existing switch from the previous code block.
CAUTION: Switches must be added serially. Failure to follow these instructions might result in an
unstable fabric and having to reinitialize all the switches and rebuild the fabric.
8.Repeat steps 5-7 for each designated spine switch until all spine switches are configured and have joined the fabric.
9.After all spine switches are connected and have joined the fabric, complete the following steps for each leaf switch:
a.Power on each leaf switch one at a time.
b.Confirm that the leaf switch has joined the fabric.
c.Repeat steps 9a and 9b for each remaining leaf switch until all leaf switches have joined the fabric.
10.If the network is configured with only Int-A, repeat these steps on Int-B to install the second fabric.
## Results
The Leaf-Spine cluster is installed. For DNOS installation and SmartFabric personality, see Chapter 3.
Best practices and examples for Leaf-Spine clusters are available in the white paper Best Practices For a Dell EMC Isilon
Leaf-Spine Network.
## 12
## Leaf Switch Installation
## Internal Use - Confidential

Switch replacement
Replace a Leaf-Spine switch
The following is the workflow for replacing a switch in a Leaf-Spine topology.
About this task
The credentials are user=admin and password=admin.
## CAUTION:
Do not power off any of the existing switches in the cluster.
NOTE: The switch Operating System must be the same. If the replacement switch has a newer operating system than
the existing fabric, upgrade the existing fabric first. Do not downgrade the new switch. See the 'Upgrading DNOS for
Leaf-Spine' chapter for more details.
## Steps
1.Test the health of the fabric by running the pingtest script that is located under Tools and Downloads in SolVe.
## CAUTION:
If any ports show a fail status, contact Dell Support.
2.Power off the old switch and remove it.
3.Install the new switch.
## NOTE:
All shipping switches come preconfigured as Leaf. All switches should be physically installed. The exception to
this is that you can power on the designated Spine switches to change the personality from Leaf to Spine.
NOTE: Do not connect any cables to the replacement switch at this stage.
4.Power on the new switch.
5.Unset the switch personality by entering configuration mode on the switch.
OS10# ztd cancel
OS10# configure terminal
OS10(config)# no smartfabric l3fabric
When prompted to reboot, enter: yes
6.Cable the switch to the existing fabric.
7.Enter configuration mode on the switch.
configure terminal
8.Set the switch personality.
Smartfabric l3fabric enable role SPINE or
Smartfabric l3fabric enable role LEAF
a.Reboot the switch.
9.Confirm the switch internal networks are up.
For Spine switches, go to the next step.
show virtual-network 4091
## 3
Switch replacement13
## Internal Use - Confidential

NOTE: If no output is displayed, do not proceed. Verify that all ports with connected nodes are listed before proceeding
to the next step.
10.Confirm that the switch has completed the process to join the fabric.
show smartfabric cluster members
11.Run the pingtest script to confirm operation success and ensure that there are no failures.
14Switch replacement
## Internal Use - Confidential

Switch expansion
Expand a Leaf-Spine cluster
You can expand the storage capacity of a Leaf-Spine cluster by adding switches and nodes.
## Prerequisites
Before expanding a Leaf-Spine fabric, upgrade existing switches to the latest qualified version of DNOS for PowerScale to
ensure compatibility with newly added switches.
Use the tables in Chapter 1 to determine the number of switches and cables required to expand the Leaf-Spine cluster. See the
'Upgrading DNOS for Leaf-Spine' chapter for more details.
CAUTION: To ensure that adding switches and nodes to an existing Leaf-Spine cluster is nondisruptive:
●Do not power off any of the switches in the cluster.
●Only move excess links between Leaf and Spine switches.
NOTE: Complete the steps in this process one fabric at a time. Once completed and verified, continue to the other fabric.
About this task
Best practices and examples for Leaf-Spine clusters are available in the White Paper Best Practices For a Dell EMC Isilon
Leaf-Spine Network.
## Steps
1.Determine the number of Leaf, or Spine switches required for adding the new nodes to the cluster. The tables, S5232,
Z9100-ON, and Z9264 switch requirements for Leaf-Spine clusters, list the switch requirements.
2.If additional Leaf or Spine switches are not required, connect the new nodes to free ports on the Leaf switches. Ensure that
you connect the new nodes by using ports 11 through 32 as recommended.
3.Install the new switches in the rack.
## CAUTION:
Do not power on any switches until instructed to do so in the procedure. Failure to follow these
instructions might result in an unstable fabric and having to reinitialize all the switches and rebuild the
fabric.
4.Power on the new switches and unconfigure the switches using the commands:
OS10# configure terminal
OS10# no smartfabric l3fabric
if prompted, no to save configuration
yes to reboot
5.Cable the new switches to the fabric.
## CAUTION:
Do not cable Spine to Spine or Leaf to Leaf.
CAUTION: Switches must be added serially. Failure to follow these instructions might result in an unstable
fabric and having to reinitialize all the switches and rebuild the fabric.
6.Configure the switch using the correct command for the appropriate switch type.
## 4
Switch expansion15
## Internal Use - Confidential

## Spine:
OS10# configure terminal
OS10# smartfabric l3fabric enable role SPINE
yes to reboot
For DNOS 10.5.9 and later, log in and enter:
configure terminal
smartfabric l3fabric enable role SPINE no-leader
## Leaf:
OS10# configure terminal
OS10# smartfabric l3fabric enable role LEAF
yes to reboot
7.Run a backend ping test to confirm there are no failures in the new fabric.
8.Repeat this process on the other fabrics.
16Switch expansion
## Internal Use - Confidential

Upgrade the DNOS on a Leaf-Spine fabric
Leaf-Spine fabric consists of multiple switches.
NOTE: Downgrading is not supported.
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
Preparing to upgrade a Leaf-Spine fabric
When an entire fabric is being upgraded as opposed to a single switch, the upgrade procedure is the same for each switch. The
order in which the switches are upgraded is the primary difference.
Before you begin to upgrade a fabric:
●Add PuTTy software to your service laptop.
●Obtain a USB 2.0 flash drive
●Prepare the USB.
●Obtain a switch console cable USB serial to micro-USB.
●Obtain any usernames or passwords for the switches if the default has been changed.
●Obtain the username and password for the cluster.
●Download any necessary scripts from the Tools and Downloads area in SolVe.
Upgrading a Leaf-Spine fabric
All switches in the same fabric, either internal-A or internal-B, must be upgraded to the latest DNOS.
About this task
Leaf-Spine fabric consists of multiple switches.
## CAUTION:
Downgrading is not supported.
## Steps
1.Connect to the cluster.
## 5
Upgrade the DNOS on a Leaf-Spine fabric17
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
OS10# system "sudo cp /mnt/license/xxxxxxx.lic /mnt/usb/"
6.Confirm that the license is copied.
OS10# dir usb
7.Reload the switch using the reload command or power cycle the switch.
a.OS10# reload
b.At the save config prompt, enter: no
c.At the proceed with reload prompt, enter: yes
8.Select ONIE from the menu as it boots back up.
The boot menu only displays for a few seconds. Press F2 to keep the menu active (or the boot continues).
Figure 7. Boot menu
## 18
Upgrade the DNOS on a Leaf-Spine fabric
## Internal Use - Confidential

NOTE: This step is critical. If it is missed, you must start the process over.
9.On the next menu, the default is: Install OS. Use this option.
The switch detects the inserted USB stick and installs without intervention.
NOTE: The switch Operating System must be the same. If the replacement switch has a newer operating system than
the existing fabric, upgrade the existing fabric first. Do not downgrade the new switch. See the 'Upgrading DNOS for
Leaf-Spine' chapter for more details.
## 10.
Stop the Zero Touch Deployment command.
OS10# ztd cancel
11.With the USB device that is still connected to the switch, run the command to reinstall the license file.
OS10# license install usb://<ServiceTag>.lic
## NOTE:
Ensure the Service Tag matches that of the switch you are configuring.
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
13.Upgrade the rest of the switches in the fabric.
After upgrading the operating system on all switches within the same fabric, proceed to rebuild the fabric.
To reconfigure the fabric, follow this order:
a.One Leaf switch
b.All Spine switches
c.All remaining Leaf switches
14.Reconfigure a Leaf switch.
a.Run the command:
OS10# configure terminal
OS10# smartfabric l3fabric enable role LEAF
if prompted- no to save config
yes to reboot
b.After the switch has rebooted, confirm it was reconfigured.
OS10# show virtual-network 4091
Upgrade the DNOS on a Leaf-Spine fabric
## 19
## Internal Use - Confidential

NOTE: The output of this command should list all switchports with nodes attached. If no output appears, wait briefly
and run the command again. Do not proceed until the output is displayed.
15.Reconfigure a Spine switch.
a.Run the command:
OS10# configure terminal
OS10# smartfabric l3fabric enable role SPINE
if prompted- no to save config
yes to reboot
CAUTION: Switches must be added serially. Failure to follow these instructions might result in an
unstable fabric and having to reinitialize all the switches and rebuild the fabric.
b.After the Spine has rebooted, confirm it has joined the fabric.
OS10# show smartfabric cluster member
Service-tag    IP Address                                   Status     Role
Type      Chassis-Service-Tag    Chassis-Slot
------------------------------------------------------------------------------------
## --------------------------------------
XXXXXXX        fde2:53ba:e9a0:cccc:185a:58ff:feec:eca4      ONLINE     MASTER
c.Repeat steps 15(a) and 15(b) until all Spine switches have been configured.
16.Reconfigure all remaining Leaf Switches.
a.Run the command:
OS10# configure terminal
OS10# smartfabric l3fabric enable role LEAF
if prompted- no to save config
yes to reboot
b.After the Switch has rebooted, confirm that the switch is added to the fabric.
Service-tag    IP Address                                   Status     Role
Type      Chassis-Service-Tag    Chassis-Slot
------------------------------------------------------------------------------------
## --------------------------------------
XXXXXXX        fde2:53ba:e9a0:cccc:185a:58ff:feec:eca4      ONLINE     MASTER
c.Repeat steps 16(a) and 16(b) until all Leaf switches have been configured.
17.When configuring the last Leaf Switch, confirm the switch internal networks are up.
show virtual-network 4091
If no output is displayed, do not proceed.
18.Connect to the cluster, runt the ping test, and verify that there are no failures.
19.Repeat this process on the other fabric.
20.To verify that all nodes are present and that there are no outstanding CELOG alerts, confirm the cluster installation by
running the command:
# isi status
The PowerScale OneFS Event Reference Guide provides instructions on how to view events.
## Results
When all the switches have been upgraded and verified, the fabric upgrade is complete.
## 20
Upgrade the DNOS on a Leaf-Spine fabric
## Internal Use - Confidential

Racks and rails installation
Install rails for the Dell Z9100 or S5232 switches
Install Dell rails to support Dell switches in the rack.
## Steps
1.Separate the inner and outer rails.
Attach the inner rails to the switch before installing it in the rack.
2.Clip the rail to the front of the rack.
There is a label on the rail that reads INSTALL DEVICE THIS END. Slide the switch into the rack from the front so that
the label is at the front of the rack.
a.Align the support screws with the correct location on the rack.
b.Press down on the label that reads PUSH to open the rail clip.
c.Guide the support screws at the end of the rail into the rack holes until the clip snaps to the rack and holds the rail in
place.
## 6
Racks and rails installation21
## Internal Use - Confidential

3.Extend the rail until the backend of the rail clips to the back of the rack.
4.Repeat these steps to install the second rail on the other side of the rack.
5.Repeat until all switch rails are installed.
Install rails for the Dell Z9264 switches
Install Dell Technologies rails to support Dell Z9264 switches in the rack.
## Prerequisites
## NOTE:
There are two sets of rails: the tool-less Dell 2U Ready Rails and the 2U Dell designed rails that require mounting
screws to secure the front. Determine which rail kit version you are using. If tools are required, skip this section.
## Steps
1.Separate the inner and outer rails.
Attach the inner rails with the wanted offset to the switch before installing it in the rack.
2.Take the tool-less install side of the rail and press it into the rear NEMA until it is securely clipped in. Extend the rail forward
so that the screw holes are aligned to the inside of the front NEMA.
## NOTE:
Do not slide the switch into the rails until both mounting screws for each of the outer rails are in place in the
front.
22Racks and rails installation
## Internal Use - Confidential

Figure 8. Outer rail installation
a.Pull the rails forward from the rear NEMA after clipping them in to meet the front NEMA.
b.Insert a screw in the second and fourth hole positions on the front of the rail to secure it in place during the installation
process.
3.Repeat these steps to install the second rail on the other side of the rack.
4.Repeat until all switch rails are installed.
Install Dell Z9264 switches in the rack
Install Dell Technologies rails to support Dell Z9264 switches in the rack.
About this task
Mount the inner rails on the switches and then install them in the rack (rear facing). Use the default 31-inch mounting points
for the inner rails. For the z9264, there are three mounting offsets that can be chosen: 22 inches, 28 inches, 31 inches. The
22-inch is its own inner rail. The 28-inch and 31-inch rail offset can be adjusted by removing two screws in the front of the rail,
sliding forward and backward the adjustable portion, and reinserting the two screws to lock the rails into that offset position.
This adjustment can be made before or after securing the inner rail to the switch.
## Steps
1.Attach the inner rails to the switch. Ensure the ears at the end of the rails are pointing outward and are installed at the
backend of the switch.
2.To install either the 22-inch or the 28-inch or 31-inch, line up the 10 holes in the rail with the 10 holes on the side of the
switch and insert a screw in each location. Ensure that the rail ears are pointing out.
## NOTE:
Do not slide the switch with inner rails into outer rails until all mounting screws for the inner rails and switch
have been inserted and secured.
NOTE: The rails have a distinct left and right, which correspond to their orientation when viewed from the front of the
rack when installed.
There are Left and Right labels on the front of the inner rails. Slide the switch into the rack from the front so that the labels
are at the front of the rack.
Racks and rails installation
## 23
## Internal Use - Confidential

Figure 9. Installation step sequence 1
3.From the front of the rack, slide the switch with inner rails onto the outer rails until the front ears of the inner rails meet the
front NEMAs.
4.If installing a bezel, any clips or pods that are used to mount the bezel should be installed at this step. After the clips or pods
are installed, check that all remaining exposed mounting holes on the front of the switch rails are secured to the rack with
screws.
Figure 10. Installation step sequence 3 and 4
5.Repeat until all switch rails are installed.
Racking guidelines for Leaf-Spine clusters
The guidelines in this section help you plan your racking arrangement for building or scaling Leaf-Spine clusters. Only install Dell
equipment in the rack.
●To ensure that you can scale your cluster in the future, leave enough rack space for switches or nodes.
●Place the Spine switches at a central location where you have room to grow the cluster on either side. Build your int-a
network (backend) from one side of the Spine switches, and your int-b (frontend) network from the other side.
## 24
Racks and rails installation
## Internal Use - Confidential

●Try to place the nodes in the same rack as the Leaf switches to which they are connecting. If that is not possible, place the
nodes in an adjacent rack.
If you plan to expand the cluster, additional Spine switches and extra cabling are required. Expanding from one Spine switch
to two Spine switches, half of the existing connections to Spine 1 are moved to Spine 2. To simplify the expansion, it is best
practice to add switches within the same rack. For example, to add three nodes to the rack, Gen6 nodes are 4U, so enough
space for 12U is required.
Install Dell switches in the rack
Mount inner rails on the switches and then install them in the rack (rear facing).
About this task
There are two mounting points for the inner rails, one 28" and the other 31" from the front rail. Use the default 31" mounting
points for the inner rails.
## Steps
1.Attach the inner rails to the switch.
Ensure the ears at the end of the rails are pointing outward and are installed at the backend of the switch.
a.Insert the mounting posts on the side of the switch into the large holes in the rail.
b.Slide the rails toward the back of the switch to secure the mounting posts in the smaller holes in the rail.
2.Slide the switch into the rails that are mounted in the rack.
Racks and rails installation
## 25
## Internal Use - Confidential

3.Slide the switch into the rack until you secure the back ears of the rail to the rack with the two black screws on the rail.
Secure the rail to the rack by tightening the black thumbscrew on each rail.
## 26
Racks and rails installation
## Internal Use - Confidential

Cable management for Leaf-Spine clusters
To set up and manage cables for Leaf-Spine clusters, follow these guidelines.
●Use breakout cables if you are planning to add nodes with 10 GbE or 25 GbE back-end interfaces to the cluster. Breakout
cables enable you to connect a single cable to the switch that breaks out to four archive nodes.
●If cable cost and length is a consideration, rack the nodes as close to the Leaf switches as possible. Shorter passive cables
are more cost effective than the longer active cables. Also, passive cables encounter fewer problems and errors.
●Do not connect Leaf to Leaf, or Spine to Spine switches. CELOG detects the existence of any invalid connections in the
cluster.
Supported cable length options
●100 GbE cable options for uplinks and downlinks:
○Passive copper - 1, 3, and 5 meters
○Active optical - 3, 7, 10, and 30 meters
○Optical - 1, 3, 5, 10, 30, 50, 100, and 150 meters
●40 GbE cable options for downlinks:
○Copper - 1, 3, and 5 meters
○Optical - 1, 3, 5, 10, 30, 50, 100, and 150 meters
●Breakout cables 4x10GbE and 4x25GbE:
○Copper - 1, 3, and 5 meters
○Optical - breakout cables do not require optics.
Racks and rails installation
## 27
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
28Where to get help
## Internal Use - Confidential