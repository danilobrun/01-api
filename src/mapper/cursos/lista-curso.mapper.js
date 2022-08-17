




const dtoToDomain = ({}) => {

} 


const domainToDto = (listaCursos) => {
    
    
    return {

        total: listaCursos.length,
        cursos: [
            ... listaCursos.map(item => {
                return {
                    id: item.id,
                    descricao: item.descricao,
                    status: item.status
                }
            })
        ]
    }
} 


module.exports = {
    dtoToDomain,
    domainToDto
}