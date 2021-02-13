var reasons=["Mom",
             "Dad",
             "Sister",
             "Me"];
var images= ["AvatarMaker (2).png",
             "AvatarMaker (3).png",
             "AvatarMaker (4).png",
             "AvatarMaker (5).png"];
var i=0;
funcion nextslide(){
  document.getElementById("img1").src=images[i];
  document.getElementById("reasonstext").interHTML=reasons[i];
  i++;
}
