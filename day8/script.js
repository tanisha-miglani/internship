// =======================
// Add to Cart
// =======================

let count = 0;

const cartIcon = document.querySelector(".fa-cart-shopping");

const badge = document.createElement("span");
badge.innerHTML = "0";

badge.style.position = "absolute";
badge.style.top = "-8px";
badge.style.right = "-10px";
badge.style.background = "red";
badge.style.color = "white";
badge.style.width = "20px";
badge.style.height = "20px";
badge.style.borderRadius = "50%";
badge.style.display = "flex";
badge.style.justifyContent = "center";
badge.style.alignItems = "center";
badge.style.fontSize = "12px";

cartIcon.parentElement.style.position = "relative";
cartIcon.parentElement.appendChild(badge);

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

count++;

badge.innerHTML = count;

button.innerHTML = "✔ Added";

button.style.background = "green";

setTimeout(() => {

button.innerHTML = "Add To Cart";

button.style.background = "#2563eb";

},1500);

});

});

// =======================
// Search Icon
// =======================

document.querySelector(".fa-magnifying-glass").onclick=function(){

let search=prompt("Search Phone");

if(search!=""){
alert(search+" is available.");
}

}

// =======================
// User Icon
// =======================

document.querySelector(".fa-user").onclick=function(){

alert("Login Page Coming Soon!");

}

// =======================
// Newsletter
// =======================

const subscribe=document.querySelector(".newsletter button");

subscribe.onclick=function(){

let email=document.querySelector(".newsletter input").value;

if(email==""){

alert("Please Enter Email");

}

else{

alert("Thanks For Subscribing!");

document.querySelector(".newsletter input").value="";

}

}

// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault();

});

});

// =======================
// Card Hover Animation
// =======================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseout",()=>{

card.style.transform="translateY(0px)";

});

});
