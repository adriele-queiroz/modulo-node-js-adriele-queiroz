const readline = require('readline');
const fs = require('fs');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function lerArquivo() {
    leitor.question('Digite o caminho do arquivo TXT: ', (caminhoArquivo) => {
      if (caminhoArquivo == 'node.txt'){
        console.log('Arquivo existente!!')
      }else{
        console.log('Nome de arquivo errado, tente novamente!!')
        leitor.close();         
          lerArquivo();
          return;
      }

      const inicio = Date.now();
  
      fs.readFile('node.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Erro ao ler o arquivo:', err);
          leitor.close();
          return;
        }
  
        const lines = data.split('\n');
        let numLines = 0;
        let sumNumbers = 0;
        let textLines = 0;
    
        lines.forEach((line) => {
          if (/^\d+$/.test(line.trim())) {
            // Linha contém somente números
            numLines++;
            sumNumbers += parseInt(line.trim(), 10);
          } else if (line.trim() !== '') {
            // Linha contém texto
            textLines++;
          }

        });
  
        const tempoExecucao = Date.now() - inicio;
  
        console.log('Resumo:');
        console.log('Soma dos números:', sumNumbers);
        console.log('Quantidade de linhas com texto:', textLines);
        console.log('Tempo de execução:', tempoExecucao + 'ms');
  
        leitor.question('Deseja executar novamente? (S/N): ', (resposta) => {
            if (resposta.toUpperCase() === 'S') {
              lerArquivo();
            } else {
              console.log('Bye..Encerrando o programa.');
              leitor.close();
            }
          });
        });
    });

}        
        lerArquivo();

    
          