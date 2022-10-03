/*  pode receber um ou mais valores
    deve retornar um unico numero
    deve gerar um erro se receber parametro nao numero
    deve retornar 0 se nao receber nenhum parametro  */
   
(function(){
    function media(){
        let total = 0
        let qtd = arguments.length
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("only numbers")
            }
            total += arguments[i]
        }
        return (total / qtd) || 0
    }
    let media1 = media(2, 4, 6)
    console.log(media1)
    
})()