# AVIVA Session Preparation: Verzweigungen und Gültigkeitsbereiche

**Thema:** if-Statements und Scopes in TypeScript\
**Dauer:** 50 Minuten\
**Lernschritt:**
[20 - Verzweigungen und Gültigkeitsbereiche](../10-tutorials/20-scopes-and-if-statements/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Einfache if-Anweisungen implementieren
- if-else Verzweigungen für zwei Fälle erstellen
- if-else-if Strukturen für mehrfache Bedingungen verwenden
- Das Konzept von Scopes (Gültigkeitsbereichen) erklären
- Code-Blöcke mit geschweiften Klammern `{}` korrekt einsetzen

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Stellt euch vor, ihr programmiert ein Spiel. Was
  passiert, wenn der Spieler 0 Leben hat? Wie soll das Programm reagieren?"
- Lassen Sie 2-3 Schüler:innen ihre Ideen teilen
- Überleitung: "Heute lernen wir, wie Programme Entscheidungen treffen können -
  genau wie wir im Alltag!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Vergleichen reaktivieren

**Aktivität 1 - Alltags-Entscheidungen (3 Min):**

- Frage: "Nennt Situationen aus dem Alltag, wo ihr Entscheidungen trefft"
- Beispiele sammeln: "WENN es regnet, DANN nehme ich einen Schirm mit"
- Struktur erkennen: Bedingung → Aktion

**Aktivität 2 - Vergleichsoperatoren (5 Min):**

```typescript
let age = 15;

// What do these mean?
age > 18;
age < 12;
age == 15;
```

**Fragen:**

- Was bedeutet `>`, `<`, `==`?
- Was ist das Ergebnis dieser Vergleiche? (true oder false)

**Überleitung:** "Mit if-Statements können wir auf solche Bedingungen
reagieren!"

---

### 💡 I - Informieren (12 Minuten)

**Ziel:** Neue Konzepte vermitteln

#### Teil 1: if und if-else (6 Min)

**Live-Coding am Beamer:**

```typescript
// Simple if
let temperature = 25;

if (temperature > 20) {
    console.log("It's warm today!");
}

// if-else
let age = 15;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You're too young to vote.");
}
```

**Wichtige Punkte betonen:**

- Bedingung in runden Klammern `()`
- Code-Block in geschweiften Klammern `{}`
- `else` wird nur ausgeführt, wenn die Bedingung falsch ist

#### Teil 2: if-else-if und Scopes (6 Min)

**Live-Coding am Beamer:**

```typescript
// if-else-if for multiple conditions
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Scopes demonstration
let x = 10;

if (x > 5) {
    let message = "x is greater than 5";
    console.log(message); // Works inside the block
}

// console.log(message); // ERROR! message doesn't exist here
```

**Wichtige Punkte betonen:**

- if-else-if für mehrere Bedingungen
- Nur ein Block wird ausgeführt (der erste, der zutrifft)
- Variablen in `{}` sind nur innerhalb sichtbar (Scope!)

**Auf Tutorial verweisen:**

- [20.01 - if Statement](../10-tutorials/20-scopes-and-if-statements/20.01-if-statement.md)
- [20.02 - if-else Statement](../10-tutorials/20-scopes-and-if-statements/20.02-if-else-statement.md)
- [20.03 - if-else-if Statement](../10-tutorials/20-scopes-and-if-statements/20.03-if-else-if-statement.md)
- [20.04 - Scopes](../10-tutorials/20-scopes-and-if-statements/20.04-scopes.md)

---

### 🔨 V - Verarbeiten (20 Minuten)

**Ziel:** Eigenständige Anwendung und Übung

#### Übung 1: Positive Zahlen (10 Min)

- [20.01 - If Control Block 01](../../20-assignments/20-branching/20.01-if-control-block-01/README.md)

**Einzelarbeit - Schüler:innen arbeiten an:**

- Prüfen, ob eine Zahl positiv, negativ oder null ist
- Nur `if` verwenden (keine `else`)
- Verständnis für Bedingungen entwickeln

#### Übung 2: Erweiterte Verzweigungen (10 Min)

- [20.02 - If Control Block 02](../../20-assignments/20-branching/20.02-if-control-block-02/README.md)

**Partner:innen-Arbeit - Komplexere Bedingungen:**

- if-else und if-else-if anwenden
- Mehrere Szenarien abdecken

---

### ✅ A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Schnelle Quiz-Runde (3 Min):**

Fragen an die Klasse:

- Wann wird ein `else`-Block ausgeführt?
- Was passiert, wenn keine Bedingung in einer if-else-if Kette zutrifft?
- Wo ist eine Variable sichtbar, die in einem if-Block deklariert wurde?

**Ausblick (2 Min):**

- Nächstes Mal: Benutzereingaben verarbeiten mit `prompt()`
- Motivation: "Jetzt könnt ihr interaktive Programme schreiben, die auf
  Bedingungen reagieren!"

---

## Materialien & Vorbereitung

### Digitale Ressourcen:

- [Lernschritt](../10-tutorials/20-scopes-and-if-statements/README.md)
- [Aufgaben](../../20-assignments/20-branching/README.md)

### Backup-Plan:

Falls Zeit übrig bleibt:

- Zusätzliche Challenge: Verschachtelte if-Statements
- Diskussion: Was sind die Vorteile von `else if` gegenüber mehreren `if`?

---

## Tipps für die Durchführung

### Timing beachten:

- Timer stellen für jede Phase
- Pufferzeit von 2-3 Minuten einplanen
- Bei Zeitdruck: Übung 2 als Hausaufgabe

### Häufige Fehler:

- **Geschweifte Klammern vergessen:** Code wird unerwartet ausgeführt
- **`=` statt `==`:** Verwechslung von Zuweisung und Vergleich
- **Scope-Fehler:** Variable außerhalb des Blocks verwenden

### Differenzierung:

- **Schnelle Schüler:innen:** Lasse sie verschachtelte if-Statements erstellen
  oder komplexe Bedingungen formulieren
- **Langsame Schüler:innen:** Konzentriere dich auf einfache if-else Strukturen,
  gib mehr Beispiele

### Aktivierung:

- Schüler:innen aktiv einbinden durch Fragen
- Live-Coding: Schüler:innen sollen Ergebnisse voraussagen
- Fehler absichtlich machen und korrigieren lassen
- Alltagsbeispiele verwenden (Ampel, Altersfreigabe, etc.)

---

_This project is licensed under the [CC BY-SA 4.0](../../LICENSE)._

---
