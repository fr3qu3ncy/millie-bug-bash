FROM docker.io/library/node:22-alpine
WORKDIR /app
COPY server.js ./
COPY public/ ./public/
EXPOSE 8400
CMD ["node", "server.js"]
