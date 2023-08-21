import Chart from "./Chart";
import DataSource from "./DataSource";
import Spreadsheet from "./Spreadsheet";

// Subject
const dataSource = new DataSource("abc");

// Observers (pull style of communication)
const sheet1 = new Spreadsheet(dataSource);
const sheet2 = new Spreadsheet(dataSource);
const chart = new Chart(dataSource);

dataSource.addObserver(sheet1);
dataSource.addObserver(sheet2);
dataSource.addObserver(chart);

dataSource.value = "zyx";

dataSource.removeObserver(chart);

dataSource.value = "123";