import AuditTrail from "./AuditTrail";

export default abstract class Task {

    protected _auditTrail: AuditTrail;

    constructor(auditTrail: AuditTrail) {
        this._auditTrail = auditTrail;
    }

    execute(): void {
        this._auditTrail.record();
        this.doExecute();
    }

    protected abstract doExecute(): void;
}