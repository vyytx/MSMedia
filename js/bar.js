var bars = {
    index: '主畫面',
    video: '影片',
    music: '音樂',
    image: '圖片',
    sides: '簡報',
    setts: '設定'
}

for(var i = 0; i < Object.keys(bars).length; i++){
    $("#side").append("<div class=\"bar\"><a href=\"" + Object.keys(bars)[i] + ".html\">" + Object.values(bars)[i]　+　"</a></div>");
}

$("#nav > i").click(function(){
    $("#side").css("width", "60%");
    $("black").fadeIn(500);
});

$("black").click(function(){
    $("#side").css("width", "0%");
    $("black").fadeOut(500);
});