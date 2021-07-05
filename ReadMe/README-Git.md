# Nom du projet

Super projet machin bidule

## Dépendences

Pour fonctionner ce projet a besoin de:

- Rien
- (optionnel) VS code
- (optionnel) Typora

## Installation

Télécharger un éditeur markdown de votre choix

## Inititialisation d'un repository

    Repository: Dépot git, il garde en mémoire les changements appliqués à un projet.

Pour initialiser `git init` dans un invité de commande (Git Bash, cmd, Powershell, etc).

## Ajouter des fichiers au commit

    Commit: Checkpoint dans l'avancée du projet (un point de sauvegarde), il retient qui a fait le commit, quand, et quels fichiers sont concerné par le commit. On lui donne un message qui sert a informer les autres utilisateurs.

Pour ajouter des fichiers au prochain commit, on passe par la commande `git add monFichier.truc`. Si on veux ajouter tous les fichiers qui ont été modifiés: `git add .`

## Vérifier le status de git (avant de faire des bêtises par exemple)

On peut vérifier l'état de git avec la commande `git status`.
Elle nous donnera les infos:

- La branche sur laquelle on est
- Les fichiers qui ont été modifés:
    - tracké (prêt à être envoyer en commit)
    - non tracké

## Effectuer un commit

Pour envoyer le commit à git (faire un checkpoint): `git commit -m "Message de commit"`

    Il existe plusieurs conventions pour les messages de commit. Celle d'Angular est la plus propre: `git commit -m "feature/Connexion(fichiers modifiés): Ce qui a été fait sur ce commit"`

## Ajouter un repository distant (remote)

Il faut créer un repo sur l'hebergeur Git de votre choix (GitHub, GitLab, BitBucket, etc).

Il faut ensuite renseigner le repo distant au repo local:
`git remote add origin url-du-remote`.

> origin fait référence à une variable locale, vous avez le choix de son nom.

### Envoyer les commits

Pour que le repository distant récupére les modifications (commits), il faut lui envoyer.

`git push branche-distante branche-locale`

Par exemple `git push origin main` pousse les modifications de ma branche main sur la branche origin/main.

### Récupérer les modifications sur le repo distant

Les changements sont poussés (trés) souvent sur le repo distant. Pour les récupérer il faut utiliser la commande pull:

`git push branche-distante branche-locale` par exemple `git pull origin main`

## Récupérer un répository distant (pour travailler en local)

Dans le cadre d'un projet en général, le répository est déja créé et nos devs n'ont plus qu'a récupérer en local le projet pour pouvoir travailler.

C'est possible gràce à la commande clone:
`git clone url-du-repo-distant`. Par exemple pour ce repository il faudrait faire `git clone https://github.com/benoitsemifir/Markdown`.