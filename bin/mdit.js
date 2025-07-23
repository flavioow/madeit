#!/usr/bin/env node

process.env.NODE_NO_WARNINGS = "1"

const { spawn } = require("child_process")
const path = require("path")

const args = process.argv.slice(2)

const child = spawn("npx", ["tsx", path.resolve(__dirname, "../src/main.ts"), ...args], {
    stdio: ["inherit", "inherit", "pipe"]
})

child.stderr.on("data", (data) => {
    const message = data.toString()

    if (message.includes("ExperimentalWarning")) return
    if (message.includes("Use `node --trace-warnings")) return

    process.stderr.write(message)
})
