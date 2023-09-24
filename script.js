$(document).ready(function () {
    $("#currentDay").text(dayjs().format('MMMM D, YYYY'));
    console.log

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
        console.log
    });
}

updateColors();


$(".time-block").each(function () {
    let id = $(this).attr("id");
    let savedText = localStorage.getItem(id);
    if (savedText) {
        $(this).find(".description").val(savedText);
    }
    console.log
});

$(".saveBtn").on("click", function() {
let blockId = $(this).parent().attr("id");
let textAreaValue = $(this).siblings(".description").val();
localStorage.setItem(blockId, textAreaValue)
console.log
});
});