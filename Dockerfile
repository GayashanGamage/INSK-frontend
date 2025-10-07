FROM node:20-alpine as build
WORKDIR /app

# ARG NUXT_PUBLIC_backend_api
ENV NUXT_PUBLIC_backend_api="http://backend:8000/api"

COPY package*.json package-lock*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Production Stage ---
FROM node:20-alpine as production
WORKDIR /app

# Crucial fix: Set the HOST environment variable to 0.0.0.0
ENV HOST=0.0.0.0
# Note: Nuxt/Nitro often defaults to port 3000, 
# but you exposed 4200. Let's explicitly set the port.
ENV PORT=4200

COPY --from=build /app/.output ./.output
EXPOSE 4200
# The Nuxt/Nitro server respects the PORT and HOST env variables
CMD ["node", ".output/server/index.mjs"]