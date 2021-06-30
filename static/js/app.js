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
};

// filter data based on date
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the data using the date
    if (date) {
        // Apply the filter to the table data to keep only the rows matching filter
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered date, if a date was entered
    buildTable(filteredData);
};

// Attach an event to list for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);