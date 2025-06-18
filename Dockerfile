# Usa la imagen oficial de Node.js como base
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (si existe) para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Exponemos el puerto en el que el servidor de desarrollo va a estar corriendo
EXPOSE 3000

# El comando para levantar la aplicación en modo de desarrollo
CMD ["npm", "run", "dev"]
