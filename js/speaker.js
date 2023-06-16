var myHeaders = new Headers();
myHeaders.append("token_dev", "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHgsg6vJvRvBxoxvaURjikPbyqCm===");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let urlAPI = "http://103.179.190.136:70/";

fetch(`${urlAPI}api/agenda/get-all`, requestOptions)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const agendaData = JSON.stringify(data);
        localStorage.setItem('agendaData', agendaData);
    });

fetch(`${urlAPI}api/speaker/get-all`, requestOptions)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const speakerData = JSON.stringify(data.speaker);
        localStorage.setItem('speakerData', speakerData);
    });

fetch(`${urlAPI}api/check-in/images/${speaker.image}`)
    .then(function (response) {
        return response.blob();
    })
    .then(function (blob) {
        const url = URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error(error);
    });

const agendaData = JSON.parse(localStorage.getItem('agendaData'));
const speakerData = JSON.parse(localStorage.getItem('speakerData'));

speakerData.forEach((speaker) => {
    const speakerDiv = document.createElement("div");
    speakerDiv.classList.add("speaker-item");

    const speakerImg = document.createElement("img");
    speakerImg.src = `speaker/${speaker.image}`;
    speakerImg.alt = speaker.fullname;
    speakerDiv.appendChild(speakerImg);

    const speakerName = document.createElement("h3");
    speakerName.textContent = speaker.fullname;
    speakerDiv.appendChild(speakerName);

    const speakerTitle = document.createElement("p");
    speakerTitle.textContent = speaker.title;
    speakerDiv.appendChild(speakerTitle);

    const speakerBio = document.createElement("p");
    speakerBio.textContent = speaker.bio;
    speakerDiv.appendChild(speakerBio);

    speakerSlider.appendChild(speakerDiv);
});

agendaData.forEach((agenda) => {
    const agendaDiv = document.createElement("div");
    agendaDiv.classList.add("agenda-item");

    const agendaTime = document.createElement("p");
    agendaTime.classList.add("agenda-time");
    agendaTime.textContent = agenda.time;
    agendaDiv.appendChild(agendaTime);

    const agendaName = document.createElement("h3");
    agendaName.classList.add("agenda-name");
    agendaName.textContent = agenda.name;
    agendaDiv.appendChild(agendaName);

    const agendaImg = document.createElement("img");
    agendaImg.classList.add("agenda-img");
    agendaImg.src = agenda.image;
    agendaImg.alt = agenda.name;
    agendaDiv.appendChild(agendaImg);

    const agendaJobTitle = document.createElement("p");
    agendaJobTitle.classList.add("agenda-jobtitle");
    agendaJobTitle.textContent = agenda.jobTitle;
    agendaDiv.appendChild(agendaJobTitle);

    agendaList.appendChild(agendaDiv);
});