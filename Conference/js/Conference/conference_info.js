/**
 * Created by Al-Amin on 1/4/2016.
 */
var conference_notice;
var conference_name;
var conference_id;
var No_of_participants;

var minDuration=29;
var d = new Date,
    dformat = [
            d.getFullYear(),
            (d.getMonth()+1),
            d.getDate(),
            ].join('-');

if(d.getMinutes()>31)
    str_minute=31;
else if(d.getMinutes()<30)
    str_minute=01;

var d = new Date();
     start_time = [( d.getHours()<10)? str_hour="0"+d.getHours() : str_hour=d.getHours(),
         ( d.getMinutes()<10)? str_min="01" : str_min = str_minute ].join(':');

    console.log("Ready"+start_time);

    month = d.getMonth()+1;
    day = d.getDate();
    hour = d.getHours();
    minute = str_minute+minDuration;
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
        day, ].join('-');

   end_time= [ ( hour <10)? end_hour="0"+hour : end_hour= hour, ( minute <10)? end_min="00" : end_min= minute].join(':');


function check_box_check(){

    if($("#demo_recording").is(":checked"))
    {
        var a= document.getElementById("demo_recording").checked = "yes";
        $('#demo_recording').val(a);
        //alert(a);
    }
    else
    {
       var a= document.getElementById("demo_recording").unchecked = "no";
        $('#demo_recording').val(a);
        //alert(a);
    }
}


function check_box_value_changed(){

    if($("#meet_now").is(":checked"))
    {
        $('#start_date').val(dformat);

        console.log(dformat + " "+ start_time);
        console.log("Start_time: "+start_time);
        //alert(start_time);
        $("#start_time option[value='" + start_time + "']").attr('selected', true);
        $("#start_time").trigger("chosen:updated");
        $('#end_date').val(lastDate);

        console.log(lastDate+" "+end_time);
        console.log("end_time: "+end_time);
       // alert(end_time);
        $("#end_time option[value='" + end_time + "']").attr('selected', true);
        $("#end_time").trigger("chosen:updated");

        alert(document.getElementById("start_time").selectedIndex);
        alert(document.getElementById("end_time").selectedIndex);
        console.log(document.getElementById("start_time").selectedIndex);
        console.log(document.getElementById("end_time").selectedIndex);
    }

    else
    {
        $('#start_date').val(" ");
        $('#start_time').val(" ");
       // alert("I am here!");
        $("#start_time").trigger("chosen:updated");
        $('#end_date').val(" ");
        $('#end_time').val(" ");
        $("#end_time").trigger("chosen:updated");

    }

}


function add_new_conference() {
    showUserMenu('new_conference');

}

function from_backend(){
    var field = document.getElementById("user_id");
    field.value = $.parseJSON( sessionStorage.getItem('cms_auth')).UserID;
    document.getElementById("user_id").textContent=field.value;
    console.log(field.value);
}


function conference_create_edit() {

    form_id = "conference_create_edit";
    var Check_response = connectServerWithForm(cms_url['check_room_number'], form_id);
	
    Check_response = JSON.parse(Check_response);
//	alert("Room Found:"+Check_response.Room_Number);
    if (Check_response.status && Check_response.Room_Number) {

      //  alert("before php Hit js");
        check_box_check();

        var response = connectServerWithForm(cms_url['conference_info'], form_id);
        //alert("after php Hit js");
        console.log("get: "+response +" found");
        response = JSON.parse(response);
        //alert("after php Hit js");

        conference_name=response.Name;
        No_of_participants=response.No_of_Participants;

        conference_id = response.conf_id;

        // alert("conference_id:"+conference_id);

        conference_notice="<br/>Conference Name    : "+response.Name +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            +" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"UserID    : "+ response.UserID
            +"<br/>Long Number     : " + response.Long_Number +"<br/>Web Link    : "+ response.Web_Link
            +"<br/>Code    : "+ response.Code +"<br/>Start Time     : " + response.Start_Time
            +"<br/>End Time    : "+ response.End_Time +"<br/>Conference Duration     : " +response.Conference_Duration.h+" : "+ response.Conference_Duration.i
            +"<br/>Recording     : " + response.Recording +"<br/>Stats   : "+ response.Stats +"<br/>Notification Channel     : " + response.Notification_Channel
            +"<br/>Schedule Conf   : "+ response.Schedule_Conf
            +"<br/><b>Participants :</b> <br/>";

        if (response.status) {

            // alertMessage(this, 'green', '           Conference Conformation', conference_notice );
            showUserMenu('participants_list');
        }

        else
        {
            alertMessage(this, 'red', 'Unsuccessful' , response.message);
        }

    }

    else
    {
        //alert("No Room!");
        alertMessage(this, 'red', 'Sorry!!' , Check_response.message);
    }

}

