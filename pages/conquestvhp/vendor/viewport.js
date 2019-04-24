(function () {
  var w = window.screen.width;
  var phoneScale = w / 750;

  var ua = navigator.userAgent;
  if (/Android (\d+\.\d+)/.test(ua)){
    var version = parseFloat(RegExp.$1);
    if(version>2.3){
      document.write('<meta name="viewport" content="width=750,user-scalable=no,minimum-scale='+phoneScale+', maximum-scale = '+phoneScale+', viewport-fit=cover">');
    }else{
      document.write('<meta name="viewport" content="width=750,user-scalable=no,minimum-scale='+phoneScale+', maximum-scale = '+phoneScale+',viewport-fit=cover">');
    }
  } else {
    document.write('<meta name="viewport" content="width=750,user-scalable=no,minimum-scale='+phoneScale+', maximum-scale = '+phoneScale+',minimal-ui,viewport-fit=cover">');
  }

})();
