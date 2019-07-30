<?php

    global $json_data;
    $json = file_get_contents('../data.json');
    $json = json_decode($json,true);
    $json_data = $json["users"];
?>
