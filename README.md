# Chat client

## Pré-requis

- Avoir nodejs d'installé sur votre machine. Pour savoir si vous l'avez installé, exécutez dans un terminal:

````
node -v
````
Si cela vous retourne une version, alors nodejs est bien installé.

## Installation du projet

Suite à l'installation de nodejs, il faut ouvrir un terminal dans le répertoire du projet, puis exécuter cette commande à partir de la racine du projet :

````
npm install
````
Cela installera les librairies nécessaires au fonctionnement interne du chat.

## Démarrer votre projet

Pour démarrer la reconstruction du front-end, ouvrez un terminal dans la racine du projet (pas le dossier client), puis...

````
npm run webpack
````

Si webpack est actif, votre JavaScript se regénèrera automatiquement lorsqu'un fichier est modifié. Par exemple, si vous modifiez le fichier "client/src/page-index.js" (ou n'importe quel fichier utilisé dans celui-ci), webpack mettra à jour le fichier "client/dist/index.js" avec vos modifications.

Vous pouvez ensuite ouvrir les pages `chat.html`, `index.html` et `register.html` via votre navigateur et dans VS Code.


## Et ensuite?...

Pour ce projet, ne programmez que dans le dossier `client/`. Vous pouvez modifier tous les fichiers qui s'y trouvent, mais il est fortement déconseillé d'altérer les lignes de code déjà en place, car il est 100% fonctionnel avec le serveur de chat. Ajoutez des lignes, créez des fichiers et images, mais attention de ne pas *briser* l'accès au serveur (connexion, déconnexion, etc.).

Toutes les informations nécessaires à la réalisation du projet se trouvent ici : [https://notes-de-cours.com/webjs/travaux]

## Remise du projet

Les informations concernant la remise du projet se trouvent ici : [https://notes-de-cours.com/webjs/travaux]


## Animations et événement dans le projet

###Page 1
Événement onclick sur le background qui créer du feux avec un randomizer sur la grandeur et la position de celui-ci. Fait avec DOM.
Événement onFocus sur input de Mot de passe et utilisateur qui fait apparaitre un message qui dit de rentrer le mot de passe. Fait avec DOM.
Événement onBlur enlève le message.
Après deux click Animation voiture de pompier qui apparait et s'arrête avant fin de l'écran
Après cinq click Animation hélicoptère qui apparait et se déplace jusqu'à la fin de l'écran et revient dans l'autre sense immédiatement.

##Page 2
Événement onmouseover sur le deadpool du background qui fait apparaitre un message indiquant de cliquer sur les licornes
Événement onclick sur les licornes qui les fait sortir de l'écran grâce à l'animation move et augmente le compteur.
Animation qui change l'opacity des licornes afin de les rendre presque invisible à l'oeil.

##Page3
Événement onfocus qui a 75% de chance de faire apparaitre un des trois messages de Deadpool.
Chat et liste de membres connecté fait à partir de Vues.js
