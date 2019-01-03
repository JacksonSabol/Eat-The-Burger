// When user 'devours' a burger (clicks Eat The Burger button)
$(".eat-the-burger").on("click", function (event) {
    // Prevent default action of refreshing page
    event.preventDefault();
    // Assign a variable to hold the id of the burger 'devoured'
    var burgerDevoured = $(this).data("id");
    // Log for testing
    console.log(burgerDevoured);
    // Send an AJAX PUT-request with jQuery
    // $.ajax({
    //     url: "/api/burgers/", burgerDevoured,
    //     type: 'PUT'
    //         // On success, run the following code
    //         .then(function () {
    //             console.log("Successfully Devoured!");
    //         })
    // });
});