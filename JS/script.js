console.log("JS loaded - v 3.2");
//**********************************
//****** supporting functions ******
//****** called by other functions to do a task ****


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
  console.log("SearchFood Called - scanning for: ", searchInput);
  //determind if search is NLU, Smart Code, UPC
  //NLU is 1 or 2 characters
  //Smart code is 5 characters
  //UPC is 12 Characters

  //return values
  //if found -- returns index of item
  //index must be plugged into data array
  //data[i]

  //if not found
  //return 0

  //if number invalid
  //return -1

  //Check for NLU
  if(searchInput.length <= 2){
    console.log("Checking NLU code:", searchInput);
    //Loop through data
    for(var i = 0; i < data.length; i++){
      console.log("Row: ", i);
      if(data[i].NLU == searchInput){ //if item found....
        console.log("SEARCH RESULTS FOUND: ", data[i].Description);
        return i;
        //break;
      }

      let lastItemInArray = data.length - 1; //subtract 1 because .length doesn't include 0
      if(i == lastItemInArray){ //if no match found....
        console.warn("FOOD ITEM NOT FOUND");
        return 0;
      }
    }
  } else

  //Check for Smart Code
  if(searchInput.length == 5){
    console.log("Checking Smart codes:", searchInput);
     //Loop through data
    for(var i = 0; i < data.length; i++){
      console.log("Row: ", i);
      if(data[i].Smart_Code == searchInput){
        console.log("SEARCH RESULTS FOUND: ", data[i].Description);
        return i;
        //break;
      }

      let lastItemInArray = data.length - 1; //subtract 1 because .length doesn't include 0
      if(i == lastItemInArray){ //if no match found....
        console.warn("FOOD ITEM NOT FOUND");
        return 0;
      }
    }
  } else

  //Check for UPC
  if(searchInput.length == 12){
     console.log("Checking UPC codes:", searchInput);
      //Loop through data
      for(var i = 0; i < data.length; i++){
        console.log("Row: ", i);
        if(data[i].UPC == searchInput){
          console.log("SEARCH RESULTS FOUND: ", data[i].Description);
          return i;
          //break;
        }

        let lastItemInArray = data.length - 1; //subtract 1 because .length doesn't include 0
        if(i == lastItemInArray){ //if no match found....
          console.warn("FOOD ITEM NOT FOUND");
          return 0;
        }
      }
    } else {
        //number type doesn't match NLU, SC, or UPC
        console.warn("Number not valid");
        return -1;
    }
}//end function

function searchUsers(input){
  console.log("searchUsers called");

  //scans only for a user id
  //returns user id index for first match found
  //returns -1 for no match found
  //returns -2 if you messed up

  //login will then use this index to match the ID and pin

  //set default values
  if(input === undefined){
    console.error("search parameter missing");
    return -2;
  }

  for(let i = 0; i < userProfiles.length; i++){
    if(userProfiles[i].id == input){
      console.log("Match found");
      return i; // 1 == match found
    }
  }
  //in theory you should only see this if the loop did not find a match
  console.warn("No match found for user id");
  return -1; // 0 == no match found

}//end function

function errorTriggered(){ //default error message for unallowed key press
  console.log("errorTriggered called");

  //this function is used to tell user when they pressed a button that couldn't
  //be pressed

  changeProgramState(6); //error state
  printDefaultErrorMessage();

}//end function

function hideState(){
  console.log("hideState called");
  //hides all states, changeDisplayState() then disables the "hide" css attribute
  //and the display snaps back to position in window

  //hide all states
  document.getElementById("total-state").classList.add("hide");
  document.getElementById("scanning-state").classList.add("hide");
  document.getElementById("scanning-keyin-state").classList.add("hide");
  document.getElementById("scanning-qty-state").classList.add("hide");
  document.getElementById("error-state").classList.add("hide");
  document.getElementById("message-state").classList.add("hide");
  document.getElementById("login-state").classList.add("hide");
  document.getElementById("option-state").classList.add("hide");
}//end function

function messageBanner(){
  console.log("messageBanner called");

  //messageBanner displays 1 of 3 messages based on a condition
  //the function checks if condition has been met and sets correct
  //message

  //check receipt roll
  //for testing value is set to 5, for real life change to 100
  if(paperCounter > NEED_PAPER_SOON){
    return "Check Paper Roll";
  }

  //check for cash balance
  if(pickupNeeded == 1){
    return "Pickup Needed Soon";
  }

  //if no notifications, return default message
  return "Check Under Cart";
}

function buildScanNumber(number){
  console.log("buildNumber called");

  //buildNumber is used to build the number as user enters a number


  //update variable
  if(userNumber === undefined){
    userNumber = number;
  } else {
    //assume userNumber is part way through build
    userNumber += number; //add number on
  }

  console.warn("userNumber: ", userNumber);

  //Print number to display
  switch (currentProgramState) {
    case 1: //login
      //is this the first sign in or a regular log in?
      if(shiftSet == 0){
        //signIn();
      } else {
        //login();
      }
      break;
    case 2: //scanning
      printScanningKeyinState(data[lastItem].Description, userNumber);
      break;
    case 3: //total
      break;
    case 4: //payment

      break;
    case 5: //message
      //Message is unique, unlikely this will be used here
      break;
    case 6: //error
      //will never appear here
      break;
    case 7: //new cart
      let notification = messageBanner();
      printScanningKeyinState(notification, userNumber);
      break;
    default: //debugging message
      console.log("currentDisplayState error - unknown");
      break;

  }//end switch


}//end function

function buildTenderNumber(input){
  console.log("buildTenderNumber called");

  //function builds the tender string and outputs it

  //set variables
  if(tenderNumber === undefined){
    tenderNumber = "-----.--"; //default value
  }

  if(input === undefined){
    console.error("input parameter not defined");
    return;
  }


  //remove decimal
  let frontPart = tenderNumber.substring(0, 5);
  let backPart = tenderNumber.substring(6, 8);

  tenderNumber = frontPart + backPart;

  //add in user input
  tenderNumber += input;

  //trim front off string
  tenderNumber = tenderNumber.substring(1, 8);

  //add decimal back into string
  frontPart = tenderNumber.substring(0, 5);
  backPart = tenderNumber.substring(5, 8);

  tenderNumber = frontPart + "." + backPart;

  //print results to display
  printTotalState("TOTAL", subTotal, "TENDERED:", tenderNumber);


}//end function

function backdoor(input){ //backdoor -- for dev use only
  console.log("backdoor called");

  //backdoor, used to bypass login functions

  switch (input) {
    case 1: //login
      loggedIn = 1;
      shiftSet = 1;
      userResultIndex = 4; // 4 = Benjamin

      //redirect
      autoSetState();
      break;

    case 2: //logout
      loggedIn = 0;
      shiftSet = 1;

      //redirect
      autoSetState();
      break;

    case 3: //sign out
      loggedIn = 0;
      shiftSet = 0;
      userResultIndex = undefined;

      //redirect
      autoSetState();
      break;

    default:
      console.error("backdoor code not recognized");
      return;
  }

} //end function

function order66(){
  console.error("Your license to use this software has expired");

  //end session
  printMessageState("License Expired", "Contact Developer");

  changeProgramState(10);
}//end function


//*************************************
//***** PRINT TO DISPLAY **************


function printTotalState(ul, ur, ll, lr){ //
  console.log("printTotalState called");

  //ul - UPPER LEFT
  //ur - UPPER RIGHT
  //ll - LOWER LEFT
  //lr - LOWER RIGHT

  //set defaults
  if(ul === undefined){
    ul = "TOTAL";
  }
  if(ur === undefined){
    ur = subTotal;
  }
  if(ll === undefined){
    ll = "TENDERED:";
  }
  if(lr === undefined){
    lr = tenderNumber;
  }

  changeDisplayState(1);

  document.getElementById("TS-UL").value = ul;
  document.getElementById("TS-UR").value = ur;
  document.getElementById("TS-LL").value = ll;
  document.getElementById("TS-LR").value = lr;

}//end function

function printScanningState(u, ll, lc, lr){ //
  console.log("printScanningState called");

  //ul - UPPER
  //ur - Lower Left
  //ll - LOWER Center
  //lr - LOWER RIGHT

  changeDisplayState(2);

  document.getElementById("SS-U").value = u;
  document.getElementById("SS-LL").value = ll;
  document.getElementById("SS-LC").value = lc;
  document.getElementById("SS-LR").value = lr;

}//end function

function printScanningKeyinState(u, l){ //
  console.log("printScanningKeyinState called");

  //u - UPPER
  //l - LOWER

  changeDisplayState(3);

  document.getElementById("SKS-U").value = u;
  document.getElementById("SKS-L").value = l;

}//end function

function printScanningQtyState(u, l){ //
  console.log("printScanningQtyState called");

  //u - UPPER
  //l - LOWER

  changeDisplayState(4);

  document.getElementById("SQS-U").value = u;
  document.getElementById("SQS-L").value = l;

}//end function

function printErrorState(u, l){ //
  console.log("printErrorState called");

  //u - UPPER
  //l - lower

  changeDisplayState(5);

  document.getElementById("ES-U").value = u;
  document.getElementById("ES-L").value = l;

}//end function

function printMessageState(u, l){ //
  console.log("printMessageState called");

  //u - UPPER
  //l - lower

  //if undefined, set default message
  if(u === undefined){
    u = messageBanner(); //check for any notifications
  }

  if(l === undefined){
    l = "Ready Scan Item";
  }

  changeDisplayState(6);

  //print to display
  document.getElementById("MS-U").value = u;
  document.getElementById("MS-L").value = l;

}//end function

function printLoginState(u, ll, lr){ //
  console.log("printLoginState called");

  //ul - UPPER LEFT
  //ll - LOWER LEFT
  //lr - LOWER RIGHT

  changeDisplayState(7);

  document.getElementById("LS-U").value = u;
  document.getElementById("LS-LL").value = ll;
  document.getElementById("LS-LR").value = lr;

}//end function

