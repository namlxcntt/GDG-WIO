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
  if (param) {
    div1.style.cssText = "display:none !important";
    div2.style.cssText = "display:block !important";
    div3.style.cssText = "display:none !important";
  } else {
    div1.style.cssText = "display:none !important";
    div2.style.cssText = "display:none !important";
    div3.style.cssText = "display:block !important";
  }
}

const env = {
  bearer:
    "MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQB07Z4rZ2zCNvoDLdWBelPi2fhccjNzLgY4YCLttk6qK7dJvpduQNXXBWyL0FGOQ4wg7V6M9KSXMeLO3sQI/erRTcObFzEZK1pHwtzx4PBi6cpD8HgqwmqicNXmjBWZPvMQH5YBUY0gXGr5bW0B1zLzheMUGTt2Ulch/5fUMzjBMEIqckYEThj54SQrx0ofMHYk3oPKdsSqbU/LQ0yY06HwB/RWJN6PemPzhJqnvw65EsFdiYnkmdjxIyuUhCmm1XGzmvOGp/3D+AF46fTJwf5/Bkj2EVJLW1iJvj7Clgrem155Ejde93ktqfobcqpwp9FN4IVWqiTu5P/+suamJZyZAgMBAAE=",
};

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
const form = document.getElementById("user-data-form");
const inputsContainer = document.getElementById("form-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const isTermValid = validateField(form, "term");
  if (!isTermValid) return;
  const data = {
    fullName: formData.get("name"),
    email: formData.get("email"),
    age: formData.get("dob"),
    location: formData.get("location"),
    jobTitle: formData.get("jobTitle"),
    findUs: formData.get("findUs"),
    questionForUs: formData.get("suggestion"),
    experience: formData.get("yoe"),
    checkIn: "false",
    createTime: new Date().getTime(),
    company: formData.get("company"),
  };

  if (validateForm(data)) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${urlAPI}`);
    xhr.setRequestHeader("Authorization", `Bearer ${env.bearer}`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("token_form_dev", `${env.bearer}`);
    xhr.onload = function () {
      if (xhr.status === 200 && !xhr.data) {
        changeDiv(true);
      } else {
        changeDiv(false);
      }
    };
    xhr.onerror = function () {
      changeDiv(false);
    };
    xhr.send(JSON.stringify(data));
  }
});

function onClickUnderStood() {
  let checkbox = document.getElementById("accept");
  checkbox.checked = true;
}

function validateField(form, fieldName) {
  const errorEl = document.getElementById(`${fieldName}Error`);
  if (form.elements[fieldName]?.value == "") {
    switch (fieldName) {
      case "name":
        errorEl.textContent = "Name is required";
        break;
      case "dob":
        errorEl.textContent = "Date of birth is required";
        break;
      case "email":
        errorEl.textContent = "Email is required";
        break;
      case "location":
        errorEl.textContent = "Location is required";
        break;
      case "jobTitle":
        errorEl.textContent = "Job title is required";
        break;
      case "yoe":
        errorEl.textContent = "Year of experience is required";
        break;

      case "company":
        errorEl.textContent = "Company is required";
        break;
    }

    return false;
  }

  if (fieldName === "term" && !form.elements[fieldName].checked) {
    errorEl.textContent = "Term is required";
    return false;
  }

  errorEl.textContent = "";
  return true;
}

inputsContainer.addEventListener("focusout", (event) => {
  if (event.target.name !== "term") validateField(form, event.target.name);
});
