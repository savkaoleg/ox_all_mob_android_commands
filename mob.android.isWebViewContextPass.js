mob.init();
mob.setTimeout(6000);
mob.waitForVisible('//android.widget.TextView[@content-desc="Text"]');
const isWebViewContext = mob.isWebViewContext();
log.info(isWebViewContext);
assert.equal(isWebViewContext, false);