<?php
    include 'conn.php';
    $ye = isset($_POST['ye']) ? $_POST['ye'] : '1';
    $num = isset($_POST['num']) ? $_POST['num'] : '20';
    $aa = ($ye - 1) * $num;

    $sql = "SELECT * FROM `spxinxi` LIMIT $aa,$num;";
    $res = $conn->query($sql);
    $connt = $res->fetch_all(MYSQLI_ASSOC);

    $sql2 = "SELECT * FROM `spxinxi`;";
    $res2 = $conn->query($sql2);

    $datalist = array(
        'data' => $connt,
        'total' => $res2->num_rows,
        'ye' => $ye,
        'num' => $num
    );
    echo json_encode($datalist,JSON_UNESCAPED_UNICODE);
?>