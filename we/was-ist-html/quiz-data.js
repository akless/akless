/**
 * @overview quiz configuration for this learning unit
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */
ccm.files[ "quiz-data.min.js" ] = {
  "css_layout": [ "ccm.load", "https://akless.github.io/akless/we/css/quiz.css" ],
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
      "text": "Was ist HTML?",
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
      "correct": 3
    },
    {
      "text": "Wofür steht HTML?",
      "input": "radio",
      "answers": [
        "High-level Technology Media Language",
        "Home Technology Media Language",
        "Home Tool Markup Language",
        "How To Miss Without Laugh",
        "Hyperlink Media Language",
        "Hyperlinks and Text Markup Language",
        "Hypertext Markup Language",
        "Hypertext Markup Level",
        "Hypertext Media Language"
      ],
      "correct": 6
    },
    {
      "text": "Wofür wird HTML eingesetzt?",
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
        {
          "text": "für die Gestaltung von Layout und Design von Webseiten",
          "comment": "Zur Gestaltung von Layout und Design einer Webseite nutzt man <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Cascading_Style_Sheets\">Cascading Style Sheets (CSS)</a>."
        },
        {
          "text": "für die Programmierung von Webseiten",
          "comment": "HTML ist keine Programmiersprache, sondern eine reine <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Auszeichnungssprache\">Auszeichnungssprache</a>."
        },
        "für die Strukturierung digitaler Dokumente",
        {
          "text": "für die Übertragung von Daten im Internet",
          "comment": "Im Internet nutzt man zur Übertragung von Daten üblicherweise das <a target=\"_blank\" href=\"https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol\">Hypertext Transfer Protocol (HTTP)</a>."
        },
        "um morgens aus dem Bett zu kommen"
      ],
      "correct": 6
    },
    {
      "text": "Was ist ein Hyperlink und wofür setzt man ihn ein?",
      "description": "Ein Hyperlink ist...",
      "input": "radio",
      "answers": [
        "der Künstername des Erfinders des Web.",
        "ein Dateiformat für digitale Dokumente.",
        "ein Gremium zur Ausarbeitung von Web-Standards.",
        "ein Querverweis zum Springen an andere Textstellen in Hypertexten.",
        "ein Modewort zur Vermarktung des Web.",
        "ein Portal in das digitale Zeitalter.",
        "ein Web-Standard zur einheitlichen Verbreitung von Informationen.",
        "eine Arbeitsgruppe zur Weiterentwicklung von HTML.",
        "eine Markierung zum Hervorheben interessanter Textstellen."
      ],
      "correct": 3
    },
    {
      "text": "Wer hat HTML erfunden?",
      "input": "radio",
      "answers": [
        {
          "text": "Bill Gates",
          "comment": "Bill Gates ist der Gründer von Microsoft."
        },
        {
          "text": "Fred Feuerstein",
          "comment": "Fred Feuerstein ist der Vater in der Familie Feuerstein aus der gleichnamigen Zeichentrickserie."
        },
        {
          "text": "Jeff Bezos",
          "comment": "Jeff Bezos ist der Gründer von Amazon."
        },
        {
          "text": "Larry Page",
          "comment": "Larry Page ist einer der Google-Gründer."
        },
        {
          "text": "Mark Zuckerberg",
          "comment": "Mark Zuckerberg ist der Gründer von Facebook."
        },
        {
          "text": "Mike Sandel",
          "comment": "Mike Sandel war der Chef von Tim Berners-Lee."
        },
        {
          "text": "Robert Cailliau",
          "comment": "Robert Cailliau ist der erste Web-Surfer und Freund von Tim-Berners-Lee."
        },
        {
          "text": "Steve Jobs",
          "comment": "Steve Jobs ist der Gründer von Apple."
        },
        {
          "text": "Tim Berners-Lee",
          "comment": "Tim Berners-Lee ist der Erfinder von HTML und der Begründer des World Wide Web (WWW)."
        }
      ],
      "correct": 8
    },
    {
      "text": "Zu welchem ursprünglichen Zweck wurde HTML erfunden?",
      "input": "radio",
      "answers": [
        "für das Sammeln von Daten",
        "für das Streamen von Filmen",
        "für den Aufbau sozialer Netze",
        "für den Aufbau von Tauschbörsen im Internet",
        "für den Austausch wissenschaftlicher Publikationen",
        "für die digitalen Lehre",
        "für die Stärkung von Demokratie",
        "für die Verbreitung von Unterhaltungselektronik",
        "für militärische Zwecke"
      ],
      "correct": 4
    },
    {
      "text": "Wer arbeitet alles an der Weiterentwicklung von HTML?",
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
      "text": "In welcher Version liegt HTML aktuell vor?",
      "input": "radio",
      "answers": [
        "HTML+",
        "HTML 2",
        "HTML 3",
        "HTML 4",
        "HTML5",
        "HTML6",
        "HTML10",
        "XHTML 1",
        "XHTML 2"
      ],
      "correct": 4
    }
  ]
};