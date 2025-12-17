# Etapa 1: Construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código y construir el proyecto
COPY . .
RUN npm run build

# Etapa 2: Ejecución
FROM node:18-alpine

WORKDIR /app

# Copiar solo lo necesario desde la etapa de construcción
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Exponer el puerto que usa NestJS (por defecto 3000)
EXPOSE 3000

# Comando para arrancar la app
CMD ["npm", "run", "start:dev"]