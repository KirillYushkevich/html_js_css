function openLightbox(img) {
   document.getElementById("light-img").src = img.src;
   document.getElementById("lightbox").style.display = "block";
}
function closeLightbox() {
   document.getElementById("lightbox").style.display = "none";
}
function saveImage(img) { 
   localStorage.setItem( "img" ,img.src);
   var list = document.getElementsByTagName("img");
   for(var i=0;i<list.length;i++)
   {
      localStorage.setItem(i,list[i].src)
   }
   localStorage.setItem("list",list[0].src);
   document.location.href = "../Index.html";
}
function getImage() {
      if(localStorage.getItem("img")!=null){   
      document.getElementById("image").src=localStorage.getItem("img");
   }
}
function getImgCollection(){
   var list =[]; 
   for(var i=0;i<100;i++)
   {
      list.push(localStorage.getItem(i));
   }
   document.getElementById("image").src=list[4];
   alert(list[0]);
}
var index=1;
function sleep(ms) {
   ms += new Date().getTime();
   while (new Date() < ms){}
   } 
function next(){
   if(index+1<10){
      index++;
      document.getElementById("behind-img").src=localStorage.getItem(index); 
      document.getElementById("light-img").style.display = "none";
      document.getElementById("behind-img").style.display = "inline-block";  
      setTimeout(continueFade,300);
   }
function continueFade()
{
   document.getElementById("light-img").src = localStorage.getItem(index);
   document.getElementById("behind-img").style.display = "none";
   document.getElementById("light-img").style.display = "inline-block";
}  
}
function prev(){
   if(index-1>=0)
   {
      index--;
      document.getElementById("behind-img").src=localStorage.getItem(index); 
      document.getElementById("light-img").style.display = "none";
      document.getElementById("behind-img").style.display = "inline-block";  
      setTimeout(continueFade,300);
   }
   
}