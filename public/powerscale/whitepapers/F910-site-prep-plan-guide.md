

Node Site Preparation and Planning Guide
## May 2024

Notes, cautions, and warnings
NOTE: A NOTE indicates important information that helps you make better use of your product.
CAUTION: A CAUTION indicates either potential damage to hardware or loss of data and tells you how to avoid
the problem.
WARNING: A WARNING indicates a potential for property damage, personal injury, or death.
© 2022 - 2024 Dell Inc. or its subsidiaries. All rights reserved. Dell Technologies, Dell, and other trademarks are trademarks of Dell Inc. or its
subsidiaries. Other trademarks may be trademarks of their respective owners.

Chapter 1: Introduction.................................................................................................................4
About this guide...................................................................................................................................................................4
Scale-out NAS overview....................................................................................................................................................5
OneFS storage architecture.............................................................................................................................................5
Node components...............................................................................................................................................................5
Network connectivity summary.......................................................................................................................................7
Chapter 2: Selecting the equipment.............................................................................................10
Safety and EMI Compliance............................................................................................................................................10
Grounding guidelines.........................................................................................................................................................10
Shock and vibration............................................................................................................................................................11
Storage node specifications.............................................................................................................................................11
Racks and rails.....................................................................................................................................................................11
Titan HD racks....................................................................................................................................................................12
Environmental requirements......................................................................................................................................14
Cabinet clearance.........................................................................................................................................................15
Stabilizing the casters.................................................................................................................................................15
Rail kit components for 4U systems..............................................................................................................................16
Third-party rack specifications for the deep chassis solutions..............................................................................19
Rail kit components for 2U systems..............................................................................................................................21
Rail kit components for 1U systems..............................................................................................................................22
Network topology..............................................................................................................................................................23
Leaf-Spine topology..........................................................................................................................................................23
Assisting with installation................................................................................................................................................24
Installation and implementation details..................................................................................................................24
Switches and cables.........................................................................................................................................................24
Cable management......................................................................................................................................................24
Supported switches..........................................................................................................................................................26
Chapter 3: Adding functionality to the cluster.............................................................................28
Data management modules.............................................................................................................................................28
SmartQuotas.................................................................................................................................................................28
SmartDedupe................................................................................................................................................................28
Chapter 4: Preparing your facility...............................................................................................29
Environmental requirements...........................................................................................................................................29
Power requirements...................................................................................................................................................30
Power Requirements for Equipment.......................................................................................................................32
Radio Frequency Interference (RFI) requirements.............................................................................................32
Hardware acclimation.................................................................................................................................................33
Air quality requirements.............................................................................................................................................33
Site floor load-bearing requirements......................................................................................................................34
Shipping and storage requirements........................................................................................................................34
Fire suppressant disclaimer.......................................................................................................................................34
## Contents
## Contents3

Introduction to this guide
This section contains the following topics:
## Topics:
•About this guide
•Scale-out NAS overview
•OneFS storage architecture
•Node components
•Network connectivity summary
About this guide
This guide describes how to prepare and plan for node hardware installation.
Before implementing a cluster into the data workflow, it is important to identify the best equipment and software requirements.
Be sure to confirm that the facility is ready to support the cluster.
## Table 1.
## Node Types
NodeDescription
A200Gen6 (4U)
A2000Gen6 (4U)
H400Gen6 (4U)
H500Gen6 (4U)
H600Gen6 (4U)
F800Gen6 (4U)
F810Gen6 (4U)
H5600Gen6 (4U)
A3000 and A300Purpose-built Archive nodes (4U)
H7000 and H700Purpose-built Hybrid nodes (4U)
B100 and P100Accelerator nodes (1U)
F900All-flash nodes (2U)
F600 and F200All-flash nodes (1U)
F210 and F710All-flash nodes (1U)
F910All-flash nodes (2U)
WARNING: Do not install A3000, A300 (archive nodes), H7000, or H700 (hybrid nodes) into existing Gen6
chassis installations. The archive and hybrid nodes must only be installed in the chassis that is provided from
the factory. The higher-powered archive and hybrid nodes can cause a fuse to open on the Gen6 chassis
midplane, which then requires a chassis replacement.
WARNING: The storage conditions for some parts, such as Hard Disk Drives (HDDs), Solid State Drives (SSDs),
and batteries, affect the wear and life of those parts. Do not exceed six consecutive months of unpowered
storage from the delivery date.
## 1
4Introduction to this guide

The information in this guide provides a framework for the research that a System Administrator or Facility Manager must
conduct before powering on a node.
For detailed information about the OneFS operating system, review OneFS documentation on the Online Support site.
Scale-out NAS overview
The scale-out NAS storage platform combines modular hardware with unified software to harness unstructured data. Powered
by the
OneFS operating system, a cluster delivers a scalable pool of storage with a global namespace.
The unified software platform provides centralized web-based and command-line administration to manage the following
features:
●A cluster that runs a distributed file system
●Scale-out nodes that add capacity and performance
●Storage options that manage files and tiering
●Flexible data protection and high availability
●Software modules that control costs and optimize resources
OneFS storage architecture
PowerScale nodes take a scale-out approach to storage. The nodes create a cluster of nodes that run a distributed file system.
PowerScale combines the three layers of storage architecture file system, volume manager, and data protection into a scale-out
NAS cluster.
Each node adds resources to the cluster. Because each node contains a globally coherent RAM, as a cluster becomes larger,
it becomes faster. Meanwhile, the file system expands dynamically and redistributes content, which eliminates the work of
partitioning disks and creating volumes.
Nodes work as peers to spread data across the cluster. The process of segmenting and distributing data is called striping.
This process protects data and enables users to connect to any node, which allows them to take advantage of the cluster
performance.
PowerScale uses distributed software to scale data across commodity hardware. Primary devices do not control the cluster,
and secondary devices do not invoke dependencies. Each node helps to control data requests, boost performance, and expand
cluster capacity.
Node components
A cluster is made up of three or more nodes and can expand to a maximum of 252 nodes in single node increments.
If you are installing a new cluster with more than 22 nodes or if you are growing an existing cluster to include more than 22
nodes, follow the instructions in Install a new cluster using Leaf-Spine configuration in the
Leaf-Spine Cluster Installation Guide.
There are several types of nodes, all of which can be added to a cluster to balance capacity and performance with throughput or
I/O operations per second (IOPS).
## Table 2.
Nodes and Use Cases
NodeMinimum Operating
## System Version
Description and use case
A3000 and A300OneFS 9.2.1.0 and later
●Purpose-built archive nodes (4U) require a minimum cluster
size of four nodes.
●Expand cluster size in two node increments.
H7000 and H700OneFS 9.2.1.0 and later
●Purpose-built hybrid nodes (4U) require a minimum cluster
size of four nodes.
●Expand cluster size in two node increments.
F200 ISI and FIPSOneFS 9.0.0.0 and laterAll-flash solution, software inline data compression, and data
deduplication.
Introduction to this guide5

