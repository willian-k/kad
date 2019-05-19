<?php
    include 'conn.php';
    $g_id = isset($_POST['g_id']) ? $_POST['g_id'] : '';
    $sql = "DELETE FROM `gouwuche` WHERE id='$g_id';";
    $res = $conn->query($sql);
    echo $res;
?>