<?php
/****************************************************

        Development by wencms@gmail.com

****************************************************/

class Controller_editor extends Controller {
	
	function action_index() {
        $agent = $_SERVER['HTTP_USER_AGENT'];
        $agent_user = preg_match('/Chrome/i', $agent);
        if ($agent_user > 0) {
            $this->view->render("editor.php", "editor", "Редактор");
        } else {
            echo "error";
        } //else {
            //$agent_user2 = preg_match('/Chrome/i', $agent);
            //if($agent_user2 == "1") {
                //$this->view->render("editor.php", "editor", "Редактор");
            //} else {
                //echo "error";
            //}
        //}
	}
    
    function action_save() {      
        $src = $_POST["src"];      
        //$current = file_get_contents("users/$user/$page.html");
        //$pagesrc = str_replace('<body onmouseover="editor(event)" onmouseout="save(event)" oncontextmenu="return false;">','<body>',$src);
        //$current = str_replace('<script type="application/javascript" src="/core/default/js/editor.js"></script>','',$pagesrc);
        //file_put_contents("users/$user/$page.html", $current);
    }
    
    function action_orders() {	
		$this->view->render("editor.php", "editor", "Заказы");
	}
    
    function action_services() {	
		$this->view->render("editor.php", "editor", "Сервисы");
	}
    
    function action_settings() {	
		$this->view->render("editor.php", "editor", "Настройки");
	}
    
    function action_site() {
        
        echo '';
        
	}
	
}

?>