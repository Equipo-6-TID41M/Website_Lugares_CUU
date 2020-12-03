const URL = 'https://chihuahuaapi.herokuapp.com/api/all_locations/';

const getConnection = () => {
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            console.log(json.all_locations)
            let itemHtml = `<div class="container">
            <div class="row">`;

            for (let index = 0; index < json.all_locations.length; index++) {                
              itemHtml += `
              <div class="container">
              <div class="row align-items-center">
              <div class="col-lg-6">
              <div class="p-5">
             <img class="img-fluid rounded-circle" src="${json.all_locations[index].imagen}" alt="${json.all_locations[index].nombre}">
              </div>
            </div>
            <div class="col-lg-6">
            <div class="p-5">
            <h5 class="card-title">${json.all_locations[index].nombre}</h5>
            <h3 class="card-text">Referencias: ${json.all_locations[index].referencias}</h3>
            <h3 class="card-text">Teléfono(s): ${json.all_locations[index].telefono}</h3>
            <p class="card-text">${json.all_locations[index].descripcion}</p>
        <iframe
          width="430"
          height="250"
          frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB9nQFWYqChXu7UW5lVA2btbBBN47a5SXc
          &q=place_id:${json.all_locations[index].place_id}" allowfullscreen>
        </iframe>
      </div></div></div></div>`
            }
            itemHtml+=`</div> </div>`
    $("#portfolio .container .section-title").after(itemHtml);
        });
        console.log("Dentro de getConection")
    };
    (function () {
        document.addEventListener('DOMContentLoaded', () => {
        getConnection();
        });
    })();