//handling buttons
var i;
var len=document.querySelectorAll(".drum").length;
for(i=0;i<len;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
var buttonInnerHTML=this.innerHTML;
handleClick(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}
//handling keys
document.addEventListener("keypress",function(event)
{
  handleClick(event.key);
  buttonAnimation(event.key);
});

//Function to add audio
function handleClick(buttonInnerHTML)
{
  switch(buttonInnerHTML)
  {
     case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
       var audio=new Audio("sounds/tom-2.mp3");
       audio.play();
       break;
       case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "d":
         var audio=new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
         case "j":
          var audio=new Audio("sounds/snare.mp3");
          audio.play();
          break;
          case "k":
           var audio=new Audio("sounds/crash.mp3");
           audio.play();
           break;
           case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            default:
            console.log(buttonInnerHTML);
}
}


//function to add animnation
 function buttonAnimation(currentKey)
 {
   var activeButton=document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },100);
 }
