import prompts from "prompts"
import path from "path"

import { copyTemplate } from "../utils/copy-template"
import { getAllTemplates, templateExists } from "../utils/paths"

export async function clone(args: string[]) {
    let templateName = args[0]
    let destination = args[1]

    if (!templateName || !destination) {
        const templates = await getAllTemplates()

        const response = await prompts([
            {
                type: "select",
                name: "templateName",
                message: "Choose one template:",
                choices: templates.map(t => ({ title: t, value: t })),
            },

            {
                type: "text",
                name: "destination",
                message: "Project name:",
                validate: name => name.trim().length > 0 ? true : "Enter a valid name.",
            }
        ])

        templateName = response.templateName
        destination = response.destination
    }

    if (!await templateExists(templateName)) {
        console.error(`Template "${templateName}" not found.`)
        return
    }

    const fullDest = path.resolve(process.cwd(), destination)
    await copyTemplate(templateName, fullDest)
}
