FROM node:14.15.1

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install
COPY . .

EXPOSE 3000
CMD ["yarn", "start"]