let collaborators = [];
let userStories = [];
let boardStories = [];
let storyIdCounter = 1;


let assignedStory = document.getElementById('storyAssignee');
let sprintAssignedName = document.querySelectorAll('#storyAssignee option');
let collaboratorsNamesLlist = document.getElementById('collaboratorsList');
let collaboratorInput = document.getElementById('collaboratorName');
let titleStory = document.getElementById('storyTitle');
let storyDescription = document.getElementById('storyDescription');
let storySprint = document.getElementById("storySprint")
let count = 1;

// ===================================================================

/**
 * Fonction pour ajouter un nouveau collaborateur à l'équipe
 * TODO: 
 * - Récupérer la valeur du champ input avec l'id 'collaboratorName'
 * - Vérifier que le nom n'est pas vide et n'existe pas déjà dans le tableau 'collaborators'
 * - Ajouter le collaborateur au tableau 'collaborators'
 * - Vider le champ input
 * - Appeler updateCollaboratorsList() pour afficher la liste
 * - Appeler updateAssigneeSelect() pour mettre à jour le select d'assignation
 */




function addCollaborator() {
    let trimedCollaboratorVlue = collaboratorInput.value.trim()

    if (collaborators.includes(collaboratorInput.value) || trimedCollaboratorVlue == '') {
        collaboratorInput.value = '';
        return;
    }
    collaborators.push(collaboratorInput.value);
    collaboratorInput.value = '';
    updateCollaboratorsList(collaborators);
    updateAssigneeSelect(collaborators);
}

/**
 * Fonction pour afficher la liste des collaborateurs dans l'interface
 * TODO:
 * - Récupérer l'élément DOM avec l'id 'collaboratorsList'
 * - Générer du HTML pour chaque collaborateur (badges avec leur nom)
 * - Utiliser un style inline: background #667eea, color white, padding 8px 15px, border-radius 20px
 * - Injecter le HTML dans l'élément avec innerHTML
 */
function updateCollaboratorsList(collaborators) {

    collaboratorsNamesLlist.innerHTML = '';
    collaborators.forEach(nameAded => {
        collaboratorsNamesLlist.innerHTML += `
        <p style = "color : black">${nameAded}</p>
    `
    })
}

/**
 * Fonction pour mettre à jour la liste déroulante des assignés
 * TODO:
 * - Récupérer l'élément select avec l'id 'storyAssignee'
 * - Générer les options: une option "Non assigné" + une option par collaborateur
 * - Mettre à jour le select avec innerHTML
 */
let valueCounter = 1;
function updateAssigneeSelect(collaborators) {

    assignedStory.innerHTML = `<option value="">Non assigné</option>`;
    collaborators.forEach(element => {
        assignedStory.innerHTML += `<option style = "color : black" value = ${valueCounter}>${element}</option>`
        valueCounter++;
    });
}
console.log(titleStory.value);

/**
 * Fonction pour créer une nouvelle User Story
 * TODO:
 * - Récupérer les valeurs des champs: storyTitle, storyDescription, storySprint, storyAssignee
 * - Vérifier que le titre et la description ne sont pas vides
 * - Créer un objet story avec: id (utiliser storyIdCounter++), title, description, sprint (parseInt), assignee, status: 'backlog'
 * - Ajouter la story au tableau 'userStories'
 * - Vider les champs titre et description
 * - Appeler renderSprintBacklog() pour actualiser l'affichage
 */
function verifyStoryTitle(input) {
    input.innerHTML = '';
    let withSpaces = input.value.trim()
    if (withSpaces = '') {
        input.innerHTML = '';
        return;
    }
    return input.value;
}

function verifyStoryDescription(input) {
    input.innerHTML = '';
    let withSpaces = input.value.trim()
    if (withSpaces = '') {
        input.innerHTML = '';
        return;
    }
    return input.value;
}



function addUserStory() {
    // À IMPLÉMENTER
    let sprint = {
        id: count,
        title: verifyStoryTitle(titleStory),
        description: verifyStoryDescription(storyDescription),
        sprintNumber: storySprint.value,
        assigned: sprintAssignedName.textContent
    }
    userStories.push(sprint)
    count++;
    console.log(userStories);

}

/**
 * Fonction pour afficher le Sprint Backlog avec toutes les stories par sprint
 * TODO:
 * - Récupérer le conteneur avec l'id 'sprintBacklog'
 * - Pour chaque sprint (1, 2, 3):
 *   - Filtrer les stories du sprint avec status 'backlog'
 *   - Générer le HTML: conteneur sprint avec header (titre + bouton Start)
 *   - Pour chaque story: afficher titre, description, assigné
 *   - Si aucune story: afficher "Aucune story dans ce sprint"
 * - Injecter tout le HTML généré dans le conteneur
 */
function renderSprintBacklog() {
    // À IMPLÉMENTER
}

/**
 * Fonction appelée lors du clic sur "Démarrer Sprint"
 * TODO:
 * - Filtrer toutes les stories du sprint demandé avec status 'backlog'
 * - Pour chaque story trouvée:
 *   - Changer son status à 'todo'
 *   - Ajouter la story au tableau 'boardStories'
 * - Retirer ces stories du tableau 'userStories'
 * - Appeler renderSprintBacklog() et renderBoard() pour mettre à jour l'affichage
 */
function startSprint(sprintNum) {
    // À IMPLÉMENTER
}

/**
 * Fonction pour afficher toutes les cartes sur le SCRUM Board
 * TODO:
 * - Pour chaque colonne ('todo', 'in-progress', 'testing', 'done'):
 *   - Récupérer le conteneur de la colonne
 *   - Filtrer les stories avec le status correspondant depuis 'boardStories'
 *   - Si aucune story: afficher "Aucune carte"
 *   - Sinon générer une carte pour chaque story avec:
 *     - Titre, description, badge assigné
 *     - Boutons "Suivant" (sauf pour done), "Précédent" (sauf pour todo), "Supprimer"
 *   - Injecter le HTML dans le conteneur
 */
function renderBoard() {
    // À IMPLÉMENTER
}

/**
 * Fonction utilitaire pour obtenir le status suivant dans le workflow
 * TODO:
 * - Créer un objet avec les transitions: todo→in-progress, in-progress→testing, testing→done
 * - Retourner le status suivant selon le status actuel
 */
function getNextStatus(current) {
    // À IMPLÉMENTER
}

/**
 * Fonction utilitaire pour obtenir le status précédent dans le workflow
 * TODO:
 * - Créer un objet avec les transitions: in-progress→todo, testing→in-progress, done→testing
 * - Retourner le status précédent selon le status actuel
 */
function getPrevStatus(current) {
    // À IMPLÉMENTER
}

/**
 * Fonction pour déplacer une carte d'une colonne à une autre
 * TODO
 * - Trouver la story dans 'boardStories' avec l'id donné
 * - Modifier son status avec newStatus
 * - Appeler renderBoard() pour actualiser l'affichage
 */
function moveCard(id, newStatus) {
    // À IMPLÉMENTER
}

/**
 * Fonction pour supprimer une carte du board
 * TODO:
 * - Filtrer 'boardStories' pour retirer la story avec l'id donné
 * - Appeler renderBoard() pour actualiser l'affichage
 */
function deleteCard(id) {
    // À IMPLÉMENTER
}

// Initialisation
renderSprintBacklog();
renderBoard();
