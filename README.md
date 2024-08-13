# Print it - Début du langage Javascript

## Description
Ce projet consiste à mettre à jour le site web d'une entreprise familiale Print it. Le site intègre un caroussel d'images avec des flèches de direction et bullers points.

## Langage utilisé
- HTML : Structure de base du site
- CSS : style du site
- JavaScript : mise en place d'un carroussel d'image

## Fonctionalités : choix pour le développemnt
- HTML : ajout de la structure pour les flèches de direction next / previous
- CSS : mise en forme des flèches de direction
- JS :
    - de plusieurs fonctions avec une fonction pour une action
        - moveCurrentIndex pour la mise en place d'un index avec des conditions pour le défilement en utilisant des conditions de type bouleens
        - moveImage pour le défilement des images en utilisant le tableau d'objets contenant les src et tagLine
        - moveTagLine pour le défilement des textes en utilisant innerHTML
        - moveBullets pour le défilement des bullets points synchronisée sur le défilement des photos avec un style différent en utilisant classList.remove / classList.add
    - création des bouttons next et previous avec un addEventListener("click", ()) et l'appel des différentes fonctions créées