function printOptionState(u, l){ //
  console.log("printOptionState called");

  //u - UPPER
  //l - LOWER

  changeDisplayState(8);

  document.getElementById("OS-U").value = u;
  document.getElementById("OS-L").value = l;

}//end function

function printDefaultErrorMessage(){
  console.log("printDefaultErrorMessage called");

  changeDisplayState(5); //message

  document.getElementById("ES-U").value = "INVALID ENTRY";
  document.getElementById("ES-L").value = "*** PRESS ** CLEAR ***";
}//end function


//*************************************
//********* PROGRAM STATE *************


function autoSetState(){ //sets program state based on conditions
  console.log("autoSetState() called");

  //this function is used to find where you are in the program and return you to
  //that state. It was developed as a comeback from CLEAR button push, but I think
  //it will have several uses.

  //check license
  if(theFlag == 1){
    //revenge of the sith
    order66();
    return;
  }

  //check if a user is signed in
  if(shiftSet == 0){
    //has user entered a valid ID?
    if(idFlag == 0){
      //send to ID prompt
      console.log("autoSet to signIn() - ID prompt");
      signIn();
      return;
    } else {

      //send to PIN prompt
      console.log("autoSet to signIn(3) - PIN prompt");
      signIn(3);
      return;
    }
  }


  //check if the user is logged in
  if(loggedIn == 0){
    console.log("autoSet to login()");
    login();
    return;
  }


  //check if user is trying return to scan from TOTAL
  if(currentProgramState == PS_TOTAL && previousDisplayState == PS_ERROR){
    console.log("autoSet to Scan - code 1a");
    tenderNumber = "-----.--";
    scan();
    return;
  }


  //check if user is trying return to scan from TOTAL
  if(currentProgramState == PS_TOTAL && previousProgramState == PS_SCANNING){
    console.log("autoSet to Scan - code 2a");
    tenderNumber = "-----.--";
    scan();
    return;
  }


  //check if user is trying to clear an error
  if(currentProgramState == PS_ERROR && previousProgramState == PS_TOTAL){
    console.log("autoSet to Total - code 3a");
    tenderNumber = "-----.--";
    totalState();
    return;
  }


  //scan will be the default value if all other IF tests pass
  console.log("autoSet to Scan - code 99d");
  scan();



}//end function

function changeDisplayState(state){ //change what display grouping is used
  console.log("changeDisplayState called");

  //changeDisplayState() is responsible for changing the display set used to
  //show data to user. There are 8 program states that each have a unique
  //pattern on screen

  //not to be confused with program state. A user can be looking at a login screen
  //but hit the wrong button and the program will change to error state. Thus
  //the Display state would be DS_LOGIN (7), but the program state would be PS_ERROR (6)

  //DISPLAY state only effects where output is going
  //Program state is used to manage how button presses are managed

  //Display States
  // DS_TOTAL = 1;
  // DS_SCANNING = 2;
  // DS_SCAN_KEYIN = 3;
  // DS_SCAN_QTY = 4;
  // DS_ERROR = 5;
  // DS_MESSAGE = 6;
  // DS_LOGIN = 7;
  // DS_OPTION = 8;

  //hide all states to hide
  hideState();

  //update current display state
  if(currentDisplayState != state){//only update to a new state
    previousDisplayState = currentDisplayState; //update Display State history
  }
  currentDisplayState = state;

  //Then based on paramter toggle one state back on
  switch(state){
    case 1: //State 1 - total-state
      document.getElementById("total-state").classList.toggle("hide");
      break;
    //**********************************
    case 2: //State 2 - scanning-state
      document.getElementById("scanning-state").classList.toggle("hide");
      break;
    //**********************************
    case 3: //State 3 - scanning-keyin-state
      document.getElementById("scanning-keyin-state").classList.toggle("hide");
      break;
    //**********************************
    case 4: //State 4 - scanning-qty-state
      document.getElementById("scanning-qty-state").classList.toggle("hide");
      break;
    //**********************************
    case 5: //State 5 - error-state
      document.getElementById("error-state").classList.toggle("hide");
      break;
    //**********************************
    case 6: //State 6 - message-state
      document.getElementById("message-state").classList.toggle("hide");
      break;
    //**********************************
    case 7: //State 7 - login-state
      document.getElementById("login-state").classList.toggle("hide");
      break;
    //**********************************
    case 8: //State 8 - Option-state
      document.getElementById("option-state").classList.toggle("hide");
      break;
  }

  //print results to console
  console.log("Current display State: ", currentDisplayState);
  console.log("Previous display State: ", previousDisplayState);

}//end function

function changeProgramState(state){ //change program state/how buttons functions
  console.log("changeProgramState called");

  //changeProgramState is used to manage what buttons are active during specific
  //program events and places. Button actions can be modified, or disabled, as needed
  //depending on what the user it attempting to do

  //not to be confused with display state. A user can be looking at a login screen
  //but hit the wrong button and the program will change to error state. Thus
  //the Display state would be DS_LOGIN (7), but the program state would be PS_ERROR (6)

  //DISPLAY state only effects where output is going
  //Program state is used to manage how button presses are managed

  //Program States
  // PS_LOGIN = 1;
  // PS_SCANNING = 2;
  // PS_TOTAL = 3;
  // PS_PAYMENT = 4;
  // PS_MESSAGE = 5;
  // PS_ERROR = 6;
  // PS_NEWCART = 7;


  if(state > 0 && state < 8){
    //if change, update history
    if(currentProgramState != state){ //if the new, incoming state is different then the current state
      previousProgramState = currentProgramState; //update history
    }

    //update current state
    currentProgramState = state;


  } else {
    console.error("ERROR: program state not valid: ", state);
  }

  //order 66
  if(state == 10){
    currentProgramState = 10;
    previousProgramState = 10;
  }

  console.log("Current program State: ", currentProgramState);
  console.log("Previous program State: ", previousProgramState);

}//end function

function login(part, number){ //login to user account
  console.log("login called");
  console.trace();
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

  // -- DEFAULT --
  //Part 0 - called from main - no parameters needed

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
      case 0: //default call
        //update program state
        //changeProgramState(PS_LOGIN);
        changeProgramState(1);
        //changeDisplayState(DS_LOGIN);
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
        xin1 = "Cashier: " + userProfiles[userResultIndex].name;
        xin2 = "Login: ";
        xin3 = "---";

        printLoginState(xin1, xin2, xin3);
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
          console.warn("Input too long");
          printErrorState("Input Too Long", "Press Clear");
        }
        break;
    //*****************************************************
      case 6: //check for ID match

        //remove all hyphens then check for match with user ID
        xin = document.getElementById("LS-LR").value;
        xinMod = xin.replace(/-/g,"");
        //console.log("Original: " + xin + " Corrected: " + xinMod);

        if(xinMod == userProfiles[userResultIndex].id){
          //input matches id
          console.log("ID correct");
          idPass = 1;
          //redirect to -- PRINT PIN display
          login(8);
        } else {
          console.warn("ID wrong");
          //Print error message
          printErrorState("ID Incorrect", "Press Clear");
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
        xin1 = "Cashier: " + userProfiles[userResultIndex].name;
        xin2 = "PIN: ";
        xin3 = "----";

        printLoginState(xin1, xin2, xin3);
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
          console.warn("Input too long");
          printErrorState("Input Too Long", "Press Clear");
        }
        break;
    //*****************************************************
      case 10: //check for PIN match

        //remove any hyphens
        xin = document.getElementById("LS-LR").value;
        xinMod = xin.replace(/-/g,"");
        console.log("Original: " + xin + " Corrected: " + xinMod);

        if(xinMod == userProfiles[userResultIndex].pin){
          //input matches id
          console.log("PIN correct");
          loggedIn = 1;
          scan();
        } else {
          console.warn("PIN wrong");
          idPass = 0; //reset to ID check
          printErrorState("PIN Incorrect", "Press Clear");
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
        console.error("ERROR: \"Part\" parameter for function Login no match");
        break;
    } //end switch
  } else {
    console.warn("login called, but user already logged in");
    scan();
  }
}//end function

