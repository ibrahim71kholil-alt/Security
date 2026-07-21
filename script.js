// ===== Security Website =====

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML = "☀️";

    }else{

        themeBtn.innerHTML = "🌙";

    }

});


const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", ()=>{

    alert("Search System Coming Soon!");

});


console.log("Security Website Loaded Successfully");
