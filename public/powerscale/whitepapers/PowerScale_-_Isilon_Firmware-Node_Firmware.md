

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
Version: 6.0.0.131Generated on April 29 2026 11:22 AM
T o p i c
## Firmware
S e l e c t i o n s
## Select Firmware Option: Node Firmware
Node Firmware Release Notes: Node Firmware 13.2.3 (Any node running OneFS 9.0.0.0 and later)
If you find any errors in this procedure or have comments regarding this application, please
submit feedback here - https://contentfeedback.dell.com/home
Page 1 of 20

## Dell Technologies – Restricted Use – Confidential
## Contents
Preliminary Activity Tasks .......................................................................................................3
Read, understand, and perform these tasks.................................................................................................3
Node Firmware 13.2.2.............................................................................................................5
Page 2 of 20

## Dell Technologies – Restricted Use – Confidential
## Preliminary Activity Tasks
This section may contain tasks that you must complete before performing this procedure.
Read, understand, and perform these tasks
1.Table 1 lists tasks, cautions, warnings, notes, and/or knowledgebase (KB) solutions that you need to
be aware of before performing this activity.  Read, understand, and when necessary perform any
tasks contained in this table and any tasks contained in any associated knowledgebase solution.
Table 1List of cautions, warnings, notes, and/or KB solutions related to this activity
Page 3 of 20

## Dell Technologies – Restricted Use – Confidential
Page 4 of 20

## Dell Technologies – Restricted Use – Confidential
## Node Firmware 13.2.2
Page 5 of 20


Dell Customer Communication - Confidential Dell Customer Communication - Confidential Dell Customer Communication - Confidential







PowerScale Node Firmware Package 13.2.3

Release notes
## March 2026

The firmware package is available for download from Dell Product Support. Follow the instructions in this guide to update the firmware.
NOTE: If you require assistance with the node firmware update, contact Dell Product Support and open an SR ticket.

Supported platforms and system requirements ........................................................................................................................................... 2
Confirming free space ............................................................................................................................................................................... 2
New features and resolved issues .............................................................................................................................................................. 2
Known issues ........................................................................................................................................................................................... 3
Firmware versions .................................................................................................................................................................................... 4
Upgrade considerations .......................................................................................................................................................................... 11
Where to get help................................................................................................................................................................................... 12
Additional options for getting help ........................................................................................................................................................... 12
Notes, cautions, and warnings ................................................................................................................................................................. 13










Page 6 of 20

## 2


Supported platforms and system requirements
Before updating the No d e Firmware Package (NFP) on the node, confirm that the OneFS version and node hardware model support the
new firmware.
You must meet the following requirements for this NFP version:

● OneFS 9.0.0 and later
● Isilon Generation 6 models: A200, A2000, F800, F810, H400, H500, H600, and H5600
● PowerScale Flash models: F200, F210, F600, F710, F900, F910
● PowerScale Accelerator models: B100, P100, and PA110
● PowerScale Archive and Hybrid models: A300, A300-L, A310, A3000, A3000-L, A3100, H700, H710, H7000, and H7100

NOTE: OneFS 9.11.0.0 requires NFP 13.0 minimum.
NOTE: OneFS 9.13.0.0 requires NFP 13.2 minimum.

NOTE: For NFS over RDMA users the following versions are required: OneFS 9.2.1.15 or later, 9.3.0.8 or later, 9.4.0.5 or later, or 9.5.0.0 or
later.

Confirming free space
Before upgrading the node firmware package, ensure that there is enough free space available for the node firmware binaries. Approximately
876MB of free space in /ifs/ is required, and up to 300 MB of free space in /tmp on each PowerScale Flash and Accelerator model.
New features and resolved issues
Prior NFP release notes identifying new features and resolved issues are available at the PowerScale Info Hub:
https://www.dell.com/support/kbdoc/en-us/000198854/firmware-powerscale-info-hub

PowerScale flash platforms leverage the general-purpose PowerEdge server platform, customized for the PowerScale storage appliance
application.  Customers are advised to install only the PowerEdge firmware included in the PowerScale node firmware packages.  These firmware
versions are qualified within the PowerScale storage appliances, and in some instances interface dependencies require specific versions to ensure
proper functionality.
New features

PowerScale Flash: F210, F710, F910, PA110
- No change from NFP 13.2.2

