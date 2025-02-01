# Étape 1: Construction de l'application
FROM node:18 AS build

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers de votre projet Angular
COPY . .

# Construire l'application Angular pour la production
RUN npm run build --prod

# Étape 2: Servir l'application avec un serveur HTTP (Nginx)
FROM nginx:alpine

# Copier les fichiers construits dans le dossier de production du conteneur Nginx
COPY --from=build /app/dist/para/ /usr/share/nginx/html

# Exposer le port 80 (par défaut pour Nginx)
EXPOSE 80

# Démarrer Nginx en mode premier plan
CMD ["nginx", "-g", "daemon off;"]