Table 2. Nodes and Use Cases (continued)
NodeMinimum Operating
## System Version
Description and use case
●All-flash nodes (1U) require a minimum cluster size of three
nodes.
●Expand cluster size in single node increments.
## F600
●F600 with SED, the
minimum operating
system version is
OneFS 9.3.0.0.
●F600 with Quad-
Level Cell (QLC), the
minimum operating
system version is
OneFS 9.4.0.0.
●F600 with QLC
SEDs, the minimum
operating system
version is OneFS
## 9.4.0.8.
●F600 with non-
QLC and non-SED
drives, the minimum
operating system
version is OneFS
## 9.0.0.0.
All-flash solution, software inline data compression, and data
deduplication.
●All-flash nodes (1U) require a minimum cluster size of three
nodes.
●Expand cluster size in single node increments.
F210 and F710 with ISI, FIPS, and
## SED
OneFS 9.7.0.0
●All-flash nodes (1U) require a minimum cluster size of three
nodes.
●Expand cluster size in single node increments.
PowerScale F800 and F810OneFS 9.0.0.0 and laterAll-flash solution, fast data access using direct-attached
NVMe (Non-Volatile Memory Express) SSD Serial Attached
SCSI (SAS) drives with integrated parallelism. Hardware data
compression and data deduplication on the F810.
PowerScale F900OneFS 9.2.0.0 and later
releases.
●OneFS F900 with
## Instant Scramble
Erase, or also called
## Instant Secure Erase
(ISE) and SEDs:
## 9.3.0.0.
## ●
OneFS F900 with
## QLC: 9.4.0.0.
●OneFS F900 with
QLC SEDs: 9.4.0.8.
All-flash solution, fast data access using direct-attached
NVMe SSDs with integrated parallelism. Software inline data
compression and data deduplication on the F900.
## ●
All-flash node (2U) requires a minimum cluster size of three
nodes.
## ●
Expand cluster size in single node increments.
F910 with ISE, SED, and FIPSOneFS 9.8.0.0
●All-flash node (2U) requires a minimum cluster size of three
nodes.
●Expand cluster size in single node increments.
PowerScale Hardware H-SeriesOneFS 9.0.0.0 and later
●The H600 is a performance spinning solution.
●The H400 and H500 have capacity performance.
●The H5600 has a larger capacity performance.
PowerScale Hardware H-seriesOneFS 9.2.1.0 and later.
●The H700 and H7000 have performance solution,
support for inline software data compression and data
deduplication.
PowerScale Hardware A-SeriesOneFS 9.2.1.0 and later.
●The A300 has an active archive.
●The A3000 has a deep archive.
6Introduction to this guide

The following Dell PowerScale nodes improve performance:
## Table 3. Accelerator Nodes
NodeFunction
A-Series Performance AcceleratorIndependent scaling for high performance
A-Series Backup AcceleratorHigh-speed and scalable backup-and-restore solution for tape
drives over Fibre Channel connections
B100Provides the ability to backup OneFS powered clusters
through two-way NDMP protocol
P100Adds performance to a cluster that is composed of nodes that
are CPU-bound.
Network connectivity summary
NOTE: Access to the 1 GbE Management ports for F200, F600, and F900 requires OneFS version 9.4.0.3 or later. If the
nodes were shipped with an older OneFS version, a one-time configuration change could enable management port access
even if the node is upgraded to OneFS 9.4.0.3 or later. However, 1GbE Management ports are not available on F200 nodes
that were obtained before 6 December 2022.
The F210, F710, and F910 use the LAN on Motherboard (LOM) management ports .
The OneFS CLI Reference Guide provides information to check node status.
## Table 4.
Network connectivity summary
NodeFrontend NICTransceiverBackendManagement port
EthernetInfiniBand
F910100 GbE QSFP28100 GbE100/40 GbE
## QSFP28
-1 GbE LOM card
40 GbE
25/10 GbE
## QSFP28
25 GbE
10 GbE
F900100 GbE QSFP28100 GbE100/40 GbE
## QSFP28
40 Gb QSFP+1 GbE rNDC
40 GbE
25/10 GbE SFP2825 GbE
10 GbE
F710100 GbE QSFP28100 GbE100/40 GbE
## QSFP28
-1 Gb LOM card
40 GbE
25/10 GbE SFP2825 GbE
10 GbE
F600100 GbE QSFP28100 GbE100/40 GbE
## QSFP28
40 Gb QSFP+1 GbE rNDC
40 GbE
25/10 GbE SFP2825 GbE
10 GbE
F21025/10 GbE SFP2825 GbE25/10 GbE SFP28-1 Gb LOM card
10 GbE
Introduction to this guide7

Table 4. Network connectivity summary (continued)
NodeFrontend NICTransceiverBackendManagement port
EthernetInfiniBand
F200100/25/10 GbE
## SFP28
25 GbE100/25/10 GbE
## SFP28
40 Gb QSFP+1 GbE rNDC
10 GbE
F80040 GbE QSFP+40 GbE40 GbE QSFP+40 Gb QDR
## QSFP+
A single management
port, a shared port
with the BMC
25/10 GbE SFP2825 GbE
10 GbE SFP+10 GbE
F81040 GbE QSFP+40 GbE40 GbE QSFP+N/AA single management
port, a shared port
with the BMC
25/10 GbE SFP2825 GbE
10 GbE SFP+10 GbE
H700100/40 GbE
## QSFP28
100 GbE100/40 GbE
## QSFP28
40 Gb QDR
## QSFP+
A single management
port, a shared port
with the BMC
40 GbE
25/10 GbE SFP2825 GbE25/10 GbE SFP28
10 GbE
H7000100/40 GbE
## QSFP28
100 GbE100/40 GbE
## QSFP28
40 Gb QDR
## QSFP+
A single management
port, a shared port
with the BMC
40 GbE
25/10 GbE SFP2825 GbE25/10 GbE SFP28
10 GbE
H40025/10 GbE SFP2825 GbE10 GbE SFP+10 Gb QDR QSFP+A single management
port, a shared port
with the BMC
10 GbE
10 GbE SFP+10 GbE
H50040 GbE QSFP+40 GbE40 GbE QSFP+40 Gb QDR
## QSFP+
A single management
port, a shared port
with the BMC
25/10 GbE SFP2825 GbE
10 GbE
10 GbE SFP+10 GbE
H560040 GbE QSFP+40 GbE40 GbE QSFP+40 Gb QDR
## QSFP+
A single management
port, a shared port
with the BMC
25/10 GbE SFP2825 GbE
10 GbE
10 GbE SFP+10 GbE
H60040 GbE QSFP+40 GbE40 GbE QSFP+40 Gb QDR
## QSFP+
A single management
port, a shared port
with the BMC
25/10 GbE SFP2825 GbE
10 GbE
10 GbE SFP+10 GbE
A300100/40 GbE
## QSFP28
100 GbE100/40 GbE
## QSFP28
40 Gb QDR
## QSFP+
A single management
port, a shared port
with the BMC
40 GbE
25/10 GbE SFP2825 GbE25/10 GbE SFP28
10 GbE
8Introduction to this guide

