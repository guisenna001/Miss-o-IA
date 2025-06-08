const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda em um mundo onde todas as decisões são tomadas por algoritmos. Qual sua reação inicial?",
        alternativas: [
            {
                texto: "Me preocupo com a falta de controle humano.",
                afirmacao: "Seu senso crítico é forte e você busca formas de manter a ética humana nas decisões."
            },
            {
                texto: "Vejo como uma forma de tornar tudo mais eficiente.",
                afirmacao: "Você acredita no potencial da tecnologia para otimizar a sociedade."
            }
        ]
    },
    {
        enunciado: "Uma amiga lhe pede ajuda para aprender a programar, mas você nunca programou. O que você faz?",
        alternativas: [
            {
                texto: "Aceito o desafio e começo a aprender junto com ela.",
                afirmacao: "Você demonstra espírito colaborativo e curiosidade para aprender algo novo."
            },
            {
                texto: "Indico um curso online e fico de fora.",
                afirmacao: "Você prefere apoiar à distância e valoriza métodos autodidatas."
            }
        ]
    },
    {
        enunciado: "Durante um evento, você descobre uma IA capaz de compor músicas. Qual a sua atitude?",
        alternativas: [
            {
                texto: "Uso para criar uma trilha sonora para meus vídeos.",
                afirmacao: "Você vê a IA como ferramenta criativa e impulsiona suas ideias com ela."
            },
            {
                texto: "Prefiro músicas feitas por humanos, com emoção real.",
                afirmacao: "Você valoriza a expressão artística humana e a conexão emocional nas obras."
            }
        ]
    },
    {
        enunciado: "Na sua escola, propõem o uso de IA para corrigir redações automaticamente. Você é:",
        alternativas: [
            {
                texto: "A favor, pois agiliza o processo.",
                afirmacao: "Você acredita que a automação pode tornar o aprendizado mais eficiente."
            },
            {
                texto: "Contra, pois teme julgamentos injustos.",
                afirmacao: "Você defende a avaliação humana como mais justa e sensível aos contextos."
            }
        ]
    },
    {
        enunciado: "Surge um projeto para criar um robô que cuida de idosos. O que você propõe?",
        alternativas: [
            {
                texto: "Focar na empatia e conversação do robô.",
                afirmacao: "Você entende que o bem-estar emocional é tão importante quanto o físico."
            },
            {
                texto: "Focar na segurança e funções práticas.",
                afirmacao: "Você prioriza a eficiência do cuidado, evitando riscos e falhas."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada no mundo da tecnologia:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
