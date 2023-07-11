const un=document.getElementById('list').addEventListener('click',del)
document.querySelector('form').addEventListener("submit",save)
function save(e){
e.preventDefault();
const out1=document.getElementById("i2").value;
const out2=document.getElementById("i").value;
const out3=document.getElementById("c").value;
const obj={
   num:out1,
   des:out2,
   cat:out3}

var sobj=JSON.stringify(obj)
localStorage.setItem(obj.num,sobj)
screen(obj)
}
function screen(obj){
    var ul=document.getElementById('list');
    var li=document.createElement('li')
    ul.appendChild(li)
  
    li.appendChild(document.createTextNode(`number-${obj.num}-description-${obj.des}-category-${obj.cat}`));
    var delbtn=document.createElement('button')
    delbtn.className="delbtn";
    delbtn.appendChild(document.createTextNode("delete"))
    li.appendChild(delbtn)
    var editbtn=document.createElement('button')
    editbtn.className="editbtn"
    editbtn.appendChild(document.createTextNode("edit"))
    li.appendChild(editbtn)

}
window.addEventListener("DOMContentLoaded",()=>{
 const ls=localStorage;
const lskeys=Object.keys(ls);
for(let i=0;i<lskeys.length;i++){
    const key=lskeys[i];
    const details=ls[key];
    const detailsobj=JSON.parse(details);
    screen(detailsobj);
}


})
function del(e){
    if(e.target.classList.contains("delbtn")){
        var parent=e.target.parentElement;
        var ul=document.getElementById("list")
       ul.removeChild(parent);
       var p=e.target.parentElement.textContent;
       var s=p.substring(7,p.length)
     var c=0;
       for(let i=0;i<s.length;i++){
        if(s[i]=='-'){
            break;
        }
        c++;
       }
       s=s.substring(0,c)
       localStorage.removeItem(s)
    }
    if(e.target.classList.contains("editbtn")){
        const p1=document.getElementById("i2");
const p2=document.getElementById("i");
const p3=document.getElementById("c");

        var parent=e.target.parentElement;
        var ul=document.getElementById("list")
       ul.removeChild(parent);
       var p=e.target.parentElement.textContent;
       var s=p.substring(7,p.length)
     var c=0;
       for(let i=0;i<s.length;i++){
        if(s[i]=='-'){
            break;
        }
        c++;
       }
       s=s.substring(0,c)
       localStorage.removeItem(s)
       p1.value=s;
       var r=0;
       var z=0;
    for(let i=0;i<p.length;i++){
        if(p[i]=='-'){
            r++;
        }
        z++;
        if(r==3){
           break;
        }
       
    }
   
    var t=0;
    var sub=p.substring(z,p.length)
   
    for(let i=0;i<sub.length;i++){
        if(sub[i]=='-'){
            break;
        }
      t++;
    }
    var z=sub.substring(0,t);
   
    p2.value=z;
   var g=0;
   var h=0;
   var j=0;
   for(let i=0;i<sub.length;i++){
    if(sub[i]=='-'){
        h++;
    }
    j++;
    if(h==2){
        break;
    }

   }
var k=sub.substring(j,sub.length-10)
p3.value=k;
    }
}