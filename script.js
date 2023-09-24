$(document).ready(function () {
    //Displays current time at the top of the page
    $("#currentDay").text(dayjs().format('dddd, MMMM D HH:mm'));

    // Get the current hour
    let currentHour = dayjs().hour();

    // Iterate over each time-block
    $(".time-block").each(function () {
        // Extract the hour from the id of the block
        let blockHour = parseInt($(this).attr("id").split("-")[1]);

        // Compare the block hour with the current hour and add appropriate class
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });

$(".saveBtn").on("click", function () {
    let blockId = $(this).parent().attr("id");
    let textAreaValue = $(this).siblings(".description").val();
    localStorage.setItem(blockId, textAreaValue);
  });
});