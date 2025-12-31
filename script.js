var wishesAndAppr=["a bag","my parents","bracelet","my friends","a necklace","the nature","a europe trip","universe","good grades","my sister",];
var images=["bag.png","parents.jpeg","bracelet.png","friends.jpeg","necklace (1).png","nature.jpeg","europe trip.jpeg","universe.jpeg","grades.jpeg","sister.jpeg"];
var currentItem=0;

var hammer=new Hammer (document.body);
hammer.on("swipeleft",()=>{
    next();
});
hammer.on("swiperight",()=>{
    previous();
});
function next(){
    currentItem++;
    if(currentItem>=wishesAndAppr.length)
        currentItem=0
    changeObject();
   
}
function previous(){
    currentItem--;
    if(currentItem<0)
        currentItem=wishesAndAppr.length-1;
   changeObject();
}


function changeObject(){
     document.getElementById("name").innerHTML=wishesAndAppr[currentItem];
    document.getElementById("img").src=images[currentItem];
    if(currentItem%2 == 0){
        document.getElementById("caption").innerHTML="wish";
    }
    else{
        document.getElementById("caption").innerHTML="appreciation";
    }
}

function createSnowflake(){
    var snowflake =document.createElement("div");
    snowflake.innerHTML="❆";
    snowflake.style.left=Math.random()*100+"vw";
    snowflake.classList.add("snowflake");
    var size=Math.random();
    snowflake.style.fontSize=size * 40 +"px";
    snowflake.style.animationDuration=17-size*10+"s";
    document.body.appendChild(snowflake);

    setTimeout(()=>{
        snowflake.remove();
    },10000);
}


setInterval(createSnowflake,200);


function countdown(){
    var targetTime= new Date("January 1, 2026 00:00:00").getTime();
    var currentTime=new Date().getTime();
    var restTime=targetTime-currentTime;
    if(restTime<0){
         document.getElementById("countdown").innerHTML="happy new year!!";
         return;
    }
    var days=Math.floor(restTime/(1000*60*60*24));
    var hours=Math.floor((restTime%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((restTime%(1000*60*60))/(1000*60));
    var seconds=Math.floor((restTime%(1000*60))/1000);
    var text=`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds `;
    document.getElementById("countdown").innerHTML=text;
}

countdown();
setInterval(countdown,1000);