
function lables(forv,con){
    let e=document.createElement("label");
    e.innerHTML=con;
    e.setAttribute("for",forv);
    return e;
}
function linebreak(){
let e=document.createElement("br");
return e;
}
function input(type,name,id){
    let e=document.createElement("input");
    e.setAttribute("type",type);
    e.setAttribute("name",name);
    e.setAttribute("id",id);
    return e;
    
}
function btn(at,val){
let e=document.createElement("button");
e.setAttribute("onclick",at);
e.innerHTML=val;
return e;
}
function foo(){
    document.body.style.backgroundColor="#333";
    document.body.style.color="white";
    
   let fn= document.getElementById("fn").value;
   let mn=document.getElementById("mn").value;
   let ln= document.getElementById("ln").value;
   let em=document.getElementById("em").value;
    let pas=document.getElementById("pas").value;

console.log(`First name ${fn}`)
console.log(`Middel name ${mn}`);
console.log(`Last name ${ln}`);
console.log(`email ${em}`);
console.log(`Password ${pas}`);

}
let fnl=lables("fn","First Name");
let br=linebreak();
let fn=input("text","fn","fn");
let br1=linebreak();
let mnl=lables("mn","Middel Name");
let br2=linebreak();
let mn=input("text","mn","mn");
let br3=linebreak();
let lnl=lables("ln","Last Name");
let br4=linebreak();
let ln=input("text","ln","ln");
let br5=linebreak();
let eml=lables("em","Email");
let br6=linebreak();
let em=input("email","em","em");
let br7=linebreak();
let pasl=lables("pas","Password");
let br8=linebreak();
let pas=input("password","pas","pas");
let br9=linebreak();
let btnv=btn("foo()","clickme")
document.body.append(fnl,br,fn,br1,mnl,br2,mn,br3,lnl,br4,ln,br5,eml,br6,em,br7,pasl,br8,pas,br9,btnv);
