mob.init();
mob.setTimeout(6000);
let activity = mob.getCurrentActivity();
log.info(activity);
const activityCorrect = activity && typeof activity === 'string' && activity.length > 0;
assert.equal(activityCorrect, true);
mob.pause(2000);