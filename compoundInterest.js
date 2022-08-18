// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements['deposit'].valueAsNumber;
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;
  table =
    '<table>' +
    '<tr><th>Year</th><th>Starting Value</th>' +
    '<th>Interest Earned</th><th>Ending Value (Check console log)</th></tr>';

    console.log(amount, rate, years, table)

// ---> Write your code here to generate the table and show it in the page

//Create the headers

document.querySelector(".result")

// document.write(table)
document.getElementById('result').innerHTML = table;

//calculate the values


for( i = 0; i < years; i++){

interest = (amount * rate) / 100;
earned = amount + interest;
amount = earned;
console.log(amount, rate, years, interest, earned , table);

//shove a new line into the table
// cant figure it out



}


} // end generateTable
