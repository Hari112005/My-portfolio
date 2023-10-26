function darkmode() {
  var color = document.getElementById('flexSwitchCheckChecked');
  var result = document.getElementById('result');
  if (color.checked) {
    result.style.backgroundColor = "black";
    result.style.color = 'white';

  }
  else {
    result.style.backgroundColor = 'white';
    result.style.color = 'black';
  }
}