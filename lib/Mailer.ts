import PrepareTemplate, { IField } from "./PrepareTemplate";
import TranferMailer from "./TransferMailer";

export interface IMailer {
    sender: (
        templatePath: string,
        fields: IField[],
        subject: string,
        recipient: string,
    ) => Promise<any>;
}

export default class Mailer implements IMailer {
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

    /**
     * Sender email
     *
     * @param {string} templatePath
     * @param {IField[]} fields
     * @param {string} subject
     * @param {string} recipient
     * @returns { Promise<any> }
     * @memberof Mailer
     */
    public sender(
        templatePath: string,
        fields: IField[],
        subject: string,
        recipient: string,
    ): Promise<any> {
        const template = PrepareTemplate.replaceFields(templatePath, fields);
        return this.transfer.send(template, subject, recipient);
    }
}
