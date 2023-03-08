window.addEventListener("load", init);

function init() {
    const LISTA = ["kepek/fak.jpg", "kepek/folyo.jpg","kepek/madar.jpg","kepek/part.jpg","kepek/virag.jpg"];
    const kepek = document.getElementsByClassName("kepek");
    let htmlszoveg = kirak(LISTA, kepek);
    kepek[0].innerHTML += htmlszoveg; 

    const imgELEMEK = document.querySelectorAll("img")
    
    for (let index = 0; index < LISTA.length; index++) {
        //imgELEMEK[index].onmouseover = divSzegely

        imgELEMEK[index].addEventListener("mouseover", divSzegely)
    }
}

function kirak(LISTA, kepek) {
    let htmlszoveg = ""
    for (let index = 0; index < LISTA.length; index++) {
        htmlszoveg += "<div>"
        htmlszoveg += `<img src='${LISTA[index]}'/>`;
        htmlszoveg += "</div>"
    }
  
    return htmlszoveg;
}

function divSzegely(event){
    const ELEM = event.target
    ELEM.classList.add("szegely")
console.log(event.target)
}