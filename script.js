function upDate(previewPic) {
    console.log("Event triggered:", previewPic.alt);

    document.querySelector("#image").innerHTML = previewPic.alt;
    document.querySelector("#image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {
    document.querySelector("#image").style.backgroundImage = "url('')";
    document.querySelector("#image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("addTabFocus() triggered!");

    let images = document.querySelectorAll(".gallery img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
