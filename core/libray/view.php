<?php
/****************************************************

        Development by wencms@gmail.com

****************************************************/

class View {
	
	function render($content_view, $template_view, $name) {
		include "core/".$template_view."/main.php";
	}
	
}

?>