console.log("connected")
var squares = document.querySelectorAll("td")
var button = document.querySelector("#butt")
var count = 0;
var sqs_array = [ [0,1,2],
                  [3,4,5],
                  [6,7,8]
                          ];

//make a funciton to check the winner.
function check() {
  var win_x = 0
  var win = 0
  for(i=0;i<3;i++)
  {
    if(sqs_array[0][i].textContent === "X")
    {
      win_x++;
    }
    else if( sqs_array[0][i].textContent ==="0")
    {
      win++;
    }
  }
  if(win_x === 3)
  {
    alert("MUBARAAK HO PLAYER 1 AAP JEET GAYE KHUSH RAHO AABAD RAHO OR GHAR JAO")
  }
  else
  {
    win_x = 0
  }
  if(win === 3)
  {
    alert("MUBARAAK HO PLAYER 2 AAP JEET GAYE KHUSH RAHO AABAD RAHO OR GHAR JAO")
  }
  else {
    win = 0
  }
  for(i=0;i<3;i++)
  {
    if(sqs_array[1][i].textContent === "X")
    {
      win_x++;
    }
    else if( sqs_array[1][i].textContent ==="0")
    {
      win++;
    }
  }
  if(win_x === 3)
  {
    alert("MUBARAAK HO PLAYER 1 AAP JEET GAYE KHUSH RAHO AABAD RAHO OR GHAR JAO")
  }
  else
  {
    win_x = 0
  }
  if(win === 3)
  {
    alert("MUBARAAK HO PLAYER 2 AAP JEET GAYE KHUSH RAHO AABAD RAHO OR GHAR JAO")
  }
  else {
    win = 0
  }
  for(i=0;i<3;i++)
  {
    if(sqs_array[2][i].textContent === "X")
    {
      win_x++;
    }
    else if( sqs_array[2][i].textContent ==="0")
    {
      win++;
    }
  }
  if(win_x === 3)
  {
    alert("MUBARAAK HO PLAYER 1 AAP JEET GAYE KHUSH RAHO AABAD RAHO OR GHAR JAO")
  }
  else
  {
    win_x = 0
  }
  if(win === 3)
  {
    alert("MUBARAAK HO PLAYER 2 AAP JEET GAYE KHUSH RAHO AABAD RAHO OR GHAR JAO")
  }
  else {
    win = 0
  }
}




function to_do_on_click() {
  //we addded the event listener thats why we are using the this keyword as we only pass the funciton address there
  if(count%2 === 0){
    this.textContent = "X"
    count++;
  }
  else
  {
    this.textContent = "0"
    count++
  }
  check();
}
//function to clear the board
function clearB(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  count = 0;
}

//add event listeners and this will also fill the array for which i check. waa
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",to_do_on_click)
  if(i<3){
    sqs_array[0][i] = squares[i]
  }
  else if(i>=3 && i<=5)
  {
    sqs_array[1][i-3] = squares[i]
  }
  else {
    sqs_array[2][i-6] = squares[i]
  }
}

button.addEventListener("click",clearB)
