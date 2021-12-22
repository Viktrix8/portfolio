function showMenu() {
    const navRef = document.getElementById("nav");
    if (navRef.style.maxHeight === "300px")
        navRef.style.maxHeight = 0

    else
        navRef.style.maxHeight = "300px"
}