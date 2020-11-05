mob.init();
mob.setTimeout(6000);
const logs = mob.getBrowserLogs();
log.info(logs.length);
const logsCorrect = logs && Array.isArray(logs) && logs.length > 0;
assert.equal(logsCorrect, true);