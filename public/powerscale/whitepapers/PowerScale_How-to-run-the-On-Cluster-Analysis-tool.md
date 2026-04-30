

## 
## Print
PowerScale: How to run the On-Cluster Analysis tool
Summary: This KB article provides instructions about how to use the Isilon On-Cluster Analysis tool (IOCA) and interpret the results.
## Detailed Article
## Instructions
The Isilon On-Cluster Analysis (IOCA) tool analyzes a running PowerScale cluster's health and assists* in planning upgrades.
- IOCA is not designed to replace the review of upgrade-related documents in preparation for upgrade activities. Consult the OneFS Upgrade
Planning and Process Guide: PowerScale OneFS Upgrade Planning and Process Guide
The latest IOCA tool release is available for download from Lightning.
The latest release is downloaded even though the date on the download is older.
To verify IOCA integrity you can have the sha256 file within the above tar package, or you can use an independent IOCA.sha256 file hosted
here for download.
Once downloaded, transfer to the same location as the IOCA script (make sure to overwrite the existing IOCA.sha256).
If using sha256sum:
Observe the result as in bold above and confirm it is OK.
If you do not have sha256sum:
Manually verify that both checksums match.
To run IOCA on a cluster:
- Verify that you are connected to the correct cluster. Run the following command to show serial numbers in the cluster, and verify that the
service request serial number shows in the list:
isi_for_array cat /etc/isilon_serial_number
## 
You must unpack IOCA and IOCA.sha256 with the following once downloaded and transferred to your cluster:
# tar -xvf IOCA.tar
## IOCA
IOCA.sha256
## 
# sha256sum -c /home/nyhanj1/IOCA.sha256
## ./IOCA: OK
## 
# cat IOCA.sha256
a55c9efcea29776317d3b3ed36c504dcab08d1f945161f6ac6c8bbb315f31bb0 ./IOCA
## 
# sha256 IOCA
SHA256 (IOCA) = a55c9efcea29776317d3b3ed36c504dcab08d1f945161f6ac6c8bbb315f31bb0
4/30/26, 9:20 AMPowerScale: How to run the On-Cluster Analysis tool | Dell Singapore
https://www.dell.com/support/kbdoc/en-sg/article/lkbprint?ArticleNumber=000021811&AccessLevel=10&Lang=en1/8

