FROM node:20-alpine as build
WORKDIR /app

ARG NUXT_PUBLIC_backend_api
ENV NUXT_PUBLIC_backend_api=${NUXT_PUBLIC_backend_api}

COPY package*.json package-lock*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:20-alpine as production
WORKDIR /app
COPY --from=build /app/.output ./.output
EXPOSE 4200
CMD ["node", ".output/server/index.mjs"]