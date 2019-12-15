import { createTransport } from "nodemailer";
import { SentMessageInfo } from "nodemailer/lib/sendmail-transport";

export default class TranferMailer {

    private transporter = createTransport({
        service: this.service,
        auth: {
            user: this.email,
            pass: this.password,
        },
    });

    constructor(
        private email: string,
        private password: string,
        private service: string,
    ) {}

    /**
     * Send email
     *
     * @param {string} template
     * @returns {Promise<SentMessageInfo>}
     * @memberof TranferMailer
     */
    public send(template: string, subject: string, recipient: string): Promise<SentMessageInfo> {
        return this.transporter.sendMail({
            from: this.email,
            subject,
            to: recipient,
            html: template,
        });
    }
}
