let currentPage = 1;

// Các mật khẩu khác nhau cho mỗi trang
// Thay đổi mật khẩu tại đây nếu bạn muốn thay đổi mật khẩu cho mỗi trang
const correctPassword = {
  1: "sondinh12", // Mật khẩu cho trang 1
  2: "sondinh23", // Mật khẩu cho trang 2
  3: "sondinh34" // Mật khẩu cho trang 3
};

// Chuyển sang trang tiếp theo
function nextPage(page) {
  // Ẩn tất cả các trang
  for (let i = 1; i <= 5; i++) {
    document.getElementById('page' + i).classList.add('hidden');
  }

  // Hiện trang hiện tại
  document.getElementById('page' + page).classList.remove('hidden');
  currentPage = page;
}

// Kiểm tra mật khẩu
function checkPassword(stage) {
  let inputPassword = "";
  let errorMessage = "";

  // Lấy mật khẩu người dùng nhập vào tùy theo trang
  if (stage === 1) {
    inputPassword = document.getElementById('password1').value;
    errorMessage = 'error-message1';
  } else if (stage === 2) {
    inputPassword = document.getElementById('password2').value;
    errorMessage = 'error-message2';
  } else if (stage === 3) {
    inputPassword = document.getElementById('password3').value;
    errorMessage = 'error-message3';
  }

  // Kiểm tra mật khẩu người dùng nhập
  if (inputPassword === correctPassword[stage]) {
    nextPage(currentPage + 1); // Chuyển sang trang tiếp theo
  } else {
    // Nếu mật khẩu sai, hiển thị thông báo lỗi
    document.getElementById(errorMessage).classList.remove('hidden');
  }
}

// Bắt đầu với trang đầu tiên
nextPage(1);
