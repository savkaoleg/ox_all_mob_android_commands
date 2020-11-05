mob.init();
mob.setTimeout(6000);
mob.closeApp();
mob.pause(2000);
mob.launchApp();
mob.pause(2000);
mob.waitForVisible('//android.widget.TextView[@content-desc="Text"]');