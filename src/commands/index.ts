import ChooseTerminalTheme from "./chooseTerminalTheme";
import ClearTerminal from "./clearTerminal";
import RunScript from "./runScript";
import OneCommand from "./oneCommand";
import ChangeFontSize from "./fontSize/changeFontSize";
import AdjustFontSizeByOne from "./fontSize/adjustFontSizeByOne";
import { ExtensionContext } from "vscode";

export default (context: ExtensionContext) => [
  new OneCommand(
    context,
    "selectDefaultShell",
    "workbench.action.terminal.selectDefaultShell"
  ),
  new OneCommand(context, "toggleMaxTerm", [
    "workbench.action.terminal.focus",
    "workbench.action.toggleMaximizedPanel",
  ]),
  new OneCommand(context, "createNewTerminal", "workbench.action.terminal.new"),
  new OneCommand(
    context,
    "deleteCurrentTerminal",
    "workbench.action.terminal.kill"
  ),
  new ChooseTerminalTheme(context),
  new ClearTerminal(context),
  new RunScript(context),
  new ChangeFontSize(context),
  new AdjustFontSizeByOne(context, "decrease"),
  new AdjustFontSizeByOne(context, "increase"),
];
