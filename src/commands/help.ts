export function help() {
    console.log(`MadeIt CLI - Easily store and reuse your projects.`)

    //     console.info(`
    // see the complete documentation here https://madeit.dev
    // `)

    console.log(`
Available commands:

  mdit copy     Copies a current project to the local repository
  mdit clone    Clones a project from the repository to another directory
  mdit remove   Removes a template from the local repository
  mdit list     Lists all saved templates`)
}
