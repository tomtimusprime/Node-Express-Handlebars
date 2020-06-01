// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#burgerform").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      console.log("Clicked button");
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#inputBurger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        () => {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );

    });
    
    $(".devourButton").on("click", (e) => {
       let id = $(e.currentTarget).data("id");

       $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
            devoured: 1
        }
      }).then(
        () => {
          console.log("devoured burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })

    $(".trashButton").on("click", (e) => {
       let id = $(e.currentTarget).data("id");

       $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        () => {
          console.log("Trashed Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })


  });


  //emmet extension
  //div
  //.(class)
  /*
  >child element
  + sibling element
  * times number of elements

  command + left arrow
  shift + command + right arrow

  */