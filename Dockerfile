# Wybór obrazu bazowego z Node.js (np. wersja 18 z LTS)
FROM node:18-alpine

# Ustawienie katalogu roboczego w kontenerze
WORKDIR /usr/src/app

# Skopiowanie plików aplikacji do obrazu
COPY . .

# Instalacja zależności (jeśli są w package.json)
RUN npm install

# Uruchamianie aplikacji na porcie 80
ENV PORT=8080

# Otworzenie portu 80 dla zewnętrznych połączeń
EXPOSE 8080

# Komenda startowa aplikacji
CMD ["npm", "start"]

