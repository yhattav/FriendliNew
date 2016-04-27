/*function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth, backgroundColor: "#00f"}, 500).html(percent + "% ");
}

progress(64,$('#progressBar'));

 $(document).ready(function () {
    var dataval = parseInt($('.progress').attr("data-amount"));
    if (dataval < 100) {
        $('.progress .amount').css("width", 100 - dataval + "%");
    }

  /*FOR DEMO ONLY
    $('#increase').click(function () {
        modifyProgressVal(1);
    });
    $('#decrease').click(function () {
        modifyProgressVal(-1);
    });
    function modifyProgressVal(type) {
        dataval = parseInt($('.progress').attr("data-amount"));
        if (type == 1) dataval = Math.min(100,dataval + 10)
        else if (type == -1) dataval = Math.max(0,dataval - 10);
        $('.progress .amount').css("width", 100 - dataval + "%");
        $('.progress').attr("data-amount", dataval);
    }
});
*/
function makeProgressLine(id,percent) {     
 itemz = document.getElementById(id);
 var bar = new ProgressBar.Line(itemz, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#00ff00'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
      bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(percent);
}   

function makeProgressCircle(id,percent) {     
    itemz = document.getElementById(id);
    var day = new ProgressBar.Circle(itemz, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#f0f', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        console.log(value);
        }

    }
    });
//day.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//day.text.style.fontSize = '2rem';

day.animate(percent);  // Number from 0.0 to 1.0
}

$(document).ready(function () { 
    makeProgressCircle('container',0.8);
    for (i=1;i<6;i++) {
       makeProgressLine('progress' + i,i*0.2); 
    }
    

});

//window.onload = function shagadelic() {