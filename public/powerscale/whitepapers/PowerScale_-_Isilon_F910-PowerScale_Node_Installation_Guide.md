

Copyright © 2026 Dell Inc. or its subsidiaries.  All Rights Reserved.  Dell Technologies, Dell, EMC, Dell EMC and other trademarks are
trademarks of Dell Inc. or its subsidiaries.  Other trademarks may be trademarks of their respective owners.
The information in this publication is provided “as is.” Dell Inc. makes no representations or warranties of any kind with respect to the
information in this publication, and specifically disclaims implied warranties of merchantability or fitness for a particular purpose.
Use, copying, and distribution of any software described in this publication requires an applicable software license.
This document may contain certain words that are not consistent with Dell's current language guidelines. Dell plans to update the
document over subsequent future releases to revise these words accordingly.
This document may contain language from third party content that is not under Dell's control and is not consistent with Dell's current
guidelines for Dell's own content. When such third party content is updated by the relevant third parties, this document will be revised
accordingly.
## Dell Technologies – Restricted Use – Confidential
PowerScale - Isilon SolVe Generator
Version: 6.0.0.131Generated on April 29 2026 11:18 AM
T o p i c
## F910
S e l e c t i o n s
PowerScale F910: PowerScale Node Installation Guide
If you find any errors in this procedure or have comments regarding this application, please
submit feedback here - https://contentfeedback.dell.com/home
Page 1 of 63

## Dell Technologies – Restricted Use – Confidential
## Contents
Preliminary Activity Tasks .......................................................................................................3
Read, understand, and perform these tasks.................................................................................................3
General Information for Removing and Installing FRUs..........................................................4
Avoiding Electrostatic Discharge (ESD) damage..........................................................................................4
Emergency procedures (without an ESD kit)...........................................................................................4
Removing, installing, or storing FRUs .....................................................................................................5
PowerScale Node Installation Guide.......................................................................................6
Page 2 of 63

## Dell Technologies – Restricted Use – Confidential
## Preliminary Activity Tasks
This section may contain tasks that you must complete before performing this procedure.
Read, understand, and perform these tasks
1.Table 1 lists tasks, cautions, warnings, notes, and/or knowledgebase (KB) solutions that you need to
be aware of before performing this activity.  Read, understand, and when necessary perform any
tasks contained in this table and any tasks contained in any associated knowledgebase solution.
Table 1List of cautions, warnings, notes, and/or KB solutions related to this activity
- As detailed in the Site Preparation and Planning Guide, the storage conditions for some parts, such
as Hard Disk Drives (HDDs), Solid State Drives (SSDs), and batteries, affect the wear and life of those
parts. Do not exceed six consecutive months of unpowered storage from the delivery date. If your
hardware has been unpowered for 6 months or more contact Dell Technical Support prior to
installation and quote KB 000215206
Page 3 of 63

## Dell Technologies – Restricted Use – Confidential
General Information for Removing and Installing FRUs
This section describes precautions you must take and general procedures you must follow when
removing, installing, or storing field-replaceable units (FRUs). The procedures in this section apply to FRU
handling during hardware upgrades as well as during general replacement.
FRUs are designed to be powered up at all times. This means you can accomplish FRU replacements
and most hardware upgrades while the cabinet is powered up. To maintain proper airflow for cooling and
to ensure EMI compliance, make sure all front bezels, filler panels, and filler modules are reinstalled after
the FRU replacement or hardware upgrade is completed.
Avoiding Electrostatic Discharge (ESD) damage
When replacing or installing FRUs, you can inadvertently damage the sensitive electronic circuits in the
equipment by simply touching them. Electrostatic charge that has accumulated on your body discharges
through the circuits. If the air in the work area is very dry, running a humidifier in the work area helps
decrease the risk of ESD damage. You must use the following procedures to prevent damage to the
equipment, so read the following instructions carefully.
-  Provide enough room to work on the equipment. Clear the work site of any unnecessary materials or
materials that naturally build up electrostatic charge, such as foam packaging, foam cups, cellophane
wrappers, and similar items.
-  Do not remove replacement or upgrade FRUs from their antistatic packaging until you are ready to
install them.
-  Gather the ESD kit and all other materials you will need before you service a component. Once
servicing begins, you should avoid moving away from the work site; otherwise, you may build up an
electrostatic charge.
-  Use the ESD kit when handling any FRU.
If an emergency arises and the ESD kit is not available, follow the procedures in the section
Emergency procedures (without an ESD kit).
-  Use the ESD wristband that is supplied with your system.
To use it, attach the clip of the ESD wristband (strap) to any bare (unpainted) metal on the cabinet
enclosure; then secure the wristband around your wrist with the metal button against your skin.
Emergency procedures (without an ESD kit)
In an emergency, when an ESD kit is not available, use the following procedures to reduce the possibility
of an electrostatic discharge by ensuring that your body and the subassembly are at the same
electrostatic potential.
IMPORTANT:  These procedures are not a substitute for the use of an ESD kit. You should follow them
only in the event of an emergency.
-  Before touching any FRU, touch a bare (unpainted) metal surface of the enclosure.
-  Before removing any FRU from its antistatic bag, place one hand firmly on a bare metal surface of the
enclosure, and at the same time, pick up the FRU while it is still sealed in the antistatic bag. Once you
have done this, do not move around the room or contact other furnishings, personnel, or surfaces
until you have installed the FRU.
-  When you remove a FRU from the antistatic bag, avoid touching any electronic components and
circuits on it.
-  If you must move around the room or touch other surfaces before installing a FRU, first place the
FRU back in the antistatic bag. When you are ready again to install the FRU, repeat these
procedures.
Page 4 of 63

## Dell Technologies – Restricted Use – Confidential
Removing, installing, or storing FRUs
Use the following precautions when you remove, handle, or store FRUs:
-  Do not remove a FRU from the cabinet until you have the replacement available.
-  Handle a FRU only when wearing a properly attached ESD wristband:
Attach the clip of the ESD wristband to the ESD bracket or to a bare metal portion of the FRU’s
enclosure.
Secure the wristband around your wrist with the metal button against your skin.
-  Handle a FRU gently. A sudden jar, drop, or violent vibration can permanently damage some FRUs.
-  The weight of some FRUs is not evenly distributed. To prevent personal injury or equipment damage
when removing, installing, or handling theses FRUs, use both hands and provide extra support at the
heavy end of the FRU.
-  Never use excessive force to remove or install a FRU.
-  Store a FRU in the antistatic bag and the specially designed shipping container in which you received
it. Use this special shipping container when you need to return the FRU.
-  If you need to store a FRU for a short time, make sure the temperature of the location where you
store the FRU is within the limits specified by the FRU’s Technical Specifications.
-  Disk modules are sensitive to the extreme temperatures sometimes encountered during shipping. We
recommend that you leave a new disk module in its shipping container and allow it to acclimate to the
installation site’s ambient temperature for at least four hours before operating the new module in the
system.
-  When removing a disk module, pull the module part way out of the slot; then wait 30 seconds for the
drive to spin down before removing it.
-  When installing multiple disks in a powered-up system, wait at least 6 seconds before sliding the
second and each subsequent disk into the system.
-  Place a disk module on a soft, antistatic surface, such as an industry-standard antistatic foam pad or
the container used to ship the module. Never place a disk module directly on a hard surface.
Page 5 of 63

## Dell Technologies – Restricted Use – Confidential
PowerScale Node Installation Guide
Page 6 of 63

PowerScale Node
## Installation Guide
## September 2025
Page 7 of 63

Notes, cautions, and warnings
NOTE: A NOTE indicates important information that helps you make better use of your product.
CAUTION: A CAUTION indicates either potential damage to hardware or loss of data and tells you how to avoid
the problem.
WARNING: A WARNING indicates a potential for property damage, personal injury, or death.
Copyright © 2021 - 2025 Dell Inc. All Rights Reserved. Dell Technologies, Dell, and other trademarks are trademarks of Dell Inc. or its
subsidiaries. Other trademarks may be trademarks of their respective owners.
Page 8 of 63

Chapter 1: Node installation introduction......................................................................................5
About PowerScale nodes...................................................................................................................................................5
Safety instructions..............................................................................................................................................................7
Before you begin..................................................................................................................................................................8
Chapter 2: Node installation for Archive and Hybrid nodes............................................................9
Drive types............................................................................................................................................................................9
Unpack and verify components........................................................................................................................................9
Installation types..................................................................................................................................................................9
Install the chassis rails......................................................................................................................................................10
Install the chassis...............................................................................................................................................................12
Install compute modules and drive sleds......................................................................................................................13
Back panel............................................................................................................................................................................15
Supported switches...........................................................................................................................................................15
Attaching network and power cables............................................................................................................................17
Front panel LCD menu......................................................................................................................................................18
Chapter 3: Node installation for A310, A3100, H710, H7100 nodes................................................20
Drive types..........................................................................................................................................................................20
Unpack and verify components.....................................................................................................................................20
Installation types................................................................................................................................................................20
Install the chassis rails......................................................................................................................................................21
Install the chassis..............................................................................................................................................................23
Install compute modules and drive sleds.....................................................................................................................24
Back panel...........................................................................................................................................................................26
Supported switches..........................................................................................................................................................26
Attaching network and power cables...........................................................................................................................28
Front panel LCD menu.....................................................................................................................................................29
Chapter 4: Node installation for F200, F600, F900, B100, and P100 nodes...................................31
Drive types...........................................................................................................................................................................31
Unpack and verify components......................................................................................................................................31
Rail kit components for 2U systems..............................................................................................................................31
Rail kit components for 1U systems..............................................................................................................................32
Install the rails....................................................................................................................................................................33
Secure the rail assemblies to the cabinet....................................................................................................................34
Install the system in the cabinet....................................................................................................................................34
Install the front bezel.......................................................................................................................................................36
Postinstall command...................................................................................................................................................37
Connect and route cords and cables............................................................................................................................37
Node ports....................................................................................................................................................................38
Dell Switch Configuration..........................................................................................................................................39
Chapter 5: Node installation for F210, F710, F910, PA110 nodes...................................................40
## Contents
## Contents3
Page 9 of 63

