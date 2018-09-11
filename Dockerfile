# Dockerfile for dev
FROM node:latest
EXPOSE 3000
COPY . ./app
WORKDIR /app
RUN ls -la
RUN npm install --no-progress --ignore-optional
CMD npm run dev