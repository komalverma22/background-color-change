const background=document.querySelector("button");
const body=document.querySelector("body")
background.addEventListener("click",()=>{
    const red=Math.floor(Math.random()*254);
    const green=Math.floor(Math.random()*254);
    const blue=Math.floor(Math.random()*254);

    const rgb=`rgb(${red}, ${green}, ${blue})`
    body.style.background=rgb

})

const color=document.querySelector(".change");

background.addEventListener("click",()=>{
    const red=Math.floor(Math.random()*254);
    const green=Math.floor(Math.random()*254);
    const blue=Math.floor(Math.random()*254);

    const rgb=`rgb(${red}, ${green}, ${blue})`
   const what=console.log(rgb)
    color.textContent=body.style.background
    const redd=Math.floor(Math.random()*200);
    const greenn=Math.floor(Math.random()*220);
    const bluee=Math.floor(Math.random()*200);
     const rgbb=`rgb(${redd}, ${greenn}, ${bluee})`
    color.style.background=rgbb
})