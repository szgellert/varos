
letezoMezo = function(vizszintes, fuggoleges) {
  toltsdBeAMezot(vizszintes, fuggoleges)
}

toltsdBeAMezot = function(vizszintes, fuggoleges) {
  // A fájlnév egyszerűen a koordinátákból képezzük.
  fajlNev = vizszintes + 'x' + fuggoleges;
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    // eval az egy nagyon veszélyes dolog, ezért nem szabad általában
    // használni, mi viszont egy pár különleges dolgot fogunk itt csinálni
    // majd.

    var mezo = function(opciok) { mezoKeszites(vizszintes, fuggoleges, opciok); }
    try {
      eval(xhr.responseText);
    } catch (hiba) {
      alert("A " + vizszintes + "x" + fuggoleges + " mező fájlban hibát találtam!")
    }
  }
  xhr.open("GET", "https://raw.github.com/csorvas/varos/master/mezok/" + fajlnev);
  xhr.send();
}

alapKep = 'haz.png';

mezoKeszites = function(vizszintes, fuggoleges, mezoOpciok) {
  var mezo = document.createElement("div").classList.add('mezo');
  mezo.style.backgroundImage = "https://raw.github.com/csorvas/varos/master/kepek/" + mezoOpciok.kep || alapKep;
  mezo.style.left = (vizszintes * 64) + "px"
  mezo.style.top = (fuggoleges * 64) + "px"
}

