mob.init();
mob.setTimeout(6000);
mob.click('//android.widget.TextView[@content-desc="Views"]');
mob.click('//android.widget.TextView[@content-desc="Controls"]');
mob.click('//android.widget.TextView[@content-desc="2. Dark Theme"]');
mob.hideKeyboard("pressKey", "Done");
let checkable = mob.isCheckable('//android.widget.CheckBox[@content-desc="Checkbox 1"]');
log.info(checkable);
assert.equal(checkable, true);