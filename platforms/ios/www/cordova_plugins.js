cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
        "id": "com.bunkerpalace.cordova.YoutubeVideoPlayer.YoutubeVideoPlayer",
        "clobbers": [
            "YoutubeVideoPlayer"
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
        "file": "plugins/jaeger.Html5Video/www/Html5Video.js",
        "id": "jaeger.Html5Video.Html5Video",
        "clobbers": [
            "plugins.html5Video"
        ]
    },
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
    "android.support.v4": "1.0.0",
    "com.bunkerpalace.cordova.YoutubeVideoPlayer": "1.0.1",
    "com.google.playservices": "19.0.0",
    "com.vladstirbu.cordova.promise": "1.0.0",
    "jaeger.Html5Video": "1.2.1",
    "org.jboss.aerogear.cordova.push": "1.0.2",
    "org.apache.cordova.device": "0.2.14-dev"
}
// BOTTOM OF METADATA
});