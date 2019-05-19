<?php
    include 'conn.php';
    $g_id = isset($_POST['g_id']) ? $_POST['g_id'] : '';
    $num = isset($_POST['num']) ? $_POST['num'] : '';
    $sql = "UPDATE `gouwuche` SET num='$num' WHERE id='$g_id';";
    $res = $conn->query($sql);
    echo $res;
?>