Drive types..........................................................................................................................................................................40
Unpack and verify components.....................................................................................................................................40
Rail kit components for 2U systems..............................................................................................................................41
Rail kit components for 1U systems..............................................................................................................................41
Rack and rail installation..................................................................................................................................................42
Installing the front bezel..................................................................................................................................................45
Connect and route cords and cables............................................................................................................................45
Node ports....................................................................................................................................................................46
Dell Switch Configuration..........................................................................................................................................47
Chapter 6: Initial system setup and configuration........................................................................48
Configuration requirements ...........................................................................................................................................48
Federal installations..........................................................................................................................................................48
SmartLock compliance mode.........................................................................................................................................48
Connect to the node using a serial cable....................................................................................................................48
Run the configuration wizard.........................................................................................................................................49
Preformat SED Nodes (Optional)............................................................................................................................51
Updating firmware.............................................................................................................................................................51
Licensing and remote support........................................................................................................................................51
Configure the Integrated Dell Remote Access Controller ......................................................................................51
LCD panel............................................................................................................................................................................52
Run HealthCheck .............................................................................................................................................................54
Update the Install Base....................................................................................................................................................55
Where to get help.............................................................................................................................................................55
Additional options for getting help..........................................................................................................................55
## 4
## Contents
Page 10 of 63

Node installation introduction
About PowerScale nodes
Table 1. PowerScale nodes
NodeDescription
A3000A3000 deep chassis nodes:
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
A300A300 standard chassis nodes:
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
H7000A7000 deep chassis nodes:
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
H700H700 standard chassis nodes:
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
F900F900 all-flash nodes:
●Are 2U models that require a minimum cluster size of three
nodes.
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
●Provide fast data access by using direct-attached NVMe
(Non-Volatile Memory Express) SSDs with integrated
parallelism.
F600F600 all-flash nodes:
●Are 1U models that require a minimum cluster size of three
nodes.
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
●Provide fast data access by using direct-attached NVMe
(Non-Volatile Memory Express) SSDs with integrated
parallelism.
F200F200 all-flash nodes:
## 1
Node installation introduction5
Page 11 of 63

Table 1. PowerScale nodes (continued)
NodeDescription
●Are 1U models that require a minimum cluster size of three
nodes.
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
## ●
Support data deduplication.
●Provide fast data access by using direct-attached Serial-
Attached SCSI solid state drives (SAS SSD) with
integrated parallelism.
B100B100 all-flash nodes:
●Are 1U models that can be added to an existing cluster in
single node increments.
●Can be included in a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
●Provide additional compute, memory, and networking
resources to a cluster but do not provide additional
storage.
## ●
Enable 2-way NDMP backup and restore from third-party
fiber channel-attached tape libraries.
P100P100 all-flash nodes:
●Are 1U models that can be added to an existing cluster in
single node increments.
●Can be included in a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
●Provide additional compute, memory, and networking
resources to a cluster but do not provide additional
storage.
F910F910 all-flash nodes:
●Are 2U models that require a minimum cluster size of three
nodes.
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
●Provide fast data access by using direct-attached NVMe
(Non-Volatile Memory Express) SSDs with integrated
parallelism.
F710F710 all-flash nodes:
●Are 1U models that require a minimum cluster size of three
nodes.
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
●The F710 node supports 10 x 2.5-inch NVMe SSD drives.
F210F210 all-flash nodes:
●Are 1U models that require a minimum cluster size of three
nodes.
●Scale to a maximum 252 node cluster.
6Node installation introduction
Page 12 of 63

Table 1. PowerScale nodes (continued)
NodeDescription
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
●The F210 node supports 4 x 2.5-inch NVMe SSD drives.
PA110PA110 accelerator nodes:
●Are 1U models that require a minimum cluster size of three
nodes.
●Scale to a maximum 252 node cluster.
●Supports inline software data compression (3:1 depending
on the workload and the dataset).
●Support data deduplication.
●Are performance and backup accelerators.
Safety instructions
CAUTION: Whenever you need to lift the system, get others to assist you. To avoid injury, do not attempt to lift
the system by yourself.
CAUTION: Ensure that two or more people lift the system horizontally from the box and place it on a flat
surface, rack lift, or into the rails.
WARNING: Opening or removing the system cover while the system is powered on may expose you to a risk of
electric shock.
WARNING: Do not operate the system without the cover for a duration exceeding five minutes. Operating the
system without the system cover can result in component damage.
CAUTION: Many repairs may only be done by a certified service technician. You should only perform
troubleshooting and simple repairs as authorized in your product documentation, or as directed by the online or
telephone service and support team. Damage due to servicing that is not authorized by Dell is not covered by
your warranty. Read and follow the safety instructions that are shipped with your product.
NOTE: It is recommended that you always use an antistatic mat and antistatic strap while working on components inside
the system.
CAUTION: To ensure proper operation and cooling, all system bays and fans must always be populated with a
component or a blank.
NOTE: While replacing the hot swappable PSU, after next server boot, the new PSU automatically updates to the same
firmware and configuration of the replaced one. For updating to the latest firmware and changing the configuration, see the
Lifecycle Controller User's Guide at iDRAC Manuals.
NOTE: While replacing faulty storage controller, FC, or NIC card with the same type of card, after you power on the
system, the new card automatically updates to the same firmware and configuration of the faulty one. For updating to the
latest firmware and changing the configuration, see the
Lifecycle Controller User's Guide at iDRAC Manuals.
CAUTION: Do not install GPUs, network cards, or other PCIe devices on your system that are not validated
and tested by Dell. Damage caused by unauthorized and invalidated hardware installation will null and void the
system warranty.
CAUTION: Do not install network cards, or other PCIe devices on your system that are not validated and tested
by Dell. Damage caused by unauthorized and invalidated hardware installation will null and void the system
warranty.
Node installation introduction7
Page 13 of 63

