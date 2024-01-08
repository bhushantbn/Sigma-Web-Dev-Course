document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("existing-table");
  var addButton = document.getElementById("add-row-btn");

  addButton.addEventListener("click", function () {
    var tbody = table.querySelector("tbody");
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var removeButtonCell = document.createElement("td");
    var removeButton = document.createElement("button");
    var fakedata1='Data:' + Math.floor(Math.random() * 1000);
    var fakedata2='Data:' + Math.floor(Math.random() * 1000);
    cell1.textContent = fakedata1;
    cell2.textContent = fakedata2;
    removeButton.textContent = "Remove Row";

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    removeButtonCell.appendChild(removeButton);
    newRow.appendChild(removeButtonCell);

    tbody.appendChild(newRow);

    // Add click event listener to the "Remove Row" button
    removeButton.addEventListener("click", function () {
      // Get the closest row and remove it
      var rowToRemove = removeButton.closest("tr");
      rowToRemove.remove();
    });
  });
});
