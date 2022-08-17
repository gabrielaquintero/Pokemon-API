let canvas;
let URL='https://pokeapi.co/api/v2/pokemon/1/'
let URL1='https://pokeapi.co/api/v2/pokemon/2/'
let URL2='https://pokeapi.co/api/v2/pokemon/3/'
let URL3='https://pokeapi.co/api/v2/pokemon/4/'
let URL4='https://pokeapi.co/api/v2/pokemon/5/'
let URL5='https://pokeapi.co/api/v2/pokemon/6/'
let URL6='https://pokeapi.co/api/v2/pokemon/7/'
let URL7='https://pokeapi.co/api/v2/pokemon/8/'
let URL8='https://pokeapi.co/api/v2/pokemon/9/'
let bulbasaur= null
let ivysaur=null
let venusaur=null
let charmander=null
let charmeleon=null
let cherizard=null
let squirtle=null
let wartortle=null
let blastoise=null
let linkBulbasaur
let linkIvysaur
let linkVenusaur
let linkCharmander
let linkCharmeleon
let linkCherizard
let linkSquirtle
let linkWartortle
let linkBlastoise
let pantalla=0
let actual;


function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    
//API bulbasaur
    console.log(fetch(URL).then(response => response.json()));
    fetch(URL)
    .then(response => response.json())
    .then(data => {bulbasaur=data;
        linkBulbasaur=loadImage(bulbasaur.sprites.front_default)
    console.log(bulbasaur)
})
//API ivysaur
console.log(fetch(URL1).then(response => response.json()));
fetch(URL1)
.then(response => response.json())
.then(data => {ivysaur=data;
    linkIvysaur=loadImage(ivysaur.sprites.front_default)
console.log(ivysaur)
})

//API venusaur
console.log(fetch(URL2).then(response => response.json()));
fetch(URL2)
.then(response => response.json())
.then(data => {venusaur=data;
    linkVenusaur=loadImage(venusaur.sprites.front_default)
console.log(venusaur)
})

//API charmander
console.log(fetch(URL3).then(response => response.json()));
fetch(URL3)
.then(response => response.json())
.then(data => {charmander=data;
    linkCharmander=loadImage(charmander.sprites.front_default)
console.log(charmander)
})

//API charmeleon
console.log(fetch(URL4).then(response => response.json()));
fetch(URL4)
.then(response => response.json())
.then(data => {charmeleon=data;
    linkCharmeleon=loadImage(charmeleon.sprites.front_default)
console.log(charmeleon)
})

//API charizard
console.log(fetch(URL5).then(response => response.json()));
fetch(URL5)
.then(response => response.json())
.then(data => {cherizard=data;
    linkCherizard=loadImage(cherizard.sprites.front_default)
console.log(cherizard)
})

//API squirtle
console.log(fetch(URL6).then(response => response.json()));
fetch(URL6)
.then(response => response.json())
.then(data => {squirtle=data;
    linkSquirtle=loadImage(squirtle.sprites.front_default)
console.log(squirtle)
})

//API Wartortle
console.log(fetch(URL7).then(response => response.json()));
fetch(URL7)
.then(response => response.json())
.then(data => {wartortle=data;
    linkWartortle=loadImage(wartortle.sprites.front_default)
console.log(wartortle)
})

//API blastoise
console.log(fetch(URL8).then(response => response.json()));
fetch(URL8)
.then(response => response.json())
.then(data => {blastoise=data;
    linkBlastoise=loadImage(blastoise.sprites.front_default)
console.log(blastoise)
})



}



