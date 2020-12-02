const URL = 'https://chihuahuaapi.herokuapp.com/api/all_locations/';

const getConnection = () => {
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let itemHtml = `<div class="container">
            <div class="row">`;

            for (let index = 0; index < 2; index++) {
                
                itemHtml += `
                <div class="col-sm-6">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top"  src="${json[index].imagen}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${json[index].nombre}</h5>
                  <h3 class="card-text">${json[index].telefono}</h3>
                  <p class="card-text">${json[index].ubicacion}</p>
                </div>
              </div> </div>`
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