PowerScale Flash: F200, F600, F900, B100, P100
- No change from NFP 13.2.2

PowerScale Archive and Hybrid: A300, A310, A3000, A3100, H700, H710, H7000, H7100
- Add support for Broadcom 25GbE NICs (with compatible OneFS release)
## Generation 6: A200, A2000, H400, H500, H5600, H600, F800, F810
- No change from NFP 13.2.2
Page 7 of 20

## 3



Resolved issues
PowerScale Flash and Accelerator: F210, F710, F910, PA110
- None this release

PowerScale Flash and Accelerator: F200, F600, F900, B100, P100
- None this release

PowerScale Archive and Hybrid: A310, A3100, H710, H7100
- Reboot for Nvidia NIC firmware updates fails to update firmware (344545)
- Resolve BIOS to correctly report as A-rev (10736)
- Missing port information of FQDD for CX6 VPI 100GbE NIC (321280)
- Pressing x and CTRL+x have the same behavior when entering POST (10502)
- BIOS incorrectly assumes NVMe IO Queues (337891)
- Note: It is expected to encounter UEFI0074 "The Secure Boot policy has been modified since the last time the system was started" during the
initial BIOS POST when upgrading the BIOS from/to version 1.0.3-1.1.0.

PowerScale Archive and Hybrid: A300, A3000, H700, H7000
- Update to Intel 2025.3 IPU
- Enable HTTP boot in BIOS (25873)
- Suppress NTB link bounce (25832)
- Add Microsoft 2023 UEFI Secure Boot certificates (26153)

## Generation 6: A200, A2000, H400, H500, H5600, H600, F800, F810
- None this release

Known issues
- PowerScale flash and accelerator systems: Since the CMOS battery sensor is no longer available, the Lifecycle Controller logs display BAT0022
when the CMOS battery voltage drops below 2.2V while the server is on AC power.  This log message is not available in the OneFS logging.
- The NFP install failed to make progress on the firmware update (CPE05E-280: B100, F200, F600, F700, F900, and P100)
o This fix is pending for OneFS 9.14.0 and LTS MRs
- For PowerScale systems with CX8 400GbE dual port NIC, fans may intermittently oscillate at higher speeds (around 50% PWM) and fluctuate
between different speeds even when the system is idle.

Page 8 of 20

## 4


Firmware versions
The following tables list the firmware devices and versions included in the node firmware package. These tables are organized by platform type
and generation.
PowerScale Accelerator and Flash Nodes
PowerScale’s Accelerator and Flash nodes leverage Dell’s PowerEdge server platforms and include firmware device versions qualified specifically
for the PowerScale storage appliance configuration.  This section identifies the firmware components managed by the Non-Disruptive Upgrade
(NDU) process.

NOTE: The PowerScale 16G BIOS, CPLD, iDRAC, and VOSS firmware is qualified as a matched set, and must not be upgraded outside of the
NDU process.
Table 1. PowerScale Node Firmware: F210, F710, F910, and PA110
Firmware Device Type Update Version Updated in this Release
## BIOS BIOS 2.8.2
Backplane 1 (non-F910) FRMW 7.10
Backplane 1 and Backplane 2 (F910 only) FRMW 3.33
BOSS-N1 Monolithic (PA110 only) FRMW 2.1.13.2025
Broadcom NetXtreme Gigabit Ethernet
## (BCM5720)
## FRMW 22.31.6
Integrated Remote Access Controller (iDRAC) FRMW 7.20.80.50
System CPLD FRMW 1.2.7
Emulex LPe35002-M2-D 2-Port 32Gb Fibre
Channel Adapter (PA110 only)
## FRMW 03.05.23
Mellanox-CX6-200GbE 200GigE 20.39.1002+DEL0000000052
Mellanox-CX6-100GbE 100GigE 22.32.2004+DEL0000000027
Mellanox-CX6-25GbE 25GigE 26.36.1010+DEL0000000031
BOSS Dell EC NVMe ISE 7450 RI M.2 80 960GB
(PA110 only)
## FRMW 1.1.0
BOSS Dell NVMe ISE PE9010 GEN4 RI M.2
960GB (PA110 only)
## FRMW 1.0.0
VOSS Dell EC NVMe OPAL 7400 RI M.2 110
## 960GB
## FRMW 1.4.0
VOSS Dell EC NVMe FIPS 7400 RI M.2 110
## 960GB
## FRMW 2.5.0
VOSS Dell EC NVMe ISE 7450 RI M.2 110 960GB FRMW 1.4.0
VOSS Dell EC NVMe FIPS 7450 RI M.2 80 960GB FRMW 3.4.0
VOSS Dell EC NVMe ISE 7450 RI M.2 80 960GB FRMW 1.4.0
VOSS Dell EC NVMe ISE PE9010 RI M.2 80
## 960GB
## FRMW 1.3.1
VOSS Dell DC NVMe PM9A3 RI M.2 110 960GB FRMW 1.1.1
VOSS Dell EC NVMe PM9D3A RI M.2 80 960GB FRMW 1.0.1