Table 4. Network connectivity summary (continued)
NodeFrontend NICTransceiverBackendManagement port
EthernetInfiniBand
A3000100/40 GbE
## QSFP28
100 GbE100/40 GbE
## QSFP28
40 Gb QDR
## QSFP+
A single management
port, a shared port
with the BMC
40 GbE
25/10 GbE SFP2825 GbE25/10 GbE SFP28
10 GbE
A20025/10 GbE SFP2825 GbE10 GbE SFP+10 Gb QDR QSFP+A single management
port, a shared port
with the BMC
10 GbE
10 GbE SFP+10 GbE
A200025/10 GbE SFP2825 GbE10 GbE SFP+10 Gb QDR QSFP+A single management
port, a shared port
with the BMC
10 GbE
10 GbE SFP+10 GbE
Introduction to this guide9

Selecting the equipment
The requirements for mixed-node clusters section in the OneFS Supportability and Compatibility Guide provides information on
installing more than one type of node in a cluster.
Talk to a Sales Account Manager to identify the equipment that is best suited to support your workflow.
## Topics:
•Safety and EMI Compliance
•Grounding guidelines
•Shock and vibration
•Storage node specifications
•Racks and rails
•Titan HD racks
•Rail kit components for 4U systems
•Third-party rack specifications for the deep chassis solutions
•Rail kit components for 2U systems
•Rail kit components for 1U systems
•Network topology
•Leaf-Spine topology
•Assisting with installation
•Switches and cables
•Supported switches
Safety and EMI Compliance
This IT Equipment is compliant with the electromagnetic compatibility (EMC) and product safety regulations/standards required
by the countries in which the product is sold. Compliance is based on FCC part 15, CISPR22/CISPR24 and EN55022/EN55024
standards, including applicable international variations.
EMC compliant Class A products are marketed for use in business, industrial, and commercial environments. Product Safety
compliance is based on IEC 62368-1 and EN 62368-1 standards, including applicable national deviations.
This IT Equipment is in compliance with EU RoHS Directive 2011/65/EU.
The devices that are used in this product are approved under a unique regulatory model identifier. The regulatory model that is
affixed to each device rating label may differ from any marketing or product family name in this data sheet.
For more information, go to the Dell Support Site.
Grounding guidelines
To eliminate shock hazards and facilitate the operation of circuit-protective devices, ensure that the rack is grounded.
●The rack must have an earth-ground connection as required by applicable codes. Connections such as a grounding rod or
building steel provide an earth ground.
●The electrical conduits must be made of rigid metallic material that is securely connected or bonded to panels and electrical
boxes, which provides continuous grounding.
●The ground must have the correct low impedance to prevent buildup of voltage on equipment or exposed surfaces. Low-
impedance grounding and lightning protection are recommended.
●The electrical system must meet local and national code requirements. Local codes might be more stringent than
national codes. Site floor load-bearing requirements and Safety and EMI Compliance sections in this manual provide more
information.
## 2
10Selecting the equipment

Shock and vibration
Products have been tested to withstand the shock and random vibration levels.
The levels apply to all three axes and should be measured with an accelerometer on the equipment enclosures within the cabinet
and shall not exceed any of the values in this table.
## Table 5. Platform Response Levels
Platform conditionResponse measurement level
Nonoperational shock25 Gs for 3-milliseconds
Operational shock6 Gs for 11-milliseconds
Nonoperational random vibration0.40 Grms at 5-500 Hz for 30 minutes
Operational random vibration0.21 Grms at a frequency range between 5-500 Hz for 10
minutes
Systems that are mounted on an approved package have completed transportation testing to withstand shock and vibrations in
the vertical direction only. The levels shall not exceed the values in this table.
## Table 6. Packaged System Measurement Levels
Packaged system conditionResponse measurement level
Transportation shock10 Gs for 12-milliseconds
Transportation random vibration0.28 Grms at a frequency range between 1-100 Hz for 4 hours
Storage node specifications
To verify specifications for the A200, A2000, A300, A3000, H400, H500, H5600, H600, H700, H7000, F910, F900, F810, F800,
F710, F600, F210, and F200 nodes, review these technical specifications sheets.
## NOTE:
NVMe FIPS SED drive support was added for F600 and F900 nodes in OneFS 9.3.0.0. Downgrading nodes with
these drives to an earlier OneFS version renders them inoperable.
NOTE: OneFS version must be 9.4.0.8 or later for 15TB/30TB QLC SED non-FIPS drives for F600 and F900, or the node
might not be able to join the cluster. Downgrading nodes with these drives to an earlier OneFS version renders them
inoperable.
NOTE: OneFS 9.8.0.0 is required for the F910 node. Downgrading nodes with these drives to an earlier OneFS version
renders them inoperable.
●Dell PowerScale Archive Family
●Dell PowerScale Hybrid Family
## ●
Dell PowerScale All Flash Family
●Dell PowerScale Accelerator Nodes
Racks and rails
You can secure nodes to standard storage racks with a sliding rail system.
For specific information about the rail solutions compatible with your system, see the Dell Enterprise Systems Rail Sizing and
Rack Compatibility Matrix available at Dell Technologies Enterprise Systems Rail Sizing and Rack Compatibility Matrix.
For Generation 6 nodes, rail kits are included in all node packaging and are compatible with racks with the following types of
holes:
●3/8-inch square holes
●9/32-inch round holes
●10-32, 12-24, M5X.8, or M6X1 prethreaded holes
Selecting the equipment
## 11

Rail kit mounting brackets adjust in length from 60 cm to 90 cm (24 to 36 inches) to accommodate different rack depths. When
you select a rack for your nodes, ensure that the rack supports the minimum and maximum rail kit sizes.
Titan HD rail kits can support NEMA spacing 60 cm or 73 cm (24 or 29 inches).
NOTE: Arista switches are incompatible with the Titan S rack.
Table 7. Rack solutions per node type
Node typeRack type
●A300 (standard chassis)
●A3000 (deep chassis and requires Titan HD)
●H700 (standard chassis)
●H7000 (deep chassis and requires Titan HD)
## ●F910
## ●F900
## ●F710
## ●F600
## ●F210
## ●F200
## ●P100
## ●B100
The following racks with the adequate cable, door, or Power
Distribution Unit (PDU) clearance:
●Titan D
●Titan HD
●Titan S
Table 8. Rack dimensions
Rack typeDimensions from the front bezel to the rear door
Titan24 in W x 39 in D x 40U H
Titan D24 in W x 44 in D x 40U H
Titan HD28 in W x 48 in D x 42U H
Titan S600 mm (23.6 inches) W x 45.2 in D x 42U H
NOTE: The depth that is listed in the table is from the front bezel to the rear door. For more depth, it must be
approximately 50 mm–60 mm (2 inches-2.5 inches) from the front bezel to the rear door.
Titan HD racks
Titan HD is designed to support fully populated racks of A3000, A2000, H7000, and H5600 chassis/nodes. However, all
Generation6 platforms can be installed in the Titan HD racks.
Titan HD PDU jumper locations
The following images illustrate the PDU jumper locations for the Titan-HD PDU. The jumpers should be in J1,J3, and J5 as shown
in the images.
## 12
Selecting the equipment

Figure 1. Single phase PDU
Figure 2. 3 phase Delta PDU
Selecting the equipment
## 13

