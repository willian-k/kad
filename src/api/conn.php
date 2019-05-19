<?php
    $s_name = 'localhost';
    $u_name = 'root';
    $pswd = '';
    $dbname = '1902';

    $conn = new mysqli($s_name,$u_name,$pswd,$dbname);

    if($conn->connect_error) {
        die("连接失败：".$conn->connect_error);
    }
?>