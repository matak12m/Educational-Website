function redirectToHomepage() {
    document.location.href = "index.html";
}

function hamburgerMenu() {
    const hamburger = document.getElementsByTagName("h1")[0];
    if (hamburger.style.display != "none"){
        alert("open hamburger")
    }
    else {
        alert("close hamburger")
    }
}

//Event listensers
document.getElementsByTagName("h1")[0].addEventListener("click", redirectToHomepage); 

document.getElementsByClassName("hamburger")[0].addEventListener("click", hamburgerMenu); 