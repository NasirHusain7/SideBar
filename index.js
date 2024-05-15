const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    document.querySelector(".nav").style.width = "10%";
    document.querySelector(".nav").style.boxShadow = "none";
    document.querySelector(".main-heading").style.display = "none";
    document.querySelector(".options").style.display = "block";
});

const btn2 = document.querySelector(".fa-xmark");
btn2.addEventListener("click", function(){
    document.querySelector(".nav").style.width = "100%";
    // document.querySelector(".nav").style.boxShadow = "bl";
    document.querySelector(".main-heading").style.display = "block";
    document.querySelector(".options").style.display = "none";
});