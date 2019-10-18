import { readFileSync } from "fs";

/**
 * Fields for replace in template
 *
 * * example fields in template %%name%%
 *
 * @export
 * @interface IField
 */
export interface IField {
    name: string;
    value: string;
}

export default class PrepareMail {
    /**
     * Prepare template for sending
     *
     * @static
     * @param {string} templatePath path to template
     * @param {IField[]} fields fields for replace in template
     * @returns {string} template
     * @memberof PrepareMail
     */
    public static replaceFields(templatePath: string, fields: IField[]): string {
        const template = this.getTemplate(templatePath);

        fields.map((field) => {
            template.replace(`%%${field.name}%%`, field.value);
        });

        return template;
    }

    /**
     * Get template
     *
     * @static
     * @param {string} path path to template
     * @returns {string} template as string
     * @memberof PrepareMail
     */
    public static getTemplate(path: string): string {
        return readFileSync(path, {
            encoding: "utf-8",
        });
    }
}
