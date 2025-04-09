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

  // ✅ Đợi toàn bộ nội dung trang tải xong mới gọi nextPage
  window.onload = () => {
    nextPage(1);
  };
</script>
