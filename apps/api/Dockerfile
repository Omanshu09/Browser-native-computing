FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY apps/api/package.json apps/api/package.json
RUN npm install
COPY apps/api apps/api
WORKDIR /app/apps/api
RUN npm run build
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/apps/api/dist dist
ENV NODE_ENV=production
CMD ["node","dist/server.js"]
