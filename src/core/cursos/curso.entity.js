




module.exports = class CursoEntity {

    constructor(
        id,
        descricao,
        status,
        inscricoes
    ) {

        this.id = id;
        this.descricao = descricao;
        this.status = status;
        this.inscricoes = inscricoes
    }


    static build(
        id,
        descricao,
        status,
        inscricoes
    ) {

        let _inscricoes = []
        if (!inscricoes) 
            this.inscricoes = _inscricoes
        
        return new CursoEntity(
            id,
            descricao,
            status,
            inscricoes
        )

    }


}
