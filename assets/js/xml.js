 // Функция для загрузки XML файла
 function loadXMLDoc(filename) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            displayXML(this);
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}

// Функция для отображения XML данных
function displayXML(xml) {
    let xmlDoc = xml.responseXML;
    let support = xmlDoc.getElementsByTagName("support")[0];
    let instagram = support.getElementsByTagName("instagram")[0].childNodes[0].nodeValue;
    let email = support.getElementsByTagName("email")[0].childNodes[0].nodeValue;
    let vk = support.getElementsByTagName("VK")[0].childNodes[0].nodeValue;

    let htmlContent = `
        <div class="support-item">
            <b>Instagram:</b> ${instagram}
        </div>
        <div class="support-item">
            <b>Email:</b> ${email}
        </div>
        <div class="support-item">
            <b>VK:</b> ${vk}
        </div>
    `;

    document.getElementById("xmlContent").innerHTML = htmlContent;
}

// Загрузка XML файла из папки xml
loadXMLDoc("assets/data.xml");