function btn1() {
    $('#btn1').css('background-image', 'url(pic/home2.png)');
    window.location.href = "home.html";
}

function btn2() {
    $('#btn2').css('background-image', 'url(pic/buy2.png)');
    window.location.href = "buy_list.html";
}

function btn3() {
    $('#btn3').css('background-image', 'url(pic/search2.png)');
    window.location.href = "search.html";
}

function btn4() {
    $('#btn4').css('background-image', 'url(pic/gift2.png)');
    get_present();
}

function get_present() {
        swal({
            title: "確認抽獎?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確定",
            cancelButtonText: "取消",
            closeOnConfirm: false
        }, function() {
            window.location.href = "present.html";
        });
}

function btn5() {
    window.location.href = "store2.html";
}

function btn6() {
    window.location.href = "home.html";
}

function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function thxapi() {
    //  alert("thx");
    window.plugins.html5Video.initialize({
        "splashvideo": "http://goo.gl/lssrf4"
    });
    window.plugins.html5Video.play("splashvideo");
}

function thxapiallscreen() {
    //   alert("Thank you for purchasing");
    YoutubeVideoPlayer.openVideo('tzp8V4hfjIM');
}
