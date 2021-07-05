# demo_voiture
## Installation
Dans un nouveau dossier qui va contenir votre projet, tapez la commande :

```shell
    npm init
```
Installez ensuite les dépendances : 
```shell
    npm install --save-dev typescript
    npm install --save express
```
Ensuite, nous aurons besoin de :
```shell
npm install --save-dev @types/express
```
Ce package est nécessaire car TypeScript et Express sont des packages indépendants.</br>
Sans le package @types/express, il n'y a aucun moyen pour TypeScript de connaître les types de
classes Express. </br>
Afin de configurer Typescript sur notre projet, créez le fichier "tsconfig.json" :
````json
{
    "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "moduleResolution": "node",
        "sourceMap": true,
    "outDir": "dist"
    },
    "lib": [
        "es2015"
    ]
}
````
Enfin, ajoutez une ligne de script dans votre fichier ``"package.json"`` :
```json
"scripts": {
    "start": "tsc && node dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```
Testez l'installation de votre projet :</br>
    ➢ Créez un dossier "src" à la racine du projet</br>
    ➢ Créez un fichier "app.ts" dans ce dossier</br>
    ➢ Tapez la commande "npm start"</br>

## Création du serveur Node
Dans le fichier ``app.ts`` , tapez le code suivant :
```ts
    import express from 'express';

    const app = express();
    const port = 8080;

    app.listen(port, () => {
        console.log(`Serveur listening on port : ${port}`);
    });
```

## Les routes :
### Premiere route

Les routes sont des URLs spécifiques qui exécuteront des fonctions.

Exemple :
```ts
app.get("/URL", (request, response) => {
    response.send("Serveur ok");
});
```
La route "/" correspond à la page d'accueil : localhost:8080/</br>
➢ request: contient toutes les informations de la requête HTTP</br>
➢ response : la réponse à retourner au client</br>

### Réponses textuelles
Pour retourner une chaîne de caractère à un client : </br>

``response.send("Serveur ok");``</br>

Express se charge de le transformer en objet Response de type text/HTML avec le statut HTTP 200</br>

### Les méthodes HTTP

La méthode ``get()`` correspond à la méthode "get" HTTP...</br>
Les différentes méthodes acceptées : </br>
``➢ get``: Demande d'une ressource</br>
``➢ post``: Création d'une ressource</br>
``➢ put``: Mise à jour d'une ressource (par remplacement)</br>
``➢ delete``: Suppression d'une ressource</br>
``➢ patch``: Mise à jour d'une ressource</br>
``➢ options``: Demande des méthodes autorisées sur une ressource</br>
``➢ head``: Information sur une ressource en demandant son entête (utile avant de télécharger)</br>
➢ La méthode ``all()`` représente toutes les méthodes HTTP</br>
```ts
app.all("/", (request, response) => {
    response.send("Serveur ok");
});
```
### La réponse
Les méthodes de la réponse : </br>
``status()`` change le numéro de status HTTP de la réponse</br>
``setHeader()`` permet de modifier l'entête </br>
``send()`` permet de remplir le corps de la réponse </br>
```ts
app.get("/", (request, response) => {
    response.status(201);
    response.setHeader('Content-Type', 'text/plain');
    return response.send("Serveur ok");
});
```
### Les routes dynamiques

