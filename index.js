for (let i = 0; i < document.querySelectorAll(".form__input").length; i++) {
    document
        .querySelectorAll(".form__input")
        [i].addEventListener("focusin", function () {
            document.querySelector(".container-header h1").innerHTML =
                '<i class="fa-solid fa-face-laugh-beam fa-xl" style="color: #43a4ee;"></i>';
        });

    document
        .querySelectorAll(".form__input")
        [i].addEventListener("focusout", function () {
            document.querySelector(".container-header h1").innerHTML =
                '<i class="fa-solid fa-face-laugh fa-xl" style="color: #43a4ee;"></i>';
        });
}

document.querySelector(".theme-icon").addEventListener("click", function () {
    if (this.getAttribute("class") === "fa-regular fa-sun fa-xl theme-icon") {
        this.setAttribute("class", "fa-regular fa-moon fa-xl theme-icon");
        document.querySelector(".navbar h1 i").style.color = "#fff";
        document.querySelector(".navbar").classList.add("theme-dark-nav");
        document.querySelector(".form").classList.add("theme-dark-form");
        document
            .querySelector(".container")
            .classList.add("theme-dark-container");
    } else {
        this.setAttribute("class", "fa-regular fa-sun fa-xl theme-icon");
        document.querySelector(".navbar h1 i").style.color = "#43a4ee";
        document.querySelector(".navbar").classList.remove("theme-dark-nav");
        document.querySelector(".form").classList.remove("theme-dark-form");
        document
            .querySelector(".container")
            .classList.remove("theme-dark-container");
    }
});
