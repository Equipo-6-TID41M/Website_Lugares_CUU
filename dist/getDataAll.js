const URL = 'https://chihuahuaapi.herokuapp.com/api/all_locations/';

const getConnection = () => {
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            console.log(json.all_locations)
            let itemHtml = `<div class="container">
            <div class="row">`;

            for (let index = 0; index < json.length; index++) {
                
                itemHtml += `
                <div class="col-sm-6">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${json.all_locations[index].img}" alt="${json.all_locations[index].nombre}">
                <div class="card-body">
                  <h5 class="card-title">${json.all_locations[index].name}</h5>
                  <h3 class="card-text">${json.all_locations[index].company}</h3>
                  <h3 class="card-text">${json.all_locations[index].age}</h3>
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