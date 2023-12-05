import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState } from 'react';


function Tabela() {

    const [dados, setDados] = useState([])

    axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios").then((resposta) => {
        console.log(resposta.data)
    }).catch((erro) => {
        console.log(erro)
    })

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, key) => (
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.cargo}</td>
                            <td>{item.acao}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Tabela