<?php
    include 'conn.php';
    $id = isset($_POST['id']) ? $_POST['id'] : '0';
    $sql = "SELECT * FROM `spxinxi` WHERE id='$id'";
    $res = $conn->query($sql);
    $connt = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($connt,JSON_UNESCAPED_UNICODE);
?>