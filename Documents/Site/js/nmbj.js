function afficher(asElement,asImg)
{
	//Modification de l'image
	$(asElement).attr("src","images/"+asImg + ".jpg");
	changeText(asElement);
}

function changeText(asElement){
	var texte = "none";
	var nom = "Who is he?";
	if(asElement == "#jb_pres"){ texte = "Cet amateur de galette saucisses..."; nom = "JB"}
	if(asElement == "#adrien_pres") {texte = "Ce grand charmeur ...."; nom = "Adrilll"}
	if(asElement == "#coco_pres") {texte = "Il a tartiné, il a pilé"; nom = "CoCo"}
	if(asElement == "#fefe_pres") {texte = "Ce tchatcheur en puissance..."; nom = "Feyfey"}
	if(asElement == "#pierre_pres") {texte = "Le bel aviateur avec sa moustache bien taillée"; nom = "Pierro"}
	$("#texte_pres").text(texte);
	$("#prenom_pres").text(nom);
	
}

$(document).ready(function()
{
	$("#jb_pres").mouseover(function() { afficher("#jb_pres","jb"); });
	$("#jb_pres").mouseout(function() { afficher("#jb_pres","jb_nb"); });

	$("#adrien_pres").mouseover(function() { afficher("#adrien_pres","adrien"); });
	$("#adrien_pres").mouseout(function() { afficher("#adrien_pres","adrien_nb"); });

	$("#coco_pres").mouseover(function() { afficher("#coco_pres","corentin"); });
	$("#coco_pres").mouseout(function() { afficher("#coco_pres","corentin_nb"); });

	$("#fefe_pres").mouseover(function() { afficher("#fefe_pres","felix"); });
	$("#fefe_pres").mouseout(function() { afficher("#fefe_pres","felix_nb"); });

	$("#pierre_pres").mouseover(function() { afficher("#pierre_pres","pierre"); });
	$("#pierre_pres").mouseout(function() { afficher("#pierre_pres","pierre_nb"); });
} );