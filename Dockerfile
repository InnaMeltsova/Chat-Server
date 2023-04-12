FROM node:18 As development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine As production

WORKDIR /app

COPY package*.json ./
#install the dependencies that are listed in the dependencies section of the package.json file, any dependencies listed in the devDependencies section of package.json will not be installed
RUN npm install --only=production 

COPY --from=development /app/dist /app

CMD ["npm", "start"]