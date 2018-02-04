<?php
/****************************************************

        Development by wencms@gmail.com

****************************************************/

class Engine {
	
	static function start() {
		$controller_name = "Main";
		$action_name = "index";
		$routes = explode("/", $_SERVER['REQUEST_URI']);
		if(!empty($routes[1])) {	
			$controller_name = $routes[1];
		}
		if (!empty($routes[2])) {
			$action_name = $routes[2];
		}
		$controller_name = "Controller_".$controller_name;
		$action_name = "action_".$action_name;
		$controller_file = strtolower($controller_name).".php";
		$controller_path = "core/controllers/".$controller_file;
		if(file_exists($controller_path)) {
			include "core/controllers/".$controller_file;
		} else {
			Engine::ErrorPage404();
		}
		$controller = new $controller_name;
		$action = $action_name;
		if(method_exists($controller, $action)) {
			$controller->$action();
		} else {
			Engine::ErrorPage404();
		}
	}
	
	function ErrorPage404()
	{
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('HTTP/1.1 404 Not Found');
		header("Status: 404 Not Found");
		header('Location:'.$host.'404');
    }
	
}
?>