Figure 3. 3 Phase Wye PDU
Environmental requirements
## Table 9.
Titan HD environmental requirements
Environmental symbolEnvironmental requirements
+15°C to +32°C (59°F to 89.6°F) site temperature. A fully
configured cabinet can produce up to 40,000 BTUs per hour.
40% to 55% relative humidity is the recommended operating
parameter.
NOTE: Contents of the cabinet might be qualified outside
these limits. The product-specific documentation for the
system specifications provides complete details.
The Titan HD cabinet weighs 249.48 KG (550 pounds). A
cabinet that is fully configured with Dell products can weigh
approximately 1,497 kg (3300 pounds).
NOTE: Ensure that the flooring can safely support
the configuration. Calculate the minimum load-bearing
requirements for the site by using the product-specific
weights for the system components at Power Calculator.
0–2439 meters (0 ft–8,000 ft) above sea level operating
altitude.
LAN and telephone connections for remote service and
system operation.
14Selecting the equipment

Cabinet clearance
This Dell Technologies cabinet ventilates from front to back. Provide adequate clearance to service and cool the system.
Depending on component-specific connections within the cabinet, the available power cable length might be shorter than the
15-foot standard.
Stabilizing the casters
The cabinet bottom includes four caster wheels. The front wheels are fixed, and the two rear casters swivel in a 3.25-inch
diameter. The swivel position of the caster wheels determines the load-bearing points on the site floor, but does not affect
the cabinet footprint. Once you have positioned, leveled, and stabilized the cabinet, the four leveling feet determine the final
load-bearing points on the site floor.
Cabinet specifications provide details about cabinet dimensions and weight information to plan for system installation at the
customer site.
## NOTE:
For installations that require a top of the cabinet power feed, a 3-meter extension cord is provided. Do not move or
invert the PDUs.
The table provides cabinet load-rating information.
## Table 10.
Cabinet load rating
Load TypeRating
Dynamic (with casters)3,300 lb (1,497 kg) of equipment
Static (without casters)3,300 lb (1,497 kg) of equipment
More information can be found in the Site floor load-bearing requirements section in Environmental requirements. In addition,
the pallets that are used to ship cabinets are engineered to withstand the added weight of components that are shipped in the
cabinet.
Selecting the equipment
## 15

Figure 4. Cabinet component dimensions
Rail kit components for 4U systems
Install the adjustable 4U chassis rails in the rack for Generation 6, A3000, A300, H7000, and H700 nodes.
About this task
You can install your 4U chassis in standard ANSI/EIA RS310D 48 cm (19 in.) rack systems, including all Dell EMC racks. The rail
kit is compatible with rack cabinets with the following hole types.
●3/8-inch square holes
●9/32-inch round holes
●10-32, 12-24, M5X.8, or M6X1 prethreaded holes
The rails adjust in length from 60 cm to 90 cm (24 inches to 36 inches) to accommodate various cabinet depths. The rails are
not left-specific or right-specific and can be installed on either side of the rack.
NOTE: Check the depth of the racks to ensure that they fit the depth of the chassis being installed.
The two rails are packaged separately inside the chassis shipping container.
## Steps
1.Separate a rail into front and back pieces.
Pull up on the locking tab, and slide the two sections of the rail apart.
## 16
Selecting the equipment

2.Remove the mounting screws from the back section of the rail.
The back section is the thinner of the two rail sections. There are three mounting screws that are attached to the back
bracket. There are also two smaller alignment screws. Do not uninstall the alignment screws.
3.Attach the back section of the rail to the rack with the three mounting screws.
Ensure that the locking tab is on the outside of the rail.
Selecting the equipment
## 17

4.Remove the mounting screws from the front section of the rail.
The front section is the wider of the two rail sections. There are three mounting screws that are attached to the front
bracket. There are also two smaller alignment screws. Do not uninstall the alignment screws.
5.Slide the front section of the rail onto the back section that is secured to the rack.
6.Adjust the rail until you can insert the alignment screws on the front bracket into the rack.
7.Attach the front section of the rail to the rack with only two of the mounting screws.
Attach the mounting screws in the holes between the top and bottom alignment screws. You will install mounting screws in
the top and bottom holes after the chassis is installed, to secure the chassis to the rack.
## 18
Selecting the equipment

8.Repeat these steps to install the second rail in the rack.
Third-party rack specifications for the deep chassis
solutions
The A3000, H7000, A2000, and H5600 are deep chassis nodes and can use the third-party rack solution.
The current Dell rack solutions support up to eight PDUs, including four on each side. The figures provide the dimensions and
guidelines for third-party rack solutions. The table lists the components and dimensions for the labels in the figures.
Figure 5. Rear-facing rack
Selecting the equipment
## 19

Figure 6. Center-facing rack
## Table 11.
Third-party rack components and dimensions
Rack component labelDescription
aDistance between the front surface of the rack and the front
NEMA rail
bDistance between NEMA rails, minimum=609.6 mm (24
inches), max=863.6 mm (34 inches)
cDistance between the rear of the chassis to the rear of the
rack, min=58.42 mm (2.3 inches)
dDistance between inner front of the front door and the NEMA
rail, min=63.5 mm (2.5 inches)
eDistance between the inside of the rear post and the rear
vertical edge of the chassis and rails, min=63.5 mm (2.5
inches)
fWidth of the rear rack post
g486.2 mm (19 inches)+(2e), min=609.6 mm (24 inches)
h486.2 mm (19 inches), NEMA+(2e)+(2f)
## NOTE:
●Width of the PDU+13 mm (0.5 inches) <=e+f
●If j=i+c+PDU depth+76.2 mm (3 inches), then h=min
600 mm (23.6 inches)
Assuming the PDU is mounted beyond i+c.
iChassis depth:
●Normal chassis=909 mm (35.80 inches)
●Deep chassis=1026 mm (40.40 inches )
20Selecting the equipment

Table 11. Third-party rack components and dimensions (continued)
Rack component labelDescription
Switch depth (measured from the front NEMA rail):
●Arista 7304x and 7308x = 909 mm (23.74 inches)
●Celestica D2024, D2060, and D4040 =889 mm (35 inches)
to the switch port plate
## NOTE:
●The inner rail is fixed at 921 mm (36.25 inches).
●Allow up to 155 mm (6 inches) for cable bend radius
when routing up to 32 cables to one side of the rack.
●Select the greater of the installed equipment.
jMinimum rack depth=i+c
kFront
lRear
mFront door
nRear door
pRack post
qPDU
rNEMA
sNEMA 486.2 mm (19 inches)
tRack top view
uDistance from front NEMA to chassis face:
●Dell EMC Generation 6 deep and normal = 0in
●Arista switches = 0in
●Celestica D2024 = 488 mm (19.2 inches)
●Celestica D2060 and D4040 = 368 mm (14.5 inches)
Rail kit components for 2U systems
The sliding rail assemblies are used to secure the node in the cabinet. The sliding rail assembly extends it from the cabinet
so that the system cover can be removed to access the internal field replaceable units (FRU). The 2U sliding rail assembly is
used for installation of the F900 and F910 nodes. Complete installation information is contained in the
PowerScale F900 Node
Installation Guide and Dell PowerScale F910 Installation Guide.
Selecting the equipment
## 21

