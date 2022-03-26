const fs = require("fs/promises");

const somar =  (numA, numB) => {
  return new Promise((resolve, reject) => {
    if (typeof numA != "number" || typeof numB != "number") {
      return reject("Dados invalidos. Informar apenas números.");
    }
    resultado = numA + numB;

    try {
      fs.appendFile(
        "resultado.txt", //se modificar o nome do arquivo para resultado2.txt não entra catch. Ele cria um novo arquivo com esse nome
        `${numA} + ${numB} = ${resultado} \n`
      ).then(console.log(resultado));
      resolve(resultado);
    } catch {
      console.log("Arquivo não encontrado.");
    }
  });
};

somar(-55, 30).catch((error) => console.log(error));
somar(1.2, 3.8).catch((error) => console.log(error));
somar(3, '7').catch((error) => console.log(error));
somar(93, 37).catch((error) => console.log(error));
somar(8, 'y').catch((error) => console.log(error));
somar('x', '0').catch((error) => console.log(error));
somar(80, 10).catch((error) => console.log(error));