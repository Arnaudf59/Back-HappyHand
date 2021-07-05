# demo_voiture_mongoose

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

### Les jointure

Dans la classe voiture rejouter un champs moteur qui à pour type l'object id du moteurs en question</br>
Et lui mettre la ref qui correspond au model mis dans le schema moteurs

```ts
moteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Moteur"
}
```
ref:"moteur car dans le schema moteurs il est ecrit
```ts
export const Moteur = mongoose.model("Moteur", MoteurShema);
```