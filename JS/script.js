console.log("Page Load Success v.2.7");

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
      if(currentDisplayState != state){//only update to a new state
        previousDisplayState = currentDisplayState; //update Display State history
      }
      currentDisplayState = 1;
      break;
    case 2:
      //State 2 - scanning-state
      document.getElementById("scanning-state").classList.toggle("hide");
      //no focus needed -- output only. A keyin will trigger new state
      if(currentDisplayState != state){//only update to a new state
        previousDisplayState = currentDisplayState; //update Display State history
      }      currentDisplayState = 2;
      break;
    case 3:
      //State 3 - scanning-keyin-state
      document.getElementById("scanning-keyin-state").classList.toggle("hide");
      document.getElementById("SQS-L").focus();
      if(currentDisplayState != state){//only update to a new state
        previousDisplayState = currentDisplayState; //update Display State history
      }      currentDisplayState = 3;
      break;
    case 4:
      //State 4 - scanning-qty-state
      document.getElementById("scanning-qty-state").classList.toggle("hide");
      document.getElementById("LS-LR").focus();
      if(currentDisplayState != state){//only update to a new state
        previousDisplayState = currentDisplayState; //update Display State history
      }      currentDisplayState = 4;
      break;
    case 5:
      //State 5 - error-state
      document.getElementById("error-state").classList.toggle("hide");
      //no focus needed -- no direct input
      if(currentDisplayState != state){//only update to a new state
        previousDisplayState = currentDisplayState; //update Display State history
      }      currentDisplayState = 5;
      break;
    case 6:
      //State 6 - login-state
      document.getElementById("login-state").classList.toggle("hide");
      document.getElementById("LS-LR").focus();
      //console.log("Change should have occured");
      if(currentDisplayState != state){//only update to a new state
        previousDisplayState = currentDisplayState; //update Display State history
      }      currentDisplayState = 6;
      break;
    case 7:
      //State 6 - login-state
      document.getElementById("option-state").classList.toggle("hide");
      //no focus needed - screen has no direct input
      if(currentDisplayState != state){//only update to a new state
        previousDisplayState = currentDisplayState; //update Display State history
      }      setStatus = 7;
      break;
  }

  console.log("Main: current display: ", currentDisplayState);
  console.log("Main: previous display: ", previousDisplayState);

}//end function

function card(cardType, cardStatus){
  var balance = Math.floor(Math.random() * 999) + 1;
  this.type = cardType;
  this.status = cardStatus;
  this.balance = balance;
}

