const dtoToDomain = ({}) => {

    
} 

const domainToDto = ({ inscricao }) => {
    
    //todo: construir dto para operacao de constrolador

    return {
        mensagem: 'sucesso!',
        inscricao: {
            id: '1',
            dataCadastro: '2022-08-17', 
            alunoNome: 'fdsfsdfd',
            status: 'fdsfsdfdsf'
        }
    }
} 



module.exports = {
    dtoToDomain,
    domainToDto
}