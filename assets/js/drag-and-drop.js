//récupérer les éléments DOM
const base = document.querySelector('#base');
const legende = document.querySelector('#legend');
const box = document.querySelectorAll('.box');
    

//Ecouter les élément avec l'évenement dragstart 
base.addEventListener('dragstart', dragStart);




function dragStart(ev) {

    // On ajoute différents types de données transportées
ev.dataTransfer.setData("text/plain", ev.target.id);
}


function dragover(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    };


function drop(ev)  {
   ev.preventDefault();
 // Get the data, which is the id of the drop target
 var data = ev.dataTransfer.getData("text");
  console.log(data);
 ev.target.appendChild(document.getElementById(data));
 // Clear the drag data cache (for all formats/types)
 ev.dataTransfer.clearData();
    };

   