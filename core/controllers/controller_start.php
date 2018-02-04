<?php
/****************************************************

        Development by wencms@gmail.com

****************************************************/

class Controller_Start extends Controller {
	
	function action_index() {
        if(isset($_POST['new'])){
                $this->view->render("manager_add.php", "default", "Новый проект");
        } else {
            $this->view->render("start.php", "default", "Регистрация");
        }
	}
	
}

?>