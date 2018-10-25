console.log("Page Load Success v.2.4");

//define functions
function printData(){
  console.log("printData Called");
    //generate html to replace <tbody>
    var html = "";

    //make header
    html += "<tr>";
    html += "<th class='tg-0lax'>FID</th>"
    html += "<th class='tg-0lax'>Desc</th>";
    html += "<th class='tg-0lax'>NLU</th>";
    html += "<th class='tg-0lax'>UPC</th>";
    html += "<th class='tg-0lax'>SC</th>";
    html += "<th class='tg-0lax'>ID</th>";
    html += "<th class='tg-0lax'>Type</th>";
    html += "<th class='tg-0lax'>F_Price</th>";
    html += "<th class='tg-0lax'>S_Price</th>";
    html += "<th class='tg-0lax'>On_Sale</th>";
    html += "<th class='tg-0lax'>Is_W</th>";
    html += "<th class='tg-0lax'>Inv</th>";
    html += "</tr>";

    //loop through dynamic data
    for(var i = 0; i < data.length; i++){
      var fid = data[i].FID;
      var desc = data[i].Description;
      var nlu = data[i].NLU;
      var upc = data[i].UPC;
      var sc = data[i].Smart_Code;
      var id = data[i].ID_Verification;
      var type = data[i].Type;
      var f_price = data[i].Full_Price;
      var s_price = data[i].Sale_Price;
      var o_sale = data[i].Sale_Active;
      var is_weighed = data[i].Is_Weighed;
      var inventory = data[i].Inventory;

      //append at html
      html += "<tr>";
      html += "<td>" + fid + "</td>";
      html += "<td>" + desc + "</td>";
      html += "<td>" + nlu + "</td>";
      html += "<td>" + upc + "</td>";
      html += "<td>" + sc + "</td>";
      html += "<td>" + id + "</td>";
      html += "<td>" + type + "</td>";
      html += "<td>" + f_price + "</td>";
      html += "<td>" + s_price + "</td>";
      html += "<td>" + o_sale + "</td>";
      html += "<td>" + is_weighed + "</td>";
      html += "<td>" + inventory + "</td>";
      html += "</tr>";
    }

    //replace <tbody>
    document.getElementById("mydata").innerHTML = html;
  }//end testing function

function searchFood(searchInput){
  console.log("SearchFood Called");
  //determind if search is NLU, Smart Code, UPC
  //NLU is 1 or 2 characters
  //Smart code is 5 characters
  //UPC is 12 Characters

  //Check for NLU
  if(searchInput.length <= 2){
    console.log("Checking NLU codes...");
    //Loop through data
    for(var i = 0; i < data.length; i++){
      console.log("Row: ", i);
      if(data[i].NLU == searchInput){
        console.log("SEARCH RESULTS FOUND: ", data[i].Description);
        return i;
        //break;
      }
    }
  } else

  //Check for Smart Code
  if(searchInput.length == 5){
    console.log("Checking Smart codes");
     //Loop through data
    for(var i = 0; i < data.length; i++){
      console.log("Row: ", i);
      if(data[i].Smart_Code == searchInput){
        console.log("SEARCH RESULTS FOUND: ", data[i].Description);
        return i;
        //break;
      }
    }
  } else

  //Check for UPC
  if(searchInput.length == 12){
     console.log("Checking UPC codes");
      //Loop through data
      for(var i = 0; i < data.length; i++){
        console.log("Row: ", i);
        if(data[i].NLU == searchInput){
          console.log("SEARCH RESULTS FOUND: ", data[i].Description);
          return i;
          //break;
        }
      }
    } else {
        //number type doesn't match NLU, SC, or UPC
        console.log("Number not valid");
        return 0;
    }
}//end function

function hideState(){
  console.log("hideState called");
  //hide all states
  document.getElementById("total-state").classList.add("hide");
  document.getElementById("scanning-state").classList.add("hide");
  document.getElementById("scanning-keyin-state").classList.add("hide");
  document.getElementById("scanning-qty-state").classList.add("hide");
  document.getElementById("error-state").classList.add("hide");
  document.getElementById("login-state").classList.add("hide");
  document.getElementById("option-state").classList.add("hide");
}

