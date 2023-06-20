
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

const env = {
  bearer: "MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQB07Z4rZ2zCNvoDLdWBelPi2fhccjNzLgY4YCLttk6qK7dJvpduQNXXBWyL0FGOQ4wg7V6M9KSXMeLO3sQI/erRTcObFzEZK1pHwtzx4PBi6cpD8HgqwmqicNXmjBWZPvMQH5YBUY0gXGr5bW0B1zLzheMUGTt2Ulch/5fUMzjBMEIqckYEThj54SQrx0ofMHYk3oPKdsSqbU/LQ0yY06HwB/RWJN6PemPzhJqnvw65EsFdiYnkmdjxIyuUhCmm1XGzmvOGp/3D+AF46fTJwf5/Bkj2EVJLW1iJvj7Clgrem155Ejde93ktqfobcqpwp9FN4IVWqiTu5P/+suamJZyZAgMBAAE=",
  token:"MIGeMA0GCSqGSIb3DQCBAQUAA4GMADCBiBKBgHgsg8vJvRvBxoxvaURjikPbyqCm==="
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

const urlAPI = `https://gdghanoiadmin.xyz/public/create/form`;

// code thực hiện submit form
const registerForm = document.getElementById("user-data-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const data = {
    fullName: formData.get("name"),
    email: formData.get("email"),
    age: formData.get("dob"),
    location: formData.get("location"),
    jobTitle: formData.get("jobTitle"),
    findUs: formData.get("findUs"),
    questionForUs: formData.get("suggestion"),
    experience: formData.get("experience"),
    checkIn: "false",
    createTime: new Date().getTime(),
    company: formData.get("company"),
  };

  if (validateForm(data)) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${urlAPI}`);
    xhr.setRequestHeader(
      "Authentication",
      `Bearer ${env.bearer}`
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(
      "token_form_dev",
      `${env.token}`
    );
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
