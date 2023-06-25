"use strict";

const url = "https://zoo-animal-api.herokuapp.com/animals/rand";
document.getElementById('animal').style.display = 'none';
document.getElementById('loading').style.display = 'none';

const getAnimal = () => {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('animal').style.display = 'none';



  fetch(url)
    .then((data) => {
      return data.json();
    })
    
    .then((res) => {
            document.getElementById('loading').style.display = 'none';

            document.getElementById('intro').style.display = 'none';
            document.getElementById('animal').style.display='block';
            document.getElementById('name').innerHTML = `You are ${res.name}`;
            document.getElementById('georange').innerHTML = `Where can it be found? ${res.geo_range}`;
            document.getElementById('img').src = `${res.image_link}`;
            document.getElementById('lat-name').innerHTML = `Latin name: ${res.latin_name}`;
            document.getElementById('life-span').innerHTML = `Lifespan: ${res.lifespan} years`;
            document.getElementById('diet').innerHTML = `Diet: ${res.diet}`;
            document.getElementById('habitat').innerHTML = `Habitat: ${res.habitat}`;
   
          
    })

    

    .catch((error) => document.createElement('h1') = `<h1>There's been an error! Please reload the page!</h1>`);
};
