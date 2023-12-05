import Form from "react-bootstrap/Form";

function Formulario() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
        </Form>
    );
}

export default Formulario;