Figure 7. Sliding rail assembly - 2U systems
Rail kit components for 1U systems
The sliding rail assemblies are used to secure the node in the cabinet. They extend from the cabinet so that the system cover
can be removed to access the internal field replaceable units (FRU). The 1U sliding rail assembly is used to install the F200,
F210, F600, F710, B100, and P100 nodes.
Figure 8. Sliding rail assembly - 1U systems
- sliding rail (2)
- velcro strap (2)
- screw (4)
- washer (4)
## 22
Selecting the equipment

Network topology
External networks connect the cluster to the outside world.
NOTE: Do not use the 1 GbE ports on nodes for data services, such as AV scanning, replication, data access, and so on.
Use of the 1 GbE ports often results in errors and issues.
Subnets can be used in external networks to manage connections more efficiently. Specify the external network subnets
depending on the topology of the network.
In a basic network topology in which each node communicates to clients on the same subnet, only one external subnet is
required.
More complex topologies require several different external network subnets. For example, nodes that connect to one external IP
subnet, nodes that connect to a second IP subnet, and nodes that do not connect externally. Configure the default external IP
subnet by using IPv4.
External networks provide communication outside the cluster. OneFS supports network subnets, IP address pools, and network
provisioning rules to facilitate the configuration of external networks.
The node specifications section in this guide provides details on front-end and back-end networking options.
NOTE: InfiniBand is supported for A300, A3000, H700, H7000, F900, F600, F200, B100, and P100 nodes.
To configure the cluster, set up an initial network. Optionally, set up an alternate interface as a failover network.
CAUTION: Information that is exchanged on the back-end network is not encrypted. Connecting third-party
devices to the back-end switch creates a security risk.
Leaf-Spine topology
OneFS 9.0.0.0 and later releases support Leaf-Spine network topology for internal networks that communicate with the
nodes to form clusters up to 252 nodes. For large clusters that are intended to grow over time, the Leaf-Spine topology is
recommended.
## Architecture
In a Leaf-Spine topology, Dell Z9264-ON, Z9100-ON, and S5232-ON switches are arranged in a two-level hierarchy. The
bottom-level switches with the nodes connected are called Leaf switches. Leaf switches are connected to the top level
switches called Spine switches. The Leaf switches are, in turn, connected to additional Spine switches for networking the entire
cluster of nodes. OneFS requires two independent Leaf-Spine networks for intracluster communication. These networks are
known as Int-A and Int-B respectively.
Complete Leaf-Spine information is available in the PowerScale Leaf-Spine Installation Guide.
## NOTE:
Mixing of S5232, Z9100, and Z9264 is supported in Leaf and Spine architecture but requires Dell Networking operating
system 10.5.2.9. If adding an S5232 to an existing fabric, all switches in the existing fabric must be upgraded to 10.5.2.9
before introducing the S5232.
Selecting the equipment23

Assisting with installation
Contact an Account Manager for help with planning the best workflow for your environment.
Installation and implementation details
Three to four weeks before the installation date, the Professional Services team helps to gather the information necessary to
configure the cluster.
The project team helps to complete the Configuration Guide worksheet that documents technical details that are needed for the
installation and implementation of the cluster.
Be prepared to discuss the following information with the project team:
●Data workflow, including the role of the cluster in that workflow. Some examples consist of production, test, or disaster
recovery.
●The OneFS version to install on the cluster.
●Network connectivity details, including IP ranges for the client and networks.
●The Domain Name Service (DNS) configuration details, including name servers and search lists.
●The directory services, such as Active Directory, Lightweight Directory Access Protocol (LDAP), Network Information
System (NIS), or local user groups.
●File sharing protocols, such as SMB and Network File System (NFS) and advanced file sharing options such as File Transfer
Protocol (FTP) and HTTP.
●The data protection levels, anti-virus solutions, and Network Data Management Protocol (NDMP) backup.
●Cluster alert solutions, such as SupportIQ and Simple Network Management Protocol (SNMP) monitoring.
Switches and cables
Select network switches and cables that are compatible with the nodes that support the network topology.
Use compliant Dell switches and cables. A complete list of qualified switches and cables is in the PowerScale OneFS
Supportability and Compatibility Guide.
For front-end switches minimum specifications, see the relevant hardware and PowerScale OneFS operating system
documentation. Separate switches are required for the front-end and back-end interfaces.
●Nonblocking fabric switch
●Minimum of 1 MB per port of packet buffer memory
●Support for jumbo frames
InfiniBand is supported for the back-end traffic, which is also called internal traffic on most nodes that are listed in Node
Components. InfiniBand is not yet supported on the F210, F710, and F910.
## CAUTION:
Information that is exchanged on the back-end network is not encrypted. Connecting third-party
nodes to the back-end switch creates a security risk.
Cable management
To protect the cable connections, organize cables for proper airflow around the cluster, and to ensure fault-free maintenance of
the nodes.
Protect cables
## NOTE:
The management port is designed to handle SSH and WebUI traffic only. The management port is not designed nor
intended for frontend (data) traffic.
Damage to the cables can affect the cluster performance. Consider the following to protect cables and cluster integrity:
## 24
Selecting the equipment

●Never bend cables beyond the recommended bend radius. The recommended bend radius for any cable is at least 10–12
times the diameter of the cable. For example, if a cable is 1.6 inches, round up to 2 inches and multiply by 10 for an
acceptable bend radius. Cables differ, so follow the recommendations of the cable manufacturer.
## ●
As illustrated in the following figure, the most important design attribute for bend radius consideration is the Minimum mated
cable clearance (Mmcc). Mmcc is the distance from the bulkhead of the chassis through the mated connectors or strain
relief including the depth of the associated 90-degree bend. Multimode fiber has many modes of light (fiber optic) traveling
through the core. As each of these modes moves closer to the edge of the core, light and the signal are more likely to be
reduced, especially if the cable is bent. In a traditional multimode cable, as the bend radius is decreased, the amount of light
that leaks out of the core increases, and the signal decreases.
Figure 9. Cable design
●Keep cables away from sharp edges or metal corners.
●Never bundle network cables with power cables. If network and power cables are not bundled separately, Electromagnetic
Interference (EMI) can affect the data stream.
●When bundling cables, do not pinch or constrict the cables.
●Avoid using zip ties to bundle cables, instead use velcro hook-and-loop ties that do not have hard edges, and can be
removed without cutting. Fastening cables with velcro ties also reduces the impact of gravity on the bend radius.
NOTE: Gravity decreases the bend radius and results in the loss of light (fiber optic), signal power, and quality.
●For overhead cable supports:
○Ensure that the supports are anchored adequately to withstand the significant weight of bundled cables. Anchor cables
to the overhead supports, then again to the rack to add a second point of support.
○Do not let cables sag through gaps in the supports. Gravity can stretch and damage cables over time. You can anchor
cables to the rack with velcro ties at the midpoint of the cables to protect your cable bundles from sagging.
○Place drop points in the supports that allow cables to reach racks without bending or pulling.
●If the cable is running from overhead supports or from underneath a raised floor, be sure to include vertical distances when
calculating necessary cable lengths.
●See Dell Networking Transceivers and Cables for additional information.
Ensure airflow
Bundled cables can obstruct the movement of conditioned air around the cluster.
●Secure cables away from fans.
●To keep conditioned air from escaping through cable holes, employ flooring seals or grommets.
Prepare for maintenance
To accommodate future work on the cluster, design the cable infrastructure. Think ahead to required tasks on the cluster, such
as locating specific pathways or connections, isolating a network fault, or adding and removing nodes and switches.
Selecting the equipment
## 25

