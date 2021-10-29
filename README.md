# node-react-typescript-test

# HOW TO RUN THE PROJECT
# ----------------------------------------------------------

# HERE SOME TIPS
- From the root of project,run the following command:
   sudo docker-compose up --build
   it Will generate two images.
   One for the server with name "coding-test/server"
   The Second for the client with name "coding-test/client"


If you want to test again after generate the images, follow the next:
- Check from the generated images by run the following command:
   sudo docker images

- Run the server by executing the following command:
   sudo docker run -p 5000:5000 coding-test/server
   OR with another port for host port 
   sudo docker run -p 5001:5000 coding-test/server

- Run the client by executing the following command:
   sudo docker run -p 3000:3000 coding-test/client


# --------------------------------------------------------------
Here if you want to run the project without the docker.
go to server directory:

- yarn build:server: build server project and copy partner json file to build folder
- yarn build:client: build client project

- yarn server: start server in dev mode
- yarn dev: start server and client in dev mode

- yarn start server: start server in prod mode
- yarn start: start the whole project (server and client) in prod mode