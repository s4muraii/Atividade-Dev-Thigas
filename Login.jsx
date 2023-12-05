import React from 'react';
import Conteudo from '../components/Conteudo';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  function autenticar(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    if (email === 'admin@admin' && password === '123') {
      location.href = '/painel';
    }
  }

  return (
    <>
      <Header btn={false} />
      <Conteudo>
        <h2>Login</h2>
        <Form onSubmit={autenticar}>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Digite seu Email' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Senha</Form.Label>
            <Form.Control type='password' required />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Button type='submit'>Entrar</Button>
          </Form.Group>
        </Form>
      </Conteudo>
    </>
  );
}

export default Login;