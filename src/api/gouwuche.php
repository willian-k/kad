<?php
    include 'conn.php';
    $u_name = isset($_POST['u_name']) ? $_POST['u_name'] : '';
    $sql = "SELECT * FROM `gouwuche` WHERE u_name='$u_name'";
    $res = $conn->query($sql);
    $content=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>
