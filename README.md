# Application de réservation

## Présentation :

L'utilisateur est face à un formulaire de réservation. Il peut choisir une date parmi celles se trouvant dans la liste déroulante et le nombre de places qu'il veut. Après avoir rempli ces informations, il peut décider de s'arrêter là et de réserver ou d'ajouter une carte pour réserver des places pour une autre date. Lorsque l'utilisateur choisit une date, elle n'est plus disponible dans la liste déroulante pour les autres cartes. Une fois qu'il n'y a plus de dates dans les options du menu déroulant, l'utilisateur ne peut pas créer de nouvelle carte. L'utilisateur peut bien entendu supprimer une carte à tout moment. Si l'utilisateur supprime une carte, la date qu'il avait sélectionnée est de nouveau disponible dans le menu déroulant.

## Spécifications détaillées :

- Lorsque l'utilisateur arrive sur la page, il se retrouve face à une seule carte, contenant le premier fieldset (regroupement de champs du formulaire) du formulaire de réservation  
- Le bouton "Ajouter" est grisé et n'est pas disponible tant que l'utilisateur n'a pas rempli les champs du formulaire  
- Une fois les champs remplis, l'utilisateur peut ajouter une nouvelle carte, dubpliquant le fieldset pour lui permettre de réserver à une autre date. La ou les dates qu'il a déjà sélectionnées ne sont plus disponibles  
- Après avoir ajouté une carte, l'utilisateur ne peut plus modifier la date des cartes précédentes (seulement le nombre de places). S'il veut modifier la date, il doit supprimer la carte  
- Lorsque l'utilisateur supprime une carte, la date qu'il avait sélectionnée pour celle-ci est de nouveau disponible pour une nouvelle carte  
- Une fois qu'il n'y a plus de date à sélectionner (si l'utilisateur à autant de cartes que de dates disponibles), le bouton "Ajouter" disparaît est indisponible tant qu'aucune carte n'est supprimée  
- Le bouton "Réserver" ne doit pas être cliquable temps qu'une carte n'est pas remplie  

## Étapes de développement :

### Fait

Étape 1 : Écrire le document HTML (formulaire, bouttons...)  
Étape 2 : Écrire le CSS  
Étape 3 : Écrire la fonction 'addCard()' appelée par l'attribut onclick sur le bouton ajouter dans le fichier HTML  
Étape 4 :  Écrire la fonction 'deleteCard()' appelée par l'attribut onclick sur le bouton supprimer dans le fichier HTML  
Étape 5 : Écrire la fonction permettant de masquer les dates déjà sélectionnées  
Étape 6 : Écrire la fonction permettant d'activer les boutons "Ajouter" et "Réserver" lorsque les champs sont remplis  

### À corriger

Étape 7 : Écrire la fonction permettant de désactiver le bouton ajouter lorsqu'il n'y a plus de date à sélectionner