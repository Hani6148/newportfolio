var images = ["./images/profile.jpg","./images/profile2.jpg"]
var index = 0
pos=0
var position =  $(".textdis").offset()
vh=$(window).height()
vw=$(window).width()
push=Math.round(vw*81.8/100+6)
push1=push+"px"
push2=push*2+"px"
push3=push*3+"px"
push4=push*4+"px"
console.log("push2",push2)
console.log("push",push)
console.log("vh=",vh)

$(".snap").scroll(function(){
    
    var scrollPos = $(".snap").scrollTop();
    console.log(scrollPos);
    if(scrollPos==0){
        $(".menu").css("background-color","#4C516D")
        $("#camera").css("background-color","rgb(70, 152, 200)")
    }
    else if (scrollPos>=vh-10&&scrollPos<=vh+10){
        $(".menu").css("background-color","#4C516D")
        $("#pencil").css("background-color","rgb(70, 152, 200)")
    }
    else if (scrollPos>=vh*2-10&&scrollPos<=vh*2+10){
        $(".menu").css("background-color","#4C516D")
        $("#rocket").css("background-color","rgb(70, 152, 200)")
    }
});

    if(position.top>=133.40000915527344)
    {
        $(".up").css("visibility","hidden")
    }
$(".next").on("click",function (){
    if (index==images.length-1){
        index=0
    }
    else {
        index++
    }

$(".picture").css('background-image','url("'+images[index]+'")')

} 
    
)
$(".previous").on("click",function (){
    if (index==0){
        index=images.length-1
    }
    else {
        index--
    }

$(".picture").css('background-image','url("'+images[index]+'")')

} 
    
)


$(".down").on("click",function (){

    pos-=5
    $(".textdis").css('position','relative')
    $(".textdis").css('top',pos)
    var position =  $(".textdis").offset()
    console.log(position)
})

$(".up").on("click",function (){

    pos+=5
    $(".textdis").css('position','relative')
    $(".textdis").css('top',pos)
    var position =  $(".textdis").offset()
    console.log(position)
    if(position.top>133.40000915527344){
        $(".up").css("visibility","hidden")
            
    }
    if(position.top>=-751.6000366210938){
        $(".down").css("visibility","visible")
        
    }

})


$(".up").on("mousedown",function (){
    intervalId = setInterval(function () {
        var position =  $(".textdis").offset()
        if(position.top>133.40000915527344){
            $(".up").css("visibility","hidden")
            clearInterval(intervalId);
        }
        if(position.top>=-751.6000366210938){
            $(".down").css("visibility","visible")
            
        }
        pos+=10
    $(".textdis").css('position','relative')
    $(".textdis").css('top',pos)
    }, 30);
    

}).mouseup(function() {
    clearInterval(intervalId);
  });

  $(".down").on("mousedown",function (){
    intervalId = setInterval(function () {
        var position =  $(".textdis").offset()
        if(position.top<133.40000915527344){
            $(".up").css("visibility","visible")
            
        }
        if(position.top<=-1200.6000366210938){
            $(".down").css("visibility","hidden")
            clearInterval(intervalId);
        }
        
        pos-=10
    $(".textdis").css('position','relative')
    $(".textdis").css('top',pos)
    }, 30);
    

}).mouseup(function() {
    clearInterval(intervalId);
  });




$(".comp").on("click",function (){
    $(".skilltype").css("background-color","#d8ecfc")
    $(".skilltype").css("color","black")


    $(".comp").css("background-color","rgb(70, 152, 200)");
    $(".comp").css("color","white");
   
    $(".skillwrap").css('position','relative')
    $(".skillwrap").css('left',"-755px")

})
$(".code").on("click",function (){
    $(".skilltype").css("background-color","#d8ecfc")
    $(".skilltype").css("color","black")
    $(".code").css("background-color","rgb(70, 152, 200)")
    $(".code").css("color","white");

    $(".skillwrap").css('position','relative')
    $(".skillwrap").css('left',"0px")

})

