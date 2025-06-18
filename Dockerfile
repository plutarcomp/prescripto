# Usa la imagen oficial de Node.js como base
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si existe) para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el archivo .env al contenedor
COPY .env .env

# Copia el resto del código fuente al contenedor
COPY . .

# Exponemos el puerto en el que el frontend de Vite va a estar corriendo
EXPOSE 5173

# El comando para iniciar la aplicación en modo desarrollo de Vite
CMD ["npm", "run", "dev", "--", "--host"]