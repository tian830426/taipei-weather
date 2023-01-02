const locationAndDate = document.querySelector(".location-and-date");
const today = new Date();
const month = today.getMonth();
const date = today.getDate();
const day = today.getDay();

const locationAndDateHtml = `
    <h1 class="location-and-date__location">Taipei, TW</h1>
    <div>${dayTrans(day)} ${monthTrans(month)} ${date}</div>
`;
locationAndDate.insertAdjacentHTML("beforeend", locationAndDateHtml);

function monthTrans(month) {
    let monthForEN = ``;
    if (month === 0) {
        monthForEN = `Jan`;
    } else if (month === 1) {
        monthForEN = `Feb`;
    } else if (month === 2) {
        monthForEN = `Mar`;
    } else if (month === 3) {
        monthForEN = `Apr`;
    } else if (month === 4) {
        monthForEN = `May`;
    } else if (month === 5) {
        monthForEN = `Jun`;
    } else if (month === 6) {
        monthForEN = `Jul`;
    } else if (month === 7) {
        monthForEN = `Aug`;
    } else if (month === 8) {
        monthForEN = `Sep`;
    } else if (month === 9) {
        monthForEN = `Oct`;
    } else if (month === 10) {
        monthForEN = `Nov`;
    } else if (month === 11) {
        monthForEN = `Dec`;
    }
    return monthForEN;
}

function dayTrans(day) {
    let dayForEN = ``;
    if (day === 0) {
        dayForEN = `Sunday`;
    } else if (day === 1) {
        dayForEN = `Monday`;
    } else if (day === 2) {
        dayForEN = `Tuesday`;
    } else if (day === 3) {
        dayForEN = `Wednesday`;
    } else if (day === 4) {
        dayForEN = `Thursday`;
    } else if (day === 5) {
        dayForEN = `Friday`;
    } else if (day === 6) {
        dayForEN = `Saturday`;
    }
    return dayForEN;
}


