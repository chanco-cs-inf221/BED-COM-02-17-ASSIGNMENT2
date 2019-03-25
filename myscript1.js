const working5=document.getElementById("working5");

const working6=document.getElementById("working6");

const mydate=document.getElementById("mydate");

const iyindbutton=document.getElementById("iyindbutton");

const outiputing=document.getElementById("outiputing");

iyindbutton.onclick=function (){
    const williyamu=working5.value;
    const wizziwizzy=working6.value;
    const pharaphara=mydate.value;

    if(williyamu===""  || wizziwizzy===""){
        alert('Please fill all fields ...!!!!!!');
}
   console.log(williyamu);
   console.log(wizziwizzy);
   console.log(pharaphara);

   if(williyamu&&wizziwizzy){

    localStorage.setItem(williyamu,wizziwizzy);

    location.reload();
}
for(let i=0; i<localStorage.length; i++){
    const williyamu=localStorage.key(i);
    const wizziwizzy=localStorage.getItem(williyamu);

     outiput.innerHTML +=`${williyamu}: ${wizziwizzy}<br>`;
