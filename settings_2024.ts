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
  "workbench.iconTheme": "city-lights-icons-vsc",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,
  "todo-tree.tree.showScanModeButton": false,
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "editor.minimap.enabled": false,
  "intelephense.diagnostics.undefinedTypes": false,
  "intelephense.diagnostics.undefinedFunctions": false,
  "intelephense.diagnostics.undefinedConstants": false,
  "intelephense.diagnostics.undefinedClassConstants": false,
  "intelephense.diagnostics.undefinedProperties": false,
  "intelephense.diagnostics.undefinedMethods": false,
  "intelephense.diagnostics.undefinedVariables": false,
  "emmet.triggerExpansionOnTab": true,
  "[php]": {
    "editor.defaultFormatter": "bmewburn.vscode-intelephense-client"
  },
  "blade.format.enable": true,
  "[blade]": {
    "editor.defaultFormatter": "onecentlin.laravel-blade",
    "editor.autoClosingBrackets": "always"
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
  "workbench.colorTheme": "Icy Kiss",
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
  "security.allowedUNCHosts": ["wsl.localhost"]
}