●Label both ends of every cable to denote the node or switch to which it should connect.
●Leave a service loop of cable behind nodes. Service technicians should be able to slide a node out of the rack without pulling
on power or network connections. For Generation 6 nodes, you should be able to slide any of the four nodes out of the
chassis without disconnecting any cables from the other three nodes.
WARNING: If adequate service loops are not included during installation, downtime might be required to add
service loops later.
●Allow for future expansion without the need for tearing down portions of the cluster.
Supported switches
Switches ship with the proper rails or tray to install the switch in the rack.
These internal network switches ship with rails to install the switch. The switch rails are adjustable to fit NEMA front rail to rear
rail spacing ranging from 22 in. to 34 in. See Dell PowerSwitch specifications:
●Dell PowerSwitch S4100-ON
●Dell PowerSwitch S5232-ON
●Dell PowerSwitch Z9264-ON
Table 12. Z9264F-ON Ethernet Switch
SwitchMaximum
number of
ports
NetworkDescription
## Z9264F-
## ON
128-port64x100 GbE, 64x40 GbE,
128x10 GbE, 128 x 25GbE
(with breakout cables)
The Z9264F-ON is a fixed 2U Ethernet switch. The Z9264-F
provides either 64 ports of 100 GbE or 40 GbE in QSFP28 or
128 ports of 25 GbE or 10 GbE by breakout. Breakout cables
are only used in the odd-numbered ports and using one in odd-
numbered port disables the corresponding even-numbered port.
For example, you can use 10 GbE or 25 GbE = 128 (32x 4:1
breakouts). You can then mix and match by removing 2x 40 GbE
or 100 GbE and adding 4x 10 GbE or 25 GbE, and conversely.
Table 13. Z9100-ON Ethernet Switch
SwitchMaximum
number of
ports
NetworkDescription
## Z9100-
## ON
128-port32x100 GbE, 32x40 GbE,
128x10 GbE, 128 x 25GbE
The Z9100-ON fixed 1U Ethernet switch can accommodate high
port density (lower and upper RUs). The switch accommodates
multiple interface types (32 ports of 100 GbE or 40 GbE in
QSFP28 or 128 ports of 25 GbE or 10 GbE with breakout).
NOTE: The Z9100-ON switch is at end of life.
Table 14. S5232-ON Ethernet Switch
## Switc
h
## Maximum
number of
ports
NetworkDescription
S5232128-port32x100 GbE, 32x40 GbE, 128x10 GbE (with breakout
cables), 128 x 25GbE (with breakout cables)
Only 124 10/25 GE nodes can be
supported on the S5232 through
breakout.
Table 15. S4148F-ON Ethernet Switch
SwitchMaximum
number of
ports
NetworkDescriptions
S4148F-ON48-port2x40 GbE 48x10 GbEThe S4148F-ON is the next generation family of 10 GbE
(48 ports) top-of-rack, aggregation-switch, or router products
that aggregate 10 GbE server or storage devices. The switch
26Selecting the equipment

Table 15. S4148F-ON Ethernet Switch
SwitchMaximum
number of
ports
NetworkDescriptions
provides multi speed uplinks for maximum flexibility and simple
management.
NOTE: The S4148F-ON switch is at end of life.
Table 16. S4112F-ON Ethernet Switch
SwitchMaximum
number of
ports
NetworkDescription
## S4112F-
## ON
12-port3x100 GbE (with breakout, connect
12x10 GbE nodes using the 3x100 GbE
ports) 12 x10GbE
The S4112F-ON supports 10/100GbE with 12 fixed
SFP+ ports to implement 10 GbE and three fixed
QSFP28 ports to implement 4x10 or 4x25 using
breakout. A total of 24 10 GbE connections including
the three fixed QSFP28 ports using 4x10 breakout
cables.
Table 17. InfiniBand Switches
SwitchPortsNetwork
Nvidia Neptune MSX679036-portQDR InfiniBand
Nvidia Scorpion 2 MSB7890-ES2F36-portEDR (supports QDR)InfiniBand
Selecting the equipment27

Adding functionality to the cluster
Advanced cluster features can be obtained through OneFS software modules.
To enable a OneFS module after the cluster is installed, activate a license by entering a license key in OneFS.
More information about features that are offered through optional software modules and licensing is available in the OneFS Web
Administration Guide or the OneFS CLI Administration Guide or by contacting a sales representative.
## Topics:
•Data management modules
Data management modules
PowerScale offers software modules that add advanced data management features to your cluster.
You can install advanced data management modules to optimize storage performance. For more information, see the
PowerScale OneFS Web Administration Guide.
SmartQuotas
The SmartQuotas module is a quota-management tool that monitors and enforces administrator-defined storage limits.
Through the use of accounting and enforcement quota limits, reporting capabilities, and automated notifications, you can do the
following:
●Manage and monitor storage utilization and disk storage.
●Issue alerts when storage limits are exceeded.
A storage quota defines the boundaries of storage capacity that are allowed for a group, a user, or a directory on a cluster. The
SmartQuotas module can provision, monitor, report disk-storage usage, and send automated notifications when storage limits
are approached or exceeded. SmartQuotas also provides flexible reporting options that can help you analyze data usage.
SmartDedupe
The SmartDedupe software module enables you to save storage space on your cluster by reducing redundant data.
Deduplication maximizes the efficiency of your cluster by decreasing the amount of storage required to store multiple files
with similar blocks.
SmartDedupe deduplicates data by scanning a cluster for identical data blocks. Each block is 8 KB. If SmartDedupe finds
duplicate blocks, SmartDedupe moves a single copy of the blocks to a hidden file called a shadow store. SmartDedupe then
deletes the duplicate blocks from the original files and replaces the blocks with pointers to the shadow store.
Deduplication is applied at the directory level, targeting all files and directories underneath one or more root directories. You
can first assess a directory for deduplication and determine the estimated amount of space you can expect to save. You can
then decide whether to deduplicate the directory. After you begin deduplicating a directory, you can monitor how much space is
saved by deduplication in real time.
You can deduplicate data only if you activate a SmartDedupe license on a cluster. However, you can assess deduplication
savings without activating a SmartDedupe license.
## 3
28Adding functionality to the cluster