Page 9 of 20

## 5


Table 2. PowerScale Node Firmware: B100, F200, F600, F900, and P100
Firmware Device Type Update Version Updated in this Release
## BIOS BIOS 2.25.0
Backplane 1  FRMW 4.35
Backplane 2 (F900 only) FRMW 4.35
Backplane Expander (F600 only) FRMW 2.46
Broadcom NetXtreme Gigabit Ethernet
## (BCM5720)
## FRMW 22.31.6
Dell HBA330 Mini (N/A PowerScale F900
nodes)
## FRMW 16.17.01.00
Emulex LightPulse LPe31002 (B100 only) 16Gb FC 03.05.23
Integrated Remote Access Controller (iDRAC) FRMW 7.00.00.183
Intel Gigabit Ethernet (i350-t rNDC) FRMW 22.0.9
Mellanox-CX6-100GbE 100GigE 22.32.2004+DEL0000000027
Mellanox-CX6-25GbE 25GigE 26.36.1010+DEL0000000031
Mellanox-CX5-100GbE 100GigE 16.35.1012+DEL0000000004
Mellanox-CX4-25GbE 25GigE 14.32.2004+DEL2420110034
Mellanox-CX3 IB/40 GbE 2.42.5000+EMC0000000004


Page 10 of 20

## 6


PowerScale Archive and Hybrid Nodes
This section identifies the firmware components managed by the Non-Disruptive Upgrade (NDU) process.

Table 3. PowerScale Archive and Hybrid Node Firmware: A310, A3100, H710, and H7100
Firmware Device Purpose / Type Update Version Updated in this Release
AltoSaxadpt_symphony BMC - Adaptive Cooling 03.70
AltoSaxbem_as_mongoose_lw_m1b Battery Charge Circuit 03.20
AltoSaxgem_symphony BMC - Main (GEM) 11.01 Yes
AltoSaxccdes_catamarancos Catamaran CDES V2 1.10.8+21.00
AltoSaxast26xx_cec_region0 Cryptographic Embedded Controller 03.00
AltoSaxast26xx_cec_region1 Cryptographic Embedded Controller 32.03
AltoSaxast26xx_cec_region3 Cryptographic Embedded Controller 00.03
AltoSaxcmd_rev_table CMD Revision Table (not software) 20.84
AltoSaxcmd_100dc12pin_v1 CMD Image (motherboard) 02.12.75.03
AltoSaxcmd_64pincos CMD Image (Catamaran V2) 02.09.117.03
AltoSaxeth_bcm5720_altosax 1GbE LAN FW 01.00
AltoSaxfp_fpinffw Front Panel LED Infinity 02.0c
AltoSaxfp_fpioc Front Panel LED Infinity 00.0b
AltoSaxfw_map_table Firmware Map Table (not software) 00.04
AltoSaxstoragebios_altosax BIOS 01.10 Yes
AltoSaxps0_gen3_acbel_optimuswr CFF PSU 03.01
AltoSaxps0_gen3_artesyn_ramjet CFF PSU 02.30
AltoSaxps0_gen3_liteon_atlas CFF PSU 03.08
AltoSaxps1_gen3_acbel_optimuswr CFF PSU 03.01
AltoSaxps1_gen3_artesyn_ramjet CFF PSU 02.30
AltoSaxps1_gen3_liteon_atlas CFF PSU 03.08
AltoSaxsas_catamaran_3808 SAS controller (Catamaran V2) 0028.0015.0000.0000
AltoSaxssp_altosax BMC - SSP 02.00
AltoSaxvrd0_altosax_inf Voltage Regulator 00.05
AltoSaxvrd0_altosax_inf_v1 Voltage Regulator 02.03
AltoSaxvrd0_altosax_rea Voltage Regulator 00.20
AltoSaxvrd0_altosax_rea_v1 Voltage Regulator 02.20
AltoSaxaltosax SP SPI ROM 01.10 Yes
M.2-NVMe-7400-FIPS M.2 drive firmware 2.5.0
M.2-NVMe-7450-FIPS M.2 drive firmware 3.1.0
M.2-NVMe-7450-ISE M.2 drive firmware 1.1.0
Network Interface Cards Mellanox CX6-25GbE 26.36.1010+DEL0000000031
Mellanox CX6-100GbE 22.32.2004+DEL0000000027
Mellanox CX6 IB/100GbE 20.37.1014+EMC0000000029



