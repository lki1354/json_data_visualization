
$.getJSON("data_init/MotionSensor.json", function (object) {
  var MS_table = createTableFromJson(object);
  document.body.appendChild(MS_table);
});
$.getJSON("data_init/BatteryMonitor.json", function (object) {
  var BM_table = createTableFromJson(object);
  document.body.appendChild(BM_table);
});


function createTableFromJson(data) {
   var table = document.createElement('table'),
      thead = table.createTHead(),
      tbody = document.createElement('tbody'),
      i,x;
//table.appendChild(thead)
  var rowhead = thead.insertRow(0);
    for (var thCell in data[0].tbHead) {
        rowhead.insertCell(thCell).outerHTML = "<th>" + data[0].tbHead[thCell] + "</th>";
    }

  table.appendChild(tbody);
  var dataRows = data[1].tbRows;
  for (var row in dataRows) {
    tbody.insertRow(row);
      tbody.rows[row].insertCell(0);
      tbody.rows[row].cells[0].appendChild(document.createTextNode(dataRows[row].name));
    for (var tdCell in dataRows[row].cells) {
      var cell_point = Number(tdCell)+1;
      console.log(cell_point);
      tbody.rows[row].insertCell(cell_point);
        var node = document.createTextNode(dataRows[row].cells[tdCell].value+dataRows[row].cells[tdCell].unit);
      var id_value = dataRows[row].name+"."+data[0].tbHead[cell_point];
        tbody.rows[row].cells[cell_point].id=id_value;
      tbody.rows[row].cells[cell_point].appendChild(node);
    }
  }

  table.createCaption();
  table.caption.appendChild(
      document.createTextNode(data[0].tbName)
  );
  return table;
}



//document.body.appendChild(createTable());

/*
function createTable() {
  var table = document.createElement('table'),
      thead = table.createTHead(),
      tbody = document.createElement('tbody'),
      i,x;
//table.appendChild(thead)
  var row = thead.insertRow(0);
  row.insertCell(0).outerHTML = "<th>head 0 , Col 0</th>";
  row.insertCell(1).outerHTML = "<th>head 0 , Col 1</th>";

  table.appendChild(tbody);

  for (i = 0; i <= 3; i++) {
    tbody.insertRow(i);
    for (x = 0; x <= 1; x++) {
      tbody.rows[i].insertCell(x);
      tbody.rows[i].cells[x].appendChild(
          document.createTextNode('Row ' + i + ', Col ' + x)
      );
    }
  }

  table.createCaption();
  table.caption.appendChild(
      document.createTextNode('A DOM-generated Table')
  );
  return table;
}

*/

