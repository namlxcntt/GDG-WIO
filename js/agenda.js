// Lấy thông tin diễn giả từ API
fetch('{{host}}/api/agenda/get-all', {
    headers: {
        'Authorization': 'Bearer token_dev'
    }
})
    .then(response => response.json())
    .then(data => {
        // Lấy thông tin ảnh của diễn giả
        data.forEach(speaker => {
            fetch(`{{host}}/api/check-in/images/${speaker.image}`, {
                headers: {
                    'Authorization': 'Bearer token_dev'
                }
            })
                .then(response => response.blob())
                .then(image => {
                    // Chuyển đổi ảnh thành URL base64
                    const reader = new FileReader();
                    reader.readAsDataURL(image);
                    reader.onloadend = () => {
                        speaker.imageUrl = reader.result;
                    }
                })
                .catch(error => console.error(error));
        });

        // Lưu thông tin diễn giả vào tệp JSON
        const json = JSON.stringify(data);
        const blob = new Blob([json], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'speakers.json';
        link.click();
    })
    .catch(error => console.error(error));
