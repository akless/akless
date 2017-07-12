/**
 * @overview ccm instance configurations
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "configs.min.js" ] = {
  "le": {
    "topic": "Was ist ein HTML-Tag?",
    "innerHTML": "<script src=https://akless.github.io/ccm-components/quiz/ccm.quiz.min.js></script><script src=https://akless.github.io/ccm-components/cloze/ccm.cloze.min.js></script><h2>1. Motivation, Lernziele und Voraussetzungen</h2><p>Nach dem Erstellen einer neuen <a href=https://de.wikipedia.org/wiki/Hypertext_Markup_Language>HTML</a>-<a href=https://de.wikipedia.org/wiki/Datei>Datei</a> und der <a href=https://de.wikipedia.org/wiki/Dokumenttypdefinition>Dokumenttyp-Deklaration</a> in deren erster Zeile, können wir in den darauffolgenden Zeilen bereits die ersten Inhalte für die <a href=https://de.wikipedia.org/wiki/Webseite>Webseite</a> angeben und uns diese dann in einem <a href=https://de.wikipedia.org/wiki/Webbrowser>Webbrowser</a> auch darstellen lassen. Wenn Sie diese Schritte bereits beherrschen, können wir als nächstes die Frage stellen, wie die Inhalte der Webseite nun mit Hilfe von HTML auch strukturiert werden können und wie neben einfachem Text auch andere Inhalte, wie z.B. Bilder, Audios und Videos mittels HTML in die Webseite einbettbar sind. Voraussetzung dafür ist es, sich mit den Befehlen in HTML, den sogenannten HTML-<a href=https://de.wikipedia.org/wiki/Tag_(Informatik)>Tags</a>, auszukennen. In dieser Lerneinheit lernen Sie daher, was ein HTML-Tag ist, woraus er besteht, wofür man ihn nutzt und wie man ihn einsetzt. Dabei werden Sie bereits die konkreten HTML-Tags zur Markierung von Überschriften, Paragraphen und Zeilenumbrüchen kennenlernen und wie man <a href=https://de.wikipedia.org/wiki/Kommentar_(Programmierung)>Kommentare</a> in HTML schreibt.</p><ccm-le-audio src=https://akless.github.io/akless/we/html-tag/motivation.mp3></ccm-le-audio><h3>1.1 Lernziele</h3><ul><li>Ich weiß, was ein HTML-Tag ist, wofür man ihn nutzt, woraus er besteht und wie man ihn einsetzt.<li>Ich kenne die HTML-Tags zum Markieren von Überschriften, Paragraphen und Zeilenumbrüchen und bin in der Lage diese einzusetzen.<li>Ich weiß wie man einen Kommentar in HTML schreibt, wofür man ihn einsetzt und bin in der Lage Kommentare in HTML einzusetzen.</ul><h3>1.2 Voraussetzungen</h3><ul><li>Ich weiß grob, was ein Webbrowser und eine Webseite ist.<li>Ich weiß, was HTML ist und wofür es eingesetzt wird.<li>Ich bin in der Lage eine Webseite mit dem Inhalt \"Hallo Welt!\" in HTML zu erstellen.</ul><h2>2. Inhalt:<ccm-le-topic></ccm-le-topic></h2><ccm-le-video src=https://akless.github.io/akless/we/html-tag/screencast.mp4></ccm-le-video><h3>2.1 Was ist ein HTML-Tag?</h3><p>In der <a href=https://de.wikipedia.org/wiki/Auszeichnungssprache>Auszeichnungssprache</a> HTML sind die HTML-Tags die <a href=https://de.wikipedia.org/wiki/Auszeichnungselement>Auszeichnungselemente</a>. Innerhalb einer HTML-Datei können mit HTML-Tags die Inhalte der Webseite strukturiert und neben Text auch andere Inhalte eingebettet werden. Mit ihnen kann beispielsweise markiert werden, welcher Text ein Paragraph und welcher eine Überschrift ist.</p><ccm-le-img src=https://akless.github.io/akless/we/html-tag/image-1.jpg></ccm-le-img><p>In diesem Video verwende ich den kostenfreien Online-Quelltext-Editor <a href=https://thimble.mozilla.org/de/ >Thimble</a>, der weder die <a href=https://de.wikipedia.org/wiki/Installation_(Computer)>Installation</a> eines <a href=https://de.wikipedia.org/wiki/Computerprogramm>Programms</a>, noch ein bestimmtes <a href=https://de.wikipedia.org/wiki/Betriebssystem>Betriebssystem</a> voraussetzt und mir zu Änderungen in HTML direkt eine Vorschau der Webseite anzeigt.<h3>2.2 Syntax eines HTML-Tags</h3><p>Ein HTML-Tag beginnt mit einer öffnenden spitzen Klammer, gefolgt von dem Namen des HTML-Tags und abschließend einer schließenden spitzen Klammer. Im Beispiel sieht man bereits, dass für die Markierung einer Überschrift ein <a href=https://wiki.selfhtml.org/wiki/HTML/Textstrukturierung/Überschrift>&lt;h1></a>-Tag und für Paragraphen ein <a href=https://wiki.selfhtml.org/wiki/HTML/Textstrukturierung/p>&lt;p></a>-Tag verwendet wird.<h3>2.3 Öffnende und schließende HTML-Tags</h3><p>Zu den meisten HTML-Tags gibt es eine öffnende und schließende Variante, wie man bereits am Beispiel von Überschrift und Paragraph erkennen kann. Bei der Überschrift wird dadurch beispielsweise markiert, wo die Überschrift anfängt und wo sie endet bzw. welcher Text genau später vom Webbrowser als Überschrift zu <a href=https://de.wikipedia.org/wiki/Interpreter>interpretieren</a> ist.<p>Um beide Varianten zu unterscheiden, hat der schließende HTML-Tag zusätzlich, direkt nach der öffnenden spitzen Klammer, also als zweites Zeichen, einen Schrägstrich \"/\".<h3>2.4 Nicht-schließende HTML-Tags</h3><p>Es gibt aber auch wenige HTML-Tags, für die es keinen schließenden HTML-Tag gibt, sondern nur einen Öffnenden. Solche HTML-Tags nennt man auch <a href=https://wiki.selfhtml.org/wiki/Inhaltsleer>inhaltsleer</a>. Dies gilt z.B. für einen <a href=https://wiki.selfhtml.org/wiki/HTML/Textauszeichnung/br>&lt;br></a>-Tag, der lediglich einen Zeilenumbruch angibt und für den ein schließender HTML-Tag daher wenig Sinn macht.</p><ccm-le-img src=https://akless.github.io/akless/we/html-tag/image-2.jpg></ccm-le-img><h3>2.5 Strukturierung des HTML-Codes</h3><p>Für den Webbrowser macht es übrigens keinen Unterschied, wie wir den HTML-Code strukturieren, er könnte genauso gut auch in einer einzigen langen Zeile stehen.</p><ccm-le-img src=https://akless.github.io/akless/we/html-tag/image-3.jpg></ccm-le-img><p>Damit der HTML-Code aber für das menschliche Auge möglichst gut lesbar ist, wird er üblicherweise, wie vorher gezeigt, mit Zeilenumbrüchen und Leerzeichen eingerückt. Überprüfen Sie am besten direkt immer selbst, wie der Webbrowser die Inhalte der Webseite nach einer Änderung des HTML-Codes darstellt, indem Sie Ihre Änderungen speichern und die HTML-Datei erneut mit dem Webbrowser öffnen bzw. dort neu laden. Beim Online-Quelltext-Editor Thimble genügt ein Klick auf \"Vorschau aktualisieren\".<h3>2.6 Überschriftenebenen</h3><p>Zum Markieren von Überschriften gibt es in HTML neben dem &lt;h1>-Tag noch die HTML-Tags &lt;h2>, &lt;h3>, &lt;h4>, &lt;h5> und &lt;h6>. Jeder dieser Tags steht für eine Überschriftenebene, von denen es somit insgesamt 6 Ebenen gibt. Der von uns bereits verwendete &lt;h1>-Tag steht für die oberste Überschriftenebene. Die Überschrift zu einem Kapitel würde man also beispielsweise mit einem &lt;h1>-Tag markieren und die der Unterkapitel mit einem &lt;h2>-Tag, usw..</p><ccm-le-img src=https://akless.github.io/akless/we/html-tag/image-4.jpg></ccm-le-img><p>Experimentieren Sie ruhig etwas mit diesen HTML-Tags und schauen Sie sich das Ergebnis im Webbrowser an.<h3>2.7 Kommentare</h3><p>In HTML gibt es die Möglichkeit an beliebigen Stellen im HTML-Code Kommentare zu hinterlegen. Alles was innerhalb eines Kommentars steht wird vom Webbrowser nicht interpretiert und somit ignoriert. Dies kann nützlich sein, um individuelle Anmerkungen im Code zu hinterlegen oder bestimmte Code-Bereiche, die kurzzeitig nicht benötigt werden, gezielt \"auszukommentieren\". Das bedeutet also, diese Bereiche nicht zu löschen, sondern sie nur ignorieren zu lassen, um sie später leicht jederzeit wiederherherstellen zu können.</p><ccm-le-img src=https://akless.github.io/akless/we/html-tag/image-5.jpg></ccm-le-img><h3>2.8 Syntax eines HTML-Kommentars</h3><p>Ein Kommentar beginnt in HTML mit einer öffnenden spitzen Klammer, gefolgt von einem Ausrufezeichen und zwei Trennstrichen (&lt;!--) und endet mit zwei Trennstrichen gefolgt von einer schließenden spitzen Klammer (-->).<p>Vor allem bei umfangreichen Webseiten sind Kommentare nützlich, um HTML-Code mit Anmerkungen anzureichern, die helfen, sich in dem Quelltext schneller zurechtzufinden.<h2>3. Selbsttest</h2><h3>3.1 Quiz</h3><ccm-quiz key='[\"ccm.get\",\"https://akless.github.io/akless/we/html-tag/configs.min.js\",\"quiz\"]'></ccm-quiz><h3>3.2 Lückentext</h3><ccm-cloze key='[\"ccm.get\",\"https://akless.github.io/akless/we/html-tag/configs.min.js\",\"cloze\"]'></ccm-cloze><h2>4. Alternative Materialien</h2><h3>4.1 HTML/Regeln/Textauszeichnung | SELFHTML-Wiki</h3><p>Einführung in Elemente und Tags in HTML aus der Internet-Dokumentation <a href=https://de.wikipedia.org/wiki/SELFHTML>SELFHTML</a>.</p><ccm-le-link href=https://wiki.selfhtml.org/wiki/HTML/Regeln/Textauszeichnung#Elemente_und_Tags_in_HTML></ccm-le-link><h3>4.2 HTML-Grundkurs: Was ist ein HTML-Tag? | YouTube</h3><p>YouTube-Video aus einem HTML-Grundkurs zur Einführung in HTML-Tags.</p><ccm-le-link href=https://youtu.be/g9khWkRT74A></ccm-le-link>"
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
        "text": "Was ist ein HTML-Tag?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          {
            "text": "ein Auszeichnungselement",
            "comment": "Reflektieren Sie was <a target=\"_blank\" href=\"https://de.wikipedia.org/w/index.php?title=Auszeichnungselement\">Auszeichnungselement</a> in Bezug auf HTML genau bedeutet."
          },
          "ein Befehl",
          "ein Feiertag",
          "ein Platzhalter",
          "ein Sonderzeichen",
          "eine Anweisung",
          "eine Eigenschaft",
          "eine Instruktion",
          "eine Variable"
        ],
        "correct": 0
      },
      {
        "text": "Wofür nutzt man einen HTML-Tag?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "answers": [
          {
            "text": "Für eine darstellungsorientierte Textauszeichnung",
            "comment": "Ein HTML-Tag dient nur zur beschreibenden und nicht zur verfahrens- oder darstellungsorientierten Textauszeichnung."
          },
          {
            "text": "Um Angaben zur Textpräsentation zu machen",
            "comment": "Ein HTML-Tag dient vielmehr zur strukturierenden Auszeichnung, um Textbereichen eine Bedeutung zu geben."
          },
          {
            "text": "Um dynamische Abläufe zu beschreiben",
            "comment": "HTML-Tags beschreiben die Struktur und Semantik der Inhalte eines digitalen Dokuments."
          },
          {
            "text": "Zur Einbettung weiterer Inhalte, die über Text hinausgehen",
            "comment": "Über HTML-Tags können beispielsweise weitere Inhalte wie Bilder, Audios und Videos in die Webseite eingebettet werden."
          },
          {
            "text": "Zum Markieren von Feiertagen",
            "comment": "Ein HTML-Tag dient zur Markierung von Textbereichen in digitalen Dokumenten, um ihnen eine Bedeutung zu geben."
          },
          {
            "text": "Zur Formatierung von Texten",
            "comment": "Ein HTML-Tag dient nur der reinen semantischen Strukturierung von Texten und nicht zu dessen Formatierung."
          },
          {
            "text": "Zur Identifizierung von Textzeilen",
            "comment": "HTML-Tags dienen zur Identifizierung von Inhaltstypen. Also welche Textbereiche beispielsweise vom Typ Überschrift sind."
          },
          {
            "text": "Zur Steuerung des Webbrowsers",
            "comment": "Mit HTML-Tags steuert man den strukturellen Aufbau einer Webseite."
          },
          "Zur Strukturierung von Webseiteninhalten"
        ],
        "correct": [ 3, 8 ]
      },
      {
        "text": "Woraus besteht ein HTML-Tag und wie setzt man ihn ein?",
        "description": "Geben Sie für die folgenden HTML-Codes an, in welchen davon die enthaltenen HTML-Tags korrekt eingesetzt werden.<br><br><b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "encode": true,
        "answers": [
          {
            "text": "<h1>Überschrift<h1>",
            "comment": "Hier fehlt beim schließenden <h1>-Tag der Schrägstrich."
          },
          "<h2>Überschrift</h2>",
          {
            "text": "<h3>Überschrift</h4>",
            "comment": "Hier werden zwei HTML-Tags mit unterschiedlichem Namen verwendet."
          },
          {
            "text": "<p>Paragraph",
            "comment": "Hier fehlt der schließende <p>-Tag."
          },
          {
            "text": "<p>Paragraph<p>",
            "comment": "Hier fehlt beim schließenden <p>-Tag der Schrägstrich."
          },
          "<p>Paragraph</p>",
          "Hallo Welt!<br>Willkommen.",
          {
            "text": "Hallo Welt!<br/>Willkommen.",
            "comment": "Die Schreibweise <br/> gibt es in HTML5 nicht mehr."
          },
          {
            "text": "Hallo Welt!<br></br>Willkommen.",
            "comment": "Bei <br>-Tags wird nur ein öffnender HTML-Tag benötigt."
          }
        ],
        "correct": [ 1, 5, 6 ]
      },
      {
        "text": "Welche HTML-Tags dienen zur Markierung von Überschriften?",
        "description": "<b style='color: orangered;'>Mehrfachauswahl möglich</b>",
        "input": "checkbox",
        "encode": true,
        "answers": [
          "<br>",
          "<h>",
          "<h1>",
          "<h2>",
          "<h3>",
          "<h4>",
          "<h5>",
          "<h6>",
          "<p>"
        ],
        "correct": [ 2, 3, 4, 5, 6, 7 ]
      },
      {
        "text": "Welcher HTML-Tag dient zur Markierung von Paragraphen?",
        "input": "radio",
        "encode": true,
        "answers": [
          "<br>",
          "<h>",
          "<h1>",
          "<h2>",
          "<h3>",
          "<h4>",
          "<h5>",
          "<h6>",
          "<p>"
        ],
        "correct": 8
      },
      {
        "text": "Welcher HTML-Tag dient zur Markierung von Zeilenumbrüchen?",
        "input": "radio",
        "encode": true,
        "answers": [
          "<br>",
          "<h>",
          "<h1>",
          "<h2>",
          "<h3>",
          "<h4>",
          "<h5>",
          "<h6>",
          "<p>"
        ],
        "correct": 0
      },
      {
        "text": "Wie schreibt man einen Kommentar in HTML?",
        "input": "radio",
        "answers": [
          {
            "text": "! Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Fortran\">Fortran</a>"
          },
          {
            "text": "# Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Perl_(Programmiersprache)\">Perl</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Python_(Programmiersprache)\">Python</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/R_(Programmiersprache)\">R</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Ruby_(Programmiersprache)\">Ruby</a>."
          },
          {
            "text": "' Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/BASIC\">BASIC</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Visual_Basic\">Visual Basic</a>."
          },
          {
            "text": "/* Kommentar */",
            "comment": "So schreibt man einen Blockkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C_(Programmiersprache)\">C</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C%2B%2B\">C++</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C-Sharp\">C#</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/D_(Programmiersprache)\">D</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Pascal_(Programmiersprache)\">Pascal</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/PHP\">PHP</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Java_(Programmiersprache)\">Java</a>."
          },
          {
            "text": "/** Kommentar */",
            "comment": "So schreibt man einen Dokumentationskommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Java_(Programmiersprache)\">Java</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>."
          },
          {
            "text": "// Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C_(Programmiersprache)\">C</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C%2B%2B\">C++</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/C-Sharp\">C#</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Pascal_(Programmiersprache)\">Pascal</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/JavaScript\">JavaScript</a>, <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/PHP\">PHP</a> und <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Java_(Programmiersprache)\">Java</a>."
          },
          {
            "text": "; Kommentar",
            "comment": "So schreibt man einen Zeilenkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Assemblersprache\">Assembler</a>."
          },
          "&lt;!-- Kommentar -->",
          {
            "text": "{ Kommentar }",
            "comment": "So schreibt man einen Blockkommentar in Programmiersprachen wie <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Pascal_(Programmiersprache)\">Pascal</a>."
          }
        ],
        "correct": 7
      }
    ]
  },
  "cloze": {
    "css_layout": [ "ccm.load", "https://akless.github.io/ccm-components/cloze/resources/weblysleek.css" ],
    "start_button": true,
    "feedback": true,
    "text": "Ergänzen Sie in dem folgenden HTML-Code die fehlenden HTML-Tags, so dass die daraus resultierende Webseite, so wie unten in der Vorschau gezeigt, aussieht. <code> [[<h1>]]Anwendung von HTML-Tags[[</h1>]]<br>[[<h2>]]Motivation[[</h2>]]<br>[[<p>]]Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind die HTML-Tags zum Markieren von Überschriften, Paragraphen, Zeilenumbrüchen und HTML-Kommentaren einzusetzen.[[</p>]]<br>[[<!--]]<br>&lt;h2>Auskommentierung von HTML-Code&lt;/h2><br>&lt;p>Dieser Abschnitt wurde auskommentiert.&lt;/p><br>[[-->]]<br>[[<h2>]]Auswertung[[</h2>]]<br>[[<p>]]Klicken Sie auf \"Abschicken\", wenn Sie alle fehlenden HTML-Tags ergänzt haben.[[<br>]] Sie erhalten dann ein unmittelbares Feedback.[[</p>]] </code> <fieldset> <legend>Vorschau</legend> <h1>Anwendung von HTML-Tags</h1> <h2>Motivation</h2> <p>Der Lückentext unterstützt Sie dabei selbst einzuschätzen, ob Sie in der Lage sind die HTML-Tags zum Markieren von Überschriften, Paragraphen, Zeilenumbrüchen und HTML-Kommentaren einzusetzen.</p><!-- <h2>Auskommentierung von HTML-Code</h2> <p>Dieser Abschnitt wurde auskommentiert.</p>--> <h2>Auswertung</h2> <p>Klicken Sie auf \"Abschicken\", wenn Sie alle fehlenden HTML-Tags ergänzt haben.<br>Sie erhalten dann oben im Lückentext ein unmittelbares Feedback.</p></fieldset>",
    "blank": true,
    "onfinish": { "restart": true },
    "placeholder" : {
      "start": "Lückentext starten",
      "submit": "Abschicken",
      "finish": "Beenden"
    }
  }
};