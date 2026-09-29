let inventory = [];

const storyData = {
  start: {
    title: "Passo 1 — Decisão Inicial",
    text: "O ar frio e úmido da Serra do Mar no Paraná envolve seus ombros enquanto você ajusta a mochila e desdobra o mapa amarelado herdado de seu avô. Entre vales fechados por gigantescas araucárias e névoa densa, as anotações indicam a entrada para a lendária Cidade Perdida de Krato. O som distante de uma cachoeira ecoa pelas rochas, mas o caminho à sua frente divide-se abruptamente.",
    options: [
      { text: "Seguir pela trilha íngreme do paredão rochoso", nextNode: "no_2a" },
      { text: "Adentrar a caverna oculta pelas trepadeiras", nextNode: "no_2b" }
    ]
  },
  no_2a: {
    title: "Nó 2A — Paredão Rochoso",
    text: "Você escala a encosta exposta sob o vento gelado. No meio do caminho, encontra um antigo altar de pedra com um entalhe solar misterioso ao lado de uma ponte de cordas podres suspensa sobre um abismo profundo.",
    options: [
      { text: "Parar para decifrar as inscrições do altar usando o mapa do seu avô", nextNode: "no_3a" },
      { text: "Ignorar o altar e atravessar a ponte de cordas rapidamente", nextNode: "no_3b" }
    ]
  },
  no_2b: {
    title: "Nó 2B — Caverna Oculta",
    text: "No interior úmido da caverna, a luz do dia desaparece, substituída pelo brilho azulado de plânctons bioluminescentes nas paredes. O túnel bifurca-se junto ao som da água.",
    options: [
      { text: "Seguir pelo corredor seco com marcas de passos antigos", nextNode: "no_3c" },
      { text: "Construir uma jangada e navegar pelo canal subterrâneo", nextNode: "no_3d" }
    ]
  },
  no_3a: {
    title: "Nó 3A — O Segredo do Altar",
    text: "Ao decifrar o enigma solar, uma engrenagem oculta estala e revela uma cavidade contendo um Amuleto de Bronzite e um atalho protegido que desce por dentro da montanha.",
    options: [
      { text: "Coletar o amuleto e descer pela passagem interna da montanha", nextNode: "no_4a", item: "Amuleto de Bronzite" },
      { text: "Deixar o amuleto no altar e seguir pelo caminho externo", nextNode: "no_4b" }
    ]
  },
  no_3b: {
    title: "Nó 3B — A Ponte Suspensa",
    text: "No meio da travessia, uma corda se rompe com um estalo seco! A ponte pende perigosamente e sua mochila com suprimentos fica presa na madeira quebrada.",
    options: [
      { text: "Soltar a mochila para aliviar o peso e saltar para a borda oposta", nextNode: "no_4b" },
      { text: "Arriscar-se para soltar a mochila e tentar escalar com o equipamento", nextNode: "no_4c" }
    ]
  },
  no_3c: {
    title: "Nó 3C — O Corredor das Pegadas",
    text: "O corredor leva a uma câmara cheia de armadilhas mecânicas antigas desativadas pelo tempo. No centro, repousa o esqueleto de um antigo explorador segurando um diário metálico.",
    options: [
      { text: "Pegar o diário metálico do explorador e avançar pela porta de bronze", nextNode: "no_4a", item: "Diário Metálico" },
      { text: "Não mexer nos restos mortais e cruzar a porta de bronze diretamente", nextNode: "no_4d" }
    ]
  },
  no_3d: {
    title: "Nó 3D — O Canal Subterrâneo",
    text: "A correnteza ganha força rapidamente. À frente, o som de uma cachoeira subterrânea ressoa pelas paredes da caverna.",
    options: [
      { text: "Manobrar a jangada com força para desembarcar na margem rochosa", nextNode: "no_4c" },
      { text: "Manter-se na jangada e saltar na bacia de água na base da cachoeira", nextNode: "no_4d" }
    ]
  },
  no_4a: {
    title: "Nó 4A — O Portal do Sol",
    text: "Você se depara com os monumentais portões de ouro e basalto da Cidade Perdida de Krato. No centro do portão há uma fechadura entalhada com o símbolo do Sol.",
    options: [
      {
        text: "Tentar destravar o portal",
        nextNode: (inv) => (inv.includes("Amuleto de Bronzite") || inv.includes("Diário Metálico")) ? "final_1" : "final_2"
      }
    ]
  },
  no_4b: {
    title: "Nó 4B — A Acrópole dos Ventos",
    text: "Você alcança as ruínas superiores de Krato, mas o caminho direto está bloqueado por um desmoronamento. Sem suprimentos ou atalhos, o cansaço começa a cobrar seu preço.",
    options: [
      { text: "Arriscar uma descida livre pelas trepadeiras até o vale", nextNode: "final_3" },
      { text: "Montar um acampamento temporário e sinalizar por resgate", nextNode: "final_4" }
    ]
  },
  no_4c: {
    title: "Nó 4C — Os Abismos de Névoa",
    text: "Você chega a um mirante que domina o vale esquecido, mas uma névoa densa e tóxica começa a subir das grotas profundas ao redor.",
    options: [
      { text: "Atravessar a névoa correndo rumo às colunas visíveis da cidade", nextNode: "final_3" },
      { text: "Recuar imediatamente para uma altitude elevada", nextNode: "final_4" }
    ]
  },
  no_4d: {
    title: "Nó 4D — O Salão dos Reis Esquecidos",
    text: "Você emerge direto no salão do trono de Krato. Guardiões de pedra em tamanho real ladeiam o altar onde repousa o Grande Cristal da Terra.",
    options: [
      { text: "Tentar pegar o cristal do altar e sair rapidamente", nextNode: "final_5" },
      { text: "Curvar-se diante dos guardiões em sinal de respeito", nextNode: "final_6" }
    ]
  },
  final_1: {
    title: "FINAL 1 — O Guardião do Legado",
    text: "Os portões se abrem suavemente. Você adentra Krato intacta, revelando ao mundo uma civilização perdida recheada de conhecimento e artefatos, tornando-se o explorador mais famoso do século!",
    isEnd: true
  },
  final_2: {
    title: "FINAL 2 — O Explorador Prudente",
    text: "Os portões se trancam para sempre, mas você consegue fotografar os relevos externos e recolher amostras na entrada, retornando à civilização com provas incontestáveis para organizar uma grande expedição científica.",
    isEnd: true
  },
  final_3: {
    title: "FINAL 3 — A Lenda da Névoa",
    text: "A descida pressurosa ou a névoa tóxica fazem você se perder nos labirintos do vale. Embora tenha contemplado a imponência de Krato, você acaba preso nas ruínas, tornando-se parte do próprio folclore da Serra do Mar.",
    isEnd: true
  },
  final_4: {
    title: "FINAL 4 — Retorno e Sobrevivência",
    text: "Priorizando a vida, você recua em segurança. Apesar de não ter pisado dentro da cidade, você guarda o mapa e a localização exata para tentar novamente quando estiver mais preparado.",
    isEnd: true
  },
  final_5: {
    title: "FINAL 5 — A Maldição do Ouro",
    text: "Ao tocar no cristal sem o devido ritual, os guardiões de pedra despertam! Você consegue escapar por pouco com uma lasca da joia, ficando rico, mas perseguido por visões das ruínas pelo resto da vida.",
    isEnd: true
  },
  final_6: {
    title: "FINAL 6 — O Herdeiro de Krato",
    text: "Seu gesto de respeito faz com que o mecanismo oculto dos guardiões reconheça sua nobreza. A biblioteca secreta se abre, concedendo-lhe o saber dos antigos para proteger a cidade da ganância humana.",
    isEnd: true
  }
};

