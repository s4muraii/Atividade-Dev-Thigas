import Conteudo from '../components/Conteudo';
import Header from '../components/Header';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Login() {
  return (
    <>
    <Header btn={false}/>
    <Conteudo>
        <h2>Login</h2>
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Digite seu Email' required/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Senha</Form.Label>
                <Form.Control type='password' required>
            </Form.Control>
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