/* Read input from the file specified by the user */
const fs = require("fs");
let data = fs.readFileSync("input.json");
let body = JSON.parse(data);

var output = {};

/* Loan Creation Date */
var today = new Date();
var day = today.getDay();
var months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";
var month = months[today.getMonth()];
var year = today.getFullYear();
if (day == "1") {
  day += "st";
} else if (day == "2") {
  day += "nd";
} else if (day == "3") {
  day += "rd";
} else {
  day += "th";
}
var loan_created = day + " " + month + " " + year;
output["Loan creation date"] = loan_created;
// console.log(loan_created);

/* Principal Amount */
var principal_amount = parseInt(body["amount"], 10);
output["Principal Amount"] = principal_amount;

/* No. of EMI's */
var emis = parseInt(body["tenure"].split(" ")[0], 10);
if (
  body["tenure"].split(" ")[1] == "years" ||
  body["tenure"].split(" ")[1] == "year"
) {
  emis *= 12;
}
output["No Of EMI’s"] = emis;

/* Total Payable Amount */
var total_payable_amount =
  output["Principal Amount"] + 0.12 * (emis / 12) * principal_amount;
output["Total payable amount"] = total_payable_amount;

/* EMI Details */
var emi_details = new Array();
var m = today.getMonth();
for (var i = 0; i < emis; i++) {
  if (m == 11) {
    m = 0;
    year += 1;
  } else m += 1;

  if (m == 1) {
    if (year % 4 == 0 && year % 100) {
      if (day > 29) {
        m += 1;
        day -= 29;
      }
    } else {
      if (day > 28) {
        m += 1;
        day -= 28;
      }
    }
  } else if ((m == 3 || m == 5 || m == 8 || m == 10) && day == 31) {
    m += 1;
    day = 1;
  }
  var emi = {};
  emi["EMI No"] = parseInt(i + 1);
  emi["Principal EMI"] = parseFloat((principal_amount / emis).toFixed(2));
  emi["Interest EMI"] = parseFloat(
    (total_payable_amount - principal_amount) / emis.toFixed(2)
  );
  emi["Total EMI"] = parseFloat((total_payable_amount / emis).toFixed(2));
  emi["EMI Date"] = day + " " + months[m] + " " + year;
  if (i == 0)
    emi["Principal remaining"] = parseFloat(
      (total_payable_amount - emi["Total EMI"]).toFixed(2)
    );
  else if (i == emis - 1) emi["Principal remaining"] = 0;
  else
    emi["Principal remaining"] = parseFloat(
      (emi_details[i - 1]["Principal remaining"] - emi["Total EMI"]).toFixed(2)
    );
  emi_details.push(emi);
}
output["EMI Details"] = emi_details;

// console.log(output);

/* Write to file output.json */
fs.writeFileSync("output.json", JSON.stringify(output), "utf-8");
console.log("Output successfully written to output.json file!");
