# mongoBD_cours

## Le format JSON
**Le format JSON :** </br>
• Format de données</br>
• Basé sur l'écriture des objets littéraux JavaScript</br>
• Très lisible pour un format de données (peu verbeux)</br>
• Souvent utilisé en Ajax en remplacement du format XML qui est beaucoup plus lourd</br>
**Types de données dans le format JSON :**
• Les objets notés : { }</br>
• Les tableaux notés : [ ]</br>
• Des valeurs génériques de type tableau, objet, booléen, nombre, chaîne ou null.</br>

Il existe de nombreux validateurs (google : Validator json)</br>
Les données au format JSON ont toujours pour racine un objet.</br>
Il n'est pas possible de placer des commentaires directement en JSON. </br>
Le nom d'une propriété est une chaîne de caractère, elle est séparée de sa valeur par ":"</br>
La propriété/valeur est séparée de la suivante par une ",", la dernière valeur n'est pas suivie d'une virgule.</br>

**Exemple simple :**
```json
{
    "prenom":"adrien",
    "nom":"Vossough",
    "age":20
}
```
**Les types :**
```json
{
    "null": null,
    "booleen": true,
    "entier" : 20,
    "flottant": 12.5,
    "chaîne": "salut",
    "tableau1":["un", "deux", "trois"],
    "tableau2":[1, 2, 3],
    "tableau3":[1, "deux", 3.0],
    "objet1": { "animal": "chien", "age": 12, "sexe":"mâle"},
    "objet2": {
        "metier": "développeur",
        "tab_dans_objet": ["java", "javascript"] 
    },
    "tableau_objets": [
        {"eleve": "Jean"},
        {"eleve":"Alexandre"},
        {"formateur": "Adrien"}
    ]
}
```
## instalation
**Site pour télécharger MongoDB :** https://www.mongodb.com/download-center?jmp=nav#community

**Ajouter le répertoire**: C:\data\db
Lancer la commande mongod qui se trouve dans le sous-répertoire /bin de mongodb.</br>
Il est possible ensuite d'utiliser MongoDB Compass pour se connecter au serveur.</br>

## Commandes de base avec le shell de MongoDB
```shell
# se connecte à une base de donnée existante ou non
db = connect("ma_base");
# affiche les bases de données
show dbs
#ma base ne s affiche pas car ne sera réellement crée qu avec au moins un document dans une collection
# création d une collection
db.nomCollection
#affiche les collections de la base courante
show collections
# la collection ne s affiche pas car vite, il faut la remplir d un docume
# création d un document
db.nomCollection.insert({ "nom": "adrien" })
# tester show collections et show dbs

# affiche la liste des bases de données avec leur taille en mémoire
show dbs
# idem
show databases
# idem que le précédent mais au format JSON
db.adminCommand('listDatabases')
# utiliser la base "primer"
use primer
# afficher les collections
show collections
# renommer une collection
db.oldname.renameCollection('newname')
# effacer une collection
db.contacts.drop()
# effacer la base dans laquelle on est
db.dropDatabase()

# retourne tous les documents d une collection
db.ma_collection.find()
# retourne le premier document trouvé
db.ma_collection.findOne()
# retourne le premier document répondant à la requête
db.ma_collection.findOne( { "borough": "Queens" } )
# retourne tous les documents répondant à la requête
db.ma_collection.find( { "borough": "Queens" } )
db.ma_collection.find( {"borough": "Queens", "cuisine": "American" } )
# recherche d une valeur dans un sous-document
db.ma_collection.find( {"address.street": "Broadway", "cuisine": "American" } )
# selection en utilisant une expression régulière
db.ma_collection.find({"borough": /Queens/i})
# retourne le nombre de documents trouvés
db.ma_collection.find({ "borough": "Queens" } ).count()

# tri des résultats par name par ordre croissant
db.ma_collection.find().sort({ "name": 1})
# tri des résultats par name par ordre décroissant
db.ma_collection.find().sort({ "name": -1})
# tri des résultats par name puis par borough
db.ma_collection.find().sort({name : 1, borough : 1 });

# operateur AND 
db.ma_collection.find({ $and: [{"borough": "Queens"}, {"cuisine": "American" }] })
# identique au précédent
db.ma_collection.find({"borough": "Queens", "cuisine":"American"})
# operateur OR pour sélectionner correspondant à l une des valeurs fournies
db.ma_collection.find({ $or: [{"borough": "Queens"}, {"cuisine": "American" }] })
# $gt (greater than) pour sélectionner les valeurs supérieurs à …
db.ma_collection.find( {"restaurant_id": {$gt : "40365844"} } )
```
## Opérateurs