Page 11 of 20

## 7


Table 4. PowerScale Archive and Hybrid Node Firmware: A300, A3000, H700, and H7000

Firmware Device Purpose / Type Update Version Updated in this Release
MLKadpt_skylanders BMC - Adaptive Cooling 02.80
MLKbem_mongoose Battery Charge Circuit 03.20
MLKbem_mongoose_lw_mlb Battery Charge Circuit 03.20
MLKcatamaran SAS controller (Catamaran V2) 0028.0015.0000.0000
MLKccdes Catamaran CDES 1.10.8+21.00
MLKccdes_catamaran Catamaran CDES V2 1.10.8+21.00
MLKcdes CDES-2 (Gen6-MLK) 2.44.0+0.18.0+21.00
MLKcec_region0 Cryptographic Embedded Controller 02.00
MLKcec_region1 Cryptographic Embedded Controller 32.02
MLKcec_region3 Cryptographic Embedded Controller 00.03
MLKcmd_rev_table CMD Revision Table (not software) 20.85
MLKcmd_100dc12pin CMD Image 02.13.75.03
MLKcmd_64pin CMD Image 02.05.102.02
MLKcmd_64pincos CMD Image (Catamaran V2) 02.09.117.03
MLKbios_gryphon BIOS 10.81 Yes
MLKpost_gryphon POST 10.43
MLKserdes_infinitymlk SERDES 00.50
MLKspime_gryphon BIOS ME 10.00 Yes
MLKuefi_fw_volume UEFI 40.87
MLKeth_infinitymlk 1GbE LAN FW 02.64
MLKfp_fpinffw Front Panel LED Infinity 02.0c
MLKfp_fpioc Front Panel LED Infinity 00.0b
MLKfullbios_gryphon_post SP SPI ROM 10.81 Yes
MLKfw_map_table Firmware Map Table (not software) 40.52
MLKgem_skylanders BMC - Main (GEM) 45.66
MLKps0_gen2_artesyn_optimus CFF PSU 02.18
MLKps0_gen2_artesyn_ramjet CFF PSU 02.18
MLKps0_gen3_acbel_optimuswr CFF PSU 03.01
MLKps0_gen3_artesyn_ramjet CFF PSU 02.30
MLKps1_gen2_artesyn_optimus CFF PSU 02.18
MLKps1_gen2_artesyn_ramjet CFF PSU 02.18
MLKps1_gen3_acbel_optimuswr CFF PSU 03.01
MLKps1_gen3_artesyn_ramjet CFF PSU 02.30
MLKsas_catamaran Gen6 SAS controller UEFI driver 0015.0004.0000.0000
MLKsas_infinitymlk SAS controller 0001.0004.0000.11193
MLKssp_infinitymlk BMC - SSP 01.44
MLKvrd0_infinitymlk_infineon Voltage Regulator 01.01
MLKvrd1_infinitymlk_infineon Voltage Regulator 01.01
MLKvrd2_infinitymlk_infineon Voltage Regulator 01.01
MLKvrd3_infinitymlk_infineon Voltage Regulator 01.02
MLKvrd0_infinitymlk_TI Voltage Regulator 01.01
MLKvrd1_infinitymlk_TI Voltage Regulator 01.01
MLKvrd2_infinitymlk_TI Voltage Regulator 01.01
MLKvrd3_infinitymlk_TI Voltage Regulator 01.01
Network Interface Cards Mellanox CX3 IB/40GbE 2.42.5000+EMC0000000004
Mellanox CX4-25GbE 14.32.2004+DEL2420110034
Mellanox CX5-100GbE 16.35.1012+DEL0000000004
Mellanox CX6-25GbE 26.36.1010+DEL0000000031
Mellanox CX6-100GbE 22.32.2004+DEL0000000027
Mellanox CX6 IB/40GbE 20.37.1014+EMC0000000029
Page 12 of 20

