import Header from "../components/Header"; 
import Conteudo from "../components/Conteudo";
import Tabela from "../components/Tabela";

function Painel() {
    return (
        <>
        <Header btn={true} />
        <Conteudo>
            <h2>Lista de Funcionarios</h2>
            <tabela/>
        </Conteudo>
        </> 
    );
}

export default Painel;