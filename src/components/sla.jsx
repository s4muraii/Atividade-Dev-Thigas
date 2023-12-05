import Table from 'react-bootstrap/Table';

function Tabela() {
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
            </Table>
        </>
    ); // Added the missing closing parenthesis here
}

export default Tabela