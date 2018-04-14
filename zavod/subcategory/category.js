$(document).ready(function() {
  if (document.documentElement.clientWidth < 768) {
    $(".buttons").css(
      "margin-top",
      $(".nav-wrapper").height() + $(".breadcrumbs").height() + 10
    );
  }
  window.addEventListener(
    "onchange",
    function() {
      if (document.documentElement.clientWidth < 768) {
        $(".buttons").css(
          "margin-top",
          $(".nav-wrapper").height() + $(".breadcrumbs").height() + 10
        );
      }
    },
    true
  );
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
      str: "",
      rem: "",
      ToCard: {},
      check: false
    },
    watch: {
      ToCheck: function() {
        sessionStorage["mass"] = JSON.stringify(this.ToCheck);
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
      Bind: function(event) {
        if (
          $(event.target)
            .closest(".card")
            .hasClass("tocheck")
        ) {
          this.check = true;
        } else this.check = false;
        var Obj = new Object();
        Obj = $(event.target).closest(".card");
        this.rem = Obj;
        this.ToCard = {};
        this.ToCard.img = $(Obj).closest(".card").find(".card-image img").attr("src")
        this.ToCard.info = $(Obj)
          .closest(".card")
          .find(".card-content p.noshow")
          .text();
        this.ToCard.name = $(Obj)
          .closest(".card")
          .find(".card-content h5")
          .text();
        var proper = {};
        var fff = new Array();
        $(Obj)
          .closest(".card")
          .find(".card-content ul li")
          .each(function(i, elem) {
            proper[
              $(elem)
                .children("p")
                .text()
            ] = $(elem)
              .children("span")
              .text();
            if (fff.indexOf(proper) === -1) fff.push(proper);
          });
        this.ToCard.properties = fff;
      },
      AddForCheck: function(event) {
        if (this.check === false) this.check = true;
        else this.check = false;
        if (!$(this.rem).hasClass("tocheck")) {
          if (this.ToCheck.length < 2) {
            $(this.rem).addClass("tocheck");
            this.ToCheck.push(this.ToCard);
          }
        } else {
          $(this.rem).removeClass("tocheck");
          for (var i = 0; i < this.ToCheck.length; i++) {
            if (this.ToCheck[i].name === this.ToCard.name)
              this.ToCheck.splice(i, 1);
          }
        }
      },
      toShow: function() {
        if (this.ToCheck.length === 2) {
          $("#modal2").modal("open");
        }
      }
    },
    mounted: function() {
      if (sessionStorage["mass"])
        for (let i = 0; i < JSON.parse(sessionStorage["mass"]).length; i++) {
          for (let j = 0; j < $(".category-list").children().length; j++) {
            var b = $(".category-list").children()[j];
            if (
              $(b)
                .find(".card .card-content h5")
                .text() === JSON.parse(sessionStorage["mass"])[i].name
            ) {
              $(b)
                .find(".card")
                .addClass("tocheck");
            }
          }
          Vue.set(this.ToCheck, i, JSON.parse(sessionStorage["mass"])[i]);
        }
      $(".modal").modal();
    }
  });
});
