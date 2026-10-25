// Simultoo — fichier de mise à jour, lu par les anciennes versions de Simultoo (4.x et avant).
// ⚠️ Depuis Simultoo 5.0 (25/10/2026), Simultoo se met à jour tout seul avec simultoo.enc : ce fichier ne doit plus être modifié.
// Adresse : https://54s6h64wdz-web.github.io/omni-prix/update.js
//
// À modifier à la main. Garder un JSON valide entre les accolades :
// guillemets doubles, pas de virgule après le dernier élément, null pour « rien ».
//
//  version    : dernière version de Simultoo déposée sur le Teams TrifontaineApps (ex. "2.2").
//               Si le Simultoo ouvert est plus ancien → popup « Nouvelle version disponible » (Mettre à jour / Ignorer)
//               + pastille jaune « vX disponible » dans l'en-tête.
//               ⚠️ Mettre d'abord le nouveau Simultoo.html sur le Teams, PUIS changer ce numéro.
//  date       : date de cette version (affichée dans le popup).
//  message    : texte facultatif ajouté au popup de mise à jour (ex. "Nouvelles ODR de la collection de novembre").
//  alertePrix : alerte « prix des terminaux à vérifier » (prix relevés avant le dernier jour de mise à jour Orange).
//     active  : true = alerte active ; false = coupée (ex. période où les prix changent n'importe quel jour).
//     jour    : jour habituel de mise à jour des prix Orange : 0 dimanche, 1 lundi, 2 mardi, 3 mercredi,
//               4 jeudi, 5 vendredi, 6 samedi.
window.SIMULTOO_UPDATE = {
  "version": "5.0",
  "date": "25/10/2026",
  "message": "Simultoo 5 se met à jour tout seul : téléchargez une dernière fois le fichier sur le Teams, ensuite plus jamais",
  "alertePrix": { "active": true, "jour": 4 }
};
