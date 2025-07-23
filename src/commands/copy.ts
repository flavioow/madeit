import prompts from "prompts"
import path from "path"
import fs from "fs-extra"

import { getTemplatesDir } from "../utils/paths"

export async function copy(args: string[]) {
    const sourceDir = process.cwd()

    const { templateName } = await prompts({
        type: "text",
        name: "templateName",
        message: "Name of the template to be saved:",
        validate: (name) => name.trim().length > 0 ? true : "Enter a valid name.",
    })

    const targetDir = path.join(getTemplatesDir(), templateName)

    if (await fs.pathExists(targetDir)) {
        const { overwrite } = await prompts({
            type: "confirm",
            name: "overwrite",
            message: `"${templateName}" template already exists. Do you want to overwrite it?`,
            initial: false,
        })

        if (!overwrite) {
            console.log("Operation canceled.")
            return
        }

        await fs.remove(targetDir)
    }

    await fs.copy(sourceDir, targetDir, {
        filter: (src) => !src.includes("node_modules") && !src.includes(".git")
    })

    console.log(`"${templateName}" template successfully saved in "${targetDir}".`)
}
