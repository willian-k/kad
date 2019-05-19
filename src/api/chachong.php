<?php
    include 'conn.php';
    $u_name = isset($_POST['u_name']) ? $_POST['u_name'] : '';
    $g_name = isset($_POST['g_name']) ? $_POST['g_name'] : '';
    $img = isset($_POST['img']) ? $_POST['img'] : '';
    $num = isset($_POST['num']) ? $_POST['num'] : '';
    $pri = isset($_POST['pri']) ? $_POST['pri'] : '';
    $sql = "SELECT * FROM `gouwuche` WHERE u_name='$u_name' AND g_name='$g_name'";
    $res = $conn->query($sql);
    // echo  $res->num_rows;
    if($res->num_rows) {
        $content=$res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($content,JSON_UNESCAPED_UNICODE);
    }else{
        $sql = "INSERT INTO `gouwuche` (u_name,g_name,img,num,pri) VALUES ('$u_name','$g_name','$img','$num','$pri')";
        $res = $conn->query($sql);
        // echo $sql;
        echo $res;
    }
    
    
?>