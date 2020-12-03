const URL = 'https://chihuahuaapi.herokuapp.com/api/all_locations/';

const getConnection = () => {
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            console.log(json.all_locations)
            let itemHtml = `<div class="container">
            <div class="row">`;

            for (let index = 0; index < 2; index++) {
                
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
          <h3 class="card-text">Referencias :${json.all_locations[index].referencias}</h3>
          <p class="card-text">${json.all_locations[index].descripcion}</p>
        </div></div></div></div>`                
            }
            itemHtml+=`</div> </div>`
    $("#portfolio .container .section-title").after(itemHtml);
        });
        console.log("Dentro del método getConection")
    };
    (function () {
        document.addEventListener('DOMContentLoaded', () => {
        getConnection();
        });
    })();