Les routes dynamiques permettent de recevoir un paramètre dans l'URL tel qu'un identifiant utilisateur.
```ts
app.get('/utilisateurs/:id', (req, res) => {
    res.end(`Profil de l\'utilisateur : ${req.params.id}`);
});
```
**Cette route capture les URLs :**</br>
.   monsite.com/utilisateurs/14</br>
.   monsite.com/utilisateurs/15</br>
.   etc. </br>

Puisque c'est une demande faite par le client, nous retrouvons le paramètres dans l'objet requête :</br>
**req.params.nomDuParamètre**</br>

Exemple de syntaxe : 
**/utilisateurs/:id/comptes/:num**
Les paramètres seront : req.params.**id** et req.params.**num**

### L'objet Requête
L'objet requête contient toutes les informations liées à la requête de l'utilisateur.

|Attribut|description|
|--------|-----------|
|**req.app**| Référence vers l'application Express|
|**req.body**| Contenue du corps de la requète, il faut activer un middleware tel que **body-parser**|
|**req.cookies**|Contien les cookies utilisateurs. Un middleware tel que cookie-parser doit être activé|
|req.hostname|domaine.com|
|req.ip|IP utilisateur|
|req.method|Méthode Http de la requête|
|req.params.nom|Paramètre: nom d'une URL dynamique|
|req.protocol|Retourne le protocole de la requète|

#### *Attributs de la requête*
|Attribut|description|
|--------|-----------|
|req.query|/recherche?q=adrien+vossough </br>  req.query.q donne 'adrien vossough'|
|req.route|information sur la route courante|
|req.secure|True si la connexion est un TLS(sécurisée avec chiffrement)|

*Méthodes de la requète*
|methode|description|
|-------|-----------|
|req.accepts(types)||
|req.acceptsCharsets(charset [...])||
|req.acceptsEncodings(encoding)||
|req.get("champ-entete")|retourne un champ de l'entête|
|req.is(type-mine)|retourne le type mine|
|req.param("nomParam" [valeursDéfaut]|Recherche un paramêtre dans l'orre suivant:</br>
req.params (path de l'URL</br>
req.body (corps de la requête)
req.query (paramêtres après le path)|

## Les Middlewares
Les middlewares sont au cœur d'Express, ce sont des fonctions chaînés qui font un traitement spécifique.

Ils traitent/modifie la requête et la réponse à tour de rôle.

La signature des middlewares est :</br>
- pour les routes:
```ts
app.get('/', (req, res, next) => {
    //traitement...
});
```
**next()** représente le middleware suivant.</br>
Il est possible de rajouter une fonction ainsi : 
```ts
app.get('/',
    (req, res, next) => {
        res.send("premier middleware ok");
        next();
    },
    (req, res) => {
        console.log("middleware suivant ok");
    }
);
```
Pour créer son middleware :
```ts
let monMiddleware = (req, res, next) => {
    console.log('Affiche quelque chose');
    next();
};

app.use(monMiddleware);
```
Ce middleware sera activé à chaque fois car non défini sur une route mais sur l'application.

## Express: CRUD

### Les models
Dans votre dossier "src" , créez un nouveau dossier nommé "models".</br>
Ce dossier contiendra les entités que nous voudrons manipuler.</br>
Exemple :
```ts
export class User {
    public id : number;
    public nom : String;
    public prenom : String;
    public age : number;
    constructor(id: number, nom : String, prenom : String, age : number) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}
