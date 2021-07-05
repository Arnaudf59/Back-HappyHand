# Typescript

Typescript est une surcouche à JS. c'est à dire une extension de language.</br>

***Le dossier ne peut pas s'appeler typescript (avec majuscule aussi)*** 
Appelons le ts 
Creer un fichier app ou l'on mest les fichier ts
et un fichier dist pour les fichier js

## Initialiser un projet NodeJS
---

Faire `npm init`

## Initialiser un projet Typescript
---

## Instaler typescript au niveau du projet

avec npm: `npm install typescript --save-dev`

typescript sera alors inscrit en tant que dependance de développement.

## Initialisation de typescript

Avec npx `npx tsc --init`

Ceci va créer un fichier `tsconfig.json` qui contient les infos pour que le ts transpile.

au ligne 17 et 49 de se fichier mettre:


**ligne 17**
--- js
    `outDir: "./dist"` // emplacement fichier js

**ligne 49**
--- ts
    `rootDirs["./app"]` //emplacement des fichier ts

 Enfin, pour compiler ses fichier ts il faut entrer `npx tsc`

 ### Transpiler avec tsc
 Pour transipiler un fichier simple faire `tsc fichier.ts` mais elle ne prends pas en compte le `tsconfig.json`

 il est preferable de faire `npx tsc`

 ## Lancer un projet en TS

 1) Builder le projet avec tsc
 2) Lancer le résultat du build: ici node ./app/index.js

Pour faire les deux en une action il faut rajouter une ligne dans le fichier package.json
`"start": "tsc && node ./dist/index.js"`

  puis pour lancer un script, faire `npm start`

  Pour réinstaller le node modules, faire `node install`