- Create the /ifs/data/Isilon_Support/ directory if it does not exist and change it by running the following commands:
mkdir -pv /ifs/data/Isilon_Support
cd /ifs/data/Isilon_Support
- Stage the latest version of IOCA on to the cluster into the /ifs/data/Isilon_Support/ directory:
If a previous version exists, verify that it is the latest version by running the command below and compare it to the version
that is available for download. The version is listed at the top of the health check script.
perl IOCA -v
- Run the IOCA tool, adding any additional arguments. In the following example, the pre-upgrade check includes checks for an upgrade to
9.5.1.0 and displays an upgrade plan recommendation after the health check results:
perl IOCA -u 9.5.1.0
- Gather the output and post that to the Service Request.
- Review the health checks for all identified FAIL or WARN messages for potential issues.
Interpreting IOCA output:
For each health check item, if anything is identified there is typically a Knowledge Base (KB) article associated to it. This tool was initially an
internally facing tool, some of the articles it presents are not yet externally accessible. Work is ongoing to facilitate these referenced articles
being accessible to an external audience.
The following is an example output for a Baseboard Management Controller (BMC) or Chassis Management Controller (CMC) Hardware
Monitoring check failure on a cluster:
BMC/CMC Hardware Monitoring                       FAIL
FAIL: Hardware monitoring issues detected on nodes: 2
INFO: 3 nodes have out of date CMC firmware versions: 1-3
INFO: Refer to KB489050 (https://support.emc.com/kb/489050) for details.
In this example, it shows a FAIL for node 2 having hardware monitoring issues. It also includes INFO that shows the CMC firmware versions
are out of date on nodes 1-3. Finally, it contains a KB article which has resolution steps.
## Compliance Mode
IOCA is run in the same manner on Compliance Mode enabled clusters as it is for non-Compliance Mode clusters. There is no requirement to
run it with sudo. However, the compadmin user must be the owner of the IOCA script to run it.
The following is the usage for IOCA and available arguments or filters:
4/30/26, 9:20 AMPowerScale: How to run the On-Cluster Analysis tool | Dell Singapore
https://www.dell.com/support/kbdoc/en-sg/article/lkbprint?ArticleNumber=000021811&AccessLevel=10&Lang=en2/8

Usage: IOCA [options] [destination OneFS version]
-d, --debug       Display debugging information
-e, --extra       Displays extra details as part of each check
-j, --json        Displays output in JSON format
-v, --version     Displays current script version
-h, --help        Displays this help screen
-r <checkName>, --run=<checkName>
Executes only the specified check, can be included multiple times
-u, --upgradeplan Includes an upgrade plan after health checks
--rolling         Provide rolling reboot plans
--parallel        Provide parallel reboot plans [where supported]
--simultaneous    Provide simultaneous reboot plans [excludes node firmware]
## -o, --onefs
Supports the following comma separated options [ex. 8.1.2,simultaneous]:
<version>       Uses the provided destination OneFS version
simultaneous    Simultaneous OneFS upgrade
parallel        Parallel OneFS upgrade [requires 8.2.2+]
rolling         Rolling OneFS upgrade
exclude-nf      Upgrade plans will combine OneFS + node firmware by
default [9.2 feature], this option disables that
## -p, --patches
Supports the following comma separated options [ex. none,simultaneous]:
none            Opt out of patch recommendations
simultaneous    Simultaneous patch installs
parallel        Parallel patch installs [requires 9.1+]
rolling         Rolling patch installs
## -nf, --node-firmware
Supports the following comma separated options [ex. 10.3.3,parallel]:
<version>       Uses the provided version for node firmware checks
none            Opt out of node firmware recommendations
simultaneous    Simultaneous node firmware updates [requires 8.2+]
parallel        Parallel node firmware updates [requires 8.2+]
rolling         Rolling node firmware updates
## -df, --drive-firmware
Supports the following comma separated options [ex. 1.32]:
<version>       Uses the provided version for drive firmware checks
none            Opt out of drive firmware recommendations
## -vf, --verify-files
Runs checks on files within specified location [ex. /ifs/data/] of certain file type [ex. .isi, .tgz,
## .tar.gz, .tar]
<file location>     default location is /ifs/data/ - specify the location where the upgrade files were
placed
## Additional Information
Table of the individual checks and the name that is used when running the command:
--run=CHECK
perl
onefs94-a-1# perl IOCA --run=CHECK
Isilon On-Cluster Analysis                        0.1541
## 
The IOCA script gets updated frequently. To see a new full list of checks, update to the latest IOCA version on the Isilon cluster and run the following
command:
4/30/26, 9:20 AMPowerScale: How to run the On-Cluster Analysis tool | Dell Singapore
https://www.dell.com/support/kbdoc/en-sg/article/lkbprint?ArticleNumber=000021811&AccessLevel=10&Lang=en3/8

Requested checks, check, was not recognized.
Available checks are:
checkA100Root                 Checks if A100 node root mirrors need to be resized to 2GB
checkAPIAuth                  Checks for API auth set to basic when upgrading from 8.1.2.0 to 9.2 or
higher
checkAccessZones              Checks if multiple access zones are configured for upgrades across 7.1.1.
Checks for nested or overlapping SMB shares. Adds warnings when any non-System access zone pools are found, only
applies for upgrades across OneFS 7.1.1
checkAggregationMode          Checks that the aggregation mode is not Legacy FEC mode for upgrades to
OneFS 8+
checkAspera                   Checks if any Aspera services are enabled. If performing OneFS upgrades, it
must be reinstalled post-upgrade
checkAuthStatus               Checks authentication status on each node. Warns if any authentication
providers are not online or active.  Checks for RFC2307 and Auto-locate of GID/UIDs and points to KB 000028577
checkBBUDegCap                Checks for the level of BBU degradation on Gen6 nodes and flags any nodes
with excessive degradation which would increase the risk of the node going into an RO state.
checkBMCandCMC                Checks for BMC/CMC related issues
checkBXENodes                 Checks for existence of nodes with BXE interfaces, also checks for KB
000048172 & KB 000064027 known issues
checkBootDisks                Checks boot disk wear life remaining, firmware level, and historic error
count
checkCM6FWBug                 Checks drive firmware versions for the criteria of FCO F022318EE
checkCMOSTimeCentury          Check if the century configured in CMOS time matches the current century
checkCapacity                 Verifies cluster capacity based on documented numbers the Upgrade Planning
and Progress Guide. Warns if approaching
checkCloudPools               Checks for CloudPools related issues
checkConfCmtSyntax            Checks sysctl.conf for comments without leading # symbol that would pose an
issue in parsing the conf file.
checkContact                  Displays contact information configured in CELog when run with the --extra
argument
checkCoreDumps                Checks for recent unexpected process restarts reported in /var/log/messages
checkDTA000194434             Checks for criteria of KB 000194434
checkDestinationOneFS         Checks destination OneFS version
checkDiskpools                Checks diskpools and class equivalence for OneFS upgrades going across 7.0
checkDriveFirmware            Checks for out-of-date Drive Firmware and calls other related drive
firmware checks
checkDriveLoad                Checks the current load on the drives
checkDriveStallTimeout        Checks current Drive Stall Timeout setting, recommended value is 3.5
seconds (3500000 microseconds) or higher
checkDriveSupportPackage      Checks for drive firmware updates available in the Drive Support Package
checkDrivesHealth             Checks health of drives and the drive stall timeout setting in sysctl
checkET004252                 Checks for criteria of ET004252
checkETAs                     Checks for Technical Advisories
checkEmailSettings            Displays E-mail settings configured in CELog when run with the --extra
argument
checkEncoding                 Checks exports and cluster configuration for if utf-8/default encoding
checkEvents                   Checks events on all the nodes, failure if any critical events exist
checkFCOF022318EE             Checks drive firmware versions for the criteria of FCO F022318EE
checkFCOF031617FC             Checks drive firmware versions for the criteria of KB 000024620
checkFCOF042415EE             Checks the cluster to see if it meets criteria for FCO F042415EE/KB
## 000051631
checkFileSharing              Checks if Atime is enabled
checkFilepoolPolicies         Checks GNA requirements and checks filepools for final match being set and
names starting with a number
checkFirmwarePackages         In OneFS 9.1 and later, confirms firmware packages are available
checkFlush                    Checks for running flush processes / active pre_flush screen sessions on
clusters
checkGatewayPriority          Checks for subnets with duplicate gateway priorities
checkGroups                   Checks nodes for all enabled protocols.  Fails if group info is reporting
that an enabled protocol is not functioning on any node
checkHDFS                     Display HDFS details, only useful when run with --extra
checkHardening                Checks if FIPS is enabled on node in the cluster, this needs to be disabled
4/30/26, 9:20 AMPowerScale: How to run the On-Cluster Analysis tool | Dell Singapore
https://www.dell.com/support/kbdoc/en-sg/article/lkbprint?ArticleNumber=000021811&AccessLevel=10&Lang=en4/8

prior to upgrades to 9.5 or higher and re enabled after to avoid assessment failures
checkHardwareStatus           Checks battery health, power supplies, and gathers hardware details for use
elsewhere
checkHardwareUpgrade          Checks if there is an in progress hardware upgrade
checkHealth                   Verifies cluster health status and node health status
checkIBInterfaces             Checks for ib0/1 as being active, checks for ETA180317 IB switch firmware
versions, and checks for overlapping IB networks
checkIBPCIeSlot               Checks if the InfiniBand card is installed in the wrong slot which may lead
node start up issues during an upgrade to OneFS 9 and later releases
checkIDI                      Checks for IDI errors in the past 90 days
checkISCSI                    Checks for iSCSI LUNs being configured in /ifs/.ifsvar/iscsi/iscsi.conf
(OneFS prior to 8.x only)
checkIndexSnapshotCurrent     Checks for current snapshots that are over 2 weeks old and may contirbute
to capacity issues
checkInternalPing             Checks internal network by performing network ping operations
checkJobHistory               Checks job history for issues, currently just MediaScan issues
checkJobStatus                Checks for running jobs that would impact an upgrade
checkJobs                     Checks jobs
checkKB000066019              Checks size of reports.db and flags if over 100MB which may lead to issues
outlined on KB 000066019
checkKB000081658              Checks for criteria of KB 000081658
checkKB000181818              Checks for criteria of KB 000181818
checkKB000192800              Checks for critera of KB 000192800
checkKB000196175              Checks for criteria of KB 000196175
checkKB000196762              Checks for criteria of KB 000196762
checkKB000197850              Checks for issues with IB queue pairs that would lead to node reboot issues
if IB queue pairs are in a degraded state
checkKB000212387              Checks Authentication providers msDS-SupportedEncryptionTypes attribute to
ensure a value is set and assigned, if it is not, there is potential for DU after an upgrade to 9.5 or above.
checkKB000213188              Checks for SED hardware where current version is less than 9.2 and
destination version is 9.5 or higher.
checkKB201488                 Checks if any node meets criteria for KB 000201488
checkKB201666                 Checks if it is necessary to perform the proactive workaround from KB
000201666 for a patch installation and whether the pre-requisites are met
checkKB201933                 Checks for criteria of KB 000201933
checkKB203381                 Checks for criteria of KB 203381
checkKB220014                 Checks for criteria of KB 220014
checkKB462202                 Checks BootOrder in bios_settings.ini on Generation 5 nodes to determine if
at risk for KB 000025523
checkKB489473                 Checks if any node meets criteria for KB 000061983
checkKB490849                 Checks if at risk for KB 000052089
checkKB496582                 Checks for auth rules issues detailed in KB 000160596
checkKB496993                 Checks if the cluster is at risk for KB 000061504
checkKB501267                 Checks for the criteria of KB 000026510
checkKB507031                 Checks for criteria outlined in KB 000035398
checkKB516613                 Checks if any node meets criteria for KB 000057267
checkKB519119                 Checks if nodes may be impacted by KB 519119
checkKB519388                 Pre-upgrade check for issues outlined in KB 000162270
checkKB519423                 Checks if the cluster config files are in a mixed mode
checkKB519890                 Checks for a known issue with LAGG interfaces in LACP mode when running
OneFS 8.0.0.6, 8.0.1.2, 8.1.0.2, and 8.1.1.1
checkKB521778                 Checks for criteria outlined in KB 000031948
checkKB521890                 Checks for criteria outlined in KB 000167681
checkKB524082                 Checks if the cluster is enabled for HTTP clients and flags a compatibility
issue caused by a change in Apache versions
checkKB527312                 Check for criteria of KB 000166965
checkKB530050                 Check for criteria of KB 000040987
checkKB533516                 Checks if cluster uses an IP for AWS CloudPool accounts putting it at risk
for DTA 533516
checkKB535582                 Checks if at risk for KB 000060471
checkKB537785                 Check for criteria of KB 000168829
checkKB540000                 Checks for criteria of KB 000058599
checkKB540071                 Checks for existence of files under /var/fw/fwpkg when no IsiFw package is
4/30/26, 9:20 AMPowerScale: How to run the On-Cluster Analysis tool | Dell Singapore
https://www.dell.com/support/kbdoc/en-sg/article/lkbprint?ArticleNumber=000021811&AccessLevel=10&Lang=en5/8

installed
checkKB540513                 Checks for criteria of KB 000174074
checkKB540872                 Checks if the cluster may encounter KB 000170982 during an upgrade from
OneFS 8.2 releases
checkKB540901                 Checks boot disk partitions for any mismatches in uuids which may lead to
boot failures
checkKB544401                 Check for critera of KB 000173157
checkKB544854                 Check for criteria of KB 000173432
checkKB546604                 Checks for criteria of KB 000180866
checkKerberos8000             Checks for an issue with the Kerberos configuration file when upgrading to
OneFS 8.0.0.0
checkLACPSFP                  Checks for LACP on cxgb interfaces for KB 000174095
checkLWIODLog                 Checks /var/log/lwiod.log for known errors occuring in the last 30 days
checkLastZoneID8000           Checks for gaps in access zones that may cause major issues when upgrading
to OneFS 8.0.0.0
checkLeakFreeBlocks           Checks for nodes with efs\.lbm\.leak_freed_blocks enabled.
checkLegacyLDAP               Checks for Legacy LDAP being enabled in OneFS 6 to OneFS 7 upgrades
checkLicense                  Checks licenses and gives direction based on licensed features.  InsigntIQ
and vCenter licenses, gives information from compatibility guide.  iSCSI, instructs to only perform simultaneous
OneFS upgrades and that it is not supported in 8.0
checkLinMasterPadding         Checks the LIN master padding to be all zeros
checkListenQueue              Checks for listen queue overflows to be less than 50,000 per node
checkLogLevel                 Checks LWSM log levels for NFS, SMB, HDFS, and Authentication
checkLogs                     Checks Log file presence and flags if any log file specified in list is not
present
checkMaintenanceMode          Checks if the cluster is currently in maintenance mode
checkMemory                   Checks each DIMM to meet criteria outlined in KB 000041666 and if the
expected (per product info line) matches closely the reported RAM
checkMessagesLog              Checks /var/log/messages.log for known errors occuring in the last 30 days
checkMirrors                  Checks the boot mirror health
checkNDMP                     Checks for running NDMP sessions
checkNDMP16GB                 Checks for LNN changes that have occurred since the isi_ndmp_d processes
started which can cause issues during the HookDataMigrationUpgrade phase of an OneFS upgrade
checkNDMPUpgradeTimeout       Checks for LNN changes that have occurred since the isi_ndmp_d processes
started which can cause issues during the HookDataMigrationUpgrade phase of an OneFS upgrade
checkNFS                      Uses nfsstat to identify RPC errors
checkNetBIOS                  Checks if the Isilon NetBIOS Name Service (nbns) is enabled when updating
to OneFS 8.0.1 and later
checkNetstat                  Checks connections counts for specific protocols via netstat
checkNetworkParallelUpgrade   Checks for the risk of inaccessible network pools during a parallel upgrade
checkNetworkPoolIFaces        Checks each network pool and their assigned interfaces, if only 1 interface
is configured for any pool and IP Ranges are set, this will cause a failure for pre upgrade mandatory checks
checkNodeCompatibility        Checks node compatibility for OneFS upgrades by comparing it against known
supported versions
checkNodeFirmware             Checks node firmware for updates
checkNodesInstalled           Checks for nodes installed to display in an agregated list for visibility
checkOneFSVersions            Checks running version and target version for any issues. Failure: Any
version mismatch across all nodes
checkOpenFiles                Checks each node for the number of open files [sysctl kern.openfiles] and
compares that against the number of max open files [sysctl kern.maxfiles].  The check will warn at over 80% of
the max and fail at over 90% of the max
checkPSCALE136276             Check for criteria of PSCALE-136276
checkPartitions               Checks system partition space
checkPatches                  Checks for highly recommended patches, on the current version if no target
version, or for the target version
checkPerformance              Checks cluster performance
checkProcesses                Checks for OpenSM master, MCP, isi_mca_dump, and isi_upgrade_d process
related issues
checkProtectionLevel          Check storage pools protection levels
checkRealACL                  Checks if Real ACLs are configured / set on /ifs/.ifsvar or
ifs/.ifsvar/patch. These should not be set and if they are, it would cause an issue for upgrades / installs
checkRemoteSupport            Checks is Restricted Shell is enabled and isi_supportassist, if both are
enabled and you upgrade to 9.7 then it will cause an issue for support assist services to restart.
4/30/26, 9:20 AMPowerScale: How to run the On-Cluster Analysis tool | Dell Singapore
https://www.dell.com/support/kbdoc/en-sg/article/lkbprint?ArticleNumber=000021811&AccessLevel=10&Lang=en6/8

checkRoutingTables            Displays routing table for each node
checkSBR8000                  Checks if SBR is enabled pre-upgrade for OneFS upgrades targeting 8.0.0.0/1
checkSNMPDConfig              Checks both SNMPD.config and also isilon_serial_number to make sure they
are not 0 bytes
checkSPNs                     Displays a list of SPNs, only useful when run with --extra
checkSRS                      Checks the remote connectivity configuration for issues
checkSSHDConfig               Checks the /etc/mcp/templates/sshd_config files for known issues
checkSWIFTAccounts            checks for SWIFT accounts which is then used to set prioirity of flag when
SWIFT is licensed and an upgrade to 9.5 or higher is being performed
checkServices                 Checks common services to make sure they are in the expected states
checkServicesMonitoring       Checks that enabled services are being monitored
checkSmartConnect             Check that the SmartConnect Service IPs are all assigned and not being used
for client connectivity
checkSnapshot                 Checks if the Snapshot count is approaching cluster limit of 20,000,
whether Autodelete is set to yes, and checks snapshot logs. Checks snapshot logs for EIN/EIO/EDEADLK/Failed to
create snapshot
checkStaticRouteConflict      Checks for conflicting static routes
checkStoragePools             Check storage pools for health/capacity/unprovisioned drive issues
checkSupportability           Checks cluster hardware and software supportability
checkSwitchCompatibility      Checks backend Dell switches to confirm they are at least version 10.5.0.6
checkSymLink                  Checks is /var/patch/catalog or /var/patch/tmp are Sym Linked or if catalog
is a file instead of directory.
checkSyncIQ                   Gathers source and target SyncIQ information and reports partners of
SyncIQ. Checks for an issue where having a large number of SyncIQ report files causes a tar process to delay
other upgrade processes potentially leaving the cluster in a temporary DU scenario for an extended period of time
checkSystemFlag               checks for diskpools with system flag set
checkTimeDrift                Checks time drift between nodes
checkTimeSync                 Checks if the cluster is enabled to sync to an external server
checkTimeZone                 Checks for missing time zone in target OneFS code level
checkUIDGID                   Checks for UID/GID values greater than 262143 for files located in / and
## /var
checkUpgrade                  Checks for in progress upgrade related issues. Warns if the isi_upgrade_d
service is enabled. Fails if not in a committed state. Fails if an upgrade activity is already in progress.Checks
the fs_fmt_version, an odd or zero fs_fmt_version is problematic
checkUpgradeAgentPort         Checks the port used by the isi_upgrade_agent_d daemon to ensure it is not
in use by other processes
checkUpgradePath              Checks where multiple jumps are required and provides specifics required
checkUptime                   Checks node uptime, warning over 200 days, flags uptime ETAs
checkVaultCard                Checks for the presence of the M.2 vault card in Generation 6 nodes and
confirms SMART status threshold has not been exceeded on that device
checkZoneLocalAuth            For upgrades to OneFS 8.2 and later, checks if local providers are
associated with other access zones
Here are some recommended resources related to this topic that may be of assistance:
PowerScale: OneFS Upgrades Info Hub
Firmware - PowerScale Info Hub
PowerScale Hardware Info Hub
Isilon, PowerScale, OneFS - How to safely shut down an Isilon cluster prior to a scheduled power outage
## Affected Products
PowerScale, Isilon, PowerScale OneFS, PowerScale F210, PowerScale F710
## Article Properties
## Article Number: 000021811
## Article Type: How To
## Last Modified: 10 Mar 2026
4/30/26, 9:20 AMPowerScale: How to run the On-Cluster Analysis tool | Dell Singapore
https://www.dell.com/support/kbdoc/en-sg/article/lkbprint?ArticleNumber=000021811&AccessLevel=10&Lang=en7/8

## Version:  25
4/30/26, 9:20 AMPowerScale: How to run the On-Cluster Analysis tool | Dell Singapore
https://www.dell.com/support/kbdoc/en-sg/article/lkbprint?ArticleNumber=000021811&AccessLevel=10&Lang=en8/8