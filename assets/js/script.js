function redirectToHomepage() {
    document.location.href = "index.html";
}

function hamburgerMenu() {
    const navBar = document.getElementById("navBar");
    console.log(navBar.style.display)
    // if (navBar.style.display == "none"){
    //     console.log("open hamburger")
    //     navBar.style.display = "flex";
    // }
    // else {
    //     console.log("close hamburger")
    //     navBar.style.display = "none";
    // }
}

//Event listensers
document.getElementsByTagName("h1")[0].addEventListener("click", redirectToHomepage); 

document.getElementsByClassName("hamburger")[0].addEventListener("click", hamburgerMenu); 