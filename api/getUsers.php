<?php
    include 'readJSON.php';

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET,POST');
    header('Content-Type: application/json; charset: utf-8' );

    // $arr = array();
    // if(isset($_POST['action'])) {
    $json = file_get_contents('../data.json');
    $json = json_decode($json,true);
    $json_data = $json["users"];
    echo json_encode($json_data, JSON_UNESCAPED_UNICODE);
    // }

?>
