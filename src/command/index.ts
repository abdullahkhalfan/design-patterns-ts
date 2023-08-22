/**
 * Command
 *
 * Decouple a sender from a receiver. It can also be used for undo mechanisms
 * when storing the object state (snapshot) can be expensive like in the
 * memento pattern.
 */

import AddCustomerCommand from "./AddCustomerCommand";
import BlackWhiteCommand from "./BlackWhiteCommand";
import Button from "./Button";
import CompositeCommand from "./CompositeCommand";
import CustomerService from "./CustomerService";
import ResizeCommand from "./ResizeCommand";

const command = new AddCustomerCommand(new CustomerService());
const someButton = new Button("Add customer", command);

// Simulate the event.
someButton.click();

// Composite command

const compositeCommand = new CompositeCommand();

compositeCommand.add(new BlackWhiteCommand());
compositeCommand.add(new ResizeCommand());
compositeCommand.execute();

// For an undo mechanism, an "unexecute" method can be introduced to
// commands so that a single command can do something and it only
// knows undo it.