NOTE: Please wait for 10 minutes between AC cycles (Power off and Power on cycles) for graceful shutdown to occur
when XR4000r and XR4000z chassis has XR4000w installed. This ensures graceful shutdown of underlying hardware and
software components in the system.
CAUTION: It is recommended to always install PowerEdge XE9680 system from bottom of the rack under
24U (42", 106.7cm) to avoid damage. The system is heavy therefore can slide over and cause damage during
installation and removal from a higher position on the rack.
NOTE: Rack Outlet Air flow requires 1200 CFM/Unit for PowerEdge XE9680 system.
NOTE: PowerEdge XE9680 power consumption is 12.5KW and the chassis length is longer than usual servers. Power
consumption and interference need to be considered for deployment of PowerEdge XE9680 system.
NOTE: System with a cold start requirement will require active heating. When the temperature is below 5°C, it will
continue to heat up to below 10°C and stop heating.
NOTE: Only use certified Optical Fiber Transceiver Class I Laser Products.
CAUTION: Lift the system by using the provided lifting handles on chassis and refrain from using clips or other
chassis points to lift the system. Non-designated lift-points on the chassis may cause system damage due to
the inability to support the system weight while lifting.
Before you begin
## WARNING:
Before you begin, read and follow the safety instructions in any Safety, Environmental, and
Regulatory information document shipped with the system.
WARNING: To avoid injury, do not attempt to lift the system by yourself.
WARNING: Do not install A3000, A300, H7000, or H700 nodes with Gen6 nodes into existing Gen6 chassis
installations. The higher powered A3000, A300, H7000, and H700 nodes can cause a fuse to open on the Gen6
chassis midplane, which then requires a chassis replacement. A300, A3000, H700, and H7000 nodes can only be
installed into the chassis they ship in from the factory or a similar chassis.
WARNING: When racking nodes to the rails, ensure that any obstructions to visibility are temporarily removed.
Proper alignment of the node’s rear rail is crucial. Failure to do so may result in equipment damage or personal
injury.
NOTE: The figures in this document do not represent a specific system.
NOTE: The rail kit is compatible with square, unthreaded round, and threaded round hole racks.
NOTE: Before installing a new node, ensure you have the latest Drive Support Package firmware and Node Firmware
Package installed on your cluster.
NOTE: The F210 is node compatible with the F200.
NOTE: The F710 is not node-compatible with the F600. The F710 can be added to an existing cluster by forming a new
node pool, which requires 3x F710 nodes to establish.
8Node installation introduction
Page 14 of 63

Node installation for Archive and Hybrid
nodes
This chapter provides installation instructions for Archive and Hybrid nodes. These nodes are indicated by an A or H, such as
A3000 or H7000.
Drive types
This information applies to nodes that contain any of the following drive types: self-encrypting drives (SEDs), hard disk drives
(HDDs), and solid state drives (SSDs).
If you are performing this procedure with a node containing SSDs, follow the additional steps that are provided in this document
to ensure compatibility with the cluster.
CAUTION: Only install the drives that were shipped with the node. Do not mix drives of different capacities in
your node.
If you remove drive sleds from the chassis during installation, ensure to label the sleds clearly. Replace the
drive sleds in the same sled bay you removed them from. If drive sleds are mixed between nodes, even before
configuration, the system is inoperable.
If you are working with a node containing SEDs, the node might take up to two hours longer to join the cluster than a node with
standard drives. Do not power off the node during the join process.
Unpack and verify components
Before you install any equipment, inspect it to ensure that no damage occurred during transit.
Remove all components from the shipping package and inspect the components for any sign of damage. Do not use a damaged
component.
## CAUTION:
To avoid personal injury or damage to the hardware, always use multiple people or a lift to lift and
move heavy equipment.
Installation types
You may be able to skip certain sections based on the type of installation you are performing.
New cluster
If you are installing a new cluster, follow every step. Repeat the procedure for each chassis that you install.
If you are installing a new cluster with more than 22 nodes, or if you are growing an existing cluster to include more than 22
nodes, see the
PowerScale Site Preparation and Planning Guide for information about the Leaf-Spine network topology.
New chassis
If you are adding a new Generation 6 chassis to an existing cluster, follow every step.
## 2
Node installation for Archive and Hybrid nodes9
Page 15 of 63

New node pair
If you are installing a new node pair in an existing chassis, you can skip the steps that describe how to install rails and a chassis.
Install the chassis rails
Install the adjustable chassis rails in the rack.
You can install your chassis in standard ANSI/EIA RS310D 19-inch rack systems, including all Dell EMC racks. The rail kit is
compatible with rack cabinets with the following hole types:
●3/8-inch square holes
●9/32-inch round holes
●10-32, 12-24, M5X.8, or M6X1 prethreaded holes
The rails adjust in length from 24 to 36 inches to accommodate various cabinet depths. The rails are not left-specific or
right-specific and can be installed on either side of the rack.
NOTE: Check the depth of the racks to ensure that they fit the depth of the chassis being installed. The PowerScale Site
Preparation and Planning Guide provides details.
The two rails are packaged separately inside the chassis shipping container.
1.Separate a rail into front and back pieces.
Pull up on the locking tab, and slide the two sections of the rail apart.
2.Remove the mounting screws from the back section of the rail.
The back section is the thinner of the two rail sections. There are three mounting screws that are attached to the back
bracket. There are also two smaller alignment screws. Do not uninstall the alignment screws.
## 10
Node installation for Archive and Hybrid nodes
Page 16 of 63

3.Attach the back section of the rail to the rack with the three mounting screws.
Ensure that the locking tab is on the outside of the rail.
4.Remove the mounting screws from the front section of the rail.
The front section is the wider of the two rail sections. There are three mounting screws that are attached to the front
bracket. There are also two smaller alignment screws. Do not uninstall the alignment screws.
5.Slide the front section of the rail onto the back section that is secured to the rack.
Node installation for Archive and Hybrid nodes
## 11
Page 17 of 63

6.Adjust the rail until you can insert the alignment screws on the front bracket into the rack.
7.Attach the front section of the rail to the rack with only two of the mounting screws.
Attach the mounting screws in the holes between the top and bottom alignment screws. You will install mounting screws in
the top and bottom holes after the chassis is installed, to secure the chassis to the rack.
8.Repeat these steps to install the second rail in the rack.
Install the chassis
Slide the chassis onto the installed rails and secure the chassis to the rack.
## WARNING:
A chassis that contains drives and nodes can weigh up to 285 pounds. You should attach the chassis
to a lift to install it in a rack. If a lift is not available, you must remove all drive sleds and nodes from the chassis
before you attempt to lift it. Even when the chassis is empty, only attempt to lift and install the chassis with
multiple people.
CAUTION: If you remove drive sleds from the chassis during installation, ensure to label the sleds clearly. You
must replace the drive sleds in the same sled bay you removed them from. If drive sleds are mixed between
nodes, even before configuration, the system becomes inoperable.
1.Align the chassis with the rails that are attached to the rack.
2.Slide the first few inches of the back of the chassis onto the supporting ledge of the rails.
## 12
Node installation for Archive and Hybrid nodes
Page 18 of 63

3.Release the lift casters and carefully slide the chassis into the cabinet as far as the lift allows.
4.Secure the lift casters on the floor.
5.Carefully push the chassis off the lift arms and into the rack.
CAUTION: Ensure to leave the lift under the chassis until the chassis is safely balanced and secured within
the cabinet.
6.Install two mounting screws at the top and bottom of each rail to secure the chassis to the rack.
7.If you removed the drives and nodes before installing the chassis, reinstall them now.
Install compute modules and drive sleds
Follow these steps if you are installing a new node pair into an existing chassis, or if it is necessary to remove compute modules
and drive sleds to safely install the chassis in the rack.
## CAUTION:
Remember that you must install drive sleds with the compute module they were packaged with on
arrival to the site. If you removed the compute nodes and drive sleds to rack the chassis, you must replace
them in the same bays from which you removed them. If drive sleds are mixed between nodes, even before
configuration, the system is inoperable.
If all compute nodes and drive sleds are already installed in the chassis, you can skip these steps.
1.At the back of the chassis, locate the empty node bay where you install the node.
2.Pull the release lever away from the node.
Keep the lever in the open position until the node is pushed all the way into the node bay.
3.Slide the node into the node bay.
## NOTE:
Support the compute node with both hands until it is fully inserted in the drive bay.
Node installation for Archive and Hybrid nodes13
Page 19 of 63

4.Push the release lever in against the node back panel.
You can feel the lever pull the node into place in the bay. If you do not feel the lever pull the node into the bay, pull the lever
back into the open position. Ensure that the node is pushed all the way into the node bay and push the lever in against the
node again.
5.Tighten the thumbscrew on the release lever to secure the lever in place. The node automatically powers up when you insert
it into the bay.
6.At the front of the chassis, locate the empty drive sled bays where you install the drive sleds that correspond to the
compute module you installed.
7.Ensure the drive sled handle is open before inserting the drive sled.
8.With two hands, slide the drive sled into the sled bay.
9.Push the drive sled handle back into the face of the sled to secure the drive sled in the bay.
## 2
## 1
10.Repeat the previous steps to install all drive sleds for the corresponding compute module.
11.Repeat all these steps to install other nodes.
## 14
Node installation for Archive and Hybrid nodes
Page 20 of 63

Back panel
The back panel provides connections for power, network access, and serial communication, as well as access to the power
supplies and cache SSDs.
## PORT 2
slot 0slot 1
## PORT 1
## PORT 1
## PORT 1
## PORT 1
## PORT 2
## PORT 2
## PORT 2
## 1
## 4
## 5
## 6
## 78
## 9
## 10
## 23
## CL6091
- 1 GbE management and SSH port6. Multifunction button
- Internal network ports7. Power supply
- External network ports8. Cache SSDs
- Console connector9. USB connector
- Do Not Remove LED.10. HDMI debugging port
NOTE: 1 GbE management interface on Generation 6 hardware is designed to handle SSH traffic only.
CAUTION: Only trained support personnel should connect to the node with the USB or HDMI debugging ports.
For direct access to the node, connect to the console connector.
CAUTION: Do not connect mobile devices to the USB connector for charging.
Multifunction button
You can perform two different functions with the multifunction button. With a short press of the button, you can begin a stack
dump. With a long press of the button, you can force the node to power off.
## NOTE:
Power off nodes from the OneFS command line. Only power off a node with the multifunction button if the node
does not respond to the OneFS command.
Supported switches
Switches ship with the proper rails or tray to install the switch in the rack.
These internal network switches ship with rails to install the switch. The switch rails are adjustable to fit NEMA front rail to rear
rail spacing ranging from 22 in. to 34 in. See Dell PowerSwitch specifications:
●Dell PowerSwitch S4100-ON
Node installation for Archive and Hybrid nodes
## 15
Page 21 of 63

●Dell PowerSwitch S5232-ON
●Dell PowerSwitch Z9264-ON
●Dell PowerSwitch Z9664F-ON
Table 2. Arista 7308X3 Chassis Switch
SwitchMaximum
number of
connections
NetworkDescription
## Arista
## 7308X3
## 7300X3-32C
## (32 100 Gb
ports) and
## 7300X3-48YC4
## (48 25 Gb
ports) line cards
252x100 GbE, 252x10/25GbEThe Arista 7308X3 switch is a modular system that can scale up
to 8 slots with a choice of 10/25 GbE and 100 GbE line cards.
Table 3. Z9664F-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescription
## Z9664F-
## ON
252-port64 ports of 400 GbE in
QSFP56-DD form factor or
252 ports of 100 GbE in a
2RU design, and can be used
as a 10/25/40/50/100/200
switch for a maximum of 252
ports (with breakout cables).
The Z9664F-ON is a fixed 2RU aggregation switch. Breakout
cables are only used in the odd-numbered ports. Using one in an
odd-numbered port disables the corresponding even-numbered
port. For example, you can use 10 GbE or 25 GbE = 128 (32x 4:1
breakouts). You can then mix and match by removing 2x 40 GbE
or 100 GbE and adding 4x 10 GbE or 25 GbE, and conversely.
Table 4. Z9264F-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescription
## Z9264F-
## ON
128-port64x100 GbE, 64x40 GbE,
128x10 GbE, 128 x 25 GbE
(with breakout cables)
The Z9264F-ON is a fixed 2U Ethernet switch. The Z9264-F
provides either 64 ports of 100 GbE or 40 GbE in QSFP28 or
128 ports of 25 GbE or 10 GbE by breakout. Breakout cables
are only used in the odd-numbered ports. Using one in an odd-
numbered port disables the corresponding even-numbered port.
For example, you can use 10 GbE or 25 GbE = 128 (32x 4:1
breakouts). You can then mix and match by removing 2x 40 GbE
or 100 GbE and adding 4x 10 GbE or 25 GbE, and conversely.
Table 5. Z9100-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescription
## Z9100-
## ON
128-port32x100 GbE, 32x40 GbE,
128x10 GbE, 128 x 25 GbE
The Z9100-ON fixed 1U Ethernet switch can accommodate high
port density (lower and upper RUs). The switch accommodates
multiple interface types (32 ports of 100 GbE, 40 GbE in
QSFP28,128 ports of 25 GbE, or 10 GbE with breakout).
NOTE: The Z9100-ON switch is at end of life.
Table 6. S5232-ON Ethernet Switch
## Switc
h
## Maximum
number of
connections
NetworkDescription
S5232128-port32x100 GbE, 32x40 GbE, 128x10 GbE (with breakout
cables), 128 x 25 GbE (with breakout cables)
Only 124 10/25 GE nodes can be
supported on the S5232 through
breakout.
16Node installation for Archive and Hybrid nodes
Page 22 of 63

Table 7. S4148F-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescriptions
S4148F-ON48-port2x40 GbE 48x10 GbEThe S4148F-ON is the next-generation family of 10 GbE (48
ports) top-of-rack, aggregation-switch, or router products that
aggregate 10 GbE server or storage devices. The switch
provides multi speed uplinks for maximum flexibility and simple
management.
NOTE: The S4148F-ON switch is at end of life.
Table 8. S4112F-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescription
## S4112F-
## ON
12-port3x100 GbE (with breakout, connect
12x10 GbE nodes using the 3x100 GbE
ports) 12 x10 GbE.
The S4112F-ON supports 10/100 GbE with 12 fixed
SFP+ ports to implement 10 GbE and three fixed
QSFP28 ports to implement 4x10 or 4x25 using
breakout. A total of 24 10 GbE connections, including
the three fixed QSFP28 ports using 4x10 breakout
cables.
Table 9. InfiniBand Switches
SwitchPortsNetwork
NVIDIA Neptune MSX679036-portQDR InfiniBand
NVIDIA Scorpion 2 MSB7890-ES2F36-portEDR (supports QDR)InfiniBand
NVIDIA QM8790 (Quantum)40-portHDR
Attaching network and power cables
Network and power cables must be attached to ensure redundant power and network connections and dressed to allow for
future maintenance in.
The following image shows you how to attach your internal network and power cables for a node pair. Both node pairs in a
chassis must be cabled in the same way.
## PORT 2
## PORT 1
## PORT 1PORT 1
## PORT 2
## PORT 2PORT 2
- To internal network switch 2
- To internal network switch 1
- To PDU 14. To PDU 2
Node installation for Archive and Hybrid nodes17
Page 23 of 63

