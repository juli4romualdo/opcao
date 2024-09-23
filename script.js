//Variável para armazenar o botão ativo//
let botaoAtivo = null;
//Função que exibe a imagem e altera o texto com base no botão clicado//
function exibirImagem(opcao, botao) {
    //Referencia para a imagem e o texto html//
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");

    //Estrutura de decisão simples para alterar a imagem e o texto//
    if (opcao ==='sol') {
        imagem.src ="sol.png"; //url da imagem do sol
        imagem.style.display = "block";//Exibe a imagem
        texto.innerText = "Você escolheu o Sol! Uma estrela que ilumina o nosso dia!";
    }else if (opcao === 'lua'){
            imagem.src ="lua.png"; //url da imagem da lua
            imagem.style.display = "block";//Exibe a imagem
            texto.innerText = "Você escolheu a Lua! Ela brilhou durante a noite!";
        }else if (opcao === 'estrela'){
            imagem.src ="estrela.png"; //url da imagem da estrela
            imagem.style.display = "block";//Exibe a imagem
            texto.innerText = "Você escolheu uma Estrela! Um dos potos brilhantes no céu noturno.";
        }else if (opcao === 'jupiter'){
            imagem.src ="jupiter.png"; //url da imagem da estrela
            imagem.style.display = "block";//Exibe a imagem
            texto.innerText = "Você escolheu o Planeta Júpiter! É o maior planeta do Sistema Solar.";
        }else if (opcao === 'cometa'){
            imagem.src ="cometa.png"; //url da imagem da estrela
            imagem.style.display = "block";//Exibe a imagem
            texto.innerText = "Você escolheu um Cometa! É uma chuva de meteoros.";
        }else {
            //Caso a opcao nao seja válida, uma mensagem de erro é exibida
            imagem.style.display = "none"; //escolheu a imagem
            texto.innerText = "Opçaão inválida. Escolha entre Sol, Lua, Estrela, Júpiter ou Cometa.";

    }
    // Alterar a cor do botao clicado
    if (botaoAtivo){
        botaoAtivo.classlist.remove('active'); //Remove a classe do botao anterior

    }
    botao.classlist.add('active'); //adicionar a classe ao botao arual
    botaoAtivo = botao;//atualiza o botao
} 