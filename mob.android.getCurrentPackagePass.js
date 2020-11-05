mob.init();
mob.setTimeout(6000);
let pkg = mob.getCurrentPackage();
log.info(pkg);
const packageCorrect = pkg && typeof pkg === 'string' && pkg.length > 0;
assert.equal(packageCorrect, true);
mob.pause(2000);