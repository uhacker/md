//tab

$(document).ready(function (e) {
    $(".tsfw-xx_0 li").mouseover(function () {
        $(this).addClass("alp-nml").siblings().removeClass("alp-nml");
        $('#tsfw-r0' + ($(this).index() + 1)).show().siblings().hide();
    });
    $(".tsfw-xx_1 li").mouseover(function () {
        $(this).addClass("alp-nml").siblings().removeClass("alp-nml");
        $('#tsfw-r1' + ($(this).index() + 1)).show().siblings().hide();
    });
    $(".tsfw-xx_2 li").mouseover(function () {
        $(this).addClass("alp-nml").siblings().removeClass("alp-nml");
        $('#tsfw-r2' + ($(this).index() + 1)).show().siblings().hide();
    });
    $(".tsfw-xx_3 li").mouseover(function () {
        $(this).addClass("alp-nml").siblings().removeClass("alp-nml");
        $('#tsfw-r3' + ($(this).index() + 1)).show().siblings().hide();
    });
});

//meun

$(document).ready(function () {
    $("#meu01").mouseover(function () {
        $(this).css("color", "#e20000").css("font-weight", "bolder")
    });
    $("#meu01").mouseout(function () {
        $(this).css("color", "#ffffff").css("font-weight", "normal")
    });
    $("#menlsit01").mouseover(function () {
        $("#meu01").css("color", "#e20000").css("font-weight", "bolder")
    });
    $("#menlsit01").mouseout(function () {
        $("#meu01").css("color", "#ffffff").css("font-weight", "normal")
    });
})

$(document).ready(function () {
    $("#meu02").mouseover(function () {
        $(this).css("color", "#e20000").css("font-weight", "bolder")
    });
    $("#meu02").mouseout(function () {
        $(this).css("color", "#ffffff").css("font-weight", "normal")
    });
    $("#menlsit02").mouseover(function () {
        $("#meu02").css("color", "#e20000").css("font-weight", "bolder")
    });
    $("#menlsit02").mouseout(function () {
        $("#meu02").css("color", "#ffffff").css("font-weight", "normal")
    });
})

$(document).ready(function () {
    $("#meu03").mouseover(function () {
        $(this).css("color", "#e20000").css("font-weight", "bolder")
    });
    $("#meu03").mouseout(function () {
        $(this).css("color", "#ffffff").css("font-weight", "normal")
    });
    $("#menlsit03").mouseover(function () {
        $("#meu03").css("color", "#e20000").css("font-weight", "bolder")
    });
    $("#menlsit03").mouseout(function () {
        $("#meu03").css("color", "#ffffff").css("font-weight", "normal")
    });
})



