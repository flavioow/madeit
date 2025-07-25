#!/usr/bin/env node

import { spawn } from "child_process"
import { fileURLToPath } from "url"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const args = process.argv.slice(2)

const child = spawn("npx", ["tsx", path.resolve(__dirname, "../src/main.ts"), ...args], {
    stdio: ["inherit", "inherit", "pipe"],
    env: {
        ...process.env,
        NODE_NO_WARNINGS: "1",
    },
})

child.stderr.on("data", (data) => {
    const message = data.toString()

    if (message.includes("ExperimentalWarning")) return
    if (message.includes("Use `node --trace-warnings")) return

    process.stderr.write(message)
})
