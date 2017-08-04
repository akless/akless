/**
 * @overview ccm instance configurations
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "configs.min.js" ] = {
  "le": {
    "topic": "Erste “Hallo Welt!”-Webseite",
    "innerHTML": "<script src=https://akless.github.io/ccm-components/quiz/versions/ccm.quiz-1.0.0.min.js></script><h2>1. Motivation, Lernziele und Voraussetzungen</h2><p>Wer sich eine eigene <a href=https://de.wikipedia.org/wiki/Webseite>Webseite</a> zulegen möchte und danach <a href=http://www.duden.de/rechtschreibung/googeln>googelt</a>, landet im <a href=https://de.wikipedia.org/wiki/World_Wide_Web>Web</a> schnell bei einem von vielen Dienstleistern, die genau das mit wenigen <a href=https://de.wikipedia.org/wiki/Maus_(Computer)#Mausaktionen>Klicks</a> anbieten. Meist verbirgt sich dahinter dann eine Art Fertigbaukasten, mit dem man ohne <a href=https://de.wikipedia.org/wiki/Hypertext_Markup_Language>HTML</a>-Kenntnisse sich aus diversen Vorlagen und Layouts seine Webseite schnell und einfach zusammenklicken kann und anschließend nur noch die eigenen Inhalte wie Texte und Bilder an den passenden Stellen ergänzen braucht. Sind diese Vorlagen für die eigenen Zwecke allerdings nicht ausreichend individuell anpassbar, beginnt die Suche nach Alternativen. Wer es sich leisten kann, könnte sich nun überlegen einen <a href=https://de.wikipedia.org/wiki/Webdesigner>Webdesigner</a> zu beauftragen. Wäre es aber nicht vielleicht auch möglich, es selbst zu tun? Doch wie fängt man da an? Nun, falls Sie bereits damit vertraut sind, was HTML ist und wofür es eingesetzt wird, wissen Sie bereits, dass es sich bei einer Webseite um ein in HTML geschriebenes digitales Dokument handelt, das von einem <a href=https://de.wikipedia.org/wiki/Webbrowser>Webbrowser</a> gelesen und schließlich als Webseite dargestellt werden kann. Der erste Schritt ist also das Anlegen eines solchen digitalen Dokuments. In dieser Lerneinheit erfahren Sie, wie man ein HTML-basiertes digitales Dokument erstellen, editieren und mit einem Webbrowser ausführen kann und wie Sie für das Dokument die sogenannte Dokumenttyp-Deklaration angeben und was es damit auf sich hat. Hierzu sollten Sie bereits über einen <a href=https://de.wikipedia.org/wiki/Computer>Computer</a> verfügen, auf dem Sie eine <a href=https://de.wikipedia.org/wiki/Datei>Datei</a> erstellen können und auf dem bereits ein Webbrowser <a href=https://de.wikipedia.org/wiki/Installation_(Computer)>installiert</a> ist. Sie sollten wissen, wie man eine Datei erstellt, umbenennt, die <a href=https://de.wikipedia.org/wiki/Dateinamenserweiterung>Dateiendung</a> festlegt und wie man eine Datei mit einem bestimmten <a href=https://de.wikipedia.org/wiki/Computerprogramm>Programm</a> öffnet.</p><ccm-le-audio src=https://akless.github.io/akless/we/erste-webseite/motivation.mp3></ccm-le-audio><h3>1.1 Lernziele</h3><ul><li>Ich bin in der Lage eine neue Webseite mit dem Inhalt \"Hallo Welt!\" über ein HTML-basiertes digitales Dokument zu erstellen.<li>Ich weiß, mit welchem Programm der Inhalt eines HTML-basierten digitalen Dokuments als Webseite dargestellt werden kann.<li>Ich weiß was es mit der Dokumenttyp-Deklaration in HTML auf sich hat und wie diese für HTML5 konkret aussieht.</ul><h3>1.2 Voraussetzungen</h3><ul><li>Ich weiß grob, was ein Betriebssystem, ein Webbrowser und eine Webseite ist.<li>Ich weiß, was HTML ist und wofür es eingesetzt wird.<li>Ich habe einen Computer auf dem ich eine Datei erstellen kann und auf dem bereits ein Webbrowser installiert ist.<li>Ich weiß, wie man eine Datei erstellt, umbenennt, die Dateiendung festlegt und wie man sie mit einem bestimmten Programm öffnet.</ul><p>Falls Sie bisher nur wenig Erfahrung im Umgang mit Dateien und Programmen haben, lassen Sie sich von jemanden aus Ihrem Bekanntenkreis helfen oder besuchen Sie einen entsprechenden Computer-Einsteigerkurs, um die nötigen Kenntnisse zu erwerben.<h2>2. Inhalt:<ccm-le-topic></ccm-le-topic></h2><ccm-le-video src=https://akless.github.io/akless/we/erste-webseite/screencast.mp4></ccm-le-video><h3>2.1 Erstellung einer HTML-Datei</h3><p>Zum Erstellen einer Webseite wird ein HTML-basiertes digitales Dokument benötigt. Dabei handelt es sich üblicherweise um nichts anderes als eine sogenannte HTML-Datei, also eine Datei mit der Dateiendung \".html\", die wir nun erstellen. Hierzu legen wir eine neue Datei an, geben ihr einen Namen und legen als Dateiendung \".html\" fest. Bitte beachten, dass die Vorgehensweise zur Erstellung einer Datei sich, je nachdem welches <a href=https://de.wikipedia.org/wiki/Betriebssystem>Betriebssystem</a> Sie verwenden, unterscheidet.</p><ccm-le-img src=https://akless.github.io/akless/we/erste-webseite/image-1.jpg></ccm-le-img><h3>2.2 Programme zur Bearbeitung einer HTML-Datei</h3><p>Um den Inhalt der erstellten HTML-Datei bearbeiten zu können, müssen wir sie mit einem dafür geeigneten Programm öffnen. Zur Bearbeitung einer HTML-Datei bieten sich eine Vielzahl unterschiedlichster Programme an: Vom einfachen <a href=https://de.wikipedia.org/wiki/Texteditor>Texteditor</a> über webbasierte <a href=https://de.wikipedia.org/wiki/Online-Textverarbeitung>Online-Editoren</a> bis hin zu den professionellen <a href=https://de.wikipedia.org/wiki/Integrierte_Entwicklungsumgebung>integrierten Entwicklungsumgebungen</a>. Falls Sie noch unentschieden sind, welches konkrete Programm Sie verwenden möchten, recherchieren Sie dies im Web. In diesem Video wird von mir der auch weitgehend kostenlos nutzbare Texteditor \"<a href=https://www.sublimetext.com/2>Sublime Text 2</a>\" eingesetzt, der auch für alle gängigen Betriebssysteme angeboten wird. Im Web finden sich aber wie gesagt auch viele weitere Alternativen.<h3>2.3 Editieren einer HTML-Datei</h3><p>Sobald fest steht, welches konkrete Programm verwendet wird und dieses auch installiert ist, können wir die erstellte HTML-Datei nun mit diesem Programm zum bearbeiten öffnen. Es erscheint ein leeres <a href=https://de.wikipedia.org/wiki/Fenster_(Computer)>Editorfenster</a>, über das wir den Inhalt der Datei festlegen können. Hier können wir zum einen die Inhalte unserer Webseite festlegen und zum anderen damit beginnen, mittels HTML das digitale Dokument und damit die Webseite und deren Inhalte zu strukturieren.</p><ccm-le-img src=https://akless.github.io/akless/we/erste-webseite/image-2.jpg></ccm-le-img><h3>2.4 Dokumenttyp-Deklaration</h3><p>Damit der Webbrowser später beim Öffnen unserer HTML-Datei überhaupt weiß, in welcher Sprache der Inhalt der Datei zu <a href=https://de.wikipedia.org/wiki/Interpreter>interpretieren</a> ist, erfolgt in der ersten Zeile zunächst die sogenannte <a href=https://de.wikipedia.org/wiki/Dokumenttypdefinition>Dokumenttyp-Deklaration</a>, oder kurz DOCTYPE-Angabe genannt. Da wir vor haben, unser digitales Dokument in <a href=https://de.wikipedia.org/wiki/HTML5>HTML5</a> zu schreiben, geben wir dies nun in der ersten Zeile der HTML-Datei wie folgt an:</p><code><pre>&lt;!doctype html></pre></code><p>In den darauffolgenden Zeilen können wir nun den Inhalt für unsere Webseite festlegen. Für den Einstieg geben wir zunächst als Inhalt einfach nur \"Hallo Welt!\" an. Der Inhalt unserer HTML-Datei sieht damit also wie folgt aus:</p><ccm-le-img src=https://akless.github.io/akless/we/erste-webseite/image-3.jpg></ccm-le-img><h3>2.5 Öffnen der HTML-Datei im Webbrowser</h3><p>Damit wir sehen können, ob die Webseite nun den von uns festgelegten Inhalt enthält, wird es Zeit für den ersten Aufruf unserer Webseite. Zunächst gilt es aber noch die Änderungen an der Datei zu speichern. Danach öffnen wir die HTML-Datei, diesmal mit dem Webbrowser. In diesem Video verwende ich den Webbrowser <a href=https://de.wikipedia.org/wiki/Google_Chrome>Google Chrome</a>, es kann aber auch jeder andere moderne Webbrowser, wie <a href=https://de.wikipedia.org/wiki/Mozilla_Firefox>Firefox</a>, <a href=https://de.wikipedia.org/wiki/Internet_Explorer>Internet Explorer</a>, <a href=https://de.wikipedia.org/wiki/Apple_Safari>Safari</a> oder <a href=https://de.wikipedia.org/wiki/Opera_(Browser)>Opera</a>, verwendet werden. Daraufhin sollte nun eine leere Webseite erscheinen, die nur ganz oben links den von uns festgelegten Inhalt \"Hallo Welt!\" enthält.</p><ccm-le-img src=https://akless.github.io/akless/we/erste-webseite/image-4.jpg></ccm-le-img><h2>3. Selbsttest</h2><ccm-quiz-1-0-0 key='[\"ccm.get\",\"https://akless.github.io/akless/we/erste-webseite/configs.min.js\",\"quiz\"]'></ccm-quiz-1-0-0><h2>4. Alternative Materialien</h2><h3>4.1 Die 9 besten kostenlosen HTML-Editoren für Webentwickler (Windows-Edition) | Dr. Web</h3><p>Online-Artikel, der einige kostenlose Programme auflistet, die zum Bearbeiten einer HTML-Datei genutzt werden können. Der Artikel führt hauptsächlich Programme für <a href=https://de.wikipedia.org/wiki/Microsoft_Windows>Windows</a> auf. Für <a href=https://de.wikipedia.org/wiki/MacOS>Mac</a>-Nutzer gibt es <a href=https://www.drweb.de/magazin/die-5-besten-kostenlosen-html-editoren-fuer-webentwickler-mac-edition-53159/ >hier</a> aber auch einen Artikel.</p><ccm-le-link href=https://www.drweb.de/magazin/die-8-besten-kostenlosen-html-editoren-fuer-webentwickler-windows-edition-53187/ ></ccm-le-link><h3>4.2 Thimble von Mozilla – Ein Online-Quelltext-Editor für Lernende & Ausbilder. | Mozilla</h3><p><a href=https://thimble.mozilla.org/de/ >Thimble</a> ist ein sehr empfehlenswerter kostenloser Online-Quelltext-Editor zur Erstellung von Webseiten aus dem Hause <a href=https://de.wikipedia.org/wiki/Mozilla_Foundation>Mozilla</a>, aus dem auch der Webbrowser <a href=https://de.wikipedia.org/wiki/Mozilla_Firefox>Firefox</a> stammt. Ein Online-Editor hat den Vorteil, dass keinerlei Installation notwendig ist und kein bestimmtes Betriebssystem vorausgesetzt wird.</p><ccm-le-link href=https://thimble.mozilla.org/de/ ></ccm-le-link><h3>4.3 WebStorm: The Smartest JavaScript IDE | JetBrains</h3><p><a href=https://de.wikipedia.org/wiki/WebStorm>WebStorm</a> ist eine professionelle (nicht kostenlose) integrierte Entwicklungsumgebung, die ich auch selbst beruflich für die Webentwicklung primär einsetze und die insbesondere auch HTML5 unterstützt.</p><ccm-le-link href=https://www.jetbrains.com/webstorm/ ></ccm-le-link>",
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
      "correct": "Korrekte Lösung: ",
      "finish": "Beenden"
    },
    "questions": [
      {
        "text": "Sind Sie in der Lage eine neue Webseite mit dem Inhalt \"Hallo Welt!\" über ein HTML-basiertes digitales Dokument zu erstellen?",
        "description": "Im Folgenden sind einzelne Arbeitsschritte aufgeführt. Geben Sie für die zutreffenden Arbeitsschritte die richtige Reihenfolge an. Markieren Sie also den ersten Schritt mit \"1\", den Zweiten mit \"2\" u.s.w.. Markieren Sie die Schritte die nicht zutreffen mit \"0\".",
        "input": "number",
        "attributes": {
          "min": 0,
          "max": 9
        },
        "answers": [
          "Änderungen an der Datei speichern",
          "Angabe der Dokumenttypdefinition",
          "Datei einen Namen geben",
          "Datei zum Bearbeiten öffnen",
          "Dateiendung \".html\" festlegen",
          "Fertigbaukasten wählen",
          "Inhalt \"Hallo Welt!\" festlegen",
          "Neue Datei anlegen",
          "Registrierung im Internet"
        ],
        "correct": [ 7, 5, 2, 4, 3, 0, 6, 1, 0 ]
      },
      {
        "text": "Mit welchem Programm kann der Inhalt eines HTML-basierten digitalen Dokuments als Webseite dargestellt werden?",
        "description": "Wählen Sie unter den folgenden Antworten die richtige Antwort aus.",
        "input": "radio",
        "answers": [
          "mit dem Papierkorb",
          "mit einem Bildbearbeitungsprogramm",
          "mit einem Dateimanager",
          "mit einem Kommandozeilen-Tool",
          "mit einem Online-Editor",
          "mit einem Texteditor",
          "mit einem Video-Player",
          "mit einem Webbrowser",
          "mit einer Entwicklungsumgebung"
        ],
        "correct": 7
      },
      {
        "text": "Was hat es mit der Dokumenttyp-Deklaration in HTML auf sich?",
        "description": "Die Dokumenttyp-Deklaration...",
        "input": "radio",
        "answers": [
          "deklariert die Korrektheit des Dokumenttyps.",
          "deklariert Meta-Informationen zur Webseite.",
          "dient zur Festlegung von Titel und Zeichenkodierung der Webseite.",
          "enthält alle Daten des gesamten HTML-Dokuments.",
          "enthält das Veröffentlichungsdatum und den Namen des Authoren der Webseite.",
          "enthält die Inhalte, die vom Webbrowser in der Webseite dargestellt werden.",
          "gibt an in welcher Sprache das HTML-Dokument zu interpretieren ist.",
          "gibt an mit welchem Programm das HTML-Dokument auszuführen ist.",
          "gibt an unter welchen Bedingungen das HTML-Dokument zu öffnen ist."
        ],
        "correct": 6
      },
      {
        "text": "Wie sieht die Dokumenttyp-Deklaration für HTML5 aus?",
        "input": "radio",
        "encode": true,
        "answers": [
          {
            "text": "<!DOCTYPE HTML>",
            "comment": "Seit HTML5 ist die Dokumenttyp-Deklaration endlich kürzer, unkomplizierter und verständlicher."
          },
          "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">",
          "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">",
          "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">",
          "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Frameset//EN\" \"http://www.w3.org/TR/html4/frameset.dtd\">",
          "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">",
          "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">",
          "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Frameset//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd\">",
          "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
        ],
        "correct": 0
      }
    ]
  }
};