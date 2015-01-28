cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.jboss.aerogear.cordova.push/www/aerogear.ajax.js",
        "id": "org.jboss.aerogear.cordova.push.AeroGear.ajax",
        "clobbers": [
            "ajax"
        ]
    },
    {
        "file": "plugins/org.jboss.aerogear.cordova.push/www/aerogear-push.js",
        "id": "org.jboss.aerogear.cordova.push.AeroGear.UnifiedPush",
        "clobbers": [
            "push"
        ]
    },
    {
        "file": "plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
        "id": "com.bunkerpalace.cordova.YoutubeVideoPlayer.YoutubeVideoPlayer",
        "clobbers": [
            "YoutubeVideoPlayer"
        ]
    },
    {
        "file": "plugins/jaeger.Html5Video/www/Html5Video.js",
        "id": "jaeger.Html5Video.Html5Video",
        "clobbers": [
            "plugins.html5Video"
        ]
    },
    {
        "file": "plugins/com.vladstirbu.cordova.promise/www/promise.js",
        "id": "com.vladstirbu.cordova.promise.Promise",
        "clobbers": [
            "Promise"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.jboss.aerogear.cordova.push": "1.0.2",
    "com.bunkerpalace.cordova.YoutubeVideoPlayer": "1.0.1",
    "jaeger.Html5Video": "1.2.1",
    "com.vladstirbu.cordova.promise": "1.0.0",
    "android.support.v4": "1.0.0",
    "com.google.playservices": "19.0.0",
    "org.apache.cordova.device": "0.2.14-dev"
}
// BOTTOM OF METADATA
});