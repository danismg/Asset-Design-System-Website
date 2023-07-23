var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  var className = input.getAttribute("label__checkbox");
  console.log(className);
}
