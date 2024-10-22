// const { pendentes, concluidos } = require("../controllers/filaController");
const Fila = require("../models/Fila");

const ServiceFila = {
    create : async (data) => {
        try {
            
            return await Fila.create(data);

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar criar fila");
        }
    },
    getAll : async () => {
        try {
            return await Fila.find();
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar listar fila");
        }
    },
    getOne : async (id) => {
        try {

            const fila = await Fila.findById(id);

            if(!fila){
                return null
            };

            return fila
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar listar fila por id");
        }
    },
    update : async (id, data) => {
        try {

            const fila = await Fila.findById(id);
            // console.log(fila)
            if(!fila){
                return null
            };

            await fila.updateOne(data)
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar atualizar fila");
        }
    },
    delete : async (id) => {
        try {
            
            const fila = await Fila.findById(id);
            if(!fila) {
                return null
            }
            return await fila.deleteOne();
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar deletar fila");
        }
    },
    proxLista : async () => {
        try {

            // Puxando o get pendentes
            const proxLista = await ServiceFila.pendentes();
            return proxLista[0];

            console.log("Proximo da lista ", proxLista[0].id, proxLista[0].status);
            
            // await ServiceFila.update();
            
            // Retornando o proximo da lista

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar saber o proximo da fila");
        }
    },
    pendentes : async () => {
        try {
            
            const pendentes = await Fila.find().where('status').equals('Pendente')

            return pendentes

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar saber os pendentes da fila");
        }
    },
    cancelados : async () => {
        try {
            
            const cancelados = await Fila.find().where('status').equals('Cancelado')

            return cancelados

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar saber os cancelados da fila");
        }
    },
    concluidos : async () => {
        try {
            
            const concluidos = await Fila.find().where('status').equals('Concluido')

            return concluidos

        } catch (error) {
            console.error(error);
            throw new Error("Erro ao tentar saber os concluidos da fila");
        }
    },
}

module.exports = ServiceFila;