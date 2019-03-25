
const projename= document.getElementById("projename");

const projedescri= document.getElementById("projedescri");

const compdate= document.getElementById("compdate");

const buttonyanga=document.getElementById("buttonyanga");

const outiput=document.getElementById("outiput");



buttonyanga.onclick=function (){
    const mynom=projename.value;
    const myval=projedescri.value;
    const iyidate=compdate.value;
    
    if(mynom===""  || myval===""){
        alert('Please fill all fields ...!!!!!!');
    
    }
    console.log(mynom);
    console.log(myval);
    console.log(iyidate);

    if(mynom&&myval){

        localStorage.setItem(mynom,myval);
    
        location.reload();
    }
};
for(let i=0; i<localStorage.length; i++){
    const mynom=localStorage.key(i);
    const myval=localStorage.getItem(mynom);

     outiput.innerHTML +=`${mynom}: ${myval}<br>`;
}
