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
  loggedIn = 0; //0 = logged out, 1 = logged in

  //changeProgramState variables
  previousProgramState = 0; //previous program state
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

  //user will be set by savedUsers()
  user = {
    name:"Benjamin",
    id:"77",
    pin:"2222"
  };

  store = {
    number:"22",
    address:"2617 Lakeside Dr, Lynchburg, VA 24501",
    website:"www.ALDI.us"
  };

  //login() variables
  idPass = 0; //determine if entered ID or PIN



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

}
