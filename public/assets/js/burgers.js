// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devor").on("click", function(event) {
      var id = $(this).data("id");
      var newDevor = $(this).data("newdevor");
  
      var newDevortate = {
        devor: newDevor
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevorState
      }).then(
        function() {
          console.log("changed devor to", newDevor);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newDevor = {
        name: $("#ca").val().trim(),
        devor: $("[name=devor]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newDevor
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  