function draw() {
    //background(0, 50);
    
    background(0,0,100);
    newCursor();
    
    if(bulbasaur !=null){
        textSize(30)
text(bulbasaur.name,170,90,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkBulbasaur,0.1,5,500,500)}

if(ivysaur !=null){
    textSize(30)
text(ivysaur.name,170,380,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkIvysaur,40,350,380,380)}

if(venusaur !=null){
    textSize(30)
text(venusaur.name,170,680,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkVenusaur,110,720,250,250)}

if(charmander !=null){
    textSize(30)
text(charmander.name,500,90,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkCharmander,370,20,420,420)}

if(charmeleon !=null){
    textSize(30)
text(charmeleon.name,500,380,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkCharmeleon,370,340,400,400)}

if(cherizard !=null){
    textSize(30)
text(cherizard.name,500,680,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkCherizard,430,700,280,280)}

if(squirtle !=null){
    textSize(30)
text(squirtle.name,850,90,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkSquirtle,680,20,450,450)}

if(wartortle !=null){
    textSize(30)
text(wartortle.name,850,380,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkWartortle,720,340,400,400)}

if(blastoise !=null){
    textSize(30)
text(blastoise.name,850,680,300)
//text(funciona.abilities[actual].ability.name,450,90,300)

image(linkBlastoise,740,680,350,350)}


if(pantalla===1 && actual!= null){
    fill(0,0,60)
    rect(1300,90,600,900)
    fill(255)
    text(actual.name,1540,190,300)
    text('Habilidades:'+' '+actual.abilities[0].ability.name+','+' '+actual.abilities[1].ability.name,1373,638)
    text('Experiencia base:'+' '+actual.base_experience,1460,680)
    text('Tipo:'+' '+actual.types[0].type.name,1530,722)
}

if(actual===bulbasaur){
    image(linkBulbasaur,1210,50,800,800)
}

if(actual===ivysaur){
    image(linkIvysaur,1330,100,600,600)
}

if(actual===venusaur){
    image(linkVenusaur,1400,210,400,400)
}

if(actual===charmander){
    image(linkCharmander,1300,120,600,600)
}

if(actual===charmeleon){
    image(linkCharmeleon,1300,120,600,600)
}

if(actual===cherizard){
    image(linkCherizard,1400,210,400,400)
}

if(actual===squirtle){
    image(linkSquirtle,1300,100,650,650)
}

if(actual===wartortle){
    image(linkWartortle,1320,130,550,550)
}

if(actual===blastoise){
    image(linkBlastoise,1380,200,440,440)
}

    //console.log("X: " + parseInt(mouseX) + " Y: " + parseInt(mouseY));
}

function keyPressed(){
    if (keyCode === UP_ARROW){
    console.log('hola')
    fetch(URL)
    .then(response => response.json())
    .then(data => {catFact=data})}



    }

    function mousePressed() {
        // Botón iniciar sección
        if (mouseX > 141 && mouseX < 333 && mouseY > 86 && mouseY < 334) {
          pantalla = 1;
          actual=bulbasaur
          console.log('funciona')
        }

        if (mouseX > 110 && mouseX < 346 && mouseY > 387 && mouseY < 642) {
            pantalla = 1;
            actual=ivysaur
            console.log('funciona')
          }

          if (mouseX > 129 && mouseX < 337 && mouseY > 682 && mouseY < 922) {
            pantalla = 1;
            actual=venusaur
            console.log('funciona')
          }

          if (mouseX > 495 && mouseX < 673 && mouseY > 98 && mouseY < 332) {
            pantalla = 1;
            actual=charmander
            console.log('funciona')
          }

          if (mouseX > 469 && mouseX < 708 && mouseY > 389 && mouseY < 659) {
            pantalla = 1;
            actual=charmeleon
            console.log('funciona')
          }

          if (mouseX > 460 && mouseX < 670 && mouseY > 686 && mouseY < 956) {
            pantalla = 1;
            actual=cherizard
            console.log('funciona')
          }

          if (mouseX > 820 && mouseX < 990 && mouseY > 101 && mouseY < 337) {
            pantalla = 1;
            actual=squirtle
            console.log('funciona')
          }

          if (mouseX > 817 && mouseX < 1032 && mouseY > 388 && mouseY < 662) {
            pantalla = 1;
            actual=wartortle
            console.log('funciona')
          }

          if (mouseX > 789 && mouseX < 1018 && mouseY > 692 && mouseY < 967) {
            pantalla = 1;
            actual=blastoise
            console.log('funciona')
          }

        
    }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}
