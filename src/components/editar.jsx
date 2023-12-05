import Modal from "react-bootstrap"
import Button from "react-bootstrap"

function Editar({id}){
    return (
        <div>
            <span></span>
            <Modal show={true} />
                <Modal.Header>
                    <h2>Editar</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>Deseja Realmente editar??</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Não</Button>
                    <Button variant="primary">Sim</Button>
                </Modal.Footer>
        </div>
    )
}

export default Editar