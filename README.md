# Angular Crud

Ce projet est un exemple simple pour manipuler des données REST (affichage/ajout/suppression/modification).

Pour le serveur de données, j'ai utilisé JSON-SERVER qui est un faut API REST server.

## Prérequis

Avant de lancer l'application, s'assurer d'installer :

Le serveur [Node.js](https://nodejs.org/fr/)

[Angular CLI](https://angular.io/cli)

## Base de données

La base de données est de type semi-structurée json. Elle existe dans src/app/data/data.json

Le serveur [json-server](https://www.npmjs.com/package/json-server) est inclus dans le package et son adresse par défaut est localhost:3000.

## Installer & lancer l'application

La procédure d'installation est simple, cloner le projet depuis github, puis à l'aide d'une interface de ligne de commande (CLI) :

><ol>
><li>Pointer à l'intérieur du dossier cloné</li>
><li>Taper la commande : npm i</li>
><li>Une fois npm est terminé, taper la commande suivante : ng serve</li>
><li>Lancer une autre interface de ligne de commande (CLI) pointant dans le même chemin et taper : json-server --watch src/app/data/data.json</li>
><li>Dans le navigateur, accéder à l'adresse : http://localhost:4200</li>
></ol>


## Données exemples

La base de données comporte 100 éléments (Produits).
Voir le détail dans la section Base de données précitée.

>Seule une partie des champs de la base de données qui sont manipulés dans l'exemple, vous pouvez ajouter davantage si vous voulez.

## Aperçu de l'appli

### Liste des produits
![Aperçu appli Angular CRUD](https://www.abatalib.com/github/crud1.PNG "Liste des produits")

### Filtrer les produits
![Aperçu appli Angular CRUD](https://www.abatalib.com/github/crud2.PNG "Filter les produits")

### Ajouter un produit
![Aperçu appli Angular CRUD](https://www.abatalib.com/github/crud3.PNG "Ajouter un produit")

### Modifier un produit
![Aperçu appli Angular CRUD](https://www.abatalib.com/github/crud4.PNG "Modifier un produit")

### Supprimer un produit
![Aperçu appli Angular CRUD](https://www.abatalib.com/github/crud5.PNG "Supprimer un produit")