```
### Les controllers
Les controllers sont des classes. En Express, les controllers contiennent les méthodes permettant de requêter sur une entité. Reprenons l'exemple de notre entité "User" précédemment créée :
```ts
class UserController {
}
export const userController = Object.freeze(new UserController());
```
Afin de simuler une base de données, nous allons créer une liste d'utilisateurs : 
```ts
public users: User[] = [
    new User(1, "Vossough", "Adrien", 12),
    new User(2, "Desaegher", "Thomas", 36)
];
```
### Méthode findAll()
Nous allons faire la première méthode qui permet de récupérer tous les utilisateurs.</br>
Pour ce faire, nous allons créer un MIDDLEWARE qui va renvoyer la liste d'utilisateurs dans la réponse HTTP :</br>
```ts
findAll = (req, res, next) => {
    res.send(this.users);
    next();
}
```
GET localhost:8080/users ---> Renvoie une liste d'utilisateur</br>
Maintenant, nous avons besoin d'une méthode pour récupérer UN utilisateur en fonction de son ID.</br>
Pour ce faire, nous allons créer un nouveau MIDDLEWARE qui va renvoyer l'utilisateur de la liste qui correspond à l'id entré dans l'URL :</br>
```ts
findById = (req, res, next) => {
    res.send(this.users.filter(user => user.id == req.params.id)[0])
    next();
}
```
GET localhost:8080/users/12 ---> Renvoie l'utilisateur qui porte l'ID 12

### Méthode create()
Pour ajouter un nouvel utilisateur à notre liste, nous allons créer un autre MIDDLEWARE.</br>
Ce MIDDLEWARE renvoie l'utilisateur créé en réponse : 
```ts
create = (req, res, next) => {
    this.users.push(req.body);
    res.send(req.body);
    next();
}
```
Nous devons passer l'utilisateur dans le CORPS de la requête pour pouvoir le récupérer et l'ajouter.</br>
POST localhost:8080/users ---> Ajoute l'utilisateur contenu dans le body à la liste et le renvoie</br>

### Méthode update()
Pour modifier un utilisateur de la liste, le fonctionnement est similaire à une méthode create(). C'est-à-dire que nous allons récupérer l'utilisateur modifié dans le body puis modifier sa valeur dans la liste :
```ts
update = (req, res, next) => {
    this.users[req.body.id - 1] = req.body;
    res.send(this.users[req.body.id - 1]);
    next();
}
```
Nous devons passer l'utilisateur dans le CORPS de la requête pour pouvoir le récupérer et le modifier.</br>
PATCH localhost:8080/users ---> Modifie l'utilisateur contenu dans le body et le renvoie</br>

Pour supprimer un utilisateur de la liste, nous n'avons besoin que de son ID.</br>
Nous pourrons donc récupérer ce paramètre dans l'URL :</br>

```ts
delete = (req, res, next) => {
this.users.splice((req.params.id -1), 1);
res.send(`Utilisateur ${req.params.id} supprimé`);
next();
}
```
DELETE localhost:8080/users/12 ---> Supprime l'utilisateur qui porte l'ID 12

 ## Mise en place du routing :
 ### userRoutes.ts

 Dans un nouveau dossier "routes", créez un nouveau fichier "userRoutes.ts"</br>
Ce fichier contiendra toutes les routes qui concernent les utilisateurs ainsi que le MIDDLEWARE à appeler lorsqu'une requête est activée.</br>
Commençons par importer notre "userController" pour accéder aux MIDDLEWARES précédemment créés</br>
```ts
import { userController } from "../controllers/userControler";
```
Créez ensuite une méthode "setUserRouting(app)" que nous allons exporter afin d'y accéder dans "app.ts" :
```ts
export const setUserRouting = (app) => {

}
```
### Json Parser
Afin de récupérer les informations entrées dans le body de la requête, nous aurons besoin d'utiliser la méthode "json()" du module "body-parser".</br>
Cette méthode permettra à Express de comprendre que ce que nous envoyons est écrit en JSON

pour l'installer 
```shell
npm i body-parser
```
dans app.ts rajouter en dessous du port
```ts
app.use(express.json());
```
dans le code:
```ts
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
```
### Les méthodes HTTP du CRUD
Vous pouvez maintenant mettre en place votre CRUD :</br>
```ts
const endpoint = 'users'
    app.get(`/${endpoint}`, userController.findAll);
    app.get(`/${endpoint}/:id`, userController.findById);
    app.post(`/${endpoint}`, jsonParser, userController.create);
    app.patch(`/${endpoint}`, jsonParser, userController.update);
    app.delete(`/${endpoint}/:id`, userController.delete);
