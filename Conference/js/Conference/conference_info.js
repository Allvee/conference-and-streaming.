/**
 * Created by Al-Amin on 1/4/2016.
 */

var minDuration=30;
var d = new Date,
    dformat = [
            d.getFullYear(),
            (d.getMonth()+1),
            d.getDate(),
            ].join('/')+
        ' ' +
        [ d.getHours(),
            d.getMinutes()].join(':');

    month = d.getMonth()+1;
    day = d.getDate();
    hour = d.getHours();
    minute = d.getMinutes()+minDuration;
if(minute >= 60)
{
    minute = minute % 60;
    hour = hour + 1;

    if(hour >= 24)
    {
        hour = hour % 24;
        day = day+1;

        if(day >= 31)
        {
            day = day % 31;
            month = month+1;
        }
    }
}


lastDate = [
        d.getFullYear(),
        (d.getMonth()+1),
        day, ].join('/')

    + ' ' + [ hour,  minute].join(':');

console.log(dformat);


function check_box_value_changed(){
    if($("#schedule_conf").is(":checked"))
        $('#schedule_conf').val('yes');
    else
        $('#schedule_conf').val('no');

   if($("#demo_active").is(":checked"))
       $('#demo_active').val('active');
   else
        $('#demo_active').val('done');

    if($("#demo_recording").is(":checked"))
        $('#demo_recording').val('yes');

    else
        $('#demo_recording').val('no');

    if($("#meet_now").is(":checked"))
    {
        $('#start_time').val(dformat);
        $('#end_time').val(lastDate);
     }

    else
    {
        $('#start_time').val("");
        $('#end_time').val("");
    }


    console.log(lastDate);
    /*
    if($("#SMS").is(":checked"))
    {
        $('#SMS').val('SMS');
        var sms="SMS";
    }

    else
        var sms="";

    if($("#EMAIL").is(":checked"))
    {
        $('#EMAIL').val('EMAIL');
        var email="/ EMAIL";
    }

    else
        var email="";

    if($("#IVR").is(":checked"))
    {
        $('#IVR').val('IVR');
        var ivr="/ IVR";
    }

    else
        var ivr="";

    $('#notification_channel').val(sms+" "+email+" "+ivr);*/

}


function add_new_conference() {
    showUserMenu('new_conference');

}
/*

function Conf_time_picker(id) {
   /!* day = new Date();

    time = day.getTime();*!/
    $('#start_time').timepicker({
        template: false,
        showInputs: false,
        minuteStep: 5
    });

}
*/

function from_backend(){
    var field = document.getElementById("user_id");
    field.value = $.parseJSON( sessionStorage.getItem('cms_auth')).UserID;
    //var user_id = window.sessionStorage.getItem("UserID");
    $('#user_id').val(field.value);
    console.log(field.value);
}

function conference_create_test() {
    form_id = "conference_edit_test";


    alert("before php Hit js");

    var response = connectServerWithForm(cms_url['conference_info'], form_id);


    console.log("get: "+response.Notification_Channel +" found");

    response = JSON.parse(response);
    alert("after php Hit js"+response.Notification_Channel);

    var notice="<br/>Name    : "+response.Name +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"UserID    : "+ response.UserID
    +"<br/>Long Number     : " + response.Long_Number +"<br/>Web Link    : "+ response.Web_Link
    +"<br/>Code    : "+ response.Code +"<br/>Start Time     : " + response.Start_Time
    +"<br/>End Time    : "+ response.End_Time
    +"<br/>Conference Duration     : " +response.Conference_Duration.h+" : "+ response.Conference_Duration.i
    +"<br/>No. of Participants  : "+ response.No_of_Participants +"<br/>Recording     : " + response.Recording
    +"<br/>Stats   : "+ response.Stats +"<br/>Notification Channel     : " + response.Notification_Channel
    +"<br/>Schedule Conf   : "+ response.Schedule_Conf;

    if (response.status) {
        i=0;
        alertMessage(this, 'green', '          Conference Conformation',notice );
    } else {
        alertMessage(this, 'red', 'Unsuccessful', response.message);
    }


}



function table_initialize_conference_list() {

    $('#tbl_view_table').html('<table class="table table-striped table-bordered table-hover responsive" id="dataTables_conference_list" width="100%"><tr><td  align="center"><img src="conference/img/31.gif"></td></tr></table>');

}


function report_menu_start_conference_list() {

    var dataSet = [[]];
    var dataInfo = {};
    dataSet = connectServer(cms_url['conference_list'], dataInfo);
    // alert(dataSet);
    dataSet = JSON.parse(dataSet);
    //alert(dataSet);
    table_data_conference_list(dataSet);

}


function table_data_conference_list(dataSet) {

    $('#dataTables_conference_list').dataTable({

        "data": dataSet,
        "columns": [
            {"title": "ID", "class": "center"},
            {"title": "Conf Name", "class": "center"},
            {"title": "User", "class": "center"},
            {"title": "Start Time", "class": "center"},
            {"title": "End Time", "class": "center"},
            {"title": "Participants", "class": "center"},
            {"title": "Recording", "class": "center"},
            {"title": "Notification Channel", "class": "center"},
            {"title": "Status", "class": "center"},
            {"title": "Edit/Delete", "class": "center"},
        ],
        "order": [[0, "asc"]],
        dom: 'T<"clear">lfrtip',
        tableTools: {
            "sSwfPath": "conference\img\datatable\swf\copy_csv_xls_pdf.swf",
            "sRowSelect": "multi",
            "aButtons": [
                "copy", "csv",
                {
                    "sExtends": "xls",
                    "sFileName": "*.xls"
                }
            ],
            "filter": "applied"
        }
    });
}


function delete_conference_list(obj, action_id) {

    confirmMessage(this, 'conference_list', 'Delete Confirmation', 'Do you want to delete ?');
    var arrayInput = new Array(obj, action_id);
    $('#conference_list').click({id: arrayInput}, delete_confirm_conference_list);

}


function delete_confirm_conference_list(event) {
    var arrayInput = event.data.id;
    var dataInfo = {}
    dataInfo['action'] = 'delete';
    dataInfo['action_id'] = arrayInput[1];

    var response = connectServer(cms_url['conference_info'], dataInfo);
    response =JSON.parse(response);

    if (response.status) {
        showUserMenu('enterprise_conference');

        alertMessage(this, 'green', 'Successful', response.message);
    }else {
        alertMessage(this, 'red', '', 'Failed.');
    }

}

