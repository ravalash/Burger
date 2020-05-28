$(function () {
  $(".devour-burger").on("click", function (event) {
    const id = $(this).data("id");
    console.log(id);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(() => {
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      location.reload();
    });
  });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#addBurger").val().trim(),
      devoured: 0,
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      location.reload();
    });
  });
});
