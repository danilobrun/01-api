const dtoToDomain = ({}) => {

    
} 

const domainToDto = ({ inscricao }) => {
    
    return {
        mensagem: 'A inscrição foi criada com sucesso!',
        inscricao: {
            id: inscricao.id,
            dataCadastro: inscricao.dataCadastro, 
            alunoNome: inscricao.alunoNome,
            status: inscricao.status
        }
    }
} 



module.exports = {
    dtoToDomain,
    domainToDto
}