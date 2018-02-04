<?php
/****************************************************

        Development by wencms@gmail.com

****************************************************/

if(isset($_SERVER['SERVER_NAME'])) {
	$server = $_SERVER['SERVER_NAME'];
}

if($server == "lpcore.ru") {
	require_once "core/loader.php";
} else {
	if (file_exists("users/".$server."/index.html")) {
		include "users/".$server."/index.html";
	} else {
		include "users/none.html";
	}
}

?>