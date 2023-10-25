<%--
  Created by IntelliJ IDEA.
  User: asus
  Date: 20/10/2023
  Time: 23:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/style.css"/>
    <script src="${pageContext.request.contextPath}/assets/js/script.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@500&display=swap" rel="stylesheet">
    <title>XO GAME</title>
    <style>
        body{
            font-family: 'Prompt', sans-serif;
        }
    </style>
</head>
<body>
<br><br>
<h1>OX GAME</h1>

<!-- Button Function-->
<div style="text-align: center;position: absolute;margin-left: 45%;margin-top: 3%;">
    <button onclick="startGame()" class="btn btn-success">เริ่มเกม</button>
    <button onclick="resetGame()" class="btn btn-warning">รีเซ็ตเกม</button>
</div>


<form action="${pageContext.request.contextPath}/saveToDB" method="get" style="text-align: center">
    <!-- Input Board size -->
    <label for="board-size">เลือกขนาดของกระดานเล่น: </label>
    <input type="number" name="board-size" id="board-size" min="3" max="10" value="3"/>


    <!-- Message Result -->
    <p id="message_result" name="message_result"></p>
    <input type="hidden" id="the_winner" name="the_winner">
    <input type="hidden" id="type" name="type">
    <!-- Board -->
    <br><br>
    <div id="game-board"></div>
    <br>
    <input type="submit" value="กดบันทึกประวัติการเล่น" id="btnSave" class="btn btn-outline-success" style="display: none; margin-left: 45%;"/>
</form>


</body>
</html>
