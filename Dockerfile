FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "/app/server.js"]
