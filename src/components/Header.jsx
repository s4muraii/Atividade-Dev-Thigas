import Navbar from 'react-bootstrap/Navbar'
import Conteiner from 'react-bootstrap/Container' 
import Button from 'react-bootstrap/Button'
function Header({btn}) {

    function sair(){
        localStorage.removeItem('token')
        window.location.href = '/'
    }
    
    return (
        <header>
            <Navbar variant="dark">
                <Conteiner>
                    <Navbar.Brand>
                        Minha Empresa
                    </Navbar.Brand>
                    {btn ? (
                    <div className='d-flex gap-3'>
                        <Button variant="outline-light">Adicionar</Button>
                        <Button variant="outline-light">Sair</Button>
                    </div>): ''}
                    
                </Conteiner>
            </Navbar>
        </header>
    );
}

export default Header;
