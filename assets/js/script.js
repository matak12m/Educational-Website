function redirectToHomepage() {
    document.location.href = "index.html";
}

//Event listensers
document.getElementsByTagName("header")[0].addEventListener("click", redirectToHomepage); 