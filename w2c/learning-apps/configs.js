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
          "comment_template": "expanded",
          "data": {
            "store": [ "ccm.store", { "store": "slidecast_comments", "url": "https://ccm.inf.h-brs.de" } ],
            "key": "learning_apps"
          },
          "user": [ "ccm.instance", "https://akless.github.io/ccm-components/user/versions/ccm.user-2.0.0.min.js", { "sign_on": "demo" } ],
          "voting": [ "ccm.component", "https://tkless.github.io/ccm-components/thumb_rating/versions/ccm.thumb_rating-1.0.0.min.js",
            {
              "buttons": "true",
              "data": { "store": [ "ccm.store", { "store": "voting", "url": "wss://ccm.inf.h-brs.de" } ] },
              "user": [ "ccm.instance", "https://akless.github.io/ccm-components/user/versions/ccm.user-2.0.0.min.js", { "sign_on": "demo" } ]
            }
          ]
        }]
      },
      {
        "image": "resources/Folie02.jpg",
        "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/quiz/resources/configs.js", "demo" ] ]
      },
      {
        "image": "resources/Folie03.jpg",
        "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/cloze/resources/configs.js", "demo" ] ]
      },
      {
        "image": "resources/Folie04.jpg"
//      "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/kanban_board/ccm.kanban_board.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/kanban_board/resources/configs.js", "demo" ] ]
      },
      {
        "image": "resources/Folie05.jpg",
        "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/teambuild/versions/ccm.teambuild-1.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/teambuild/resources/configs.js", "demo" ] ]
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