Preparing your facility
To ensure an optimal data center and the long-term health of the cluster, prepare and maintain the environment.
## Topics:
•Environmental requirements
Environmental requirements
Prepare the site to meet the required parameters.
NOTE: For F210, F710, and F910, the appliance must be ASHRAE A2 rated.
## Table 18. Environmental Parameters
Environmental itemDescription
A3000, A300, H7000, and H700 nodes:
●5 °C–35°C (40 °F–95°F) for continuous operation.
●35 °C–40°C (95 °F–104°F) for 10% of annual runtime.
NOTE: There are four independent cooling zones so that
a cooling failure in one node does not affect other nodes.
F210, F710, and F910: The temperature range for altitude
<900 meters or 2953 ft is 10 °C–35°C (50 °F–95°F) with no
direct sunlight on the platform. B100, P100, F210, F710, F910,
F900, F600, and F200 nodes: 10 °C–35°C (50 °F–95°F)
with no direct sunlight on the equipment.
5% to 95% percent relative humidity with 33°C (91°F)
maximum dew point. The atmosphere must be non-
condensing at all times.
NOTE: The cluster can be qualified to operate outside
these limits. Product-specific documentation for system
specifications provides more information.
F210, F710, and F910: The humidity percent range is 8%RH
with -12°C minimum dew point to 80%RH with 21°C (69.8°F)
maximum dew point.
NOTE: The atmosphere must be non-condensing at all
times.
●F600 and F200, 21.9 kg (48.28 lbs)
●F900 26.3 kg (57.98 lb)
●H700 118.4 kg (261 lb)
●H7000 141.4 kg (311.7 lb)
●B100 21.9 kg (48.3 lb)
●P100 21.9 kg (48.3 lb)
●F210 21.73 kg (47.9 lb)
●F710 21.73 kg (47.9 lb)
●F910 36.1 kg (79.6 lb)
A3000, A300, H7000 and H700 nodes in a fully configured
cabinet must sit on at least two floor tiles and can weigh
approximately 1588 kg (3500 lb).
## 4
Preparing your facility29

## Table 18. Environmental Parameters (continued)
Environmental itemDescription
●0–2439 meters (0 ft–8,000 ft) above sea level operating
altitude.
●F210, F710, and F910:
○Operational altitude derating: Maximum temperature is
reduced by 1°C/300 meters (1.8°F/984 ft) above 900
meters (2,953 ft).
The cluster might be qualified to operate outside of these limits. See the product-specific documentation for system
specifications.
Power requirements
Depending on the cabinet configuration and input AC power source, the cabinet requires between two and six independent
power sources. To determine the site requirements, use the published technical specifications and device rating labels to provide
the current draw of the devices in each rack.
Table 19. Single-phase power connection requirements
SpecificationNorth American 3 wire connection
(L = line phase, N = neutral, G =
ground) (2 L and 1 G)
International and Australian 3 wire
connection (1 L, 1 N, and 1 G)
Input nominal voltage200–240 V ac +/- 10% L - L nominal220–240 V ac +/- 10% L - L nominal
## Frequency50–60 Hz50–60 Hz
Circuit breakers
## ●30 A
●40 A for A300, A3000, H700, and
H7000 nodes
## 32 A
Power zonesTwoTwo
Power requirements at site from
minimum to maximum
●Single-phase: six 30 A drops, two per zone
NOTE: The options for the single-phase PDU interface connector are listed in
the Single-phase AC power input connector options table.
Table 20. Single-phase AC power input connector options
Single-phase rack connector optionsCustomer AC source interface
receptacle
## Site
## NEMA L6-30P
## NEMA L6-30R
North America and Japan
Russellstoll 3750DP
Russellstoll 9C33U0
North America and Japan
## IEC-309 332P6
## IEC-309 332C6
## International
30Preparing your facility

Table 20. Single-phase AC power input connector options (continued)
Single-phase rack connector optionsCustomer AC source interface
receptacle
## Site
## CLIPSAL 56PA332
## CLIPSAL 56CSC332
## Australia
Table 21. Three-phase AC power connection requirements
SpecificationNorth American (Delta) 4 wire
connection (3 L and 1 G) (L = line
phase, N = neutral, G = ground)
International and Australian (Wye) 5
wire connection (3 L, 1 N, and 1 G)
Input nominal voltage200–240 V ac +/- 10% L - L nominal220–240 V ac +/- 10% L - N nominal
## Frequency50–60 Hz50–60 Hz
Circuit breakers50 A32 A
Power zonesTwoTwo
Power requirements at site from
minimum to maximum
## Delta:
●One to two 50 A, three-phase drops per zone
●Each rack requires a minimum of two drops to a maximum of four drops.
The system configuration and the power requirement for that configuration
determine the number of drops.
## Wye:
## ●
One 32 A, three-phase drop per zone
●Each Wye rack requires two 32 A drops.
NOTE: The interface connector options for the Delta and Wye three-phase
PDUs are listed in the following tables, and .
Table 22. Three-phase Delta-type AC power input connector options
Three-phase Delta rack connector
options
Customer AC source interface
receptacle
## Site
Russellstoll 9P54U2
Russellstoll 9C54U2
North America and International
Hubbell CS-8365C
Hubbell CS-8364C
## North America
Table 23. Three-phase Wye-type AC power input connector options
Three-phase Wye rack connector
options
Customer AC source interface
receptacle
## Site
## GARO P432-6
## GARO S432-6
## International
Preparing your facility31

Power Requirements for Equipment
To support the recommended power parameters of equipment, prepare the site.
Plan to set up redundant power for each rack. Supply the power with a minimum of two separate circuits on the electrical
system. If one of the circuits fails, one or more remaining circuits could handle the full power load of the rack.
WARNING: Inadequate cooling might cause instability, exposing the customer to Data Unavailable (DU) or Data
Loss (DL).
## ●
Power each Power Distribution Panel (PDP) within the rack with a separate power circuit.
●Power the two IEC 60320 C14 power input connectors in the node by separate PDPs within the rack.
When calculating the power requirements for circuits that supply power to the rack, consider the power requirements for
network switches and for nodes.
For power allocation for PowerScale F200, F600, F600-Prime, and F900 nodes:
●Nodes with proper cables can operate with 110 V or 115 V.
●All power supplies support 110 - 240 VAC, with 50-60 Hz.
●Use higher input voltages, such as 208 V when possible due to the improved efficiencies.
●Nodes operated in data centers as an Enterprise Storage product within a cooled environment.
●A higher voltage produces less current for a given wattage and less heat.
●Power supply efficiency might vary on 110 V or 115 V compared to 208 V.
●A UPS is recommended to avoid outages and damage to components or brown outs, avoid data loss, and so on.
○UPS would support at a minimum:
￭All nodes
￭2x backend ( IB or Ethernet) switch
￭The customer Ethernet edge
Each circuit should be rated appropriately for the node type and input voltage. See product specifications for power
requirements specific to each node type.
Radio Frequency Interference (RFI) requirements
Electromagnetic fields that include radio frequencies can interfere with the operation of electronic equipment.
The hardware is certified to withstand radio frequency interference in accordance with standard EN61000-4-3. In data centers
that employ intentional radiators, such as cell phone repeaters, the maximum ambient RF field strength should not exceed 3
## Volts/meter.
Take field measurements at multiple points close to the equipment. Consult with an expert before you install any emitting device
in the data center. If you suspect high levels of RFI, contract an environmental consultant to evaluate RFI field strength and
address mitigation efforts.
The ambient RFI field strength is inversely proportional to the distance and power level of the emitting device. To determine if
the cell phone repeater or other intentional radiator device is at a safe distance from the equipment, use the table as a guide.
## Table 24.
Minimum recommended distance from RF emitting device
Repeater power level*Recommended minimum distance
1 Watt3 meters
2 Watt4 meters
5 Watt6 meters
7 Watt7 meters
10 Watt8 meters
12 Watt9 meters
15 Watt10 meters
- Effective Radiated Power, ERP
## 32
Preparing your facility

