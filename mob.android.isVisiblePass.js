mob.init();
mob.setTimeout(6000);
const visible = mob.isVisible('//android.widget.TextView[@content-desc="Text"]');
log.info(visible);
assert.equal(visible, true);