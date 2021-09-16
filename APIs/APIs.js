let randomNumber=parseInt(Math.random()*732);
console.log(randomNumber);
key=4828587370487275;
let heroApi = 'https://superheroapi.com/api.php/'+key+'/'+randomNumber;

const getHero = async () =>{
    const response = await fetch(heroApi);
    const data = response.json();
    console.log(data);
    return data;

};

const randomHero = async () => {
    const hero = await getHero();
    console.log(hero);
    html=(
            `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${hero.image.url}" alt="Card image cap">
            <div class="card-body">
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>`
    );
        
    console.log(html);
    const div = document.querySelector(".coso");
    div.innerHTML=html;
};

randomHero();