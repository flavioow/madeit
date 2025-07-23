import path from "path"
import fs from "fs/promises"

import { cliRoot } from "./resolve-root"

// Returns the absolute path of the /templates folder.
export function getTemplatesDir(): string {
    return path.join(cliRoot, "templates")
}

// Lists all templates within /templates
export async function getAllTemplates(): Promise<string[]> {
    const entries = await fs.readdir(getTemplatesDir(), { withFileTypes: true })
    return entries.filter(entry => entry.isDirectory()).map(entry => entry.name)
}

// Check if there is already a template with a specific name
export async function templateExists(name: string): Promise<boolean> {
    const templatePath = path.join(getTemplatesDir(), name)
    try {
        const stats = await fs.stat(templatePath)
        return stats.isDirectory()
    } catch {
        return false
    }
}
