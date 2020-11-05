mob.init();
mob.setTimeout(6000);
const apkPath2 = path.resolve(__dirname, '../assets/ApiDemos-debug.apk');
log.info(apkPath2);
mob.installApp(apkPath2);