let div1 = document.getElementById("register-form");
let div2 = document.getElementById("submit-success-form");
let div3 = document.getElementById("submit-fail-form");
let smAgain1 = document.getElementById("submit-button-agn");
let smAgain2 = document.getElementById("submit-button-agn-1");

function registerAgain() {
  div1.style.cssText = "display:block !important";
  div2.style.cssText = "display:none !important";
  div3.style.cssText = "display:none !important";
}
function changeDiv(param) {
  switch (param) {
    case "success":
      div1.style.cssText = "display:none !important";
      div2.style.cssText = "display:block !important";
      div3.style.cssText = "display:none !important";
      break;
    case "fail":
      div1.style.cssText = "display:none !important";
      div2.style.cssText = "display:none !important";
      div3.style.cssText = "display:block !important";
      break;
  }
}

function validateForm(data) {
  //"Email"
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(data.email)) {
    alert("Vui lòng nhập địa chỉ email hợp lệ");
    return false;
  }

  return true;
}

smAgain1.addEventListener("click", registerAgain);
smAgain2.addEventListener("click", registerAgain);

const urlAPI = `http://103.179.190.136:70/`;

// code thực hiện submit form
const registerForm = document.getElementById("user-data-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const data = {
    "fullName": formData.get("name"),
    "email": formData.get("email"),
    "age": formData.get("dob"),
    "location": formData.get("location"),
    "jobTitle": formData.get("jobTitle"),
    "findUs": formData.get("findUs"),
    "questionForUs": formData.get("suggestion"),
    "experience": formData.get("experience"),
    "checkIn": "false",
    "createTime": new Date().getTime(),
    "topicCare": "",
    "prefixName": "",
    "company": formData.get("company"),
  };

  if (validateForm(data)) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${urlAPI}api/form/create/`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("token_form_dev", "MIGeMA0GCSqGSIb3DQCBAQUAA4GMADCBiBKBgHgsg8vJvRvBxoxvaURjikPbyqCm===");
    xhr.onload = function () {
      if (xhr.status === 200) {
        changeDiv("success");
      } else {
        changeDiv("fail");
      }
    };
    xhr.onerror = function () {
      changeDiv("fail");
    };
    xhr.send(JSON.stringify(data));
  }

});

/** agenda
 *  time (text)
 *  name (text)
 *  image (text - url image)
 *  jobTitle (text)
 */

/** speaker
 * image (text - url image)
 * speaker (text)
 * pronouns (text)
 * title (text)
 * topic (text)
 */


// // tracking website
// function trackClick(event) {
//   const data = {
//     element: event.target.tagName,
//     id: event.target.id,
//     class: event.target.className,
//     timeStamp: new Date(),
//   };

//   sendDataToServer(data);
// }

// // tracking click
// document.addEventListener("click", trackClick);

// // tracking viewed
// document.addEventListener("DOMContentLoaded", (event) => {
//   const data = {
//     userAgent: navigator.userAgent,
//     language: navigator.language,
//     timeStamp: new Date(),
//   };

//   sendDataToServer(data);
// });
