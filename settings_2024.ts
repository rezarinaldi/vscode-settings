{
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // for prettier configuration
  "[javascript]": {
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
  "workbench.colorTheme": "Default Light Modern",
  "workbench.iconTheme": "city-lights-icons-vsc",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,
  "todo-tree.tree.showScanModeButton": false,
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "emmet.triggerExpansionOnTab": true,
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  },
  "[css, scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[svelte]": {
    "editor.defaultFormatter": "svelte.svelte-vscode"
  },
  "[dart]": {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [80],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": "off",
    "editor.defaultFormatter": "Dart-Code.dart-code"
  },
  "dart.previewFlutterUiGuidesCustomTracking": true,
  "dart.previewFlutterUiGuides": true,
  "bracket-pair-colorizer-2.depreciation-notice": false,
  "editor.guides.bracketPairs": true,
  "emulator.emulatorPath": "F:\\app\\Android\\Sdk\\emulator",
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
  "terminal.integrated.defaultProfile.windows": "Ubuntu (WSL)",
  "remote.WSL.fileWatcher.polling": true,
  "security.allowedUNCHosts": ["wsl.localhost"],
  "svelte.enable-ts-plugin": true,
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

  // apc
  "apc.activityBar": {
    "position": "top",
    "size": 32
  },
  "apc.statusBar": {
    "position": "editor-bottom",
    "height": 22,
    "fontSize": 12
  },
  "apc.electron": {
    "titleBarStyle": "hiddenInset",
    "trafficLightPosition": {
      "x": 8,
      "y": 10
    }
  },
  "apc.header": {
    "height": 34,
    "fontSize": 14
  },
  "apc.listRow": {
    "height": 21,
    "fontSize": 13
  }
}
