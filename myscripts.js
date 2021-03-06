function updateInputBox1(val) {
          document.getElementById('numInput1').value=val;
          updatePlot();
}

function updateInputSlider1(val) {
          document.getElementById('slidInput1').value=val;
          updatePlot();
}


function updateInputBox2(val) {
          document.getElementById('numInput2').value=val;
          updatePlot();
}
function updateInputSlider2(val) {
          document.getElementById('slidInput2').value=val;
          updatePlot();
}


function updateInputBox3(val) {
          document.getElementById('numInput3').value=val;
          updatePlot();
}
function updateInputSlider3(val) {
          document.getElementById('slidInput3').value=val;
          updatePlot();
}


function updateInputBox4(val) {
          document.getElementById('numInput4').value=val;
          updatePlot();
}
function updateInputSlider4(val) {
          document.getElementById('slidInput4').value=val;
          updatePlot();
}

function toggleZ() {
  var x = document.getElementById("zRow");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  resetSettings();
  updatePlot();
}

function resetSettings(){
  document.getElementById("numInput1").value = 1;
  document.getElementById("numInput2").value = 1;
  document.getElementById("numInput3").value = 1;
  document.getElementById("numInput4").value = 1;
  document.getElementById("slidInput1").value = 1;
  document.getElementById("slidInput2").value = 1;
  document.getElementById("slidInput3").value = 1;
  document.getElementById("slidInput4").value = 1;
}

// The equation
function runEquation(r, z, d, k, x) {
  if(document.getElementById("firstEq").checked == true) {
    return (((Math.PI) - (Math.acos(((r-z) + (d/2) * Math.sin(parseFloat(x+k)))/r)) + (1/2) * Math.sin(2 * (Math.acos(((r-z) + (d/2) * Math.sin(parseFloat(x+k)))/r))))/(Math.PI));
  } else {
    return (((Math.PI) - (Math.acos(((parseFloat(r-x)) + (d/2) * (Math.sin(k)))/(r))) + (1/2) * (Math.sin(2 * (Math.acos(((parseFloat(r-x)) + (d/2) * (Math.sin(k)))/(r))))))/(Math.PI));
  }
}

window.onload = function plotData() {updatePlot()}

function updatePlot() {
  var r = parseFloat(document.getElementById("numInput1").value);
  var z = parseFloat(document.getElementById("numInput2").value);
  var d = parseFloat(document.getElementById("numInput3").value);
  var k = parseFloat(document.getElementById("numInput4").value);

  var x = new Array();
  var y = new Array();

  for (var i = -1000; i <= 1000; i += 0.1) {
    x.push(i);
    y.push(runEquation(r, z, d, k, i));
  }

  var layout = {
  xaxis: {range: [-4, 4]},
  yaxis: {range: [-2, 2]}
  };

  PLOTTER = document.getElementById('plot');
  Plotly.newPlot( PLOTTER, [{x,y}], layout);
}
