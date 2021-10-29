# node-react-typescript-test
here you can find me: https://github.com/ahmadaldali/node-react-typescript-test.git


# HOW TO RUN THE PROJECT
# ----------------------------------------------------------

# HERE SOME TIPS

- If you have the images, follow the next:
   Check from the images by run the following command:
   sudo docker images
   Then, you should see 2 images:
      1- ahmadcodingtest/my-private-repository:server (server image)
      2- ahmadcodingtest/my-private-repository:client (client image)

- If you don't have the images, then build it firstly.
   From the root of the project, run the following command:
   sudo docker-compose up --build
   It Will generate two images.
      One for the server with name "firstdockerserver"
      The Second for the client with name "firstdockerclient"

- Run the images
   Run the server by executing the following command:
      sudo docker run -p 5000:5000 "set here the name of server image"
      OR with another port for host port 
      sudo docker run -p 5001:5000 "set here the name of server image"

   Run the client by executing the following command:
      sudo docker run -p 3000:3000 "set here the name of client image"


# --------------------------------------------------------------
# Here if you want to run the project without the docker.

Go to server directory:
- yarn build:server: build server project and copy partner json file to build folder
- yarn build:client: build client project

- yarn server: start server in dev mode
- yarn dev: start server and client in dev mode

- yarn start server: start server in prod mode
- yarn start: start the whole project (server and client) in prod mode