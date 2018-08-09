function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}
function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 254;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}
$(document).ready(function() {
  let ans;
  let dataset = [];
  $.ajax({
    url: "index.php",
    type: "GET",
    data: {},
    dataType: "json",
    success: function(request) {
      ans = request;
      var set = [];
      Object.keys(ans).forEach(point => {
        set.push(ans[point].label);
      });
      set = unique(set);
      Object.keys(set).forEach(point => {
        var obj = {};
        obj.data = [];
        obj.backgroundColor = random_rgba();
        obj.label = set[point];
        Object.keys(ans).forEach(poi => {
          if (ans[poi].label === set[point]) {
            delete ans[poi].label;
            obj.data.push(ans[poi]);
          }
        });
        dataset.push(obj);
      });
      var ctx = document.getElementById("myChart").getContext("2d");
      var scatterChart = new Chart(ctx, {
        type: "scatter",
        data: {
          datasets: dataset
        },
        options: {
          scales: {
            xAxes: [
              {
                type: "linear",
                position: "bottom"
              }
            ]
          }
        }
      });
    }
  });
});