$(".other").on("click",function (){
    $(".skilltype").css("background-color","#d8ecfc")
    $(".skilltype").css("color","black")

    $(".other").css("background-color","rgb(70, 152, 200)")
    $(".other").css("color","white");

    $(".skillwrap").css('position','relative')
    $(".skillwrap").css('left',"-1510px")

})

$(".technical").on("click",function (){

    
    
    $(".cvscroll").css("top","-"+vh+"px")
    

}

   
   

)
$(".gobackcv").on("click",function (){

    
    
    $(".cvscroll").css("top","0px")
    

}

   
   

)



$(".thumb1").on("click",function (){
  
    $(".projectwrap").css("right","0px")
    $(".thumb").css("opacity","0.5")
    
    $(".thumb1").css("opacity","1")
    $(".thumb").css("border-style","none")
    $(".thumb1").css("border-style","ridge")
    $(".nextthumb").css("opacity","1")  
    $(".prevthumb").css("opacity","0.3")
    $(".nextthumb").css("cursor","pointer") 
    $(".prevthumb").css("cursor","initial") 
    

})
$(".thumb2").on("click",function (){
  
    $(".projectwrap").css("right",push1)
    $(".thumb").css("opacity","0.5")
    $(".thumb2").css("opacity","1")
    $(".thumb").css("border-style","none")
    $(".thumb2").css("border-style","ridge")
    $(".nextthumb").css("opacity","1") 
    $(".prevthumb").css("opacity","1") 
    $(".nextthumb").css("cursor","pointer") 
    $(".prevthumb").css("cursor","pointer") 
    $(".prevthumb").css("opacity","1")
    

})
$(".thumb3").on("click",function (){
  
    $(".projectwrap").css("right",push2)
    $(".thumb").css("opacity","0.5")
    $(".thumb3").css("opacity","1")
    $(".thumb").css("border-style","none")
    $(".thumb3").css("border-style","ridge")
    $(".nextthumb").css("opacity","1")  
    $(".prevthumb").css("opacity","1") 
    $(".nextthumb").css("cursor","pointer") 
    $(".prevthumb").css("cursor","pointer") 
    

})
$(".thumb4").on("click",function (){
  
    $(".projectwrap").css("right",push3)
    $(".thumb").css("opacity","0.5")
    $(".thumb4").css("opacity","1")
    $(".thumb").css("border-style","none")
    $(".thumb4").css("border-style","ridge")
    $(".nextthumb").css("opacity","1")  
    $(".prevthumb").css("opacity","1") 
    $(".nextthumb").css("cursor","pointer") 
    $(".prevthumb").css("cursor","pointer") 

    

})
$(".thumb5").on("click",function (){
  
    $(".projectwrap").css("right",push4)
    
    $(".thumb").css("opacity","0.5")
    $(".thumb5").css("opacity","1")
    $(".thumb").css("border-style","none")
    $(".thumb5").css("border-style","ridge")
    $(".nextthumb").css("opacity","0.3")  
    $(".prevthumb").css("opacity","1") 
    $(".nextthumb").css("cursor","initial") 
    $(".prevthumb").css("display","pointer") 
    

})

