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
    changeObject();
   
}
function previous(){
    currentItem--;
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
    snowflake.style.fontSize=size * 25 +"px";
    snowflake.style.animationDuration=17-size*10+"s";
    document.body.appendChild(snowflake);

    setTimeout(()=>{
        snowflake.remove();
    },10000);
}


setInterval(createSnowflake,200);
