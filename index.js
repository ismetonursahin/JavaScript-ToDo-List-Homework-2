let ekleButonu = document.querySelector("#add");
let ulListe = document.querySelector("#list");
let inputKısmı = document.querySelector("#yazıYaz");
let ulLength = document.querySelector("li");
let cilginTost = document.querySelector("#liveToast");
let bozukTost = document.querySelector("#yeni");

ekleButonu.addEventListener("click", maddeEkle);
function maddeEkle() {
  if (inputKısmı.value) {
    let listeEkle = document.createElement("li");
    listeEkle.classList.add();

    let yazicakYazi = document.createElement("div");
    yazicakYazi.innerHTML = inputKısmı.value;
    listeEkle.appendChild(yazicakYazi);

    listeEkle.addEventListener("click", () => onay(yazicakYazi));
    let listeButonu = document.createElement("button");
    listeButonu.classList.add("silme");
    listeButonu.innerHTML = "X";

    listeButonu.addEventListener("click", () => silecek(listeEkle));
    listeEkle.appendChild(listeButonu);
    ulListe.appendChild(listeEkle);
    inputKısmı.value = "";

    let tost = new bootstrap.Toast(cilginTost);
    tost.show();
  } else {
    let bayatTost = new bootstrap.Toast(bozukTost);
    bayatTost.show();
  }
}

function silecek(listeEkle) {
  ulListe.removeChild(listeEkle);
}

function onay(yazicakYazi) {
  if (yazicakYazi.className == "cizgi-cek") {
    yazicakYazi.classList.remove("cizgi-cek");
  } else {
    yazicakYazi.classList.add("cizgi-cek");
  }
}
