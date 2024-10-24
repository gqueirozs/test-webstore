# Deploy
Adicione um branch remoto ao seu repositório Git que aponte para o seu servidor AWS:

```git remote add prod ec2-user@54.165.124.103:painel-webstore.git```

Configure o comando SSH para usar o arquivo de chave da AWS. No meu caso está na pasta Keys na minha pasta de projetos:

`git config core.sshcommand "ssh -i ../Keys/Painel.pem"`

Agora, tudo o que você precisa fazer é usar `git push prod` para enviar seus commits para o servidor AWS e as alterações poderão ser vistas em tempo real.

<b>Note que é necessário rodar `npm run build` antes de um commit.</b>

## Comandos Disponíveis
### `npm start`
Roda o aplicativo em desenvolvimento. | http://localhost:3000.

### `npm run build`
Minifica o aplicativo para produção na pasta `build`.

## Observação
O servidor contém os seguintes arquivos na raiz:
```
-server.cert | Um certificado inválido para criar uma rota https fictícia.
-server.key | Uma chave inválida para criar uma rota https fictícia.
-package.json | Um package.json para o aplicativo raiz do servidor. (express.js)
-package-lock.json | Um package-lock.json para o aplicativo raiz do servidor. (express.js)
-server.js | O index para o aplicativo raiz do servidor que exibe o site HTML estático. (express.js)
-painel-webstore.git | Um repositório vazio que possui um hook post-receive configurado para receber os commits.
-deploy | A pasta de implantação que contém os arquivos presentes neste repositório.
-pm2.json | Arquivo de configuração do modulo PM2.
```