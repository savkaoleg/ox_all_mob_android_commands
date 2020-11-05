mob.init();
mob.setTimeout(6000);
mob.click('//android.widget.TextView[@content-desc="Text"]');
mob.click('//android.widget.TextView[@content-desc="Marquee"]');
const clickable = mob.isClickable('//android.widget.Button[@content-desc="This use the default marquee animation limit of 3"]');
log.info(clickable);
assert.equal(clickable, true);