Hardware acclimation
Systems and components must acclimate to the operating environment before power is applied to them. Once unpackaged, the
system must reside in the operating environment for up to 16 hours to thermally stabilize and prevent condensation.
NOTE: The storage conditions for some parts, such as hard drive, SSDs, and batteries, affect the wear and life of those
parts. Do not exceed six consecutive months of unpowered storage from the delivery date.
## NOTE:
●If there are signs of condensation after the recommended acclimation time has passed, allow an additional eight hours to
stabilize.
●System components must not experience changes in temperature and humidity that are likely to cause condensation to
form on or in that system or component. Do not exceed the shipping and storage temperature gradient of 25°C per hr
(45°F per hr).
●To facilitate environmental stabilization, open both front and rear cabinet doors.
The acclimatization wait time table provides the amount of time that the system or component requires to acclimate to its new
environment. The number of hours needed is based on the transit or storage environment during the prior 24 hours and the
operating environment of the equipment.
Table 25. Acclimatization wait time
TemperatureRelative humidityOperating environment
temperature
Acclimatization time
Nominal 20–22°C (68–
## 72°F)
Nominal 40–55% RHNominal 20–22°C (68–72°F) 40–
## 55% RH
1 hour or less
Cold <20°C (68°F)Dry <30% RH<30°C (86°F)4 hours
Cold <20°C (68°F)Damp >30% RH<30°C (86°F)4 hours
Hot >22°C (72°F)Dry <30% RH<30°C (86°F )4 hours
Hot >22°C (72°F)Humid 30–45% RH<30°C (86°F)4 hours
Hot >22°C (72°F)Humid 45–60% RH<30°C (86°F)8 hours
Hot >22°C (72°F)Humid >60% RH<30°C (86°F)16 hours
UnknownUnknown<30°C (86°F)16 hours
Air quality requirements
Nodes are consistent with the air quality requirements and thermal guidelines of the American Society of Heating, Refrigeration,
and Air Conditioning Engineers (ASHRAE).
For specifics, see the ASHRAE Environmental Standard Handbook and the most current revision of Thermal Guidelines for Data
Processing Environments, Second Edition, ASHRAE 2009b.
Most products are best suited for Class 1 datacom environments, which consist of tightly controlled environmental parameters,
including temperature, dew point, relative humidity, and air quality. These facilities house mission-critical equipment and are
typically fault-tolerant, including the air conditioners.
The data center should maintain a cleanliness level as identified in ISO 14664-1, Class 8 for particulate dust and pollution control.
The air entering the data center should be filtered with a MERV 11 filter or better. The air within the data center should be
continuously filtered with a MERV 8 or better filtration system. Take measures to prevent conductive particles, such as zinc
whiskers, from entering the facility.
NOTE: For F210, F710, and F910, a MERV 11 or 13 filter is required.
The allowable relative humidity level is 20% to 80% non-condensing. However, the recommended operating environment range
is 40% to 55%. Lower temperatures and humidity minimize the risk of hardware corrosion and degradation, especially in data
centers with gaseous contamination, such as high sulfur content. Minimize humidity fluctuations within the data center. Prevent
outside air contaminants and humidity from entering the facility by positively pressurizing the data center and installing air
curtains on entryways.
Preparing your facility
## 33

For facilities below 40% relative humidity, use grounding straps when contacting the equipment to avoid the risk of electrostatic
discharge (ESD), which can harm electronic equipment.
As part of an ongoing monitoring process for the corrosiveness of the environment, place copper and silver coupons per ISA
71.04-1985, Section 6.1 Reactivity in airstreams representative of those in the data center. The monthly reactivity rate of the
coupons should be fewer than 300 Angstroms. If the monitored reactivity rate exceeds 300 Angstroms, analyze the coupon for
material species and put a corrective mitigation process in place.
Site floor load-bearing requirements
Install the cabinet in raised or unraised floor environments capable of supporting at least 1,495 kg (3,300 lb) per cabinet. The
system may weigh less, but requires extra floor support margin to accommodate equipment upgrades or reconfiguration.
In a raised floor environment:
●60 x 60 cm (24 x 24 inches) heavy-duty, concrete filled steel floor tiles are recommended.
●Use only floor tiles and stringers that are rated to withstand:
○Concentrated loads of two casters or leveling feet, each weighing up to 818 kg (1,800 lb).
○Minimum static ultimate load of 1,495 kg (3,300 lb).
○Rolling loads of 818 kg (1,800 lb) per floor tile. On floor tiles that do not meet the rolling load measurement must use
coverings, such as plywood to protect floors during system roll.
●Position that is adjacent cabinets with no more than two casters or leveling feet on a single floor tile.
●Cutouts in 24 x 24 inches in tiles must be no more than 20.3 cm (8 inches) wide by 15.3 cm (6 inches) deep and centered.
The front and rear must be 22.9 cm (9 inches), and 20.3 cm (8 inches) from the sides. Since cutouts weaken the tile, you
can minimize deflection by adding pedestal mounts adjacent to the cutout. The manufacturer recommends that the number
and placement of additional pedestal mounts relative to a cutout must be in accordance with the floor tile.
When positioning the cabinet, take care to avoid moving a caster into a floor tile cutout.
Ensure that the combined weight of any other objects in the data center does not compromise the structure of the raised or
sub-floor, which is also referred as the unraised floor.
It is recommended that a certified data center design consultant inspect the site to ensure that the floor can support the
system and surrounding weight.
## NOTE:
The cabinet weight depends on the specific product configuration. Calculate the total by using the Power
## Calculator.
Shipping and storage requirements
## CAUTION:
Systems and components must not experience changes in temperature and humidity that are likely
to cause condensation to form on or in that system or component. Do not exceed the shipping and storage
temperature gradient of 45°F per hr (25°C per hr).
Table 26. Shipping and storage requirements
RequirementDescription
Ambient temperature-40° F to 149°F (-40°C to 65°C)
Temperature gradient45°F per hr (25°C per hr)
Relative humidity10% to 90% noncondensing
Elevation-50 ft to 35,000 ft (-16 m to 10,600 m)
Unpowered storage timeDo not exceed six consecutive months of unpowered storage.
Fire suppressant disclaimer
Fire prevention equipment in the computer room should always be installed as an added safety measure. A fire suppression
system is the responsibility of the customer. When selecting appropriate fire suppression equipment and agents for the data
center, choose carefully. An insurance underwriter, local fire marshal, and local building inspector are all parties that you should
consult during the selection of a fire suppression system that provides the correct level of coverage and protection.
## 34
Preparing your facility

Equipment is designed and manufactured to internal and external standards that require certain environments for reliable
operation. Compatibility claims and recommendations on fire suppression systems are not provided through Dell. It is not
recommended to position storage equipment directly in the path of high-pressure gas discharge streams or loud fire sirens to
minimize the forces and vibration adverse to system integrity.
NOTE: The previous information is provided on an as-is basis and provides no representations, warranties, guarantees, or
obligations on the part of our company. This information does not modify the scope of any warranty set forth in the terms
and conditions of the basic purchasing agreement between the customer and the manufacturer.
Preparing your facility35