mob.init();
mob.setTimeout(6000);
const installed = mob.isAppInstalled('com.cellcom.volume');
log.info(installed);
assert.equal(installed, true);