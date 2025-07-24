{// for prettier configuration
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // format code on save
  "editor.formatOnSave": true,

  // update import on file move
  "javascript.updateImportsOnFileMove.enabled": "always",

  // other settings here
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "workbench.iconTheme": "city-lights-icons-vsc",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,
  "editor.bracketPairColorization.enabled": true,
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "emmet.triggerExpansionOnTab": true,
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  },
  "[md, mdx]": {
    "editor.defaultFormatter": "yzhang.markdown-all-in-one"
  },
  "[css, scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter"
  },
  "[dart]": {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [80],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": "off"
  },
  "editor.guides.bracketPairs": true,
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [],
      "icon": "terminal-cmd"
    },
    "Git Bash": {
      "source": "Git Bash"
    },
    "Ubuntu (WSL)": {
      "path": "C:\\Windows\\System32\\wsl.exe",
      "args": ["-d", "Ubuntu"]
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "remote.WSL.fileWatcher.polling": true,
  "security.allowedUNCHosts": ["wsl.localhost"],
  "files.associations": {
    "*.css": "tailwindcss"
  },

  // additional
  "workbench.startupEditor": "none",
  // "workbench.settings.editor": "json",
  "breadcrumbs.enabled": false,
  "explorer.compactFolders": false,
  "editor.wordWrap": "bounded",
  "editor.tabSize": 2,
  "editor.inlineSuggest.enabled": true,
  "editor.minimap.enabled": false,
  "terminal.integrated.fontFamily": "JetBrains Mono",
  "workbench.editor.customLabels.patterns": {
    "**/**.js": "${dirname}/${filename}", // route.js
    "**/**.jsx": "${dirname}/${filename}", // layout.jsx, page.jsx, template.jsx
    "**/**.ts": "${dirname}/${filename}", // route.ts
    "**/**.tsx": "${dirname}/${filename}" // layout.tsx, page.tsx, template.tsx
  },
  "terminal.integrated.defaultProfile.linux": "zsh",
  "security.workspace.trust.untrustedFiles": "open",
  "remote.autoForwardPortsSource": "hybrid",
  "workbench.colorTheme": "Default Light Modern"

  // apc
  // "apc.activityBar": {
  //   "position": "top",
  //   "size": 32
  // },
  // "apc.statusBar": {
  //   "position": "editor-bottom",
  //   "height": 22,
  //   "fontSize": 12
  // },
  // "apc.electron": {
  //   "titleBarStyle": "hiddenInset",
  //   "trafficLightPosition": {
  //     "x": 8,
  //     "y": 10
  //   }
  // },
  // "apc.header": {
  //   "height": 34,
  //   "fontSize": 14
  // },
  // "apc.listRow": {
  //   "height": 21,
  //   "fontSize": 13
  // }
}