const trex=document.querySelector("#trex");
const kaktus=document.querySelector("#kaktus");
const mermi=document.querySelector("#mermi");

function zipla(){
   
    if(kaktus.classList!="kaktus-animate")
    {
        kaktus.classList.add("kaktus-animate");
    }

    if(trex.classList!="trex-animate")
    {
        trex.classList.add("trex-animate");
        setTimeout(function(){
            trex.classList.remove("trex-animate");
        },500);
    }
}

var carpismaKOntrol =setInterval(function(){

        var trexBottom =parseInt(window
                .getComputedStyle(trex)
                .getPropertyValue("bottom"));

        var kaktusLeft =parseInt(window
                .getComputedStyle(kaktus)
                .getPropertyValue("left"));
        
        if(kaktusLeft > 0 && kaktusLeft < 40 && trexBottom < 40){
            
            kaktus.classList.remove("kaktus-animate");
            kaktus.style.display="none";
            alert("oyun bitti");
        }

        var mermiLeft =parseInt(window
            .getComputedStyle(mermi)
            .getPropertyValue("left"));

        var kaktusLeft =parseInt(window
                .getComputedStyle(kaktus)
                .getPropertyValue("left"));
        
        if(kaktus.style.display!="none" && kaktusLeft > 0 && mermiLeft-10 < kaktusLeft && kaktusLeft < mermiLeft+10){
            mermi.classList.remove("mermi-animate");
            kaktus.classList.remove("kaktus-animate");
            kaktus.style.left="775px";
            setTimeout(function(){
                kaktus.classList.add("kaktus-animate");
            },100);
            
        }


},10);

document.addEventListener('keydown', function logKey(e) {
   if(e.keyCode==32){
    if(mermi.classList!="mermi-animate")
    {
        mermi.classList.add("mermi-animate");
        setTimeout(function(){
            mermi.classList.remove("mermi-animate");
        },500);
    }
   }
  });
