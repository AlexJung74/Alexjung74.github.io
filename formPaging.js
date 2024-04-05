const formPage1 = document.getElementById("form-page1");
const formPage2 = document.getElementById("form-page2");
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");

const progressBar = document.querySelector("progress");

const summaryCustomerName = document.getElementById("summary-customerName");
const summaryCustomerContact = document.getElementById("summary-customerContact");
const summaryCustomerNum = document.getElementById("summary-customerNum");
const summaryCustomerQuestion = document.getElementById("summary-customerQuestion");

const summaryRoomFromTo = document.getElementById("summary-roomFromTo");
const summarydDateRange = document.getElementById("summary-dateRange");
const summaryNonSomking = document.getElementById('summary-nonSmoking');
const summarySeaView = document.getElementById('summary-seaView');
const summaryRooms = document.getElementById("summary-rooms");
const summaryRoomPrice = document.getElementById("summary-roomPrice");

const summaryPayment = document.getElementById("summary-payment");
const summaryPaymentAmuont = document.getElementById("summary-paymentAmuont");

const formData = document.getElementById("collected-data");

function showPage(pageNumber) {
    switch (pageNumber) {
        case 1:
            formPage1.style.display = 'block';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            progressBar.value=25;
            break;

        case 2:
            formPage1.style.display = 'none';
            formPage2.style.display = 'block';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            progressBar.value=50;
            break;

        case 3:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'block';
            formPage4.style.display = 'none';
            progressBar.value=75;
            break;
        case 4:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'block';
            progressBar.value=100;
            updateSummary();
            break;
        default:
            break;
    }
}

function getFormData() {
    // example using ID-based fetch
    const fName = document.getElementById("name-first").value;
    const lName = document.getElementById("name-last").value;
    const email = document.getElementById("email").value;
    const phoneN = document.getElementById("phoneN").value;
    const adultNum = document.querySelector('select[name=adult]').value;
    const childtNum = document.querySelector('select[name=child]').value;
    const question1 = document.querySelector('input[name=radio1]:checked').value;
    const question2 = document.querySelector('input[name=radio2]:checked').value;
    const question3 = document.querySelector('input[name=radio3]:checked').value;

    // example using CSS selectors within formPage2
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;
    const dateRange = document.getElementById("dateRange").innerText;
    const roomsAvail = document.getElementById("roomsAvail").value;
    const roomsNeed = document.getElementById("roomsNeed").value;
    const nonSmoking = document.getElementById("nonSmoking").value;
    const seaView = document.getElementById("seaView").value;
    const pricePer1 = document.getElementById("pricePer1").value;
    const totalPrice = document.getElementById("totalPrice").value;

   // example using CSS selectors within formPage3
   const cardNumber = document.getElementById("cardNumber").value;
   const mm = document.querySelector('select[name=mm]').value;
   const yy = document.querySelector('select[name=yy]').value;
   const cardholderName = document.getElementById("cardholderName").value;
   const cvv = document.getElementById("cvv").value;
   const totalAmount = document.getElementById("totalAmount").value;

    return data = {
        name: fName + " " + lName,
        contact: "EMail: " + email + "<br><span style=\"margin-left: 60px;\">Phone Number: " + phoneN + "</span>",
        numberOfCustomer: "Adult: " + adultNum + "&nbsp;&nbsp;&nbsp;Child: " + childtNum,
        question: "No.1: " + question1+ "&nbsp;&nbsp;&nbsp;No.2: " + question2 + "&nbsp;&nbsp;&nbsp;No.3: " + question3,
        fromTo: "From: " + fromDate + "&nbsp;&nbsp;&nbsp;To: " + toDate,
        dateRange: "(" + dateRange + "&nbsp;Days)",
        Rooms: "Rooms available: " + roomsAvail + "<br><span style=\"margin-left: 60px;\">Rooms you want: " + roomsNeed + "</span>",
        price: "Price per 1 room: " + pricePer1 + "<br><span style=\"margin-left: 60px;\">Total Price: " + totalPrice + "</span>",
        payment: "Credit Card Number: " + cardNumber + "<br><span style=\"margin-left: 60px;\">Expiration period: " + yy +"/" + mm + "</span><br><span style=\"margin-left: 60px;\">Cardholder Name: " + cardholderName + "</span><br><span style=\"margin-left: 60px;\">CVV Number: " + cvv + "</span>",
        amount: totalAmount
    };
}

function updateSummary() {
    const data = getFormData();

    summaryCustomerName.innerHTML = data.name;
    summaryCustomerContact.innerHTML = data.contact;
    summaryCustomerNum.innerHTML = data.numberOfCustomer;
    summaryCustomerQuestion.innerHTML = data.question;
    summaryRoomFromTo.innerHTML = data.fromTo;
    summarydDateRange.innerHTML = data.dateRange;
    summaryRooms.innerHTML = data.Rooms;
    summaryRoomPrice.innerHTML = data.price;
    summaryPayment.innerHTML = data.payment;
    summaryPaymentAmuont.innerHTML = data.amount;
}

function submitData() {
    const dataRow = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellVehicle = document.createElement("td");
    
    dataRow.appendChild(cellName);
    dataRow.appendChild(cellVehicle);
    
    const data = getFormData();

    cellName.innerHTML = data.name;
    cellVehicle.innerHTML = data.vehicle;

    formData.appendChild(dataRow);
}



