if(part === undefined){
  part = 0;
}

if(item === undefined){
  item = 0;
}

switch (part) {
  case 0: //default display
    changeProgramState(2);
    printErrorState("Check Under Cart", "Ready Scan Item");
    break;
  //*****************************************************
  case 1: //called by [0-9] eventListener

    if(firstItem == 0){ //nothing has been scanned yet
        scan(5 , item);
        break;
    }

    if(keyinStateChange == 0){ //user has pressed button first time
      scan(4, item);
    } else { //user is adding additional button clicks
      scan(6, item);
    }
    break;
  //*****************************************************
  case 2: //called by ENTER eventListener

    //In scan mode, ENTER can do two things
    //If an item is being manually keyed in, it activates search function
    //If ENTER is pressed by itself, it adds the last added item again to the order
    //If ENTER is pressed with no user input AND no previous scanned item, print error

    if(keyinStateChange == 0){ //if user has NOT keyed in number
        if(firstItem == 0){ //if nothing has been scanned yet...
          changeProgramState(6); //error state
          printDefaultErrorMessage();
        } else { //duplicate last item
          scan(7);
        }
    } else {
      scan(7); //submit number for search
    }
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
  case 4: //print keyin screen
    printScanningKeyinState(data[lastItem].Description, item);
    keyinStateChange = 1; //used by sorting
    break;
  //*****************************************************
  case 5: //print keyin display -- first item in transaction
    printScanningKeyinState("Check Under Cart", item);
    keyinStateChange = 1; //used by sorting
    firstItem = 1; //this prevents CASE 5 from being called again during transaciton
    break;
  //*****************************************************
  case 6: //print user input for keyin screen
    xin = document.getElementById("SKS-L").value;
    xin += item;
    document.getElementById("SKS-L").value = xin;
    break;
  //*****************************************************
  case 7: //submit number - search for results
    item = document.getElementById("SKS-L").value;
    index = searchFood(item);

    //check for ITEM NOT FOUND
    if(index == 0){ //return value defined in searchFood -- 0 = not found
      changeProgramState(6); //error
      printErrorState("Item Not Found", "*** PRESS ** CLEAR ***");
      keyinStateChange = 0; //reset
      break;
    }

    //check for NUMBER ENTERED WRONG
    if(index == -1){ //return value defined in searchFood -- -1 = number not proper format
      changeProgramState(6); //error
      printErrorState("Invalid Item Number", "*** PRESS ** CLEAR ***");
      keyinStateChange = 0; //reset
      break;
    }

    //set lastItem
    if(lastItem != index){ //if the last item is NOT the same as the current item....
      lastItem = index;
      itemCount = 1; //setting itemCount equal to 1 is reset
    } else {
      //if lastItem == index
      //**this means that index is repeating, and a count is needed
      //**therefor increment counter
      itemCount++;
    }

    //check for weight info here...

    //check for id here...

    //needsId is the variable

    //Check if on sale, then add Full/Sale price to subtotal
    if(data[index].Sale_Active == 1){ //1 = true -- true = on sale
      addToSubTotal(data[index].Sale_Price);
      thePrice = data[index].Sale_Price;
    } else {
      addToSubTotal(data[index].Full_Price);
      thePrice = data[index].Full_Price;
    }


    //data[index].Description
    //thePrice -- the price of the item
    //itemCount -- count of sequencial same items
    //subTotal -- running subtotal of price

    printScanningState(data[index].Description, thePrice, itemCount, subTotal);
    keyinStateChange = 0; //reset
    if(firstItem == 0){ //if not yet set, set firstItem
      firstItem = 1;
    }

    break;
  //*****************************************************
  case 8: //ENTER Duplicates last scanned item


    break;
  default:
    console.log("default of scan() switch called");
    break;
}//end switch
