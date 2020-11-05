mob.init();
mob.setTimeout(6000);
const elements = mob.findElements('//android.widget.TextView');
log.info(elements)
log.info(elements.length);
const elementsValid = elements.length > 1;
assert.equal(elementsValid, true, 'Caps not valid');