<?php
/**
 * Created by PhpStorm.
 * User: Talemul
 * Date: 5/5/2015
 * Time: 2:05 PM
 */


 /*
  * for check session just call
  * checkSession();
  *
  * */
$TBL_USER='tbl_user'; //SQL Server [User]
$TBL_ROLE = 'roleinfo'; // role table


// HOSTING
//$host_drive = "http://".$_SERVER['HTTP_HOST']."/rcportal/";
$CURRENT_FILE_HOSTING_PATH = "/var/www/html/ocmportal/";

// Upgrade Source & Destination File Directory
//$UPGRADE_VERSION_SEARCH_URL = "http://ssd-tech.com/unifiedgw/ugw/check_upgraded_version.php";
//$UPGRADE_SOURCE_FILE_PATH = "http://ssd-tech.com/unifiedgw/ugw/download/";
//$UPGRADE_DESTINATION_FILE_PATH = "/home/download_files/rcportal.zip";

// UGW RollBack Default VERSION BACKUP Directory
//$LATEST_FILES_BACKUP_PATH = "/home/ROLLBACK_VERSION/";
//$DEFAULT_SOURCE_FILES = "/home/UGW_BACKUP/";
//$SHELL_FILE_URL = $CURRENT_FILE_HOSTING_PATH."ssh/file_write.sh";

// Log File
//$LOG_FILE = "/home/LOG/ugw.log";
$LOG_TYPE = "FILE";  // FOR file writing >> "FILE", FOR Database >> "DB"
$LOG_HOLDER = "/home/LOG/";  // FOR file writing >> FILE_DIR_PATH, FOR Database >> Table_Name (or, DB_NAME.TABLE_NAME)



$dir = "/etc/sysconfig/network-scripts/";
$dir_dhcp = "/etc/dhcpd.swf";
$dir_dhcp_lease = "/var/lib/dhcpd/dhcpd.leases";
$dir_dhcp_interface = "/etc/sysconfig/dhcpd";
$dir_firewall = "/etc/sysconfig/iptables";
$dir_hosts = "/etc/hosts";
$dir_dns_servers = "/etc/resolv.swf";
$dir_bwm = "/var/www/html/bw/xml/";
$dir_network_host = "/etc/sysconfig/network";
$dir_proxy = "/etc/squid/squid.swf";
$dir_proxy_browsing_history = "/var/log/squid/access.log";
$dir_vpn_ipsec = "/etc/ipsec.d/ugw.swf";
$dir_vpn_ipsec_secret = "/etc/ipsec.d/ugw.secrets";
$dir_vpn_pptp_server = "/etc/pptpd.swf";
$dir_vpn_pptp_client = "/etc/ppp/chap-secrets";
$dir_ippbx_extension = "/etc/asterisk/extensions_additional.swf";
$dir_ippbx_sip = "/etc/asterisk/sip_additional.swf";
$p_of_static_routing = "/etc/quagga/zebra.swf";
$zebra_shell_path = "/var/tmp/zebra.sh";
$p_of_dynamic_rip_routing = "/etc/quagga/ripd.swf";
$rip_shell_path = "/var/tmp/rip.sh";
$p_of_dynamic_ospf_routing = "/etc/quagga/ospfd.swf";
$ospf_shell_path = "/var/tmp/ospf.sh";
$dir_bgp = "/etc/quagga/bgpd.swf";
$stop_bgp_path = "/var/tmp/stop_bgp.sh";
$bgp_current_config_path ="/var/tmp/bgp.txt";
$running_bgp_path = "/var/tmp/bgp.sh";
$dir_vrrp = "/etc/keepalived/keepalived.swf";
$dir_vpn_xl2tp = "C:/inetpub/wwwroot/rcportal/file_writter/xl2tpd.swf";
$dir_vpn_ms_dns = "C:/inetpub/wwwroot/rcportal/file_writter/options.xl2tpd";
$dir_vpn_xl2tp_client = "C:/inetpub/wwwroot/rcportal/file_writter/chap-secrets";
$dir_firewall_group = "/ocmp/test/bwp/firewallRules/";
$remove_lease = ">/var/lib/dhcpd/dhcpd.leases";
$tcp_dump_path = "/var/tmp/tcpdump/";
$pageTitle = "Unified Gateway";
$page_title_value = "";
$hostPath = "http://". $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$dir_bwp="/ocmp/test/bwp/"; 
$dir_firewall_config="/ocmp/test/bwp/"; 
$path_of_smsgw_configuration = "/ocmp/test/smsgw/smsgw.ini";
