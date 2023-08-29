import AuditTrail from "./AuditTrail";

export default abstract class Task {
    constructor(protected _auditTrail: AuditTrail) {
    }

    execute(): void {
        this._auditTrail.record();
        this.doExecute();
    }

    protected abstract doExecute(): void;
}