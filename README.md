# pi-dosbox

DOSBox extension for [pi](https://github.com/badlogic/pi-mono). Run DOS programs in the terminal with agent interaction.

> **Note:** This is experimental and has known issues with rendering during streaming and some key mappings.

## Features

- Persistent DOSBox instance running in background
- QuickBASIC 4.5 bundled and mounted at `C:\QB`
- `/dosbox` command to view and interact with DOSBox (Ctrl+Q to detach)
- `dosbox` tool for agent interaction:
  - `send_keys` - Send keystrokes to DOSBox
  - `screenshot` - Get PNG screenshot
  - `read_text` - Read text-mode screen content

## Installation

```bash
git clone https://github.com/badlogic/pi-dosbox.git
cd pi-dosbox
npm install
```

## Usage

```bash
pi -e /path/to/pi-dosbox
```

Then:
- `/dosbox` to view and interact manually
- Ask the agent to use DOSBox, e.g., "Start QBasic and write a hello world program"

## Known Issues

- Some keys don't work properly in interactive mode (comma, etc.)
- Rendering corruption can occur during agent streaming
- Text mode detection may not work correctly in all cases

## License

MIT
