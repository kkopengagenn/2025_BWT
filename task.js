function checkBox(){
    const A= Number(document.getElementById("A").value);
    const B= Number(document.getElementById("B").value);
    const C= Number(document.getElementById("C").value);
    const M= Number(document.getElementById("M").value);
    const K= Number(document.getElementById("K").value);

    const result=document.getElementById("result")

if (
    (A<=M && B<=K) || (A<=K && B<=M) ||
    (A<=M && C<=K) || (A<=K && C<=M) ||
    (B<=M && C<=K) || (B<=K && C<=M)) 
    {result.innerText="Коробка проходит в дверь!"; 
        alert("Коробка проходит в дверь!");
}  else {result.innerText="Увы и ах! Не проходит :(";
    alert ("Увы и ах! Не проходит :(");
}
}

document.getElementById("checkBtn").addEventListener("click", checkBox)


