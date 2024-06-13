export default class Cliente{
    constructor(id, nome, cnpj){
        this.id = id
        this.nome = nome
        this.cnpj = cnpj
        this.ativo = true
        this.observacao = "cadastrar uma tarefa"
    }
    
    estaAtivo(){
        return this.ativo
    }
}