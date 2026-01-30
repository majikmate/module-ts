# AVIVA Session Preparation: Visual Studio Code Basics

**Thema:** IDE-Grundlagen und TypeScript-Entwicklungsumgebung\
**Dauer:** 50 Minuten\
**Lernschritt:** [00 - VS Code](../10-tutorials/00-vscode/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Visual Studio Code für TypeScript-Projekte einrichten
- Die wichtigsten Funktionen von VS Code benennen
- Projekte in VS Code organisieren
- Das integrierte Terminal nutzen
- Die Vorteile einer IDE gegenüber einfachen Editoren erklären

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Wer hat schon einmal programmiert? Welche Tools habt ihr
  benutzt?"
- Lassen Sie 2-3 Schüler:innen ihre Erfahrungen teilen
- Überleitung: "Heute lernen wir Visual Studio Code kennen - eine professionelle
  Entwicklungsumgebung!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Editoren und Entwicklungstools reaktivieren

**Aktivität 1 - Diskussion Texteditoren (5 Min):**

- Fragen an die Klasse:
  - Was ist der Unterschied zwischen einem einfachen Texteditor (Notepad) und
    einem Programmiereditor?
  - Welche Funktionen würdet ihr euch für das Programmieren wünschen?
- Sammle Antworten am Whiteboard

**Aktivität 2 - Ordnerstruktur (3 Min):**

- Kurze Wiederholung: Dateien und Ordner auf dem Computer
- Wo speichert man Programm-Dateien?
- Was ist eine Projektstruktur?

**Überleitung:** "VS Code bietet all diese Funktionen und noch viel mehr!"

---

### 💡 I - Informieren (12 Minuten)

**Ziel:** Neue Konzepte vermitteln

#### Teil 1: VS Code Interface (6 Min)

**Live-Demonstration am Beamer:**

```
VS Code Bereiche zeigen:
- Activity Bar (links): Explorer, Search, Source Control, Run & Debug, Extensions
- Side Bar: Datei-Explorer
- Editor Area: Hauptarbeitsbereich
- Panel: Terminal, Problems, Output
- Status Bar (unten): Informationen über aktuelles Projekt
```

**Wichtige Punkte betonen:**

- Explorer: Dateien und Ordner navigieren
- Terminal: Befehle ausführen, ohne VS Code zu verlassen
- Extensions: Erweiterungen für TypeScript, Deno, etc.
- Integrierte Fehlerprüfung: Probleme werden direkt angezeigt

#### Teil 2: Erstes Projekt in VS Code (6 Min)

**Live-Coding am Beamer:**

1. Ordner öffnen (`File > Open Folder`)
2. Neue Datei erstellen (`main.ts`)
3. Hello World schreiben:

```typescript
console.log("Hello, World!");
```

4. Terminal öffnen (`` Ctrl+` `` oder `View > Terminal`)
5. Programm ausführen: `deno run main.ts`

**Auf Video-Tutorial verweisen:**

- [00.00 - Visual Studio Code](../10-tutorials/00-vscode/00.00-visual-studio-code.md)

---

### 🔨 V - Verarbeiten (20 Minuten)

**Ziel:** Eigenständige Anwendung und Übung

#### Übung: VS Code Einrichtung und erste Schritte

**Aufgabe (20 Min):**

Die Schüler:innen arbeiten selbstständig oder zu zweit:

1. VS Code öffnen und Interface erkunden
2. Einen neuen Ordner für TypeScript-Projekte erstellen
3. Erste `.ts` Datei erstellen
4. Hello World Programm schreiben
5. Terminal nutzen, um das Programm auszuführen
6. Extensions Panel öffnen und nach "Deno" suchen

**Lehrkraft zirkuliert und unterstützt bei Problemen**

---

### ✅ A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Blitzlicht-Runde (2 Min):**

- "Was war für euch neu an VS Code?"
- 3-4 Schüler:innen teilen ihre Gedanken

**Kurz-Quiz (3 Min):**

- Wie öffnet man das integrierte Terminal? (Antwort: Ctrl+` oder View >
  Terminal)
- Wo findet man Extensions? (Antwort: Activity Bar, Extensions Icon)
- Welche Dateiendung haben TypeScript-Dateien? (Antwort: .ts)

---

## Materialien & Vorbereitung

### Digitale Ressourcen:

- [VS Code Basics](../10-tutorials/00-vscode/README.md)
- VS Code und Deno bereits auf allen Rechnern installiert

### Vorbereitung:

- Stelle sicher, dass VS Code auf allen Schüler-Rechnern installiert ist
- Deno Runtime sollte installiert sein
- Teste die Installation vorab

---

## Tipps für die Durchführung

### Timing beachten:

- Timer stellen für jede Phase
- Pufferzeit von 2-3 Minuten einplanen
- Technische Probleme einkalkulieren (Installation, Updates)

### Häufige Fehler:

- **Extensions nicht gefunden:** Internetverbindung prüfen
- **Terminal öffnet nicht:** Tastenkombination zeigen, alternativ über Menü
- **Datei speichern vergessen:** Auto-Save aktivieren zeigen

### Differenzierung:

- **Schnelle Schüler:innen:** Lasse sie Extensions erkunden und installieren
- **Langsame Schüler:innen:** Schritt-für-Schritt begleiten, Screenshots
  bereitstellen

### Aktivierung:

- Live-Demonstration statt nur Folien
- Schüler:innen aktiv mitmachen lassen
- Fehler bewusst machen und gemeinsam beheben

---

## Reflexion nach der Session

**Für die Lehrperson - nach der Session ausfüllen:**

- Was hat gut funktioniert?
- Gab es technische Probleme?
- Zeitmanagement OK?
- Anpassungen für nächstes Mal:

---

_This project is licensed under the [CC BY-SA 4.0](../../LICENSE)._