function changeState(state){
  console.log("changeState called");

  //reset all states to hide
  hideState();

  //Then based on paramter toggle one state back on
  switch(state){
    case 1:
      //State 1 - total-state
      document.getElementById("total-state").classList.toggle("hide");
      document.getElementById("TS-LR").focus();
      previousDisplayState = currentDisplayState; //update Display State history
      currentDisplayState = 1;
      break;
    case 2:
      //State 2 - scanning-state
      document.getElementById("scanning-state").classList.toggle("hide");
      //no focus needed -- output only. A keyin will trigger new state
      previousDisplayState = currentDisplayState; //update Display State history
      currentDisplayState = 2;
      break;
    case 3:
      //State 3 - scanning-keyin-state
      document.getElementById("scanning-keyin-state").classList.toggle("hide");
      document.getElementById("SQS-L").focus();
      previousDisplayState = currentDisplayState; //update Display State history
      currentDisplayState = 3;
      break;
    case 4:
      //State 4 - scanning-qty-state
      document.getElementById("scanning-qty-state").classList.toggle("hide");
      document.getElementById("LS-LR").focus();
      previousDisplayState = currentDisplayState; //update Display State history
      currentDisplayState = 4;
      break;
    case 5:
      //State 5 - error-state
      document.getElementById("error-state").classList.toggle("hide");
      //no focus needed -- no direct input
      previousDisplayState = currentDisplayState; //update Display State history
      currentDisplayState = 5;
      console.log("Main: current display: ", currentDisplayState);
      console.log("Main: previous display: ", previousDisplayState);
      break;
    case 6:
      //State 6 - login-state
      document.getElementById("login-state").classList.toggle("hide");
      document.getElementById("LS-LR").focus();
      //console.log("Change should have occured");
      previousDisplayState = currentDisplayState; //update Display State history
      currentDisplayState = 6;
      console.log("Main: current display: ", currentDisplayState);
      console.log("Main: previous display: ", previousDisplayState);
      break;
    case 7:
      //State 6 - login-state
      document.getElementById("option-state").classList.toggle("hide");
      //no focus needed - screen has no direct input
      previousDisplayState = currentDisplayState; //update Display State history
      setStatus = 7;
      break;
  }

}//end function

function card(cardType, cardStatus){
  var balance = Math.floor(Math.random() * 999) + 1;
  this.type = cardType;
  this.status = cardStatus;
  this.balance = balance;
}

function login(){
  console.log("login called");
  //function handles all elements required to log in.
  if(loggedIn == 0){ // 0 = logged out
    //output login screen
    changeState(6); //login-screen
    document.getElementById("LS-U").value = "Cashier: " + user.name;
    document.getElementById("LS-LR").value = "---";
    //replace default "---" with numbers
    //if no hyphen, then forbit further input

    let defaultId = "---"; //value of ID if user hits clear
    let defaultPin = "----"; //value of PIN if user hits clear
    let xin = document.getElementById("LS-LR").value;
    let searchResults = xin.search("-");
    //console.log("search: ", searchResults);
    if(searchResults == 0){ //hyphen found, input less than 3
      //replace string
      console.log("Original value of: ", xin);
      let xinMod = xin.substring(1,4);
      console.log("Corrected value of: ", xinMod);
      document.getElementById("LS-LR").value = xinMod;
    } else { //no hypen found
      console.log("Input too long");
      changeState(5);
      document.getElementById("ES-U").value = "<<< ERROR >>>";
      document.getElementById("ES-L").value = "Input Too Long"
  }
}
}//end function

function logout(){
  console.log("logout called");
  //funciton handles all elements required to logout
  if(userStatus == 1) //1 = logged in
  {

  }
}//end fucntion

