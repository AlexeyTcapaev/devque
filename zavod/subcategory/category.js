$(document).ready(function() {
  if (document.documentElement.clientWidth <= 768) $("aside").sidenav();
  let fullheights = document.querySelectorAll(".full-height");
  let a = 1;
  let b = 3;
  for (let index = 0; index < fullheights.length; index++) {
    if (document.documentElement.clientWidth > 1024)
      a = $(fullheights[index]).index() / 2;
    else a = $(fullheights[index]).index();
    if (a <= 0) a = 1;
    fullheights[index].style.gridRow = a + "/" + (a + 2);
  }
  const app = new Vue({
    el: "#app",
    data: {
      ToCheck: [],
      str: ""
    },
    watch: {
      ToCheck: function() {
        if (this.ToCheck.length < 2) {
          $(".show")
            .removeClass("disabled")
            .addClass("disabled");
          this.str = "";
        } else {
          $(".show").removeClass("disabled");
          this.str =
            "Вы сравниваете " +
            this.ToCheck[0].name +
            " и " +
            this.ToCheck[1].name;
        }
      }
    },
    methods: {
      AddForCheck: function(event) {
        var Obj = new Object();
        Obj.info = $(event.target)
          .closest(".card")
          .find(".card-content .info")
          .text();
        Obj.name = $(event.target)
          .closest(".card")
          .find(".card-content h5")
          .text();
        $(event.target)
          .closest(".card")
          .find(".card-content ul li")
          .each(function(i, elem) {
            Obj[
              $(elem)
                .children("p")
                .text()
            ] = $(elem)
              .children("span")
              .text();
          });

        if (
          !$(event.target)
            .closest(".card")
            .hasClass("tocheck")
        ) {
          if (this.ToCheck.length < 2) {
            $(event.target)
              .closest(".card")
              .addClass("tocheck");
            this.ToCheck.push(Obj);
          }
        } else {
          $(event.target)
            .closest(".card")
            .removeClass("tocheck");

          this.ToCheck.pop(Obj);
        }
      },
      toShow: function() {
        if (this.ToCheck.length === 2) {
          $("#modal2").modal("open");
        }
      }
    },
    mounted: function() {
      $(".modal").modal();
    }
  });
});
