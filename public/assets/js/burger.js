$(function () {
  //Listener for devour button. Grabs associated ID of burger to pass to API
  $(".devour-burger").on("click", function (event) {
    const id = $(this).data("id");
    console.log(id);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(() => {
      location.reload();
    });
  });

  //Listener for delete button. Grabs associated ID of burger to pass to API
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      location.reload();
    });
  });

  //Add burger button listener. Collects user input to pass for burger creation
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