function buttonEventListeners(){
  console.log("buttonEventListeners called");


  document.getElementById("btn-code").addEventListener("click", function(){
    console.log("Code Clicked");
    buttonSortByState("code");
  });
  document.getElementById("btn-suspend").addEventListener("click", function(){
    console.log("Suspend Clicked");
    buttonSortByState("suspend");
  });
  document.getElementById("btn-verify").addEventListener("click", function(){
    console.log("Verify Clicked");
    buttonSortByState("verify");
  });
  document.getElementById("btn-tax").addEventListener("click", function(){
    console.log("tax Clicked");
    buttonSortByState("tax");
  });
  document.getElementById("btn-no-sale").addEventListener("click", function(){
    console.log("No Sale Clicked");
    buttonSortByState("no-sale");
  });
  document.getElementById("btn-eggs").addEventListener("click", function(){
    console.log("eggs Clicked");
    buttonSortByState("eggs");
  });
  document.getElementById("btn-plastic").addEventListener("click", function(){
    console.log("plastic Clicked");
    buttonSortByState("plastic");
  });
  document.getElementById("btn-employee").addEventListener("click", function(){
    console.log("employee Clicked");
    buttonSortByState("employee");
  });
  document.getElementById("btn-clear").addEventListener("click", function(){
    console.log("clear Clicked");
    buttonSortByState("clear");
  });
  document.getElementById("btn-mark-down").addEventListener("click", function(){
    console.log("mark down Clicked");
    buttonSortByState("mark-down");
  });
  document.getElementById("btn-price-override").addEventListener("click", function(){
    console.log("price override Clicked");
    buttonSortByState("price-override");
  });
  document.getElementById("btn-void").addEventListener("click", function(){
    console.log("void Clicked");
    buttonSortByState("void");
  });
  document.getElementById("btn-1").addEventListener("click", function(){
    console.log("1 Clicked");
    buttonSortByState("1");
  });
  document.getElementById("btn-2").addEventListener("click", function(){
    console.log("2 Clicked");
    buttonSortByState("2");
  });
  document.getElementById("btn-3").addEventListener("click", function(){
    console.log("3 Clicked");
    buttonSortByState("3");
  });
  document.getElementById("btn-4").addEventListener("click", function(){
    console.log("4 Clicked");
    buttonSortByState("4");
  });
  document.getElementById("btn-5").addEventListener("click", function(){
    console.log("5 Clicked");
    buttonSortByState("5");
  });
  document.getElementById("btn-6").addEventListener("click", function(){
    console.log("6 Clicked");
    buttonSortByState("6");
  });
  document.getElementById("btn-7").addEventListener("click", function(){
    console.log("7 Clicked");
    buttonSortByState("7");
  });
  document.getElementById("btn-8").addEventListener("click", function(){
    console.log("8 Clicked");
    buttonSortByState("8");
  });
  document.getElementById("btn-9").addEventListener("click", function(){
    console.log("9 Clicked");
    buttonSortByState("9");
  });
  document.getElementById("btn-0").addEventListener("click", function(){
    console.log("0 Clicked");
    buttonSortByState("0");
  });
  document.getElementById("btn-subtotal").addEventListener("click", function(){
    console.log("subtotal Clicked");
    buttonSortByState("subtotal");
  });
  document.getElementById("btn-paper").addEventListener("click", function(){
    console.log("paper Clicked");
    buttonSortByState("paper");
  });
  document.getElementById("btn-qty").addEventListener("click", function(){
    console.log("qty Clicked");
    buttonSortByState("qty");
  });
  document.getElementById("btn-total").addEventListener("click", function(){
    console.log("total Clicked");
    buttonSortByState("total");
  });
  document.getElementById("btn-enter").addEventListener("click", function(){
    console.log("enter Clicked");
    buttonSortByState("enter");
  });
  document.getElementById("btn-card").addEventListener("click", function(){
    console.log("card Clicked");
    buttonSortByState("card");
  });
  document.getElementById("btn-gift-card").addEventListener("click", function(){
    console.log("gift-card Clicked");
    buttonSortByState("gift-card");
  });
  document.getElementById("btn-cash").addEventListener("click", function(){
    console.log("cash Clicked");
    buttonSortByState("cash");
  });

}//end function

