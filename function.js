document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for 'Learn More' button
    let learnMoreButton = document.querySelector(".hero button");
    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", function () {
            document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Change background color dynamically when selecting a color
    let colorInput = document.querySelector("input.skills");
    if (colorInput) {
        colorInput.addEventListener("input", function (event) {
            document.body.style.backgroundColor = event.target.value;
        });
    }

    // Hover effect on projects
    document.querySelectorAll(".project").forEach(function (project) {
        project.addEventListener("mouseover", function () {
            project.style.transform = "scale(1.05)";
            project.style.transition = "0.3s ease-in-out";
        });
        project.addEventListener("mouseout", function () {
            project.style.transform = "scale(1)";
        });
    });

    // Social media icons click alert
    let linkedInLink = document.querySelector("#Linkdin");
    if (linkedInLink) {
        linkedInLink.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Redirecting to LinkedIn profile!");
            window.open("https://www.linkedin.com/in/deepak-kumar-350848252/", "_blank");
        });
    }

    let githubLink = document.querySelector("#Github");
    if (githubLink) {
        githubLink.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Redirecting to GitHub profile!");
            window.open("https://github.com/Deepak143-dp", "_blank");
        });
    }

});


document.querySelector("#CalculatorOpen").addEventListener("click", function(event){
    event.preventDefault();
    window.open("https://deepak143-dp.github.io/dp-calculator/","_blank")
});