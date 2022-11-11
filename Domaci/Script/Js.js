
function buttonBMI()
{
    let tezina=document.getElementById("txtTezina").value;
    let visina=document.getElementById("txtVisina").value;
    if(visina<=0||tezina<=0)
    {
        alert("nepravilan unos");
        return;
    }
    let rezultat= (tezina/(visina*visina))*10000;
    let prikaz=document.getElementById("rezultat");
    let kateg=kategorija(rezultat);
    prikaz.innerHTML="Vas BMI je "+parseFloat(rezultat).toFixed(2)+"</br>"+kateg;
    alert(a);
}

function kategorija(bmi)
{
    if(bmi<18.5)return "Neuhranjen";
    else if(bmi<24.9)return "Idealna masa";
    else if(bmi<29.9)return "Prekomerna masa";
    else if(bmi<34.9)return "Blaga gojaznost";
    else if(bmi<39.9)return "Teska gojaznost";
    else return "Ekstremna gojaznost";
}