|Opérateur|Significateur|
|---------|-------------|
|**$gt**|Supérieur à. Par exemple, ``"clé":{ $gt : 5 }``|
|**$lt**|Inférieur à. Par exemple, ``"clé":{ $lt : 5 }``|
|**$in**|Inclus dans le tableau de valeurs. Par exemple, ``"clé":{ $in : [ 1, 2, 3] }``|
|**$gte**|Supérieur ou égal à. Par exemple, ``"clé":{ $gte : 5 }``|
|**$lte**|Inférieur ou égal à. Par exemple, ``"clé":{ $lte : 5 }``|
|**$ne**|Non égal à. Par exemple, ``"clé":{ $ne : 5 }``|
|**$nin**|Non inclus dans le tableau de valeurs. Par exemple, ``"clé":{ $nin : [ 1, 2, 3] }``|
|**$not**|Négation. Par exemple, ``"clé": {$not :{ $gt : 5 } }``|
|**$size**|Taille de la liste. Par exemple, ``"clé_tableau": {$size :3}``|
|**$exists**|Les documents ne respectent pas tous le même schéma et peuvent avoir des clés que d'autres n'ont pas. $exists teste la présence d'une clé. Par exemple, ``"clé" : {"$exists" : true}``|

**Recherche par type de la valeur :** ``{ "clé" : { $type : 2 } }`` 
|type|valeur|
|----|------|
|Double 1|1|
|String|2|
|Object|3|
|Array|4|
|Binaire|5|
|Undefined|6 **(déprécié)**|
|Object id|7|
|Booleen|8|
|Date|9|
|Null|10|
|Timestamp|17|

```shell
# recherche tous les documents dont un sous-document de la liste grades correspond
db.ma_collection.find({"grades.score": 9 })
# recherche tous les documents dont un sous-document de grades a pour valeur 9 et 
# le même sous-document ou un autre a pour valeur C. 
# Le document à droite en exemple est selectionné
db.ma_collection.find({"grades.score": 9, "grades.grade": "C"})
# recherche tous les documents dont un sous-document grades correspond
# Le document à droite en exemple N EST PAS selectionné
db.ma_collection.find({"grades":{ $elemMatch : {"score": 9, "grade":"C"}} })
# Distinct : retourne toutes les valeurs d une clé
db.ma_collection.distinct("cuisine")
```

**La projection est le 2éme paramètre de find. Il permet de sélectionner les champs à retourner**

```shell
# la valeur null permet de sélectionner tous les champs en fournissant une projection
# retourne les documents en affichant que le champ 'name' et l id
db.ma_collection.find(null, { name : 1 });
# permet de ne pas afficher l id
db.ma_collection.find(null, { _id:0, name : 1 })
```
***L' agrégation*** permet de sélectionner des documents, les filtrer et les regrouper par attributs db.ma_collection.**aggregate**( requete, projection, tri, groupement, detacher_liste)
```shell
# $match identique au filtre de find({ "borough" :"Queens"} )
db.ma_collection.aggregate( { $match : { "cuisine" :"American" } } )
# $project séléction des champs
db.ma_collection.aggregate( 
    { $match : { "cuisine" :"American" } } , 
    { $project : {"cuisine":1, "borough":1, "_id":0} }
)
# $sort tri par les champs séléctionnés
db.ma_collection.aggregate( 
    { $match : { "cuisine" :"American" } } , 
    { $project : {"cuisine":1, "borough":1, "_id":0} },
    { $sort : {"cuisine":1} }
)

# $group : groupe les résultats avec une clé sélectionné
# le paramètre _id est obligatoire et un attribut total contenant une fonction
# d'aggrégation
db.ma_collection.aggregate( 
    { $match : { "cuisine" :"American" } } , 
    { $project : {"cuisine":1, "borough":1, "_id":0} },
    { $sort : {"cuisine":1} },
    { $group : {"_id": "$borough", "total": { $sum: 1 } } }
)
# le résultat est le nombre de restaurant faisant de la cuisine américaine par quartier
# l'ordre des opérations est importants, pour trier le résultat :
db.ma_collection.aggregate( 
    { $match : { "cuisine" :"American" } } , 
    { $project : {"cuisine":1, "borough":1, "_id":0} },
    { $group : {"_id": "$borough", "total": { $sum: 1 } } },
    { $sort : {"total":1} }
)

# Nous sélectionnons un document par son id et indiquons la nouvelle valeur du champs
db.ma_collection.update ( 
    {"_id" : ObjectId("5a69158c831924b5a41158f6")}, 
    {$set : {"borough" : "five"}} 
);
# retourne si un document a été trouvé et modifié
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
# ajout d'une clé
db.ma_collection.update (
    {"_id" : ObjectId("5a69158c831924b5a41158f6")},
    {$set : {"ville" : "new-york"}} 
);
# mise à jour de plusieurs document
db.ma_collection.update ( 
    {"borough": "Queens"}, 
    {$set : {"ville" : "new-york"}},
    {"multi" : true}
);
# Suppression d'un document
db.ma_collection. remove ( 
    {"_id" : ObjectId("5a69158c831924b5a41158f6")}
);
# Suppression de plusieurs document
db.ma_collection.update ( 
    {"borough": "Queens"}
    {"multi" : true}
);
```