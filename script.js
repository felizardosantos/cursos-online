const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
 const usuarioInfo = document.getElementById('usuarioInfo');
 const btnSair = document.getElementById('btnSair');
 const linkLogin = document.getElementById('linkLogin');
 if (usuarioInfo && usuarioLogado) {
  usuarioInfo.textContent = `Bem-vindo, ${usuarioLogado.nome}!`;
 }
 if (usuarioLogado) {
  if (btnSair) btnSair.style.display = 'inline';
  if (linkLogin) linkLogin.style.display = 'none';
  if (btnSair) {
    btnSair.addEventListener('click', () => {
      localStorage.removeItem('usuarioLogado');
      alert('Você saiu da conta.');
      window.location.href = 'index.html';
    });
  }
 }
 const botoesComprar = document.querySelectorAll('.btn-comprar');
 botoesComprar.forEach((btn) => {
  btn.addEventListener('click', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuarioLogado) {
      alert('Você precisa estar logado para comprar!');
      window.location.href = 'login.html';
      return;
    }
    const id = btn.getAttribute('data-id');
    const nome = btn.getAttribute('data-nome');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ id, nome });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`"${nome}" adicionado ao carrinho!`);
  });
 });
 const listaCarrinho = document.getElementById('listaCarrinho');
 const finalizarCompra = document.getElementById('finalizarCompra');
 const mensagemCompra = document.getElementById('mensagemCompra');
 if (listaCarrinho) {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  if (carrinho.length === 0) {
    listaCarrinho.innerHTML = '<li>Carrinho vazio.</li>';
  } else {
    carrinho.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.nome;
      listaCarrinho.appendChild(li);
    });
  }
  finalizarCompra.addEventListener('click', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuarioLogado) {
      alert('Você precisa estar logado para finalizar a compra!');
      window.location.href = 'login.html';
      return;
    }
    localStorage.removeItem('carrinho');
    listaCarrinho.innerHTML = '';
    mensagemCompra.textContent = 'Compra finalizada com sucesso!';
  });
 }