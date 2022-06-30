const form = document.querySelector("form");
const ismInput = document.querySelector("#ism");
const famInput = document.querySelector("#fam");
const sanaInput = document.querySelector("#sana");
const cardlarSection = document.querySelector("#cardlar");
const inputlar = document.querySelector(".inputlar");
const navbar = document.querySelector(".navbar");
const malumotlar = document.querySelector(".malumotlar");


const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    cardlarSection.insertAdjacentHTML(

        "afterbegin",
        `
        <figure class="erkatoy">
             
                <img
                    width="150px"
                    height="150px"
                    src="./images/1409212_18.jpeg"
                    alt="test"
                />
            <figcaption>
                <h4 class="lorem1">${ismInput.value}</h4>
                <p class="lorem1">${famInput.value}</p>
                <p class="lorem1">${sanaInput.value}</p>
            </figcaption>
        </figure>`
    );
});

btn1.addEventListener("click", () => {
    inputlar.classList.add("active");
    malumotlar.classList.add("active");
}); 