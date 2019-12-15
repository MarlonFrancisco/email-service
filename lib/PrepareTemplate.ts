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

export default class PrepareTemplate {
    /**
     * Prepare template for sending
     *
     * @static
     * @param {string} templatePath path to template
     * @param {IField[]} fields fields for replace in template
     * @returns {string} template
     * @memberof PrepareTemplate
     */
    public static replaceFields(templatePath: string, fields: IField[]): string {
        let template = this.getTemplate(templatePath);
        fields.forEach((field) => {
            template = template.replace(`%%${field.name}%%`, field.value);
        });
        return template;
    }

    /**
     * Get template
     *
     * @static
     * @param {string} path path to template
     * @returns {string} template as string
     * @memberof PrepareTemplate
     */
    public static getTemplate(path: string): string {
        return readFileSync(path, {
            encoding: "utf-8",
        });
    }
}
