# node-react-typescript-test

# HOW TO RUN THE PROJECT
# ----------------------------------------------------------

# HERE SOME TIPS

If you have the images, follow the next:
- Check from the generated images by run the following command (to ensure from the   
  images) :
  sudo docker images

- Run the server by executing the following command:
   sudo docker run -p 5000:5000 firstdockerserver
   OR with another port for host port 
   sudo docker run -p 5001:5000 firstdockerserver

- Run the client by executing the following command:
   sudo docker run -p 3000:3000 firstdockerclient

If you don't have the images, then build it firstly.
From the root of project, run the following command:
   sudo docker-compose up --build
   it Will generate two images.
   One for the server with name "firstdockerserver"
   The Second for the client with name "firstdockerclient"




# --------------------------------------------------------------
Here if you want to run the project without the docker.
go to server directory:

- yarn build:server: build server project and copy partner json file to build folder
- yarn build:client: build client project

- yarn server: start server in dev mode
- yarn dev: start server and client in dev mode

- yarn start server: start server in prod mode
- yarn start: start the whole project (server and client) in prod mode