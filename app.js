let button = document.getElementById('button'); // seul au début, suffit pour avoir le json dans la console
let image = document.getElementById('image');
let pokeNumber = document.getElementById('number');
let pokeName = document.getElementById('name');

const changePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 150) + 1; // [0, 1[ --> nb entre 1 et 151

  let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`; //lien en haut de https://pokeapi.co/

  let data = await fetch(requestString);
  console.log(data); //une promesse...

  let response = await data.json();
  console.log(response); //... dans une promesse ! --> l'objet json correspondant au pokemon du randomNumber

  // rendu des éléments du json dans le navigateur (cf html)
  image.src = response.sprites.front_default; // cf json
  pokeNumber.textContent = `# ${response.id}`; // cf json
  pokeName.textContent = response.name; // cf json
};

changePokemon(); //On appelle la fonction une première fois, pour éviter d'avoir le bouton tout seul à l'ouverture
button.addEventListener('click', changePokemon)