function login(part, number){
  console.log("login called");
  //function handles all elements required to log in.

  //login script is called by several different functions, eventListeners.
  //Paramter "part" allows the script to be responsive and jump past parts already complete by user
  //Paramter "number" passes in the number collected by the eventListeners
  //** only needed for [0-9], ENTER and CLEAR are handled by "part"

  //idPass is critical determining location in script since the eventListeners cannot
  //** distinguish where in the script it should send a user
  //** idPass must be set outside of function in the main script
  //idPass = true ----- id was entered correctly and script should be asking for PIN information
  //idPass = false ---- id hasn't been confirmed as correct -- script is asking for ID information


  // -- REDIRECTS -- handle redirects from outside function calls based on idPass condition
  //Part 1 - called by [0-9] eventListener
  //Part 2 - called by ENTER eventListener
  //Part 3 - called by CLEAR eventListener

  // -- ID SCRIPTS -- output user input, checks input against user profile
  //part 4 - PRINT ID display
  //part 5 - print user input for ID
  //part 6 - check for ID match
  //part 7 - clear ID input

  // -- PIN SCRIPTS --
  //part 8 - PRINT PIN display
  //part 9 - print user input for PIN
  //part 10 - check for PIN match
  //part 11 - clear PIN input

  //create optional parameters
  if(part === undefined){
    //this should only be used by call from MAIN script
    part = 0;
    idPass = 0;
  }
  if(number === undefined){
    number = 0;
  }

  if(loggedIn == 0){
    switch (part) {
      case 0: //called by MAIN -- default paramter value
        //assuming called by Main, start login script
        login(4);
        break;
    //*****************************************************
      case 1: //called by [0-9] eventListener
        if(idPass == 0){ //if ID confirmed
          //print ID user input
          login(5, number);
          break;
        } else {
          //print PIN user input
          login(9, number);
          break;
        }
    //*****************************************************
      case 2: //called by ENTER eventListener
        if(idPass == 0){ //if ID confirmed
          //redirect to CHECK ID
          login(6);
          break;
        } else {
          //redirect to CHECK PIN
          login(10);
          break;
        }
    //*****************************************************
      case 3: //called by CLEAR eventListener

        if(idPass == 0){ //if ID confirmed
          //redirect to ID clear
          login(7);
          break;
        } else {
          //redirect to PIN clear
          login(11);
          break;
        }
    //*****************************************************
      case 4: //PRINT ID display
          //output login screen
          changeState(6); //login-screen
          document.getElementById("LS-U").value = "Cashier: " + user.name;
          document.getElementById("LS-LL").value = "Login:";
          document.getElementById("LS-LR").value = "---";
        break;
    //*****************************************************
      case 5: //PRINT user input for ID

        //replace default "---" with numbers
        //if no hyphen, then forbid further input
        xin = document.getElementById("LS-LR").value;
        xin += number; //number passed in from eventListener (screen click)
        searchResults = xin.search("-");
        if(searchResults == 0){ //hyphen found, input less than 3
          //replace string
          console.log("Original value: ", xin);
          xinMod = xin.substring(1,4);
          console.log("Corrected value: ", xinMod);
          document.getElementById("LS-LR").value = xinMod;
        } else { //no hypen found
          console.log("Input too long");
          changeState(5);
          document.getElementById("ES-U").value = "Input Too Long";
          document.getElementById("ES-L").value = "Press Clear"
        }
        break;
    //*****************************************************
      case 6: //check for ID match

        //remove all hyphens then check for match with user ID
        xin = document.getElementById("LS-LR").value;
        xinMod = xin.replace(/-/g,"");
        //console.log("Original: " + xin + " Corrected: " + xinMod);

        if(xinMod == user.id){
          //input matches id
          console.log("ID correct");
          idPass = 1;
          //redirect to -- PRINT PIN display
          login(8);
        } else {
          console.log("ID wrong");
          //Print error message
          changeState(5);
          document.getElementById("ES-U").value = "ID Incorrect";
          document.getElementById("ES-L").value = "Press Clear";
        }
        break;
    //*****************************************************
      case 7: //clear ID input

        //CASE 7 isn't really needed now, i'm including it here in case I need to
        //** add scripting to the clear button in future
        login(4);
        break;
    //*****************************************************
      case 8: //print PIN display

        //initialize PIN display
        changeState(6);
        document.getElementById("LS-U").value = "Cashier: " + user.name;
        document.getElementById("LS-LL").value = "PIN:";
        document.getElementById("LS-LR").value = "----";
        break;
    //*****************************************************
      case 9: //print user input for PIN

        //replace default "----" with numbers
        //if no hyphen, then forbid further input
        xin = document.getElementById("LS-LR").value;
        xin += number; //number passed in from eventListener (screen click)
        searchResults = xin.search("-");
        if(searchResults == 0){ //hyphen found, input less than 3
          //replace string
          console.log("Original value: ", xin);
          xinMod = xin.substring(1,5);
          console.log("Corrected value: ", xinMod);
          document.getElementById("LS-LR").value = xinMod;
        } else { //no hypen found
          console.log("Input too long");
          changeState(5);
          document.getElementById("ES-U").value = "Input Too Long";
          document.getElementById("ES-L").value = "Press Clear"
        }
          break;
    //*****************************************************
      case 10: //check for PIN match

        //remove any hyphens
        xin = document.getElementById("LS-LR").value;
        xinMod = xin.replace(/-/g,"");
        console.log("Original: " + xin + " Corrected: " + xinMod);

        if(xinMod == user.pin){
          //input matches id
          console.log("PIN correct");
          loggedIn = 1;
          scan();
        } else {
          console.log("PIN wrong");
          idPass = 0; //reset to ID check
          changeState(5);
          document.getElementById("ES-U").value = "PIN Incorrect";
          document.getElementById("ES-L").value = "Press Clear"
        }
        break;
    //*****************************************************
      case 11: //clear PIN input
        //CASE 11 isn't really needed now, i'm including it here in case I need to
        //** add scripting to the clear button in future

        login(8);
        break;
    //*****************************************************
      default: //default used for debugging
        console.log("ERROR: \"Part\" parameter for function Login no match");
        break;
    } //end switch
  } else {
    console.log("login called, but user already logged in");
  }
}//end function

