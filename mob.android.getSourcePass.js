mob.init();
mob.setTimeout(6000);
const source = mob.getSource();
const sourceCorrect = source && typeof source === 'string' && source.length > 0;
assert.equal(sourceCorrect, true);