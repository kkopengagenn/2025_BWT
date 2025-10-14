const btn=document.getElementById("change");
btn.addEventListener("click",changeLang)
let lastname=document.getElementById("lastname");
let nm=document.getElementById("name");
let otch=document.getElementById("otch");
let gender=document.getElementById("gender");
let birthdate=document.getElementById("date");
let hometown=document.getElementById("hometown");

const eng=["Akhmadeeva", "Daniia", "Amirovna", "FEM.", "09/13/2004", "SHANGAI"];
const rus=["Ахмадеева", "Дания", "Амировна", "ЖЕН.", "13.09.2004", "Г. ШАНХАЙ"];

function changeLang() {
    if (btn.innerText.includes("English")) {
        lastname.innerText=eng[0];
        nm.innerText=eng[1];
        otch.innerText=eng[2];
        gender.innerText=eng[3];
        birthdate.innerText=eng[4];
        hometown.innerText=eng[5];
        
        btn.innerText="Нажмите для русской версии";
    } else {
        lastname.innerText=rus[0];
        nm.innerText=rus[1];
        otch.innerText=rus[2];
        gender.innerText=rus[3];
        birthdate.innerText=rus[4];
        hometown.innerText=rus[5];

        btn.innerText="Click for English version"
    }

}


const btnSize=document.getElementById("size");
const imgDOM=document.getElementById("DOM_JS");

btnSize.addEventListener("click",()=>{
    if (imgDOM.classList.contains("big")) {imgDOM.classList.remove("big");
        btnSize.textContent="Click for bigger version";
    } else {
        imgDOM.classList.add("big");
        btnSize.textContent="Click for smaller version";
    }
})


