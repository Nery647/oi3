//variáveis globais
var bola 


//pré-carregamento
function preload(){


}

//criando objetos e suas propriedades
function setup() {
  createCanvas(400,400);
  bola = createSprite (200,200,20,20);
bola.shapeColor = ("blue")



}


function draw() {
  background("white");
if(keyDown("w")){
bola.y -= 5

}

if(keyDown("s")){
  bola.y -= -5
  background("green")
  }

  if(keyDown("a")){
    bola.x -= 5
    background("lightblue")
    }

    if(keyDown("d")){
      bola.x -= -5
      background("pink")
      }









  drawSprites();
}