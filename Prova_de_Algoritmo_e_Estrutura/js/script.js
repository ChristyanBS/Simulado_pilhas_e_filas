const questoes = [
  {
    pergunta: `1) Em um jogo digital, é comum a exibição de uma listagem contendo informações sobre os jogadores que obtiveram as N maiores pontuações, sendo normalmente N um número menor que a quantidade total de jogadores com pontuação registrada no jogo (Galeria da Fama). Essa listagem é ordenada, em ordem decrescente de pontuação obtida. A estrutura de dados mais indicada para montar a Galeria da Fama é:`,
    correta: "C",
    opcoes: ["A) Pilha", "B) Dicionário", "C) Fila de prioridade", "D) Lista duplamente encadeada"],
    justificativa: "A fila de prioridade é ideal para manter elementos ordenados por pontuação, permitindo recuperar facilmente os maiores valores."
  },
  {
    pergunta: `2) Em estruturas de dados, a pilha é uma estrutura do tipo linear em que as operações de inserção e remoção ocorrem em apenas uma extremidade, chamada topo. Esse comportamento é comumente comparado ao de uma pilha de pratos, onde o último prato colocado é o primeiro a ser retirado. Qual das opções abaixo representa corretamente essa característica?`,
    correta: "A",
    opcoes: ["A) LIFO – Last In, First Out", "B) FIFO – First In, First Out", "C) FISO – First In, Stay Out", "D) LOFI – Last Out, First In", "E) LILO – Last In, Last Out"],
    justificativa: "A pilha opera no princípio LIFO, ou seja, o último elemento inserido é o primeiro a ser removido, como uma pilha de pratos."
  },
  {
    pergunta: `3) Segundo Tenenbaum, Langsam e Augenstein (2007), ao declarar a estrutura de uma pilha, quais são os dois componentes fundamentais que ela deve conter?`,
    correta: "C",
    opcoes: ["A) Um valor inteiro para indicar a base da pilha, e uma string para armazenar os dados", "B) Um ponteiro para o topo da pilha, e uma variável booleana para verificar se está cheia", "C) Um ponteiro que armazena o endereçamento inicial da pilha, e um valor inteiro que indica a posição do topo da pilha", "D) Um vetor fixo de inteiros para armazenar dados, e um contador de elementos inseridos"],
    justificativa: "Esses componentes são essenciais para controlar onde a pilha começa e onde seu topo está, o que garante o correto funcionamento."
  },
  {
    pergunta: `4) Para uma estrutura de dados do tipo fila com as funções adicionar(valor), remover() e procurar(índice), assuma uma fila P com os seguintes valores iniciais {1, 6, 9, 12, 15}, em que o elemento mais à esquerda da fila é acessado com índice zero (0). A partir desse contexto, são realizadas as seguintes operações em sequência:\n1. P.remover()\n2. P.adicionar(8)\n3. P.adicionar(3)\n4. P.remover()\nApós a execução da operação 4, a operação P.procurar(3) é executada. O valor retornado é:`,
    correta: "A",
    opcoes: ["A) 8", "B) 4", "C) 1", "D) 12", "E) 6"],
    justificativa: "Após as operações, a fila será {9,12,15,8,3}. Procurar índice 3 retorna o valor 8."
  },
  {
    pergunta: `5) Em C++, considerando a implementação de uma fila com vetor e variáveis de controle (frente e fim), qual das alternativas representa corretamente a lógica de remoção de um elemento da fila?`,
    correta: "B",
    opcoes: ["A) Se o final da fila (fim) for diferente de -1, apenas decrementa o valor de fim.", "B) Se a frente for igual ao fim, a fila está vazia; caso contrário, incrementa-se o ponteiro frente para remover o elemento da frente da fila.", "C) Se a frente for diferente do fim, decrementa-se o ponteiro frente para remover o elemento da frente da fila.", "D) Enquanto a frente for menor que o fim, iguala-se a frente ao fim para remover todos os elementos da fila."],
    justificativa: "A lógica correta para remoção em fila com vetor é incrementar o ponteiro da frente, a menos que fila esteja vazia."
  },
  {
    pergunta: `6) Com base na implementação abaixo, qual alternativa descreve corretamente os elementos da estrutura de uma pilha em C?

struct Pilha {
    int topo;
    int capacidade;
    float *proxElem;
};
struct Pilha minhaPilha;`,
    correta: "B",
    opcoes: [
      "A) A estrutura contém o número total de elementos, o endereço do topo da pilha e um vetor fixo de inteiros.",
      "B) A estrutura possui um campo para o topo, a capacidade máxima da pilha e um ponteiro para os elementos armazenados.",
      "C) A estrutura possui apenas a capacidade da pilha e um vetor de floats, sem necessidade de armazenar o topo.",
      "D) A estrutura define uma pilha genérica sem tipos definidos para os dados ou limite de capacidade."
    ],
    justificativa: "A estrutura inclui um índice topo, capacidade máxima, e ponteiro para área dinâmica dos elementos."
  },
  {
    pergunta: `7) Em uma aula, o professor Lucas pediu aos alunos que organizassem tarefas simulando uma fila, onde a primeira tarefa a entrar seria a primeira a ser realizada. Qual a principal característica desse tipo de estrutura?`,
    correta: "C",
    opcoes: [
      "A) Permitir acesso direto e aleatório a qualquer elemento armazenado",
      "B) Ordenar os dados de forma que o último elemento inserido seja o primeiro a sair",
      "C) Garantir que os elementos sejam processados na ordem em que foram acrescentados",
      "D) Organizar os dados em uma hierarquia, onde elementos podem ter múltiplos filhos",
      "E) Priorizar os elementos com base em sua importância, não na ordem de inserção"
    ],
    justificativa: "Uma fila processa elementos na ordem em que são inseridos, respeitando a sequência temporal."
  },
  {
    pergunta: `8) Em estrutura de dados, como é possível implementar uma pilha usando duas filas?`,
    correta: "B",
    opcoes: [
      "A) Concatenando os elementos da primeira fila com os da segunda fila para formar uma pilha",
      "B) Inserindo elementos em uma fila e removendo-os da outra intercaladamente",
      "C) Inserindo e removendo elementos da mesma fila",
      "D) Inserindo elementos em ambas as filas simultaneamente",
      "E) Essa implementação não é possível, uma vez que as estruturas possuem propriedades conflitantes"
    ],
    justificativa: "A estratégia usa duas filas, alternando inserções e remoções para replicar o comportamento da pilha."
  },
  {
    pergunta: `9) Qual das alternativas descreve corretamente o comportamento de uma fila comum?`,
    correta: "C",
    opcoes: [
      "A) Os elementos são removidos aleatoriamente",
      "B) O último elemento inserido é o primeiro a ser removido",
      "C) O primeiro elemento inserido é o primeiro a ser removido",
      "D) Os elementos são inseridos e removidos apenas do topo"
    ],
    justificativa: "Fila segue o princípio FIFO, onde o primeiro elemento inserido é o primeiro removido."
  },
  {
    pergunta: `10) Qual operação é usada para inserir um novo elemento no final de uma fila?`,
    correta: "B",
    opcoes: [
      "A) dequeue",
      "B) enqueue",
      "C) push",
      "D) pop"
    ],
    justificativa: "A operação 'enqueue' adiciona elementos ao fim da fila."
  },
  {
    pergunta: `11) Qual operação permite remover o elemento do topo de uma pilha?`,
    correta: "D",
    opcoes: [
      "A) enqueue",
      "B) dequeue",
      "C) push",
      "D) pop"
    ],
    justificativa: "A operação 'pop' remove o elemento do topo da pilha."
  },
  {
    pergunta: `12) Em uma pilha, qual estrutura de acesso é correta?`,
    correta: "C",
    opcoes: [
      "A) FIFO – First In, First Out",
      "B) FILO – First In, Last Out",
      "C) LIFO – Last In, First Out",
      "D) LOFI – Last Out, First In"
    ],
    justificativa: "Pilha opera de forma LIFO, ou seja, último a entrar é o primeiro a sair."
  },
  {
    pergunta: `13) No desenvolvimento de um software, Gabriel precisa de uma estrutura onde o último item adicionado seja o primeiro a ser extraído. Qual estrutura ele deve utilizar?`,
    correta: "C",
    opcoes: [
      "A) Fila",
      "B) Lista",
      "C) Pilha",
      "D) Árvore",
      "E) Lista duplamente encadeada"
    ],
    justificativa: "Pilha é a estrutura que permite extrair primeiro o último item adicionado."
  },
  {
    pergunta: `14) Qual estrutura segue o princípio LIFO (Last In, First Out)?`,
    correta: "B",
    opcoes: [
      "A) Árvore",
      "B) Pilha",
      "C) Fila",
      "D) Struct"
    ],
    justificativa: "Pilha é a estrutura que segue LIFO."
  },
  {
    pergunta: `15) Qual estrutura de dados possui o seguinte comportamento: o primeiro item inserido será o primeiro item a ser retirado?`,
    correta: "A",
    opcoes: [
      "A) Fila",
      "B) Pilha",
      "C) Matriz",
      "D) Torre",
      "E) Pasta"
    ],
    justificativa: "Fila segue o princípio FIFO, primeiro a entrar, primeiro a sair."
  },
  {
    pergunta: `17) Em uma pilha (stack) implementada em C, qual é a ordem de inserção e remoção dos elementos?`,
    correta: "B",
    opcoes: ["A) FIFO (First In, First Out)", "B) LIFO (Last In, First Out)", "C) Ordenado", "D) Aleatório", "E) FIFO/LIFO"],
    justificativa: "Pilha funciona como LIFO: o último elemento inserido é o primeiro removido."
  },
  {
    pergunta: `18) Qual a estrutura de dados que segue o princípio FIFO (First In, First Out)?`,
    correta: "C",
    opcoes: ["A) Pilha", "B) Árvore", "C) Fila", "D) Lista Encadeada", "E) Hash"],
    justificativa: "Fila é a estrutura que segue FIFO."
  },
  {
    pergunta: `19) Assinale qual operação faz sentido para a estrutura fila (FIFO):`,
    correta: "C",
    opcoes: ["A) Inserir um elemento no topo e removê-lo imediatamente", "B) Remover o último elemento inserido", "C) Inserir elementos no final e remover do início", "D) Navegar aleatoriamente na estrutura", "E) Remover elementos em ordem inversa"],
    justificativa: "Fila insere elementos no final e remove no início, mantendo FIFO."
  },
  {
    pergunta: `20) Qual das seguintes afirmações sobre pilhas (stacks) é FALSA?`,
    correta: "C",
    opcoes: ["A) Uma pilha segue o princípio LIFO (Last-In, First-Out).", "B) A operação push adiciona um elemento ao topo da pilha.", "C) A operação pop remove um elemento da base da pilha.", "D) A operação peek (ou top) retorna o elemento no topo da pilha sem removê-lo."],
    justificativa: "Pop remove do topo da pilha, não da base."
  },
  {
    pergunta: `21) Qual é a ordem correta de acesso aos elementos em uma fila?`,
    correta: "B",
    opcoes: ["A) LIFO (Last In, First Out)", "B) FIFO (First In, First Out)", "C) FILO (First In, Last Out)", "D) LILO (Last In, Last Out)"],
    justificativa: "Fila mantém a ordem FIFO."
  },
  {
    pergunta: `22) Qual função em C é usada para REMOVER um elemento de uma pilha implementada com array?`,
    correta: "B",
    opcoes: ["A) push()", "B) pop()", "C) enqueue()", "D) dequeue()", "E) top()"],
    justificativa: "Pop remove o elemento do topo da pilha."
  },
  {
    pergunta: `23) Um sistema de controle de processos em um computador utiliza uma fila para gerenciar as tarefas a serem executadas. Qual estrutura está sendo utilizada nesse contexto?`,
    correta: "C",
    opcoes: ["A) Árvore", "B) Lista duplamente encadeada", "C) Fila", "D) Pilha", "E) Vetor ordenado"],
    justificativa: "Fila gerencia processos garantindo execução na ordem de chegada."
  },
  {
    pergunta: `24) Você deve implementar duas pilhas em um único array A[1…n] de modo que nenhuma das pilhas transborde, a menos que o número total de elementos nas duas pilhas juntas seja n. Qual a estratégia correta?`,
    correta: "A",
    opcoes: ["A) Usar dois ponteiros, um começando no início e outro no fim do array.", "B) Usar um ponteiro no início para ambas as pilhas.", "C) Dividir o array em duas partes iguais e mover conforme necessário.", "D) Usar array circular e garantir inserção onde houver mais espaço.", "E) Atribuir uma pilha a cada metade com tamanho dinâmico."],
    justificativa: "Dois ponteiros se movem nas extremidades opostas, evitando desperdício de espaço."
  },
  {
    pergunta: `25) Dada a função em C que remove o topo da pilha, mas não libera memória, o que ocorre com o programa após várias chamadas à função pop()?`,
    correta: "C",
    opcoes: ["A) Nada, pois o ponteiro antigo é sobrescrito.", "B) Há um estouro de pilha.", "C) O programa apresenta vazamento de memória.", "D) O código causa uma falha de segmentação.", "E) O compilador corrige o erro automaticamente."],
    justificativa: "Se a memória não é liberada ao remover elementos, ocorre vazamento de memória."
  },
  {
    pergunta: `26) Estruturas de dados definem como dados são armazenados e manipulados. A estrutura que segue o princípio LIFO é a:`,
    correta: "B",
    opcoes: ["A) Árvore", "B) Pilha", "C) Fila", "D) Struct", "E) Hash"],
    justificativa: "Pilha opera no modelo LIFO."
  },
  {
    pergunta: `27) Sobre estruturas de dados básicas, assinale com V as verdadeiras e com F as falsas:\n( ) Listas lineares são estruturas adequadas a aplicações em que não se pode prever a demanda por memória.\n( ) Filas são listas lineares em que, geralmente, todos os acessos são feitos em apenas um extremo.\n( ) Pilhas são listas lineares em que os primeiros elementos incluídos são os primeiros retirados.`,
    correta: "B",
    opcoes: ["A) V, V, V", "B) V, V, F", "C) V, F, F", "D) F, F, V"],
    justificativa: "As duas primeiras afirmativas são verdadeiras, enquanto que a última sobre pilhas está incorreta."
  },
  {
    pergunta: `28) Qual estrutura garante a ordem correta de exibição de pacotes A, B, C, D, E recebidos fora de ordem numa aplicação de streaming?`,
    correta: "B",
    opcoes: ["A) Pilha", "B) Fila", "C) Árvore Binária", "D) Dicionário", "E) Grafo"],
    justificativa: "Fila garante ordem correta na entrega de pacotes, mesmo que recebidos fora de ordem."
  },
  {
    pergunta: `29) Em relação às estruturas de dados, o que é verdade sobre pilhas em Java?`,
    correta: "D",
    opcoes: ["A) São apropriadas apenas para números inteiros.", "B) Permitem acesso direto por índice.", "C) O método pop() insere elementos no topo.", "D) O último elemento inserido é o primeiro a sair.", "E) A pilha segue o modelo FIFO."],
    justificativa: "Em Java, a pilha é LIFO, o último elemento inserido é o primeiro a sair."
  },
  {
    pergunta: `30) Quais das estruturas abaixo são tipos abstratos de dados? \nContainer \nConjunto \nPilha \nLista \nFila`,
    correta: "E",
    opcoes: ["A) Apenas 1 e 2", "B) Apenas 4 e 5", "C) Apenas 3, 4 e 5", "D) Apenas 2, 3, 4 e 5", "E) Todos os itens acima"],
    justificativa: "Container, Conjunto, Pilha, Lista e Fila são todos tipos abstratos de dados importantes."
  },
  {
    pergunta: `31) Um desenvolvedor implementa um sistema de buffering. Para garantir a ordem correta dos dados A, B, C, D, E, que estrutura ele deve usar?`,
    correta: "B",
    opcoes: ["A) Pilha", "B) Fila", "C) Árvore", "D) Lista encadeada", "E) Matriz"],
    justificativa: "Fila mantém a ordem correta para buffers, respeitando FIFO."
  },
  {
    pergunta: `32) Observe as operações abaixo em uma fila:\nenfileirar(5);\nenfileirar(10);\nenfileirar(15);\ndesenfileirar();\nenfileirar(20);\nint x = desenfileirar();\nQual será o valor de x ao final?`,
    correta: "B",
    opcoes: ["A) 5", "B) 10", "C) 15", "D) 20", "E) Indefinido"],
    justificativa: "Após desenfileirar o primeiro valor (5), o próximo removido é 10."
  },
  {
    pergunta: `33) Estruturas de dados são fundamentais na ciência da computação para organizar e processar informações. Qual afirmação sobre pilhas está correta?`,
    correta: "D",
    opcoes: ["A) São apropriadas apenas para armazenar números inteiros.", "B) Permitem acesso direto pelo índice.", "C) O método pop() insere elementos.", "D) São estruturas LIFO.", "E) São estruturas FIFO."],
    justificativa: "Pilhas operam no modelo LIFO, último a entrar é o primeiro a sair."
  },
  {
    pergunta: `34) Uma escola implementa tarefas com diferentes prioridades:\nTarefas urgentes usam estrutura onde a última inserida é resolvida primeiro.\nTarefas comuns são resolvidas na ordem de chegada.\nQual estrutura corresponde a cada tipo?`,
    correta: "B",
    opcoes: ["A) Urgentes em fila (FIFO) e comuns em pilha (LIFO).", "B) Urgentes em pilha (LIFO) e comuns em fila (FIFO).", "C) Ambas em fila com prioridade.", "D) Ambas em pilha, mas urgentes têm precedência.", "E) Urgentes em fila e comuns em estrutura híbrida."],
    justificativa: "Urgentes seguem LIFO (pilha); tarefas comuns seguem FIFO (fila)."
  }
];

