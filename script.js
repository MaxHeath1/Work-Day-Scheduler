$(document).ready(function () {
    $("#currentDay").text(dayjs().format('dddd, MMMM D HH:mm'));

    let currentHour = dayjs().hour();

    $(".time-block").each(function () {
        let blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });

    $(".time-block").each(function () {
        let id = $(this).attr("id");
        let savedText = localStorage.getItem(id);
        if (savedText) {
          $(this).find(".description").val(savedText);
        }
      });

$(".saveBtn").on("click", function () {
    let blockId = $(this).parent().attr("id");
    let textAreaValue = $(this).siblings(".description").val();
    localStorage.setItem(blockId, textAreaValue);
  });
});