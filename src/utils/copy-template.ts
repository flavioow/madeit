import fs from "fs-extra"
import path from "path"
import { getTemplatesDir } from "./paths"

export async function copyTemplate(templateName: string, destination: string) {
    const templatePath = path.join(getTemplatesDir(), templateName)
    const destPath = path.resolve(destination)

    if (!fs.existsSync(templatePath)) {
        console.error(`"${templateName}" template not found.`)
        process.exit(1)
    }

    try {
        await fs.copy(templatePath, destPath)
        console.log(`"${templateName}" template has been successfully copied to "${destPath}".`)
    } catch (err) {
        console.error(`Error copying template:`, err)
        process.exit(1)
    }
}