Work with the site manager to determine external network connections and bundle additional network cables with the internal
network cables from the same node pair.
Keep future maintenance in mind as you dress the network and power cables. Cables must be dressed loosely enough to allow
you to:
●Remove any of the four compute nodes from the back of the Generation 6 chassis.
●Remove power supplies from the back of compute nodes.
To avoid dense bundles of cables, dress the cables from the node pairs to either side of the rack. For example, dress the cables
from nodes 1 and 2 toward the lower right corner of the chassis, and dress the cables from nodes 3 and 4 toward the lower left
corner of the chassis.
Wrap network cables and power cables into two separate bundles to avoid EMI (electromagnetic interference) issues. Ensure
that both bundles shift together away from components to be removed during maintenance, such as compute nodes and power
supplies.
Front panel LCD menu
You can perform certain actions and check a node's status from the LCD menu on the front panel of the node.
LCD Interface
The LCD interface is on the node front panel. The interface consists of the LCD screen, a round button labeled ENTER for
making selections, and four arrow buttons for navigating menus.
There are also four LEDs across the bottom of the interface that indicate which node you are communicating with. You can
change which node you are communicating with the arrow buttons.
The LCD screen is dark until you activate it. To activate the LCD screen and view the menu, press the square selection button.
Press the right arrow button to move to the next level of a menu.
Attach menu
The Attach menu contains the following sub-menu:
## Drive
Adds a drive to the node. After you select this command, you can select the drive bay that contains
the drive you would like to add.
Status menu
The Status menu contains the following sub-menus:
## Alerts
Displays the number of critical, warning, and informational alerts that are active on the cluster.
ClusterThe Cluster menu contains the following sub-menus:
DetailsDisplays the cluster name, the version of OneFS installed on the cluster, the
health status of the cluster, and the number of nodes in the cluster.
CapacityDisplays the total capacity of the cluster and the percentage of used and
available space on the cluster.
ThroughputDisplays throughput numbers for the cluster as <in> | <out> |
## <total>.
NodeThe Node menu contains the following sub-menus:
DetailsDisplays the node ID, the node serial number, the health status of the node,
and the node uptime as <days>, <hours>:<minutes>:<seconds>
CapacityDisplays the total capacity of the node and the percentage of used and
available space on the node.
18Node installation for Archive and Hybrid nodes
Page 24 of 63

NetworkDisplays the IP and MAC addresses for the node.
ThroughputDisplays throughput numbers for the node as <in> | <out> |
## <total>.
Disk/CPUDisplays the current access status of the node, either Read-Write or Read-
Only. Also displays the current CPU throttling status, either Unthrottled or
## Throttled.
## Drives
●Displays the status of each drive bay in the node.
●You can browse through all the drives in the node with the right and left navigation buttons.
●You can view the drives in other nodes in the cluster with the up and down navigation buttons. The
node you are viewing will display above the drive grid as Drives on node:<node number>.
HardwareDisplays the current hardware status of the node as <cluster name>-<node
number>:<status>.
StatisticsDisplays a list of hardware components. Select one of the hardware
components to view statistics related to that component.
Update menu
The Update menu allows you to update OneFS on the node. Press the selection button to confirm that you would like to update
the node. You can press the left navigation button to back out of this menu without updating.
Service menu
The Service menu contains the following sub-menus:
## Throttle
●Displays the percentage at which the CPU is currently running.
●Press the selection button to throttle the CPU speed.
## Unthrottle
●Displays the percentage at which the CPU is currently running.
●Press the selection button to set CPU speed to 100%.
Read-OnlyPress the selection button to set node access to read-only.
Read-WritePress the selection button to set node access to read-write.
UnitLED OnPress the selection button to turn on the unit LED.
UnitLED OffPress the selection button to turn off the unit LED.
Shutdown menu
The Shutdown menu allows you to shut down or reboot the node. This menu also allows you to shut down or reboot the entire
cluster. Press the up or down navigation button to cycle through the four shutdown and reboot options, or to cancel out of the
menu.
Press the selection button to confirm the command. You can press the left navigation button to back out of this menu without
shutting down or rebooting.
Node installation for Archive and Hybrid nodes
## 19
Page 25 of 63

Node installation for A310, A3100, H710,
H7100 nodes
Drive types
This information applies to nodes that contain any of the following drive types: self-encrypting drives (SEDs), hard disk drives
(HDDs), and solid state drives (SSDs).
If you are performing this procedure with a node containing SSDs, follow the additional steps that are provided in this document
to ensure compatibility with the cluster.
CAUTION: Only install the drives that were shipped with the node. Do not mix drives of different capacities in
your node.
If you remove drive sleds from the chassis during installation, ensure to label the sleds clearly. Replace the
drive sleds in the same sled bay you removed them from. If drive sleds are mixed between nodes, even before
configuration, the system is inoperable.
If you are working with a node containing SEDs, the node might take up to two hours longer to join the cluster than a node with
standard drives. Do not power off the node during the join process.
Unpack and verify components
Before you install any equipment, inspect it to ensure that no damage occurred during transit.
Remove all components from the shipping package and inspect the components for any sign of damage. Do not use a damaged
component.
## CAUTION:
To avoid personal injury or damage to the hardware, always use multiple people or a lift to lift and
move heavy equipment.
Installation types
You may be able to skip certain sections based on the type of installation you are performing.
New cluster
If you are installing a new cluster, follow every step. Repeat the procedure for each chassis that you install.
If you are installing a new cluster with more than 22 nodes, or if you are growing an existing cluster to include more than 22
nodes, see the
PowerScale Site Preparation and Planning Guide for information about the Leaf-Spine network topology.
New chassis
If you are adding a new Generation 6 chassis to an existing cluster, follow every step.
New node pair
If you are installing a new node pair in an existing chassis, you can skip the steps that describe how to install rails and a chassis.
## 3
20Node installation for A310, A3100, H710, H7100 nodes
Page 26 of 63

Install the chassis rails
Install the adjustable chassis rails in the rack.
You can install your chassis in standard ANSI/EIA RS310D 19-inch rack systems, including all Dell EMC racks. The rail kit is
compatible with rack cabinets with the following hole types:
## ●
3/8-inch square holes
●9/32-inch round holes
●10-32, 12-24, M5X.8, or M6X1 prethreaded holes
The rails adjust in length from 24 to 36 inches to accommodate various cabinet depths. The rails are not left-specific or
right-specific and can be installed on either side of the rack.
NOTE: Check the depth of the racks to ensure that they fit the depth of the chassis being installed. The PowerScale Site
Preparation and Planning Guide provides details.
The two rails are packaged separately inside the chassis shipping container.
1.Separate a rail into front and back pieces.
Pull up on the locking tab, and slide the two sections of the rail apart.
2.Remove the mounting screws from the back section of the rail.
The back section is the thinner of the two rail sections. There are three mounting screws that are attached to the back
bracket. There are also two smaller alignment screws. Do not uninstall the alignment screws.
Node installation for A310, A3100, H710, H7100 nodes
## 21
Page 27 of 63

3.Attach the back section of the rail to the rack with the three mounting screws.
Ensure that the locking tab is on the outside of the rail.
4.Remove the mounting screws from the front section of the rail.
The front section is the wider of the two rail sections. There are three mounting screws that are attached to the front
bracket. There are also two smaller alignment screws. Do not uninstall the alignment screws.
5.Slide the front section of the rail onto the back section that is secured to the rack.
## 22
Node installation for A310, A3100, H710, H7100 nodes
Page 28 of 63

6.Adjust the rail until you can insert the alignment screws on the front bracket into the rack.
7.Attach the front section of the rail to the rack with only two of the mounting screws.
Attach the mounting screws in the holes between the top and bottom alignment screws. You will install mounting screws in
the top and bottom holes after the chassis is installed, to secure the chassis to the rack.
8.Repeat these steps to install the second rail in the rack.
Install the chassis
Slide the chassis onto the installed rails and secure the chassis to the rack.
## WARNING:
A chassis that contains drives and nodes can weigh up to 285 pounds. You should attach the chassis
to a lift to install it in a rack. If a lift is not available, you must remove all drive sleds and nodes from the chassis
before you attempt to lift it. Even when the chassis is empty, only attempt to lift and install the chassis with
multiple people.
CAUTION: If you remove drive sleds from the chassis during installation, ensure to label the sleds clearly. You
must replace the drive sleds in the same sled bay you removed them from. If drive sleds are mixed between
nodes, even before configuration, the system becomes inoperable.
1.Align the chassis with the rails that are attached to the rack.
2.Slide the first few inches of the back of the chassis onto the supporting ledge of the rails.
Node installation for A310, A3100, H710, H7100 nodes
## 23
Page 29 of 63

3.Release the lift casters and carefully slide the chassis into the cabinet as far as the lift allows.
4.Secure the lift casters on the floor.
5.Carefully push the chassis off the lift arms and into the rack.
CAUTION: Ensure to leave the lift under the chassis until the chassis is safely balanced and secured within
the cabinet.
6.Install two mounting screws at the top and bottom of each rail to secure the chassis to the rack.
7.If you removed the drives and nodes before installing the chassis, reinstall them now.
Install compute modules and drive sleds
Follow these steps if you are installing a new node pair into an existing chassis, or if it is necessary to remove compute modules
and drive sleds to safely install the chassis in the rack.
## CAUTION:
Remember that you must install drive sleds with the compute module they were packaged with on
arrival to the site. If you removed the compute nodes and drive sleds to rack the chassis, you must replace
them in the same bays from which you removed them. If drive sleds are mixed between nodes, even before
configuration, the system is inoperable.
If all compute nodes and drive sleds are already installed in the chassis, you can skip these steps.
1.At the back of the chassis, locate the empty node bay where you install the node.
2.Pull the release lever away from the node.
Keep the lever in the open position until the node is pushed all the way into the node bay.
3.Slide the node into the node bay.
## NOTE:
Support the compute node with both hands until it is fully inserted in the drive bay.
24Node installation for A310, A3100, H710, H7100 nodes
Page 30 of 63

