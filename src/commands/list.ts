import { getAllTemplates } from "../utils/paths"

export async function list() {
    const templates = await getAllTemplates()

    if (!templates) {
        console.error("No template found.")
        return
    }

    console.log("Available templates:")
    templates.forEach((template) => {
        console.log(`- ${template}`)
    })
}