function signIn(part, number){
  console.log("signIn called");

  //function handles the first login for the day

  //set temp local variable
  let userInput = document.getElementById("LS-LR").value;
  let searchResults = undefined; //used for display output

  //set defaults
  if(part === undefined){
    part = 0;
  }
  if(number === undefined){
    //value useful for debugging
    number = -100;
  }

  switch (part) {
    case 0: //default call - initialize ID prompt display
      //confirm current conditions
      //program shouldn't be here if these conditions aren't already set, but this
      //check is more for accurate debuggin and error messaging
      if(shiftSet == 0 && loggedIn == 0){
        //initialize program for login
        changeProgramState(PS_LOGIN);
        printLoginState("Login", "ID: ", "---");
        break;
      } else if (loggedIn == 1){
        //this shouldn't happen, but if it does...
        console.error("shift not set, but user logged in");
        return;
      } else {
        console.error("shift is set, cannot run signIn()");
        return;
      }


    //***************************************************
    case 1: // [0-9] eventListeners - collect ID
      //replace default "---" with numbers
      userInput += number; //number passed in from eventListener (screen click)

      //search for hyphens in string
      searchResults = userInput.search("-");

      if(searchResults == 0){ //hyphen found
        //update string
        userInput = userInput.substring(1,4);
        document.getElementById("LS-LR").value = userInput;
      } else { //no hypen found
        console.warn("ID too long");
        printErrorState("ID Too Long", "Press Clear");
        changeProgramState(PS_ERROR);
        //from here... when user clicks clear, clear (from error state EL)
        //--calls autoSetState(), autoSetState() should see that shiftSet is not
        //--set, and sends user to signIn(), which comes full circle back here
      }
      break;

    //***************************************************
    case 2: // ENTER eventListeners - confirm ID

      //before running searchUsers() remove hyphens
      userInput = userInput.replace(/-/g,"");

      //search users for match - userResultIndex will be used again in case 5 to confirm PIN
      userResultIndex = searchUsers(userInput);

      //check for no-match before check for match
      //this prevents errors and allows display out message to user
      if(userResultIndex == -1){ //-1 = no match found
        console.warn("ID results - no match found");

        //print error message to diplay
        printErrorState("ID Not Found", "Press Clear");

        //change state
        changeProgramState(PS_ERROR);
        return;
      }

      if(userResultIndex == -2){
        console.error("Unexpected error - ID match check");

        //Print error message
        printErrorState("Fatal Error - 117", "Call Helpdesk"); //throw error code

        //change state
        changeProgramState(PS_ERROR);
        return;
      }

      //check for match
      if(userInput == userProfiles[userResultIndex].id){
        console.log("ID correct");

        //input matches id
        idFlag = 1; //set flag

        //redirect to PIN prompt
        signIn(3);
        return;
      }
      break;

    //***************************************************
    case 3: // PIN Prompt - initialize display
      //confirm current conditions
      //program shouldn't be here if these conditions aren't already set, but this
      //check is more for accurate debuggin and error messaging

      if(idFlag == 1){//confirm that ID has been entered correctly
        //confirm current conditions
        if(shiftSet == 0 && loggedIn == 0){
          console.log("signIn(3) - initialize PIN display");
          //initialize program for login
          changeProgramState(PS_LOGIN);
          printLoginState("Login", "PIN: ", "----");
          return;
        } else if (loggedIn == 1){
          //this shouldn't happen, but if it does...
          console.error("shift not set, but user logged in");
          return;
        } else {
          //this shouldn't happen, but if it does...
          console.error("shift is set, cannot run signIn()");
          return;
        }
      } else {
        //redirect and find correct state
        console.error("attempted to process PIN for signIn, but ID not set");
        autoSetState();
      }
      break;

    //***************************************************
    case 4://[0-9] eventListeners - collect PIN
      //replace default "----" with numbers
      userInput += number; //number passed in from eventListener (screen click)
      console.warn("userInput before: ", userInput);
      //search for hyphens in string
      searchResults = userInput.search("-");

      if(searchResults == 0){ //hyphen found
        //update string
        userInput = userInput.substring(1,5);
        console.warn("userInput after: ", userInput);
        document.getElementById("LS-LR").value = userInput;
      } else { //no hypen found
        console.warn("PIN too long");
        printErrorState("PIN Too Long", "Press Clear");
        changeProgramState(PS_ERROR);
        //from here... when user clicks clear, clear (from error state EL)
        //--calls autoSetState(), autoSetState() should see that shiftSet is not
        //--set, and sends user to signIn(), which comes full circle back here
      }


      break;

    //***************************************************
    case 5: // ENTER eventListeners - confirm ID and PIN match

      //before running searchUsers() remove hyphens
      userInput = userInput.replace(/-/g,"");

      //confirm input
      if(userInput == ""){
        console.warn("no valid user input");
        printErrorState("Invalid Entry", "Press Clear");
        changeProgramState(PS_ERROR);
        return;
      }

      //confirm PIN with saved user profile from ID search
      if(userProfiles[userResultIndex].pin == userInput){//is PIN correct?
        //set signIn flag and loggedIn flag
        shiftSet = 1;
        loggedIn = 1;

        //redirect
        autoSetState();
        return;
      } else {
        console.warn("PIN incorrect");
        idFlag = 0; //reset pin status
        userResultIndex = undefined; //reset saved user profile
        printErrorState("PIN Incorrect", "Press Clear");
        changeProgramState(PS_ERROR);
        return;
      }
      break;

    //***************************************************
    default:
      console.warn("default trigger, parameter not valid");
      return;
  }


}//end function

function scan(part, item){ //scan items
  console.log("scan() called");

  //scan() handles the logic to manually key in items to be scanned. It adds items
  //to printer, builds the cart, and keeps tab of a subtotal

  if(part === undefined){
    //do nothing here, the logic for this part kicks in below the else statement


  } else {
    //if part is defined, run switch
    switch (part) {
      case 1: //called by [0-9] Event listener
        //used to build number
        buildScanNumber(item);
        return;
      case 2: // called by CLEAR
        //clear build number then reset state
        userNumber = undefined;
        autoSetState();
        return;
      //*******************************************************
      case 3: // called by ENTER

        //check if user wants to duplicate last item
        if(userNumber === undefined){
          //duplicate lastItem
          if(itemCount < COPY_LIMIT || scannedAgain == 1){ //limit to 5
            if(lastItem !== undefined){ //double check that number is valid
              userNumber = data[lastItem].UPC;
            } else {
              //debugging
              console.log("ERROR: could not duplicate - number not recognized");
              return;
            }
          } else {
            //cannot exceed 5 copies
            changeProgramState(6); //error
            printErrorState("Limit to 5", "*** PRESS ** CLEAR ***");
            return;
          }
        } else {
          //user has defined a number
          //we do not know if the number is a NLU, Smart code, or UPC
          //we need to run search to make an index comparison with lastItem
          //run search for food item based on userNumber
          foodSearchResult = searchFood(userNumber);

          //if itemCount is greater than 1 AND userNumber result was the same as lastItem,
          //then user intends more than 5 sequencial copies, do not reset itemCount
          if(itemCount > 1 && foodSearchResult === lastItem){
            scannedAgain = 1;
          } else {
            //new item scanned - reset count
            itemCount = 1;
            scannedAgain = 0;
          }
        }

        //run search for food item based on userNumber
        //let foodSearchResult = searchFood(userNumber);

        //confirm search results
        //check for ITEM NOT FOUND
        if(foodSearchResult == 0){ //return value defined in searchFood -- 0 = not found
          userNumber = undefined;
          changeProgramState(6); //error
          printErrorState("Item Not Found", "*** PRESS ** CLEAR ***");
          return;
        }

        //check for NUMBER ENTERED WRONG
        if(foodSearchResult == -1){ //return value defined in searchFood -- -1 = number not proper format
          userNumber = undefined;
          changeProgramState(6); //error
          printErrorState("Invalid Item Number", "*** PRESS ** CLEAR ***");
          return;
        }

        //set lastItem
        if(lastItem != foodSearchResult){ //if the last item is NOT the same as the current item....
          lastItem = foodSearchResult;
          itemCount = 1; //setting itemCount equal to 1 is reset
        } else {
          //if lastItem == index
          //**this means that index is repeating, and a count is needed
          //**therefor increment counter
          itemCount++;
        }

        //check if weighted
        if(data[foodSearchResult].is_weighed == 1){
          myWeight = randomWeight();
        } else {
          myWeight = 0;
          printWeightToDisplay(0.00);
        }

        //check if age restriction
        if(data[foodSearchResult].ID_Verification == 1){
          checkID = 1;
        }


        //Check if on sale, then add Full/Sale price to subtotal
        if(data[foodSearchResult].Sale_Active == 1){ //1 = true -- true = on sale
          addToSubTotal(data[foodSearchResult].Sale_Price);
          thePrice = data[foodSearchResult].Sale_Price;
        } else {
          addToSubTotal(data[foodSearchResult].Full_Price);
          thePrice = data[foodSearchResult].Full_Price;
        }

        //foodItem -- data[index].Description
        //thePrice -- the price of the item
        //itemCount -- count of sequencial same items
        //subTotal -- running subtotal of price

        //add food to shopping cart
        buildCartArray(cartId, foodSearchResult, newItemQty, myWeight, false);

        //update display
        printScanningState(data[foodSearchResult].Description, thePrice, itemCount, subTotal);

        //update/reset tracking variables
        userNumber = undefined;
        foodSearchResult == undefined;
        newCart = 1; //no longer a new cart
        changeProgramState(2); //scanning state
        autoSetState(); //reset state


        break;
      //*******************************************************
      default:
        console.log("ERROR: default switch triggered;");
        break;
    }//end switch
  } //end if/else part === undefined


  //if new cart, change program state
  if(newCart == 0){
    console.log("UPDATE: newcart triggered");
    changeProgramState(PS_NEWCART);
    //only notify user when starting newCart
    let notification = messageBanner(); //check for notifications
    printErrorState(notification, "Ready Scan Item");
    return;
  } else {
    console.log("UPDATE: current cart triggered");
    changeProgramState(PS_SCANNING); //set to scanning state
    printScanningState(data[lastItem].Description, thePrice, itemCount, subTotal);
  }


}//end function


