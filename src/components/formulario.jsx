import Form from "react-bootstrap/Form"
import axios from "axios"

function Formulario({funcionario, setShow}) {

    function EnvDados(event){
        event.preventDefault()
        const nome = event.target[0].value
        const cargo = event.target[1].value
        const departamento = event.target[2].value
        const salario = event.target[3].value

    }

    if (id){
        axios.put("https://apiaulas.thiagodev502.repl.co/funcionarios" + funcionario.id,
        {
            nome,
            cargo,
            departamento,
            salario
        }).then(() => {
            setShow(false)
            window.locatiom.reload()
    }).catch((error) => {
        console.log(error)
    })
    }

    return(
        <Form>
            <Form.Group>
                <Form.Label>Nome: </Form.Label>
                <Form.Control type="text" defaultValue={funcionario.nome}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Cargo:</Form.Label>
                <Form.Control type="text" defaultvalue={funcionario.cargo}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Departamento: </Form.Label>
                <Form.Control type="text" defaultvalue={funcionario.departameto}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Salário: </Form.Label>
                <Form.Control type="text" defaultvalue={funcionario.salario}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control class="btn btn primary mt-3" type="submit"></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default Formulario;