var wishesAndAppr=["a bag","my parents","bracelet"];
var images=["bag.png","parents.jpeg","bracelet.png"];
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
    document.getElementById("name").innerHTML=wishesAndAppr[currentItem];
    document.getElementById("img").src=images[currentItem];
}
function previous(){
    currentItem--;
    document.getElementById("name").innerHTML=wishesAndAppr[currentItem];
    document.getElementById("img").src=images[currentItem];
}