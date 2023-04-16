var flag =true;
$(document).on("keydown", function()
{
    flag=false;
});
$(document).on("keydown", work);


var arr = [];
var index = 0;



//for random number generate and animate and change level
function work() {
  

  var ran = Math.random() * 4;
  ran += 1;
  
  var fina = button_check(Math.floor(ran));
  
  $("." + fina).animate({ opacity: 0 });
  setTimeout(function () {
   
    $("." + fina).animate({ opacity: "100%" });
  }, 0.0000000001);

  arr.push(Math.floor(ran));

  $("h1").text("Level  " + arr.length);
  
  
}
//button listener
$(".btn").on("click", function()
  {
    $(this).addClass("pressed");
    var s=this;
  setTimeout(function () {
     $(s).removeClass("pressed");
   
  }, 100);




    
     var thisid = this.id;
     var b =new Audio("sounds/"+thisid+".mp3");
    b.play();
    if(flag==false)clicked(thisid);
    else
    { 
        $("body").addClass("body-temp");
          
        setTimeout(function () {
           $("body").removeClass("body-temp");
         
        }, 100);
        var b =new Audio("sounds/wrong.mp3");
        b.play();
    }

  });
//function for button listener
function clicked(ids) {


  if (index < arr.length) {
    var ch = button_check(arr[index]);
    
       
         if (ids !== ch) {
          $("h1").text("Game Over,Press Any Key to Restart the Game");
          flag=true;
          arr=[];

          $("body").addClass("body-temp");
          
        setTimeout(function () {
           $("body").removeClass("body-temp");
         
        }, 100);

        var b =new Audio("sounds/wrong.mp3");
        b.play();

        
      
         


         }
         else
         { 
         index++;
         
         if(index==arr.length)
         { 
            index=0;
            flag=false;
            work();
         }
         }

        }

        else{
            index=0;
            flag=false;
            work();
        }
}


function button_check(check) {
  if (check === 1) return "green";
  else if (check === 2) return "red";
  else if (check === 3) return "yellow";
  else return "blue";
}