4.Push the release lever in against the node back panel.
You can feel the lever pull the node into place in the bay. If you do not feel the lever pull the node into the bay, pull the lever
back into the open position. Ensure that the node is pushed all the way into the node bay and push the lever in against the
node again.
5.Tighten the thumbscrew on the release lever to secure the lever in place. The node automatically powers up when you insert
it into the bay.
6.At the front of the chassis, locate the empty drive sled bays where you install the drive sleds that correspond to the
compute module you installed.
7.Ensure the drive sled handle is open before inserting the drive sled.
8.With two hands, slide the drive sled into the sled bay.
9.Push the drive sled handle back into the face of the sled to secure the drive sled in the bay.
## 2
## 1
10.Repeat the previous steps to install all drive sleds for the corresponding compute module.
11.Repeat all these steps to install other nodes.
Node installation for A310, A3100, H710, H7100 nodes
## 25
Page 31 of 63

Back panel
The back panel provides connections for power, network access, and serial communication, as well as access to the power
supplies and cache SSDs.
## PORT 2
slot 0slot 1
## PORT 1
## PORT 1
## PORT 1
## PORT 1
## PORT 2
## PORT 2
## PORT 2
## 1
## 4
## 5
## 6
## 78
## 9
## 10
## 23
## CL6091
- 1 GbE management and SSH port6. Multifunction button
- Internal network ports7. Power supply
- External network ports8. Cache SSDs
- Console connector9. USB connector
- Do Not Remove LED.10. HDMI debugging port
NOTE: 1 GbE management interface on Generation 6 hardware is designed to handle SSH traffic only.
CAUTION: Only trained support personnel should connect to the node with the USB or HDMI debugging ports.
For direct access to the node, connect to the console connector.
CAUTION: Do not connect mobile devices to the USB connector for charging.
Multifunction button
You can perform two different functions with the multifunction button. With a short press of the button, you can begin a stack
dump. With a long press of the button, you can force the node to power off.
## NOTE:
Power off nodes from the OneFS command line. Only power off a node with the multifunction button if the node
does not respond to the OneFS command.
Supported switches
Switches ship with the proper rails or tray to install the switch in the rack.
These internal network switches ship with rails to install the switch. The switch rails are adjustable to fit NEMA front rail to rear
rail spacing ranging from 22 in. to 34 in. See Dell PowerSwitch specifications:
●Dell PowerSwitch S4100-ON
## 26
Node installation for A310, A3100, H710, H7100 nodes
Page 32 of 63

●Dell PowerSwitch S5232-ON
●Dell PowerSwitch Z9264-ON
●Dell PowerSwitch Z9664F-ON
Table 10. Arista 7308X3 Chassis Switch
SwitchMaximum
number of
connections
NetworkDescription
## Arista
## 7308X3
## 7300X3-32C
## (32 100 Gb
ports) and
## 7300X3-48YC4
## (48 25 Gb
ports) line cards
252x100 GbE, 252x10/25GbEThe Arista 7308X3 switch is a modular system that can scale up
to 8 slots with a choice of 10/25 GbE and 100 GbE line cards.
Table 11. Z9664F-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescription
## Z9664F-
## ON
252-port64 ports of 400 GbE in
QSFP56-DD form factor or
252 ports of 100 GbE in a
2RU design, and can be used
as a 10/25/40/50/100/200
switch for a maximum of 252
ports (with breakout cables).
The Z9664F-ON is a fixed 2RU aggregation switch. Breakout
cables are only used in the odd-numbered ports. Using one in an
odd-numbered port disables the corresponding even-numbered
port. For example, you can use 10 GbE or 25 GbE = 128 (32x 4:1
breakouts). You can then mix and match by removing 2x 40 GbE
or 100 GbE and adding 4x 10 GbE or 25 GbE, and conversely.
Table 12. Z9264F-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescription
## Z9264F-
## ON
128-port64x100 GbE, 64x40 GbE,
128x10 GbE, 128 x 25 GbE
(with breakout cables)
The Z9264F-ON is a fixed 2U Ethernet switch. The Z9264-F
provides either 64 ports of 100 GbE or 40 GbE in QSFP28 or
128 ports of 25 GbE or 10 GbE by breakout. Breakout cables
are only used in the odd-numbered ports. Using one in an odd-
numbered port disables the corresponding even-numbered port.
For example, you can use 10 GbE or 25 GbE = 128 (32x 4:1
breakouts). You can then mix and match by removing 2x 40 GbE
or 100 GbE and adding 4x 10 GbE or 25 GbE, and conversely.
Table 13. Z9100-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescription
## Z9100-
## ON
128-port32x100 GbE, 32x40 GbE,
128x10 GbE, 128 x 25 GbE
The Z9100-ON fixed 1U Ethernet switch can accommodate high
port density (lower and upper RUs). The switch accommodates
multiple interface types (32 ports of 100 GbE, 40 GbE in
QSFP28,128 ports of 25 GbE, or 10 GbE with breakout).
NOTE: The Z9100-ON switch is at end of life.
Table 14. S5232-ON Ethernet Switch
## Switc
h
## Maximum
number of
connections
NetworkDescription
S5232128-port32x100 GbE, 32x40 GbE, 128x10 GbE (with breakout
cables), 128 x 25 GbE (with breakout cables)
Only 124 10/25 GE nodes can be
supported on the S5232 through
breakout.
Node installation for A310, A3100, H710, H7100 nodes27
Page 33 of 63

Table 15. S4148F-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescriptions
S4148F-ON48-port2x40 GbE 48x10 GbEThe S4148F-ON is the next-generation family of 10 GbE (48
ports) top-of-rack, aggregation-switch, or router products that
aggregate 10 GbE server or storage devices. The switch
provides multi speed uplinks for maximum flexibility and simple
management.
NOTE: The S4148F-ON switch is at end of life.
Table 16. S4112F-ON Ethernet Switch
SwitchMaximum
number of
connections
NetworkDescription
## S4112F-
## ON
12-port3x100 GbE (with breakout, connect
12x10 GbE nodes using the 3x100 GbE
ports) 12 x10 GbE.
The S4112F-ON supports 10/100 GbE with 12 fixed
SFP+ ports to implement 10 GbE and three fixed
QSFP28 ports to implement 4x10 or 4x25 using
breakout. A total of 24 10 GbE connections, including
the three fixed QSFP28 ports using 4x10 breakout
cables.
Table 17. InfiniBand Switches
SwitchPortsNetwork
NVIDIA Neptune MSX679036-portQDR InfiniBand
NVIDIA Scorpion 2 MSB7890-ES2F36-portEDR (supports QDR)InfiniBand
NVIDIA QM8790 (Quantum)40-portHDR
Attaching network and power cables
Network and power cables must be attached to ensure redundant power and network connections and dressed to allow for
future maintenance in.
The following image shows you how to attach your internal network and power cables for a node pair. Both node pairs in a
chassis must be cabled in the same way.
## PORT 2
## PORT 1
## PORT 1PORT 1
## PORT 2
## PORT 2PORT 2
- To internal network switch 2
- To internal network switch 1
- To PDU 14. To PDU 2
28Node installation for A310, A3100, H710, H7100 nodes
Page 34 of 63

Work with the site manager to determine external network connections and bundle additional network cables with the internal
network cables from the same node pair.
Keep future maintenance in mind as you dress the network and power cables. Cables must be dressed loosely enough to allow
you to:
●Remove any of the four compute nodes from the back of the Generation 6 chassis.
●Remove power supplies from the back of compute nodes.
To avoid dense bundles of cables, dress the cables from the node pairs to either side of the rack. For example, dress the cables
from nodes 1 and 2 toward the lower right corner of the chassis, and dress the cables from nodes 3 and 4 toward the lower left
corner of the chassis.
Wrap network cables and power cables into two separate bundles to avoid EMI (electromagnetic interference) issues. Ensure
that both bundles shift together away from components to be removed during maintenance, such as compute nodes and power
supplies.
Front panel LCD menu
You can perform certain actions and check a node's status from the LCD menu on the front panel of the node.
LCD Interface
The LCD interface is on the node front panel. The interface consists of the LCD screen, a round button labeled ENTER for
making selections, and four arrow buttons for navigating menus.
There are also four LEDs across the bottom of the interface that indicate which node you are communicating with. You can
change which node you are communicating with the arrow buttons.
The LCD screen is dark until you activate it. To activate the LCD screen and view the menu, press the square selection button.
Press the right arrow button to move to the next level of a menu.
Attach menu
The Attach menu contains the following sub-menu:
## Drive
Adds a drive to the node. After you select this command, you can select the drive bay that contains
the drive you would like to add.
Status menu
The Status menu contains the following sub-menus:
## Alerts
Displays the number of critical, warning, and informational alerts that are active on the cluster.
ClusterThe Cluster menu contains the following sub-menus:
DetailsDisplays the cluster name, the version of OneFS installed on the cluster, the
health status of the cluster, and the number of nodes in the cluster.
CapacityDisplays the total capacity of the cluster and the percentage of used and
available space on the cluster.
ThroughputDisplays throughput numbers for the cluster as <in> | <out> |
## <total>.
NodeThe Node menu contains the following sub-menus:
DetailsDisplays the node ID, the node serial number, the health status of the node,
and the node uptime as <days>, <hours>:<minutes>:<seconds>
CapacityDisplays the total capacity of the node and the percentage of used and
available space on the node.
Node installation for A310, A3100, H710, H7100 nodes29
Page 35 of 63

NetworkDisplays the IP and MAC addresses for the node.
ThroughputDisplays throughput numbers for the node as <in> | <out> |
## <total>.
Disk/CPUDisplays the current access status of the node, either Read-Write or Read-
Only. Also displays the current CPU throttling status, either Unthrottled or
## Throttled.
## Drives
●Displays the status of each drive bay in the node.
●You can browse through all the drives in the node with the right and left navigation buttons.
●You can view the drives in other nodes in the cluster with the up and down navigation buttons. The
node you are viewing will display above the drive grid as Drives on node:<node number>.
HardwareDisplays the current hardware status of the node as <cluster name>-<node
number>:<status>.
StatisticsDisplays a list of hardware components. Select one of the hardware
components to view statistics related to that component.
Update menu
The Update menu allows you to update OneFS on the node. Press the selection button to confirm that you would like to update
the node. You can press the left navigation button to back out of this menu without updating.
Service menu
The Service menu contains the following sub-menus:
## Throttle
●Displays the percentage at which the CPU is currently running.
●Press the selection button to throttle the CPU speed.
## Unthrottle
●Displays the percentage at which the CPU is currently running.
●Press the selection button to set CPU speed to 100%.
Read-OnlyPress the selection button to set node access to read-only.
Read-WritePress the selection button to set node access to read-write.
UnitLED OnPress the selection button to turn on the unit LED.
UnitLED OffPress the selection button to turn off the unit LED.
Shutdown menu
The Shutdown menu allows you to shut down or reboot the node. This menu also allows you to shut down or reboot the entire
cluster. Press the up or down navigation button to cycle through the four shutdown and reboot options, or to cancel out of the
menu.
Press the selection button to confirm the command. You can press the left navigation button to back out of this menu without
shutting down or rebooting.
## 30
Node installation for A310, A3100, H710, H7100 nodes
Page 36 of 63

