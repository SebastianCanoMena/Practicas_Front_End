const info = document.getElementById("info");
console.log(info);

const move = document.getElementById("move");

const Habilidades = document.getElementById("Habilidades");

const Estadisticas = document.getElementById("Estadisticas");

const tituloMove = document.getElementById("tituloMove");

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("Imagenes/pokeball.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        //if (res.status == "200"){
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeheight = data.height;
            let pokeWeight = data.weight;
            let pokeId = data.id;
            let pokeAbility1 = data.abilities[0].ability.name;
            let pokeAbility2 = data.abilities[1].ability.name;
            let pokeType = data.types[0].type.name;

            //Estadisticas
            let stat1 =  data.stats[0].base_stat;
            let stat2 =  data.stats[1].base_stat;
            let stat3 =  data.stats[2].base_stat;
            let stat4 =  data.stats[3].base_stat;
            let stat5 =  data.stats[4].base_stat;
            let stat6 =  data.stats[5].base_stat;

            //movimientos
            const b = data.moves.length;
           
            const moves = [b];
	for(let x=0; x<b; x++){
 moves[x] = data.moves[x].move.name;

 }

		
        
           pokeImage(pokeImg);
          

            
            const información = `
            
            <h2>${pokeName}</h2>
            <h3>Información</h3>
            <p>Altura: ${pokeheight}</p>
            <p>Peso: ${pokeWeight}</p>
            <p>Tipo: ${pokeType}</p>
            <p>N.º${pokeId}</p></style>`
            info.innerHTML = información;
 
            const habilidades =`
            <h3>Habilidades</h3>
            <p>${pokeAbility1}</p>
            <p>${pokeAbility2}</p>
            `
            Habilidades.innerHTML = habilidades;
            

            const estadisticas =
            `<h3>Estadisticas</h3>
            <p>hp: ${stat1}</p>
            <p>attack: ${stat2}</p>
            <p>defense: ${stat3}</p>
            <p>special-attack: ${stat4}</p>
            <p>special-defense: ${stat5}</p>
            <p>speed: ${stat6}</p>`
            Estadisticas.innerHTML = estadisticas;
            
            
        for(y=0; y<b; y++){
            let movimientos = 
            `<p>${moves[y]}</p> `
             move.innerHTML += movimientos;
        }
            
    
    }
 
    }
    )}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


 //const altura = (pokeHeight) => {
    

