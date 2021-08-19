const createMd = require("./support/exec_command.js");

test("sample", () => {
  createMd({
    json_report: "cypress-combined-report.json",
    mocked_md: "mocked.md",
  });
});
