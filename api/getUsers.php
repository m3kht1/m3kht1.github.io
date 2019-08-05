<?php
    include 'readJSON.php';

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8' );

    // if(isset($_POST['action'])) {
        // if($_POST['action'] == 'queen') {
           $json = file_get_contents('../data.json');
           $json = json_decode($json,true);
           $json_data = $json["queen"];
           echo json_encode($json_data, JSON_UNESCAPED_UNICODE);
       // }
   // }
?>