const titleEl = document.getElementById("node-title");
const textEl = document.getElementById("story-text");
const optionsEl = document.getElementById("options-container");
const inventoryListEl = document.getElementById("inventory-list");
const restartBtn = document.getElementById("restart-btn");

function renderNode(nodeKey) {
  const node = storyData[nodeKey];

  titleEl.textContent = node.title;
  textEl.textContent = node.text;
  optionsEl.innerHTML = "";

  if (node.isEnd) {
    restartBtn.classList.remove("hidden");
    return;
  }

  restartBtn.classList.add("hidden");

  node.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = option.text;

    btn.addEventListener("click", () => {
      if (option.item && !inventory.includes(option.item)) {
        inventory.push(option.item);
        updateInventoryUI();
      }

      const destination = typeof option.nextNode === "function" 
        ? option.nextNode(inventory) 
        : option.nextNode;

      renderNode(destination);
    });

    optionsEl.appendChild(btn);
  });
}

function updateInventoryUI() {
  if (inventory.length === 0) {
    inventoryListEl.textContent = "Vazio";
  } else {
    inventoryListEl.textContent = inventory.join(", ");
  }
}

restartBtn.addEventListener("click", () => {
  inventory = [];
  updateInventoryUI();
  renderNode("start");
});

renderNode("start");