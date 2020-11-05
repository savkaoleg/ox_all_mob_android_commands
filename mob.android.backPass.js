mob.init();
mob.setTimeout(6000);
mob.click('//android.widget.TextView[@content-desc="Views"]');
mob.pause(5000);
mob.back();
mob.pause(5000);
mob.isVisible('//android.widget.TextView[@content-desc="Views"]');