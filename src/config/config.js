const mongoose = require("mongoose");
require('dotenv').config();

// const moduleName = require('module-name');

const connect = async () => {
  try {
    const HOST_DB = process.env.HOST_DB;
    const PASS_DB = process.env.PASS_DB;
    await mongoose.connect(
      `mongodb+srv://${HOST_DB}:${PASS_DB}@sistemadefila.nmed5.mongodb.net/?retryWrites=true&w=majority&appName=SistemaDeFila`
    );
    console.log("Conectado com sucesso !");

  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;
// export default connect;


