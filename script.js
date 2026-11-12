// Evolução opcional: atualização automática do ano no rodapé.
// Não são necessários scripts para a navegação por âncoras HTML.
console.info('Portfólio carregado - verificação local.');

document.addEventListener('DOMContentLoaded', () => {
    const rodape = document.querySelector('footer p');
    if (rodape) {
      rodape.textContent = `Portfólio acadêmico - ${new Date().getFullYear()}`;
    }
  });