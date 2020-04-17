$(() => {
  $("#newBurgerForm").on("submit", (event) => {
    event.preventDefault()
    let value = $("#burgerInput").val().trim()
    let data = {
      burger_name: value,
      devoured: false,
    }
    if (value) {
      $.ajax({
        url: "/api/burgers",
        type: "POST",
        data,
      }).then(() => location.reload())
    }
  })

  $("#devourButton").on("click", (event) => {
    let id = $(event.target).data("id")
    let data = { devoured: true }
    $.ajax({
      url: `/api/burgers/${id}/devoured`,
      type: "PUT",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
    }).then(() => location.reload())
  })
})
