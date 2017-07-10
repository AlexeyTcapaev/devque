$(document).ready(function () {
    // progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(circle2, {
  color: '#3c4761',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#dfe8ed', width: 1 },
  to: { color: '#30bae7', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+"%");
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '3rem';
bar.animate(1.0);  // Number from 0.0 to 1.0

var bar1 = new ProgressBar.Circle(circle1, {
  color: '#3c4761',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#dfe8ed', width: 1 },
  to: { color: '#30bae7', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
      
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = Math.round(circle.value() * 100);
       if (value === 48) 
       {
           
       }
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value+"%");
    }

  }
});
bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar1.text.style.fontSize = '3rem';

bar1.animate(1.0);  // Number from 0.0 to 1.0
});
