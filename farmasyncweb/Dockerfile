FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install -g serve
RUN npm install

COPY . .

RUN npm run build

# Verifique se serve está instalado corretamente
RUN which serve

CMD ["serve", "-s", "build"]
EXPOSE 3000