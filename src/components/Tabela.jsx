import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Excluir from './excluir';

function Tabela() {

    const [btnValue, setBtnValue] = useState('Atualizar')
    const [dados, setDados] = useState([])

    useEffect (() => {axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios").then((resposta) => {
            setDados(resposta.data)
        }).catch((erro) => {
            console.log(erro)
        })
    }, [])

    return (
        <>
        <button onClick ={()=> setBtnValue ("Atualizado")}>{btnValue}</button>
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
                            <td>
                                <Excluir id={item.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tabela