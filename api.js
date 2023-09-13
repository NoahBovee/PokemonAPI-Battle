const input = document.getElementById("pokemonName");
const pokemonBox = document.querySelector(".pokemonBox");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search").click();
  }
});

const getPokemon = event => {
  const name = document.querySelector("#pokemonName").value;
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
      pokemonBox.innerHTML = `
      <div>

      <img
        src="${data.sprites.other["official-artwork"].front_default}"
        alt="${data.name}"
      />
    </div>
    <div class="pokemonInfo"
    >
      <h1>${data.name}</h1>
      <h4>type: ${data.types[0].type.name}</h4>  
      <br/>
      <p>hp: ${data.stats[0].base_stat}</p>
    <p>attack: ${data.stats[1].base_stat}</p> 
    </div>`;
      pokemonBox.insertBefore(healthBar, pokemonBox.firstChild);
    })
    .catch(error => {
      console.error(error);
    });

  event.preventDefault();
};

const randomizeButton = document.getElementById("randomize");

const getRandomPokemon = event => {
  const name = document.querySelector("#pokemonName").value;
  const randomId = Math.floor(Math.random() * 898) + 1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
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

      pokemonBox.innerHTML = `
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

      pokemonBox.insertBefore(healthBar, pokemonBox.firstChild);
    })
    .catch(error => {
      console.error(error);
    });

  event.preventDefault();
};

document.querySelector("#search").addEventListener("click", getPokemon);
randomizeButton.addEventListener("click", getRandomPokemon);
document.addEventListener("DOMContentLoaded", getRandomPokemon);

getPokemon();
