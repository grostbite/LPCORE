<?php
/****************************************************

        Development by wencms@gmail.com

****************************************************/

class Controller_Main extends Controller {
	
	function action_index() {
		$this->view->render("main.php", "default", "Бесплатный конструктор Landing Page");
	}
	
}

?>