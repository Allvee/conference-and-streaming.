<?php
   session_start();
   include_once "host.php";
   if( isset($_SESSION['conference']) && !empty($_SESSION['conference']) ){

   }else{
       header("Location:http://".MARKETPLACE_IP."/marketplace/index.php");
   }

?>

<!DOCTYPE html>
<html>
<head lang="en">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

    <title> Enterprise Conference </title>

    <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!--============================= Framework defined css =============================-->
    <link href="conference/css/bootstrap.css" rel="stylesheet" type="text/css"/>

    <!--============================= user defined css =============================-->
    <link href="conference/font-awesome-4.1.0/css/font-awesome.min.css"
          rel="stylesheet" type="text/css"/>
    <link href="conference/css/datePicker/datepicker3.css" rel="stylesheet"
          type="text/css"/>

    <!--============================= plug-in css  ============================================================-->
    <link href="conference/css/popup/jquery_confirm_plugin.css"
          rel="stylesheet" type="text/css"/>
    <link href="conference/css/datatable/jquery.dataTables_themeroller.css"
          rel="stylesheet" type="text/css"/>
    <link href="conference/css/datatable/jquery.dataTables.css"
          rel="stylesheet" type="text/css"/>
    <link href="conference/css/datatable/dataTables.tableTools.css"
          rel="stylesheet" type="text/css"/>
    <link href="conference/css/datatable/dataTables.responsive.css"
          rel="stylesheet" type="text/css"/>
    <link href="conference/css/droupdown/chosen.css" rel="stylesheet"
          type="text/css"/>

    <link href="conference/css/datePicker/bootstrap-datetimepicker.min.css" rel="stylesheet"
          type="text/css"/>
    <link href="conference/css/jquery.datetimepicker.css" rel="stylesheet"
          type="text/css"/>
    <link href="conference/css/notify/notify.css" rel="stylesheet" type="text/css">

    <!--============================= Site related custom js =============================-->
    <!--<link href="softswitch/css/smsDoze-custom.css" rel="stylesheet" type="text/css"/>-->
    <!--<link href="softswitch/css/style.css" rel="stylesheet" type="text/css"/>-->

    <link href="conference/css/rcportal_custom.css" rel="stylesheet"
          type="text/css"/>
    <!--  <link href="design/reset.css" rel="stylesheet"
            type="text/css" />
      <link href="design/style.css" rel="stylesheet"
            type="text/css" />-->

</head>
<body id="body">

<noscript>
    Please use HTML5 supported browser.<br> For full functionality of
    this page it is necessary to enable JavaScript.<br> Here are the
    <a href="http://www.enable-javascript.com/" target="_blank">
        instructions how to enable JavaScript in your web browser</a>
</noscript>


<div class="container-fluid">
    <div class="header"></div>


    <div id="id_loading_image" class="centered" style="display: block">
        <img src="conference/img/31.gif">
    </div>
    <div id="message_display">
        <!-- ============================ start Show message alert ========================== -->

        <!-- =============================End Show message alert====================== -->
    </div>
    <div class="container-fluid" id="contentService">
        <div class="row">
            <div id="cmsData">
                <!-- =======================================================================================-->

                <!-- =======================================================================================-->
            </div>
        </div>
    </div>

    <div id="myModal" class="modal fade bs-example-modal-lg" tabindex="-1"
         role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header modal-bg">
                    <div class="col-md-12" id="title_custom" style="text-align:center">
                        <span id="set_title"></span>
                        <a href="#" aria-hidden="true" data-dismiss="modal" class="pull-right"> <img alt="Close"
                                                                                                     src="conference/img/modal_icon-close.png"></a>
                    </div>
                    <div class="col-md-12" id="tab_view"></div>
                </div>

                <div id="modalData" class="modal-bg"></div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer id="footer" class="footer-padding"></footer>

</div>

<!--============================= Framework js =============================-->
<script src="WebFramework/HTML5/jqry/jquery-1.10.2.min.js"
        type="text/javascript"></script>
<script src="WebFramework/HTML5/jqry/modernizr.custom.js"
        type="text/javascript"></script>
<script src="WebFramework/HTML5/lib/utils.js" type="text/javascript"></script>
<script src="WebFramework/HTML5/lib/cmscore.js" type="text/javascript"></script>
<script src="WebFramework/HTML5/lib/validationEngine.js"
        type="text/javascript"></script>
<script src="WebFramework/HTML5/lib/tableEngine.js"
        type="text/javascript"></script>

