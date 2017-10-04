/**
 * @overview ccm instance configurations
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "slidecast": {
    "slides": [
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie01.jpg",
        "audio": "https://akless.github.io/akless/w2c/learning-apps/resources/jingle.mp3",
        "description": "Zu jeder Folie kann eine individuelle Beschreibung mit zusätzlichen Erläuterungen des Lehrenden hinterlegt werden. Zudem kann jeder Folie auch eine Audioaufnahme zugeordnet werden. In diesem Fall ist es nur eine Melodie: Der Jingle des Projekts \"work&study\".",
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
        } ]
      },
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie02.jpg",
        "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/quiz/resources/configs.min.js", "demo" ] ]
      },
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie03.jpg",
        "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-2.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/cloze/resources/configs.min.js", "demo" ] ]
      },
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie04.jpg",
        "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/teambuild/versions/ccm.teambuild-1.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/teambuild/resources/configs.min.js", "demo" ] ]
      },
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie05.jpg",
        "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/teambuild/versions/ccm.teambuild-1.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/teambuild/resources/configs.min.js", "showcase" ] ]
      },
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie06.jpg",
        "optional_content": [ "ccm.instance", "https://akless.github.io/ccm-components/kanban_board/ccm.kanban_board.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/kanban_board/resources/configs.min.js", "showcase" ] ]
      },
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie07.jpg"
      },
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie08.jpg"
      },
      {
        "image": "https://akless.github.io/akless/w2c/learning-apps/resources/Folie09.jpg"
      }
    ]
  }
};