function totalState(part, number){
  console.log("totalState called");

  //function handles total state information

  //set defaults
  if(part === undefined){
    part = 0;
  }




  switch (part) {
    case 0: //print initial display

      //check if ID has already passed
      if(checkIDFlag == 0){
        //check id prompt
        if(checkID == 1){
          //check id prompt
          totalState(1);
          return;
        }
      }

      //print default total screen
      changeProgramState(PS_TOTAL);
      printTotalState();
      break;

    //***************************************************
    case 1: // run if ID check required
      printMessageState("Customer age > 21", "Continue Press Enter");
      changeProgramState(PS_MESSAGE);
      return;

    //***************************************************
    case 3: // [0-9] eventListeners - collect ID
      //replace default "-----.--" with numbers


      //check if number is too long
      let searchResults = tenderNumber.search("-");
      if(searchResults == 0){ //hyphen found, input less than 3
        //continue building number
        buildTenderNumber(number);
      } else { //no hypen found
        console.warn("Input too long");
        printErrorState("Input Too Long", "Press Clear");
        changeProgramState(PS_ERROR);
      }

      console.error("current bug: tenderNumber is not cleared if input is too long and error thrown and user press clear ");

      break;

    //***************************************************
    // case 2: // ENTER eventListeners - confirm ID
    //
    //   //before running searchUsers() remove hyphens
    //   userInput = userInput.replace(/-/g,"");
    //
    //   //search users for match - userResultIndex will be used again in case 5 to confirm PIN
    //   userResultIndex = searchUsers(userInput);
    //
    //   //check for no-match before check for match
    //   //this prevents errors and allows display out message to user
    //   if(userResultIndex == -1){ //-1 = no match found
    //     console.warn("ID results - no match found");
    //
    //     //print error message to diplay
    //     printErrorState("ID Not Found", "Press Clear");
    //
    //     //change state
    //     changeProgramState(PS_ERROR);
    //     return;
    //   }
    //
    //   if(userResultIndex == -2){
    //     console.error("Unexpected error - ID match check");
    //
    //     //Print error message
    //     printErrorState("Fatal Error - 117", "Call Helpdesk"); //throw error code
    //
    //     //change state
    //     changeProgramState(PS_ERROR);
    //     return;
    //   }
    //
    //   //check for match
    //   if(userInput == userProfiles[userResultIndex].id){
    //     console.log("ID correct");
    //
    //     //input matches id
    //     idFlag = 1; //set flag
    //
    //     //redirect to PIN prompt
    //     signIn(3);
    //     return;
    //   }
    //   break;
    default:

  }

}//end function


//************************************
//********* WALLET STUFF *************


function card(userSetType, userSetStatus, userSetBalance){
  //console.log("card called");

  //card is intended to randomly create a new card based on a set criteria
  //Giftcard type has limitations of a max balance of $200, and unless manually set, it cannot be any status but active
  //variables do not have to be set, as default variables will create a random card
  //The function wallet creates six random cards, and one Admin card with a huge balance -- meant to complete any transaction in case all 6 cards don't have sufficent balances
  //cardStatus is 10 times more likely to generate as "Active" to simulate real world conditions. other types are less likely to occur


  //status options
  // -- active
  // -- inactive
  // -- stolen
  // -- fraud (this is used by bank to mark unusual card activity, not the same as stolen)
  // -- Expired


  //type options
  // -- EBT
  // -- Debit
  // -- Credit
  // -- Giftcard -- includes limitations to randomizer


  //create variables
  //arrays are used list options and randomize options - only used internally
  this.cardTypes = ["Debit", "Credit", "EBT", "Giftcard"];
  this.cardStatus = ["active", "active", "inactive", "active",
    "active", "stolen", "active", "active", "fraud", "active", "active",
    "expired", "active", "active"]; // active is listed as an option far more to increase likelyhood of randomly being generated

  //if no value set manually
  if(userSetType === undefined){
    this.type = this.cardTypes[Math.floor(Math.random() * this.cardTypes.length)]; //randomly select card type
  } else {
    //else set type manually
    this.type = userSetType;
  }

  //if no value set manually
  if(userSetStatus === undefined){
    //if no user input, then check if cardtype is "giftcard"
    if(this.type === "Giftcard"){
      //if giftcard, set status to "active"
      this.status = "active";
    } else {
      //else set status randomly
      this.status = this.cardStatus[Math.floor(Math.random() * this.cardStatus.length)]; //randomly select card status
    }
  } else {
    //else set status manually
    this.status = userSetStatus;
  }

  //if no balance set manually
  if(userSetBalance === undefined){
    //check for cardtype "giftcard"
    if(this.type === "Giftcard"){
      //gift cards are limited to $200 max balance
      this.balance = (Math.random() * (40.00 - 200.00) + 200.00).toFixed(2);
    } else {
      //if not a gift card, balance max is $600
      this.balance = (Math.random() * (40.00 - 600.00) + 600.00).toFixed(2);
    }
  } else {
    //else set balance manually
    this.balance = userSetBalance.toFixed(2);
  }

}//end function

function initializeWallet(){
  console.log("initializeWallet called");

  //this function creates an array of unique payment methods including various cards and cash
  //these cards are objects made by card() -- see documentation there for more information on card()
  //one card is manually set to always allow a user to complete a transation
  //this function does not print out results to frontend


  //the function card() is used to create new random card objects
  myPaymentCard = [
    new card(),
    new card(),
    new card(),
    new card(),
    new card(),
    new card(),
    new card("Admin Card", "active", 100000.00),
    new card("Cash", "active") //balance is generated randomly in card function
  ];

}//end function

function printWallet(arrayIn){
  console.log("printWallet called");

  //this function prints current wallet to front end

  let output = "";
  output += "<h3>Wallet</h3>";
  output += "<table class='wallet-list-1'>";
  output += "<tbody id='mywallet'></tbody>";

  //run loop
  //8 is hardcoded since there are only 8 items in wallet
  for(let i = 0; i < 8; i++){

    //set color
    let cardStatus = arrayIn[i].status;
    let color = "";

    //determine correct color
    switch (cardStatus) {
      case "active":
        color = "green";
        break;
      case "inactive":
        color = "blue";
        break;
      case "fraud":
        color = "red";
        break;
      case "stolen":
        color = "red";
        break;
      case "expired":
        color = "blue";
        break;
      default:
        console.log("ERROR: userSetStatus found", cardStatus);
        color = "green";
    }//end switch

    //print row for card
    output += "<tr>";
    output += "<td>" + arrayIn[i].type + " <span style='color:" + color + "; font-size:8pt;'>" + arrayIn[i].status.toUpperCase() + "</span></td>";
    output += "<td>Bal: $" + arrayIn[i].balance + "</td>";
    output += "<td><button class='use-btn' type='button'>Pay</button></td>";
    output += "</tr>";

  }//end for loop

  output += "</table>";

  //print output
  document.getElementById("wallet").innerHTML = output;

}//end function


//************************************
//*********** SCALE STUFF ************


function randomWeight(){ // create randome number for weight
  console.log("randomWeight called");

  //this function generates a random weight between 0lbs and 15lbs

  //set variable
  let myWeight = (Math.random() * (0.00 - 5.00) + 5.00).toFixed(2);

  //print to display
  printScaleToDisplay(myWeight);

  //return value
  return myWeight;
}//end function

function printWeightToDisplay(weightIn){ //print weight to display
  console.log("printWeightToDisplay called");

  // **DOCUMENTATION**
  //this function outputs weigbht to frontend user screen

  document.getElementById("scale-display").value = weightIn + " lbs";

}//end function

function randomScanItem(){ //use space bar to scan random item
  console.log("randomScanItem called");
  //this function includes an eventListener for space bar press
  //when space bar is pressed, it will simulute scanning a random item



}//end function


//************************************
//********* MONEY MATH ***************


function addMoney(xin, yin){
  console.log("addMoney called");
  return (xin * 100 + yin * 100) / 100;
}

function subtractMoney(xin, yin){
  console.log("subtractMoney called");
  return (xin * 100 - yin * 100) / 100;
}

function addToSubTotal(xin){
  console.log("addToSubTotal called");
  if(subTotal > 0){
    console.log("debug 1");
    subTotal = (xin * 100 + subTotal * 100) / 100;
  } else {
    subTotal = xin;
    console.log("debug 2");
  }
  //round number
  subTotal = Math.round(subTotal * 100) / 100; //round to decimal
}//end function

function buildCartArray(cartId, itemIndex, itemQuantity, itemWeight, itemVoided){
  console.log("buildCartArray called");
  //item is passed here from searchFood(), item is added to the cart array,
  //then updatePrinter() is called to pass on item
  //then scan(1) is called to fillout the display

  //each item scanned must have the following info:
  //item index
  //item quantity -- default value is 1
  //item weight -- 0 equals no weighted item
  //item void -- true equals void, false equals not voided

  //build array
  myCart[myCartIndex] = {
    cartId: cartId,
    index: itemIndex,
    quantity: itemQuantity,
    weight: itemWeight,
    void: itemVoided
  };

  //increment counter
  myCartIndex++;

  //update printer
  printerMain(myCart);


  //notes to self for array syntax....
  // myCartArray = [
  //   {index:1, quantity:1, weight:1.65, void:false},
  //   {index:2, quantity:1, weight:0, void:false},
  //   {index:3, quantity:8, weight:0, void:false},
  //   {index:4, quantity:1, weight:0, void:true}
  // ];

  // myCartArray2 = [
  //   new uniquePurchase(1, 1, 1.65, false),
  //   new uniquePurchase(2, 1, 0, false)
  // ];

}//end function


//***********************************
//********* PRINTER FUNCTIONS *******


function initializePrinter(){
  console.log("initializePrinter called");

  //function is used on start up to clear static HTML and print header to printer

  //generate header
  output = "";
  output += "<p class='top-print'>ALDI<br/>";
  output += "Store #" + store.number + "<br/>";
  output += store.address + "<br/>";
  output += store.website + "<br/>";
  //output += "Your cashier today was " + userProfiles[userResultIndex].name;
  output += "</p>";
  output += "<table class='shopping-items'>";

  //print to display
  document.getElementById("printer").innerHTML = output;

}

