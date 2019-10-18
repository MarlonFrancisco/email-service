import TranferMailer from "./TransferMailer";

export default class Mailer {

    private transfer = new TranferMailer(
        this.email,
        this.password,
        this.service,
        this.subject,
        this.recipient,
    );

    constructor(
        private email: string,
        private password: string,
        private service: string,
        private subject: string,
        private recipient: string,
    ) {}

    public sender() {
        return;
    }
}
