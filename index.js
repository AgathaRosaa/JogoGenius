let order=[];
let clickedOrder= [];
let score=0;

//0 -verde
//1 -vermelho
//2 -amarelo
//3 -azul

const blue= document.querySelector('.blue');
const red= document.querySelector('.red');
const green= document.querySelector('.green')
const yellow= document.querySelector('.yellow')

//Criando ordem aleatória de cores
let sortOrder = () => {
    let colorOrder= Math.floor(Math.random() *4 );
    order[order.length]= colorOrder;
    clickedOrder=[];

    for(let i in order){
        let elementColor= createColorElement(order[i]);
        lightColor(elementColor,Number(i)+1);
    }
}

//  Acende a próxima cor
let lightColor= (element,number)=>{
 number= number *500;
 setTimeout(()=>{
    element.classList.add('select')
 }, number - 250);

 setTimeout(()=>{
    element.classList.remove('select')

 })
}

//Checa se os botoes clicados são os mesmo da ordem gerada no jogo
let checkOrder= () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] !== order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

//Função para o click do usuário
let click = (color)=>{
    clickedOrder[clickedOrder.length]= color;
    createColorElement(color).classList.add('select')

    setTimeout(()=>
    {
        createColorElement(color).classList.remove('select');
        checkOrder();
    },250)

}

let createColorElement= (color)=>{
    if(color==0){
        return green;
    }
    else if(color==1){
        return red;
    }
    else if(color==2){
        return yellow;
    }
    else if(color==3){
        return blue;
    }
}

//função proximo nivel
let nextLevel=()=>{
    score++;
    sortOrder()
}

//função para game over
let gameOver=()=>{
    alert(`Pontuação: ${score}\nVocê perdeu o jogo\nClique em OK para iniciar um novo jogo`);
    order=[];
    clickedOrder=[];

    playGame();
}

//função de inicio do jogo
let playGame=()=>{
    alert(`Bem-vindo ao Genius! Iniciando novo jogo!`)
    score=0;
    
    nextLevel();
}

//eventos de clique para jogo
green.onclick=()=>click(0);
red.onclick=()=>click(1);
yellow.onclick=()=>click(2);
blue.onclick=()=>click(3);

//Inicio do jogo
playGame();