function printerMain(arrayIn){
  console.log("printerMain called");
  console.log(arrayIn);

  //printerMain handles how items are printed to reciept
  //based on what item is in the array, it will choose the correct
  //reciept printing function and generate correct output

  //generate header
  output = "";
  output += "<p class='top-print'>ALDI<br/>";
  output += "Store #" + store.number + "<br/>";
  output += store.address + "<br/>";
  output += store.website + "<br/>";
  output += "Your cashier today was " + userProfiles[userResultIndex].name;
  output += "</p>";
  output += "<table class='shopping-items'>";

  //find items in current cart from array
  arrayLen = arrayIn.length;
  for(i = 0; i < arrayLen; i++){
    console.log("loop1: ",i);
    if(arrayIn[i].cartId == currentCartId){

      //check if item voided
      //CHECK FOR VOID FIRST!
      //cancelNameName variables are used to prevent following
      //if statements from printing results after printing VOID line
      if(arrayIn[i].void == true){
        console.log("item was voided: ", arrayIn[i].voided);
        cancelStandardOut = 1;
        cancelWeightedOut = 1;
        cancelQuantityOut = 1;
        output += updatePrinterVoidOutput(arrayIn[i].index, arrayIn[i].quantity, arrayIn[i].weight);
      }
      //check for quantity
      if(arrayIn[i].quantity > 1 && cancelQuantityOut == 0){
        console.log("quantity found: ", arrayIn[i].quantity);
        cancelStandardOut = 1;
        output += updatePrinterQuantityOutput2(arrayIn[i].index, arrayIn[i].quantity);
      }
      //check for weight
      if(arrayIn[i].weight > 0 && cancelWeightedOut == 0){
        console.log("weight found: ", arrayIn[i].weight);
        cancelStandardOut = 1;
        output += updatePrinterWeightOutput2(arrayIn[i].index, arrayIn[i].weight);
      }

      //if no other item found, run standard output
      if(cancelStandardOut == 0){
        console.log("standard output for index: ", i);
        output += updatePrinterStandardOutput2(arrayIn[i].index);
      }

      //reset cancelStandardOut
      cancelStandardOut = 0;
      cancelQuantityOut = 0;
      cancelWeightedOut = 0;

    } else {
      console.log("ERROR: currentCartId not found");
    }
  }

  //print to display
  document.getElementById("printer").innerHTML = output;

}//end function

function updatePrinterStandardOutput(item){
  console.log("updatePrinterStandardItem() called");
  //this function prints according to the "standard" format to the receipt
  //variable "item" must be a data item index, not a UPC, NLU, or Smart code



  //Determine price
  if(data[item].Sale_Active == 1){
    price = data[item].Sale_Price;
  } else {
    price = data[item].Full_Price;
  }

  //generate output
  output = "";
  output += "<table class='standard'>";
  output += "<tr class='standard'>";
  output += "<td class='row-1'>" + data[item].Description + "</td>";
  output += "<td width='18%' class='row-2'></td>";
  output += "<td width='18%' class='row-3'>" + price + "</td>";
  output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
  output += "</tr>";

  //load up existing content
  currentReceipt = document.getElementById("printer").innerHTML;

  //add new generated output
  newReceipt = currentReceipt + output;

  //update document
  document.getElementById("printer").innerHTML = newReceipt;
}//end function

function updatePrinterStandardOutput2(item){
  console.log("updatePrinterStandardOutput2() called");
  //this function prints according to the "standard" format to the receipt
  //variable "item" must be a data item index, not a UPC, NLU, or Smart code

  //Determine price
  if(data[item].Sale_Active == 1){
    price = data[item].Sale_Price;
  } else {
    price = data[item].Full_Price;
  }

  //format numbers for output
  price = (price * 100) / 100; //convert to money format
  price = Math.round(price * 100) / 100; //round to decimal

  //generate output
  let output = "";
  //output2 += "<table class='standard'>";
  output += "<tr class='standard'>";
  output += "<td class='row-1'>" + data[item].Description + "</td>";
  output += "<td width='18%' class='row-2'></td>";
  output += "<td width='18%' class='row-3'>" + price + "</td>";
  output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
  output += "</tr>";

  return output;
}//end function

function updatePrinterQuantityOutput(item, quantity){
  console.log("updatePrinterQuantityOutput called");

  //this function prints according to the "Quantity" format to the receipt
  //variable "item" must be a data item index, not a UPC, NLU, or Smart code
  //variable "quantity" is the count of items

  //Determine price
  if(data[item].Sale_Active == 1){
    price = data[item].Sale_Price;
  } else {
    price = data[item].Full_Price;
  }

  //set variable
  total = price;

  // if(quantity > 1){
  //   for(i = 1; i < quantity; i++){
  //     total = addMoney(total, price);
  //   }
  // }

  total = price * quantity;
  total = (total * 100) / 100;

  //generate output
  output = "";
  output = "<table class='standard'>";
  output += "<tr class='standard'>";
  output += "<td class='row-1'>" + data[item].Description + "</td>";
  output += "<td width='18%' class='row-2'></td>";
  output += "<td width='18%' class='row-3'>" + total + "</td>";
  output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
  output += "</tr>";
  output += "<tr class='standard quantity'>";
  output += "<td class='row-1'>" + quantity + " @</td>";
  output += "<td width='18%' class='row-2'>" + price + "</td>";
  output += "<td width='18%' class='row-3'></td>";
  output += "<td width='9%' class='row-4'></td>";

  //load up existing content
  currentReceipt = document.getElementById("printer").innerHTML;

  //add new generated output
  newReceipt = currentReceipt + output;

  //update document
  document.getElementById("printer").innerHTML = newReceipt;
}//end function

function updatePrinterQuantityOutput2(item, quantity){
  console.log("updatePrinterQuantityOutput2 called");

  //this function prints according to the "Quantity" format to the receipt
  //variable "item" must be a data item index, not a UPC, NLU, or Smart code
  //variable "quantity" is the count of items

  //Determine price
  if(data[item].Sale_Active == 1){
    price = data[item].Sale_Price;
  } else {
    price = data[item].Full_Price;
  }

  //set variable
  let total = price;

  total = price * quantity;
  total = (total * 100) / 100; //convert to money format
  total = Math.round(total * 100) / 100; //round to decimal

  //generate output
  let output = "";
  output += "<tr class='standard'>";
  output += "<td class='row-1'>" + data[item].Description + "</td>";
  output += "<td width='18%' class='row-2'></td>";
  output += "<td width='18%' class='row-3'>" + total + "</td>";
  output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
  output += "</tr>";
  output += "<tr class='standard quantity'>";
  output += "<td class='row-1'>" + quantity + " @</td>";
  output += "<td width='18%' class='row-2'>" + price + "</td>";
  output += "<td width='18%' class='row-3'></td>";
  output += "<td width='9%' class='row-4'></td>";

  //export content
  return output;

}//end function

function updatePrinterWeightOutput(item, weight){
  console.log("updatePrinterWeightOutput called");
  //this function prints according to the "Quantity" format to the receipt
  //variable "item" must be a data item index, not a UPC, NLU, or Smart code
  //variable "weight" is the weight of the item

  //Determine price
  if(data[item].Sale_Active == 1){
    price = data[item].Sale_Price;
  } else {
    price = data[item].Full_Price;
  }

  //set variable


  //determine price
  total = price * weight;
  total = Math.round(total * 100) / 100;

  //generate output
  output = "";
  output += "<table class='standard'>";
  output += "<tr class='standard'>";
  output += "<td class='row-1'>" + data[item].Description + " LRW</td>";
  output += "<td width='18%' class='row-2'></td>";
  output += "<td width='18%' class='row-3'>" + total + "</td>";
  output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
  output += "</tr>";
  output += "<tr class='standard weight'>";
  output += "<td class='row-1'>" + weight + " lbs x</td>";
  output += "<td width='18%' class='row-2'>" + price + "/lb</td>";
  output += "<td width='18%' class='row-3'></td>";
  output += "<td width='9%' class='row-4'></td>";

  //load up existing content
  currentReceipt = document.getElementById("printer").innerHTML;

  //add new generated output
  newReceipt = currentReceipt + output;

  //update document
  document.getElementById("printer").innerHTML = newReceipt;
}//end funciton

function updatePrinterWeightOutput2(item, weight){
  console.log("updatePrinterWeightOutput2 called");
  //this function prints according to the "Quantity" format to the receipt
  //variable "item" must be a data item index, not a UPC, NLU, or Smart code
  //variable "weight" is the weight of the item

  //Determine price
  if(data[item].Sale_Active == 1){
    price = data[item].Sale_Price;
  } else {
    price = data[item].Full_Price;
  }

  //determine price
  let total = price * weight;
  total = (total * 100) / 100; //convert to money format
  total = Math.round(total * 100) / 100; //round to decimal
  weight = Math.round(weight * 100) / 100; //round to decimal

  //generate output
  let output = "";
  output += "<tr class='standard'>";
  output += "<td class='row-1'>" + data[item].Description + " LRW</td>";
  output += "<td width='18%' class='row-2'></td>";
  output += "<td width='18%' class='row-3'>" + total + "</td>";
  output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
  output += "</tr>";
  output += "<tr class='standard weight'>";
  output += "<td class='row-1'>" + weight + " lbs x</td>";
  output += "<td width='18%' class='row-2'>" + price + "/lb</td>";
  output += "<td width='18%' class='row-3'></td>";
  output += "<td width='9%' class='row-4'></td>";

  //return output
  return output;

}//end function

