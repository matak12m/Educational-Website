function redirectToHomepage() {
    document.location.href = "index.html";
}

function hamburgerMenu() {
    const navBar = document.getElementsByTagName("nav")[0];
    const navBarWidthStyle = window.getComputedStyle(navBar, null).getPropertyValue("width")
    //console.log("Print nav display", navBar.style.display)
    //Returns inline style = style set by javascript NOT THE CASCADING SHEET STYLE
    //getComputedStyle returns the current rendered style
    console.log(navBarWidthStyle)

    if (navBarWidthStyle == "0px"){
        console.log("open hamburger")
        navBar.style.width = "300px";
    }
    else {
        console.log("close hamburger")
        navBar.style.width = "0%";
    }
}

//Bug when opening and closing the hambuger menu, returning to desktop size hides nav bar:
//Possible answer = the DOM has two different types of style: 1 for the CSS sheet and 1 for javascript applied styles
//Javascript styles take priority and cannot be affected by media queries
//SOLVED** solved by adding an !important to the media query, this overwrite the inline javascript style

//Takes value from input and puts it into output innerHTML so that the textarea doesnt start displayinh javascript 
function receiveTextareaChange(element) {
    let siblingCodeOutput = element.parentElement.parentElement.childNodes[3]
    console.log(element.value)
    siblingCodeOutput.innerHTML = element.value;
}



//Event listensers
document.getElementsByTagName("h1")[0].addEventListener("click", redirectToHomepage); 

document.getElementsByClassName("hamburger")[0].addEventListener("click", hamburgerMenu); 

//Gets list of text areas and when they change eg someone types sends it to function
const textareaArray = document.querySelectorAll('.liveCode textarea');
textareaArray.forEach(element => {
    receiveTextareaChange(element); //Fires once when page loads so that outputs will use what was typed inside visual studio code
    element.addEventListener('change', () => receiveTextareaChange(element))
});