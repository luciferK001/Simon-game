
buttoncolor=["green","red","yellow","blue"];
userchosenpattern=[];
gamepattern=[];
var level=0;

$(".btn").click(function(){
    var randomid=$(this).attr("id");
    var sound= new Audio("sounds/"+randomid+".mp3");
    sound.play();
    $("#"+randomid).fadeOut(100).fadeIn(100);
    userchosenpattern.push(randomid);
    animatepress(randomid,100);
    checkAnswer(userchosenpattern.length-1);
});

function animatepress(rid,n)
{
    $("#"+rid).addClass("pressed");
    setTimeout(function(){
        $('#'+rid).removeClass("pressed");
    },n);
}
$(document).keypress(function(event)
{
    nextSequence();
})



function nextSequence()
{
    var n = Math.random();
    n= Math.floor(n*4);
    var randomchosencolor=buttoncolor[n];
    gamepattern.push(randomchosencolor);
    level++;
    $("#level-title").text("Level "+level);
    animatepress(randomchosencolor,1000);
    var sound= new Audio("sounds/"+randomchosencolor+".mp3");
    sound.play();
}
function checkAnswer(cuurrentLevel)
{
    if(userchosenpattern[cuurrentLevel]==gamepattern[cuurrentLevel])
    {
        if(userchosenpattern.length==gamepattern.length)
        {
            userchosenpattern=[];
            setTimeout(function(){
                nextSequence();
            },100);
           
        }
        console.log("success");
    }
    
    else
    {
        var sound= new Audio("sounds/wrong.mp3");
        sound.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
        console.log("wrong");
    }
}
function startOver()
{
    gamepattern=[];
    userchosenpattern=[];
    level=0;
}
//nextSequence();