function updatePrinterVoidOutput(item, quantity, weight){
  console.log("updatePrinterVoidOutput called");
  //this function prints according to the "Quantity" format to the receipt
  //variable "item" must be a data item index, not a UPC, NLU, or Smart code
  //variable "weight" is the weight of the item

  //Determine price
  if(data[item].Sale_Active == 1){
    price = data[item].Sale_Price;
  } else {
    price = data[item].Full_Price;
  }

  //set variables
  let cancelStandardOut = 0; //local variable only -- not the same as the global
  let output = "";

  //check for quantity
  if(quantity > 1){
    //prevent standard output
    cancelStandardOut = 1;

    //set variable
    total = price;

    if(quantity > 1){
      for(let i = 1; i < quantity; i++){
        total = addMoney(total, price);
      }
    }

    //generate output
    output += "<tr class='standard'>";
    output += "<td class='row-1'>" + data[item].Description + "</td>";
    output += "<td width='18%' class='row-2'>VOID</td>";
    output += "<td width='18%' class='row-3'>-" + total + "</td>";
    output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
    output += "</tr>";
    output += "<tr class='standard quantity'>";
    output += "<td class='row-1'>-" + quantity + " @</td>";
    output += "<td width='18%' class='row-2'>" + price + "</td>";
    output += "<td width='18%' class='row-3'></td>";
    output += "<td width='9%' class='row-4'></td>";
  }

  //check for weight
  if(weight > 0){
    //prevent standard output
    cancelStandardOut = 1;

    //determine price based on weight
    total = price * weight;
    total = Math.round(total * 100) / 100;

    //generate output
    output += "<tr class='standard'>";
    output += "<td class='row-1'>" + data[item].Description + " LRW</td>";
    output += "<td width='18%' class='row-2'>VOID</td>";
    output += "<td width='18%' class='row-3'>-" + total + "</td>";
    output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
    output += "</tr>";
    output += "<tr class='standard weight'>";
    output += "<td class='row-1'>" + weight + " lbs x</td>";
    output += "<td width='18%' class='row-2'>" + price + "/lb</td>";
    output += "<td width='18%' class='row-3'></td>";
    output += "<td width='9%' class='row-4'></td>";
  }

  //standard output
  if(cancelStandardOut == 0){

    //generate output
    output += "<tr class='standard'>";
    output += "<td class='row-1'>" + data[item].Description + "</td>";
    output += "<td width='18%' class='row-2'>VOID</td>";
    output += "<td width='18%' class='row-3'>-" + price + "</td>";
    output += "<td width='9%' class='row-4'>" + data[item].Type + "</td>";
    output += "</tr>";
  }

  //return output
  return output;

}//end function

function updatePrinterPayment(){
  console.log("updatePrinterPayment called");

  taxRateB = 5.300;
  taxRateC = 2.500;

}//end function


//**************************************
//********** BUTTON EVENTLISTENERS *****
//**** AND SPECIFIC STATE FUNCTIONS ****


function buttonEventListeners(){
  console.log("buttonEventListeners called");


  document.getElementById("btn-code").addEventListener("click", function(){
    console.warn("Code Clicked");
    buttonSortByState("code");
  });
  document.getElementById("btn-suspend").addEventListener("click", function(){
    console.warn("Suspend Clicked");
    buttonSortByState("suspend");
  });
  document.getElementById("btn-verify").addEventListener("click", function(){
    console.warn("Verify Clicked");
    buttonSortByState("verify");
  });
  document.getElementById("btn-tax").addEventListener("click", function(){
    console.warn("tax Clicked");
    buttonSortByState("tax");
  });
  document.getElementById("btn-no-sale").addEventListener("click", function(){
    console.warn("No Sale Clicked");
    buttonSortByState("no-sale");
  });
  document.getElementById("btn-eggs").addEventListener("click", function(){
    console.warn("eggs Clicked");
    buttonSortByState("eggs");
  });
  document.getElementById("btn-plastic").addEventListener("click", function(){
    console.warn("plastic Clicked");
    buttonSortByState("plastic");
  });
  document.getElementById("btn-employee").addEventListener("click", function(){
    console.warn("employee Clicked");
    buttonSortByState("employee");
  });
  document.getElementById("btn-clear").addEventListener("click", function(){
    console.warn("clear Clicked");
    buttonSortByState("clear");
  });
  document.getElementById("btn-mark-down").addEventListener("click", function(){
    console.warn("mark down Clicked");
    buttonSortByState("mark-down");
  });
  document.getElementById("btn-price-override").addEventListener("click", function(){
    console.warn("price override Clicked");
    buttonSortByState("price-override");
  });
  document.getElementById("btn-void").addEventListener("click", function(){
    console.warn("void Clicked");
    buttonSortByState("void");
  });
  document.getElementById("btn-1").addEventListener("click", function(){
    console.warn("1 Clicked");
    buttonSortByState("1");
  });
  document.getElementById("btn-2").addEventListener("click", function(){
    console.warn("2 Clicked");
    buttonSortByState("2");
  });
  document.getElementById("btn-3").addEventListener("click", function(){
    console.warn("3 Clicked");
    buttonSortByState("3");
  });
  document.getElementById("btn-4").addEventListener("click", function(){
    console.warn("4 Clicked");
    buttonSortByState("4");
  });
  document.getElementById("btn-5").addEventListener("click", function(){
    console.warn("5 Clicked");
    buttonSortByState("5");
  });
  document.getElementById("btn-6").addEventListener("click", function(){
    console.warn("6 Clicked");
    buttonSortByState("6");
  });
  document.getElementById("btn-7").addEventListener("click", function(){
    console.warn("7 Clicked");
    buttonSortByState("7");
  });
  document.getElementById("btn-8").addEventListener("click", function(){
    console.warn("8 Clicked");
    buttonSortByState("8");
  });
  document.getElementById("btn-9").addEventListener("click", function(){
    console.warn("9 Clicked");
    buttonSortByState("9");
  });
  document.getElementById("btn-0").addEventListener("click", function(){
    console.warn("0 Clicked");
    buttonSortByState("0");
  });
  document.getElementById("btn-subtotal").addEventListener("click", function(){
    console.warn("subtotal Clicked");
    buttonSortByState("subtotal");
  });
  document.getElementById("btn-paper").addEventListener("click", function(){
    console.warn("paper Clicked");
    buttonSortByState("paper");
  });
  document.getElementById("btn-qty").addEventListener("click", function(){
    console.warn("qty Clicked");
    buttonSortByState("qty");
  });
  document.getElementById("btn-total").addEventListener("click", function(){
    console.warn("total Clicked");
    buttonSortByState("total");
  });
  document.getElementById("btn-enter").addEventListener("click", function(){
    console.warn("enter Clicked");
    buttonSortByState("enter");
  });
  document.getElementById("btn-card").addEventListener("click", function(){
    console.warn("card Clicked");
    buttonSortByState("card");
  });
  document.getElementById("btn-gift-card").addEventListener("click", function(){
    console.warn("gift-card Clicked");
    buttonSortByState("gift-card");
  });
  document.getElementById("btn-cash").addEventListener("click", function(){
    console.warn("cash Clicked");
    buttonSortByState("cash");
  });

  //****************************************************************************
  //************************ admin panel buttons *******************************
  //****************************************************************************

  document.getElementById("btn-enable-admin").addEventListener("click", function(){
    console.warn("btn-enable-admin clicked");
    adminBtnActions("btn-enable-admin");
  })

  document.getElementById("sim-1").addEventListener("click", function(){
    console.warn("sim-1 Clicked");
    adminBtnActions("sim-1");
  });
  document.getElementById("sim-2").addEventListener("click", function(){
    console.warn("sim-2 Clicked");
    adminBtnActions("sim-2");
    });
  document.getElementById("sim-3").addEventListener("click", function(){
    console.warn("sim-3 Clicked");
    adminBtnActions("sim-3");
  });
  document.getElementById("sim-4").addEventListener("click", function(){
    console.warn("sim-4 Clicked");
    adminBtnActions("sim-4");
  });
  document.getElementById("sim-5").addEventListener("click", function(){
    console.warn("sim-5 Clicked");
    adminBtnActions("sim-5");
  });
  document.getElementById("sim-6").addEventListener("click", function(){
    console.warn("sim-6 Clicked");
    adminBtnActions("sim-6");
  });
  document.getElementById("sim-7").addEventListener("click", function(){
    console.warn("sim-7 Clicked");
    adminBtnActions("sim-7");
  });
  document.getElementById("sim-8").addEventListener("click", function(){
    console.warn("sim-8 Clicked");
    adminBtnActions("sim-8");
  });
  document.getElementById("sim-9").addEventListener("click", function(){
    console.warn("sim-9 Clicked");
    adminBtnActions("sim-9");
  });
  document.getElementById("sim-10").addEventListener("click", function(){
    console.warn("sim-10 Clicked");
    adminBtnActions("sim-10");
  });
  document.getElementById("sim-11").addEventListener("click", function(){
    console.warn("sim-11 Clicked");
    adminBtnActions("sim-11");
  });
  document.getElementById("sim-12").addEventListener("click", function(){
    console.warn("sim-12 Clicked");
    adminBtnActions("sim-12");
  });
  document.getElementById("sim-13").addEventListener("click", function(){
    console.warn("sim-13 Clicked");
    adminBtnActions("sim-13");
  });


}//end function

function buttonSortByState(input){
  console.log("buttonSortByState called");

  switch (currentProgramState) {
    case 1:
      state1BtnActions(input);
      break;
    case 2:
      state2BtnActions(input);
      break;
    case 3:
      state3BtnActions(input);
      break;
    case 4:
      state4BtnActions(input);
      break;
    case 5:
      state5BtnActions(input);
      break;
    case 6:
      state6BtnActions(input);
      break;
    case 7:
      state7BtnActions(input);
      break;
    default: //debugging
      console.log("ERROR: button state unknown: ", currentProgramState);
      break;
  }//end switch
}//end function

function adminBtnActions(input){
  console.log("adminBtnActions called");


  switch (input) {
    case "btn-enable-admin":
      enableAdmin();
      break;
    case "sim-1": //N/A

      break;
    case "sim-2": //drawer closed
      //click this button to close the draw
      toggleCashBoxIndicator(2); //close
      break;
    case "sim-3": //drawer open
      //click this button to close the draw
      toggleCashBoxIndicator(1); //open
      break;
    case "sim-4": //N/A

      break;
    case "sim-5": //N/A

      break;
    case "sim-6": //N/A

      break;
    case "sim-7": //N/A

      break;
    case "sim-8": //login
      backdoor(1);
      break;
    case "sim-9": //show codes

      break;
    case "sim-10": //exit admin
      exitAdmin();
      break;
    case "sim-11": //logout
      backdoor(2);
      break;
    case "sim-12": //reset cart / reset session

      break;
    case "sim-13": //show help

      break;

    default: //debugging
      console.warn("ERROR: input parameter not recognized");

  }


}//end function

