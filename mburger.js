visible = true;
function initElement()
{
  var p = document.getElementById("mburger");
  // NOTE: showAlert(); ou showAlert(param); NE fonctionne PAS ici.
  // Il faut fournir une valeur de type function (nom de fonction déclaré ailleurs ou declaration en ligne de fonction).
  p.onclick = SwitchVisible;
};

function SwitchVisible()
{
	if (visible == true){
		document.getElementById("ulsecrete").style.display = "flex";
		
		document.getElementById("txt1").style.display = "none";
		document.getElementById("txt2").style.display = "none";
		document.getElementById("mainImg").style.visibility = "hidden";
		visible=false;
	}else{
		document.getElementById("ulsecrete").style.display = "none";
		
		document.getElementById("txt1").style.display = "flex";
		document.getElementById("txt2").style.display = "flex";
		document.getElementById("mainImg").style.visibility = "visible";
		visible=true;
	}
}
