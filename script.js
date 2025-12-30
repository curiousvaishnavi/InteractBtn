let filein=document.querySelector("#filein");
let button=document.querySelector("#button");

button.addEventListener("click",function(){
    filein.click();
});

filein.addEventListener("change",function(dets){
    const file = dets.target.files[0].name;
    if(file){
        button.textContent= dets.target.files[0].name;
    }
})