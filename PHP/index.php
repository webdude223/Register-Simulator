<?php


?>

<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Aldi Register Simulator</title>
    <script src="../JS/script.js" async></script>
    <link rel="stylesheet" href="../CSS/style.css">

    <!-- Font Link -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">

</head>
<body>
  <div id="main-window">

    <div id="printer">
      <p class="top-print">ALDI<br/>Store #22<br/>7612 Timberlake Rd, Lynchburg VA<br/>www.ALDI.us<br/><br/>
        Your cashier today was Benjamin</p>

      <table class="shopping-items">
        <tr class="standard">
          <td class="row-1">Diapers - Kids 6 mths and older</td>
          <td width="18%" class="row-2"></td>
          <td width="18%" class="row-3">9.99</td>
          <td width="9%" class="row-4">NC</td>
        </tr>
        <tr class="standard">
          <td width="50%" class="row-1">Mayo</td>
          <td width="18%" class="row-2"></td>
          <td width="18%" class="row-3">3.29</td>
          <td width="9%" class="row-4">FB</td>
        </tr>
        <tr class="standard">
          <td class="row-1">Lettuce</td>
          <td width="18%" class="row-2"></td>
          <td width="18%" class="row-3">1.29</td>
          <td width="9%" class="row-4">FB</td>
        </tr>
        <section class="quantity">
          <tr class="standard">
            <td class="row-1">Avacados</td>
            <td width="18%" class="row-2"></td>
            <td width="18%" class="row-3">3.96</td>
            <td width="9%" class="row-4">FB</td>
          </tr>
          <tr class="standard quantity">
            <td class="row-1">4 @</td>
            <td width="18%" class="row-2">0.99</td>
            <td width="18%" class="row-3"></td>
            <td width="9%" class="row-4"></td>
          </tr>
        </section>
        <tr class="standard">
          <td class="row-1">Cookies</td>
          <td width="18%" class="row-2"></td>
          <td width="18%" class="row-3">2.96</td>
          <td width="9%" class="row-4">FB</td>
        </tr>
        <section class="weight">
          <tr class="standard">
            <td class="row-1">Bannanas</td>
            <td width="18%" class="row-2"></td>
            <td width="18%" class="row-3">3.96</td>
            <td width="9%" class="row-4">FB</td>
          </tr>
          <tr class="standard weight">
            <td class="row-1">2.89  lb  @</td>
            <td width="18%" class="row-2">0.99/lb</td>
            <td width="18%" class="row-3"></td>
            <td width="9%" class="row-4"></td>
          </tr>
        </section>
      <tr class="standard">
        <td class="row-1">Ketchup</td>
        <td width="18%" class="row-2"></td>
        <td width="18%" class="row-3">2.49</td>
        <td width="9%" class="row-4">FB</td>
      </tr>
      <tr class="standard">
        <td class="row-1">Ketchup</td>
        <td width="18%" class="row-2">VOID</td>
        <td width="18%" class="row-3">-2.49</td>
        <td width="9%" class="row-4">FB</td>
      </tr>
      <tr class="standard">
        <td class="row-1">Toothpaste</td>
        <td width="18%" class="row-2"></td>
        <td width="18%" class="row-3">123.99</td>
        <td width="9%" class="row-4">FB</td>
      </tr>
      <tr class="standard">
        <td class="row-1">Microwave</td>
        <td width="18%" class="row-2"></td>
        <td width="18%" class="row-3">114.49</td>
        <td width="9%" class="row-4">NC</td>
      </tr>
      </table>


    </div><!-- End Printer Box -->

    <div id="scale">
      <h2 class="text-center">Scale<h2>
      <input id="scale-display" class="scale" type="text" value="2.47 lbs">
    </div> <!-- END SCALE -->

    <div id="display">
      <!-- there are two parts of the display, the display-out and display-in.
      display-out only shows content, feedback, and error messages
      display-in shows error messages, feedback, as well as user keyed input

      The display will have several states, at least two that I can think of at the moment
      -->

      <section id="total-state" class="hide">
        <table>
          <tr>
            <td><input id="TS-UL" class="table-form p-left" type="text" value="TOTAL"></td>
            <td><input id="TS-UR" class="table-form p-right text-right" type="text" value="147.98"></td>
          </tr>
          <tr>
            <td><input id="TS-LL" class="table-form p-left" type="text" value="TENDERED:"></td>
            <td><input id="TS-LR" class="table-form p-right text-right" type="text" value="-----.--"></td>
          </tr>
        </table>
      </section>
      <section id="scanning-state" class="hide">
        <table>
          <tr>
            <td><input id="SS-U" class="table-form p-left" type="text" value="Corn on Cobb"></td>
          </tr>
        </table>
        <table>
          <tr>
            <td><input id="SS-LL" class="table-form p-left" type="text" value="1.29"></td>
            <td><input id="SS-LC" class="table-form text-center" type="text" value="1"></td>
            <td><input id="SS-LR" class="table-form text-right p-right" type="text" value="43.07"></td>
          </tr>
        </table>
      </section>
      <section id="scanning-keyin-state" class="hide">
        <table>
          <tr>
            <td><input id="SKS-U" class="table-form p-left" type="text" value="Corn on the Cobb asdfasdf"></td>
          </tr>
          <tr>
            <td><input id="SKS-L" class="table-form text-right p-right" type="text" value="43221"></td>
          </tr>
        </table>
      </section>
      <section id="scanning-qty-state" class="hide">
        <table>
          <tr>
            <td><input id="SQS-U" class="table-form text-center" type="text" value="4 Qty"></td>
          </tr>
          <tr>
            <td><input id="SQS-L" class="table-form text-center" type="text" value="99"></td>
          </tr>
        </table>
      </section>
      <section id="error-state" class="hide">
        <table>
          <tr>
            <td><input id="ES-U" class="table-form text-center" type="text" value="INVALID ENTRY"></td>
          </tr>
          <tr>
            <td><input id="ES-L" class="table-form text-center" type="text" value="<<< Press Clear >>>"></td>
          </tr>
        </table>
      </section>
      <section id="message-state">
        <table>
          <tr>
            <td><input id="MS-U" class="table-form text-center" type="text" value="Check Under Cart"></td>
          </tr>
          <tr>
            <td><input id="MS-L" class="table-form text-center" type="text" value="Ready Scan Item"></td>
          </tr>
        </table>
      </section>
      <section id="login-state" class="hide">
        <table>
          <tr>
            <td><input id="LS-U" class="table-form text-left p-left" type="text" value="Cashier: HTML"></td>
          </tr>
        </table>
        <table>
          <tr>
            <td><input id="LS-LL" class="table-form p-left text-left" type="text" value="Login:"></td>
            <td><input id="LS-LR" class="table-form p-right text-right" align="right" type="text" ></td>
          </tr>
        </table>
      </section>
      <section id="option-state" class="hide">
        <table>
          <tr>
            <td><input id="OS-U" class="table-form text-center" type="text" value="Total = % off"></td>
          </tr>
          <tr>
           <td><input id="OS-L" class="table-form text-center" type="text" value="Enter: $ off"></td>
          </tr>
        </table>
      </section>

    </div> <!-- END DISPLAY -->

    <div id="keyboard">

      <div id="btn-code" class="key active key-wide c-gray" style="top: 25px; left: 15px;"><p>Code</p></div>
      <div id="btn-suspend" class="key active key-wide c-gray" style="top: 83px; left: 15px;"><p>Suspend/Retreive</p></div>
      <div id="btn-verify" class="key active key-small c-gray" style="top: 141px; left: 15px; padding-top: 0px;"><p>Verify Price</p></div>
      <div id="btn-tax" class="key active key-small c-gray" style="top: 141px; left: 73px; padding-top: 0px;"><p>Tax/<br/> No Tax</p></div>
      <div id="btn-no-sale" class="key active key-small c-gray" style="top: 199px; left: 73px;"><p>No Sale</p></div>
      <div class="key key-blank c-blank" style="top: 199px; left: 15px;"></div>
      <div class="key key-blank c-blank" style="top: 257px; left: 15px;"></div>
      <div class="key key-blank c-blank" style="top: 315px; left: 15px;"></div>
      <div id="btn-eggs" class="key active key-tall c-blue" style="top: 257px; left: 73px; padding-top: 35px;"><p>Eggs</p></div>
      <div id="btn-plastic" class="key active key-tall c-blue" style="top: 25px; left: 131px; padding-top: 30px;"><p>Plastic Bags</p></div>
      <div class="key key-blank c-blank" style="top: 141px; left: 131px;"></div>
      <div class="key key-blank c-blank" style="top: 199px; left: 131px;"></div>
      <div class="key key-blank c-blank" style="top: 257px; left: 131px;"></div>
      <div class="key key-blank c-blank" style="top: 315px; left: 131px;"></div>
      <div id="btn-employee" class="key active key-small c-gray" style="top: 25px; left: 189px; padding-top: 0px"><p>Empl<br/> Sale</p></div>
      <div id="btn-clear" class="key active key-wide c-gray" style="top: 83px; left: 189px;"><p>Clear</p></div>
      <div id="btn-mark-down" class="key active key-small c-gray" style="top: 25px; left: 247px; padding-top: 0px"><p>Mark<br/> Down</p></div>
      <div id="btn-price-override" class="key active key-small c-gray" style="top: 25px; left: 305px; padding-top: 0px"><p>Price<br/> Override</p></div>
      <div id="btn-void" class="key active key-small c-gray" style="top: 83px; left: 305px;"><p>Void</p></div>
      <div id="btn-7" class="key active key-small c-gray" style="top: 141px; left: 189px; font-size: 14pt; padding-top: 0;"><p>7</p></div>
      <div id="btn-8" class="key active key-small c-gray" style="top: 141px; left: 247px; font-size: 14pt; padding-top: 0;"><p>8</p></div>
      <div id="btn-9" class="key active key-small c-gray" style="top: 141px; left: 305px; font-size: 14pt; padding-top: 0;"><p>9</p></div>
      <div id="btn-4" class="key active key-small c-gray" style="top: 199px; left: 189px; font-size: 14pt; padding-top: 0;"><p>4</p></div>
      <div id="btn-5" class="key active key-small c-gray" style="top: 199px; left: 247px; font-size: 14pt; padding-top: 0;"><p>5</p></div>
      <div id="btn-6" class="key active key-small c-gray" style="top: 199px; left: 305px; font-size: 14pt; padding-top: 0;"><p>6</p></div>
      <div id="btn-1" class="key active key-small c-gray" style="top: 257px; left: 189px; font-size: 14pt; padding-top: 0;"><p>1</p></div>
      <div id="btn-2" class="key active key-small c-gray" style="top: 257px; left: 247px; font-size: 14pt; padding-top: 0;"><p>2</p></div>
      <div id="btn-3" class="key active key-small c-gray" style="top: 257px; left: 305px; font-size: 14pt; padding-top: 0;"><p>3</p></div>
      <div id="btn-0" class="key active key-wide c-gray" style="top: 315px; left: 189px; font-size: 14pt; padding-top: 0;"><p>0</p></div>
      <div id="btn-subtotal" class="key active key-small c-orange" style="top: 315px; left: 305px; padding-top: 0;"><p>EBT<br/>Subtotal</p></div>
      <div id="btn-paper" class="key active key-tall c-blue" style="top: 25px; left: 363px; padding-top: 30px;"><p>Paper<br/> Bags</p></div>
      <div id="btn-qty" class="key active key-tall c-blue" style="top: 141px; left: 363px; padding-top: 35px;"><p>Qty</p></div>
      <div id="btn-total" class="key active key-big c-orange" style="top: 257px; left: 363px; padding-top: 35px;"><p>Total</p></div>
      <div id="btn-enter" class="key active key-big c-orange" style="top: 257px; left: 479px; padding-top: 35px;"><p>Enter</p></div>
      <div class="key key-blank c-blank" style="top: 25px; left: 421px;"></div>
      <div class="key key-blank c-blank" style="top: 25px; left: 479px;"></div>
      <div id="btn-enable-admin" class="key key-blank c-blank" style="top: 25px; left: 537px; padding-top: 14px;">Enable<br/>Admin</div>
      <div class="key key-blank c-blank" style="top: 83px; left: 537px;"></div>
      <div class="key key-blank c-blank" style="top: 83px; left: 421px;"></div>
      <div class="key key-blank c-blank" style="top: 83px; left: 479px;"></div>
      <div id="btn-card" class="key active key-tall c-orange" style="top: 141px; left: 421px; padding-top: 35px;"><p>Card</p></div>
      <div id="btn-gift-card" class="key active key-tall c-orange" style="top: 141px; left: 479px; padding-top: 30px;"><p>Gift<br/>Card</p></div>
      <div id="btn-cash" class="key active key-tall c-orange" style="top: 141px; left: 537px; padding-top: 35px;"><p>Cash</p></div>


      <!-- Simulator buttons only -- these are not found on real register, but are used
      by the simulator for specific functions  -->

      <!-- left column -->
      <div id="sim-1" class="key hide key-blank c-sim-red" style="top: 199px; left: 15px; padding-top: 17px;">1</div>
      <!-- <div id="sim-2" class="key hide key-blank c-sim-red" style="top: 257px; left: 15px; padding-top: 18px;">Open</div> -->
      <!-- <div id="sim-3" class="key hide key-blank c-sim-red" style="top: 315px; left: 15px; padding-top: 18px;">Close</div> -->
      <div id="sim-2" class="key hide key-tall c-sim-red" style="top: 257px; left: 15px; padding-top: 32px;">Cash<br/>Drawer<br/>Closed</div>
      <div id="sim-3" class="key hide key-tall c-sim-green" style="top: 257px; left: 15px; padding-top: 32px;">Cash<br/>Drawer<br/>Open</div>

      <!-- middle column -->
      <div id="sim-4" class="key hide key-blank c-sim-red" style="top: 141px; left: 131px; padding-top: 17px;">1</div>
      <div id="sim-5" class="key hide key-blank c-sim-red" style="top: 199px; left: 131px; padding-top: 17px;">2</div>
      <div id="sim-6" class="key hide key-blank c-sim-red" style="top: 257px; left: 131px; padding-top: 17px;">3</div>
      <div id="sim-7" class="key hide key-blank c-sim-red" style="top: 315px; left: 131px; padding-top: 17px;">4</div>

      <!-- top right group -->
      <div id="sim-8" class="key hide key-blank c-sim-red" style="top: 25px; left: 421px; padding-top: 17px;">Login</div>
      <div id="sim-9" class="key hide key-blank c-sim-red" style="top: 25px; left: 479px; padding-top: 14px;">Show<br/>Help</div>
      <div id="sim-10" class="key hide key-blank c-sim-red" style="top: 25px; left: 537px; padding-top: 14px;">Exit<br/>Admin</div>
      <div id="sim-11" class="key hide key-blank c-sim-red" style="top: 83px; left: 421px; padding-top: 17px;">Logout</div>
      <div id="sim-12" class="key hide key-blank c-sim-red" style="top: 83px; left: 479px; padding-top: 14px;">Show<br/>Codes</div>
      <div id="sim-13" class="key hide key-blank c-sim-red" style="top: 83px; left: 537px; padding-top: 14px;">Reset<br/>Cart</div>


    </div> <!-- END KEYBOARD -->

    <div id="terminal">
      <h3>Amount Due: $153.89</h3>
      <p>Please swipe card</p>
    </div> <!-- END TERMINAL -->

    <div id="wallet">
      <h3>Wallet</h3>
      <table class="wallet-list-1">
        <tbody id="mywallet"></tbody>
        <tr>
          <td>Debit <span style="color:green; font-size:smaller">Active</span></td>
          <td>Bal: 129.65</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>Credit <span style="color:blue; font-size:smaller">Inactive</span></td>
          <td>Bal: $129.65</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>Credit <span style="color:red; font-size:smaller">Stolen</span></td>
          <td>Bal: $129.65</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>EBT <span style="color:red; font-size:smaller">Fraud</span></td>
          <td>Bal: $129.65</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>EBT <span style="color:blue; font-size:smaller">Expired</span></td>
          <td>Bal: $129.65</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>Stolen Card</td>
          <td>Bal: $129.65</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>Expired Card</td>
          <td>Bal: $129.65</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>Cash</td>
          <td>Avail: $45.00</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>Cash</td>
          <td>Avail: $45.00</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>

        <tr>
          <td>Cash</td>
          <td>Avail: $45.00</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
        <tr>
          <td>Cash</td>
          <td>Avail: $45.00</td>
          <td><button class="use-btn" type="button">Pay</button></td>
        </tr>
      </table>
    </div> <!-- END WALLET -->

  </div><!-- END MAIN -->

  <div id="test-area">

    <section id="total-state">
      <table>
        <tr>
          <td><input class="table-form p-left" type="text" value="TOTAL"></td>
          <td><input class="table-form p-right text-right" type="text" value="147.98"></td>
        </tr>
        <tr>
          <td><input class="table-form p-left" type="text" value="TENDERED:"></td>
          <td><input class="table-form p-right text-right" type="text" value="-----.--"></td>
        </tr>
      </table>
    </section>
    <br/>
    <section id="scanning-state">
      <table>
        <tr>
          <td><input class="table-form p-left" type="text" value="Corn on Cobb asdf asdf asdfasdf"></td>
        </tr>
      </table>
      <table>
        <tr>
          <td><input class="table-form p-left" type="text" value="1.29"></td>
          <td><input class="table-form text-center" type="text" value="1"></td>
          <td><input class="table-form text-right p-right" type="text" value="43.07"></td>
        </tr>
      </table>
    </section>
    <br/>
    <section id="scanning-keyin-state">
      <table>
        <tr>
          <td><input class="table-form p-left" type="text" value="Corn on the Cobb asdfasdf"></td>
        </tr>
        <tr>
          <td><input class="table-form text-right p-right" type="text" value="43221"></td>
        </tr>
      </table>
    </section>
    <br/>
    <section id="scanning-qty-state">
      <table>
        <tr>
          <td><input class="table-form text-center" type="text" value="4 Qty"></td>
        </tr>
        <tr>
          <td><input class="table-form text-center" type="text" value="99"></td>
        </tr>
      </table>
    </section>
    <br/>
    <section id="error-state">
      <table>
        <tr>
          <td><input class="table-form text-center" type="text" value="INVALID ENTRY"></td>
        </tr>
        <tr>
          <td><input class="table-form text-center" type="text" value="<<< Press Clear >>>"></td>
        </tr>
      </table>
    </section>
    <br/>
    <section id="message-state">
      <table>
        <tr>
          <td><input class="table-form text-center" type="text" value="Check Under Cart"></td>
        </tr>
        <tr>
          <td><input class="table-form text-center" type="text" value="Ready Scan Item"></td>
        </tr>
      </table>
    </section>
    <br/>
    <section id="login-state">
      <table>
        <tr>
          <td><input class="table-form text-left p-left" type="text" value="Cashier: Benjamin"></td>
        </tr>
      </table>
      <table>
        <tr>
          <td><input class="table-form p-left text-left" type="text" value="Login:"></td>
          <td><input class="table-form p-right text-right" type="text" value="---"></td>
        </tr>
      </table>
    </section>
    <br/>
    <section id="option-state">
      <table>
        <tr>
          <td><input class="table-form text-center" type="text" value="Total = % off"></td>
        </tr>
        <tr>
         <td><input class="table-form text-center" type="text" value="Enter: $ off"></td>
        </tr>
      </table>
    </section>

    <br/>
    <br/>


    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg .tg-s268{text-align:left}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    </style>
    <table class="tg">
      <tbody id="mydata">
        <!-- data outputed from script -->
      </tbody>
    </table>


  </div>


</body>
</html>
