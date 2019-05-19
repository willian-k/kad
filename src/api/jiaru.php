<?php
    include 'conn.php';
    $u_name = isset($_POST['u_name']) ? $_POST['u_name'] : '';
    $g_name = isset($_POST['g_name']) ? $_POST['g_name'] : '';
    $num = isset($_POST['num']) ? $_POST['num'] : '';
    $sql = "UPDATE `gouwuche` SET num='$num' WHERE u_name ='$u_name' AND g_name ='$g_name';";
    $res = $conn->query($sql);
?>