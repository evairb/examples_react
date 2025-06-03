import React from 'react';

const App = () => {
  const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'Cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Numero',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    },
  ];

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).then(response => {
      setResponse(response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, type, label }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response && response.ok && <p>Formulario Enviado</p>}
      <button>Enviar</button>
    </form>
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
