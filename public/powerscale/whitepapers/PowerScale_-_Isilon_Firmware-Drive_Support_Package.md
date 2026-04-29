

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
Version: 6.0.0.131Generated on April 29 2026 11:23 AM
T o p i c
## Firmware
S e l e c t i o n s
## Select Firmware Option: Drive Support Package
Drive Support Package Release Notes: DSP 1.60.1
If you find any errors in this procedure or have comments regarding this application, please
submit feedback here - https://contentfeedback.dell.com/home
Page 1 of 36

## Dell Technologies – Restricted Use – Confidential
## Contents
Preliminary Activity Tasks .......................................................................................................3
Read, understand, and perform these tasks.................................................................................................3
PowerScale-Drive-Support-Package-1.60.1-Release-Notes ..................................................5
Page 2 of 36

## Dell Technologies – Restricted Use – Confidential
## Preliminary Activity Tasks
This section may contain tasks that you must complete before performing this procedure.
Read, understand, and perform these tasks
1.Table 1 lists tasks, cautions, warnings, notes, and/or knowledgebase (KB) solutions that you need to
be aware of before performing this activity.  Read, understand, and when necessary perform any
tasks contained in this table and any tasks contained in any associated knowledgebase solution.
Table 1List of cautions, warnings, notes, and/or KB solutions related to this activity
Page 3 of 36

## Dell Technologies – Restricted Use – Confidential
Page 4 of 36

## Dell Technologies – Restricted Use – Confidential
PowerScale-Drive-Support-Package-1.60.1-Release-Notes
Page 5 of 36

## Dell Customer Communication - Confidential


## Internal Use - Confidential







PowerScale Drive Support Package
## 1.60.1

## Release Notes
## April 2026






Page 6 of 36

## Dell Customer Communication - Confidential

## 2

## Internal Use - Confidential

## Contents
Overview ................................................................................................................................... 3
New features ............................................................................................................................. 3
New drives................................................................................................................................. 3
Regression drive FWs ............................................................................................................... 3
Resolved issues ........................................................................................................................ 3
Known issues ............................................................................................................................ 4
Supported drives ....................................................................................................................... 4
Supported bootflash drives ...................................................................................................... 25
Installation ............................................................................................................................... 26
Update the drive firmware ........................................................................................................ 27
Verify a drive firmware update ................................................................................................. 27
Verify free disk space .............................................................................................................. 27
Extract the drive support package ........................................................................................... 28
Verify drives that need firmware updates ................................................................................. 28
Where to get help .................................................................................................................... 28
Additional options for getting help ............................................................................................ 28
Notes, cautions, and warnings ................................................................................................. 29





















Page 7 of 36

## Dell Customer Communication - Confidential

## 3

## Internal Use - Confidential
## Overview
Install a drive support package (DSP) to update the drives on your PowerScale cluster to the latest supported drive
firmware versions.
The drive support package also updates the following information about the drives in a cluster:
● List of supported drives
● Drive firmware metadata
● SSD wear monitoring data
● SAS and SATA settings and attributes

New features
This DSP includes the following new features:

New drives

This DSP includes the following newly supported drives:

Drive  Platform  FW  Type
WD Paris C 16TB SATA ISE A310/A3100/H710/H7100 T290   NPI


Regression drive FWs

Drive  Platform  FW  Type
STX Marlin BP 32TB SATA ISE
## A310/A310L/A3100/A3100L
## /H710/H7100
MLR2 Regression
## STX 12TB SAS FIPS
## A310/A3100/H710/H7100
## A300/A3000/H700/H7000
SW75 Regression
## STX 16 & 20TB SAS FIPS
## A310/A3100/H710/H7100
## A300/A3000/H700/H7000
SY75 Regression
## STX 24TB SAS FIPS
## A310/A3100/H710/H7100
## A300/A3000/H700/H7000
SU75 Regression




Resolved issues

This DSP fixed a FW upgrade issue for the following drives and platforms:
## Drive  Platform
STX Cimarron BP 2/4/8TB SAS FIPS A310/A3100/H710/H7100
STX Evans BP 12/16TB SAS FIPS  A310/A3100/H710/H7100
STX Cimarron BP 2/4/8TB SAS FIPS A300/A3000/H700/H7000
STX Evans BP 12/16TB SAS FIPS  A300/A3000/H700/H7000

Page 8 of 36

## Dell Customer Communication - Confidential

## 4

## Internal Use - Confidential

Known issues
This DSP does not include any known issues.

Supported drives
The following table lists all the supported drives and drive firmware included in this DSP. Bootflash drives are in a
separate table further below.

## Manufacturer   Series   Capacity   Model   Firmware
revision
HGST   Deskstar   400 GB   HDS724040KLSA80   KFAOA46A
and
## KFAOAC6A
HGST   Deskstar   500 GB   HDS725050KLA360   K2AOAD1A
HGST   Ultrastar C10K1200   1.2 TB   HUC101212CSS600   A469
HGST   Ultrastar 7K4000   2 TB   HUS724020ALA640   MF6OAC50
HGST   Ultrastar 7K4000   3 TB   HUS724030ALA640   MF8OAC50
HGST   Ultrastar 7K4000   4 TB   HUS724040ALA640   MFAOAC50
HGST   Ultrastar SSD800MM   200 GB   HUSMM8020ASS200   A210
HGST   Ultrastar SSD800MM   400 GB   HUSMM8040ASS200   A210
HGST   Ultrastar SSD800MM   800 GB   HUSMM8080ASS200   A210
HGST   Ultrastar  SSD800MM  SAS
## SED SSD
## 800 GB   HUSMM8080ASS205   D254
HGST   Ultrastar C10K900   300 GB   HUC106030CSS600   A430
HGST   Ultrastar C10K900   300 GB   HUC10603CLAR300   C330
HGST   Ultrastar C10K900   600 GB   HUC106060CSS600   A430
HGST   Ultrastar C10K900   300 GB   HUC109030CSS600   A5B0
HGST   Ultrastar C10K900   300 GB   HUC10903CLAR300   C600
HGST   Ultrastar C10K900   600 GB   HUC109060CSS600   A5B0
HGST   Ultrastar C10K900   900 GB   HUC109090CSS600   A5B0
HGST   Ultrastar 15K450   450 GB   HUS154545VLS300   A570
Page 9 of 36

## Dell Customer Communication - Confidential

## 5

## Internal Use - Confidential
HGST   Ultrastar 15K600   450 GB   HUS156045VLS600   A760
HGST   Ultrastar SSD400M   200 GB   HUSML4020ASS600   A337
HGST   Ultrastar SSD400M   400 GB   HUSML4040ASS600   A337
HGST   Ultrastar SSD400S   100 GB   HUSSL4010ASS600   A18M and
## A182
HGST   Ultrastar SSD400S   100 GB   HUSSL4010BSS600   A1D0
HGST   Ultrastar SSD400S   200 GB   HUSSL4020ASS600   A18M and
## A182
HGST   Ultrastar SSD400S   200 GB   HUSSL4020BSS600   A1D0

## Manufacturer   Series   Capacity   Model   Firmware
revision
HGST   Ultrastar SSD400S   400 GB   HUSSL4040ASS600   A18M and
## A182
HGST   Ultrastar SSD400S   400 GB   HUSSL4040BSS600   A1D0
HGST   Ultrastar A7K1000   1 TB   HUA721010KLA330   GKAOA70M
and
## GKAOAB0A
HGST   Ultrastar A7K1000   500 GB   HUA721050KLA330   GK6OAB0A
HGST   Ultrastar A7K1000   750 GB   HUA721075KLA330   GK8OAB0A
and
## GK8OA70M
HGST   Ultrastar A7K2000   1 TB   HUA722010CLA330   JP4OA3PA
HGST   Ultrastar A7K2000   2 TB   HUA722020ALA330   JKAOA3PA
HGST   Ultrastar A7K2000   500 GB   HUA722050CLA330   JP2OA3PA
HGST   Ultrastar 7K3000   2 TB   HUA723020ALA640   MK7OAA50
HGST   Ultrastar 7K3000   3 TB   HUA723030ALA640   MKAOAA50
HGST   Ultrastar 7K4000   4 TB   HUS724040ALE640   MJAOA3K0
HGST   Ultrastar 7K6000 SATA   2 TB   HUS726020ALA610   A5EITD40
HGST   Ultrastar 7K6000 SATA   4 TB   HUS726040ALA610   A5EITD40
HGST   Ultrastar 4kn 7K6000   2 TB   HUS726020ALN610   APGNTDY0
HGST   Ultrastar 4kn 7K6000   4 TB   HUS726040ALN610   APGNTDY0
HGST   Ultrastar 4kn 7K6000   6 TB   HUS726060ALN610   APEITD40
Page 10 of 36

## Dell Customer Communication - Confidential

## 6

