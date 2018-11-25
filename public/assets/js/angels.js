$(function () {
    $(".angel-met").on("click", function (event) {
     alert("hey");
      var id = $(this).data("id");
      var newMet = $(this).data("newangel");
  
      var newAngelState = {
        met: newMet
      };
  
  
      $.ajax("/api/angels/" + id, {
        type: "PUT",
        data: newAngelState
      }).then(
        function () {
          console.log("changed met", newMet);
  
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function (event) {
     alert("angel");
      event.preventDefault();
  
      var newAngel = {
        name: $("#ca").val().trim(),
  
      };
  
  
      $.ajax("/api/angels", {
        type: "POST",
        data: newAngel
      }).then(
        function () {
          console.log("created new angel");
  
          location.reload();
        }
      );
    });
  
  
  });
  
  
  