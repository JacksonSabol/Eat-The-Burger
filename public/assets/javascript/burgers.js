// When user 'devours' a burger (clicks Eat The Burger button)
$(".eat-the-burger").on("click", function (event) {
    // Prevent default action of refreshing page
    event.preventDefault();
    // Assign a variable to hold the id of the burger 'devoured'
    var burgerDevoured = $(this).data("id");
    // Send an AJAX PUT-request with jQuery
    $.ajax({
        url: "/api/burgers/" + burgerDevoured + "",
        type: 'PUT',
        success: function (response) {
            // Reload the page upon receiving a callback response to display devoured burger on the correct side
            location.reload();
        }
    });
});