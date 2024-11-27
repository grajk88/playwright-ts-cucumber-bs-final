const report = require("multiple-cucumber-html-reporter");

const reportGenerationTime = new Date().toLocaleString();

report.generate({
  jsonDir: "./test-result/cucumber-report/",
  reportPath: "./test-result/cucumber-report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "116",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "My Test Project" },
      { label: "Report Generated On", value:reportGenerationTime  }
    ],
  },
});