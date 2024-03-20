function visualiseProducts() {
    const content = document.getElementById("hiddenContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}