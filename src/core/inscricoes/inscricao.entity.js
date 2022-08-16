




module.exports = class InscricaoEntity {

    constructor(
        id,
        idCurso,
        dataCadastro,
        dataCancelamento,
        alunoEmail,
        alunoNome,
        status
    ) {
        this.id = id;
        this.idCurso = idCurso;
        this.dataCadastro = dataCadastro;
        this.dataCancelamento = dataCancelamento;
        this.alunoEmail = alunoEmail;
        this.alunoNome = alunoNome;
        this.status = status;
    }   


    static build(
        id,
        idCurso,
        dataCadastro,
        dataCancelamento,
        alunoEmail,
        alunoNome,
    ) {


        let status = 'ativo';
        if (dataCancelamento && dataCancelamento !== ' ' && dataCancelamento !== '') {
            status = 'inativo';
        }

        return new InscricaoEntity(
            id,
            idCurso,
            dataCadastro,
            dataCancelamento,
            alunoEmail,
            alunoNome,
            status
        )

    }


}
