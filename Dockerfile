# Bruk en lettvekts Node-bilde
FROM node:18-alpine

# Sett arbeidskatalogen inne i containeren
WORKDIR /app

# Kopier package.json og package-lock.json
COPY package*.json ./

# Installer avhengigheter
RUN npm install

# Kopier resten av prosjektet
COPY . .

# Bygg Vite-prosjektet
RUN npm run build

# Bruk en enkel statisk server for å serve frontend
RUN npm install -g serve

# Eksponer porten som serve bruker
EXPOSE 3000

# Start appen med serve
CMD ["serve", "-s", "dist", "-l", "3000"]

