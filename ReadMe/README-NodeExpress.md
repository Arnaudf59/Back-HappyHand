# back-node-express

pour lancer le fichier index.js (le serveur) faire
```shell
node .
```

recuperation du serveur fait dens cours_node_js
installation de mongodb
```shell
npm install mongodb
```
ensuite, se connecter à la base mongodb
```js
mongo.connect('mongodb://localhost:27017/app');
```
installer les dependance 
```shell
npm install typescript express mongoose cors morgan
```
et les dependences pour typescript 
```shell
npm i --save-dev typescript @types/node @types/express @types/mongoose @types/morgan
```
et on install ts-node-dev
```shell
npm i --save-dev ts-node-dev
```

puis dans le package.json on peut mettre
```JSON
"scripts": {
    "start": "npx tsc && node .",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev ./app"
  },
  ```
doc expressjs : https://expressjs.com/fr/

il y a aussi nestjs : https://docs.nestjs.com/fr/

``const app = Express();`` permet de mettre express dans une variable
écoute de rquête sur la route /acceuil avec la methode get</br>
``app.get("/acceuil")``
écoute de rquête sur la route /acceuil avec la methode post</br>
``app.post("/acceuil")``
écoute de rquête sur la route /acceuil avec la methode put</br>
``app.put("/acceuil")``
écoute de rquête sur la route /acceuil avec la methode delete</br>
``app.delete("/acceuil")``
écoute de rquête sur la route /acceuil avec la methode all</br>
``app.all("/acceuil")``

doc moegan express http://expressjs.com/en/resources/middleware/morgan.html