<?php
/****************************************************

        Development by wencms@gmail.com

****************************************************/

class Controller_404 extends Controller {
	
	function action_index() {	
		$this->view->render("404.php", "default", "Ошибочка");
	}
	
}

?>