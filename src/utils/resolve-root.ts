import path from "path"
import { fileURLToPath } from "url"

export const cliRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
