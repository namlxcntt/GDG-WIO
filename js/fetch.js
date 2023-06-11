function getDataFromJson() {
    return fetch('data.json')
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error(error);
        return null;
      });
  }
  
  getDataFromJson().then(data => {
    if (data) {
      // Nếu có dữ liệu từ data.json thì sử dụng dữ liệu đó
      const timeline = document.getElementById("timeline-all");
      timeline.innerHTML = "";
  
      data.agenda.forEach((item) => {
        const timelineItem = document.createElement("div");
        timelineItem.classList.add("timeline-item");
        timelineItem.dataset.text = item.time;
        const timelineContent = document.createElement("div");
        timelineContent.classList.add("timeline__content");
        const img = document.createElement("img");
        img.classList.add("timeline__img");
        img.src = item.image;
        const h2 = document.createElement("h2");
        h2.classList.add("timeline__content-title");
        h2.textContent = item.name;
        const p = document.createElement("p");
        p.classList.add("timeline__content-desc");
        p.textContent = item.jobTitle;
        timelineContent.appendChild(img);
        timelineContent.appendChild(h2);
        timelineContent.appendChild(p);
        timelineItem.appendChild(timelineContent);
        timeline.appendChild(timelineItem);
      });
  
      generatespeakerlider(data.speaker);
    } else {
      // Nếu không có dữ liệu từ data.json thì lấy dữ liệu từ api và lưu vào data.json
      fetch(`${urlAPI}api-get-all-agenda`, {
        headers: {
          'token_form_dev': 'MIGeMA0GCSqGSIb3DQCBAQUAA4GMADCBiBKBgHgsg8vJvRvBxoxvaURjikPbyqCm==='
        }
      })
        .then((response) => response.json())
        .then((data) => {
          const timeline = document.getElementById("timeline-all");
          timeline.innerHTML = "";
  
          data.forEach((item) => {
            const timelineItem = document.createElement("div");
            timelineItem.classList.add("timeline-item");
            timelineItem.dataset.text = item.time;
            const timelineContent = document.createElement("div");
            timelineContent.classList.add("timeline__content");
            const img = document.createElement("img");
            img.classList.add("timeline__img");
            img.src = item.image;
            const h2 = document.createElement("h2");
            h2.classList.add("timeline__content-title");
            h2.textContent = item.name;
            const p = document.createElement("p");
            p.classList.add("timeline__content-desc");
            p.textContent = item.jobTitle;
            timelineContent.appendChild(img);
            timelineContent.appendChild(h2);
            timelineContent.appendChild(p);
            timelineItem.appendChild(timelineContent);
            timeline.appendChild(timelineItem);
          });
  
          getspeaker().then(speaker => {
            const data = { agenda: data, speaker: speaker };
            const jsonData = JSON.stringify(data);
            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'data.json';
            a.click();
          });
        })
        .catch((error) => console.error(error));
    }
  });
  
  function updateDataJson() {
    fetch(`${urlAPI}api-get-all-agenda`)
      .then((response) => response.json())
      .then((data) => {
        getspeaker().then(speaker => {
          const newData = { agenda: data, speaker: speaker };
          const jsonData = JSON.stringify(newData);
          const blob = new Blob([jsonData], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'data.json';
          a.click();
        });
      })
      .catch((error) => console.error(error));
  }