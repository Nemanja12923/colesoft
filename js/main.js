

    /* NAVIGACIJA */

    var nizHref = ["index.html", "#usluge", "#futer", "o-autoru.html", "docs/dokumentacija.pdf"];
    var nizTekst = ["POČETNA", "USLUGE", "KONTAKT", "O AUTORU", "DOKUMENTACIJA"];

    var navigacija = document.getElementById("navigacija");

    var ispis = "";
    ispis += '<button class="menu-toggle" aria-label="Toggle navigat, ion">&#9776;</button>';
    ispis += "<ul>";

    for (var i = 0; i < nizHref.length; i++) {
        ispis += '<li><a class="meni" href="' + nizHref[i] + '">' + nizTekst[i] + "</a></li>";
    }

    ispis += "</ul>";

    navigacija.innerHTML = ispis;

    var toggleButton = navigacija.querySelector(".menu-toggle");
    var ul = navigacija.querySelector("ul");

    toggleButton.addEventListener("click", function () {
        ul.classList.toggle("active");
    });


/* SLIDER */


var nizSlikeSrc = [
    "img/pozadina.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg"
];

var nizSlikeAlt = [
    "Pozadina",
    "IT slika 3",
    "IT slika 4"
];

setInterval(function(){

    var nasumicniIndeks = Math.floor(Math.random() * nizSlikeSrc.length);

    var src = nizSlikeSrc[nasumicniIndeks];
    var alt = nizSlikeAlt[nasumicniIndeks];

    var imgTag = document.getElementById("slikaSlider");

    imgTag.src = src;
    imgTag.alt = alt;

}, 4000);



//procitaj vise


var dugmeTekst = document.getElementById("toggleTekst");
var tekst = document.getElementById("viseTeksta");

if(dugmeTekst){

    dugmeTekst.addEventListener("click", function(){

        if(tekst.style.display === "none"){
            tekst.style.display = "block";
            dugmeTekst.innerHTML = "Pročitaj manje";
        }
        else{
            tekst.style.display = "none";
            dugmeTekst.innerHTML = "Pročitaj više";
        }

    });

}


var dugmeTekst1 = document.getElementById("toggleTekst1");
var tekst1 = document.getElementById("viseTeksta1");

if(dugmeTekst1){

    dugmeTekst1.addEventListener("click", function(){

        if(tekst1.style.display === "none"){
            tekst1.style.display = "block";
            dugmeTekst1.innerHTML = "Pročitaj manje";
        }
        else{
            tekst1.style.display = "none";
            dugmeTekst1.innerHTML = "Pročitaj više";
        }

    });

}


var dugmeTekst2 = document.getElementById("toggleTekst2");
var tekst2 = document.getElementById("viseTeksta2");

if(dugmeTekst2){

    dugmeTekst2.addEventListener("click", function(){

        if(tekst2.style.display === "none"){
            tekst2.style.display = "block";
            dugmeTekst2.innerHTML = "Pročitaj manje";
        }
        else{
            tekst2.style.display = "none";
            dugmeTekst2.innerHTML = "Pročitaj više";
        }

    });

}


// USLUGE


var uslugeBlokovi = document.querySelectorAll(".usluga");

uslugeBlokovi.forEach(function(usluga){

    usluga.addEventListener("mouseover", function(){

        var tekst = usluga.querySelector("p");

        tekst.style.display = "block";
        usluga.style.paddingBottom = "40px";

    });

    usluga.addEventListener("mouseout", function(){

        var tekst = usluga.querySelector("p");

        tekst.style.display = "none";
        usluga.style.paddingBottom = "30px";

    });

});









// BROJAC

const counters = document.querySelectorAll('.counter');

