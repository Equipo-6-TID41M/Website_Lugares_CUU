const URL = 'https://chihuahuaapi.herokuapp.com/api/all_locations/';

const getConnection = () => {
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let itemHtml = `<div class="container">
            <div class="row">`;

            for (let index = 0; index < json.length; index++) {
                
                itemHtml += `
                <div class="col-sm-6">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${json[index].img}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${json[index].name}</h5>
                  <h3 class="card-text">${json[index].company}</h3>
                  <h3 class="card-text">${json[index].age}</h3>
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