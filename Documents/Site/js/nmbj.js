function afficher(asElement,asImg)
{
	$(asElement).attr("src","images/"+asImg + ".jpg");
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