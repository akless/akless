/**
 * @overview ccm instance configurations
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "configs.min.js" ] = {
  "le": {
    "topic": "HTML-Tags und Attribute",
    "innerHTML": "<script src=https://akless.github.io/ccm-components/quiz/ccm.quiz.min.js></script><script src=https://akless.github.io/ccm-components/cloze/ccm.cloze.min.js></script><h2>1. Motivation, Lernziele und Voraussetzungen</h2><p>In <a href=https://de.wikipedia.org/wiki/Hypertext_Markup_Language>HTML</a> gibt es eine Vielzahl von <a href=https://de.wikipedia.org/wiki/Tag_(Informatik)>Tags</a> und <a href=https://de.wikipedia.org/wiki/Attribut_(Auszeichnungssprache)>Attributen</a>. Je mehr sie davon beherrschen, desto vielfältiger sind Sie in der Lage, die Inhalte einer Webseite selbst zu strukturieren. Wenn Sie bereits wissen, was es mit HTML, Tags und Attributen auf sich hat, lernen Sie in dieser Lerneinheit, welche konkreten HTML-Tags und Attribute die <a href=https://de.wikipedia.org/wiki/Webbrowser>Webbrowser</a> nativ unterstützen, wofür man diese nutzt und wie man sie einsetzt. Je nach Interesse und verfügbarer Zeit bleibt es dabei Ihnen überlassen, ob Sie sich gezielt nur mit einer Teilmenge davon beschäftigen oder alle nativen Tags und Attribute in HTML beherrschen wollen.</p><ccm-le-audio src=https://akless.github.io/akless/we/tags-attribute/motivation.mp3></ccm-le-audio><h3>1.1 Lernziele</h3><ul><li>Ich kenne die nativen Tags und Attribute in HTML und weiß, wofür man sie nutzt und bin in der Lage sie einzusetzen.</ul><h3>1.2 Voraussetzungen</h3><ul><li>Ich weiß grob, was das Web, ein Webbrowser und eine Webseite ist.<li>Ich weiß, was HTML ist und wofür es eingesetzt wird.<li>Ich weiß, in welcher Version HTML aktuell vorliegt.<li>Ich weiß, was HTML-Tags und HTML-Attribute sind, wofür man sie nutzt und wie man sie einsetzt.</ul><h2>2. Inhalt:<ccm-le-topic></ccm-le-topic></h2><ccm-le-video src=https://akless.github.io/akless/we/tags-attribute/screencast.mp4></ccm-le-video><h3>2.1 HTML-Nachschlagewerk</h3><p>Im <a href=https://de.wikipedia.org/wiki/World_Wide_Web>Web</a> gibt es zahlreiche Referenzen, die eine vollständige Liste aller HTML-Tags und Attribute enthalten. Die aus meiner Sicht beste und kompakteste Referenz zu HTML ist die von <a href=https://www.w3schools.com>W3School</a>, die sich auch bestens als Nachschlagewerk eignet und für jeden HTML-Tag alle Infos dazu enthält, wie und wofür man den jeweiligen Tag nutzt.</p><ccm-le-img src=https://akless.github.io/akless/we/tags-attribute/image-1.jpg></ccm-le-img><h3>2.2 Liste aller HTML-Tags</h3><p>Die HTML-Referenz von W3School enthält eine komplette Liste aller nativen HTML-Tags. Am HTML5-Symbol ist erkennbar, dass ein Tag erst mit HTML5 neu eingeführt wurde. Umgekehrt sind auch Tags, die es in früheren HTML-Versionen gegeben hat, aber seit HTML5 nicht mehr unterstützt werden, ebenfalls als solche markiert.</p><ccm-le-img src=https://akless.github.io/akless/we/tags-attribute/image-2.jpg></ccm-le-img><h3>2.3 Infos zu einem HTML-Tag</h3><p>Durch einen Klick auf einen HTML-Tag erhält man weitere Informationen. Am Anfang bekommt man direkt ein kurzes ausführbares Beispiel, das eine typische Anwendung des HTML-Tags zeigt.</p><ccm-le-img src=https://akless.github.io/akless/we/tags-attribute/image-3.jpg></ccm-le-img><p>Über den \"Try it Yourself\"-Button kann man das Beispiel live editieren und ausprobieren.</p><ccm-le-img src=https://akless.github.io/akless/we/tags-attribute/image-4.jpg></ccm-le-img><p>Nach dem Beispiel folgt kurz und kompakt eine Beschreibung, wofür man den Tag nutzt und wie man ihn einsetzt, sowie wichtige Hinweise und Tipps. Anschließend folgt eine Tabelle, die zeigt, welche Webbrowser den Tag unterstützen. In der Regel ist dies bei allen Webbrowsern der Fall.</p><ccm-le-img src=https://akless.github.io/akless/we/tags-attribute/image-5.jpg></ccm-le-img><h3>2.4 Liste aller Attribute zu einem HTML-Tag</h3><p>Weiter unten in den Informationen zu einem konkreten HTML-Tag folgt eine Auflistung aller Attribute, die für den Tag gesetzt werden können. Die Liste ist nach dem selben Schema aufgebaut, wie die der HTML-Tags. Auch hier kann jedes Attribut angeklickt und sich weiter darüber informiert werden.</p><ccm-le-img src=https://akless.github.io/akless/we/tags-attribute/image-6.jpg></ccm-le-img><h3>2.5 Aufruf zur Tat</h3><p>Sie haben nun alle Informationen, die Sie benötigen, um sich die nativen Tags und deren Attribute in HTML anzueignen. Nehmen Sie sich die Zeit sich mit den Möglichkeiten, die diese Ihnen bieten, zu beschäftigen und diese auch selbst auszuprobieren. Beachten Sie insbesondere, dass sie dadurch unter anderem in die Lage versetzt werden in Ihre Webseite mittels HTML Audios (<a href=https://www.w3schools.com/tags/tag_audio.asp>&lt;audio></a>), Bilder (<a href=https://www.w3schools.com/tags/tag_img.asp>&lt;img></a>), Listen (<a href=https://www.w3schools.com/tags/tag_ol.asp>&lt;ol></a> und <a href=https://www.w3schools.com/tags/tag_ul.asp>&lt;ul></a>), Tabellen (<a href=https://www.w3schools.com/tags/tag_table.asp>&lt;table></a>), Videos (<a href=https://www.w3schools.com/tags/tag_video.asp>&lt;video></a>), und vieles mehr, einzubauen.<h2>3. Selbsttest</h2><h3>3.1 Quiz</h3><ccm-quiz key='[\"ccm.get\",\"https://akless.github.io/akless/we/tags-attribute/configs.min.js\",\"quiz\"]'></ccm-quiz><h3>3.2 Lückentext: Einbettung von Audios</h3><ccm-cloze key='[\"ccm.get\",\"https://akless.github.io/akless/we/tags-attribute/configs.min.js\",\"cloze-audio\"]'></ccm-cloze><h3>3.3 Lückentext: Einbettung von Bildern</h3><ccm-cloze key='[\"ccm.get\",\"https://akless.github.io/akless/we/tags-attribute/configs.min.js\",\"cloze-image\"]'></ccm-cloze><h3>3.4 Lückentext: Einbettung von Listen</h3><ccm-cloze key='[\"ccm.get\",\"https://akless.github.io/akless/we/tags-attribute/configs.min.js\",\"cloze-list\"]'></ccm-cloze><h3>3.5 Lückentext: Einbettung von Tabellen</h3><ccm-cloze key='[\"ccm.get\",\"https://akless.github.io/akless/we/tags-attribute/configs.min.js\",\"cloze-table\"]'></ccm-cloze><h3>3.6 Lückentext: Einbettung von Videos</h3><ccm-cloze key='[\"ccm.get\",\"https://akless.github.io/akless/we/tags-attribute/configs.min.js\",\"cloze-video\"]'></ccm-cloze><h2>4. Alternative Materialien</h2><h3>4.1 Referenz:HTML | SELFHTML-Wiki</h3><p>HTML-Referenz der Internet-Dokumentation <a href=https://de.wikipedia.org/wiki/SELFHTML>SELFHTML</a>.</p><ccm-le-link href=https://wiki.selfhtml.org/wiki/Referenz:HTML></ccm-le-link><h3>4.2 Element - HTML | MDN</h3><p>HTML-Referenz aus dem Hause <a href=https://de.wikipedia.org/wiki/Mozilla_Foundation>Mozilla</a>, den Machern des Webbrowsers <a href=https://de.wikipedia.org/wiki/Mozilla_Firefox>Firefox</a>.</p><ccm-le-link href=https://developer.mozilla.org/de/docs/Web/HTML/Element></ccm-le-link>"
  },
  "quiz": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/quiz/layouts/weblysleek.css" ],
    "feedback": true,
    "start_button": true,
    "navigation": true,
    "anytime_finish": true,
    "encode": true,
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
        "text": "Welcher der HTML-Tags dient zur Einbettung von Audios?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": 0
      },
      {
        "text": "Welcher der HTML-Tags dient zur Einbettung von Bildern?",
        "input": "radio",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": 1
      },
      {
        "text": "Welche der HTML-Tags dienen zur Darstellung von Listen?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": [ 2, 3, 7 ]
      },
      {
        "text": "Welche der HTML-Tags dienen zur Darstellung von Tabellen?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": [ 4, 5, 6 ]
      },
      {
        "text": "Welcher der HTML-Tags dient zur Einbettung eines Videos?",
        "input": "radio",
        "answers": [
          "<audio>",
          "<img>",
          "<li>",
          "<ol>",
          "<table>",
          "<td>",
          "<tr>",
          "<ul>",
          "<video>"
        ],
        "correct": 8
      }
    ]
  },
  "cloze-audio": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/cloze/layouts/weblysleek.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML ein Audio einzubetten. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags und Attribute, so dass das Audio mit der Webadresse <a href=https://akless.github.io/akless/we/audio/LE06.mp3 target=_blank>https://akless.github.io/akless/we/audio/LE06.mp3</a> eingebettet wird und der Webnutzer das Audio über Buttons wie \"Play\" und \"Pause\" selbst steuern kann.</p><code>&lt;!DOCTYPE html><br>Audio:<br>&lt;[[audio]] [[controls]]><br>  &lt;[[source]] [[src]]=\"https://akless.github.io/akless/we/audio/LE06.mp3\"><br>&lt;/[[audio]]></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "cloze-image": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/cloze/layouts/weblysleek.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML ein Bild einzubetten. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags und Attribute, so dass das Bild mit der Webadresse <a href=https://akless.github.io/akless/we/image/poster.jpg target=_blank>https://akless.github.io/akless/we/image/poster.jpg</a> mit einer Breite von 320 und einer Höhe von 180 eingebettet wird.</p><code>&lt;!DOCTYPE html><br>Bild: &lt;[[img]] [[src]]=\"https://akless.github.io/akless/we/image/poster.jpg\" [[width]]=\"320\" [[height]]=\"180\"></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "cloze-list": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/cloze/layouts/weblysleek.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML Listen umzusetzen. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags, so dass erst eine ungeordnete, dann eine geornete Liste umgesetzt wird.</p><code>&lt;!DOCTYPE html><br>Ungeordnete Liste:<br>&lt;[[ul]]><br>  &lt;[[li]]>Apfel<br>  &lt;[[li]]>Birne<br>  &lt;[[li]]>Orange<br>&lt;/[[ul]]><br><br>Geordnete Liste:<br>&lt;[[ol]]><br>  &lt;[[li]]>Einschalten<br>  &lt;[[li]]>Benutzen<br>  &lt;[[li]]>Ausschalten<br>&lt;/[[ol]]></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "cloze-table": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/cloze/layouts/weblysleek.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML Tabellen umzusetzen. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags, so dass eine Tabelle mit 2 Zeilen und 2 Spalten umgesetzt wird, wobei die erste Zeile die Überschrift für jede Spalte enthält.</p><code>&lt;!DOCTYPE html><br>Tabelle:<br>&lt;[[table]]><br>  &lt;[[tr]]><br>    &lt;[[th]]>Obst&lt;/[[th]]><br>    &lt;[[th]]>Preis pro Stück&lt;/[[th]]><br>  &lt;/[[tr]]><br>  &lt;[[tr]]><br>    &lt;[[td]]>Apfel&lt;/[[td]]><br>    &lt;[[td]]>60 Cent&lt;/[[td]]><br>  &lt;/[[tr]]><br>&lt;/[[table]]></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  },
  "cloze-video": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/cloze/layouts/weblysleek.css" ],
    "start_button": true,
    "feedback": true,
    "text": "<p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind in HTML ein Video einzubetten. Ergänzen Sie hiezu im Lückentext die Namen der fehlenden HTML-Tags und Attribute, so dass das Video mit der Webadresse <a href=https://akless.github.io/akless/we/video/LE06.mp4 target=_blank>https://akless.github.io/akless/we/video/LE06.mp4</a> mit einer Breite von 640 eingebettet wird und der Webnutzer das Video über Buttons wie \"Play\" und \"Pause\" selbst steuern kann.</p><code>&lt;!DOCTYPE html><br>Video:<br>&lt;[[video]] [[width]]=\"640\" [[controls]]><br>  &lt;[[source]] [[src]]=\"https://akless.github.io/akless/we/video/LE06.mp4\"><br>&lt;/[[video]]></code><p>Klicken Sie, wenn Sie fertig, sind auf \"Abschicken\".<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  }
};