```
### Ajout du routing dans APP
La dernière étape consiste à appeler la méthode "setUserRouting(app)" dans le fichier "app.ts".</br>
Pour commencer, importez la méthode : </br>
```ts
import { setUserRouting } from './routes/userRoutes';
```
Appelez ensuite la méthode en n'oubliant pas d'insérer l'app express :
```ts
const app = express();
const port = 8080;
app.listen(port, () => {
console.log(`Serveur listening on port : ${port}`);
})
setUserRouting(app);
```

## Mongoose
### Présentation
Mongoose est une dépendance qui va nous permettre de communiquer avec une base de données MongoDB.</br>
Nous pouvons l'installer en tapant la commande :</br>
```shell
npm i mongoose
```
A l'image de ce qu'on a fait pour Typescript, installez :</br>
```shell
npm i --save-dev @types/mongoose 
```
### Configuration
Nous devons connecter notre application Express à une base de données MongoDB.</br>
Pour ce faire, créez un nouveau fichier "mongo.config.ts" que vous mettez dans un dossier "config".</br>
Commencez par importer mongoose :</br>
```ts
import mongoose from "mongoose";
```
Créez une méthode "setMongoConnection()" à exporte: </br>
```ts
export const setMongoConnection = () => {
}
```
A l'intérieur de la méthode "setMongoConnection()", ajoutez :
```ts
mongoose.connect('mongodb:/localhost:27017', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, () => {
    console.log("Connecté à la base de données");
})
```

Vous n'avez plus qu'à appeler la méthode dans "app.ts" : 
```ts
import { setMongoConnection } from './config/mongo.config';
setMongoConnection();
```

### Models / Schema

Nous devons transformer nos Models:
```ts
export class User {
public id : number;
public nom : String;
public prenom : String;
public age : number;
}
```
en Schema mongo : 
```ts
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    id: {
        type : Number,
        required : true
    },
    nom: {
        type : String,
        required : true
    },
    prenom: {
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
});
export const user = mongoose.model('User', userSchema);
```
### Modification du controller

Pour l'instant, notre controller renvoyait uniquement des valeurs contenus dans une liste.</br>
Nous possédons à présent une base de données Mongo connectée à notre application Express.</br>
Modifions ensemble le controller afin que les MIDDLEWARES communiquent avec notre base de données. </br>
Nous utiliserons le Schema mongo que nous venons d'exporter :</br>
```ts 
export const user = mongoose.model('User', userSchema);
```
Ainsi, il faut l'importer tout en haut de notre controller :
```ts
import { User } from "../models/user";
```
### Modification du controller
En exportant les schémas mongo de cette façon, nous avons accès à plusieurs méthodes déjà créées pour nous : </br>
Ces méthodes communiquent directement avec la base de données</br>

### Méthode FindAll()
Ainsi, pour la méthode findAll() nous aurons :
```ts
findAll = async (req, res, next) => {
    res.status(200)
       .send(await User.find())
       .end();
    next();
}
```
Par rapport à avant (avec la liste), nous avons :</br>
• ``"async"`` : signifie que cette méthode est asynchrone</br>
• ``"res.status(200)"`` : code HTTP à renvoyer si la requête s'est bien passée</br>
• ``"await"`` : précise que l'on doit attendre de récupérer un résultat avant de continuer la méthode</br>
• ``"User.find()"`` : méthode conçue par mongoose afin de récupérer tous les utilisateurs dans la base de données </br>
 ### Méthode FindById()

Pour la méthode findById(), nous aurons presque la même structure :</br>
```ts
findById = async (req, res, next) => {
    res.status(200)
       .send(await User.findById(req.params.id))
       .end();
    next();
}
```
A la seule différence que nous aurons besoin de passer en argument l'id de l'utilisateur à récupérer.</br>

### Méthode Create()
Pour la méthode create(), nous aurons :
```ts
create = async (req, res, next) => {
    res.status(201)
       .send(await User.create(req.body))
       .end();
    next();
}
```
Rien de nouveau, nous renvoyons juste un statut 201 qui correspond à un élément correctement créé.</br>

### Méthode Update()
Pour la méthode update(), nous devrons appeler une méthode qui cherche l'utilisateur puis le modifie.</br>
Cette dernière prend en paramètres :</br>
• L'id de l'utilisateur</br>
• Le nouvel utilisateur </br>

### Méthode Delete()
Enfin, la méthode delete() :
```ts
delete = async (req, res, next) => {
    res.status(200)
       .send(await User.findByIdAndRemove(req.params.id))
       .end()
    next();
}
```
