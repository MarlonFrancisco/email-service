import PrepareTemplate, { IField } from "./PrepareTemplate";
import TranferMailer from "./TransferMailer";

export default class Mailer {
    private transfer = new TranferMailer(
        this.email,
        this.password,
        this.service,
    );

    constructor(
        private email: string,
        private password: string,
        private service: string,
    ) {}

    public async sender(
        templatePath: string,
        fields: IField[],
        subject: string,
        recipient: string,
    ) {
        const template = PrepareTemplate.replaceFields(templatePath, fields);

        return this.transfer.send(template, subject, recipient);
    }
}