function state1BtnActions(input){ //login/signin
  console.log("state1BtnActions called");
  //State 1 - Total State
  switch (input) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if(shiftSet == 0){
        //direct user to signin()
        if(idFlag == 0){ //has user entered an ID yet?
          //send numbers to ID input processor
          signIn(1, input);
        } else {
          //send numbers to PIN input processor
          signIn(4, input);
        }

      } else
      if(loggedIn == 0){
        //direct user to login()
        login(1, input);
      } else {
        //error
        console.error("program should not be in this state");
        return;
      }
      break;
    case "enter":
      if(shiftSet == 0){ //has user signed in yet?
        //direct user to signin
        if(idFlag == 0){ //has user entered an ID yet?
          //prompt user for ID
          signIn(2);
        } else {
          //prompt user for PIN
          signIn(5);
        }
      } else
      if(loggedIn == 0){ //is user logged in?
        //direct user to login
        login(2);
      } else {
        //error - in state 1 loggedIn can equal 0 or 1,
        //-- but shiftSet should never be 1
        console.error("program should not be in this state");
        return;
      }
      break;
    case "clear":
      //return user to where there were
      autoSetState();
      break;
    // case "code":
    //   break;
    // case "suspend":
    //   break;
    case "verify":
      break;
    // case "tax":
    //   break;
    // case "no-sale":
    //   break;
    // case "eggs":
    //   break;
    // case "plastic":
    //   break;
    // case "employee":
    //   break;
    // case "mark-down":
    //   break;
    // case "price-override":
    //   break;
    // case "void":
    //   break;
    // case "subtotal":
    //   break;
    // case "paper":
    //   break;
    // case "qty":
    //   break;
    // case "total":
    //   break;
    // case "card":
    //   break;
    // case "gift-card":
    //   break;
    // case "cash":
    //   break;


    default:
      errorTriggered();
      break;


  }//end switch
}//end function

function state2BtnActions(input){ //scanning
  console.log("state2BtnActions called");

  //State 2 - Scanning State

  switch (input) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    scan(1, input);
      break;
    case "clear":
      scan(2);
      break;
    case "enter":
      scan(3);
      break;
    case "code":
      code(userNumber);
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
    case "mark-down":
      break;
    case "price-override":
      break;
    case "void":
      break;
    case "subtotal":
      break;
    case "paper":
      break;
    case "qty":
      break;
    case "total":
      changeProgramState(PS_TOTAL);
      totalState();
      break;
    // case "card":
    // errorTriggered();
    //   break;
    // case "gift-card":
    // errorTriggered();
    //   break;
    // case "Cash":
    // errorTriggered();
    //   break;
    default:
      console.log("ERROR: State 2 - Can't do that son");
      errorTriggered();
      break;
  }//end switch
}//end function

function state3BtnActions(input){ // total
  console.log("state3BtnActions called");

  //State 3 - Total State

  switch (input) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      totalState(3, input);
      break;
    case "verify":
      break;
    case "clear":
      autoSetState();
      break;
    case "void":
      break;

    case "card":
      //break;
    case "gift-card":
      //break;
    case "Cash":
      totalState(2, input);
      break;

    default:
      console.log("ERROR: could not find the button you clicked");
      errorTriggered();
      break;
  }//end switch
}//end function

