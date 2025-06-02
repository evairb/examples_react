import React, { useMemo, useRef, useState } from 'react';

const App = () => {
  const [contar, setContar] = useState(0);
  const valor = useMemo(() => {
    const localItem = window.localStorage.getItem('produto');
    console.log('Aconteceu o memo');
    return localItem;
  }, []);
  console.log(valor);
  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
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
