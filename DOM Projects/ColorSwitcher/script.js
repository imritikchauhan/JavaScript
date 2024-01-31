const buttons = document.querySelectorAll(".button");
// console.log(button);
const body  = document.querySelector("body");

buttons.forEach(function(buttons){
    console.log(buttons);
    buttons.addEventListener("mouseenter",function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === "orange"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "grey"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "red"){
            body.style.backgroundColor = event.target.id;
        }
        
        // setTimeout(function(){
        //     document.querySelector("body").style.backgroundColor = "white"
    
        // },3000)
    })

    buttons.addEventListener("mouseleave",function(event){
        console.log(event);
        console.log(event.target);
        body.style.backgroundColor = "white";
    })
})