
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
axios.post('https://crudcrud.com/api/6e9449070b02459c87c407f09ad4bf0f/appointmentdata',obj)
.then((res)=>{
    screen(obj)
})


}
function screen(obj){
    var ul=document.getElementById('list');
    const c=`<li id=${obj._id}>
    Amount-${obj.num}-description-${obj.des}-category-${obj.cat}
    <button  onclick=del('${obj._id}')>delete</button>
    <button onclick=edit('${obj._id}','${obj.num}','${obj.des}','${obj.cat}')>Edit</button>
    </li>`
ul.innerHTML=ul.innerHTML+c;

}
window.addEventListener("DOMContentLoaded",()=>{
 axios.get('https://crudcrud.com/api/6e9449070b02459c87c407f09ad4bf0f/appointmentdata')
 .then((res)=>{
for(let i=0;i<res.data.length;i++){
    
        console.log(res.data[i]._id)
    
    screen(res.data[i]);
}
 })
});
function del(user){
    console.log(user);
    axios.delete(`https://crudcrud.com/api/6e9449070b02459c87c407f09ad4bf0f/appointmentdata/${user}`)
    .then((res)=>{
        var p=document.getElementById(user);
        var parent=document.getElementById("list")
      parent.removeChild(p);
      
    })
//console.log(user)
}
function edit(userid,usern,userd,userc){
    axios.delete(`https://crudcrud.com/api/6e9449070b02459c87c407f09ad4bf0f/appointmentdata/${userid}`)
    .then((res)=>{
        var p=document.getElementById(userid);
       
        var parent=document.getElementById("list")
      parent.removeChild(p);
      const p1=document.getElementById("i2");
      const p2=document.getElementById("i");
      const p3=document.getElementById("c");
      p1.value=usern;
      p2.value=userd;
      p3.value=userc;
    })
}