## Internal Use - Confidential
HGST   Ultrastar 7K6000 SAS SED
## 4kn
## 2 TB   HITACHI H5472602CLAR2000   DDW0
HGST   Ultrastar 7K6000 SAS SED
## 4kn
## 4 TB   HITACHI H5472604CLAR4000   DDW0
HGST   Ultrastar 7K6000 4K SED   6 TB   H5472606CLAR6000   NDY0
HGST   Ultrastar SSD1600MM   200 GB   HUSMM1620ASS200   A204
HGST   Ultrastar SSD1600MM   400 GB   HUSMM1640ASS200   A204
HGST   Ultrastar SSD1600MM   800 GB   HUSMM1680ASS200   A204
HGST   Ultrastar SSD1600MM   1.6 TB   HUSMM1616ASS200   A204
HGST   Ultrastar SSD1600MM
## 10WPD SED SSD
## 800 GB   HUSMM1680ASS205   D32A
HGST   Ultrastar SSD1600MM
## 3WPD SED SSD
## 1.6 TB   HUSMM151CLAR1600   D348
HGST   Ultrastar He6   6 TB   HUS726060ALA640   AHIST1EZ
HGST   Ultrastar C10K1800   1.2 TB   HUC101812CSS200   AE00
HGST   Ultrastar He8   8 TB   HUH728080ALN600   A4EITD40

## Manufacturer   Series   Capacity   Model   Firmware
revision
HGST   Ultrastar He8 SED   8 TB   H5H72808CLAR8000   MDY0
HGST   Ultrastar He10   8 TB   HUH721008ALN600   LHGNT290
HGST   Ultrastar He10   10 TB   HUH721010ALN600   LHGNT290
HGST   Ultrastar He10 SAS SED   8 TB   H5H72108CLAR8000   D614
HGST   Ultrastar He10 SAS SED   10 TB   H5H72101CLAR10T0   D614
HGST   Ultrastar He10 SATA 4kn   8 TB   HUH721008ALN600   LHEIT382
HGST   Ultrastar C10K1800   300 GB   HUC101830CSS200   AE00
HGST   Ultrastar C10K1800   600 GB   HUC101860CSS200   AE00
HGST   Ultrastar C10K1800   900 GB   HUC101890CSS200   AE00
HGST   Ultrastar C10K1800 512n   600 GB   HUC10186CLAR600   AE00
HGST   Ultrastar C10K1800 512n   1.2 TB   HUC10181CLAR1200   AE00
Page 11 of 36

## Dell Customer Communication - Confidential

## 7

## Internal Use - Confidential
HGST   Ultrastar C10K1800 512n
## SAS SED
## 600 GB   H5C10186CLAR600   DE00
HGST   Ultrastar C10K1800 512n
## SAS SED
## 900 GB   HUC101890CSS205   DE00
HGST   Ultrastar C10K1800 512n
## SAS SED
## 1.2 TB   H5C10181CLAR1200   DE00
HGST   Ultrastar SS300 SAS SED
## SSD
## 400 GB   H5SMR324CLAR400   D176
HGST   Ultrastar SS300 SAS SED
## SSD
## 800 GB   H5SMR328CLAR800   D176
HGST   Ultrastar SS300 SAS SED
## SSD
## 1.6 TB   H5SMR321CLAR1600   D176
HGST   Ultrastar SS300 SAS SED
## SSD
## 3.2 TB   H5SMR323CLAR3200   D176
HGST   Ultrastar SS300 SSD
## 10WPD
## 200 GB   H4SMR324CLAR200   S116
HGST   Ultrastar SS300 SSD
## 10WPD
## 400 GB  H4SMM324CLAR400   S116
HGST   Ultrastar SS300 SSD
## 10WPD
## 800 GB   H4SMM328CLAR800   S116
HGST   Ultrastar SS300 SSD
## 10WPD
## 1.6 TB   H4SMM321CLAR1600   S116
HGST   Ultrastar SS300 SED SSD
## 10WPD
## 800 GB   H5SMM328 CLAR800   S116
HGST   Ultrastar SS300 SED
## SSD 10WPD
## 1.6 TB   H5SMM321CLAR1600   S116
HGST   Ultrastar SS300 SAS
## SSD 3WPD
## 400 GB   H4SMR324CLAR400   S177
HGST   Ultrastar SS300 SAS
## SSD 3WPD
## 800 GB   H4SMR328CLAR800   S177

## Manufacturer   Series   Capacity   Model   Firmware
revision
HGST   Ultrastar SS300 SAS
## SSD 3WPD
## 1.6 TB   H4SMR321CLAR1600   S177
HGST   Ultrastar SS300 SAS
## SSD 3WPD
## 3.2 TB   H4SMR323CLAR3200   S177
HGST   Ultrastar SS300 SSD
## 1WPD
## 3.84 TB   H4STR763CLAR3840   S52K
HGST   Ultrastar SS300 SSD
## 1WPD
## 7.68 TB   H4STR767CLAR7680   S52K
Intel   Intel P4510 (Support for
PowerScale F600 nodes)
2 TB   Dell Express Flash NVMe P4510
## 2TB SFF
## VDV1DP25
Page 12 of 36

## Dell Customer Communication - Confidential

## 8

## Internal Use - Confidential
Intel   Intel P4510 (Support for
PowerScale F600 nodes)
4 TB   Dell Express Flash NVMe P4510
## 4TB SFF
## VDV1DP25
Intel   Intel P5520 3.84TB ISE
NVMe (Support for
PowerScale F600 nodes)
3.84 TB   Dell Ent NVMe P5520 RI 3.84TB   1.0.0
Kioxia   PM5 (Gen6/Legacy)   1.6 TB
## 3WPD
## P5V1T60D EMC1600 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Gen6)   3.2 TB
## 3WPD
## P5V3T20D EMC3200 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Gen6)   400 GB
## 3WPD
## P5V400GD EMC400 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Gen6/Legacy)   800 GB
## 3WPD
## P5V800GD EMC800 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Legacy)   1.6 TB
## 10WPD
## P5M1T60D EMC1600 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Legacy)   800 GB
## 10WPD
## P5M800GD EMC800 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Gen6)   15.36 TB
## 1WPD
## P5R15T3D EMC15T3 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Gen6)   3.84 TB
## 1WPD
## P5R3T84D EMC3840 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Gen6)   7.68 TB
## 1WPD
## P5R7T68D EMC7680 (SAS SED
## SSD)
## PD5F
Kioxia   PM5 (Gen6)   15.36 TB
## 1WPD
## P5R15T3A EMC15T3 (SAS SSD)   PA5F
Kioxia   PM5 (Gen6)   3.84 TB
## 1WPD
## P5R3T84A EMC3840 (SAS SSD)   PA5F
Kioxia   PM5 (Gen6)   7.68 TB
## 1WPD
## P5R7T68A EMC7680 (SAS SSD)   PA5F
Kioxia   PM5 (Gen6/legacy)   1.6 TB
## 3WPD
## P5V1T60A EMC1600 (SAS SSD)   PA5F
Kioxia   PM5 (Gen6)   3.2 TB
## 3WPD
## P5V3T20A EMC3200 (SAS SSD)   PA5F
Kioxia   PM5 (Gen6/Legacy)   400 GB
## 3WPD
## P5V400GA EMC400 (SAS SSD)   PA5F
Kioxia   PM5 (Gen6/Legacy)   800 GB
## 3WPD
## P5V800GA EMC800 (SAS SSD)   PA5F

## Manufacturer   Series   Capacity   Model   Firmware
revision
Kioxia   PM5 (Legacy)   1.6 TB
## 10WPD
## P5M1T60A EMC1600 (SAS SSD)   PA5F
Kioxia   PM5 (Legacy)   400 GB
## 10WPD
## P5M400GA EMC400 (SAS SSD)   PA5F
Page 13 of 36

## Dell Customer Communication - Confidential

## 9

