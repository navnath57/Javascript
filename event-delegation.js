//Event delegation allows you to handle events at a higher level in the DOM rather than attaching individual event listeners to each element.

document.getElementById("parent").addEventListener("click", function(event){
    if(event.target && event.target.matches("button-class-name")){
        console.log("ButtonClicked: ", event.target.textContent);
    }
})