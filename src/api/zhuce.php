<?php
    include 'conn.php';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $sql = "INSERT INTO `yhxinxi` (name,psw) VALUES ('$username','$password');";
    $res = $conn->query($sql);
    echo $res;
?>