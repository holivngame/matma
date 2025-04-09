<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HOLIVN - GAME VUI Ở ĐÂY NHÉ</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <!-- Trang 1 -->
  <div id="page1">
    <h1>Giải trí một chút game ở đây nha đại gia đình Holivn</h1>
    <div>
      <label for="team-name">Nhập tên đội chơi:</label>
      <input type="text" id="team-name" placeholder="Nhập tên đội chơi">
      <button onclick="nextPage(2)">Bắt đầu</button>
    </div>
  </div>

  <!-- Trang 2 -->
  <div id="page2" class="hidden">
    <h1>Đáp án mật thư thứ 1</h1>
    <img src="banner1.jpg" alt="Mật thư">
    <input type="password" id="password1" placeholder="Nhập mật khẩu">
    <button onclick="checkPassword(1)">Tiếp tục</button>
    <p id="error-message1" class="hidden">Mật khẩu sai. Vui lòng thử lại.</p>
  </div>

  <!-- Trang 3 -->
  <div id="page3" class="hidden">
    <h1>Đáp án mật thư thứ 2</h1>
    <img src="banner2.jpg" alt="Mật thư">
    <input type="password" id="password2" placeholder="Nhập mật khẩu">
    <button onclick="checkPassword(2)">Tiếp tục</button>
    <p id="error-message2" class="hidden">Mật khẩu sai. Vui lòng thử lại.</p>
  </div>

  <!-- Trang 4 -->
  <div id="page4" class="hidden">
    <h1>Đáp án mật thư thứ 3</h1>
    <img src="hahaa.jpg" alt="Mật thư">
    <input type="password" id="password3" placeholder="Nhập mật khẩu">
    <button onclick="checkPassword(3)">Tiếp tục</button>
    <p id="error-message3" class="hidden">Mật khẩu sai. Vui lòng thử lại.</p>
  </div>

  <!-- Trang 5 -->
  <div id="page5" class="hidden">
    <h1>Sao giỏi zữ vậy mấy ông mấy bà, giờ đi theo sơ đồ này để đào kho báu nhé</h1>
    <img src="hihi.jpg" alt="Mật thư">
  </div>

  <script>
    let currentPage = 1;

    const correctPassword = {
      1: "sondinh12",
      2: "sondinh23",
      3: "sondinh34"
    };

    function nextPage(page) {
      for (let i = 1; i <= 5; i++) {
        const p = document.getElementById('page' + i);
        if (p) p.classList.add('hidden');
      }
      const next = document.getElementById('page' + page);
      if (next) next.classList.remove('hidden');
      currentPage = page;
    }

    function checkPassword(stage) {
      let inputPassword = "";
      let errorMessageId = "";

      if (stage === 1) {
        inputPassword = document.getElementById('password1').value;
        errorMessageId = 'error-message1';
      } else if (stage === 2) {
        inputPassword = document.getElementById('password2').value;
        errorMessageId = 'error-message2';
      } else if (stage === 3) {
        inputPassword = document.getElementById('password3').value;
        errorMessageId = 'error-message3';
      }

      if (inputPassword === correctPassword[stage]) {
        nextPage(currentPage + 1);
      } else {
        document.getElementById(errorMessageId).classList.remove('hidden');
      }
    }

    // ❌ KHÔNG gọi nextPage(1); ở đây — để mặc định trang 1 hiển thị
  </script>
</body>
</html>
