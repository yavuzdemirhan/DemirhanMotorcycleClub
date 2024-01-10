const searchForm = document.querySelector(".navbar");

const searchBtn = document.querySelector("#responsive-buton");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active");
});

function myFunction() {
    alert("BİLGİLERİNİZ BAŞARI İLE GÖNDERİLDİ");
  }