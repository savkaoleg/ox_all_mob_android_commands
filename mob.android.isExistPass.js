mob.init();
mob.setTimeout(6000);
const exist = mob.isExist('//android.widget.TextView[@content-desc="Text"]');
log.info(exist);
assert.equal(exist, true);