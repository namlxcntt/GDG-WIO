var myHeaders = new Headers();
myHeaders.append("token_dev", "MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHgsg6vJvRvBxoxvaURjikPbyqCm===");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// const urlAPI = "http://103.179.190.136:70/";

// function to get data from API
function getData() {
    const agendaData = localStorage.getItem('agendaData');
    const speakerData = localStorage.getItem('speakerData');

    if (agendaData && speakerData) {
        const agendaDataParsed = JSON.parse(agendaData);
        const speakerDataParsed = JSON.parse(speakerData);

        // Check if the data is up-to-date
        const lastUpdated = localStorage.getItem('lastUpdated');
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastUpdated;
        const minutesDiff = Math.floor(timeDiff / 60000);
        if (minutesDiff > 5) {
            // If the data is not up-to-date, fetch new data
            fetchAgendaData();
            fetchSpeakerData();
        } else {
            // If the data is up-to-date, use the data from localStorage
            printAgendaData(agendaDataParsed);
            printSpeakerData(speakerDataParsed);
        }
    } else {
        // If the data is not present in localStorage, fetch new data
        fetchAgendaData();
        fetchSpeakerData();
    }
}

function fetchAgendaData() {
    fetch(`${urlAPI}api/agenda/get-all`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const agendaData = JSON.stringify(data);
            localStorage.setItem('agendaData', agendaData);
            localStorage.setItem('lastUpdated', new Date().getTime());

            const agendaDataParsed = JSON.parse(agendaData);
            printAgendaData(agendaDataParsed);
        });
}

function fetchSpeakerData() {
    fetch(`${urlAPI}api/speaker/get-all`, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const speakerData = JSON.stringify(data);
            localStorage.setItem('speakerData', speakerData);
            localStorage.setItem('lastUpdated', new Date().getTime());

            const speakerDataParsed = JSON.parse(speakerData);
            printSpeakerData(speakerDataParsed);
        });
}

function printAgendaData(agendaDataParsed) {
    let timelineHTML = '';
    agendaDataParsed.data.forEach((agenda) => {
        timelineHTML += `
            <div class="entry">
                <div class="title">${agenda.room}</div>
                <div class="body">
                    <h3>Topic: ${agenda.title}</h3>
                    <p>${agenda.content}</p>
                </div>
            </div>
        `;
    });
    document.getElementById('datatimeline').innerHTML = timelineHTML;
}

function printSpeakerData(speakerDataParsed) {
    let speakerHTML = '';
    speakerDataParsed.data.forEach((speaker) => {
        speakerHTML += `
                    <div class="item">
                        <div class="card-style-twenty custom01"
                            style="background-image: url(${urlAPI}api/check-in/images/${speaker.avatar});">
                            <div class="">
                                <img src="" alt="" class="w-100">
                            </div>
                            <div class="course-data custom02">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="course-by fs-17 custom03">${speaker.fullName}
                                    </div>
                                </div>
                                <div class="custom04">
                                    <div class="d-flex align-items-center justify-content-between mt-10 mb-10">
                                        <strong class="price fw-500 fs-20 custom05">Title:</strong>
                                    </div>
                                    <a class="course-title fw-500 custom05" tabindex="0">${speaker.title}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;
    });
    document.getElementById('dataspeaker').innerHTML = speakerHTML;
}

fetchAgendaData();
fetchSpeakerData();
getData();
const agendaData = localStorage.getItem('agendaData');
const speakerData = localStorage.getItem('speakerData');

const agendaDataParsed = JSON.parse(agendaData);
const speakerDataParsed = JSON.parse(speakerData);
printAgendaData(agendaDataParsed);
printSpeakerData(speakerDataParsed);