function buttonSortByState(input){
  console.log("buttonSortByState called");

  switch (currentDisplayState) {
    case 1:
      console.log("State 1 - button: ", input);
      state1BtnActions(input);
      break;
    case 2:
      console.log("State 2 - button: ", input);
      state2BtnActions(input);
      break;
    case 3:
      console.log("State 3 - button: ", input);
      state3BtnActions(input);
      break;
    case 4:
      console.log("State 4 - button: ", input);
      state4BtnActions(input);
      break;
    case 5:
      console.log("State 5 - button: ", input);
      state5BtnActions(input);
      break;
    case 6:
      console.log("State 6 - button: ", input);
      state6BtnActions(input);
      break;
    case 7:
      console.log("State 7 - button: ", input);
      state7BtnActions(input);
      break;
  }//end switch
}//end function

function state1BtnActions(input){
  console.log("state1BtnActions called");
  //State 1 - Total State
  switch (input) {
    case "code":
    console.log("Code clicked - State 1 - Active");
      break;
    case "suspend":
    console.log("Suspend clicked - State 1 - Active");
      break;
    case "verify":
    console.log("verify clicked - State 1 - Active");
      break;
    case "tax":
    console.log("tax clicked - State 1 - No action");
      break;
    case "no-sale":
    console.log("No Sale clicked - State 1 - Active");
      break;
    case "eggs":
    console.log("Eggs clicked - State 1 - Active");
      break;
    case "plastic":
    console.log("plastic clicked - State 1 - Active");
      break;
    case "employee":
    console.log("employee clicked - State 1 - No action");
      break;
    case "clear":
    console.log("clear clicked - State 1 - Active");
      break;
    case "mark-down":
    console.log("Mark Down clicked - State 1 - Active");
      break;
    case "price-override":
    console.log("Price Override clicked - State 1 - Active");
      break;
    case "void":
    console.log("void clicked - State 1 - No action");
      break;
    case "7":
    console.log("7 clicked - State 1 - Active");
      break;
    case "8":
    console.log("8 clicked - State 1 - Active");
      break;
    case "9":
    console.log("9 clicked - State 1 - Active");
      break;
    case "4":
    console.log("4 clicked - State 1 - No action");
      break;
    case "5":
    console.log("5 clicked - State 1 - Active");
      break;
    case "6":
    console.log("6 clicked - State 1 - Active");
      break;
    case "1":
    console.log("1 clicked - State 1 - Active");
      break;
    case "2":
    console.log("2 clicked - State 1 - No action");
      break;
    case "3":
    console.log("3 clicked - State 1 - Active");
      break;
    case "0":
    console.log("0 clicked - State 1 - Active");
      break;
    case "subtotal":
    console.log("subtotal clicked - State 1 - Active");
      break;
    case "paper":
    console.log("paper clicked - State 1 - No action");
      break;
    case "qty":
    console.log("qty clicked - State 1 - Active");
      break;
    case "total":
    console.log("total clicked - State 1 - Active");
      break;
    case "enter":
    console.log("enter clicked - State 1 - Active");
      break;
    case "card":
    console.log("card clicked - State 1 - No action");
      break;
    case "gift-card":
    console.log("Gift Card clicked - State 1 - Active");
      break;
    case "cash":
    console.log("Cash clicked - State 1 - Active");
      break;
    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end function

function state2BtnActions(input){
  console.log("state1BtnActions called");
  //State 1 - Total State
  switch (input) {
    case "code":
    console.log("Code clicked - State 2 - Active");
      break;
    case "suspend":
    console.log("Suspend clicked - State 2 - Active");
      break;
    case "verify":
    console.log("verify clicked - State 2 - Active");
      break;
    case "tax":
    console.log("tax clicked - State 2 - No action");
      break;
    case "no-sale":
    console.log("No Sale clicked - State 2 - Active");
      break;
    case "eggs":
    console.log("Eggs clicked - State 2 - Active");
      break;
    case "plastic":
    console.log("plastic clicked - State 2 - Active");
      break;
    case "employee":
    console.log("employee clicked - State 2 - No action");
      break;
    case "clear":
    console.log("clear clicked - State 2 - Active");
      break;
    case "mark-down":
    console.log("Mark Down clicked - State 2 - Active");
      break;
    case "price-override":
    console.log("Price Override clicked - State 2 - Active");
      break;
    case "void":
    console.log("void clicked - State 2 - No action");
      break;
    case "7":
    console.log("7 clicked - State 2 - Active");
      break;
    case "8":
    console.log("8 clicked - State 2 - Active");
      break;
    case "9":
    console.log("9 clicked - State 2 - Active");
      break;
    case "4":
    console.log("4 clicked - State 2 - No action");
      break;
    case "5":
    console.log("5 clicked - State 2 - Active");
      break;
    case "6":
    console.log("6 clicked - State 2 - Active");
      break;
    case "1":
    console.log("1 clicked - State 2 - Active");
      break;
    case "2":
    console.log("2 clicked - State 2 - No action");
      break;
    case "3":
    console.log("3 clicked - State 2 - Active");
      break;
    case "0":
    console.log("0 clicked - State 2 - Active");
      break;
    case "subtotal":
    console.log("subtotal clicked - State 2 - Active");
      break;
    case "paper":
    console.log("paper clicked - State 2 - No action");
      break;
    case "qty":
    console.log("qty clicked - State 2 - Active");
      break;
    case "total":
    console.log("total clicked - State 2 - Active");
      break;
    case "enter":
    console.log("enter clicked - State 2 - Active");
      break;
    case "card":
    console.log("card clicked - State 2 - No action");
      break;
    case "gift-card":
    console.log("Gift Card clicked - State 2 - Active");
      break;
    case "Cash":
    console.log("Cash clicked - State 2 - Active");
      break;
    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end function

function state3BtnActions(input){
  console.log("state1BtnActions called");
  //State 1 - Total State
  switch (input) {
    case "code":
    console.log("Code clicked - State 1 - Active");
      break;
    case "suspend":
    console.log("Suspend clicked - State 1 - Active");
      break;
    case "verify":
    console.log("verify clicked - State 1 - Active");
      break;
    case "tax":
    console.log("tax clicked - State 1 - No action");
      break;
    case "no-sale":
    console.log("No Sale clicked - State 1 - Active");
      break;
    case "eggs":
    console.log("Eggs clicked - State 1 - Active");
      break;
    case "plastic":
    console.log("plastic clicked - State 1 - Active");
      break;
    case "employee":
    console.log("employee clicked - State 1 - No action");
      break;
    case "clear":
    console.log("clear clicked - State 1 - Active");
      break;
    case "mark-down":
    console.log("Mark Down clicked - State 1 - Active");
      break;
    case "price-override":
    console.log("Price Override clicked - State 1 - Active");
      break;
    case "void":
    console.log("void clicked - State 1 - No action");
      break;
    case "7":
    console.log("7 clicked - State 1 - Active");
      break;
    case "8":
    console.log("8 clicked - State 1 - Active");
      break;
    case "9":
    console.log("9 clicked - State 1 - Active");
      break;
    case "4":
    console.log("4 clicked - State 1 - No action");
      break;
    case "5":
    console.log("5 clicked - State 1 - Active");
      break;
    case "6":
    console.log("6 clicked - State 1 - Active");
      break;
    case "1":
    console.log("1 clicked - State 1 - Active");
      break;
    case "2":
    console.log("2 clicked - State 1 - No action");
      break;
    case "3":
    console.log("3 clicked - State 1 - Active");
      break;
    case "0":
    console.log("0 clicked - State 1 - Active");
      break;
    case "subtotal":
    console.log("subtotal clicked - State 1 - Active");
      break;
    case "paper":
    console.log("paper clicked - State 1 - No action");
      break;
    case "qty":
    console.log("qty clicked - State 1 - Active");
      break;
    case "total":
    console.log("total clicked - State 1 - Active");
      break;
    case "enter":
    console.log("enter clicked - State 1 - Active");
      break;
    case "card":
    console.log("card clicked - State 1 - No action");
      break;
    case "gift-card":
    console.log("Gift Card clicked - State 1 - Active");
      break;
    case "Cash":
    console.log("Cash clicked - State 1 - Active");
      break;
    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end function

function state4BtnActions(input){
  console.log("state1BtnActions called");
  //State 1 - Total State
  switch (input) {
    case "code":
    console.log("Code clicked - State 1 - Active");
      break;
    case "suspend":
    console.log("Suspend clicked - State 1 - Active");
      break;
    case "verify":
    console.log("verify clicked - State 1 - Active");
      break;
    case "tax":
    console.log("tax clicked - State 1 - No action");
      break;
    case "no-sale":
    console.log("No Sale clicked - State 1 - Active");
      break;
    case "eggs":
    console.log("Eggs clicked - State 1 - Active");
      break;
    case "plastic":
    console.log("plastic clicked - State 1 - Active");
      break;
    case "employee":
    console.log("employee clicked - State 1 - No action");
      break;
    case "clear":
    console.log("clear clicked - State 1 - Active");
      break;
    case "mark-down":
    console.log("Mark Down clicked - State 1 - Active");
      break;
    case "price-override":
    console.log("Price Override clicked - State 1 - Active");
      break;
    case "void":
    console.log("void clicked - State 1 - No action");
      break;
    case "7":
    console.log("7 clicked - State 1 - Active");
      break;
    case "8":
    console.log("8 clicked - State 1 - Active");
      break;
    case "9":
    console.log("9 clicked - State 1 - Active");
      break;
    case "4":
    console.log("4 clicked - State 1 - No action");
      break;
    case "5":
    console.log("5 clicked - State 1 - Active");
      break;
    case "6":
    console.log("6 clicked - State 1 - Active");
      break;
    case "1":
    console.log("1 clicked - State 1 - Active");
      break;
    case "2":
    console.log("2 clicked - State 1 - No action");
      break;
    case "3":
    console.log("3 clicked - State 1 - Active");
      break;
    case "0":
    console.log("0 clicked - State 1 - Active");
      break;
    case "subtotal":
    console.log("subtotal clicked - State 1 - Active");
      break;
    case "paper":
    console.log("paper clicked - State 1 - No action");
      break;
    case "qty":
    console.log("qty clicked - State 1 - Active");
      break;
    case "total":
    console.log("total clicked - State 1 - Active");
      break;
    case "enter":
    console.log("enter clicked - State 1 - Active");
      break;
    case "card":
    console.log("card clicked - State 1 - No action");
      break;
    case "gift-card":
    console.log("Gift Card clicked - State 1 - Active");
      break;
    case "Cash":
    console.log("Cash clicked - State 1 - Active");
      break;
    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end function

function state5BtnActions(input){
  console.log("state1BtnActions called");
  //State 1 - Total State
  switch (input) {
    case "code":
    console.log("Code clicked - State 1 - Active");
      break;
    case "suspend":
    console.log("Suspend clicked - State 1 - Active");
      break;
    case "verify":
    console.log("verify clicked - State 1 - Active");
      break;
    case "tax":
    console.log("tax clicked - State 1 - No action");
      break;
    case "no-sale":
    console.log("No Sale clicked - State 1 - Active");
      break;
    case "eggs":
    console.log("Eggs clicked - State 1 - Active");
      break;
    case "plastic":
    console.log("plastic clicked - State 1 - Active");
      break;
    case "employee":
    console.log("employee clicked - State 1 - No action");
      break;
    case "clear":
    console.log("clear clicked - State 1 - Active");
      break;
    case "mark-down":
    console.log("Mark Down clicked - State 1 - Active");
      break;
    case "price-override":
    console.log("Price Override clicked - State 1 - Active");
      break;
    case "void":
    console.log("void clicked - State 1 - No action");
      break;
    case "7":
    console.log("7 clicked - State 1 - Active");
      break;
    case "8":
    console.log("8 clicked - State 1 - Active");
      break;
    case "9":
    console.log("9 clicked - State 1 - Active");
      break;
    case "4":
    console.log("4 clicked - State 1 - No action");
      break;
    case "5":
    console.log("5 clicked - State 1 - Active");
      break;
    case "6":
    console.log("6 clicked - State 1 - Active");
      break;
    case "1":
    console.log("1 clicked - State 1 - Active");
      break;
    case "2":
    console.log("2 clicked - State 1 - No action");
      break;
    case "3":
    console.log("3 clicked - State 1 - Active");
      break;
    case "0":
    console.log("0 clicked - State 1 - Active");
      break;
    case "subtotal":
    console.log("subtotal clicked - State 1 - Active");
      break;
    case "paper":
    console.log("paper clicked - State 1 - No action");
      break;
    case "qty":
    console.log("qty clicked - State 1 - Active");
      break;
    case "total":
    console.log("total clicked - State 1 - Active");
      break;
    case "enter":
    console.log("enter clicked - State 1 - Active");
      break;
    case "card":
    console.log("card clicked - State 1 - No action");
      break;
    case "gift-card":
    console.log("Gift Card clicked - State 1 - Active");
      break;
    case "Cash":
    console.log("Cash clicked - State 1 - Active");
      break;
    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end function

function state6BtnActions(input){
  console.log("state1BtnActions called");
  //State 1 - Total State
  switch (input) {
    case "code":
    console.log("Code clicked - State 1 - Active");
      break;
    case "suspend":
    console.log("Suspend clicked - State 1 - Active");
      break;
    case "verify":
    console.log("verify clicked - State 1 - Active");
      break;
    case "tax":
    console.log("tax clicked - State 1 - No action");
      break;
    case "no-sale":
    console.log("No Sale clicked - State 1 - Active");
      break;
    case "eggs":
    console.log("Eggs clicked - State 1 - Active");
      break;
    case "plastic":
    console.log("plastic clicked - State 1 - Active");
      break;
    case "employee":
    console.log("employee clicked - State 1 - No action");
      break;
    case "clear":
    console.log("clear clicked - State 1 - Active");
      break;
    case "mark-down":
    console.log("Mark Down clicked - State 1 - Active");
      break;
    case "price-override":
    console.log("Price Override clicked - State 1 - Active");
      break;
    case "void":
    console.log("void clicked - State 1 - No action");
      break;
    case "7":
    console.log("7 clicked - State 1 - Active");
      break;
    case "8":
    console.log("8 clicked - State 1 - Active");
      break;
    case "9":
    console.log("9 clicked - State 1 - Active");
      break;
    case "4":
    console.log("4 clicked - State 1 - No action");
      break;
    case "5":
    console.log("5 clicked - State 1 - Active");
      break;
    case "6":
    console.log("6 clicked - State 1 - Active");
      break;
    case "1":
    console.log("1 clicked - State 1 - Active");
      break;
    case "2":
    console.log("2 clicked - State 1 - No action");
      break;
    case "3":
    console.log("3 clicked - State 1 - Active");
      break;
    case "0":
    console.log("0 clicked - State 1 - Active");
      break;
    case "subtotal":
    console.log("subtotal clicked - State 1 - Active");
      break;
    case "paper":
    console.log("paper clicked - State 1 - No action");
      break;
    case "qty":
    console.log("qty clicked - State 1 - Active");
      break;
    case "total":
    console.log("total clicked - State 6 - Active");
      break;
    case "enter":
    console.log("enter clicked - State 1 - Active");
      break;
    case "card":
    console.log("card clicked - State 1 - No action");
      break;
    case "gift-card":
    console.log("Gift Card clicked - State 1 - Active");
      break;
    case "Cash":
    console.log("Cash clicked - State 1 - Active");
      break;
    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end function

function state7BtnActions(input){
  console.log("state1BtnActions called");
  //State 1 - Total State
  switch (input) {
    case "code":
    console.log("Code clicked - State 1 - Active");
      break;
    case "suspend":
    console.log("Suspend clicked - State 1 - Active");
      break;
    case "verify":
    console.log("verify clicked - State 1 - Active");
      break;
    case "tax":
    console.log("tax clicked - State 1 - No action");
      break;
    case "no-sale":
    console.log("No Sale clicked - State 1 - Active");
      break;
    case "eggs":
    console.log("Eggs clicked - State 1 - Active");
      break;
    case "plastic":
    console.log("plastic clicked - State 1 - Active");
      break;
    case "employee":
    console.log("employee clicked - State 1 - No action");
      break;
    case "clear":
    console.log("clear clicked - State 1 - Active");
      break;
    case "mark-down":
    console.log("Mark Down clicked - State 1 - Active");
      break;
    case "price-override":
    console.log("Price Override clicked - State 1 - Active");
      break;
    case "void":
    console.log("void clicked - State 1 - No action");
      break;
    case "7":
    console.log("7 clicked - State 1 - Active");
      break;
    case "8":
    console.log("8 clicked - State 1 - Active");
      break;
    case "9":
    console.log("9 clicked - State 1 - Active");
      break;
    case "4":
    console.log("4 clicked - State 1 - No action");
      break;
    case "5":
    console.log("5 clicked - State 1 - Active");
      break;
    case "6":
    console.log("6 clicked - State 1 - Active");
      break;
    case "1":
    console.log("1 clicked - State 1 - Active");
      break;
    case "2":
    console.log("2 clicked - State 1 - No action");
      break;
    case "3":
    console.log("3 clicked - State 1 - Active");
      break;
    case "0":
    console.log("0 clicked - State 1 - Active");
      break;
    case "subtotal":
    console.log("subtotal clicked - State 1 - Active");
      break;
    case "paper":
    console.log("paper clicked - State 1 - No action");
      break;
    case "qty":
    console.log("qty clicked - State 1 - Active");
      break;
    case "total":
    console.log("total clicked - State 1 - Active");
      break;
    case "enter":
    console.log("enter clicked - State 1 - Active");
      break;
    case "card":
    console.log("card clicked - State 1 - No action");
      break;
    case "gift-card":
    console.log("Gift Card clicked - State 1 - Active");
      break;
    case "Cash":
    console.log("Cash clicked - State 1 - Active");
      break;
    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end functions


//######################################################################
//######################################################################
//######################################################################


var debit = new card("Debit", "Active");
var credit = new card("Credit", "Fraud");
var ebt = new card("EBT", "Active");

//call ajax
var ajax = new XMLHttpRequest();
var method = "GET";
var url = "load_data.php";
var asynchronous = true;

ajax.open(method, url, asynchronous);
//sending ajax request
ajax.send();

//receiving responce from load_data.PHP
ajax.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    console.log("Ajax started...");
    //alert(this.responseText);
    //converting JSON back into array
    //console.log(this.responseText);
    data = JSON.parse(this.responseText);
    //console.log(data); //for debuggin

    //set variables
    loggedIn = 0 //0 = logged out, 1 = logged in
    previousDisplayState = 0; //what the last display state was (used to turn of event listeners)
    currentDisplayState = 1; //what is the display state
    //value is changed by changeState()
    //value is needed for event listeners to know what to listen to
    user = {
      name:"Benjamin",
      id:"77",
      pin:"2361"
    };
    defaultDisabled = 0; //used in manageStaticEventListeners, if value = 1, then default buttons defaultDisabled
    //different screen states will only allow certain key presses
    //such as error, total, and login
    btnGroup1 = 0; //1 = on 0 = off
    btnGroup2 = 0;
    btnGroup3 = 0;


    //initialize display

    //load eventListener
    //manageStaticEventListeners();
    buttonEventListeners();

    //changeState(6, currentDisplayState); //login screen
    //login();

    console.log("Main: current display: ", currentDisplayState);
    console.log("Main: previous display: ", previousDisplayState);

    //initialixe event listeners
    //manageEventListeners();

    //var cat = searchFood("1");
    //console.log("Search Results: ", data[cat]);

  }//END OF AJAX
}//END OF AJAX
