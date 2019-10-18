import { createTransport } from "nodemailer";
import { SentMessageInfo } from "nodemailer/lib/sendmail-transport";

export default class TranferMailer {

    private transporter = createTransport({
        service: this.service,
        auth: {
            user: this.email,
            pass: this.password,
        },
        tls: { rejectUnauthorized: false },
    });

    constructor(
        private email: string,
        private password: string,
        private service: string,
        private subject: string,
        private recipient: string,
    ) {}

    public send(template: string): Promise<SentMessageInfo> {
        return this.transporter.sendMail({
            from: this.email,
            subject: this.subject,
            to: this.recipient,
            html: template,
        });
    }
}
