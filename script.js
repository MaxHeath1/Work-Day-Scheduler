$(document).ready(function () {
    $("#currentDay").text(dayjs().format('MMMM D, YYYY'));

function updateColors() {
    let currentHour = dayjs().hour();
    $(".time-block").each(function () {
        let blockHour = parseInt($(this).attr("id").split(".")[1]);
        if (blockHour < currentHour) {
            $(this).addClass ("past");
        } else if (blockHour === currentHour) {
            $(this).addClass ("present");
        } else {
            $(this).addClass ("future");
        }
    });
}

updateColors();


$()













})