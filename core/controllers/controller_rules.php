<?php
/****************************************************

        Development by wencms@gmail.com

****************************************************/

class Controller_Rules extends Controller {
	
	function action_index() {	
		$this->view->render("rules.php", "default", "Правила пользования сервиса");
	}
	
}

?>