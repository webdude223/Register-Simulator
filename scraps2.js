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
