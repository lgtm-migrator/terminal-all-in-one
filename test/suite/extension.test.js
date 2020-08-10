const assert = require("assert");

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require("vscode");
//
const { activate, deactivate } = require("../../out/extension");
// const myExtension = require('../extension');

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  assert.ok(activate, "Activate Function exists");

  assert.ok(deactivate, "Deactivate Function exists");
});
