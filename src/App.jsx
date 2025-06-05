import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('enviou');
    } else {
      console.log('Nao enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label='Nome' id='nome' type='text' {...nome} />
      <Input label='Sobrenome' id='sobrenome' type='text' {...sobrenome} />
      <Input
        label='CEP'
        id='cep'
        type='text'
        placeholder='00000-000'
        {...cep}
      />
      <Input label='Email' id='email' type='email' {...email} />
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
