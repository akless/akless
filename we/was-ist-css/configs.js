/**
 * @overview ccm instance configurations
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "configs.min.js" ] = {
  "le": {
    "topic": "Was ist CSS?",
    "innerHTML": "<script src=https://akless.github.io/ccm-components/quiz/ccm.quiz.min.js></script><h2>1. Motivation, Lernziele und Voraussetzungen</h2><p>Über <a href=https://de.wikipedia.org/wiki/Hypertext_Markup_Language>HTML</a> werden die Inhalte einer <a href=https://de.wikipedia.org/wiki/Webseite>Webseite</a> strukturiert. Das ist schön und gut, aber noch nicht zufriedenstellend. Was noch fehlt, ist die optische Gestaltung der Webseite. Dies wird von HTML allerdings auch ganz bewusst kaum adressiert. Das liegt daran, dass es beim <a href=https://de.wikipedia.org/wiki/Webdesign>Webdesign</a> ein fundmental wichtiges Grundprinzip gibt: Die Trennug von Inhalt und Design. Zur Gestaltung von Layout und Design einer Webseite wird deshalb nicht HTML, sondern eine andere Sprache eingesetzt: <a href=https://de.wikipedia.org/wiki/Cascading_Style_Sheets>CSS</a>. Darüber können dann Dinge wie Farben, Animationen, Hintergründe, Positionierung von Webseitenbereichen und viele weitere Aspekte zur optischen Gestaltung und Formatierung von Inhalten festgelegt werden. In dieser Lerneinheit erfahren Sie was CSS ist und wofür es eingesetzt wird und was es mit dem Grundprinzip der Trennung von Inhalt und Design auf sich hat. Voraussetzung ist, dass Sie bereits mit HTML, HTML-Tags und Attributen vertraut sind.</p><ccm-le-audio src=https://akless.github.io/akless/we/was-ist-css/motivation.mp3></ccm-le-audio><h3>1.1 Lernziele</h3><ul><li>Ich weiß, was CSS ist und wofür es eingesetzt wird.<li>Ich kenne das Grundprinzip der Trennung von Inhalt und Desgin.<li>Ich weiß, wer an der Weiterentwicklung von CSS arbeitet.<li>Ich weiß, in welcher Version CSS aktuell vorliegt.</ul><h3>1.2 Voraussetzungen</h3><ul><li>Ich weiß grob, was eine Webseite ist.<li>Ich weiß, was HTML ist und wofür es eingesetzt wird.<li>Ich weiß, wer an der Weiterentwicklung von HTML arbeitet.</ul><h2>2. Inhalt:<ccm-le-topic></ccm-le-topic></h2><ccm-le-video src=https://akless.github.io/akless/we/was-ist-css/slidecast.mp4></ccm-le-video><h3>2.1 Cascading Style Sheets</h3><p><b>CSS</b> steht für <b>C</b>ascading <b>S</b>tyle <b>S</b>heets. Das ist Englisch und bedeutet im deutschen so viel wie gestufte Gestaltungsbögen. Es handelt sich dabei um eine <a href=https://de.wikipedia.org/wiki/Stylesheet-Sprache>Stylesheet-Sprache</a>, mit der digitale Dokumente gestaltet werden können.</p><ccm-le-img src=https://akless.github.io/akless/we/was-ist-css/slide-1.jpg></ccm-le-img><h3>2.2 Trennung von Inhalt und Design</h3><p>In der Praxis wird CSS zur Gestaltung von Layout und Design von Webseiten eingesetzt. HTML dagegen dient der reinen Strukturierung der Webseite. Somit sind Inhalt und Layout weitgehend voneinander getrennt. Man könnte auch sagen, dass über HTML den Inhalten Sinn und Bedeutung gegeben wird und über CSS die Inhalte gestaltet werden.</p><ccm-le-img src=https://akless.github.io/akless/we/was-ist-css/slide-2.jpg></ccm-le-img><p>Die Trennung von Inhalt und Design ist ein Grundprinzip im Webdesign. Dadurch lassen sich Webseiten erheblich leichter entwickeln und vor allem später, insbesondere bei komplexeren Webseiten, mit wesentlich weniger Aufwand pflegen, da die Angaben zu Layout und Design nicht mit den Inhalten vermischt und klar voneinander getrennt sind. Lagert man das CSS in eine separate CSS-Datei aus, ist das Layout einer Webseite sogar austauschbar. Um zu einem anderen Layout zu wechseln, muss dann lediglich eine andere CSS-Datei in die Webseite eingebunden werden.<h3>2.3 Bespiel: Webseite ohne CSS</h3><p>Um die Trennung von Inhalt und Design bei einer Webseite zu verdeutlichen, schauen wir uns ein kurzes Beispiel an. Die folgende Abbildung zeigt eine Webseite, deren Inhalte bisher ohne CSS nur mittels HTML strukturiert wurden.</p><ccm-le-img src=https://akless.github.io/akless/we/was-ist-css/slide-3.jpg></ccm-le-img><h3>2.4 Selbe Webseite mit CSS</h3><p>Als nächstes folgt eine Abbildung der selben Webseite, für die nun allerdings auch Layout und Design mittels CSS ergänzt worden ist.</p><ccm-le-img src=https://akless.github.io/akless/we/was-ist-css/slide-4.jpg></ccm-le-img><h3>2.5 Weiterentwicklung</h3><p>Die Weiterentwicklung von CSS erfolgt, genau wie bei HTML, durch das <a href=https://de.wikipedia.org/wiki/World_Wide_Web_Consortium>World Wide Web Consortium (W3C)</a> und die <a href=https://de.wikipedia.org/wiki/Web_Hypertext_Application_Technology_Working_Group>Web Hypertext Application Technology Working Group (WHATWG)</a>. Die aktuellste Version von CSS, die von der WHATWG ausgearbeitet und dem W3C vorgelegt wurde, ist CSS3.</p><ccm-le-img src=https://akless.github.io/akless/we/was-ist-css/slide-5.jpg></ccm-le-img><h2>3. Selbsttest</h2><ccm-quiz key='[\"ccm.get\",\"https://akless.github.io/akless/we/was-ist-css/configs.min.js\",\"quiz\"]'></ccm-quiz><h2>4. Alternative Materialien</h2><h3>4.1 Cascading Style Sheets | Wikipedia</h3><p>Wikipedia-Artikel zu CSS.</p><ccm-le-link href=https://de.wikipedia.org/wiki/Cascading_Style_Sheets></ccm-le-link><h3>4.2 CSS | SELFHTML-Wiki</h3><p>Einführung in CSS aus der Internet-Dokumentation <a href=https://de.wikipedia.org/wiki/SELFHTML>SELFHTML</a>.</p><ccm-le-link href=https://wiki.selfhtml.org/wiki/CSS></ccm-le-link><h3>4.3 HTML | MDN</h3><p>Einführung in CSS aus dem Hause <a href=https://de.wikipedia.org/wiki/Mozilla_Foundation>Mozilla</a>, den Machern des Webbrowsers <a href=https://de.wikipedia.org/wiki/Mozilla_Firefox>Firefox</a>.</p><ccm-le-link href=https://developer.mozilla.org/de/docs/Web/CSS></ccm-le-link><h3>4.4 Warum Layouts mit CSS? – SELFHTML-Wiki</h3><p>Artikel zur Trennung von Inhalt und Design aus der Internet-Dokumentation <a href=https://de.wikipedia.org/wiki/SELFHTML>SELFHTML</a>.</p><ccm-le-link href=https://wiki.selfhtml.org/wiki/CSS/Anwendung_und_Praxis/Warum_Layouts_mit_CSS%3F></ccm-le-link>"
  },
  "quiz": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/quiz/layouts/weblysleek.css" ],
    "feedback": true,
    "start_button": true,
    "navigation": true,
    "anytime_finish": true,
    "random": true,
    "onfinish": { "restart": true },
    "placeholder": {
      "start": "Quiz starten",
      "question": "Frage",
      "prev": "Zurück",
      "submit": "Auflösung",
      "next": "Nächste Frage",
      "finish": "Beenden"
    },
    "questions": [
      {
        "text": "Was ist CSS?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "ein internetfähiges Gerät",
          "ein Programm",
          "ein Web-Service",
          "eine Auszeichnungssprache",
          "eine Forschungseinrichtung",
          "eine Programmiersprache",
          "eine Skriptspache",
          "eine Stylesheet-Sprache",
          "etwas essbares"
        ],
        "correct": 7
      },
      {
        "text": "Wofür wird CSS eingesetzt?",
        "input": "radio",
        "answers": [
          {
            "text": "für den Aufruf von Webseiten",
            "comment": "Zum Aufrufen von Webseiten nutzt man einen <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Webbrowser\">Webbrowser</a>."
          },
          {
            "text": "für die Beschreibung zusätzlicher Element-Eigenschaften",
            "comment": "Zur Beschreibung zusätzlicher Eigenschaften von Elementen werden in Auszeichnungssprachen <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Attribut_(Auszeichnungssprache)\">Attribute</a> genutzt."
          },
          {
            "text": "für die dynamische Manipulation von Webseiten",
            "comment": "Zur dynamischen Manipulation von Webseiten nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>."
          },
          {
            "text": "für die elektronische Datenverwaltung",
            "comment": "Zur elektronischen Datenverwaltung nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Datenbank\">Datenbanken</a>."
          },
          "für die Gestaltung von Layout und Design von Webseiten",
          {
            "text": "für die Programmierung von Webseiten",
            "comment": "CSS ist keine Programmiersprache, sondern eine reine <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Stylesheet-Sprache\">Stylesheet-Sprache</a>."
          },
          {
            "text": "für die Strukturierung digitaler Dokumente",
            "comment": "Für die Strukturierung digitaler Elemente nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Markup_Languag\">HTML</a>."
          },
          {
            "text": "für die Übertragung von Daten im Internet",
            "comment": "Im Internet nutzt man zur Übertragung von Daten üblicherweise das <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol\">Hypertext Transfer Protocol (HTTP)</a>."
          },
          "um morgens aus dem Bett zu kommen"
        ],
        "correct": 4
      },
      {
        "text": "Was ist das Grundprinzip der Trennung von Inhalt und Design?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b><br><br>Durch die Trennung von Inhalt und Design...",
        "input": "checkbox",
        "answers": [
          "ist das Layout einer Webseite austauschbar.",
          "ist die Webseite besser vor Angriffen geschützt.",
          "kann eine Webseite schneller geladen werden.",
          "können mehr Menschen gleichzeitig auf die Webseite zugreifen.",
          "können Webseiten einfacher veröffentlicht werden.",
          "lassen sich Webseiten mit weniger Aufwand pflegen.",
          "sind Webseiten leichter von Suchmaschinen auffindbar.",
          "werden gesetzliche Vorgaben erfüllt.",
          "wird der Webbrowser austauschbar."
        ],
        "correct": [ 0, 5 ]
      },
      {
        "text": "Wer arbeitet alles an der Weiterentwicklung von CSS?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          "das World Wide Web Consortium (W3C)",
          "die Europäische Union (EU)",
          "die offene Gesellschaft",
          "die Organisation des Nordatlantikvertrags (NATO)",
          "die Nationale Sicherheitsbehörde (NSA)",
          "die Vereinten Nationen (UN)",
          "die Web Hypertext Application Technology Working Group (WHATWG)",
          "Facebook",
          "Youtube"
        ],
        "correct": [ 0, 6 ]
      },
      {
        "text": "In welcher Version liegt CSS aktuell vor?",
        "input": "radio",
        "answers": [
          "CHSS",
          "CSS0",
          "CSS1",
          "CSS2",
          "CSS3",
          "CSS4",
          "CSS 5",
          "CSS 10",
          "CSS X"
        ],
        "correct": 4
      }
    ]
  }
};