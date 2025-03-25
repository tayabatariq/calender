const monthName = document.getElementById('mont-name');
const dayName = document.getElementById('day-name');
const daynumber = document.getElementById('day-number');
const yearName = document.getElementById('year-name');

const date = new Date();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en",{month:"long"});
dayName.innerText = date.toLocaleString("en",{
    weekday:"long"
});
daynumber.innerText = date.getDate();
yearName.innerText = date.getFullYear();