function cancel_form_create_conference(){

    display_content_custom('1817', '#modalData');
    table_initialize_conference_list();
    report_menu_start_conference_list();
}

function table_initialize_conference_list() {


    $('#add_button').html('<div class="frmFldAcc  col-md-5"></div>' +
        '<div class=" frmFldAcc col-md-2">' +
        '<button type="button" class="btn btn-primary btn-test" style="margin-top: 7%; font-size: 17px; background-position: center center" onclick="add_new_conference(); return false;">' +
        '<b>New </b>' + '</button> </div>' +
        '<div class="frmFldAcc col-md-5"></div>');

    $('#table_title').html('View');
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
            {"title": "Conference Name", "class": "center"},
            {"title": "User", "class": "center"},
            {"title": "Start Time", "class": "center"},
            {"title": "End Time", "class": "center"},
            {"title": "Participants", "class": "center"},
            {"title": "Recording", "class": "center"},
            {"title": "Notification Channel", "class": "center"},
            {"title": "Status", "class": "center"},
            {"title": "Conference Schedule", "class": "center"},
            /*{"title": "Room Number", "class": "center"},
            {"title": "Web Link", "class": "center"},*/
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
        },

       /* "aoColumnDefs": [
            { "bSearchable": false, "bVisible": false, "aTargets": [ 9 ] },
            { "bSearchable": false, "bVisible": false, "aTargets": [ 10 ] }
        ]*/

    });
}

function edit_conference_list(obj, info, room_number, weblink) {

    var data = [];
    var table = document.getElementById('dataTables_conference_list');
    var index = obj.parentNode.parentNode.rowIndex;
    var i = 0;
    for (i = 0; i < 10; i++)
        data[i] = table.rows[index].cells[i].innerHTML;

    showUserMenu('edit_conference');
    document.getElementById("conference_id").textContent=data[0];
    conference_id =data[0];
    console.log(data[0],data[1],data[2],data[3],data[4],data[5],data[6],data[7],data[8],data[9], room_number, weblink );

     $('#action').val("update");
     $('#action_id').val(data[0]);
     var str1=data[1].split(">");
     var str2=str1[1].split("'");
     console.log(str2);
     $('#demo_name').val(str2[1]);
     $('#user_id').val(data[2]);
     var datetime=data[3].split(" ");
     var date=datetime[0].split("-");
     var  hourmin= datetime[1].split(":")
     $('#start_date').val(datetime[0]);

     console.log("start_time:"+hourmin[0]+":"+hourmin[1]);
     $("#start_time option[value='" + hourmin[0]+":"+hourmin[1] + "']").attr('selected', true);
     // $('#start_time').val(hourmin[0]+":"+hourmin[1]);


     var datetime=data[4].split(" ");
     var  hourmin= datetime[1].split(":")
     $('#end_date').val(datetime[0]);

     console.log("end_time:"+hourmin[0]+":"+hourmin[1]);
     $("#end_time option[value='" + hourmin[0]+":"+hourmin[1] + "']").attr('selected', true);

     $('#demo_participants').val(data[5]);
    /*
     $('#demo_recording').val(data[6]);
     if(data[6]=='yes') $('#demo_recording').attr("checked",checked);*/

     var track_array = data[7].split(',');
     for (var i = 0; i < track_array.length; i++) {
        $("#notification_channel option[value='" + track_array[i] + "']").attr('selected', true);
     }
     $('#status').val(data[8]);
     $('#schedule_conf_dropdown').val(data[9]);
     $('#room_number').val(room_number);
     $('#weblink').val(weblink);
     dropdown_chosen_style();


}

