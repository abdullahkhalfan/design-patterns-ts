/**
 * Template Method
 *
 * An execution method defines a template or skeleton for an operation.
 * It uses inheritance where an abstract class defines the template,
 * and concrete classes implement the execution logic that would differ
 * to other implementations.
 */

import AuditTrail from "./AuditTrail"
import TransferMoneyTask from "./TransferMoneyTask"

const task = new TransferMoneyTask(new AuditTrail());

task.execute();