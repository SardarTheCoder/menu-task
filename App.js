let menu = document.querySelector('.menu');
let bar = document.querySelectorAll('.Bar');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');
let text = document.querySelector('.m-p');
let sidebar = document.querySelector('.sidebar');
//add eventlistner
let name = document.querySelector('.adp');
name.addEventListener('click',()=>{
  Style.color='blue';
})




menu.addEventListener("click",() => {
    bar1.classList.toggle = ("bar1-style");
    bar3.classList.toggle = ("bar3-style");
    sidebar.classList.toggle("show");
     bar2.classList.toggle = ("bar2-style");
    //  bar1.style.width = "60px";
    //  bar3.style.width = "60px";
     if(text.innerText === "MENU")
     {
      text.innerText = "CLOSE";
    }
     else{
        text.innerText="MENU";
      }



})