function conference_details(obj, conf_id){

    dataInfo = conf_id;

   var response = connectServer(cms_url['conference_details'], dataInfo);
    //alert(response);
    response = JSON.parse(response);
    console.log(response)

    conference_notice="<br/>Conference Name    : "+response.Conf_Name +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        +" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"UserID    : "+ response.USER
        +"<br/>Long Number     : " + response.long_number +"<br/>Web Link    : "+ response.weblink
        +"<br/>Code    : "+ response.CODE +"<br/>Start Time     : " + response.Start_Time
        +"<br/>End Time    : "+ response.End_Time +"<br/>Conference Duration     : " +response.Conference_Duration
        +"<br/>Recording     : " + response.Recording +"<br/>Stats   : "+ response.STATUS +"<br/>Notification Channel     : " + response.Notification_Channel
        +"<br/>Schedule Conf   : "+ response.Schedule_Conf
        +"<br/><b>Participants :</b> "+ response.Participants+"<br/>";

    var dataSet = [[]];
    var participant= [];
    dataSet = connectServer(cms_url['retrieve_participant_info'], dataInfo);
    dataSet = JSON.parse(dataSet);
  //  alert(dataSet.data.length);
    len=0;
    if(dataSet.status){
        for(i=0;i<dataSet.data.length; i++)
        {

            participant[i] = dataSet.data[i][0]+"  ||  "+dataSet.data[i][1]+"  ||  "+dataSet.data[i][2];
            console.log(participant[i]);
            len=i;
        }
        notice=" ";
        for(i=0;i<=len; i++)
        {
            notice = notice+ participant[i]+ "</br> ";
            if (len==0 && notice==" ")
                notice = "";
        }
   //  alert(notice);

    } else {
       // alert("No Data");
    }

    if (response.status) {

        alertMessage(this, 'green', '           Conference ID: &nbsp;'+response.conference_id+ '&nbsp; Details', conference_notice+notice );

    }

}

function delete_conference_list(obj, action_id, room_number, start_date, end_date, Schedule_Conf) {

    confirmMessage(this, 'conference_list', 'Delete Confirmation', 'Do you want to delete ?');
    var arrayInput = new Array(obj, action_id, room_number, start_date, end_date, Schedule_Conf);

    var datetime= start_date.split(" ");
   // alert(datetime[0]+" and "+ datetime[1]);
    var date= datetime[0].split("-");
   // alert(date[0]+" and "+ date[1] + " and "+ date[2]);
    var time= datetime[1].split(":");
   // alert(time[0]+" and "+ time[1] + " and "+ time[2]);

    $('#conference_list').click({id: arrayInput}, delete_confirm_conference_list);

}


function delete_confirm_conference_list(event) {
    var arrayInput = event.data.id;
    var dataInfo = {}
    dataInfo['action'] = 'delete';
    dataInfo['action_id'] = arrayInput[1];
    dataInfo['room_number'] = arrayInput[2];
    dataInfo['start_date'] = arrayInput[3];
    dataInfo['end_date'] = arrayInput[4];
    dataInfo['Schedule_Conf'] = arrayInput[5];

    //console.log(dataInfo);
    var response = connectServer(cms_url['conference_info'], dataInfo);


   // alert("after php get response: "+ response +"  b4json");
    response =JSON.parse(response);

  //  alert("after php"+"//"+response.status);

    if (response.status) {
        alertMessage(this, 'green', 'Successful', response.message);
        showUserMenu('enterprise_conference');
    }
    else {
        alertMessage(this, 'red', 'Sorry!', 'Failed.');
    }

}

