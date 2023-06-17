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
    agendaDataParsed?.data.forEach((agenda) => {
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

const bgColor = ['#428EFF', '#FFBB01', '#FF5145']
const BG_COLOR_NUMB = 3

function printSpeakerData(speakerDataParsed) {
    let speakerHTML = '';
    speakerDataParsed?.data.forEach((speaker, index) => {
        speakerHTML += `                
            <div class="item">
                <div class="card-style-twenty" style="background-color: ${bgColor[index%BG_COLOR_NUMB]}">
                    <img src="${urlAPI}api/check-in/images/${speaker.avatar}" alt="" class="speaker-image">
                    <div class="course-data" >
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="course-by fw-bold">${speaker.fullName}</p>
                        </div>
                        <div>
                            <div class="d-flex align-items-center justify-content-between mt-10 mb-10">
                                <strong class="price fw-500 fs-20">Topic: ${speaker.title}</strong>
                            </div>
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

