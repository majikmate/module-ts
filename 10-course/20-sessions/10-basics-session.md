# AVIVA Session Preparation: Grundlagen der Programmierung

**Thema:** Variablen und Operationen in TypeScript\
**Dauer:** 50 Minuten\
**Lernschritt:** [10 - Grundlagen](../10-tutorials/10-basics/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Variablen in TypeScript mit `let` deklarieren und initialisieren
- Grundlegende mathematische Operationen (+, -, *, /) ausführen
- Den Unterschied zwischen Zahlen und Zeichenketten erklären
- Zeichenketten und Zahlen kombinieren (String-Konkatenation)
- Praktische Berechnungen implementieren

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Stellt euch vor, ihr müsst im Kopf rechnen: 15 + 27 - 8.
  Wäre es nicht praktisch, wenn der Computer das für euch erledigt?"
- Lassen Sie 2-3 Schüler:innen ihre Gedanken teilen
- Überleitung: "Heute lernen wir, wie ihr dem Computer sagen könnt, dass er
  solche Rechnungen für euch durchführt!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Grundbegriffen reaktivieren

**Aktivität 1 - Was ist eine Variable? (4 Min):**

- Frage: "Was bedeutet das Wort 'variabel' im Alltag?"
- Antworten sammeln (veränderbar, nicht fest)
- Analogie: "Eine Variable ist wie eine beschriftete Box, in die du Werte legen
  kannst"

**Aktivität 2 - Mathematik-Auffrischung (4 Min):**

```typescript
// What's the result?
3 + 5;
10 - 2;
4 * 3;
20 / 4;
```

**Fragen:**

- Welche mathematischen Operationen kennt ihr?
- Was bedeutet `*` und `/` in der Programmierung?

**Überleitung:** "Genau diese Operationen können wir in TypeScript nutzen!"

---

### 💡 I - Informieren (12 Minuten)

**Ziel:** Neue Konzepte vermitteln

#### Teil 1: Variablen-Grundlagen (6 Min)

**Live-Coding am Beamer:**

```typescript
// Variables store values
let name = "Alice";
let age = 15;

// Output to console
console.log(name); // Alice
console.log(age); // 15

// Variables can change
age = 16;
console.log(age); // 16
```

**Wichtige Punkte betonen:**

- `let` erstellt eine neue Variable
- Variablennamen sollten aussagekräftig sein
- Werte können Zahlen oder Text sein
- `console.log()` zeigt Werte in der Konsole an

#### Teil 2: Mathematische Operationen (6 Min)

**Live-Coding am Beamer:**

```typescript
let a = 10;
let b = 5;

// Basic operations
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

// Using results
let sum = a + b;
console.log("The sum is: " + sum); // The sum is: 15
```

**Wichtige Punkte betonen:**

- Addition: `+`
- Subtraktion: `-`
- Multiplikation: `*`
- Division: `/`
- String-Konkatenation mit `+`

**Auf Tutorial verweisen:**

- [10.01 - Variables and Operations](../10-tutorials/10-basics/10.01-variables-and-operations.md)
- [10.02 - Strings and Numbers](../10-tutorials/10-basics/10.02-strings-and-numbers.md)

---

### 🔨 V - Verarbeiten (20 Minuten)

**Ziel:** Eigenständige Anwendung und Übung

#### Übung 1: Variablen und Operationen (10 Min)

- [10.01 - Variables and Operations](../../20-assignments/10-basics/10.01-variables-and-operations/README.md)

**Einzelarbeit - Schüler:innen lösen die Aufgabe:**

- Variablen `a`, `b`, `c` verwenden
- Verschiedene mathematische Ausdrücke berechnen
- Werte ändern und Ergebnisse beobachten

#### Übung 2: Berechnungen (10 Min)

- [10.03 - Calculations](../../20-assignments/10-basics/10.03-calculations/README.md)

**Partner:innen-Arbeit - Praktische Anwendung:**

- Alltagsnahe Berechnungen durchführen
- Ergebnisse formatiert ausgeben

---

### ✅ A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Blitzlicht-Runde (3 Min):**

- Jede:r Schüler:in sagt einen Satz: "Heute habe ich gelernt, dass..."
- Fokus auf konkrete Erkenntnisse

**Ausblick (2 Min):**

- Nächstes Mal: Wie der Computer Entscheidungen treffen kann (if-Statements)
- Motivation: "Mit dem, was ihr heute gelernt habt, könnt ihr schon einfache
  Programme schreiben!"

---

## Materialien & Vorbereitung

### Digitale Ressourcen:

- [Lernschritt](../10-tutorials/10-basics/README.md)
- [Aufgaben](../../20-assignments/10-basics/README.md)

### Backup-Plan:

Falls Zeit übrig bleibt:

- Zusätzliche Challenge: Berechne den Durchschnitt von drei Zahlen
- Frage: Was passiert, wenn man durch 0 teilt? (In TypeScript: Infinity)

---

## Tipps für die Durchführung

### Timing beachten:

- Timer stellen für jede Phase
- Pufferzeit von 2-3 Minuten einplanen
- Bei Zeitdruck: Übung 2 verkürzen oder als Hausaufgabe

### Häufige Fehler:

- **Semikolon vergessen:** TypeScript ist da flexibel, aber Konsistenz ist
  wichtig
- **Variablennamen:** Keine Leerzeichen, keine Umlaute
- **String vs. Zahl:** "5" + "3" = "53", nicht 8!

### Differenzierung:

- **Schnelle Schüler:innen:** Lasse sie komplexere Formeln erstellen (z.B.
  Flächen- oder Volumenberechnung)
- **Langsame Schüler:innen:** Reduziere die Anzahl der Berechnungen, gib mehr
  Beispiele

### Aktivierung:

- Schüler:innen aktiv einbinden durch Fragen
- Live-Coding: Schüler:innen sollen Ergebnisse voraussagen
- Fehler absichtlich machen und korrigieren lassen

---

_This project is licensed under the [MIT License](../../LICENSE)._

---
