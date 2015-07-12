var srcUrl = "http://sites.google.com/site/omdtervuren/";
var images = [
    "http://sites.google.com/site/omdtervuren/headerPic3",
    "http://sites.google.com/site/omdtervuren/headerPic1",
    "http://sites.google.com/site/omdtervuren/headerPic2",
    "http://sites.google.com/site/omdtervuren/headerPic4",
    "http://sites.google.com/site/omdtervuren/headerPic5"
  ];

var originalImages = []; 
var hoverImages = []; 

function PreloadImages() {    
 /* var headerPicsDiv = document.getElementById('headerPics');  
  var images = headerPicsDiv.getElementsByTagName('img'); 
  */
  for(var i=0; i < images.length; i++) {
      var hoverImg = document.createElement("img");
      hoverImg.src = images[i] + '_hover.png';
      hoverImages.push(hoverImg);
      
      var img = document.createElement("img");
      img.src = images[i] + '.png';
      originalImages.push(img);
    /*
    var img = new Image();    
    img.src = srcUrl + images[i].id + "_hover" + ".png";
    alert(img.src + ' preloaded');    */
  }
}

function LightUpImage(srcElement)
{ 
  /*
  //alert(srcElement.id);
  //alert(srcElement.style.display);
  document.getElementById(srcElement.id).style.display = "none";
  document.getElementById('_' + srcElement.id).style.display = "";     
  //alert(srcElement.style.display);
  */
  //alert(srcElement.id.substring(9));
  var i = parseInt(srcElement.id.substring(9));
  //srcElement.src=srcUrl + srcElement.id + "_hover" + ".png";
  srcElement.src= hoverImages[i].src;
}
function LightDownImage(srcElement)
{    
  /*document.getElementById(srcElement.id).style.display = "none";
  document.getElementById(srcElement.id.substring(1)).style.display = "";*/
  var i = parseInt(srcElement.id.substring(9));
  srcElement.src=originalImages[i].src;
}