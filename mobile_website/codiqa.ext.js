// Put your custom code here

$(document).ready(function () {

    $('#about').click(function () {
        window.location.href = "#page2";
    });


    function exitAppPopup() {
        navigator.notification.confirm('Exit PhoneGap' + device.cordova + 'Demo?',
function (button) {
    if (button == 2) {
        navigator.app.exitApp();
    }
}
, 'Exit'
, 'No,Yes'
);
        return false;
    }


    document.addEventListener("back", function () {
    
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
