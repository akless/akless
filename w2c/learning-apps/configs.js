/**
 * @overview ccm instance configurations
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "slidecast": {
    "slides": [
      {
        "image": "resources/Folie01.jpg",
        "audio": "resources/jingle.mp3",
        "description": "Zu jeder Folie kann eine Beschreibung mit zusätzlichen Erläuterungen des Lehrenden hinterlegt werden.",
        "optional_content": [ "ccm.instance", "https://tkless.github.io/ccm-components/comment/versions/ccm.comment-1.0.0.min.js", {
          "data": {
            "store": [ "ccm.store", { "store": "slidecast_comments", "url": "https://ccm.inf.h-brs.de" } ],
            "key": "learning_apps"
          },
          "user": [ "ccm.instance", "https://akless.github.io/ccm-components/user/versions/ccm.user-2.0.0.min.js", { "sign_on": "demo" } ] } ],
          "voting": [ "ccm.component", "https://tkless.github.io/ccm-components/voting/versions/ccm.voting-1.0.0.min.js", {
            "icon_likes": "fa fa-lg fa-chevron-up",
            "icon_dislikes": "fa fa-lg fa-chevron-down",
            "data": { "store": [ "ccm.store", { "store": "voting", "url": "wss://ccm.inf.h-brs.de" } ] },
            "user": [ "ccm.instance", "https://akless.github.io/ccm-components/user/versions/ccm.user-2.0.0.min.js" ]
          } ]
      },
      {
        "image": "resources/Folie02.jpg"
      },
      {
        "image": "resources/Folie03.jpg"
      },
      {
        "image": "resources/Folie04.jpg"
      },
      {
        "image": "resources/Folie05.jpg"
      },
      {
        "image": "resources/Folie06.jpg"
      },
      {
        "image": "resources/Folie07.jpg",
        "audio": "resources/jingle.mp3  "
      },
      {
        "image": "resources/Folie08.jpg"
      },
      {
        "image": "resources/Folie09.jpg"
      }
    ]
  }
};