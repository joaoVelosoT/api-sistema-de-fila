const ServiceFila = require("../services/serviceFila");


const FilaController = {
    create : async (req,res) => {
        try {

            const data = {
                nome : req.body.nome,
                status : req.body.status
            }  

            const fila = await ServiceFila.create(data);

            return res.status(200).json({
                msg : "Usuario criado com sucesso",
                fila
            })
                     
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    getAll : async (req,res) => {
        try {
            const fila = await ServiceFila.getAll();

            return res.status(200).json({
                msg : "Todos que estão na fila",
                fila
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    getOne : async (req,res) => {
        try {
            
            const {id} = req.params;

            const fila = await ServiceFila.getOne(id);

            if(!fila) {
                return res.status(404).json({
                    msg : "Usuario não encontrado !"
                })
            }

            return res.status(200).json({
                fila
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    update: async (req,res) => {
        try {
            
            const {id} = req.params;

            const data = {
                nome : req.body.nome,
                status : req.body.status
            }  
            const fila = await ServiceFila.update(id, data);

            if(null) {
                return res.status(404).json({
                    msg : "Usuario não encontrado !"
                })
            }

            return res.status(200).json({
                msg : "Usuario atualizado com sucesso !",
                fila
            })


        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    delete : async (req,res) => {
        try {
            const {id} = req.params;

            const fila = await ServiceFila.delete(id);

            if(!fila) {
                return res.status(404).json({
                    msg : "Usuario não encontrado !"
                })
            }

            return res.status(200).json({
                msg : "Usuario deletado com sucesso !",
                fila
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    proxLista : async (req,res) => {
        try {
            
            const proxLista = await ServiceFila.proxLista();

            return res.status(200).json({
                msg: "Proximo da lista",
                proxLista
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    pendentes : async (req,res) => {
        try {
            
            const pendentes = await ServiceFila.pendentes();

            return res.status(200).json({
                msg: "Pendentes da lista",
                pendentes
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    cancelados : async (req,res) => {
        try {
            
            const cancelados = await ServiceFila.cancelados();

            return res.status(200).json({
                msg: "Cancelados",
                cancelados
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    concluidos : async (req,res) => {
        try {
            
            const concluidos = await ServiceFila.concluidos();

            return res.status(200).json({
                msg: "Concluidos",
                concluidos
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    }
}

module.exports = FilaController;