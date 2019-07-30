<?php
    include 'readJSON.php';

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8' );

    // $arr = array();
    if(isset($_POST['action'])) {
        echo json_encode($json_data, JSON_UNESCAPED_UNICODE);
    }

?>
