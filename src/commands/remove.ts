import prompts from "prompts"
import path from "path"
import fs from "fs-extra"

import { getTemplatesDir, getAllTemplates, templateExists } from "../utils/paths"

export async function remove(args: string[]) {
    let templateName = args[0]

    if (!templateName) {
        const templates = await getAllTemplates()

        const response = await prompts({
            type: "select",
            name: "templateName",
            message: "Choose one template:",
            choices: templates.map(t => ({ title: t, value: t })),
        })

        templateName = response.templateName
    }

    if (!await templateExists(templateName)) {
        console.error(`Template "${templateName}" not found.`)
        return
    }

    const confirm = await prompts({
        type: "confirm",
        name: "confirmed",
        message: `Do you want remove "${templateName}" template?`,
        initial: false,
    })

    if (!confirm.confirmed) {
        console.log("Operation canceled.")
        return
    }

    const targetDir = path.join(getTemplatesDir(), templateName)
    await fs.remove(targetDir)
    console.log(`"${templateName}" template has been successfully removed.`)
}
