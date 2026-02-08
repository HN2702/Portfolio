// Read More Button
document.getElementById("readMore").addEventListener("click", function() {
    let moreText = document.getElementById("moreText");
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        this.innerText = "Read Less";
    } else {
        moreText.classList.add("hidden");
        this.innerText = "Read More";
    }
});

// Open Project Details in Popup
function openProject(projectId) {
    let popup = document.getElementById("project-popup");
    let title = document.getElementById("popup-title");
    let description = document.getElementById("popup-description");

    if (projectId === 1) {
        title.innerText = "Project 1";
        description.innerText = "Detailed project description here.";
    } else if (projectId === 2) {
        title.innerText = "Project 2";
        description.innerText = "Detailed project description here.";
    }

    popup.style.display = "block";
}

// Close Popup
function closeProject() {
    document.getElementById("project-popup").style.display = "none";
}