function state4BtnActions(input){ //payment
  console.log("state4BtnActions called");

  //State 4 - Payment State

  switch (input) {
    // case "code":
    // console.log("Code clicked - State 1 - Active");
    //   break;
    // case "suspend":
    // console.log("Suspend clicked - State 1 - Active");
    //   break;
    // case "verify":
    // console.log("verify clicked - State 1 - Active");
    //   break;
    // case "tax":
    // console.log("tax clicked - State 1 - No action");
    //   break;
    // case "no-sale":
    // console.log("No Sale clicked - State 1 - Active");
    //   break;
    // case "eggs":
    // console.log("Eggs clicked - State 1 - Active");
    //   break;
    // case "plastic":
    // console.log("plastic clicked - State 1 - Active");
    //   break;
    // case "employee":
    // console.log("employee clicked - State 1 - No action");
    //   break;
    case "clear":

      break;
    // case "mark-down":
    // console.log("Mark Down clicked - State 1 - Active");
    //   break;
    // case "price-override":
    // console.log("Price Override clicked - State 1 - Active");
    //   break;
    // case "void":
    // console.log("void clicked - State 1 - No action");
    //   break;
    // case "7":
    // console.log("7 clicked - State 1 - Active");
    //   break;
    // case "8":
    // console.log("8 clicked - State 1 - Active");
    //   break;
    // case "9":
    // console.log("9 clicked - State 1 - Active");
    //   break;
    // case "4":
    // console.log("4 clicked - State 1 - No action");
    //   break;
    // case "5":
    // console.log("5 clicked - State 1 - Active");
    //   break;
    // case "6":
    // console.log("6 clicked - State 1 - Active");
    //   break;
    // case "1":
    // console.log("1 clicked - State 1 - Active");
    //   break;
    // case "2":
    // console.log("2 clicked - State 1 - No action");
    //   break;
    // case "3":
    // console.log("3 clicked - State 1 - Active");
    //   break;
    // case "0":
    // console.log("0 clicked - State 1 - Active");
    //   break;
    // case "subtotal":
    // console.log("subtotal clicked - State 1 - Active");
    //   break;
    // case "paper":
    // console.log("paper clicked - State 1 - No action");
    //   break;
    // case "qty":
    // console.log("qty clicked - State 1 - Active");
    //   break;
    // case "total":
    // console.log("total clicked - State 1 - Active");
    //   break;
    // case "enter":
    // console.log("enter clicked - State 1 - Active");
    //   break;
    // case "card":
    // console.log("card clicked - State 1 - No action");
    //   break;
    // case "gift-card":
    // console.log("Gift Card clicked - State 1 - Active");
    //   break;
    // case "Cash":
    // console.log("Cash clicked - State 1 - Active");
    //   break;
    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end function

function state5BtnActions(input){ //message
  console.log("state5BtnActions called");

  //State 5 - Message State

  //Message is a display that is used on MANY screens, and each one is unique.
  //interaction on this option will be difficult

  switch (input) {
    case "clear":
    //autoSetState();
    //clear enteres a date check screen when in state 3

      break;
    case "total":

      break;

    case "enter":
      switch (previousProgramState) {
        case 3: // TOTAL STATE
          //currentl there is only one message for ID check
          if(checkID == 1){ //if in state three, and checkID is positive, user sent here from ID check prompt
            //enter clears prompt and moves on in script
            checkIDFlag = 1; //set flag
            totalState(0);
          } else {
            console.error("unexpected error: conditions not right");
            return;
          }

          break;
        default:

      }//end nested switch
      break;

    default:
      console.log("ERROR: could not find the button you clicked");
      break;
  }//end switch
}//end function

function state6BtnActions(input){ //error state
  console.log("state6BtnActions called");

  //State 6 - Error State
  //only way a user can get out of error state is to press clear
  //all other buttons deactivated

  switch (input) {
    case "clear":
      autoSetState(); //return to whatever program state should be
      break;

    default: //default action will eventually include a buzz sound
      console.error("ERROR: State 6 - Can't do that son");
      break;
  }//end switch
}//end function

function state7BtnActions(input){
  console.log("state7BtnActions called");
  //State 7 - new cart - (most buttons are disabled, this is a very specific situation
  //so creating a new state simplified the scan() function

  switch (input) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    scan(1, input);
      break;
    case "clear":
      //check for entered number
      if(userNumber === undefined){
        errorTriggered();
      } else {
        scan(2);
      }
      break;
    case "enter":
      //check for entered number
      if(userNumber === undefined){
        errorTriggered();
      } else {
        scan(3);
      }
      break;

      //follow buttons turned off

    case "code":
      code(userNumber);
      break;
    // case "suspend":
    //   break;
    // case "verify":
    //   break;
    // case "tax":
    //   break;
    // case "no-sale":
    //   break;
    // case "eggs":
    //   break;
    // case "plastic":
    //   break;
    // case "employee":
    //   break;
    // case "mark-down":
    //   break;
    // case "price-override":
    //   break;
    // case "void":
    //   break;
    // case "subtotal":
    //   break;
    // case "paper":
    //   break;
    // case "qty":
    //   break;
    // case "total":
    //   break;
    // case "card":
    //   break;
    // case "gift-card":
    //   break;
    // case "Cash":
    //   break;


    default:
      console.log("ERROR: State 7 - button not available");
      errorTriggered();
      break;


  }//end switch
}//end function


//****************************************
//****** CODE FUNCTIONS *******


function code(codeIn){
  console.log("code() called");

  //codes can be entered from any state (expect when logged out) and can be used
  //** to perform different functions on the register

  switch (codeIn) {
    case "1": //logout
      logout();
      break;
    case 22: //change PIN
      changePin();
      break;
    case 6: //return
      break;
    case 77: //print all NLU
      printNLU();
      break;
    case 78: //print last receipt
      printLast();
      break;
    case "86": //end shift
      signOut();
      break;
    case 94: //cash drop
      cashDrop();
      break;
    default: //code not found
      console.error("code not found");
      printErrorState("Code Not Recognized", "*** PRESS ** CLEAR ***");
      changeProgramState(2);
      break;
  }

  //reset number
  userNumber = undefined;


}//end function

function logout(){ //log out of user account
  console.log("logout called");

  //function logs out a user by resetting loggedIn variable
  //autoSetState() will then redirect user to login function

  loggedIn = 0; //log out
  autoSetState(); //reset state
} // End function

function signOut(){
  console.log("signOut called");

  //signOut ends a shiftSet cycle
  //called by code 84

  //reset variables
  shiftSet = 0;
  loggedIn = 0;
  userResultIndex = undefined;

  //eventually need to add money data export function
  //will need

  //redirect
  autoSetState();

}//end function


//****************************************
//****** SPECIFIC BUTTON FUNCTIONS *******


function suspendRetrieve(){
  console.log("suspendRetrieve called");

  //function will suspend or retrieve a cart

}//end function

function verifyPrice(){
  console.log("verifyPrice called");
}//end function

function tax(){
  console.log("tax called");

}//end function

function noSale(){
  console.log("noSale called");

}//end function

function tax(){
  console.log("tax called");

}//end function

function quickAddItem(item){
  console.log("quickAddItem called - ", item);

  //quickAddItem works for keyboard shortcuts to ring up a unique item
  //paramter ITEM will see which item is clicked and add it to the cart

  switch (item) {
    case "eggs":

      break;
    case "plastic":

      break;
    case "paper":

      break;
    default:
      console.warn("parameter is not a pre-defined keyboard shortcute");

  }
}//end function

function employee(){
  console.log("employee called");

}//end function

function markDown(){
  console.log("markDown called");

}//end function

function priceOverride(){
  console.log("priceOverride called");

}//end function

function voidBtn(){
  console.log("voidBtn called");

}//end function

function ebtSubTotal(){
  console.log("ebtSubTotal called");

}//end function

function qty(){
  console.log("qty called");

}//end function

function cardBtn(){
  console.log("cardBtn called");

}//end function

function giftCard(){
  console.log("giftCard called");

}//end function

function cashBtn(){
  console.log("cashBtn called");

}//end function

//total, clear, enter are already heavily used in specific state and work flow management.
//Do not think these will be needed
function total(){
  console.log("total called");

}//end function

function enter(){
  console.log("enter called");

}//end function

function clear(){
  console.log("clear called");

}//end function


//****************************************
//****** ADMIN PANEL BUTTON FUNCTIONS *******


function enableAdmin(){
  console.log("enterAdmin called");

  //enterAdmin is a button on the standard simulator
  //user can press it to enable super functions

  //set flag
  adminPanelFlag = 1;

  //make admin buttons visable
  document.getElementById("sim-1").classList.toggle("hide");
  // document.getElementById("sim-2").classList.toggle("hide");
  // document.getElementById("sim-3").classList.toggle("hide");
  manageCashBoxIndicator();
  document.getElementById("sim-4").classList.toggle("hide");
  document.getElementById("sim-5").classList.toggle("hide");
  document.getElementById("sim-6").classList.toggle("hide");
  document.getElementById("sim-7").classList.toggle("hide");
  document.getElementById("sim-8").classList.toggle("hide");
  document.getElementById("sim-9").classList.toggle("hide");
  document.getElementById("sim-10").classList.toggle("hide");
  document.getElementById("sim-11").classList.toggle("hide");
  document.getElementById("sim-12").classList.toggle("hide");
  document.getElementById("sim-13").classList.toggle("hide");



}//end function

function manageCashBoxIndicator(){
  console.log("manageCashBoxIndicator called");

  //set local variables
  let boxClosed = document.getElementById("sim-2"); //red closed button
  let boxOpen = document.getElementById("sim-3"); //green open button

  //hide both indicators
  boxClosed.classList.add("hide"); //should turn off...
  boxOpen.classList.add("hide"); //should turn off...

  if(adminPanelFlag == 1){ //if admin panel enabled...
    //then cashBoxIndicator should be active

    if(cashBoxFlag == 1){ //if cash box is open
      //show open indicator
      console.log("show boxOpen indicator");
      boxOpen.classList.remove("hide");
    } else {
      //show closed indicator
      console.log("show boxClosed indicator");
      boxClosed.classList.remove("hide");
    }

  } else {
    //then cashBoxIndicator should not be active
    console.log("Admin panel disabled, hiding cashbox indicator");
  }

} //end function

function exitAdmin(){
  console.log("exitAdmin called");

  //exitAdmin is a button on the admin keyboard
  //user can press to disable super functions

  //set flag
  adminPanelFlag = 0;

  //hide all admin buttons
  document.getElementById("sim-1").classList.add("hide");
  // document.getElementById("sim-2").classList.add("hide");
  // document.getElementById("sim-3").classList.add("hide");
  manageCashBoxIndicator();
  document.getElementById("sim-4").classList.add("hide");
  document.getElementById("sim-5").classList.add("hide");
  document.getElementById("sim-6").classList.add("hide");
  document.getElementById("sim-7").classList.add("hide");
  document.getElementById("sim-8").classList.add("hide");
  document.getElementById("sim-9").classList.add("hide");
  document.getElementById("sim-10").classList.add("hide");
  document.getElementById("sim-11").classList.add("hide");
  document.getElementById("sim-12").classList.add("hide");
  document.getElementById("sim-13").classList.add("hide");



}//end function

function loginBtn(){
  console.log("loginBtn called");

}//end function

function logoutBtn(){
  console.log("logoutBtn called");

}//end function

function reset(){
  console.log("reset called");

}//end function

function showCodes(){
  console.log("showCodes called");

}//end function

function showHelp(){
  console.log("runTutorial called");

}//end function

function drawerOpen(){
  console.log("drawerOpen called");

}//end function

function drawerClosed(){
  console.log("drawerToggle called");

}//end function

function drawerToggle(){
  console.log("drawerToggle called");

}//end function


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
    {

      //system check
      theFlag = 0;

      //login() variables
      shiftSet = 0; // set once per shift on first login and last logout (code 86) -- used to track user data over entire day
      idFlag = 0; //flag used for tracking ID input vs PIN input
      userResultIndex = undefined; //session user data is saved here

      //login() variables
      loggedIn = 0; //0 = logged out, 1 = logged in
      idPass = 0; //flag used for tracking ID input vs PIN input

      //changeProgramState variables
      previousProgramState = 1; //previous program state
      currentProgramState = 1; //current program state

      //Program States
      PS_LOGIN = 1;
      PS_SCANNING = 2;
      PS_TOTAL = 3;
      PS_PAYMENT = 4;
      PS_MESSAGE = 5;
      PS_ERROR = 6;
      PS_NEWCART = 7;

      //changeDisplayState() variables
      previousDisplayState = 0; //previous display state
      currentDisplayState = 1; //current display state

      //Display States
      DS_TOTAL = 1;
      DS_SCANNING = 2;
      DS_SCAN_KEYIN = 3;
      DS_SCAN_QTY = 4;
      DS_ERROR = 5;
      DS_MESSAGE = 6;
      DS_LOGIN = 7;
      DS_OPTION = 8;

      //messageBanner varabiles
      paperCounter = 0; // flag for new paper roll needed
      pickupNeeded = 0; //flag for put cash in safe
      NEED_PAPER_SOON = 7; //trigger point for early notification -- number is a single transaction
      OUT_OF_PAPER = 10; //max number of transactions allowed before change paper code
      PICKUP_SOON = 1000; //trigger point for early notification -- number is cash balance in drawer
      PICKUP_NOW = 1400; //max amount of cash before trigger pickup code

      //buildTenderNumber variables
      tenderNumber = "-----.--"; //tendered payment value entered  here

      //totalState() variables
      checkIDFlag = 0; //have you checked ID yet?

      //user data
      userProfiles = [
        {name: "Ray", id: "1", pin: "2222"},
        {name: "Princess", id: "27", pin: "2222"},
        {name: "Keith", id: "81", pin: "2222"},
        {name: "Ray", id: "65", pin: "2222"},
        {name: "David", id: "77", pin: "2222"},
        {name: "Sarah", id: "11", pin: "2222"},
        {name: "Kelsey J", id: "58", pin: "2222"},
        {name: "Kelsey O", id: "36", pin: "2222"},
        {name: "Tonya", id: "45", pin: "2222"}
      ];


      store = {
        number:"22",
        address:"2617 Lakeside Dr, Lynchburg, VA 24501",
        website:"www.ALDI.us"
      };

      //buildScanNumber() variable
      userNumber = undefined;

      //scan() variables
      newCart = 0; //if nothing in cart
      newItemQty = 0; //If qty is used
      cartId = 1; //start
      itemCount = 1; //counts sequential items
      lastItem = undefined; //used to count sequential items, compares current item to last item
      thePrice = 0; //price of item
      subTotal = 0; //running subtotal of order
      checkID = 1; //change to 1 if an item requires ID verification
      COPY_LIMIT = 5; //limit to how many duplicates user can make sequencially
      scannedAgain = 0; //value of 1 overrides COPY_LIMIT - user must scan same item again to do this

      //buildCartArray() variables
      myCart = new Array({
        index: 0,
        quantity: 0,
        weight: 0,
        void: false
      });
      myCartIndex = 0; //used to index the myCart array

      //saveCartToArray() variables
      allMyCarts = new Array(myCart);
      allMyCartsIndex = 0;

      //newPrinterTest() variables
      currentCartId = 1;
      cancelStandardOut = 0;
      cancelQuantityOut = 0;
      cancelWeightedOut = 0;

      //variables used by admin panel
      adminPanelFlag = 0; //flag indicates if admin panel is active
      cashBoxFlag = 0; //flag indicates if cash box is open or closed



      //dev notes for continuation
      console.error("it's time to start building the actual payment processing system");

    }

    //confirm status with server
    if(theFlag == 1){
      //revenge of the sith
      order66();
    } else {

      //initialize program
      buttonEventListeners(); //load eventListeners
      initializeWallet(); // create wallet
      initializePrinter(); //load printer header to page

      //print output
      printData(); //print food database to display -- testing only
      printWallet(myPaymentCard); //print wallet to display
      printWeightToDisplay(0); //print scale

      //start program
      autoSetState();

    }

    //current build section
    //totalState(1);
    //buildTenderNumber();


  }//END OF AJAX
}//END OF AJAX
