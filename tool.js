const fs = require("fs");
const path = require("path");

const folderPath = "assets";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Erro ao ler o diretório:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    const textToFound = "padraoDeNomeAqui"; // ex: AWS-Icons

    if (path.extname(file) === ".svg" && file.includes(textToFound)) {
      const newFileName = file.replace(textToFound, "");
      const newFilePath = path.join(folderPath, newFileName);

      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          console.error(`Erro ao renomear o arquivo ${file}:`, err);
        } else {
          console.log(`Arquivo ${file} renomeado para ${newFileName}`);
        }
      });
    }
  });
});