Node installation for F200, F600, F900,
B100, and P100 nodes
This chapter describes how to install nodes into a system bay.
Drive types
This information applies to nodes that contain NVME or SAS drives and use Instant Secure Erase (ISE) or self-encrypting drives
(SED) Non-FIPS or FIPS as their security method.
CAUTION: Only install the drives that were shipped with the node. Do not mix drives of different capacities in
the node. If you remove drive carriers from the chassis during installation, ensure that the carriers are labeled
clearly. Replace the drive carriers in the same bay from which they were removed. If drive carriers are mixed
between nodes, even before configuration, the system is inoperable.
Do not power off the node during the join process.
Unpack and verify components
Before you install any equipment, inspect it to ensure that no damage occurred during transit.
Remove all components from the shipping package and inspect the components for any sign of damage. Do not use a damaged
component.
## CAUTION:
To avoid personal injury or damage to the hardware, always use multiple people or a lift to lift and
move heavy equipment.
Rail kit components for 2U systems
The sliding rail assemblies are used to secure the node in the cabinet and extend it from the cabinet so that the system cover
can be removed to access the internal FRUs. The sliding rail assembly (2U) is used for installation of the F900 nodes.
## 4
Node installation for F200, F600, F900, B100, and P100 nodes31
Page 37 of 63

Figure 1. Sliding rail assembly - 2U systems
Rail kit components for 1U systems
The sliding rail assemblies are used to secure the node in the cabinet and extended from the cabinet so that the system cover
can be removed to access the internal FRUs. The sliding rail assembly (1U) is used for installation of the F200, F600, B100, and
P100 nodes.
Figure 2. Sliding rail assembly - 1U systems
- sliding rail (2)
- velcro strap (2)
- screw (4)
- washer (4)
## 32
Node installation for F200, F600, F900, B100, and P100 nodes
Page 38 of 63

Install the rails
The rails are labeled left and right and cannot be interchanged. The front side of each rail is labeled Left Front or Right Front
when viewed from the cabinet front.
1.Determine where to mount the system and use masking tape or a felt-tip pen to mark the location at the front and back of
the cabinet.
NOTE: Install the left rail assembly first.
2.Fully extend the rear sliding bracket of the rail.
3.Position the rail end piece that is labeled Left Front facing inward and orient the rear end piece to align with the holes on
the rear cabinet flanges.
4.Push the rail straight toward the rear of the rack until the latch locks in place.
Figure 3. Installing the rear end of the rail
5.Rotate the front-end piece latch outward. Pull the rail forward until the pins slide into the flange. Release the latch to secure
the rail in place.
Figure 4. Installing the front end of the rail
6.Repeat the preceding steps to install the right rail assembly.
Node installation for F200, F600, F900, B100, and P100 nodes
## 33
Page 39 of 63

Secure the rail assemblies to the cabinet
The supplied screws and washers are used to secure the rail assemblies to the front and rear of the cabinet.
NOTE: For square hole cabinets, install the supplied conical washer before installing the screw. For unthreaded round hole
cabinets, install only the screw without the conical washer.
1.Align the screws with the designated U spaces on the front and rear rack flanges.
Ensure that the screw holes on the tab of the system retention bracket are seated on the designated U spaces.
2.Insert and tighten the two screws using the Phillips #2 screwdriver.
Figure 5. Installing screws
Install the system in the cabinet
This procedure is used to install the system in the cabinet.
Follow all safety guidelines.
## CAUTION:
The system is heavy. To avoid personal injury or damage to the equipment, do not attempt to install
the system in a cabinet without a mechanical lift or help from another person.
1.At the front of the cabinet, pull the inner slide rails out of the rack until they lock into place.
## 34
Node installation for F200, F600, F900, B100, and P100 nodes
Page 40 of 63

Figure 6. Extend the rails from the cabinet
2.Locate the rear rail standoff on each side of the system. Position the system above the rails and lower the rear rail standoffs
into the rear J-slots on the slide assemblies.
3.Rotate the system downward until all the rail standoffs are seated in the J-slots.
Figure 7. Install the system in the rails
4.Push the system inward until the lock levers click into place.
5.Pull the blue slide release lock tabs forward on both rails and slide the system into the cabinet. The slam latches engage to
secure the system in the cabinet.
## NOTE:
Ensure that the inner rail slides completely into the middle rail. The middle rail locks if the inner rail is not fully
engaged.
Node installation for F200, F600, F900, B100, and P100 nodes35
Page 41 of 63

Figure 8. Slide the system into the cabinet
Install the front bezel
The procedure to install the front bezel with the LCD panel.
1.Align and insert the right end of the bezel onto the system.
2.Press the release button and fit the left end of the bezel onto the system.
3.Lock the bezel by using the key.
## 36
Node installation for F200, F600, F900, B100, and P100 nodes
Page 42 of 63

Figure 9. Installing the front bezel on 2U system
Postinstall command
Run isi devices drive list to confirm that the drive state is healthy.
●If drive state is healthy, proceed.
●If drive state is used, format the replaced drive.
Argument :isi devices drive format <bay> Ex.If you replaced location Bay A0 # isi
devices drive format A0
You are about to format drive bayA0, on node lnn 4.
Are you sure? (yes/[no]):
issue "yes".
Connect and route cords and cables
1.Connect the power cables and I/O cables as described in the documentation for your system.
2.If the system uses a cable management arm (CMA), install it as described in the document that is shipped with the CMA.
3.If the system does not use a CMA, use the two velcro straps to route and secure cords and cables at the rear of the system:
a.Locate the CMA bracket slots on the rear end of both the rails.
b.Bundle the cables gently, pulling them clear of the system connectors to the left and right sides.
## NOTE:
Ensure that there is enough space for the cables to move when you slide the system out of the rack.
c.Thread the straps through the CMA bracket slots on each side of the system to hold the cable bundles.
Node installation for F200, F600, F900, B100, and P100 nodes
## 37
Page 43 of 63

Figure 10. CMA bracket slots
Node ports
Node ports are described with figures that show the location of the ports.
The backend ports are the private network connections to the nodes. Port 1 from all nodes connects to one switch, and port 2
from all the nodes connects to a second switch. Both backend switches are provided.
The frontend ports are for the client network connections.
## NOTE:
Access to the 1 GbE Management port for F200/F600/F900 requires OneFS version 9.4.0.3 or later. If the nodes
were shipped with an older OneFS version, a one-time configuration change might also be required to enable management
port access even if the node is upgraded to OneFS 9.4.0.3 or later. However, 1 GbE Management ports are not available on
F200 nodes that are obtained before 6 December 2022. In the F200, the rNDC can provide 10 GbE or 25 GbE connections
for frontend networking.
Figure 11. F200 back-end ports
Figure 12. F600 back-end ports
## 38
Node installation for F200, F600, F900, B100, and P100 nodes
Page 44 of 63

Figure 13. F900 back-end ports
## Dell Switch Configuration
All Dell switches are preconfigured as LEAF. See the PowerScale Site Preparation and Planning Guide for information about the
Leaf-Spine network topology.
Node installation for F200, F600, F900, B100, and P100 nodes39
Page 45 of 63

Node installation for F210, F710, F910, PA110
nodes
The PowerScale F210, F710, and PA110 systems are 1U servers that support:
●The F210 node contains a single Intel(R) Xeon(R) Silver 4410Y processor with 12 cores.
●The F710 and PA110 nodes contains two Intel(R) Xeon(R) Gold 6442Y processors with 24 cores each.
●The PA110 contains 16x 32GB DDR5, 5600MT/s, Dual Rank DIMMs.
●The F210 node supports 8 16GB DIMMs.
●The F710 supports 16 32GB DIMMs.
●Two redundant AC power supply units.
●The F210 node supports 4 x 2.5-inch NVMe SSD drives.
●The F710 node supports 10 x 2.5-inch NVMe SSD drives.
●The PA110 supports dual 960 GB M.2 (BOSS-N1) RAID1 - mirrored operating systems.
●The F210 and F710 require OneFS 9.7.0.0 or later
●The PA110 requires OneFS 9.11.0.0 or later.
The PowerScale F910 system is a 2U server that supports:
●Dual Socket Intel Sapphire Rapids 6442Y (2.6GHz, 24C)
●16 32GB DIMMs
●Two redundant AC power supply units
●32 GB of Software-defined persistent memory (SDPM)
●A 1 GB LOM card and Lan-On-Motherboard port (LOM)
●A RIO/DB9 card for a serial port connection
●ISE, SED, or FIPS drives
●24 NVMe SSD drives
●The F910 requires OneFS 9.8.0.0 or later.
## NOTE:
Unless labeled, the figures in this document are not intended to represent a specific system.
Drive types
The F210, F710, and F910 nodes support Non-Volatile Memory Express (NVMe) drives. These NVMe drives may contain either
TLC or QLC memory, which refers to the type and endurance of memory. The drives support different levels of encryption.
ISE has no data encryption, but the drive has the capability to Instant Secure Erase the data on the drive. SED non-FIPS is a
drive that has data self-encryption, but it does not have FIPS (government) certification. The PA110 node supports the Boot
Optimized Storage Solution (BOSS). The PA110 card carrier holds two M.2 NVMe SSD cards.
## CAUTION:
Only install the drives that were shipped with the node. Do not mix drives of different capacities in
the node. If you remove drive carriers from the chassis during installation, ensure to label the carriers clearly.
Replace the drive carriers in the same bay from which they were removed. If drive carriers are mixed between
nodes, even before configuration, the system is inoperable.
Do not power off the node during the join process.
Unpack and verify components
Before you install any equipment, inspect it to ensure that no damage occurred during transit.
Remove all components from the shipping package and inspect the components for any sign of damage. Do not use a damaged
component.
## 5
40Node installation for F210, F710, F910, PA110 nodes
Page 46 of 63

