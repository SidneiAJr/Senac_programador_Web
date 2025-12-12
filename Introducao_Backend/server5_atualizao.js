
// Atualiza as informações de usuario:
app.put('/at/:id',(req,res)=>{
    const {id} = req.params
    const {nome,email} = req.body
    const atualizao = "Update usuarios set nome = ?,email = ? where id = ?";
     connection.query(atualizao,(erro,resultado)=>{
         if(erro){
          return res.status(500).send("Erro | Leitura nâo Realizada")
         }
         res.status(200).json(resultado)
    })
})