const container = document.getElementById("questoes-container");
const resultado = document.getElementById("resultado");
const corrigirBtn = document.getElementById("corrigir-btn");

// Função para resetar todas opções e justificativas (útil ao corrigir de novo)
function resetarCorVisual() {
  for (const card of container.children) {
    // labels
    const labels = card.querySelectorAll('label');
    labels.forEach(label => {
      label.classList.remove('correct', 'incorrect');
    });
    // justificativa
    const just = card.querySelector('.justificativa');
    if (just) {
      just.remove();
    }
  }
  resultado.textContent = "";
}

// Cria cada questão no DOM
questoes.forEach((q, i) => {
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("role", "listitem");
  card.setAttribute("aria-labelledby", `pergunta-${i}`);

  const perguntaP = document.createElement("p");
  perguntaP.className = "pergunta";
  perguntaP.id = `pergunta-${i}`;
  perguntaP.textContent = q.pergunta;
  card.appendChild(perguntaP);

  q.opcoes.forEach(op => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${i}`;
    input.value = op[0];  // Letra da resposta A, B, C ...
    input.setAttribute("aria-describedby", `pergunta-${i}`);

    // Evento para atualizar cores imediatamente ao selecionar
    input.addEventListener("change", () => {
      // Limpa outros siblings
      const siblings = card.querySelectorAll('label');
      siblings.forEach(sib => sib.classList.remove("correct", "incorrect"));
      // Remove justificativa se existente
      const just = card.querySelector('.justificativa');
      if (just) just.remove();

      // Verifica se resposta está correta
      if (input.value === q.correta) {
        label.classList.add("correct");
      } else {
        label.classList.add("incorrect");
      }
    });

    label.appendChild(input);
    label.append(` ${op}`);
    card.appendChild(label);
  });

  container.appendChild(card);
});

// Botão corrigir - exibe justificativas e resultado total com destaque certo/errado
corrigirBtn.addEventListener("click", () => {
  resetarCorVisual();

  let acertos = 0;

  questoes.forEach((q, i) => {
    const card = container.children[i];
    const selecionada = card.querySelector(`input[name=q${i}]:checked`);

    if (selecionada) {
      const letter = selecionada.value;
      const labels = card.querySelectorAll("label");
      labels.forEach(label => {
        // Se label tem input com valor igual à selecionada, marque correto/errado conforme resposta
        const inp = label.querySelector("input");
        if (inp.value === letter) {
          if (letter === q.correta) {
            label.classList.add("correct");
            acertos++;
          } else {
            label.classList.add("incorrect");
          }
        }
      });

      // Adicionar justificativa só após responder
      const justificativaEl = document.createElement("p");
      justificativaEl.className = "justificativa";
      justificativaEl.textContent = `Justificativa: ${q.justificativa}`;

      // Estilo justificativa conforme acerto ou erro
      if (letter === q.correta) {
        justificativaEl.classList.add("correct");
      } else {
        justificativaEl.classList.add("incorrect");
      }
      card.appendChild(justificativaEl);
    }
  });

  if (acertos === questoes.length) {
  resultado.style.color = "#16a34a"; // verde
  resultado.textContent = `Parabéns! Você acertou todas as ${acertos} questões.`;
  showFireworks();
} else {
  resultado.style.color = "#b91c1c"; // vermelho escuro
  resultado.textContent = `Você acertou ${acertos} de ${questoes.length} questões. Continue praticando!`;
}



});

function showFireworks() {
  const container = document.getElementById('fireworks-container');
  container.style.display = 'block';

  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const fireworks = [];
  const particles = [];
  const hue = 120;

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  class Firework {
    constructor(sx, sy, tx, ty) {
      this.x = sx;
      this.y = sy;
      this.sx = sx;
      this.sy = sy;
      this.tx = tx;
      this.ty = ty;
      this.distanceToTarget = Math.hypot(tx - sx, ty - sy);
      this.distanceTraveled = 0;
      this.coordinates = [];
      this.coordinateCount = 3;
      while (this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }
      this.angle = Math.atan2(ty - sy, tx - sx);
      this.speed = 4;
      this.acceleration = 1.05;
      this.brightness = random(50, 70);
      this.targetRadius = 1;
    }
    update(index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);
      if (this.targetRadius < 8) this.targetRadius += 0.3;
      this.speed *= this.acceleration;
      const vx = Math.cos(this.angle) * this.speed;
      const vy = Math.sin(this.angle) * this.speed;
      this.distanceTraveled = Math.hypot(this.x + vx - this.sx, this.y + vy - this.sy);

      if (this.distanceTraveled >= this.distanceToTarget) {
        createParticles(this.tx, this.ty);
        fireworks.splice(index, 1);
      } else {
        this.x += vx;
        this.y += vy;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.coordinates = [];
      this.coordinateCount = 5;
      while (this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }
      this.angle = random(0, Math.PI * 2);
      this.speed = random(1, 10);
      this.friction = 0.95;
      this.gravity = 0.7;
      this.hue = random(hue - 50, hue + 50);
      this.brightness = random(50, 80);
      this.alpha = 1;
      this.decay = random(0.015, 0.03);
    }
    update(index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);
      this.speed *= this.friction;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + this.gravity;
      this.alpha -= this.decay;
      if (this.alpha <= 0) {
        particles.splice(index, 1);
      }
    }
    draw() {
      ctx.beginPath();
      ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
      ctx.stroke();
    }
  }

  function createParticles(x, y) {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(x, y));
    }
  }

  function loop() {
    requestAnimationFrame(loop);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'lighter';

    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].draw();
      fireworks[i].update(i);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].draw();
      particles[i].update(i);
    }

    // Lança fogos aleatórios
    if (Math.random() < 0.05) {
      const sx = canvas.width / 2;
      const sy = canvas.height;
      const tx = random(0, canvas.width);
      const ty = random(0, canvas.height / 2);
      fireworks.push(new Firework(sx, sy, tx, ty));
    }
  }

  loop();

  // Esconde fogos após 6 segundos
  setTimeout(() => {
    container.style.display = 'none';
    container.innerHTML = '';
  }, 6000);
}
