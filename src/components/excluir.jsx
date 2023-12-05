import Modal from "react-bootstrap"
import Button from "react-bootstrap"
import {useState} from "react"

function Excluir({id}){

    const [show, setShow] = useState(true)

    return (
        <div>
            <span></span>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <h2>Excluir</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>Deseja Realmente excluir??</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Não</Button>
                    <Button variant="primary">Sim</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Excluir