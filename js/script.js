//控制台输出(英文情话)
console.log("%cDon't ever say you're lonely. Just lay your problems on me.","font-family:rst;font-size:2rem;background-color:#f1736a;color:#fff;font-weight:bold;padding:50px;")
// 导航
var isnav=true;
$("#menu div").click(function(){
    if(isnav){
        $("#menu .sub_menu").css({"display":"block"});
        $("#menu div").attr("class","sub");
        isnav=false;
    }else{
        $("#menu .sub_menu").css({"display":"none"});
        $("#menu div").attr("class","");
        isnav=true;
    }
})
$("#homes").click(function(){
    $("#content ul").css({"z-index":"1","opacity":"0"});
    $("#about").css({"z-index":"1","opacity":"0"});
    $("#help").css({"z-index":"1","opacity":"0"});
    $("#home").css({"z-index":"2","opacity":"1"});
})
$("#helps").click(function(){
    $("#content ul").css({"z-index":"1","opacity":"0"});
    $("#about").css({"z-index":"1","opacity":"0"});
    $("#help").css({"z-index":"2","opacity":"1"});
    $("#home").css({"z-index":"1","opacity":"0"});
})
$("#abouts").click(function(){
    $("#content ul").css({"z-index":"1","opacity":"0"});
    $("#about").css({"z-index":"2","opacity":"1"});
    $("#help").css({"z-index":"1","opacity":"0"});
    $("#home").css({"z-index":"1","opacity":"0"});
})
$("#menu li").click(function(){
    $("#content ul").css({"z-index":"1","opacity":"0"});
    $("#content ul").eq($(this).index()).css({"z-index":"2","opacity":"1"});
    $("#about").css({"z-index":"1","opacity":"0"});
    $("#help").css({"z-index":"1","opacity":"0"});
    $("#home").css({"z-index":"1","opacity":"0"});
})
// 主题
var theme=true;
$("#theme").click(function(){
    if(theme){
        $("#theme i").html("&#xe6ee;");
        $("header").css({"background-color":"#1b263a"});
        $("footer").css({"background-color":"#1b263a","color":"#fff"});
        document.getElementById("thememp3").play();
        theme=false;

    }else{
        $("#theme i").html("&#xe6b8;");
        $("header").css({"background-color":"#fff"});
        $("footer").css({"background-color":"#fff","color":"#000"});
        document.getElementById("thememp3").play();
        theme=true;
    }
})
// 静音
var setup=true;
$("#setup").click(function(){
    if(setup){
        $("#mute").css({"display":"block"});
        $("#audio")[0].muted=true;
        $("#thememp3")[0].muted=true;
        setup=false;
    }else{
        $("#audio")[0].muted=false;
        $("#thememp3")[0].muted=false;
        $("#mute").css({"display":"none"});
        setup=true;
    }
    
})
// 格式列表
var format=true;
$("#sele").click(function(){
    if(format){
    $("#sele ul").css({"display":"block"});
    $("#current").attr("class","current");
    format=false;
    }else{
    $("#sele ul").css({"display":"none"});
    $("#current").attr("class","");
    format=true;
    }
})
$("#sele ul li").click(function(){
    $("#current").html("Copy Format : "+$(this).attr("data-format"));
    $("#sele").attr("data-list",$(this).attr("data-list"));
})
// 格式函数
function hexToRgb(hex) {
    return 'rgb(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5))
            + ',' + parseInt('0x' + hex.slice(5, 7)) + ')';
}
function hex(hex){
    return hex.substr(1,hex.length);
}
function successtime(){
    $("#success").animate({"left":"100%"},500);
}
function zeroing(){
    $("#success").css({"left":"-100%"});
}
// 复制代码
var text;
$("#content ul li").click(function(){
    text=$(this).attr("data-color");
    $("#success").css({"background-color":text});
    switch($("#sele").attr("data-list")){
        case("1"):text;
        break;
        case("2"):text=hex(text);
        break;
        default:text=hexToRgb(text);
    }
    $("#success p").html(text);
    $("#success").animate({"left":"0"},500);
    setTimeout("successtime()",1000);
    setTimeout("zeroing()",1550);
    document.getElementById("audio").play();
    $("#text").val(text);
    $("#text").select();
    document.execCommand("copy");
    $("#success").css({"left":"-100%"});
})
var li=document.getElementById("content").getElementsByTagName("li");
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor=li[i].getAttribute("data-color");
}
// 手机页面
function rd(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}
setInterval(function(){
    document.getElementById("phone").style.backgroundColor=rd();
    document.getElementById("phone").style.color=rd();
},2000)