$(".nextthumb").on("click",function (){
  
   if($(".projectwrap").css("right")=="0px")
    {
        $(".projectwrap").css("right",push1)
        
        $(".thumb").css("opacity","0.5")
        $(".thumb2").css("opacity","1")
        $(".thumb").css("border-style","none")
        $(".thumb2").css("border-style","ridge")
        $(".prevthumb").css("opacity","1") 
        $(".prevthumb").css("cursor","pointer") 

    }
    else if ($(".projectwrap").css("right")==push1)
    {   
        console.log($(".projectwrap").css("right"))
        $(".projectwrap").css("right",push2)
    $(".thumb").css("opacity","0.5")
    $(".thumb3").css("opacity","1")
    $(".thumb").css("border-style","none")
    $(".thumb3").css("border-style","ridge")
        
    }
    else if ($(".projectwrap").css("right")==push2)
    {
        $(".projectwrap").css("right",push3)
    $(".thumb").css("opacity","0.5")
    $(".thumb4").css("opacity","1")
    $(".thumb").css("border-style","none")
    $(".thumb4").css("border-style","ridge")
        
    }
    else if ($(".projectwrap").css("right")==push3)
    {
        $(".projectwrap").css("right",push4)
    $(".thumb").css("opacity","0.5")
    $(".thumb5").css("opacity","1")
    $(".thumb").css("border-style","none")
    $(".thumb5").css("border-style","ridge")
    $(".nextthumb").css("opacity","0.3")  
    $(".nextthumb").css("cursor","initial") 
    
    }
   

})

$(".prevthumb").on("click",function (){
  
    if($(".projectwrap").css("right")==push4)
     {
         $(".projectwrap").css("right",push3)
         $(".thumb").css("opacity","0.5")
         $(".thumb4").css("opacity","1")
         $(".thumb").css("border-style","none")
         $(".thumb4").css("border-style","ridge")
         $(".nextthumb").css("opacity","1") 
         $(".nextthumb").css("cursor","pointer") 

     }
     else if ($(".projectwrap").css("right")==push3)
     {
         $(".projectwrap").css("right",push2)
     $(".thumb").css("opacity","0.5")
     $(".thumb3").css("opacity","1")
     $(".thumb").css("border-style","none")
     $(".thumb3").css("border-style","ridge")
         
     }
     else if ($(".projectwrap").css("right")==push2)
     {
         $(".projectwrap").css("right",push1)
     $(".thumb").css("opacity","0.5")
     $(".thumb2").css("opacity","1")
     $(".thumb").css("border-style","none")
     $(".thumb2").css("border-style","ridge")
         
     }
     else if ($(".projectwrap").css("right")==push1)
     {
         $(".projectwrap").css("right","0px")
     $(".thumb").css("opacity","0.5")
     $(".thumb1").css("opacity","1")
     $(".thumb").css("border-style","none")
     $(".thumb1").css("border-style","ridge")
     $(".prevthumb").css("opacity","0.3")  
     $(".prevthumb").css("cursor","initial") 
     }
    
 
 })

$(".proidcont").on("click",function (){
    if( $(this).children(".prodisc").css("display")=="none"){
    $(".proidcont").css("display","none")
    $(this).css("display","block")
    $(this).children(".prodisc").css("display","block")
    $(window).scrollTop(1548);
    }
    else {
    $(this).children(".prodisc").css("display","none")
    $(".proidcont").css("display","block")
    $(window).scrollTop(1570);
}
})

$(".more").on("click",function(){
    event.preventDefault()
    if ($(this).attr("id")=="srsly"){
    $(".overlay").css("visibility","visible")
    $(".srsly").css("visibility","visible")
    $(".srsly").css("opacity","1")}
    else if ($(this).attr("id")=="philit") {
        $(".overlay").css("visibility","visible")
        $(".philit").css("visibility","visible")
        $(".philit").css("opacity","1")
    }
    else if ($(this).attr("id")=="bookstore") {
        $(".overlay").css("visibility","visible")
        $(".bookstore").css("visibility","visible")
        $(".bookstore").css("opacity","1")
    }
    else if ($(this).attr("id")=="trivia") {
        $(".overlay").css("visibility","visible")
        $(".trivia").css("visibility","visible")
        $(".trivia").css("opacity","1")
    }
    else if ($(this).attr("id")=="eventbook") {
        $(".overlay").css("visibility","visible")
        $(".eventbook").css("visibility","visible")
        $(".eventbook").css("opacity","1")
    }
    
})
$(".close").on("click",function(){
    event.preventDefault()
    $(".overlay").css("visibility","hidden")
    $(".learnmore").css("visibility","hidden")
    $(".learnmore").css("opacity","0")
})