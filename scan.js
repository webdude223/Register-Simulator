function scan(part, item){
  console.log("scan called");

  //Function SCAN() handles all elements regarding scanning an item
  //Paramter "part" will jump to the part of the function relevent at the time of the call
  //Paramter "item" will pass in the number of the item being scanned

  //scan() variables
  //keyinStateChange = 0; //change display state for manual entry
  //firstItem = 0; //used for sorting, first item has unique scanning scripts, resets after payment complete
  //subTotal = 0; //used for calculating subtotal -- documentation in scan()
  //lastItem = 0; //what was last item scanned
  //** this will need to be changed to -1, since the first array item is equal to 0
  //itemCount = 0; //used to count sequencial scanned items
  //needsId = 0; //changes to 1 when customer ID needs to be checked --- alcohole
  //badBtnPressNothingScannedYet = 0; //if someone presses a wrong button on scan screen when nothing is scanned yet

  isNewCart = 0; //if nothing has been scanned, it's a new transaciton. Changes to 1 once items are there



  message[0] = "Check Under Cart";
  message[1] = "Check Printer";
  message[2] = "Pickup needed soon";

  if(part === undefined){
    part = 0;
  }

  if(item === undefined){
    item = 0;
  }

  switch (part) {
    case 0: //default display -- new cart only
      if(isNewCart == 0){
        changeProgramState(2);
        printErrorState(message, "Ready/Scan Now");
      } else {
        console.log("ERROR: scan(0) called but not new transaction");
      }
      break;
    //*****************************************************
    case 1: //display lastItem

      if(isNewCart == 0){ //if first item
        console.log("ERROR: scan(1) called but nothing to show");
        break;
      }

      //show last item

      break;

    case 1: //called by [0-9] eventListener
      console.log("BP1");
      scan(4, item);
      break;
    //*****************************************************
    case 2: //called by ENTER eventListener

      //In scan mode, ENTER can do two things
      //If an item is being manually keyed in, it activates search function
      //If ENTER is pressed by itself, it adds the last added item again to the order
      //If ENTER is pressed with no user input AND no previous scanned item, print error

      console.log("BP1.5");
      scan(6, item);
      break;
    //*****************************************************
    case 3: //called by CLEAR eventListener
      if(keyinStateChange == 0){//if user has NOT keyed in number
        //do nothing on CLEAR
        //eventually activate error beep sound
      } else {
          if(lastItem == 0){ //if nothing has been scanned
              scan(0); //return to first screen
          } else {//if something has already been scanned...
              //show last scanned item
              document.getElementById("SKS-L").value = data[lastItem].UPC; // resets the value after a user input is cleared --- used to keep the lastItem history relavant
              //there is a bug on 747 -- the value entered is not equal to what lastItem should be
              //lastItem is the array index, while last searched value could be anything
              printScanningState(data[lastItem].Description, thePrice, itemCount, subTotal);
          }
      }
      break;
    //*****************************************************

    case 4: //keyin [0-9]
      console.log("BP2");

      if(firstItem == 0){ //if FIRST item is being manually entered, unique screen
        console.log("BP3");
        if(keyinStateChange == 0){
          printScanningKeyinState(message, item);
          keyinStateChange = 1; //used by sorting
        } else {
          console.log("BP3.5", item);
          xin = document.getElementById("SKS-L").value;
          xin += item;
          document.getElementById("SKS-L").value = xin;
        }
      } else {
        if(keyinStateChange == 0){ //if FIRST button press, change display state
          console.log("BP4");
          printScanningKeyinState(data[lastItem].Description, item);
          keyinStateChange = 1; //used by sorting
        } else { //every other button press continues string build....
          console.log("BP5");
          xin = document.getElementById("SKS-L").value;
          xin += item;
          document.getElementById("SKS-L").value = xin;
        }
      }
      break;

    case 5: //error
      changeProgramState(6);
      printDefaultErrorMessage();
      break;

    case 6: //pressed enter

      //check for keyin value
      if(keyinStateChange == 0){ //if no value has been entered

        if(firstItem == 0){ //if nothing has been scanned yet
          scan(5); //print error
          break;
        } else { //else then duplicate last scanned item

        }
      }

      searchNumber = document.getElementById("SKS-L").value;

      //check if firstItem

      //else duplicate lastItem

      break;

    default: //debugging message
      console.log("scan switch, unable to find scan state");

  }//end switch
}//end function
