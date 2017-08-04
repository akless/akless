/**
 * @overview ccm instance configurations
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "configs.min.js" ] = {
  "le": {
    "topic": "Was ist ein HTML-Attribut?",
    "innerHTML": "<script src=https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-1.0.0.min.js></script><script src=https://akless.github.io/ccm-components/cloze/versions/ccm.cloze-1.0.0.min.js></script><h2>1. Motivation, Lernziele und Voraussetzungen</h2><p>In <a href=https://de.wikipedia.org/wiki/Hypertext_Markup_Language>HTML</a> können wir über die HTML-<a href=https://de.wikipedia.org/wiki/Tag_(Informatik)>Tags</a> die Inhalte unserer <a href=https://de.wikipedia.org/wiki/Webseite>Webseite</a> strukturieren. Dabei können die HTML-Tags auch sogenannte <a href=https://de.wikipedia.org/wiki/Attribut_(Auszeichnungssprache)>Attribute</a> aufweisen. Über die Attribute eines HTML-Tags können wir noch weitreichender steuern, wie die durch den HTML-Tag markierten Inhalte vom <a href=https://de.wikipedia.org/wiki/Webbrowser>Webbrowser</a> interpretiert werden. In dieser Lerneinheit lernen Sie, was ein HTML-Attribut ist, wofür man es nutzt und wie man es einsetzt. Zu diesen Zweck lernen Sie beispielhaft anhand des HTML-Tags zur Markierung von <a href=https://de.wikipedia.org/wiki/Hyperlink>Hyperlinks</a> dessen konkrete HTML-Attribute zur Angabe eines Verweisziels, eines <a href=https://de.wikipedia.org/wiki/Tooltip>Tooltips</a> und zur Markierung eines <a href=https://de.wikipedia.org/wiki/Download>Downloads</a> kennen. Voraussetzung ist, dass Sie bereits wissen, was ein HTML-Tag ist, wofür man ihn nutzt und wie man ihn einsetzt.</p><ccm-le-audio src=https://akless.github.io/akless/we/html-attribut/motivation.mp3></ccm-le-audio><h3>1.1 Lernziele</h3><ul><li>Ich weiß, was ein HTML-Attribut ist, wofür man es nutzt und wie man es einsetzt.<li>Ich kenne den HTML-Tag zum Markieren von Hyperlinks und dessen Attribute<ul><li>zur Angabe eines Verweisziels,<li>zur Angabe eines Tooltips und<li>zur Markierung eines Downloads</ul>und bin in der Lage für diesen HTML-Tag diese Attribute einzusetzen.</ul><h3>1.2 Voraussetzungen</h3><ul><li>Ich weiß grob, was ein Webbrowser, eine Webseite und eine <a href=https://de.wikipedia.org/wiki/Webadresse>Webadresse</a> ist.<li>Ich weiß grob, was ein Hyperlink, ein Download und ein Tooltip ist.<li>Ich weiß, was HTML ist und wofür es eingesetzt wird.<li>Ich weiß, was ein HTML-Tag ist, wofür man ihn nutzt und wie man ihn einsetzt.</ul><h2>2. Inhalt:<ccm-le-topic></ccm-le-topic></h2><ccm-le-video src=https://akless.github.io/akless/we/html-attribut/screencast.mp4></ccm-le-video><h3>2.1 Was ist ein HTML-Attribut?</h3><p>In HTML können Tags auch Attribute aufweisen. Bei einem Attribut handelt es sich um eine Eigenschaft, mit der ein HTML-Tag angereichert werden kann, meist zusammen mit einem konkreten Wert. Über Attribute können einem HTML-Tag somit zusätzliche Informationen mitgegeben werden, die dann beeinflussen, wie der durch den HTML-Tag markierte Inhalt vom Webbrowser interpretiert und in der Webseite dargestellt wird.</p><ccm-le-img src=https://akless.github.io/akless/we/html-attribut/image-1.jpg></ccm-le-img><h3>2.2 HTML-Tag für Hyperlinks</h3><p>Betrachten wir die Nutzung von HTML-Attributen konkret am Beispiel eines Hyperlinks. Zu diesem Zweck führen wir zunächst einmal den HTML-Tag zur Markierung von Hyperlinks ein. Hierzu dient in HTML der <a href=hhttps://wiki.selfhtml.org/wiki/HTML/Textauszeichnung/a>&lt;a></a>-Tag. Das \"a\" steht dabei für \"anchor element\", was ins deutsche übersetzt \"Ankerelement\" bedeutet. Der Begriff \"Anker\" steht symbolisch für das Verweisziel, also die Stelle, an die der Webseitennutzer, durch einen Klick auf die als Hyperlink markierte Textstelle, gelangt.</p><ccm-le-img src=https://akless.github.io/akless/we/html-attribut/image-2.jpg></ccm-le-img><h3>2.3 Festlegung des Verweisziels</h3><p>Damit ein Hyperlink funktioniert, muss für den &lt;a>-Tag über das HTML-Attribut \"<a href=https://wiki.selfhtml.org/wiki/HTML/Textauszeichnung/a#href>href</a>\" das Verweisziel angegeben werden. Bei dem Verweisziel handelt es sich im einfachsten Fall um die Webadresse von einer Webseite oder beispielsweise von einem Bild. Durch einen Klick auf den Hyperlink wird dann das Verweisziel aufgerufen.</p><ccm-le-img src=https://akless.github.io/akless/we/html-attribut/image-3.jpg></ccm-le-img><h3>2.4 Syntax eines HTML-Attributs</h3><p>Ein HTML-Attribut beginnt, getrennt mit einem Leerzeichen vom Namen des HTML-Tags, mit dem Namen des Attributs. Wird dem Attibut auch ein konkreter Wert zugewiesen, folgt nach dem Attributnamen dann ein \"=\"-Zeichen, gefolgt von zwei doppelten Anführungszeichen, zwischen denen dann der konkrete Wert steht. Statt den doppelten können in HTML auch einfache Anführungszeichen verwendet werden, üblich sind aber die doppelten. Die Anführungszeichen können in HTML5 auch ganz weggelassen werden, was aber unter Umständen zu Problemen führen kann und deshalb eher davon abzuraten ist.<h3>2.5 Tooltip für den Hyperlink</h3><p>Ein HTML-Tag kann beliebig viele Attribute aufweisen. Weitere Attribute werden dann mit einem Leerzeichen getrennt notiert. Beispielsweise kann über ein weiteres Attribut \"<a href=https://wiki.selfhtml.org/wiki/HTML/Universalattribute#title>title</a>\" ein Tooltip definiert werden, der erscheint, wenn der Mauszeiger etwas länger über dem vom HTML-Tag markierten Inhalt positioniert wird.</p><ccm-le-img src=https://akless.github.io/akless/we/html-attribut/image-4.jpg></ccm-le-img><h3>2.6 Globale Attribute</h3><p>Anders als bei \"href\" handelt es sich bei \"title\" um ein <a href=https://wiki.selfhtml.org/wiki/HTML/Universalattribute>globales Attribut</a>. Das bedeutet, dass es für fast jeden HTML-Tag gesetzt werden kann. Das \"href\"-Attribut hingegen ist ein Attribut, das nur speziell vom &lt;a>-Tag unterstützt wird.<h3>2.7 Download des Verweisziels</h3><p>In HTML gibt es auch einige wenige Attribute, die keine Zuweisung eines konkreten Wertes benötigen. Als Beispiel kann für den Hyperlink noch das Attribut \"download\" gesetzt werden. Das Attribut bewirkt, dass bei einem Klick auf den Hyperlink das Verweisziel nicht geöffnet, sondern heruntergeladen wird. Verweist der Hyperlink also auf ein Bild, kann man dieses dann über den Hyperlink bequem downloaden.</p><ccm-le-img src=https://akless.github.io/akless/we/html-attribut/image-5.jpg></ccm-le-img><h2>3. Selbsttest</h2><h3>3.1 Quiz</h3><ccm-quiz-1-0-0 key='[\"ccm.get\",\"https://akless.github.io/akless/we/html-attribut/configs.min.js\",\"quiz\"]'></ccm-quiz-1-0-0><h3>3.2 Lückentext</h3><ccm-cloze-1-0-0 key='[\"ccm.get\",\"https://akless.github.io/akless/we/html-attribut/configs.min.js\",\"cloze\"]'></ccm-cloze-1-0-0><h2>4. Alternative Materialien</h2><h3>4.1 Attribut (Auszeichnungssprache) | Wikipedia</h3><p>Die deutsche <a href=https://de.wikipedia.org/wiki/Wikipedia>Wikipedia</a>-Seite zu HTML-Attributen.</p><ccm-le-link href=https://www.w3schools.com/html/html_attributes.asp></ccm-le-link><h3>4.2 HTML Attributes | W3Schools</h3><p>Eine englische Kurzeinführung in HTML-Attribute von <a href=https://en.wikipedia.org/wiki/W3Schools>W3Schools</a>.</p><ccm-le-link href=https://www.w3schools.com/html/html_attributes.asp></ccm-le-link><h3>4.3 HTML: Images | Intro to HTML | Khan Academy</h3><p>Englisches Lernvideo der <a href=https://de.wikipedia.org/wiki/Khan_Academy>Khan Academy</a> mit Video und Live-Editor, in dem am Beisiel des HTML-Tags zur Einbettung von Bildern auch erstmals Attribute genutzt werden.</p><ccm-le-link href=https://www.khanacademy.org/computing/computer-programming/html-css/intro-to-html/p/html-images></ccm-le-link>",
    "css_file": "https://akless.github.io/ccm-components/le/layouts/weblysleek.css",
    "font": "https://akless.github.io/ccm-components/libs/weblysleekui/font.css",
    "logo_file": "https://akless.github.io/akless/we/logo.png",
    "poster_file": "https://akless.github.io/akless/we/poster.jpg",
    "content": [ "ccm.component", "https://akless.github.io/ccm-components/content/versions/ccm.content-1.0.0.min.js" ],
    "topic_prefix": "Lerneinheit:",
    "link_prefix": "Link: ",
    "author": "André Kless"
  },
  "quiz": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/quiz/resources/weblysleek.css" ],
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
        "text": "Was ist ein HTML-Attribut?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "ein Auszeichnungselement",
          "ein Befehl",
          "ein Feiertag",
          "ein Platzhalter",
          "ein Sonderzeichen",
          "eine Anweisung",
          "eine Eigenschaft",
          "eine Instruktion",
          "eine Variable"
        ],
        "correct": 6
      },
      {
        "text": "Wofür nutzt man ein HTML-Attribut?",
        "input": "radio",
        "answers": [
          {
            "text": "für den Aufruf von Webseiten",
            "comment": "Zum Aufrufen von Webseiten nutzt man einen <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Webbrowser\">Webbrowser</a>."
          },
          {
            "text": "für die dynamische Manipulation von Webseiten",
            "comment": "Zur dynamischen Manipulation von Webseiten nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>."
          },
          {
            "text": "für die elektronische Datenverwaltung",
            "comment": "Zur elektronischen Datenverwaltung nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Datenbank\">Datenbanken</a>."
          },
          {
            "text": "für die Gestaltung von Layout und Design von Webseiten",
            "comment": "Zur Gestaltung von Layout und Design einer Webseite nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Cascading_Style_Sheets\">Cascading Style Sheets (CSS)</a>."
          },
          {
            "text": "für die Programmierung von Webseiten",
            "comment": "HTML ist eine reine <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Auszeichnungssprache\">Auszeichnungssprache</a>. Das Einsetzen von HTML-Tags und Attributen ist kein Programmieren."
          },
          {
            "text": "für die Strukturierung digitaler Dokumente",
            "comment": "Für die Strukturierung digitaler Dokumente nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Markup_Language\">HTML</a>."
          },
          {
            "text": "für die Übertragung von Daten im Internet",
            "comment": "Im Internet nutzt man zur Übertragung von Daten üblicherweise das <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol\">Hypertext Transfer Protocol (HTTP)</a>."
          },
          "um morgens aus dem Bett zu kommen",
          {
            "text": "zur Beschreibung zusätzlicher Eigenschaften von HTML-Tags",
            "comment": "Ein HTML-Attribut ist eine Eigenschaft, die einem HTML-Tag zur Angabe zusätzlicher Informationen zuordenbar ist."
          }
        ],
        "correct": 8
      },
      {
        "text": "Welcher HTML-Tag dient zum Markieren von Hyperlinks?",
        "input": "radio",
        "encode": true,
        "answers": [
          "<a>",
          "<body>",
          "<br>",
          "<head>",
          "<html>",
          "<img>",
          "<meta>",
          "<p>",
          "<title>"
        ],
        "correct": 0
      },
      {
        "text": "Welches HTML-Attribut dient zur Angabe eines Verweisziels?",
        "input": "radio",
        "encode": true,
        "answers": [
          "alt",
          "download",
          "href",
          "link",
          "source",
          "src",
          "target",
          "title",
          "tooltip"
        ],
        "correct": 2
      },
      {
        "text": "Welches HTML-Attribut dient zur Angabe eines Tooltips?",
        "input": "radio",
        "encode": true,
        "answers": [
          "alt",
          "download",
          "href",
          "link",
          "source",
          "src",
          "target",
          "title",
          "tooltip"
        ],
        "correct": 7
      },
      {
        "text": "Welches HTML-Attribut dient zur Markierung eines Downloads?",
        "input": "radio",
        "encode": true,
        "answers": [
          "alt",
          "download",
          "href",
          "link",
          "source",
          "src",
          "target",
          "title",
          "tooltip"
        ],
        "correct": 1
      },
      {
        "text": "Wie setzt man ein HTML-Attribut ein?",
        "description": "Geben Sie für die folgenden HTML-Codes an, in welchen davon die enthaltenen HTML-Attribute korrekt eingesetzt werden.<br><br><b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "encode": true,
        "answers": [
          {
            "text": "<a href='https://www.google.de'>Klick</a>",
            "comment": "In HTML-Attributen können auch einfache statt doppelte Anführungszeichen verwendet werden. Üblich sind Doppelte."
          },
          "<a href=\"https://www.google.de\">Klick</a>",
          "<a href=\"https://www.google.de\" title=\"Hier klicken\">Klick</a>",
          "<a href=\"https://www.google.de\" download>Klick</a>",
          {
            "text": "<a href=\"https://www.google.de\", download>Klick</a>",
            "comment": "Mehrere Attribute eines HTML-Tags werden nur mit einem Leerzeichen voneinander getrennt."
          },
          {
            "text": "<a href:\"https://www.google.de\"></a>",
            "comment": "Für die Zuweisung eines Wertes wird bei einem HTML-Attribut ein \"=\"-Zeichen und kein Doppelpunkt verwendet."
          },
          {
            "text": "<a href=https://www.google.de>Klick</a>",
            "comment": "Bei HTML5-Attributen kann man doppelte Anführungszeichen auch weglassen, was aber zu Problemen führen kann."
          },
          {
            "text": "<a src=\"https://www.google.de\">Klick</a>",
            "comment": "Für <a>-Tags gibt es kein \"src\"-Attribut."
          },
          {
            "text": "<a title=\"Herunterladen\" download>Klick</a>",
            "comment": "Hier fehlt das nicht optionale \"href\"-Attribut zur Angabe des Verweisziels."
          }
        ],
        "correct": [ true, true, true, true, false, false, true, false, false ]
      }
    ]
  },
  "cloze": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/cloze/resources/weblysleek.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML für einen Hyperlink ein Verweisziel, einen Tooltip und ein Download festzulegen. Ergänzen Sie hiezu im Lückentext für den Hyperlink über die Eingabefelder die entsprechenden Attribute und Zeichen, so dass der Hyperlink auf das Bild mit der Webadresse \"https://akless.github.io/akless/we/image/logo.png\" verweist, über einen Tooltip mit dem Inhalt \"Bild herunterladen\" verfügt und das über den Hyperlink das Bild nicht geöffnet, sondern heruntergeladen wird.</p><code>&lt;!DOCTYPE html><br>Hyperlink: &lt;a [[href=]]\"https://akless.github.io/akless/we/image/logo.png\" [[title=]]\"Bild herunterladen\" [[download]]>Projektlogo&lt;/a></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  }
};
