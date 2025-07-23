import { clone } from "./commands/clone"
import { copy } from "./commands/copy"
import { remove } from "./commands/remove"
import { list } from "./commands/list"
import { help } from "./commands/help"

const [command, ...args] = process.argv.slice(2)

switch (command) {
    case "clone":
        clone(args)
        break
    case "copy":
        copy(args)
        break
    case "remove":
        remove(args)
        break
    case "list":
        list()
        break
    case "help":
        help()
        break
    default:
        console.error("Command not recognized.")
        console.info("Use mdit help to see the available commands.")
        break
}
