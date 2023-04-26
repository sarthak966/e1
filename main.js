let menuButton=document.getElementById("cat1");
let menu=document.getElementById("menu_ul");

menu.style.right="-1000px"

menuButton.addEventListener("click",()=>{

    if(menu.style.right==="-1000px"){
        menu.style="right:0px;"
    }
    else if(menu.style.right!="-1000px"){
        menu.style="right:-1000px;"
    }
    })

console.log(menu)
