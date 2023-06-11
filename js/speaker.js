// var myHeaders = new Headers();
// myHeaders.append("token_dev", "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHgsg6vJvRvBxoxvaURjikPbyqCm===");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };


// fetch("http://103.179.190.136:70/api/speaker/get-all", requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//         const speakers = [];

//         data.forEach((speaker) => {
//             const speakerData = {
//                 id: speaker.id,
//                 fullName: speaker.fullName,
//                 title: speaker.title,
//                 bio: speaker.bio,
//                 // lấy thông tin ảnh của diễn giả chuyển nó thành URL base64
//                 avatarUrl: `http://103.179.190.136:70/api/check-in/images/${speaker.avatar}`,
//             };

//             speakers.push(speakerData);
//         });

//         // lưu thông tin diễn giả vào tệp JSON
//         const json = JSON.stringify(speakers);
//         const blob = new Blob([json], { type: "application/json" });
//         const link = document.createElement("a");
//         link.href = URL.createObjectURL(blob);
//         link.download = "speakers.json";
//         link.click();
//     })
//     .catch((error) => console.error(error));

// WARNING: For GET requests, body is set to null by browsers.  

// WARNING: For GET requests, body is set to null by browsers.

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://103.179.190.136:70/api/speaker/get-all");
xhr.setRequestHeader("token_dev", "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHgsg6vJvRvBxoxvaURjikPbyqCm===");
// xhr.setRequestHeader("Referrer-Policy", "no-referrer-when-downgrade");
// // fix lỗi CORS
// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
// xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
// xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, token_dev");
// xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");


xhr.send();
