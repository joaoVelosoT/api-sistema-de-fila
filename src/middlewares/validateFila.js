const ValidateFila =  async (req,res,next) => {
    const {nome, status} = req.body;
    const tiposStatus = ['Pendente', 'Cancelado', 'Concluido'];

    // Validando se enviaram os dados corretos
    if(!nome || !status) {
        return res.status(400).json({
            msg : "Valide seus dados"
        })
    }

    // Validando se o nome tem no minimo 3 caracteres, sem contar o espaço
    if(nome.trim().length < 3){
        return res.status(400).json({
            msg : "Nome muito curto, digite no minimo 3 caracteres"
        })
    }

    // Validando se o status enviado, está correto
    if(!tiposStatus.includes(status)){
        return res.status(400).json({
            msg : "Status invalido !"
        })
    }

    return next();
}

const ValidateFilaID = async (req,res,next) => {
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            msg : "Valide seus parametros"
        })
    }


    if(id < 0){
        return res.status(400).json({
            msg : "O parametro não pode ser negativo"
        })
    }

    return next();
}

module.exports = {ValidateFila, ValidateFilaID}