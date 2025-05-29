import React, { useRef, useState } from 'react';

const App = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = useRef();

  function handleClick() {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.currentfocus();
  }

  return (
    <div>
      <ul>
        {comentarios.map(comentario => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type='text'
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
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
