window.onload = function() {
  var first_line = document.getElementById("line-one");
  var second_line = document.getElementById("line-two");
  var third_line = document.getElementById("line-three");
  var fourth_line = document.getElementById("line-four");
  
var line_ones= [
    "1 YEAR",
    "2 YEARS",
    "3 YEARS",
    "4 YEARS",
    "5Y EARS",
    "6 YEARS",
    "7 YEARS",
    "8 YEARS",
    "9 YEARS",
    "10 YEARS",
    "11 YEARS",
    "12 YEARS",
    "13 YEARS",
    "14 YEARS",
    "15 YEARS",
    "16 YEARS",
    "17 YEARS",
    "18 YEARS",
    "19 YEARS",
    "20 YEARS",
    "21 YEARS",
    "22 YEARS",
    "23 YEARS",
    "24 YEARS",
    "25 YEARS",
    "26 YEARS",
    "27 YEARS",
    "28 YEARS",
    "29 YEARS",
    "30 YEARS",
    "31 YEARS",
    "32 YEARS",
    "33 YEARS",
    "34 YEARS",
    "35 YEARS",
    "36 YEARS",
    "37 YEARS",
    "38 YEARS",
    "39 YEARS",
    "40 YEARS",
    "41 YEARS",
    "42 YEARS",
    "43 YEARS",
    "44 YEARS",
    "45 YEARS",
    "46 YEARS",
    "47 YEARS",
    "48 YEARS",
    "49 YEARS",
    "50 YEARS",
    "51 YEARS",
    "52 YEARS",
    "53 YEARS",
    "54 YEARS",
    "55 YEARS",
    "56 YEARS",
    "57 YEARS",
    "58 YEARS",
    "59 YEARS",
    "60 YEARS",
    "61 YEARS",
    "62 YEARS",
    "63 YEARS",
    "64 YEARS",
    "65 YEARS",
    "66 YEARS",
    "67 YEARS",
    "68 YEARS",
    "69 YEARS",
    "70 YEARS",
    "71 YEARS",
    "72 YEARS",
    "73 YEARS",
    "74 YEARS",
    "75 YEARS",
    "76 YEARS",
    "77 YEARS",
    "78 YEARS",
    "79 YEARS",
    "80 YEARS",
    "81 YEARS",
    "82 YEARS",
    "83 YEARS",
    "84 YEARS",
    "85 YEARS",
    "86 YEARS",
    "87 YEARS",
    "88 YEARS",
    "89 YEARS",
    "90 YEARS",
    "91 YEARS",
    "92 YEARS",
    "93 YEARS",
    "94 YEARS",
    "95 YEARS",
    "96 YEARS",
    "97 YEARS",
    "98 YEARS",
    "99 YEARS"
  ];

  var line_twos = [
    "1 DAY",
    "2 DAYS",
    "3 DAYS",
    "4 DAYS",
    "5 DAYS",
    "6 DAYS",
    "7 DAYS",
    "8 DAYS",
    "9 DAYS",
    "10 DAYS",
    "11 DAYS",
    "12 DAYS",
    "13 DAYS",
    "14 DAYS",
    "15 DAYS",
    "16 DAYS",
    "17 DAYS",
    "18 DAYS",
    "19 DAYS",
    "20 DAYS",
    "21 DAYS",
    "21 DAYS",
    "22 DAYS",
    "23 DAYS",
    "24 DAYS",
    "25 DAYS",
    "26 DAYS",
    "27 DAYS",
    "28 DAYS",
    "29 DAYS"
  ];

  var line_threes = [
    "1 HOUR",
    "2 HOURS",
    "3 HOURS",
    "4 HOURS",
    "5 HOURS",
    "6 HOURS",
    "7 HOURS",
    "8 HOURS",
    "9 HOURS",
    "10 HOURS",
    "11 HOURS",
    "12 HOURS",
    "13 HOURS",
    "14 HOURS",
    "15 HOURS",
    "16 HOURS",
    "17 HOURS",
    "18 HOURS",
    "19 HOURS",
    "20 HOURS",
    "21 HOURS",
    "22 HOURS",
    "23 HOURS"
  ];

  var line_fours = ["10 MIN", "20 MIN", "30 MIN", "40 MIN", "50 MIN"];

  function select_random(x) {
    y = x[Math.floor(Math.random() * x.length)];
    return y;
  }

  function generate() {
    var selected_one = select_random(line_ones);
    var selected_two = select_random(line_twos);
    var selected_three = select_random(line_threes);
    var selected_four = select_random(line_fours);


    first_line.innerHTML = selected_one;
    second_line.innerHTML = selected_two;
    third_line.innerHTML = selected_three;
    fourth_line.innerHTML = selected_four;
  }
  document.getElementById("enter").onclick = function() {
    console.log("click");

    const name = document.getElementById("name").value;
    document.getElementById("result").innerText = name;

    generate();
  };
  generate();
};

//------------------드롭다운토글----------------
