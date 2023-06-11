function trackClick(event) {
  const data = {
    element: event.target.tagName,
    id: event.target.id,
    class: event.target.className,
    timeStamp: new Date(),
  };

  sendDataToServer(data);
}

function sendDataToServer(data) {
  fetch("YOUR_API_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
}

document.addEventListener("DOMContentLoaded", (event) => {
  const data = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    timeStamp: new Date(),
  };

  sendDataToServer(data);
});

document.addEventListener("click", trackClick);
