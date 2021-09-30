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
    
    
      if (selected_two=0 )
  { second_line.innerHTML = `00 MONTHS`; }   
      if (selected_two=1 )
  { second_line.innerHTML = `01 MONTHS`; }
      if (selected_two=2 )
  { second_line.innerHTML = `02 MONTHS`; }
      if (selected_two=3 )
  { second_line.innerHTML = `03 MONTHS`; }
      if (selected_two=4 )
  { second_line.innerHTML = `04 MONTHS`; }
      if (selected_two=5 )
  { second_line.innerHTML = `05 MONTHS`; }
      if (selected_two=6 )
  { second_line.innerHTML = `06 MONTHS`; }
      if (selected_two=7 )
  { second_line.innerHTML = `07 MONTHS`; }
      if (selected_two=8 )
  { second_line.innerHTML = `08 MONTHS`; }
      if (selected_two=9 )
  { second_line.innerHTML = `09 MONTHS`; }
    
          if (selected_one=0 )
  { second_line.innerHTML = `00 YEARS`; }
          if (selected_one=1 )
  { second_line.innerHTML = `01 YEARS`; }
      if (selected_one=2 )
  { second_line.innerHTML = `02 YEARS`; }
      if (selected_one=3 )
  { second_line.innerHTML = `03 YEARS`; }
      if (selected_one=4 )
  { second_line.innerHTML = `04 YEARS`; }
      if (selected_one=5 )
  { second_line.innerHTML = `05 YEARS`; }
      if (selected_one=6 )
  { second_line.innerHTML = `06 YEARS`; }
      if (selected_one=7 )
  { second_line.innerHTML = `07 YEARS`; }
      if (selected_one=8 )
  { second_line.innerHTML = `08 YEARS`; }
      if (selected_one=9 )
  { second_line.innerHTML = `09 YEARS`; }
 
  
  
          if (selected_three=0 )
  { second_line.innerHTML = `00 DAYS`; }
          if (selected_three=1 )
  { second_line.innerHTML = `01 DAYS`; }
      if (selected_three=2 )
  { second_line.innerHTML = `02 DAYS`; }
      if (selected_three=3 )
  { second_line.innerHTML = `03 DAYS`; }
      if (selected_three=4 )
  { second_line.innerHTML = `04 DAYS`; }
      if (selected_three=5 )
  { second_line.innerHTML = `05 DAYS`; }
      if (selected_three=6 )
  { second_line.innerHTML = `06 DAYS`; }
      if (selected_three=7 )
  { second_line.innerHTML = `07 DAYS`; }
      if (selected_three=8 )
  { second_line.innerHTML = `08 DAYS`; }
      if (selected_three=9 )
  { second_line.innerHTML = `09 DAYS`; }
 }
  
    
          if (selected_four=0 )
  { second_line.innerHTML = `00 HOURS`; }
          if (selected_four=1 )
  { second_line.innerHTML = `01 HOURS`; }
      if (selected_four=2 )
  { second_line.innerHTML = `02 HOURS`; }
      if (selected_four=3 )
  { second_line.innerHTML = `03 HOURS`; }
      if (selected_four=4 )
  { second_line.innerHTML = `04 HOURS`; }
      if (selected_four=5 )
  { second_line.innerHTML = `05 HOURS`; }
      if (selected_four=6 )
  { second_line.innerHTML = `06 HOURS`; }
      if (selected_four=7 )
  { second_line.innerHTML = `07 HOURS`; }
      if (selected_four=8 )
  { second_line.innerHTML = `08 HOURS`; }
      if (selected_four=9 )
  { second_line.innerHTML = `09 HOURS`; }
 

         if (selected_five=0 )
  { second_line.innerHTML = `00 MINUTES`; }
          if (selected_five=1 )
  { second_line.innerHTML = `01 MINUTES`; }
      if (selected_five=2 )
  { second_line.innerHTML = `02 MINUTES`; }
      if (selected_five=3 )
  { second_line.innerHTML = `03 MINUTES`; }
      if (selected_five=4 )
  { second_line.innerHTML = `04 MINUTES`; }
      if (selected_five=5 )
  { second_line.innerHTML = `05 MINUTES`; }
      if (selected_five=6 )
  { second_line.innerHTML = `06 MINUTES`; }
      if (selected_five=7 )
  { second_line.innerHTML = `07 MINUTES`; }
      if (selected_five=8 )
  { second_line.innerHTML = `08 MINUTES`; }
      if (selected_five=9 )
  { second_line.innerHTML = `09 MINUTES`; }
 }


  
  document.getElementById("enter").onclick = function() {
    console.log("click");

    const name = document.getElementById("name").value;
    document.getElementById("result").innerText = name;

    generate();
  };
  generate();
};

