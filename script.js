// Função para alternar entre seções da página
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.hidden = true);
  document.getElementById(pageId).hidden = false;
}

// Sons de feedback
const somAcerto = new Audio('palmas.mp3'); // Som de palmas (coloque o arquivo na pasta do projeto)
const somErro = new Audio('erro.mp3');     // Som de erro (coloque o arquivo na pasta do projeto)

// Função para verificar resposta e mostrar próxima pergunta se acertar
function checkAnswer(event, questionName, correctValue, nextQuizId) {
  event.preventDefault(); // Impede o envio do formulário

  const selected = document.querySelector(`input[name="${questionName}"]:checked`);
  const result = document.getElementById(`result-${questionName}`);

  // Se nenhuma opção foi marcada
  if (!selected) {
    result.textContent = "❗ Escolha uma opção.";
    result.className = "erro";
    somErro.play();
    return;
  }

  // Se a resposta estiver correta
  if (selected.value === correctValue) {
    result.textContent = "✅ Correto!";
    result.className = "acerto";
    somAcerto.play();

    // Mostra a próxima pergunta se houver
    if (nextQuizId) {
      const nextBlock = document.getElementById(nextQuizId);
      if (nextBlock) {
        nextBlock.style.display = "block";
        nextBlock.scrollIntoView({ behavior: "smooth" }); // rola até a próxima pergunta
      }
    }
  } else {
    result.textContent = "❌ Tente novamente.";
    result.className = "erro";
    somErro.play();
  }

  // Remove a classe de efeito após 1 segundo
  setTimeout(() => {
    result.classList.remove("acerto", "erro");
  }, 1000);

  function abrirTeoria(id) {
  // Oculta todos os blocos
  const blocos = document.querySelectorAll('.teoria-bloco');
  blocos.forEach(bloco => bloco.hidden = true);

  // Exibe o bloco correspondente
  const alvo = document.getElementById(id);
  if (alvo) {
    alvo.hidden = false;
    alvo.scrollIntoView({ behavior: "smooth" });
  }
}
}