## 8




Page 13 of 20

## 9


## Isilon Generation 6 Nodes
This section identifies the firmware components managed by the Non-Disruptive Upgrade (NDU) process.
Table 4. Isilon Generation 6 Node Firmware: A200, A2000, H400, H500, H5600, H600, F800, and F810

Isilon Platform Firmware Device Update Version Updated in this Release
A200, A2000, and H400 DEadpt_moons 01.80
DEbcc_infinity Replaced by DEbem_mongoose_lw and
DEbem_mongoose

DEbem_mongoose_lw (bcc f/w) 03.20
DEbem_mongoose (bcc f/w) 03.20
DEbios_banshee 37.44
DEbmc_bblock_moons 01.40
DEbmc_main 24.52
DEccdes 1.10.8+21.00
DEcdes 2.44.0+0.18.0+21.00
DEcmd_100d815pin 03.08.103.01
DEcmd_mam_64pin 02.05.102.02
DEcmd_cat_64pin 02.05.102.02
DEeth_infinity 02.52
DEeth_sageville_infinity 0128.0000.0005.0195
DEfp_fpinffw 02.0c
DEfp_fpioc 00.0b
DEpost_banshee 28.18
DEps gen2_artesyn: 02.14
zeus_acbel: 04.12
gen3_acbel_optimuswr: 03.01
gen3_artesyn_ramjet: 02.30

DEsas_catamaran 0015.0004.0000.0000
DEsas_infinity 0001.0004.0000.11193
DEserdes_banshee 08.00
DEspime_banshee 04.00
DEssp_infinity 02.84
DEuefi_fw_volume_infinity 03.43
DEvrd0_banshee_stmicro 02.01
DEvrd1_banshee_stmicro 01.00
DEps0_gen2_acbel_hv_zeus 04.12
DEps0_gen2_artesyn 02.18
DEps0_gen3_acbel_optimuswr 03.01
DEps0_gen3_artesyn_ramjet 02.30
DEps1_gen2_artesyn 02.18
DEps1_gen3_acbel_optimuswr 03.01
DEps1_gen3_artesyn_ramjet 02.30
H500, H5600, H600, F800, and
## F810
EPadpt_moons 01.80
EPbcc_infinity Replaced by EPbem_mongoose_lw and
EPbem_mongoose

EPbem_mongoose_lw (bcc f/w) 03.20
EPbem_mongoose (bcc f/w) 03.20
EPbios_warthog 32.54
EPbmc_bblock_moons 01.40
EPbmc_main 24.52
EPccdes 1.10.8+21.00
EPcdes 2.44.0+0.18.0+21.00
EPcmd_100d815pin 03.08.103.01
EPcmd_mam_64pin 02.05.102.02
EPcmd_cat_64pin 02.05.102.02
EPeth_infinity 02.52
EPfp_fpinffw 02.0c
EPfp_fpioc 00.0b
EPpost_warthog 22.17
Page 14 of 20

## 10


Isilon Platform Firmware Device Update Version Updated in this Release
EPps gen2_artesyn: 02.14
zeus_acbel: 04.12
gen3_acbel_optimuswr: 03.01
gen3_artesyn_ramjet: 02.30

EPsas_catamaran 0015.0004.0000.0000
EPsas_infinity 0001.0004.0000.11193
EPserdes_warthog 08.00
EPspime_warthog 10.00
EPssp_infinity 02.84
EPuefi_fw_volume_infinity 03.43
EPvrd0_warthog_stmicro 01.01
EPvrd1_warthog_stmicro 01.01
EPvrd2_warthog_stmicro 01.01
EPps0_gen2_acbel_hv_zeus 04.12
EPps0_gen2_artesyn 02.18
EPps0_gen3_acbel_optimuswr 03.01
EPps0_gen3_artesyn_ramjet 02.30
EPps1_gen2_acbel_hv_zeus 04.12
EPps1_gen2_artesyn 02.18
EPps1_gen3_acbel_optimuswr 03.01
EPps1_gen3_artesyn_ramjet 02.30
Network Interface Cards Emulex LightPulse FC Adapter
(Fibre Channel + 10GbE)
## 11.4.204.21
Mellanox CX-3 IB/10GbE 2.42.5000+ISL1090110018
Mellanox CX-3 IB/40GbE 2.42.5000+EMC0000000004
Mellanox CX-3 (40GbE) 2.42.5000+EMC1090111023
Mellanox CX-3 (10GbE) 2.42.5000+EMC0000000002
Mellanox CX-4 (25GbE) 14.32.2004+DEL2420110034
Innova 40GbE Compression NIC (F810 only)
FPGA 0x100a+0x100a
Firmware 16.28.1002+EMC0000000017