function scan(){
  console.log("scan called");

  //Print starting display -- shown at each start of scan cycle
  changeState(5);
  document.getElementById("ES-U").value = "Check Under Cart";
  document.getElementById("ES-L").value = "Begin Scanning";


}//end function

function logout(){
  console.log("logout called");
  //funciton handles all elements required to logout
  if(userStatus == 1) //1 = logged in
  {

  }
}//end fucntion

function code(codeIn){
  console.log("codes called");

  //codes can be entered from any state (expect when logged out) and can be used
  //** to perform different functions on the register

  switch (codeIn) {
    case 1: //logout
      logout();
      break;
    case 2: //change PIN
      changePin();
      break;
    case 77: //print all NLU
      printNLU();
      break;
    case 78: //print last receipt
      printLast();
      break;
    case 86: //end shift
      endShift();
      break;
    case 94: //cash drop
      cashDrop();
      break;
    default: //code not found
      console.log("code not found");

  }
}

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
    console.log("clear clicked - State 5 - Active");
      switch (previousDisplayState) {
        case 1:

          break;
        case 2:

          break;
        case 3:

          break;
        case 4:

          break;
        case 5:

          break;
        case 6: //came from login
          login(3); //resets login script
          break;
        case 7:

          break;
        default:

      }
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
      scan(1);
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
      break;
    case "suspend":
      break;
    case "verify":
      break;
    case "tax":
      break;
    case "no-sale":
      break;
    case "eggs":
      break;
    case "plastic":
      break;
    case "employee":
      break;
    case "clear":
    login(3);
      break;
    case "mark-down":
      break;
    case "price-override":
      break;
    case "void":
      break;
    case "7":
    login(1, input);
      break;
    case "8":
    login(1, input);
      break;
    case "9":
    login(1, input);
      break;
    case "4":
    login(1, input);
      break;
    case "5":
    login(1, input);
      break;
    case "6":
    login(1, input);
      break;
    case "1":
    login(1, input);
      break;
    case "2":
    login(1, input);
      break;
    case "3":
    login(1, input);
      break;
    case "0":
    login(1, input);
      break;
    case "subtotal":
      break;
    case "paper":
      break;
    case "qty":
      break;
    case "total":
      break;
    case "enter":
    login(2);
      break;
    case "card":
      break;
    case "gift-card":
      break;
    case "Cash":
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

// -- IF A COMMENT REFERS YOU TO THE "MAIN FUNCTION" THIS IS IT...
ajax.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {

    console.log("Ajax started...");
    //converting JSON back into array
    data = JSON.parse(this.responseText);

    //set variables
    shiftSet = 0;
    loggedIn = 0; //0 = logged out, 1 = logged in
    previousDisplayState = 0; //what the last display state was (used to turn of event listeners)
    currentDisplayState = 1; //what is the display state
    //value is changed by changeState()
    //value is needed for event listeners to know what to listen to

    //user will be set by savedUsers()
    user = {
      name:"Benjamin",
      id:"77",
      pin:"2222"
    };

    idPass = 0; //DO NOT DELETE -- used by login() -- documentation for use in login()

    //load eventListener
    buttonEventListeners();
    count = 0; //for testing the do/while

    //login -- first sign in includes a user database load (eventually)
    if(loggedIn == 0){//if not logged in, call login script
      login();
      //if shift not started, start shift
      if(shiftSet == 0){
        //shiftSet = 1;
      }
    }

    //scan();

    printData();

  }//END OF AJAX
}//END OF AJAX