CAUTION: To avoid personal injury or damage to the hardware, always use multiple people or a lift to lift and
move heavy equipment.
Rail kit components for 2U systems
The sliding rail assemblies are used to secure the node in the cabinet and extend it from the cabinet so that the system cover
can be removed to access the internal FRUs.
Figure 14. Sliding rail assembly - 2U systems
Rail kit components for 1U systems
The sliding rail assemblies are used to secure the node in the cabinet and extended from the cabinet so that the system cover
can be removed to access the internal FRUs.
Node installation for F210, F710, F910, PA110 nodes
## 41
Page 47 of 63

Figure 15. Sliding rail assembly - 1U systems
- sliding rail (2)
- velcro strap (2)
- screw (4)
- washer (4)
Rack and rail installation
Drop-in design means that the system is installed vertically into the rails by inserting the standoffs on the sides of the system
into the J-slots in the inner rail members with the rails in the fully extended position. The recommended method of installation
is to first insert the rear standoffs on the system into the rear J-slots on the rails to free up a hand and then rotate the system
down into the remaining J-slots while using the free hand to hold the rail against the side of the system.
Stab-in design means that the inner (chassis) rail members must first be attached to the sides of the system and then inserted
into the outer (cabinet) members installed in the rack.
Install the system into the rack (option A: Drop-In)
1.Pull the inner rails out of the rack until they lock into place.
## 42
Node installation for F210, F710, F910, PA110 nodes
Page 48 of 63

Figure 16. Pull out inner rail
2.Locate the rear rail standoff on each side of the system and lower them into the rear J-slots on the slide assemblies.
3.Rotate the system downward until all the rail standoffs are seated in the J-slots.
Figure 17. Rail standoffs seated in J-slots
4.Push the system inward until the lock levers click into place.
5.Push in the spring clip at the back edge of the third rail segment where it meets the second segment to unlock the slide and
move the system into the rack.
Install the system into the rack (option B: Stab-In)
1.Pull the intermediate rails out of the rack until they lock into place.
2.Release the inner rail lock by pulling forward on the white tabs and sliding the inner rail out of the intermediate rails.
Node installation for F210, F710, F910, PA110 nodes
## 43
Page 49 of 63

Figure 18. Pull out the intermediate rail
Table 18. Rail component label
NumberComponent
1Intermediate rail
2Inner rail
3.Attach the inner rails to the sides of the system by aligning the J-slots on the rail with the standoffs on the system and
sliding forward on the system until they lock into place.
Figure 19. Attach the inner rails to the system
4.With the intermediate rails extended, install the system into the extended rails.
5.Push in the spring clip at the back edge of the third rail segment where it meets the second segment to unlock the slide and
move the system into the rack.
## 44
Node installation for F210, F710, F910, PA110 nodes
Page 50 of 63

Installing the front bezel
The procedure to install the front bezel with and without the LCD panel is the same.
1.Follow the safety guidelines listed in the Safety instructions.
2.Locate and remove the bezel key.
NOTE: The bezel key is part of the LCD bezel package.
1.Align and insert the tabs on the bezel into the slots on the system.
2.Press the bezel until the release button clicks in place.
3.Lock the bezel.
Figure 20. Installing the front bezel with the LCD panel
Connect and route cords and cables
1.Connect the power cables and I/O cables as described in the documentation for your system.
2.If the system uses a cable management arm (CMA), install it as described in the document that is shipped with the CMA.
3.If the system does not use a CMA, use the two velcro straps to route and secure cords and cables at the rear of the system:
a.Locate the CMA bracket slots on the rear end of both the rails.
b.Bundle the cables gently, pulling them clear of the system connectors to the left and right sides.
## NOTE:
Ensure that there is enough space for the cables to move when you slide the system out of the rack.
c.Thread the straps through the CMA bracket slots on each side of the system to hold the cable bundles.
Node installation for F210, F710, F910, PA110 nodes
## 45
Page 51 of 63

Figure 21. CMA bracket slots
Node ports
The back-end ports are the private network connections to the nodes.
Ports and connectors specifications
NIC port specifications
The PowerScale F210, F710, F910, and PA110 systems support up to two Network Interface Controller (NIC) ports embedded on
the LAN on Motherboard (LOM) card.
## NOTE:
Connecting the LOM card to your network is optional.
Table 19. NIC port specification for the system
FeatureSpecifications
LOM card1 GbE x 2
Serial connector specifications
The PowerScale F210, F710, F910, and PA110 systems support one serial port on the system board, which is Data Terminal
Equipment (DTE), 16550-compliant. The serial connector is installed as default on the system board.
USB ports specifications
## Table 20.
PowerScale F210, F710, F910, and PA110 USB specifications
FrontRearInternal (Optional)
USB port typeNo. of portsUSB port typeNo. of portsUSB port typeNo. of ports
## USB 2.0-
compliant port
OneUSB 2.0-
compliant port
OneInternal USB 3.0-
compliant port
## One
iDRAC Direct port
(Micro-AB USB
## 2.0-compliant
port)
OneUSB 3.0-
compliant port
## One
46Node installation for F210, F710, F910, PA110 nodes
Page 52 of 63

NOTE: The micro USB 2.0 compliant port can only be used as an iDRAC Direct or an iDRAC management port.
## Dell Switch Configuration
All Dell switches are preconfigured as LEAF. See the PowerScale Site Preparation and Planning Guide for information about the
Leaf-Spine network topology.
Node installation for F210, F710, F910, PA110 nodes47
Page 53 of 63

Initial system setup and configuration
This section describes the tasks for initial setup and configuration of the Dell system. The section also provides general steps to
set up the system and the reference guides for detailed information.
Configuration requirements
Review these requirements before running the configuration wizard.
Federal installations
You can configure nodes to comply with United States federal regulations.
If you are installing the nodes that are included in this guide in a United States federal agency, configure the external network
with IPv6 addresses. If the OneFS cluster is configured for IPv6, enablement of link-local is required to comply with Federal
requirements.
As part of the installation procedure, configure the external network interfaces for IPv6 addresses in the configuration wizard
after a node is powered on.
SmartLock compliance mode
You can configure nodes to operate in SmartLock compliance mode. If your data environment must comply with SEC rule
17-a4(f), only then should you run the cluster in SmartLock compliance mode.
Compliance mode controls how SmartLock directories function and limits access to the cluster in alignment with SEC rule
## 17-a4(f).
For more information, see the PowerScale OneFS CLI Administration Guide and the PowerScale OneFS Web Administration
Guide for your version of OneFS.
## NOTE:
A valid SmartLock license is required to configure a node in compliance mode.
CAUTION: Once you select to run a node in SmartLock compliance mode, you cannot leave compliance mode
without reformatting the node.
SmartLock compliance mode is incompatible with the following:
## ●
vCenter
●VMware vSphere API for Storage Awareness (VASA)
●VMware vSphere API for Array Integration (VAAI) NAS Plug-In
Connect to the node using a serial cable
You can use a null modem serial cable to provide a direct connection to a node.
If no serial ports are available on your client system, you can use a USB-to-serial converter.
1.Connect a null modem serial cable to the serial port of a computer, such as a laptop.
2.Connect the other end of the serial cable to the serial port on the back panel of the node.
3.Start a serial communication utility such as Minicom (UNIX) or PuTTY (Windows).
4.Configure the connection utility to use the following port settings:
## 6
48Initial system setup and configuration
Page 54 of 63

Table 21. Configuration settings
SettingValue
Transfer rate115,200 bps
Data bits8
ParityNone
Stop bits1
Flow control (RTS/CTS)Hardware
5.Open a connection to the node.
Run the configuration wizard
The configuration wizard starts automatically when a new node is powered on. The wizard provides step-by-step guidance for
configuring a new cluster or adding a node to an existing cluster. B100, P100, and PA110 nodes can only be joined to an existing
cluster.
The following procedure assumes that there is an open serial connection to a new node.
NOTE: You can type back at most prompts to return to the previous step in the wizard.
1.For new clusters, joining a node to an existing cluster or preparing a node to run in SmartLock compliance mode choose one
of the following options:
●To create a cluster, type 1.
●To join the node to an existing cluster, type 2.
●To exit the wizard and configure the node manually, type 3.
●To restart the node in SmartLock compliance mode, type 4.
## CAUTION:
If you choose to restart the node in SmartLock compliance mode, the node restarts and returns
to this step. Selection 4 changes to allow you to disable SmartLock compliance mode. Selection 4 is the
last opportunity to back out of compliance mode without reformatting the node.
2.Follow the prompts to configure the node.
## NOTE:
If you are joining a node to an existing cluster, ensure that the node has successfully joined the cluster before
continuing to the next node. If you encounter any issues with a node joining a cluster, contact PowerScale Support.
For new clusters, the following table lists the information necessary to configure the cluster. To ensure that the installation
process is not interrupted, it is recommended that you collect this information before installation.
## Table 22.
Configuration settings for new clusters
SettingDescription
SmartLock compliance licenseA valid SmartLock license for clusters in compliance mode only
Root passwordThe password for the root user. Clusters in compliance mode do not
allow a root user to be configured. Request and configure a compliance
administrator (comp admin) password instead.
Admin passwordThe password for the administrator user
Cluster nameThe name used to identify the cluster. Cluster names must begin with a
letter and can contain only numbers, letters, and hyphens.
NOTE: if the cluster name is longer than 11 characters, the
following warning displays: WARNING: Limit cluster name
to 11 characters or less when the NetBIOS Name
Service is enabled to avoid name truncation.
Isilon uses up to 4 characters for individual
node names.
Initial system setup and configuration49
Page 55 of 63

