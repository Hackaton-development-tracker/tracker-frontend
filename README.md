# FrontEnd React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## How to use Docker

### In the terminal navigate to your project directory, then execute
```
docker build -t [your docker image name] .
```
To check your Docker Image, execute
```
docker images
```
It will show the list of images available on your system

### Run the Docker Container
```
docker run -d --rm -p 5173:5173 --name [name of the container] [your docker image name]
```
Flag used in the command
-d - To run the container in the background (Detach Mode )
--rm - To delete the container, when you stop the container
-p - Port Mapping between container and outside world.
5173:5173 - [Port access from Browser]: [Port exposed from the container]

To check whether your docker container is running or not, execute
```
docker ps
```
It will show the list of containers running on your system

### Open the App in the Browser
Open the Browser and access http://localhost:[Port] as per the configuration we did so far it should be http://localhost:5173
