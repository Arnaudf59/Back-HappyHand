# Exo Poo Banque

Testez chacune de vos classes dans l'index.ts.

Cet exercice entraine à la POO avec pour contexte la mise en place d'un système de gestion de banque.

## Le compte

Créez une classe **Compte** qui respectera les contraintes suivantes :

- Attributs : numero de type entier, solde de type double
- Constructeurs : au choix
- Méthodes (au moins) :
  - **public ajouter(unMontant: number): void** : qui ajoute de l'argent au solde du compte
  - **public retirer(unMontant: number): void** : qui retire de l'argent au solde du compte
  - Accesseurs/mutateur (getter/setter):
    - Faut-il laisser setSolde(unSolde) public ?
    - Faut-il laisser setNumero(unNumero) public ?

## Le client

 Créez une nouvelle classe **Client** qui respectera les contraintes suivantes :

- Attributs : nom, prenom de type string, age, numero de type number, comptes de type tableau de Compte (maximum 5 comptes dans le tableau). Le numéro du client n'a aucun rapport avec le numéro du Compte.
- Constructeur : au choix
- Méthodes (au moins) :
  - **public ajouterCompte(unCompte: Compte): void** : méthode qui regarde dans le tableau de compte et place le paramètre dans la première case vide (c.a.d null) du tableau. Dans le cas où il n'y a plus de case vide, afficher un message.
  - **public getCompte(numeroCompte: number ): Compte** : méthode qui parcours le tableau des comptes et donne le premier compte qui a comme numéro la valeur du paramètre. Dans le cas où vous ne trouvez aucun compte qui a le bon numéro, affichez un message.
  - Accesseurs/mutateurs (get/set) sur les attributs.

## Compte rémunéré

Créez une nouvelle classe **CompteRemunere** qui respectera les contraintes suivantes :

- Cette classe hérite de Compte (mot clef *extends*)
- Attributs : taux de type number, qui représente le pourcentage de rémunération du compte (sa valeur est donc entre 0 et 1)
- Constructeur : au choix
- Méthodes (au moins) :
  - **public calculerInterets(): number** : qui va calculer les intérêts du compte (taux*solde)
  - **public verserInterets(): void** : qui ajoute au solde la totalité des intérêts calculés
  - Accesseurs/mutateurs (get/set) sur l'attribut.

## Compte à seuil

 Créez une nouvelle classe **CompteASeuil** qui respectera les contraintes suivantes :

- Cette classe hérite de Compte
- Attributs : seuil de type number, qui représente le montant en dessous du quel le solde ne peut pas descendre.
- Constructeur : au choix
- Méthodes (au moins) :
  - **public retirer(uneValeur: number): void** : doit faire les vérifications en fonction de la valeur du seuil. On ne peut retirer *M* du solde *S* si et seulement si on a S-M > Seuil.
  - Accesseurs/mutateurs (get/set) sur l'attribut.

## Interface Compte rémunéré

 Créez une nouvelle interface **CompteRemunere** qui respectera les contraintes suivantes :

- Méthodes (au moins) :
  - **public calculerInterets(): number**
  - **public verserInterets(): void**
  - **public getTaux(): number**
  - **public setTaux(unTaux: number): void**

Votre classe CompteRemunere doit implémenter cette interface (mot clef *implements*).

## Interface Compte à seuil

 Créez une nouvelle interface **CompteASeuil** qui respectera les contraintes suivantes :

- Méthodes (au moins) :
  - **public retirer(double uneValeur): void**
  - **public getSeuil(): number**
  - **public setSeuil(unSeuil: number): void**

Votre classe CompteASeuil doit implémenter cette interface (mot clef *implements*).

## Classe Compte à seuil rémunéré

 Créez une nouvelle classe **CompteASeuilRemunere** qui respectera les contraintes suivantes :

- Cette classe hérite de la classe CompteRemunere **ou** CompteASeuil. Il vous appartient de décider.
- Cette classe implémente CompteRemunere **et/ou** CompteASeuil. Il vous appartient de décider. Le choix sera dépendant du choix de votre classe parent
- Attributs : seuil ou taux selon votre choix d'héritage
- Constructeurs : au choix
- Méthodes en fonction de l'héritage.