## Internal Use - Confidential
Kioxia   PM5 (Legacy)   800 GB
## 10WPD
## P5M800GA EMC800 (SAS SSD)   PA5F
Kioxia   Dell_Express_Flash_C
## D5_7.68T_SFF ISE
(PowerScale F600 nodes)
7.68 TB   Dell Express Flash 7.68TB SFF   1.1.5
Kioxia   PM5 (PowerScale F200
nodes)
## 960 GB   KPM5XRUG960G   B01C
Kioxia   PM5 (PowerScale F200
nodes)
## 1.92 TB   KPM5XRUG1T92   B01C
Kioxia   PM5 (PowerScale F200
nodes)
## 3.84 TB   KPM5XRUG3T84   B01C
Kioxia   PM5 1WPD ISE
(PowerScale F200 nodes)
## 7.68 TB   KPM5XRUG7T68   B01C
Kioxia   PM5 FIPS 3WPD
(PowerScale F200 nodes)
## 960 GB   KPM5WVUG960G   B320
Kioxia   PM5 FIPS 3WPD
(PowerScale F200 nodes)
## 1.92 TB   KPM5WVUG1T92   B320
Kioxia   PM5 FIPS 3WPD
(PowerScale F200 nodes)
## 3.84 TB   KPM5WVUG3T84   B320
Kioxia   PM6 SAS (Gen6/MLK)   400 GB   KIOXIA P6M400GA EMC400   PA68
Kioxia   PM6 SAS (Gen6/MLK)   800 GB   KIOXIA P6V800GA EMC800   PA68
Kioxia   PM6 SAS (Gen6/MLK)   1.6 TB   KIOXIA P6V1T60A EMC1600   PA68
Kioxia   PM6 SAS (Gen6/MLK)   3.2 TB   KIOXIA P6V3T20A EMC3200   PA68
Kioxia   PM6 SAS (Gen6/MLK)   3.84 TB   KIOXIA P6R3T84A EMC3840   PA68
Kioxia   PM6 SAS (Gen6/MLK)   7.68 TB   KIOXIA P6R7T68A EMC7680   PA68
Kioxia   PM6 SAS (Gen6/MLK)   15.36 TB   KIOXIA P6R15T3A EMC15T3   PA68
Kioxia   PM6 SAS SED FIPS
(Gen6/MLK)
## 400 GB   KIOXIA P6M400GD EMC400   PD68
Kioxia   PM6 SAS SED FIPS
(Gen6/MLK)
## 800 GB   KIOXIA P6V800GD EMC800   PD68
Kioxia   PM6 SAS SED FIPS
(Gen6/MLK)
## 1.6 TB   KIOXIA P6V1T60D EMC1600   PD68
Kioxia   PM6 SAS SED FIPS
(Gen6/MLK)
## 3.2 TB   KIOXIA P6V3T20D EMC3200   PD68
Kioxia   PM6 SAS SED FIPS
(Gen6/MLK)
## 3.84 TB   KIOXIA P6R3T84D EMC3840   PD68
Kioxia   PM6 SAS SED FIPS
(Gen6/MLK)
## 7.68 TB   KIOXIA P6R7T68D EMC7680   PD68

Page 14 of 36

## Dell Customer Communication - Confidential

## 10

## Internal Use - Confidential
## Manufacturer   Series   Capacity   Model   Firmware
revision
Kioxia   PM6 SAS SED FIPS
(Gen6/MLK)
## 15.36 TB   KIOXIA P6R15T3D EMC15T3   PD68
Kioxia   PM6 SAS (F200)   960 GB   KIOXIA KPM6XRUG960G   BA0D
Kioxia   PM6 SAS (F200)   1.92 TB   KIOXIA KPM6XRUG1T92   BA0D
Kioxia   PM6 SAS (F200)   3.84 TB   KIOXIA KPM6XRUG3T84   BA0D
Kioxia   PM6 SAS (F200)   7.68 TB   KIOXIA KPM6XRUG7T68   BA0D
Kioxia   PM6 SAS SED FIPS
## (F200)
## 960 GB   KIOXIA KPM6WVUG960G   BD0D
Kioxia   PM6 SAS SED FIPS
## (F200)
## 1.92 TB   KIOXIA KPM6WRUG1T92   BD0D
Kioxia   PM6 SAS SED FIPS
## (F200)
## 3.84 TB   KIOXIA KPM6WRUG3T84   BD0D
Kioxia   PM6 SAS SED FIPS
## (F200)
## 7.68 TB   KIOXIA KPM6WRUG7T68   BD0D
Kioxia   CM6 RI 1.92TB FIPS NVMe

1.92 TB   Dell Ent NVMe FIPS CM6 RI
## 1.92TB

## 3.1.3
Kioxia   CM6 RI 3.84TB FIPS NVMe

3.84 TB   Dell Ent NVMe FIPS CM6 RI
## 3.84TB

## 3.1.3
Kioxia   CM6 RI 7.68TB FIPS NVMe

7.68 TB   Dell Ent NVMe FIPS CM6 RI
## 7.68TB

## 3.1.3
Kioxia   CM6 RI 15.36TB FIPS
NVMe

15.36 TB   Dell Ent NVMe FIPS CM6 RI
## 15.36TB

## 3.1.3
Kioxia   CM6 RI 1.92TB ISE
NVMe

1.92 TB   Dell Ent NVMe CM6 RI 1.92TB

## 2.2.1
Kioxia   CM6 RI 3.84TB ISE
NVMe

3.84 TB   Dell Ent NVMe CM6 RI 3.84TB

## 2.2.1
Kioxia   CM6 RI 7.68TB ISE
NVMe

7.68 TB   Dell Ent NVMe CM6 RI 7.68TB

## 2.2.1
Kioxia   CM6 RI 15.36TB ISE
NVMe

15.36 TB   Dell Ent NVMe CM6 RI 15.36TB

## 2.2.1
Kioxia   CM7 RI 1.92TB ISE
NVMe

1.92 TB   Dell Ent NVMe CM7 U.2 RI 1.92TB 2.0.0
Page 15 of 36

## Dell Customer Communication - Confidential

## 11

## Internal Use - Confidential
Kioxia   CM7 RI 3.84TB ISE
NVMe

3.84 TB   Dell Ent NVMe CM7 U.2 RI 3.84TB 2.0.0
Kioxia   CM7 RI 7.68TB ISE
NVMe

7.68 TB   Dell Ent NVMe CM7 U.2 RI 7.68TB 2.0.0
Kioxia   CM7 RI 15.36TB ISE
NVMe

15.36 TB   Dell Ent NVMe CM7 U.2 RI
## 15.36TB
## 2.0.0
Kioxia   CM7 RI 1.92TB FIPS
NVMe

1.92 TB   Dell Ent NVMe CM7 FIPS U.2 RI
## 1.92TB
## 3.0.1
Kioxia   CM7 RI 3.84TB FIPS
NVMe

3.84 TB   Dell Ent NVMe CM7 FIPS U.2 RI
## 3.84TB
## 3.0.1
Kioxia   CM7 RI 7.68TB FIPS
NVMe

7.68 TB   Dell Ent NVMe CM7 FIPS U.2 RI
## 7.68TB
## 3.0.1
Kioxia   CM7 RI 15.36TB FIPS
NVMe

15.36 TB   Dell Ent NVMe CM7 FIPS U.2 RI
## 15.36TB
## 3.0.1
Kioxia   PM7 SAS 800GB ISE
(Gen6/MLK)
## 800 GB   KIOXIA P7V800GA EMC800   PA78
Kioxia   PM7 SAS 1.6TB ISE
(Gen6/MLK)
## 1.6 TB   KIOXIA P7V1T60A EMC1600   PA78
Kioxia   PM7 SAS 3.2TB ISE
(Gen6/MLK)
## 3.2 TB   KIOXIA P7V3T20A EMC3200   PA78

## Manufacturer   Series   Capacity   Model   Firmware
revision
Kioxia   PM7 SAS 3.84TB ISE
(Gen6/MLK)
## 3.84 TB   KIOXIA P7R3T84A EMC3840   PA78
Kioxia   PM7 SAS 7.68TB ISE
(Gen6/MLK)
## 7.68 TB   KIOXIA P7R7T68A EMC7680   PA78
Kioxia   PM7 SAS 15.36TB ISE
(Gen6/MLK)
## 15.36 TB   KIOXIA P7R15T3A EMC15T3   PA78
Kioxia   PM7 SAS 800GB FIPS
(Gen6/MLK)
## 800 GB   KIOXIA P7V800GD EMC800
## PE78
Kioxia   PM7 SAS 1.6TB FIPS
(Gen6/MLK)
## 1.6 TB   KIOXIA P7V1T60D EMC1600
## PE78
Kioxia   PM7 SAS 3.2TB FIPS
(Gen6/MLK)
## 3.2 TB   KIOXIA P7V3T20D EMC3200
## PE78
Kioxia   PM7 SAS 3.84TB FIPS
(Gen6/MLK)
## 3.84 TB   KIOXIA P7R3T84D EMC3840
## PE78
Kioxia   PM7 SAS 7.68TB FIPS
(Gen6/MLK)
## 7.68 TB   KIOXIA P7R7T68D EMC7680
## PE78
Kioxia   PM7 SAS 15.36TB FIPS
(Gen6/MLK)
## 15.36 TB   KIOXIA P7R15T3D EMC15T3
## PE78
Page 16 of 36

## Dell Customer Communication - Confidential

## 12