const startCounting = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;

        const updateCounter = () => {
            const current = +counter.innerText;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

let started = false;

window.addEventListener('scroll', () => {
    const section = document.getElementById('brojac');
    const sectionTop = section.offsetTop;
    const screenPosition = window.scrollY + window.innerHeight;

    if (screenPosition > sectionTop && !started) {
        startCounting();
        started = true;
    }
});


// GALERIJA


var nizPutanje = [
  "img/laptop.jpg",
  "img/programiranje.jpg",
  "img/web.jpg",
  "img/kompjuteri.webp",
  "img/kamere.jpg",
  "img/kablovi.jpg",
  "img/mleko.jpg",
  "img/servis-racunara.jpg"
];

var nizAlt = [
  "Laptop",
  "Programiranje",
  "Web razvoj",
  "Kompjuteri",
  "Kamere",
  "Kablovi",
  "Mlekarstvo softver",
  "Servis računara"
];

var sadrzajIspis = "";

for (var i = 0; i < nizPutanje.length; i++) {
  sadrzajIspis +=
    '<div class="galerija-slika">' +
      '<img src="' + nizPutanje[i] + '" alt="' + nizAlt[i] + '">' +
    '</div>';
}

document.getElementById("galerija-grid").innerHTML = sadrzajIspis;







/* FORM */

function proveraForme(e){
  e.preventDefault();

  var imePrezime = document.querySelector("#tbImePrezime");
  var email = document.querySelector("#tbEmail");
  var telefon = document.querySelector("#tbTelefon");
  var poruka = document.querySelector("#taPoruka");
  var rezultat = document.querySelector("#rezultat");

  var brojGresaka = 0;

  var reImePrezime = /^[A-ZŠĐČĆŽ][a-zšđčćž]{1,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{1,})+$/;

  if(!reImePrezime.test(imePrezime.value.trim())){
    imePrezime.nextElementSibling.classList.add("prikaz");
    brojGresaka++;
  } else {
    imePrezime.nextElementSibling.classList.remove("prikaz");
  }

  var reEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if(!reEmail.test(email.value.trim())){
    email.nextElementSibling.classList.add("prikaz");
    brojGresaka++;
  } else {
    email.nextElementSibling.classList.remove("prikaz");
  }

  var reTelefon = /^(\+3816\d{7,8}|06\d{7,8})$/;

  if(!reTelefon.test(telefon.value.trim().replace(/\s+/g, ""))){
    telefon.nextElementSibling.classList.add("prikaz");
    brojGresaka++;
  } else {
    telefon.nextElementSibling.classList.remove("prikaz");
  }

  if(poruka.value.trim().length < 10){
    poruka.nextElementSibling.classList.add("prikaz");
    brojGresaka++;
  } else {
    poruka.nextElementSibling.classList.remove("prikaz");
  }

  if(brojGresaka === 0){
    rezultat.innerHTML = "Poruka je uspešno poslata!";
    rezultat.style.color = "rgb(252, 168, 44)";
    document.querySelector("#kontaktForma").reset();
  } else {
    rezultat.innerHTML = "Popunite ispravno označena polja.";
    rezultat.style.color = "#ffb3b3";
  }
}

var pol = document.getElementsByName("rbPol");
var vrednostPol = "";

for(var i = 0; i < pol.length; i++){
  if(pol[i].checked){
    vrednostPol = pol[i].value;
    break;
  }
}

let brojGresaka=0;
if(vrednostPol === ""){
  var greskaPol = document.querySelector(".form-grupa .radio-red").nextElementSibling;
  greskaPol.classList.add("prikaz");
  brojGresaka++;
} else {
  var greskaPol2 = document.querySelector(".form-grupa .radio-red").nextElementSibling;
  greskaPol2.classList.remove("prikaz");
}

var pol = document.getElementsByName("rbPol");
var vrednostPol = "";

for(var i = 0; i < pol.length; i++){
  if(pol[i].checked){
    vrednostPol = pol[i].value;
    break;
  }
}

if(vrednostPol === ""){
  var greskaPol = document.querySelector(".form-grupa .radio-red").nextElementSibling;
  greskaPol.classList.add("prikaz");
  brojGresaka++;
} else {
  var greskaPol2 = document.querySelector(".form-grupa .radio-red").nextElementSibling;
  greskaPol2.classList.remove("prikaz");
}

document.getElementById("kontaktForma").addEventListener("submit", function(e){
  e.preventDefault();
  provera();
});
var forma = document.querySelector("#kontaktForma");
if(forma){
  forma.addEventListener("submit", proveraForme);
}