Table 22. Configuration settings for new clusters (continued)
SettingDescription
Character encodingThe default character encoding is UTF-8.
int-a network settings
●Netmask
●IP range
The int-a network settings are for communication between nodes. The
int-a network must be configured with IPv4. The int-a network must be
on a separate subnet from an int-b/failover network.
int-b/failover network settings
●Netmask
●IP range
●Failover IP range
The int-b/failover network settings are optional. The int-b network is
for communication between nodes, and provides redundancy with the
int-a network. The int-b network must be configured with IPv4. The
int-a and int-b networks must be on separate subnets. The failover IP
range is a virtual IP range that is resolved to either of the active ports
during failover.
External network settings
●Netmask
## ●MTU
●IP range
The external network settings are for client access to the cluster. The
25 Gb and 100 Gb ports can be configured from the wizard. The default
external network can be configured with IPv4 or IPv6 addresses. The
MTU choices are 1500 or 9000.
●Configure the external network with IPv6 addresses by entering an
integer less than 128 for the netmask value. The standard external
netmask value for IPv6 addresses is 64. If you enter a netmask
value with dot-decimal notation, use IPv4 addresses for the IP
range.
●In the configuration wizard, the following options are available:
Configure external subnet
[ 1] 25gige-1 - External interface
[Enter] Exit configuring external
network.
Configure external subnet >>>
## Or
## ●
Configure external subnet
[ 1] 100gige-1 - External interface
[Enter] Exit configuring external
network.
Configure external subnet >>>
Default gatewayThis is the IP address of the network gateway through which the
cluster communicates with clients outside the subnet. Enter an IPv4
or IPv6 address, depending on how the external network is configured.
SmartConnect settings
●SmartConnect zone name
●SmartConnect service IP
SmartConnect balances client connections across nodes in a cluster.
Information about configuring SmartConnect is available in the OneFS
## Administration Guide.
DNS settings
●DNS servers
●DNS search domains
DNS settings for the cluster. Enter a comma-separated list to specify
multiple DNS servers or search domains. Enter IPv4 or IPv6 addresses,
depending on how you configured the external network settings.
Date and time settings
●Time zone
●Day and time
Date and time settings for the cluster.
Cluster join modeThe method that the cluster uses to add new nodes. Choose one of the
following options:
Manual joinManual cluster join mode enables a new node
addition to be initiated through either an
existing configured node, or the joining new
node itself.
50Initial system setup and configuration
Page 56 of 63

Table 22. Configuration settings for new clusters (continued)
SettingDescription
Secure joinA configured node in the existing cluster must
invite a new unconfigured node to join the
cluster.
NOTE: If you are installing a node that contains SEDs (self-encrypting drives), the node formats the drives during the
join process unless the drives were preformatted beforehand using the OneFS configuration wizard.
Preformat SED Nodes (Optional)
If you are using a node that contains SED drives that have not been preformatted, the configuration wizard displays the option
to preformat the SEDs.
To configure a new cluster and join all the SED nodes to the cluster using Preformat:
1.Connect to each node using the serial console and enter Preformat in the configuration wizard main menu.
Once preformat is complete on each node, the configuration wizard is displayed again, and the preformat option is no longer
available.
2.Connect to the first node using the serial console again and use the configuration wizard to create a new cluster.
3.Connect to each subsequent node using the serial console again. Use the configuration wizard to join an existing cluster.
Updating firmware
Follow the instructions in the most current Node Firmware Package (NFP) Release Notes to update the node to the most
recent NFP.
Follow the instructions in the most current Drive Support Package (DSP) to update the node to the most recent DSP.
For more information about NFP and DSP compatibility, see the PowerScale OneFS Supportability and Compatibility Guide.
Licensing and remote support
After configuring new hardware, update the OneFS license and configure the new hardware for remote support.
For instructions on updating OneFS license and configuring remote support (SRS), see the OneFS WebUI Administration Guide
or the OneFS CLI Administration Guide.
Configure the Integrated Dell Remote Access
## Controller
The integrated Dell Remote Access Controller (iDRAC) delivers advanced, agent-free local, and remote administration. iDRAC is
embedded in every F900, F600, F200, B100, P100, F210, F710, F910, and PA110 node. It provides a secure means to automate
specific node management tasks. The node management tasks include remote reboot or shutdown by using IPMI commands.
## NOTE:
Although iDRAC is preinstalled in F900, F600, F200, B100, and P100 nodes, caution is recommended when using
iDRAC. Some iDRAC features and functionality are accessible with the iDRAC interface but are not supported. OneFS only
supports the following IPMI commands with the iDRAC interface:
●Shutdown (power off)
## ●
Reboot (power cycle)
●Startup (power on)
●Power Status (read-only)
Initial system setup and configuration51
Page 57 of 63

NOTE: iDRAC applies only to F900, F600, F200, B100, and P100 node types.
IDRAC does not require any additional software installation.
1.After connecting the network cables and powering on the node, iDRAC is available for use. For iDRAC, the RJ45 (1 GbE)
connects to the external network switch.
Figure 22. Node with RJ45 iDRAC connection
2.Log in to iDRAC by using the following default username and password:
## ●root
## ●calvin
NOTE: F900, F600, F200, B100, and P100 nodes can be ordered with both the default username and password (root,
calvin) or with a random password option. If the nodes were ordered with the random password option, the username
and password differ. The random password is on the bottom of the luggage tag.
LCD panel
The LCD display provides system information, status, and error messages to indicate that the system is functioning correctly or
requires attention. The LCD display is also used to configure or view the system iDRAC IP address.
The following lists the status and conditions of the LCD display:
●The LCD backlight is white during normal operating conditions.
●When the system needs attention, the LCD backlight is amber, and displays an error code before the descriptive text.
●When the system turns off and there are no errors, the LCD enters the standby mode after five minutes of inactivity. Press
any button on the LCD to turn it on.
●If the LCD panel stops responding, remove the bezel and reinstall it. If the problem persists, see Getting help.
## NOTE:
If the system is connected to a power source and an error is detected, the LCD is amber whether the system is
turned on or off.
Figure 23. LCD panel features
## 52
Initial system setup and configuration
Page 58 of 63

Table 23. LCD elements
ItemButton or DisplayDescription
1LeftMoves the cursor back in one-step
increments
2SelectChooses the selected menu item
3RightMoves the cursor forward in one-step
increments during message scrolling:
1.Press and hold the right button to
increase scrolling speed.
2.To stop scrolling, release the button.
NOTE: The display stops scrolling
when the button is released. After
45 s of inactivity, the display starts
scrolling.
4LCD DisplayDisplays system information, status, and
error messages or iDRAC address
View the Home screen
The Home screen displays information about the system. This screen is displayed during normal system operation when there
are no status messages or errors. When the system is off and there are no errors, the LCD enters standby mode after five
minutes of inactivity. Press any button on the LCD display to turn it on.
1.To view the Home screen, press one of the three navigation buttons (Select, Left, or Right).
2.To go to the Home screen from another menu, complete the following steps:
a.Press and hold the navigation button until the up arrow is displayed.
b.Go to the Home icon by using the up arrow.
c.On the Home screen, press the Select button to enter the main menu.
d.Select the Home icon.
Setup menu
## NOTE:
When you select an option in the Setup menu, confirm the option before going to the next action.
Table 24. Setup menu options
OptionDescription
iDRACSelect DHCP or Static IP to configure the network mode.
If Static IP is selected, the available fields are IP, Subnet
(Sub), and Gateway (Gtw). Select Setup DNS to enable DNS
and to view domain addresses. Two separate DNS entries are
available.
Set errorSelect SEL to view LCD error messages in a format that
matches the IPMI description in the SEL. You can match
an LCD message with an SEL entry. Select Simple to view
LCD error messages in a simplified description. For information
about the generated event and error messages in the system
firmware and agents that monitor system components, see
the Error Code Lookup page, at qrl.dell.com.
Set homeSelect the default information for the Home screen.
Initial system setup and configuration53
Page 59 of 63

View menu
NOTE: When you select an option in the View menu, confirm the option before going to the next action.
Table 25. View menu options
OptionDescription
iDRAC IPDisplays the IPv4 or IPv6 addresses for iDRAC9. Addresses
include DNS (Primary and Secondary), Gateway, IP, and
Subnet (IPv6 does not have Subnet).
MACDisplays the MAC addresses for iDRAC, iSCSI, or Network
devices.
NameDisplays the name of the Host, Model, or User String for the
system.
NumberDisplays the Asset tag or the Service tag for the system.
PowerDisplays the power output of the system in BTU/hr or
Watts. The display format can be configured in the Set home
submenu of the Setup menu.
TemperatureDisplays the temperature of the system in Celsius or
Fahrenheit. The display format can be configured in the Set
home submenu of the Setup menu.
Join a cluster by using buttons and the LCD display
## NOTE:
When you select an option in the View menu, confirm the option before proceeding to the next action.
When the node starts and is unconfigured, the LCD display reads, <Unconfigured>, and launches a wizard. The wizard joins
the node to a cluster that is connected to the back-end network.
To join the node to a cluster when the LCD display reads, <Unconfigured>:
1.Press Select to start the wizard.
2.Press Left or Right to switch menu items:
a.<Scan>: Scan the back-end network, and display available clusters.
b.<Return>: Return to the <Unconfigured> screen.
3.To browse the available clusters, press Left or Right.
## NOTE:
Some of the clusters might not have enough IP addresses. The attempt to join the node fails.
4.To join the displayed cluster, press Select.
5.<Return>: Return to the scan menu in Step 3.
6.The LCD display reads Please wait....
a.If the node joins the cluster successfully, the LCD displays the hostname of the node.
b.If the node fails to join the cluster, the LCD displays Failed to join.... Return to Step 4.
## NOTE:
If you are joining a node to an existing cluster ensure that the node has successfully joined the cluster before
continuing to the next node. If you encounter any issues with a node joining a cluster, contact PowerScale Support.
c.To try another cluster, press Select.
Run HealthCheck
After you complete the installation process, run a HealthCheck on your cluster to confirm that the new components are
operating correctly.
## 54
Initial system setup and configuration
Page 60 of 63

NOTE: More information is available in KB000130893 Dell Technologies PowerScale HealthCheck.
Update the Install Base
After all work is complete, engage the Global Asset Management Team to update the Install Base to notify Dell of product
installation, hardware upgrades, remote connection updates, or Install at Location changes for select products.
NOTE: To access the submission forms, you must be logged in as an authorized user: Partner or Employee. Employees are
noted by a black checkmark next to their name.
1.Browse to the Administrative Support page.
2.Select the More Support & Solutions option.
3.From the Tell us more drop-down menu, select the Install Base/Asset Management option.
If you do not see this option, you are not signed in.
4.To initiate a Service Request, select the identifier type from the drop-down menu and provide the appropriate identifier and
click Submit.
If the PSNT or DST is not valid, use the Site ID or Dell Customer Number.
5.To submit the form, click Submit.
Upon submission, the Create Service Request option displays.
6.Click Create Service Request.
7.Follow the prompts in the form.
The form is dynamic. When the customer information and asset details are complete, you can select an issue type.
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
Initial system setup and configuration55
Page 61 of 63

## Dell Technologies – Restricted Use – Confidential
Page 62 of 63

## Dell Technologies – Restricted Use – Confidential
Page 63 of 63