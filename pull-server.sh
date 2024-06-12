#!/bin/bash

# Construir o projeto
npm run build

# Adicionar todos os arquivos alterados ao repositório Git
git add .

# Solicitar uma mensagem de commit
read -p "Mensagem do commit: " message

# Commit com a mensagem fornecida
git commit -m "$message"

# Push das alterações para o repositório remoto
git push origin main

# SSH para o servidor remoto e executar operações
ssh jhonathan@192.168.0.46 << EOF
  cd /home/jhonathan/api/  # Navegar até o diretório do projeto no servidor
  git pull origin main      # Atualizar o repositório com as alterações
  pm2 restart api           # Reiniciar o processo API com PM2
  sudo systemctl restart nginx  # Reiniciar o serviço nginx
EOF
