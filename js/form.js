function validateForm(data) {
    // Kiểm tra trường "Name"
    if (data.name.trim() === '') {
      alert('Vui lòng nhập tên');
      return false;
    }
  
    // Kiểm tra trường "Email"
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(data.email)) {
      alert('Vui lòng nhập địa chỉ email hợp lệ');
      return false;
    }
  
    // Thêm các kiểm tra khác nếu cần
  
    return true;
  }

document.getElementById('submit-button').addEventListener('click', async function(event) {
    event.preventDefault();
  
    const formData = new FormData(document.getElementById('user-data-form'));
    const data = Object.fromEntries(formData.entries());
  
    // Kiểm tra tính hợp lệ của dữ liệu
    if (!validateForm(data)) {
      return;
    }
  
    // Gửi dữ liệu nếu hợp lệ
    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        $('#successModal').modal('show');
        document.getElementById('user-data-form').style.display = 'none';
      } else {
        alert('Có lỗi xảy ra, vui lòng thử lại');
      }
    } catch (error) {
      alert('Có lỗi xảy ra, vui lòng thử lại');
    }
  });