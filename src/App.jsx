import React, { useRef, useState } from 'react';

const App = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef;
  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');
    setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
