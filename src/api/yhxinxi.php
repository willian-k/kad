<?php
    include 'conn.php';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $sql = "SELECT * FROM `yhxinxi` WHERE psw='$password' AND name='$username'";
    $res = $conn->query($sql);
    if($res->num_rows) {
        echo 'yes';
    }else {
        echo 'no';
    }
?>