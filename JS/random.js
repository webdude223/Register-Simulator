DISPLAY STATES

1 - total
2 - scanning
3 - scanning keyin
4 - scanning qty
5 - error state
6 - message state
7 - login state
8 - option state


PROGRAM STATES

1 - login
2 - scanning
3 - total
4 - payment
5 - message
6 - error
7 - new cart

display state manages which display set to use

program state manages how buttons interact with the program, which are active, etc

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

//set variables
{
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
  tenderNumber = undefined; //tendered payment value entered  here


  //user data
  userProfiles = [
    {name: "Ray", id: "1", pin: "2222"},
    {name: "Princess", id: "27", pin: "2222"},
    {name: "Keith", id: "81", pin: "2222"},
    {name: "Ray", id: "65", pin: "2222"},
    {name: "Benjamin", id: "77", pin: "2222"},
    {name: "Sarah", id: "11", pin: "2222"},
    {name: "Kelsey J", id: "58", pin: "2222"},
    {name: "Kelsey O", id: "36", pin: "2222"},
    {name: "Tonya", id: "45", pin: "2222"}
  ];

  // user = {
  //   name:"Benjamin",
  //   id:"77",
  //   pin:"2222"
  // };

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
  checkID = 0; //change to 1 if an item requires ID verification
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

}








//assuming NOT a new cart...

// switch (part) {
//   case 0: //default display
//     changeProgramState(2);
//     printErrorState("Check Under Cart", "Ready Scan Item");
//     break;
//   //*****************************************************
//   case 1: //called by [0-9] eventListener
//
//     if(firstItem == 0){ //nothing has been scanned yet
//         scan(5 , item);
//         break;
//     }
//
//     if(keyinStateChange == 0){ //user has pressed button first time
//       scan(4, item);
//     } else { //user is adding additional button clicks
//       scan(6, item);
//     }
//     break;
//   //*****************************************************
//   case 2: //called by ENTER eventListener
//
//     //In scan mode, ENTER can do two things
//     //If an item is being manually keyed in, it activates search function
//     //If ENTER is pressed by itself, it adds the last added item again to the order
//     //If ENTER is pressed with no user input AND no previous scanned item, print error
//
//     if(keyinStateChange == 0){ //if user has NOT keyed in number
//         if(firstItem == 0){ //if nothing has been scanned yet...
//           changeProgramState(6); //error state
//           printDefaultErrorMessage();
//         } else { //duplicate last item
//           scan(7);
//         }
//     } else {
//       scan(7); //submit number for search
//     }
//     break;
//   //*****************************************************
//   case 3: //called by CLEAR eventListener
//     if(keyinStateChange == 0){//if user has NOT keyed in number
//       //do nothing on CLEAR
//       //eventually activate error beep sound
//     } else {
//         if(lastItem == 0){ //if nothing has been scanned
//             scan(0); //return to first screen
//         } else {//if something has already been scanned...
//             //show last scanned item
//             document.getElementById("SKS-L").value = data[lastItem].UPC; // resets the value after a user input is cleared --- used to keep the lastItem history relavant
//             //there is a bug on 747 -- the value entered is not equal to what lastItem should be
//             //lastItem is the array index, while last searched value could be anything
//             printScanningState(data[lastItem].Description, thePrice, itemCount, subTotal);
//         }
//     }
//     break;
//   //*****************************************************
//   case 4: //print keyin screen
//     printScanningKeyinState(data[lastItem].Description, item);
//     keyinStateChange = 1; //used by sorting
//     break;
//   //*****************************************************
//   case 5: //print keyin display -- first item in transaction
//     printScanningKeyinState("Check Under Cart", item);
//     keyinStateChange = 1; //used by sorting
//     firstItem = 1; //this prevents CASE 5 from being called again during transaciton
//     break;
//   //*****************************************************
//   case 6: //print user input for keyin screen
//     xin = document.getElementById("SKS-L").value;
//     xin += item;
//     document.getElementById("SKS-L").value = xin;
//     break;
//   //*****************************************************
//   case 7: //submit number - search for results
//     item = document.getElementById("SKS-L").value;
//     index = searchFood(item);
//
//     //check for ITEM NOT FOUND
//     if(index == 0){ //return value defined in searchFood -- 0 = not found
//       changeProgramState(6); //error
//       printErrorState("Item Not Found", "*** PRESS ** CLEAR ***");
//       keyinStateChange = 0; //reset
//       break;
//     }
//
//     //check for NUMBER ENTERED WRONG
//     if(index == -1){ //return value defined in searchFood -- -1 = number not proper format
//       changeProgramState(6); //error
//       printErrorState("Invalid Item Number", "*** PRESS ** CLEAR ***");
//       keyinStateChange = 0; //reset
//       break;
//     }
//
//     //set lastItem
//     if(lastItem != index){ //if the last item is NOT the same as the current item....
//       lastItem = index;
//       itemCount = 1; //setting itemCount equal to 1 is reset
//     } else {
//       //if lastItem == index
//       //**this means that index is repeating, and a count is needed
//       //**therefor increment counter
//       itemCount++;
//     }
//
//     //check for weight info here...
//
//     //check for id here...
//
//     //needsId is the variable
//
//     //Check if on sale, then add Full/Sale price to subtotal
//     if(data[index].Sale_Active == 1){ //1 = true -- true = on sale
//       addToSubTotal(data[index].Sale_Price);
//       thePrice = data[index].Sale_Price;
//     } else {
//       addToSubTotal(data[index].Full_Price);
//       thePrice = data[index].Full_Price;
//     }
//
//
//     //data[index].Description
//     //thePrice -- the price of the item
//     //itemCount -- count of sequencial same items
//     //subTotal -- running subtotal of price
//
//     printScanningState(data[index].Description, thePrice, itemCount, subTotal);
//     keyinStateChange = 0; //reset
//     if(firstItem == 0){ //if not yet set, set firstItem
//       firstItem = 1;
//     }
//
//     break;
//   //*****************************************************
//   case 8: //ENTER Duplicates last scanned item
//
//
//     break;
//   default:
//     console.log("default of scan() switch called");
//     break;
// }//end switch
