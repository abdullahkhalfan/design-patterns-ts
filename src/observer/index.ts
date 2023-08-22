/**
 * Observer
 *
 * Use this pattern when you have an object that has a changed state, and you
 * need to notify other objects about the change. It has a subject class that
 * attaches and detaches observers, and a notify method that loops through each
 * observer and tells them about the state change. Each actual observable subject
 * extends the abstract subject class, with the observer functionality inherited
 * already. Observers can use both the push and pull style of communication to get
 * the data that was changed.
 */

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