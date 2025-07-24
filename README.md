<div align="center">
    <h1>MadeIt - Easily store and reuse your projects.</h1>

![version](https://img.shields.io/badge/version-v1.0.0-gre)
</div>

**MadeIt** is a CLI designed for developers who want to **organize, save, and reuse project templates** quickly and easily. Ideal for freelancers, boilerplate creators, and anyone who creates new projects on a daily basis.

> “You did that? So... Made it.”

---

## 📦 About project

MadeIt is a local template repository. You can save any directory as a template and then clone it elsewhere with a single command.

All your projects will be saved remotely; nothing will be sent to the cloud. But if you want, you can store your projects in your own repository!

---

## 👤 For those who fit the bill

- Developers who are constantly creating landing pages, micro SaaS, full stacks, and the like.
- Those who are tired of having to install and configure libraries and frameworks.
- Those who work as freelancers and want to standardize their project base.
- Those who want to save time on setup and focus on identity and features.
- Those who love productivity and hate manually copying and pasting folders.

> Why waste time configuring projects when you can just focus on what matters most: the project!

---

## 🚀 Instalation

Copy the repository locally and install the necessary dependencies using the following commands:
```bash
git clone https://github.com/flavioow/madeit
cd madeit
npm install
```

For CLI to be recognized, run these commands:
```bash
chmod +x bin/mdit.js
npm link
```

> **Note:** `npm link` allows you to use the `mdit` command globally on your machine.

---

## ⚙️ Available commands

| Command       | Description                                                    |
|---------------|----------------------------------------------------------------|
| `mdit copy`   | Copy the current project to the local repository as a template |
| `mdit clone`  | Clone a saved template to a new directory                      |
| `mdit list`   | Lists all available templates                                  |
| `mdit remove` | Removes a template from the local repository                   |

All commands support interactive mode if you do not pass any arguments.

---

## 🌐 Documentation

*Documentation will be available soon.*


---

## 🙏 Credits

Made with love by [@flavioow](https://flavioow.verce.app/en) 💻

This project is still under active development. Contributions and ideas are very welcome!
