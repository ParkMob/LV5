window.onload = function() {
  var first_line = document.getElementById("line-one");
  var second_line = document.getElementById("line-two");
  var third_line = document.getElementById("line-three");
  var fourth_line = document.getElementById("line-four");
  var fifth_line = document.getElementById("line-five");

  var line_one = first_line;
  var line_two = second_line;
  var line_three = third_line;
  var line_four = fourth_line;
  var line_five = fifth_line;

  function generate() {
    var selected_one = Math.floor(Math.random(line_one) * 100);
    var selected_two = Math.floor(Math.random(line_two) * 13);
    var selected_three = Math.floor(Math.random(line_three) * 31);
    var selected_four = Math.floor(Math.random(line_four) * 25);
    var selected_five = Math.floor(Math.random(line_five) * 61);

    first_line.innerHTML = `${selected_one} YEARS`;
    second_line.innerHTML = `${selected_two} MONTHS`;
    third_line.innerHTML = `${selected_three} DAYS`;
    fourth_line.innerHTML = `${selected_four} HOURS`;
    fifth_line.innerHTML = `${selected_five} MINUTES`;
    
  }
  
  document.getElementById("enter").onclick = function() {
    console.log("click");

    const name = document.getElementById("name").value;
    document.getElementById("result").innerText = name;

    generate();
  };
  generate();
};

