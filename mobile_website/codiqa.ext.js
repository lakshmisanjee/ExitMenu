// Put your custom code here

$(document).ready(function () {

    $('#about').click(function () {
        window.location.href = "#page2";
    });
    $('#accele').click(function () {
        window.location.href = "#page2";
    });
    $('#camera').click(function () {
        window.location.href = "#page2";
    });
    $('#geolocation').click(function () {
        window.location.href = "#page2";
    });
    $('#device').click(function () {
        window.location.href = "#page2";
    });
    $('#event').click(function () {
        window.location.href = "#page2";
    });
    $('#file').click(function () {
        window.location.href = "#page2";
    });
    $('#media').click(function () {
        window.location.href = "#page2";
    });
    $('#contacts').click(function () {
        window.location.href = "#page2";
    });


    function exitAppPopup() {
        navigator.notification.confirm('Exit PhoneGap' + device.cordova + 'Demo?'
        ,function (button) {
    if (button == 2) {
        navigator.app.exitApp();
    }
}
, 'Exit'
, 'No,Yes'
);
        return false;
    }


    document.addEventListener("backbutton", function () {
    
        if ($('.ui-page-active').attr('id') == 'page1') {
            alert(back);
            exitAppPopup();
        }
        else {
            history.back();
        }
    }, false);




    $('#button2').click(function () {
        history.back();
    });
  

});
