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
  //idPass = true ----- id was entered correctly and program should be asking for PIN information
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
          changeState(5);
          document.getElementById("ES-U").value = "Check Under Cart";
          document.getElementById("ES-L").value = "Begin Scanning";
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
