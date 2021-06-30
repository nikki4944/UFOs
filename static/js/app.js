// import the data from data.js
const tableData = data;
// reference the HTML table using d3
var tbody = d3.select("tbody");
// build data table
function buildTable(data) {
    // clear any existing data
    tbody.html("");
    // loop through array and append data to the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // loop through each filed in dataRow and add value as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}