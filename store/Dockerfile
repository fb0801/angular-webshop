FROM node:alpine

WORKDIR /app
COPY package.json .

COPY . ./

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/angular-webshop/ /usr/share/nginx/html

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]