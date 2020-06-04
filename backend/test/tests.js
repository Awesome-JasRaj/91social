var assert = require("assert");
const fs = require("fs");
var input = JSON.parse(fs.readFileSync("input.json"));
var prinicpal = parseInt(input["amount"]);
var emis = parseInt(input["tenure"].split(" ")[0]);
if (
  input["tenure"].split(" ")[1] == "years" ||
  input["tenure"].split(" ")[1] == "year"
) {
  emis *= 12;
}
var body = JSON.parse(fs.readFileSync("output.json"));
describe("Loan Creation Date", () => {
  months = {
    January: 1,
    Feburary: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };
  var date = body["Loan creation date"].split(" ");
  var day = parseInt(date[0].slice(0, -2));
  var month = months[date[1]];
  var year = parseInt(date[2]);
  it("Valid month", () => {
    assert(month > 0 && month < 13);
  });

  it("Valid day", () => {
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      assert(day < 31);
    } else {
      assert.equal(1, 1);
    }
  });
  it("Validation for leap year", () => {
    if (month == 2) {
      if (year % 4 == 0 && year % 100) {
        assert(day <= 29);
      } else {
        assert(day <= 28);
      }
    } else assert.equal(1, 1);
  });
});

it("Total Payable Amount", () => {
  assert.equal(prinicpal + (0.12 * (emis / 12) * prinicpal), body["Total payable amount"]);
});

