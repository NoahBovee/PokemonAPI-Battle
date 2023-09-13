const input = document.getElementById("pokemonName2");
const pokemonBox2 = document.querySelector(".pokemonBox2");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search2").click();
  }
});

const getPokemon2 = event => {
  const name = document.querySelector("#pokemonName2").value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(data => {
      const maxHP = 255; // Set the maximum HP to 255
      const currentHP = data.stats[0].base_stat; // Get the HP value from the Pokémon data

      const healthBar = document.createElement("div");
      healthBar.className = "health-bar";

      const healthBarFill = document.createElement("div");
      healthBarFill.className = "health-bar-fill";
      healthBarFill.style.width = `${(currentHP / maxHP) * 100}%`; // Calculate the fill width

      const healthText = document.createElement("div");
      healthText.className = "health-text";
      healthText.textContent = `${currentHP} / ${maxHP}`;

      healthBar.appendChild(healthBarFill);
      healthBar.appendChild(healthText);

      pokemonBox2.innerHTML = `
        <div>
          <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" />
        </div>
        <div class="pokemonInfo">
          <h1>${data.name}</h1>
          <h4>type: ${data.types[0].type.name}</h4>
          <br/>
          <p>hp: ${data.stats[0].base_stat}</p>
          <p>attack: ${data.stats[1].base_stat}</p>
        </div>`;
      pokemonBox2.insertBefore(healthBar, pokemonBox2.firstChild);
    })
    .catch(error => {
      console.error(error);
    });

  event.preventDefault();
};

const randomizeButton2 = document.getElementById("randomize2");

const getRandomPokemon2 = event => {
  const name = document.querySelector("#pokemonName").value;
  const randomId2 = Math.floor(Math.random() * 898) + 1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId2}`)
    .then(response => response.json())
    .then(data => {
      const maxHP = 255; // Set the maximum HP to 255
      const currentHP = data.stats[0].base_stat; // Get the HP value from the Pokémon data

      const healthBar = document.createElement("div");
      healthBar.className = "health-bar";

      const healthBarFill = document.createElement("div");
      healthBarFill.className = "health-bar-fill";
      healthBarFill.style.width = `${(currentHP / maxHP) * 100}%`; // Calculate the fill width

      const healthText = document.createElement("div");
      healthText.className = "health-text";
      healthText.textContent = `${currentHP} / ${maxHP}`;

      healthBar.appendChild(healthBarFill);
      healthBar.appendChild(healthText);
      pokemonBox2.innerHTML = `
        <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="${data.name}"
        />
      </div>
      <div class="pokemonInfo">
        <h1>${data.name}</h1>
        <h4>type: ${data.types[0].type.name}</h4>
        <br/>
        <p>hp: ${data.stats[0].base_stat}</p>
      <p>attack: ${data.stats[1].base_stat}</p>
      
       
        
      </div>`;
      pokemonBox2.insertBefore(healthBar, pokemonBox2.firstChild);
    })
    .catch(error => {
      console.error(error);
    });

  event.preventDefault();
};

document.querySelector("#search2").addEventListener("click", getPokemon2);
randomizeButton2.addEventListener("click", getRandomPokemon2);
document.addEventListener("DOMContentLoaded", getRandomPokemon2);

getPokemon2();
