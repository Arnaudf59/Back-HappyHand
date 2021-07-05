# La programmation Orienté Objet en TS 

La programmation orienté objet (POO) est une façon de développer.

## Les classes

Les classes sont des "moule", des modéles pour créer des objets.

Elle permettent d'indiquer qu'un objet peut avoir des propriétés (attribut) et des fonctions (méthode)

## Objets
---

les objets sont une espéce de super variable avec leurs propres variables (attibut) et leurs propres fonction (méthodes).

## La visibilité
Les méthodes et attributs de l'objet ont une visibilitée:

- public
- private
- protected 
</br>

Cette visibilité défini si l'accès à une méthode ou un attribut est possible en dehors de la classe ou il ou elle est déclaré.

private: Accessible à l'intérieur de la classe uniquement.</br> protected: concerne principalement l'héritage.</br> L'attribut ou la méthode est visible dans la classe et pour les enfants de la classe. Mais pas en dehors. public: visible partout, en dehors de la classe comme à l'intérieur.

## Attributs et méthodes static

Le mot clé static attache un attribut ou une méthode directement à la classe (et non à l'objet de la classe). Il n'y a donc pas besoin d'instancier un objet pour utiliser une méthode static. Les attribut static sont aussi accéssible sans instance d'objet et permettent par exemple de partager une variable entre toutes les instance de la classe.

## Interfaces
---
Les interfaces sont une forme de contrat que les classes doivent respecter. Un classe qui implémente une interface doit absolument implémenter les méthodes et les attributs de l'interface.
```ts
export interface Rechargeable {
    
    // attribut à implémenter
    niveauBatterie: number;

    // méthode à implémenter
    recharger(montant: number): void;
    
}
```
Ici les objets de classes qui implémentent l'interface Rechargeable auront forcément une méthode recharger(montant: number): void.

C'est un moyen de s'assurer de la compatibilité entre les objets. Par exemple une station de recharge contient des objets Rechargeable et appelera la méthode recharger() de chacun de ces objets:
```ts
// la station de recharge est un tableau d'objets qui implémentent l'interface rechargeable
const stationRecharge: Rechargeable[] = [
    voitureHybride,
    voitureElectrique
]
// Pour chacun des éléments présent dans stationRecharge
stationRecharge.forEach((voitureRechargeable)=>{
    // effectuer une action: ici recharger
    console.log(voitureRechargeable);
    voitureRechargeable.recharger(100);
})
```

## Les principes de l'orienté Objet

### Encapsulation

L'encapsulation est le fait d'enfouir la logique d'une partie du code.

Par exemple: Le calcul des intérets d'un compte en banque ne concerne que l'objet compte. Par conséquent la logique qui calcule les intérets serait dans la classe Compte (et pas forcément accéssible en dehors de la classe).

### Héritage
L'héritage est le deuxième pillier de l'orienté objet. Toujours dans l'idée de limité la duplication de code, il est possible qu'une classe hérite d'une autre classe.

Un classe B qui hérite d'une classe A recevra les méthodes visibles de cette classe.

un cas pratique de l'héritage: Quand on a besoin d'utiliser une version spécifique d'une classe. La spécificité mène généralement à l'héritage.

On passe par le mot clé extends:
```ts
    class VoitureThermique extends Voiture {
        //...
    }
 ```   
Ici la classe VoitureThermique peut utiliser les méthodes visible de la classe Voiture. Elle aura aussi les attributs visible de sa classe mère.

Si la classe VoitureThermique doit utiliser une méthode de la classe parent, elle peut l'utiliser tel quel ou la redéfinir.

Pour redéfinir une fonction il faut la retaper dans la classe fille:

- même nom
- même visibilitée
- même type de retour
- même arguments
- même type d'arguments
Seul la logique doit varier.

### Polymorphisme
Coming soon™