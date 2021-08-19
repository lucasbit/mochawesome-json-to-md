const { exec } = require("child_process");

module.exports = function ({
  json_report,
  mocked_md,
  showEmoji,
  reportTitle,
  showDate,
  showDuration,
  showStats,
  showPassed,
  showFailed,
  showSkipped,
  showCypress,
}) {
  exec(
    `node index.js -p ${json_report} -o ${mocked_md}${
      showEmoji ?? `--showEmoji="${showEmoji}"` : ""
    }`
  );
};