## Internal Use - Confidential
Kioxia   PM7 SAS 960GB ISE
## (F200)
## 960 GB   KIOXIA KPM7XRUG960G   C10C
Kioxia   PM7 SAS 1.92TB ISE
## (F200)
## 1.92 TB   KIOXIA KPM7XRUG1T92   C10C
Kioxia   PM7 SAS 3.84TB ISE
## (F200)
## 3.84 TB   KIOXIA KPM7XRUG3T84   C10C
Kioxia   PM7 SAS 7.68TB ISE
## (F200)
## 7.68 TB   KIOXIA KPM7XRUG7T68   C10C
Kioxia PM7 SAS 960GB FIPS
## (F200)
## 960 GB KIOXIA KPM7WRUG960G C40E
Kioxia PM7 SAS 1.92TB FIPS
## (F200)
## 1.92 TB KIOXIA KPM7WRUG1T92 C40E
Kioxia   PM7 SAS 3.84TB FIPS
## (F200)
## 3.84 TB   KIOXIA KPM7WRUG3T84   C40E
Kioxia   PM7 SAS 7.68TB FIPS
## (F200)
## 7.68 TB   KIOXIA KPM7WRUG7T68   C40E
Micron   RealSSD P300   100 GB   MTFDDAC100SAL   0001
Micron   RealSSD P300   200 GB   MTFDDAC200SAL   0001
Micron Micron ION 6500, NVMe,
ISE, and 30.72TB
30.72 TB Dell Ent NVMe 6500 RI 30.72TB 1.0.0
Samsung   REX   400 GB   S1635N04 EMC400   EQS2
Samsung   REX   800 GB   S1635N08 EMC800   EQS2
Samsung   REX   1.6 TB   S1635N16 EMC1600   EQS2
Samsung   REX   400 GB   PA35N400 EMC400   EQL3
Samsung   REX   800 GB   PA35N800 EMC800   EQL3
Samsung   REX   1.6 TB   PA35N1T6 EMC1600   EQL3
Samsung   REX   3.2 TB   PA35N3T2 EMC3200   EQL3
Samsung   REX   15.36 TB   PA33N15T EMC15T3   EQHA
Samsung   PM1643 1WPD SED SSD  3.84 TB   P043F3T8 EMC3840   EXF3

## Manufacturer

## Series   Capacity   Model   Firmware
revision
Samsung   PM1643 1WPD SED SSD  7.68 TB   P043F7T6 EMC7680   EXV3
Samsung   PM1643 1WPD SSD   3.84 TB   P043S3T8 EMC3840   ESF7
Samsung   PM1643 1WPD SSD   7.68 TB   P043S7T6 EMC7680   ESV5
Page 17 of 36

## Dell Customer Communication - Confidential

## 13

