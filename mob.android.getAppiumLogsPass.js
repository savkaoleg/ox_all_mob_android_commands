mob.init();
mob.setTimeout(6000);
const logs = mob.getAppiumLogs();
log.info(logs.length);
const logsCorrect = logs && Array.isArray(logs);
assert.equal(logsCorrect, true);