const attack1 = document.querySelector(".attack-one");
const attack2 = document.querySelector(".attack-two");

const pokebox1 = document.querySelector(".pokemonBox");
const pokebox2 = document.querySelector(".pokemonBox2");

const pokeimg2 = document.querySelector(".pokemonBox2 img");

attack1.addEventListener("click", () => {
  pokebox2.style.backgroundColor = "red";
  pokebox2.classList.add("shake-animation");

  setTimeout(() => {
    pokebox2.style.backgroundColor = "";
    pokebox2.classList.remove("shake-animation");
  }, 1000);
});

attack2.addEventListener("click", () => {
  pokebox1.style.backgroundColor = "red";
  pokebox1.classList.add("shake-animation");
  setTimeout(() => {
    pokebox1.style.backgroundColor = "";
    pokebox1.classList.remove("shake-animation");
  }, 1000);
});