## Internal Use - Confidential
Samsung   PM1643 1WPD SSD   15.36 TB   P043S15T EMC15T3   ESV5
Samsung   PM1645 3WPD SSD   800 GB   P045S800 EMC800   ESF6
Samsung   PM1645 3WPD SSD   1.6 TB   P045S1T6 EMC1600   ESF6
Samsung   PM1645 3WPD SSD   3.2 TB   P045S3T2 EMC3200   ESF6
Samsung   RFX   15.36 TB   P043S15T EMC15T3 (SAS)   ESV5
Samsung   Samsung RFX LC FIPs
SAS SED 12G (Gen6
## Cache)
## 400 GB   P045F800 EMC400   EZF7
Samsung   Samsung RFX LC FIPs
SAS SED 12G (Gen6
## Cache)
## 800 GB   P045F800 EMC800   EZF7
Samsung   Samsung RFX LC FIPs
SAS SED 12G (Gen6
## Cache)
## 1.6 TB   P045F1T6 EMC1600   EZF7
Samsung   Samsung RFX LC FIPs
SAS SED 12G (Gen6
## Cache)
## 3.2 TB   P045F3T2 EMC3200   EZF7
Samsung   Samsung RFX FIPs LC
## SAS SED 12G (F800)
## 1.6 TB   P045F1T6 EMC1600   EZF7
Samsung      3.2 TB   P045F3T2 EMC3200   EZF7
Samsung   Samsung RFX SED 3WPD
(Gen4 and
## Gen5 Cache)
## 800 GB   P045F800 EMC800   EZF7
Samsung      1.6 TB   P045F1T6 EMC1600
Samsung   Samsung RFX SS (Gen4
and Gen5 Cache)
## 400 GB   P045F800 EMC400   ESF7
Samsung   Samsung RFX LC (Gen6
## Cache)
## 400 GB
## SF
## P045F800 EMC400   ESF7
Samsung   PM1643a FIPS (Gen6)   3.84 TB   PA43F3T8 EMC3840   EXA1
Samsung   PM1643a FIPS (Gen6)   7.68 TB   PA43F7T6 EMC7680   EXA1
Samsung   PM1643a FIPS (Gen6)   15.36 TB   PA43F15T EMC15T3   EXA1
Samsung   PM1643a Non-SED (Gen6)   3.84 TB   PA43S3T8 EMC3840   ESA4
Samsung   PM1643a Non-SED (Gen6)   7.68 TB   PA43S7T6 EMC7680   ESA4
Samsung   PM1643a Non-SED (Gen6)   15.36 TB   PA43S15T EMC15T3   ESA4
Samsung   PM1645a FIPS (Gen5)   1.6 TB   PA45F1T6 EMC1600   EZA1

Page 18 of 36

## Dell Customer Communication - Confidential

## 14

## Internal Use - Confidential
## Manufacturer   Series   Capacity   Model   Firmware
revision
Samsung   PM1645a FIPS (Gen5)   3.2 TB   PA45F3T2 EMC3200   EZA1
Samsung   PM1645a Non-SED (Gen5)   1.6 TB   PA45S1T6 EMC1600   EWA4
Samsung   PM1645a Non-SED (Gen5)   3.2 TB   PA45S3T2 EMC3200   EWA4
Samsung   PM1645a Non-SED (Gen6
## Cache)
## 400 GB   PA45S800 EMC400   EWA4
Samsung   PM1645a SAS (Gen6 Data
and Cache)
## 800 GB   PA45S800 EMC800   EWA4
Samsung   PM1645a SAS (Gen6 Data
and Cache)
## 1.6 TB   PA45S1T6 EMC1600   EWA4
Samsung   PM1645a SAS (Gen6 Data
and Cache)
## 3.2 TB   PA45S3T2 EMC3200   EWA4
Samsung   PM1645a SAS FIPS (Gen6
Data and Cache)
## 400 GB   PA45F800 EMC400   EZA1
Samsung   PM1645a SAS FIPS (Gen6
Data and Cache)
## 800 GB   PA45F800 EMC800   EZA1
Samsung   PM1645a SAS FIPS (Gen6
Data and Cache)
## 1.6 TB   PA45F1T6 EMC1600   EZA1
Samsung   PM1645a SAS FIPS (Gen6
Data and Cache)
## 3.2 TB   PA45F3T2 EMC3200   EZA1
Samsung   PM1643a (PowerScale
## F200)
## 960 GB   SAMSUNG MZILT960HBHQ0D3   DSA3
Samsung   PM1643a (PowerScale
## F200)
## 1.92 TB   SAMSUNG MZILT1T9HBJR0D3   DSA3
Samsung   PM1643a (PowerScale
## F200)
## 3.84 TB   SAMSUNG MZILT3T8HBLS0D3   DSA3
Samsung   PM1643a (PowerScale
## F200)
## 7.68 TB   SAMSUNG MZILT7T6HALA0D3   DSA3
Samsung   PM1733v1 (PowerScale
## F600)
1.92 TB   Dell Ent NVMe AGN RI U.2
## 1.92TB
## 2.1.2
Samsung   PM1733v1
(PowerScale F600)
3.84 TB   Dell Ent NVMe AGN RI U.2
## 3.84TB
## 2.1.2
Samsung   PM1733v1
(PowerScale F600)
7.68 TB   Dell Ent NVMe AGN RI U.2
## 7.68TB
## 2.1.2
Samsung   PM1733v1
(PowerScale F600)
15.36 TB   Dell Ent NVMe AGN RI U.2
## 15.36TB
## 2.1.2
Samsung   PM1733v2
(PowerScale F600)
1.92 TB   Dell Ent NVMe v2 AGN RI U.2
## 1.92TB
## 2.0.0
Samsung   PM1733v2
(PowerScale F600)
3.84 TB   Dell Ent NVMe v2 AGN RI U.2
## 3.84TB
## 2.0.0
Page 19 of 36

## Dell Customer Communication - Confidential

## 15

## Internal Use - Confidential
Samsung   PM1733v2
(PowerScale F600)
7.68 TB   Dell Ent NVMe v2 AGN RI U.2
## 7.68TB
## 2.0.0
Samsung   PM1733v2
(PowerScale F600)
15.36 TB   Dell Ent NVMe v2 AGN RI U.2
## 15.36TB
## 2.0.0
Samsung   PM1733a 1.92TB NVMe
## SSD 1WPD
1.92 TB   Dell Ent NVMe PM1733a RI
## 1.92TB
## 1.0.0

## Manufacturer   Series   Capacity   Model   Firmware
revision
Samsung   PM1733a 3.84TB NVMe
## SSD 1WPD
3.84 TB   Dell Ent NVMe PM1733a RI
## 3.84TB
## 1.0.0
Samsung   PM1733a 7.68TB NVMe
## SSD 1WPD
7.68 TB   Dell Ent NVMe PM1733a RI
## 7.68TB
## 1.0.0
Samsung   PM1733a 15.36TB NVMe
## SSD 1WPD
15.36 TB   Dell Ent NVMe PM1733a RI
## 15.36TB
## 1.0.0
Samsung   PM1733a FIPS 1.92TB
NVMe SSD 1WPD
1.92 TB   Dell Ent NVMe FIPS PM1733a RI
## 1.92TB
## 3.1.0
Samsung   PM1733a FIPS 3.84TB
NVMe SSD 1WPD
3.84 TB   Dell Ent NVMe FIPS PM1733a RI
## 3.84TB
## 3.1.0
Samsung   PM1733a FIPS 7.68TB
NVMe SSD 1WPD
7.68 TB   Dell Ent NVMe FIPS PM1733a RI
## 7.68TB
## 3.1.0
Samsung   PM1733a FIPS 15.36TB
NVMe SSD 1WPD
15.36 TB   Dell Ent NVMe FIPS PM1733a RI
## 15.36TB
## 3.1.0
Samsung   PM1653 ISE 960GB
## 1WPD SSD
(PowerScale F200)
## 960 GB   MZILG960HCHQAD3   DSG7
Samsung   PM1653 ISE 1.92TB
## 1WPD SSD
(PowerScale F200)
## 1.92 TB   MZILG1T9HCJRAD3   DSG7
Samsung   PM1653 ISE 3.84TB
## 1WPD SSD
(PowerScale F200)
## 3.84 TB   MZILG3T8HCLSAD3   DSG7
Samsung   PM1653 ISE 7.68TB
## 1WPD SSD
(PowerScale F200)
## 7.68 TB   MZILG7T6HBLAAD3   DSG7
Samsung PM1655 ISE 800GB (L-
## EMC)
## 800 GB SAMSUNG S550S800 EMC800 EWG0
Samsung PM1655 ISE 1.6TB (L-EMC) 1.6 TB SAMSUNG S1635N16 EMC1600 EWG0
Samsung PM1655 ISE 3.2TB (L-EMC) 3.2 TB SAMSUNG S550S3T2 EMC3200 EWG0
Page 20 of 36

## Dell Customer Communication - Confidential

## 16

## Internal Use - Confidential
Samsung PM1653 ISE 7.68TB (L-
## EMC)
## 7.68 TB SAMSUNG S530S7T6 EMC7680 ESG0
Samsung PM1655 FIPS 800GB (L-
## EMC)
## 800 GB SAMSUNG S550F800 EMC800 EZG6
Samsung PM1655 FIPS 1.6TB (L-
## EMC)
## 1.6 TB SAMSUNG S550F1T6 EMC1600 EZG6
Samsung PM1655 FIPS 3.2TB (L-
## EMC)
## 3.2 TB SAMSUNG S550F3T2 EMC3200 EZG6
Samsung PM1653 FIPS 7.68TB (L-
## EMC)
## 7.68 TB SAMSUNG S530F7T6 EMC7680 EXG6
Samsung Dell NVMe PM1743 RI U.2
## 1.92TB
## 1.92TB
Dell NVMe PM1743 RI U.2 1.92TB
## 1.0.0
Samsung Dell NVMe PM1743 RI U.2
## 3.84TB
## 3.84TB
Dell NVMe PM1743 RI U.2 3.84TB
## 1.0.0
Samsung Dell NVMe PM1743 RI U.2
## 7.68TB
## 7.68TB
Dell NVMe PM1743 RI U.2 7.68TB
## 1.0.0
Samsung Dell NVMe PM1743 RI U.2
## 15.36TB
15.36TB Dell NVMe PM1743 RI U.2
## 15.36TB
## 1.0.0
Samsung Dell NVMe BM1743 QLC
## U.2 15.36TB
15.36TB Dell NVMe BM1743 QLC U.2
## 15.36TB
## 1.1.1
Samsung Dell NVMe BM1743 QLC
## U.2 30.72TB
30.72TB Dell NVMe BM1743 QLC U.2
## 30.72TB
## 1.1.1
Samsung Dell NVMe BM1743 QLC
## U.2 61.44TB
61TB Dell NVMe BM1743 QLC U.2
## 61.44TB
## 1.1.1
Samsung Dell NVMe BM1743 QLC
## U.2 122.88TB
122TB Dell NVMe BM1743 QLC U.2
## 122.88TB
## 1.1.1
Seagate   Savvio 10K.6   300 GB   ST300MM0006   0003
Seagate   Savvio   300 GB   ST300MM0CLAR300   LS17
Seagate   Constellation   3 TB   ST33000652SS   0005 and
## 0006
Seagate   Constellation   3 TB   ST330006CLAR3000   YE04
Seagate   Cheetah 15K.7   450 GB   ST3450857SS   IS03
Seagate   Savvio 10K.6   600 GB   ST600MM0006   0003
Seagate   Savvio 10K.6   900 GB   ST900MM0006   0003
Seagate   Savvio 10K.6   900 GB   ST900MM0036   0003
Seagate   Savvio 10K.3   300 GB   ST9300603SS   IS01
Page 21 of 36

## Dell Customer Communication - Confidential

## 17

## Internal Use - Confidential
Seagate   Savvio 10K.5   300 GB   ST9300605SS   IS00
Seagate   Savvio   300 GB   ST930060CLAR300   CS18 and
## CS19
Seagate   Savvio 10K.4   600 GB   ST9600204SS   IS01
Seagate   Savvio 10K.5   600 GB   ST9600205SS   IS00

## Manufacturer   Series   Capacity   Model   Firmware
revision
Seagate   Savvio 10K.5   900 GB   ST9900805SS   IS00
Seagate   Constellation ES   1 TB   ST1000NM0011   SN03
Seagate   Constellation ES.3   1 TB   ST1000NM0033 9ZM173   EN09
Seagate   Constellation ES   2 TB   ST2000NM0011   SN03
Seagate   Constellation ES.3   2 TB   ST2000NM0033 9ZM175   EN09
Seagate   Constellation ES.3   3 TB   ST3000NM0033 9ZM178   EN09
Seagate   Constellation ES   1 TB   ST31000524NS   IS00
Seagate   Constellation ES   2 TB   ST32000644NS   IS00
Seagate   Constellation ES   3 TB   ST33000650NS   0002 and
## 0006
Seagate   Barracuda ES   750 GB   ST3750641NS   4IST
Seagate   Constellation ES.3   4 TB   ST4000NM0033 9ZM170   EN09
Seagate   Constellation ES.2   3 TB   ST33000652SS   A006
Seagate   Enterprise   6 TB   ST6000NM0114   KFH5
Seagate   Enterprise   6 TB   ST6000NM0004-1FT17Z   EN05
## Seagate   Enterprise Capacity
## 3.5 HDD V5
## 1 TB   ST1000NM0055-1V410C   BL06
## Seagate   Enterprise Capacity
## 3.5 HDD V5
## 2 TB   ST2000NM0055-1V4104   BL06
## Seagate   Enterprise Capacity
## 3.5 HDD V5
## 3 TB   ST3000NM0005-1V410N   BL06
## Seagate   Enterprise Capacity
## 3.5 HDD V5
## 4 TB   ST4000NM0035-1V4107   BL06
## Seagate   Enterprise Capacity
## 3.5 HDD V5
## 6 TB   ST6000NM0125-1YY110   PW06
Page 22 of 36

## Dell Customer Communication - Confidential

## 18

## Internal Use - Confidential
## Seagate   Enterprise Capacity
## 3.5 HDD V5
## 2 TB   ST2000NM0105-1YY104   BG05
## Seagate   Enterprise Capacity
## 3.5 HDD V5
## 4 TB   ST4000NM0085-1YY107   BG05
## Seagate   Enterprise Capacity
## 3.5 SAS SED
## 3 TB   STMFSNF3CLAR3000   BE05
## Seagate   Enterprise Capacity
## 3.5 SAS SED
## 4 TB   STMFSNF2CLAR4000   BE05
## Seagate   Enterprise Capacity
3.5 SATA 4kn
## 8 TB   ST8000NM0045-1RL112   UW07
## Seagate   Enterprise Capacity 3.5
SATA 4kn (Gen6)
## 8 TB   ST8000NM0045-1RL112   UG07
## Seagate   Enterprise Capacity
3.5 SAS SED 4kn
## 8 TB   STMPSKF1CLAR8000   UV05

## Manufacturer   Series   Capacity   Model   Firmware
revision
## Seagate   Enterprise Capacity
3.5 SATA 512n
## 6 TB   ST6000NM0235-2AB11C   UL05
Seagate   Constellation ES.3 SAS SED   3 TB   ST3000NM0063   G007
Seagate   Constellation ES.3 SAS SED   4 TB   ST4000NM0063   G007
## Seagate   Enterprise Performance 10k
SED (Gen6)
## 600 GB   SEAGATE STSBSNF5 CLAR600   SE0G
## Seagate   Enterprise Performance 10k
SED (Gen6)
## 1.2 TB   SEAGATE STSBSNF3CLAR1200   SE0G
## Seagate   Enterprise Performance 10k
## SED
## 900 GB   SEAGATE STSBSNF3CLAR1200   SE07
Seagate   Enterprise Performance 10k   300 GB   SEAGATE STSBSNI5 CLAR600   SI07
Seagate   Enterprise Performance 10k   600 GB   SEAGATE STSBSNI5 CLAR600   SI07
Seagate   Enterprise Performance 10k   900 GB   SEAGATE STSBSNI3CLAR1200   SI07
Seagate   Enterprise Performance 10k   1.2 TB   SEAGATE STSBSNI3CLAR1200   SI07
## Seagate   Enterprise Performance 10k
(Gen6)
## 600 GB   SEAGATE STSBSNI5 CLAR600   SI0G
## Seagate   Enterprise Performance 10k
(Gen6)
## 1.2 TB   SEAGATE STSBSNI3CLAR1200   SI0G
Seagate   Constellation ES.3   3 TB   ST3000NM0063   0006
Seagate   MakaraBP SAS SED 12G
FIPs
## 2 TB   SEAGATE STMFSKF2CLAR4000   BV01
Page 23 of 36

## Dell Customer Communication - Confidential

## 19

## Internal Use - Confidential
Seagate   MakaraBP SAS SED 12G
FIPs
## 4 TB   SEAGATE STMFSKF4CLAR2000   BV01
Seagate   Evans SATA    10 TB   ST10000NM005G_2MU133   VW04
Seagate   Evans SATA    12 TB   ST12000NM005G_2MT133   VW04
Seagate   Evans SATA   16 TB   ST16000NM005G-2KH133   EAN4
Seagate   Evans-BP SATA   12 TB   ST12000NM002J-2TY133   P20F
Seagate   Evans-BP SATA   16 TB   ST16000NM002J-2TW133   P20F
Seagate   Longs Peak SATA   20 TB   ST20000NM008D-3DJ133   G208
Seagate   Longs Peak SAS FIPS    20 TB   ST20000NM005D   G706
Seagate   Cimarron 2TB SAS FIPS 4K   2 TB   SEAGATE STCRSKF5CLAR2000   CV05
Seagate   Cimarron SATA 4K    2 TB   ST2000NM014A-2J2132   CW04
Seagate   Cimarron SATA 4K   4 TB   ST4000NM022A-2HZ132   CW04
Seagate   Cimarron SATA 4K    8 TB   ST8000NM013A-2KE132   CW04
Seagate   Cimarron-BP SATA 4K    4 TB / 2 TB ST4000NM030B-2TF133   L208

## Manufacturer   Series   Capacity   Model   Firmware
revision
Seagate   Cimarron-BP SATA 4K    8 TB   ST8000NM023B-2TJ133   L208
Seagate   Cimarron 3TB (4TB
SF) SAS FIPS 512n
(Legacy)
## 3 TB   SEAGATE STCRSNF3CLAR4000   CE05
Seagate   Cimarron SAS FIPS 512n
(Legacy)
## 4 TB   SEAGATE STCRSNF3CLAR4000   CE05
Seagate   Cimarron SAS FIPS 4K
(Legacy)
## 6 TB   SEAGATE STCRSKF2CLAR6000   CV04
Seagate   Cimarron SAS FIPS 4K
(Legacy)
## 8 TB   SEAGATE STCRSKF1CLAR8000   CV04
Seagate   Cimarron SATA 4K (Legacy)   6 TB   ST6000NM028A-2R7132   CK01
Seagate   Cimarron SATA 4K (Legacy)   8 TB   ST8000NM013A-2KE132   CK01
Seagate   Cimarron SATA 512n
(Legacy)
## 1 TB   ST1W00NM004A-2MN130   CB03
Seagate   Cimarron SATA 512n
(Legacy)
## 2 TB   ST2W00NM012A-2MP130   CB03
Page 24 of 36

## Dell Customer Communication - Confidential

## 20

## Internal Use - Confidential
Seagate   Cimarron SATA 512n
(Legacy)
## 3 TB / 4
## TB
## ST4W00NM016A-2HZ130   CB03
Seagate   Cimarron SATA 512n
(Legacy)
## 6 TB   ST6W00NM038A-2KF130   CB03
Seagate   Cimarron SAS FIPS 4K   2 TB   STCRSKF2CLAR2000   CV06
Seagate   Cimarron SAS FIPS 4K   4 TB   STCRSKF3CLAR4000   CV06
Seagate   Cimarron SAS FIPS 4K   8 TB   STCRSKF1 EMC8000   CV06
Seagate   Evans SAS FIPS    10 TB   STENSKF4CLAR10T0   VV06
Seagate   Evans SAS FIPS    12 TB   STENSKF3CLAR12T0   VV06
Seagate   Evans SAS FIPS    16 TB   ST16000NM009G   ESH8
Seagate   Evans-BP SAS FIPS    12 TB   ST12000NM007J   P705
Seagate   Evans-BP SAS
## FIPS
## 16 TB   ST16000NM007J   P705
Seagate Summit ISE SATA 4K 24 TB ST24000NM002H-3KS133 SUR2
Seagate Summit ISE SATA 4K 12 TB ST12000NM002H-3KX133
## SYR2
Seagate Summit ISE SATA 4K 16 TB ST16000NM002H-3KW133
## SYR2
Seagate Summit ISE SATA 4K 20 TB ST20000NM002H-3KV133
## SYR2
Seagate Summit FIPS SAS 4K 12 TB ST12000NM009H
## SW75
Seagate Summit FIPS SAS 4K 16 TB ST16000NM006H
## SY75
Seagate Summit FIPS SAS 4K 20 TB ST20000NM006H
## SY75
Seagate Summit FIPS SAS 4K 24 TB ST24000NM006H
## SU75
Seagate Cimarron-BP 2TB / 4TB 4K
## SAS FIPS
## 2 TB / 4 TB SEAGATE ST4000NM017B
## L708
Seagate Cimarron-BP 8TB 4K SAS
## FIPS
## 8 TB SEAGATE ST8000NM011B
## L708
Seagate Marlin-BP 32TB ISE SATA 32 TB ST32000NM001K-3SH132
## MLR2
Solidigm   P5316 15.36TB NVMe QLC   15.36 TB   Dell Ent NVMe P5316 RI 15.36TB   1.7.0
Solidigm   P5316 30.72TB NVMe QLC   30.72 TB   Dell Ent NVMe P5316 RI 30.72TB   1.7.0
Page 25 of 36

## Dell Customer Communication - Confidential

## 21

## Internal Use - Confidential
Solidigm   P5316 15.36TB
NVMe QLC SED Non-FIPS
15.36 TB   Dell Ent NVMe SED P5316 RI
## 15.36TB
## 1.7.0
Solidigm   P5316 30.72TB
NVMe QLC SED Non-FIPS
30.72 TB   Dell Ent NVMe SED P5316 RI
## 30.72TB
## 1.7.0
Solidigm   P5316 15.36TB
NVMe QLC SED FIPS
15.36 TB   Dell Ent NVMe FIPS P5316 RI
## 15.36TB
## 1.7.0
Solidigm   P5316 30.72TB
NVMe QLC SED FIPS
30.72 TB   Dell Ent NVMe FIPS P5316 RI
## 30.72TB
## 1.7.0
Solidigm   P5336 15.36TB NVMe QLC
## ISE
15.36 TB Dell Ent NVMe P5336 RI ISE
## 15.36TB
## 1.4.0
Solidigm   P5336 30.72TB NVMe QLC
## ISE
30.72 TB Dell Ent NVMe P5336 RI ISE
## 30.72TB
## 1.4.0
Solidigm   P5336 61.44TB NVMe QLC
## ISE
61.44 TB Dell Ent NVMe P5336 RI ISE
## 61.44TB
## 1.4.0
Solidigm   P5336 15.36TB NVMe QLC
## FIPS
15.36 TB Dell Ent NVMe P5336 RI FIPS
## 15.36TB
## 1.4.0
Solidigm   P5336 30.72TB NVMe QLC
## FIPS
30.72 TB Dell Ent NVMe P5336 RI FIPS
## 30.72TB
## 1.4.0
Solidigm   P5336 61.44TB NVMe QLC
## FIPS
61.44 TB Dell Ent NVMe P5336 RI FIPS
## 61.44TB
## 1.4.0
Solidigm   Dell Ent NVMe P5336 RI ISE
## 122.88TB
122.88 TB Dell Ent NVMe P5336 RI ISE
## 122.88TB
## 1.2.0
Solidigm   Dell Ent NVMe P5336 RI
## FIPS 122.88TB
122.88 TB Dell Ent NVMe P5336 RI FIPS
## 122.88TB
## 1.2.0

## Manufacturer   Series   Capacity   Model   Firmware
revision
## STEC   MACH16   100 GB   M16ISD2-100UCT   00000061
Western Digital   RE3   1 TB   WD1002FBYS 02A6B0   03.02C06
Western Digital   RE4   2 TB   WD2002FYPS 01U1B0   04.05G04
Western Digital   RE3   500 GB   WD5002ABYS 02B1B0   02.05B03
Western Digital   Vela-A   6 TB   HITACHI H54726T6CLAR6000
## (SAS SED HDD)
## D9C0
Western Digital   Vela-AP   8 TB   HITACHI H54728T8CLAR8000
## (SAS SED HDD)
## D9C0
Western Digital   Vela-A   6 TB   HUS726T6TALN6L0 (SATA HDD)   VKEIT9C0
Western Digital   Vela-AP   8 TB   HUS728T8TALN6L0 (SATA HDD)   V8EMT9C0
Western Digital   Vela-A   2 TB   HUS726T4TALN6L0 (SATA HDD)   VKEMT9C0
Western Digital   Vela-A   4 TB   HUS726T4TALN6L0 (SATA HDD)   VKEMT9C0
Western Digital   Vela-A   3 TB   HGST H5S726T4CLAR4000 (SAS
## SED HDD)
## S9C0
Page 26 of 36

## Dell Customer Communication - Confidential

## 22

## Internal Use - Confidential
Western Digital   Vela-A   4 TB   HGST H5S726T4CLAR4000 (SAS
## SED HDD)
## S9C0
Western Digital   Vela-A   2 TB and 4
## TB
## HITACHI H54726T4CLAR4000
## (SAS SED)
## D9C0
Western Digital   Vela-A   3 TB   HUS726T4TALA6L0 (SATA HDD)   VLEIT9C0
Western Digital   Vela-A   4 TB   HUS726T4TALA6L0 (SATA HDD)   VLEIT9C0
Western Digital   Leo-A (Gen6)   12 TB   HITACHI H5H72121 EMC12T0
(SAS SED 4kn)
## D614
Western Digital   Leo-A (Gen6)   12 TB   HUH721212ALN600 (SATA 4kn)   LEEMT614
Western Digital   Leo-A FIPS (Gen6)   10 TB   Leo-A 10TB FIPS (SAS SED 4kn)   D614
Western Digital   Leo-A (Gen6)   10 TB   Leo-A 10TB (SATA 4kn)   T614
Western Digital   WDC BearCovePlus
## 1WPD FIPS SAS
Non-SED 12G
## (F800)
## 3.84 TB   W0STR153 EMC3840   D95A
Western Digital   WDC BearCovePlus
1WPD SAS Non-
## SED 12G (F800)
## 7.68 TB   W0STR157 EMC7680   D95A
Western Digital   WDC BearCovePlus
1WPD SAS Non-
## SED 12G (F800)
## 15.36 TB   W0STR155 EMC15T3   D95A
Western Digital   WDC BearCovePlus
## 1WPD SAS
## SAS SED 12G
## (F800)
## 3.84 TB   W5STR153 EMC3840   S95A
Western Digital   WDC BearCovePlus
## 1WPD SAS
## SAS SED 12G (F800)
## 7.68 TB   W5STR157 EMC7680   D95A

## Manufacturer   Series   Capacity   Model   Firmware
revision
Western Digital   WDC BearCovePlus
## 1WPD SAS
## SAS SED
## 12G (F800)
## 15.36 TB   W5STR155 EMC15T3   D95A
Western Digital   WDC BearCovePlus
## 3WPD FIPS SAS SED
## 12G (F800)
## 1.6 TB   W5STR641 EMC1600   D95A
Western Digital   WDC BearCovePlus
## 3WPD FIPS SAS SED
## 12G (F800)
## 3.2 TB   W5STR643 EMC3200   D95A
Western Digital   WDC BearCovePlus
## 3WPD FIPS SAS SED
12G (Gen6 Cache)
## 400 GB   W5STR644 EMC400   D95A
Page 27 of 36

## Dell Customer Communication - Confidential

## 23

## Internal Use - Confidential
Western Digital   WDC BearCovePlus
## 3WPD FIPS SAS SED
12G (Gen6 Cache)
## 800 GB   W5STR648 EMC800   D95A
Western Digital   WDC BearCovePlus
## 3WPD FIPS SAS SED
12G (Gen6 Cache)
## 1.6 TB   W5STR641 EMC1600   D95A
Western Digital   WDC BearCovePlus
## 3WPD FIPS SAS SED
12G (Gen6 Cache)
## 3.2 TB   W5STR643 EMC3200   D95A
Western Digital   WDC BearCovePlus
## 3WPD SAS
## SAS 12G (F800)
## 1.6 TB   W5STR641 EMC1600   S95A
Western Digital   WDC BearCovePlus
## 3WPD SAS 3WPD
## SAS 12G (F800)
## 3.2 TB   W5STR643 EMC3200   S95A
Western Digital   WDC BearCovePlus
## 3WPD SAS
SAS 12G (Gen 6 Cache)
## 400 GB   W5STR644 EMC400   S95A
Western Digital   WDC BearCovePlus
## 3WPD SAS
SAS 12G (Gen6 Cache)
## 800 GB   W5STR648 EMC800   S95A
Western Digital   WDC BearCovePlus
## 3WPD SAS
SAS 12G (Gen6 Cache)
## 1.6 TB   W0STR641 EMC1600   S95A
Western Digital   WDC BearCovePlus
## 3WPD SAS
SAS 12G (Gen6 Cache)
## 3.2 TB   W0STR643 EMC3200   S95A
Western Digital   WDC BearCovePlus
Non-SED (Gen4 and Gen5
## Cache)
## 200 GB   W0STR644 EMC200   S95A
Western Digital   WDC BearCovePlus
Non-SED (Gen4 and Gen5
## Cache)
## 400 GB   W0STR644 EMC400   S95A
Western Digital   WDC BearCovePlus
Non-SED (Gen4 and Gen5
## Cache)
## 800 GB   W0STR648 EMC800   S95A

## Manufacturer   Series   Capacity   Model   Firmware
revision
Western Digital   WDC BearCovePlus
Non-SED (Gen4 and Gen5
## Cache)
## 1.6 TB   W0STR641 EMC1600   S95A
Western Digital   WDC BearCovePlus
SED (Gen4 and
## Gen5 Cache)
## 800 GB   W5STR648 EMC800   D95A
Western Digital   WDC BearCovePlus
SED (Gen4 and
## Gen5 Cache)
## 1.6 TB   W5STR641 EMC1600   D95A
Page 28 of 36

## Dell Customer Communication - Confidential

## 24

## Internal Use - Confidential
Western Digital   WDC AriesKP 5xxN
SATA 512n 6G X210/
X410/NL410 (Gen4 and
## Gen5)
## 2 TB   HUS726020ALA610   A5EITDY0
Western Digital   WDC AriesKP 5xxN
SATA 512n 6G X210/
X410/NL410 (Gen4 and
## Gen5)
## 4 TB   HUS726040ALA610   A5EITDY0
Western Digital   WDC Aries KP 4Kn 6G
## SATA NL410/HD400
(Gen4 and Gen5)
## 6 TB   HUS726060ALN610   APEITDY0
Western Digital   WD Bear Cove
Quantum: 1WPD SAS
## 3.84 TB   W0QTVA13 EMC3840   S109
Western Digital   WD Bear Cove
Quantum: 1WPD SAS
## 7.68 TB   W0QTVA17 EMC7680   S109
Western Digital   WD Bear Cove
Quantum: 1WPD SAS
## 15.36 TB   W0QTVA1A EMC15T3   S109
Western Digital   WD Bear Cove
Quantum: 1WPD SAS FIPS
## 3.84 TB   W5QTVA13 EMC3840   D109
Western Digital   WD Bear Cove
Quantum: 1WPD SAS FIPS
## 7.68 TB   W5QTVA17 EMC7680   D109
Western Digital   WD Bear Cove
Quantum: 1WPD SAS FIPS
## 15.36 TB   W5QTVA1A EMC15T3   D109
Western Digital   WD Bear Cove
Quantum: 3WPD SAS FIPS
## 1.6 TB   W5QTR641 EMC1600   EAN4
Western Digital   WD Bear Cove
Quantum: 3WPD SAS FIPS
## 3.2 TB   W5QTR643 EMC3200   EAN4
Western Digital   WD Bear Cove
Quantum: 3WPD SAS
## 1.6 TB   W0QTR641 EMC1600   S109
Western Digital   WD Bear Cove
Quantum: 3WPD SAS
## 3.2 TB   W0QTR643 EMC3200   S109
Western Digital   WD Bear Cove
Quantum: Cache 3WPD
## SAS
## 400 GB   400 GB - W0QTR648 EMC400   S109
Western Digital   WD Bear Cove
Quantum: Cache 3WPD
## SAS
## 800 GB   800 GB - W0QTR648 EMC800   S109
## Western Digital


WD Bear Cove
Quantum: Cache 3WPD
## SAS
## 1.6 TB   1.6 TB - W0QTR641 EMC1600   S109

## Manufacturer    Series   Capacity   Model   Firmware
revision
Western Digital   WD Bear Cove
Quantum: Cache 3WPD
## SAS
## 3.2 TB   3.2 TB - W0QTR643 EMC3200   S109
Page 29 of 36

## Dell Customer Communication - Confidential

## 25

## Internal Use - Confidential
Western Digital   WD Bear Cove
Quantum: Cache 3WPD
## SAS FIPS
## 400 GB   W5QTR648 EMC400   EAN4
Western Digital   WD Bear Cove
Quantum: Cache 3WPD
## SAS FIPS
## 800 GB   W5QTR648 EMC800   EAN4
Western Digital   WD Bear Cove
Quantum: Cache 3WPD
## SAS FIPS
## 1.6 TB   W5QTR641 EMC1600   EAN4
Western Digital   WD Bear Cove
Quantum: Cache 3WPD
## SAS FIPS
## 3.2 TB   W5QTR643 EMC3200   EAN4
Western Digital   WDC PARIS-C DR
## 7.2K 3.5 SAS 12G 4K
## FIP
## 16 TB   W5H72181CLAR16T0   D290
Western Digital   WDC PARIS-C DR
## 7.2K 3.5 SATA 6G 4K
## ISE
## 16 TB   WUH721816ALE6L0   T290
Western Digital   WDC PARIS-D DR
## 7.2K 3.5 SATA 6G 4K
## ISE
## 20 TB   WUH722020BLN600   PQEMT550













Supported bootflash drives
The following table lists all the supported bootflash drives.

## Manufacturer   Series   Capacity   Model   Firmware
revision
HGST   Ultrastar C10K1800   300 GB   HGST HUC10183CLAR300   L9H0
Intel   S3500 m.2   80 GB   SSDSCKHB080G4M
## 118000039
## G201EM05
Netlist   mSATA Slim SSD   8 GB   Netlist 8GB-001   S5FAM018
Netlist   mSATA Slim SSD   8 GB   Netlist 8GB-002   S9FM01.6
Smart Modular   mSATA XP+   32 GB   SGMST3D32GBM01EMC
## 118033093
## Ver7.02w
Page 30 of 36

## Dell Customer Communication - Confidential

## 26

## Internal Use - Confidential
Smart Modular   Xceed IOPS iSATA Slim   8 GB   SMART iSATA
## SG9SLM3B8GBM11ISI
## Ver7.02w
Smart Modular   Xceed IOPS iSATA Slim   8 GB   SMART iSATA
## SG9SLM3E8GBM11ISI
## Ver7.02w
Smart Modular   Xceed IOPS iSATA Slim   8 GB   SMART iSATA
## SGSLM3E8GBM01ISI
## Ver7.02w
Smart Modular   mSATA XL   32 GB   SMART mSATA
## SG9MST3D32GBM01
## Ver7.02w
Smart Modular   mSATA XL   32 GB   SMART mSATA
## SGMST3D32GBM11ISI
## Ver7.02w
Smart Modular   mSATA XL   32 GB   SHMST6D032GHM11EMC
## 118000100
## S8FM08.2
Smart Modular   PS3108 (XP+)   32 GB   SHSLM6B032GHM11EMC   S8FM08.2
Smart Modular   PS3108   32 GB
(Formatted
to 8 GB)
## SHSLM6BA08GHM11EMC
## 118999813
## S8FM08.2
Smart Modular   PS3110   64 GB
(Formatted
to
## 32 GB)
## SHMST6DA32GLM21EMC
## 118033313
## FW1146
Smart Modular   PS3110 m.2   64 GB   SHM2S6D064GLM21EMC
## 118000526
## FW1120
Smart Modular   PS3110   32 GB
(Formatted
to 8 GB)
## SHSLM6BA08GLM21EMC
## 118033312
## FW1146
Smart Modular   MO-297   32 GB   SGSLM3E32GBM01ISI   Ver7.02k
Smart Modular   PS3110 m.2   128 GB   SHM2S6D128GLM21EMC
## 118000527
## FW1120
SanDisk   SanDisk SSD-P4   8 GB   SanDisk SSD P4 8GB   SSD 8.10
## Installation
The following instructions are for performing a non-disruptive firmware update (NDFU) with a drive support package
## (DSP).
- Go to the Dell Support  page and download the latest drive support package.
NOTE: If you are unable to download the package, contact PowerScale Technical Support for assistance.
- Open a secure shell (SSH) connection to any node in the cluster and log in.
- Create or check for the availability of the directory structure /ifs/data/Isilon_Support/dsp.
- Copy the downloaded file to the dsp directory through SCP, FTP, SMB, NFS, or any other supported dataaccess
protocols.
- To unpack the file, perform the following command:
tar -zxvf Drive_Support_<version>.tgz
-  To install the package, perform the following command:
Page 31 of 36

## Dell Customer Communication - Confidential

## 27

## Internal Use - Confidential
isi_dsp_install Drive_Support_<version>.tar
-  After installing DSP, check that there is no DSP displayed in the patch list.

## NOTE:
● Running isi_dsp_install installs the drive support package on the entire cluster.
● The installation process takes care of installing all the necessary files from the drive support package followed by
the uninstallation of the package. You do not need to delete the package after its installation or prior to installing
a later version.

Update the drive firmware
When updating the drive firmware to the latest version, OneFS updates the drives sequentially. Updating the drive
firmware of a single drive takes approximately 90 seconds, depending on the drive model.

CAUTION: Power cycling drives during a firmware update might return unexpected results. Do not restart or power off
nodes when the drive firmware is being updated in a cluster.
- Open a secure shell (SSH) connection to any node in the cluster and log in.
- To initiate drive firmware updates on a single node, perform the following command:
isi devices drive firmware update start all --node-lnn <node-number>
Optionally, to initiate drive firmware updates on all nodes, perform the following command:
isi devices drive firmware update start all --node-lnn=all
Verify a drive firmware update
After you update the drive firmware in a node, confirm that the firmware is updated properly and that the affected drives
are operating correctly.

- To ensure that no drive firmware updates are currently in progress on a single node, perform the following command:
isi devices drive firmware update view --node-lnn=<node-number>
Optionally, to verify the progress on all nodes, perform the following command: isi devices
drive firmware update list
- Confirm that the status of Updating is not displayed on any drives.
- To verify that all drives have been updated on a single node, perform the following command:
isi devices drive firmware list --summary --node-lnn=<node-number>
Optionally, to verify the drives on all nodes, perform the following command:  isi
devices drive firmware list --summary --node-lnn=all
- Confirm that the Desired column is empty for all drives.
- To verify that all affected drives are operating in a healthy state on a single node, perform the following command:
isi devices drive list --node-lnn=<node-number>
Optionally, to verify the drives on all nodes, perform the following command:
isi
devices
drive list --node-lnn=all
- Confirm the State column displays [HEALTHY] or [L3].

Verify free disk space
Verify that there is free disk space in the /var/crash partition.
Verify free disk space in the /var/crash partition by running the following command: df -h /var/crash
We recommend having at least 100 MB of free space in /var/crash before proceeding.
Page 32 of 36

## Dell Customer Communication - Confidential

## 28

## Internal Use - Confidential
If /var/crash is full and you can identify stale troubleshooting data such as, old core files, remove them to make
space. If you need assistance in deciding what to clear, contact Isilon Technical Support for assistance.

Extract the drive support package
Extract the contents of the drive support package to /var/crash/dsp.
Extract the contents of the drive support package by running the following commands:
cd /var/crash tar -zxf Drive_Support_<version>.tgz mkdir
/var/crash/dsp  tar  -C  /var/crash/dsp  -xf
Drive_Support_<version>.tar
Verify drives that need firmware updates
You can verify which drives in a node require firmware updates.
Verify which drives require firmware updates by running the following commands:
cd /var/crash/dsp
## ./isi_update_drive_firmware

Where to get help
The Dell Technologies Support site contains important information about products and services including drivers,
installation packages, product documentation, knowledge base articles, and advisories.
A valid support contract and account might be required to access all the available information about a specific Dell
Technologies product or service.
Additional options for getting help
This section contains resources for getting answers to questions about PowerScale products.


Dell Technologies support    ● https://www.dell.com/support/incidents
Telephone support
● United States: 1-800-SVC-4EMC (1-800-782-4362)
## ● Canada: 1-800-543-4782
## ● Worldwide: 1-312-725-5401
● Local phone numbers for a specific country or region are available at
https://www.dell.com/support/incidents
PowerScale OneFS Documentation
## Info Hubs
● https://www.dell.com/support/kbdoc/000152189/powerscale-onefs
Dell Community Board for self-help   ● https://www.dell.com/community





Page 33 of 36

## Dell Customer Communication - Confidential

## 29

## Internal Use - Confidential
Notes, cautions, and warnings
NOTE: A NOTE indicates important information that helps you make better use of your product.

CAUTION: A CAUTION indicates either potential damage to hardware or loss of data and tells you how to avoid
the problem.
WARNING: A WARNING indicates a potential for property damage, personal injury, or death.























© 2020-2026 Dell Inc. or its subsidiaries. All rights reserved. Dell, EMC, and other trademarks are trademarks of Dell Inc. or its
subsidiaries. Other trademarks may be trademarks of their respective owners.
Page 34 of 36

## Dell Technologies – Restricted Use – Confidential
Page 35 of 36

## Dell Technologies – Restricted Use – Confidential
Page 36 of 36