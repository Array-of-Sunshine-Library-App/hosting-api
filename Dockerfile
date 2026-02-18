FROM node:18-alpine

WORKDIR /app

COPY functions/package*.json ./

RUN npm ci --omit=dev

COPY functions/ ./

EXPOSE 3000

CMD ["node", "index.js"]