Page 15 of 20

## 11


Upgrade considerations
Before you begin a firmware upgrade, be aware of the effect the upgrade process has on cluster operations.
Each node is upgraded and can restart automatically when the upgrade is complete. There are three upgrade options: parallel (recommended),
rolling (slowest), or simultaneous (fastest). The time taken for upgrade is reduced substantially by using the simultaneous option. Simultaneous
upgrades update the cluster firmware in less time than parallel or rolling upgrades. However, there is slightly more risk for client disruption during
a simultaneous upgrade.

NOTE: If there is a partial upgrade, the system generates an alert indicating that a firmware upgrade has not been applied.



Run a firmware assessment
The firmware upgrade process uses the upgrade logs for firmware assessments. It summarizes data gathered by isi_upgrade_logs and
provides that information in a report.

The Node Firmware Package must be in the /ifs directory.
- To run an assessment, enter the following command:
isi upgrade firmware assess --fw-pkg=/ifs/<path to NFP>

- To see the results and obtain the report, enter the following command:
isi_upgrade_logs --get-fw-report

- Follow the recommendations in the report.

The assessment might take an extended amount of time to complete based on cluster size, activity, platform types, etc.

Upgrade the firmware
Upgrade nodes to the current firmware package.
To determine which nodes require upgrading, view the firmware assessment report.
- Follow the recommendations in the firmware assessment report.
- To upgrade the nodes to the current firmware package, run the following command:
isi upgrade cluster firmware start --fw-pkg=/ifs/<path to nfp> --nodes-to-upgrade=<node number> <--
rolling | --parallel | --simultaneous>

NOTE: You must choose either the rolling, simultaneous, or parallel upgrade option for the command to function. If you are unsure which
option to choose, --parallel is the recommended option.

- To check the progress of the firmware upgrade, run the following command at any time:
isi upgrade cluster nodes firmware progress list


- When the upgrade completes, run the firmware assessment report and if any nodes still need an upgrade, repeat steps 1 and 2 on those
nodes.
- The firmware upgrade is complete when the firmware assessment report does not list any nodes that need upgrades.
Page 16 of 20

## 12



Where to get help

The Dell Technologies Support site contains important information about products and services including drivers, installation packages, product
documentation, knowledge base articles, and advisories.
A valid support contract and account might be required to access all the available information about a specific Dell Technologies product or
service.

Additional options for getting help
This section contains resources for getting answers to questions about PowerScale products.

Dell Technologies support
● https://www.dell.com/support/incidents-online/contactus/product/isilon-
onefs.
Telephone support
● United States: 1-800-SVC-4EMC (1-800-782-4362)
## ● Canada: 1-800-543-4782
## ● Worldwide: 1-312-725-5401
● Local phone numbers for a specific country or region are available at
https://www.dell.com/support/incidents-online/contactus/product/isilon-onefs.
PowerScale OneFS Documentation Info Hubs
● https://www.dell.com/support/kbdoc/000152189/powerscale-onefs-info-hubs
Dell Community Board for self-help ● https://www.dell.com/community
Page 17 of 20



Notes, cautions, and warnings

NOTE: A NOTE indicates important information that helps you make better use of your product.

CAUTION: A CAUTION indicates either potential damage to hardware or loss of data and tells you how to avoid the problem.

WARNING: A WARNING indicates a potential for property damage, personal injury, or death.





















































© 2026 Dell Inc. or its subsidiaries. All Rights Reserved.  Dell Technologies, Dell, and other trademarks are trademarks of Dell Inc. or its subsidiaries. Other
trademarks may be trademarks of their respective owners.
Page 18 of 20

## Dell Technologies – Restricted Use – Confidential
Page 19 of 20

## Dell Technologies – Restricted Use – Confidential
Page 20 of 20