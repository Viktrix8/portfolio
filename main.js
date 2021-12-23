function showMenu() {
    const navRef = document.getElementById("nav");
    if (navRef.style.maxHeight === "300px")
        navRef.style.maxHeight = 0

    else
        navRef.style.maxHeight = "300px"
}

function showMore() {
    const ref = document.getElementById("about__text-more");
    if (ref.style.display == "block")
        ref.style.display = "none"
    else
        ref.style.display = "block"
}