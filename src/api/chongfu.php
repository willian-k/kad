<?php
    include 'conn.php';
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $sql = "SELECT * FROM `yhxinxi` WHERE name='$username'";
    $res = $conn->query($sql);
    if($res->num_rows) {
        echo 'yes';
    }else {
        echo 'no';
    }
?>