<!--============================= Site related plugin builtin js =============================-->
<script src="conference/js/bootstrap.min.js" type="text/javascript"></script>
<script src="conference/js/datePicker/bootstrap-datepicker.js"
        type="text/javascript"></script>


<script src="conference/js/popup/jquery_confirm_plugin.js"
        type="text/javascript"></script>
<script src="conference/js/datatable/jquery.dataTables.min.js"
        type="text/javascript"></script>
<script src="conference/js/datatable/dataTables.tableTools.js"
        type="text/javascript"></script>
<!--script src="softswitch/js/datatable/dataTables.responsive.min.js" type="text/javascript"></script-->
<script src="conference/js/droupdown/chosen.jquery.js"
        type="text/javascript"></script>

<script src="conference/js/jquery.canvasjs.min.js" type="text/javascript"></script>

<script src="conference/js/datePicker/bootstrap-datetimepicker.min.js"
        type="text/javascript"></script>
<script src="conference/js/datePicker/jquery.datetimepicker.js"
        type="text/javascript"></script>

<script src="conference/js/highchart/highcharts.js"
        type="text/javascript"></script>
<script src="conference/js/highchart/highcharts-3d.js"
        type="text/javascript"></script>
<script src="conference/js/highchart/exporting.js"
        type="text/javascript"></script>

<script src="conference/js/notify/notify.js"></script>
<script src="conference/js/datatable/jquery.dataTables.rowGrouping.js"></script>


<!--============================= Site related js =============================-->
<script src="conference/js/config.js" type="text/javascript"></script>
<script src="conference/js/common.js" type="text/javascript"></script>
<script src="conference/js/commonDropDown.js" type="text/javascript"></script>
<script src="conference/js/popup/plugin_edited_finction.js" type="text/javascript"></script>
<script src="conference/js/errorHandling.js" type="text/javascript"></script>


<!--============================= Site related custom js =============================-->
<script src="conference/js/home.js" type="text/javascript"></script>
<script src="conference/js/UserLogin.js" type="text/javascript"></script>
<script src="conference/js/ssdt-1.1.js" type="text/javascript"></script>

<!--============================= Site related custom js by Talemul=============================-->

<script src="conference/js/softswitch_userinfo.js" type="text/javascript"></script>
<script src="conference/js/um/dump_on_screen.js" type="text/javascript"></script>


<!--============================= Site related custom js by Monir=============================-->


<script src="conference/js/version_control/version_control.js" type="text/javascript"></script>
<script src="conference/js/version_control/backup.js" type="text/javascript"></script>

<!--============================= Site related custom js by Danial=============================-->

<script src="conference/js/um/utility_manager.js" type="text/javascript"></script>
<script src="conference/js/highchart/utils.js" type="text/javascript"></script>


<!-- FOR Softswitch START -->
<!--<script src="softswitch/js/softswitch/dial_plan_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/dial_plan_contex_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/route_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/server_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/call_cdr_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/im_cdr_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/clint_setting_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/extensions_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/context_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/configuration_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/log_management_info.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/softswitch_gw.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/soft_maintenance.js" type="text/javascript"></script>
<script src="softswitch/js/softswitch/softswitch_dialplan.js" type="text/javascript"></script>-->


<!--============================= Enterprise Conference Platform =============================-->

<script src="conference/js/conference/conference_info.js" type="text/javascript"></script>
<script src="conference/js/conference/admin_info.js" type="text/javascript"></script>
<script src="conference/js/conference/participant_info.js" type="text/javascript"></script>
<script src="conference/js/conference/view_report.js" type="text/javascript"></script>
<script src="conference/js/conference/download_file.js" type="text/javascript"></script>
<script src="conference/js/conference/alert_message_action.js" type="text/javascript"></script>

<script src="conference/js/conference/role_management/firewall_rule.js" type="text/javascript"></script>
<script src="conference/js/conference/role_management/firewall_organization.js" type="text/javascript"></script>
<script src="conference/js/conference/role_management/firewall_user.js" type="text/javascript"></script>
<script src="conference/js/conference/role_management/firewall_user_role_association.js" type="text/javascript"></script>
<script src="conference/js/conference/role_management/firewall_organization_user.js" type="text/javascript"></script>
<script src="conference/js/conference/role_management/firewall_role.js" type="text/javascript"></script>
<script src="conference/js/conference/role_management/role_mngmt_sync_log.js" type="text/javascript"></script>



<!--============================= Validity Generator =============================-->

<script src="conference/js/validity_generator.js" type="text/javascript"></script>

</body>
</html>


