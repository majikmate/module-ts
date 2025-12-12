# AVIVA Session Preparation: Schleifen in TypeScript

**Thema:** for-Schleifen und Iteration\
**Dauer:** 50 Minuten\
**Lernschritt:** [60 - Schleifen](../10-tutorials/60-loops/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Die Bestandteile einer for-Schleife (Initialisierung, Bedingung, Inkrement)
  benennen
- Einfache Zählschleifen implementieren
- Werte in Schleifen akkumulieren (Summen, Durchschnitte)
- Den Ablauf einer Schleife Schritt für Schritt nachvollziehen
- Schleifen zur Automatisierung von Wiederholungen nutzen

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Stellt euch vor, ihr müsst 100 mal 'Ich soll nicht
  schwätzen' schreiben. Wie fühlt sich das an?"
- Lassen Sie 2-3 Schüler:innen reagieren (langweilig, mühsam)
- Überleitung: "Der Computer liebt Wiederholungen! Heute lernen wir, wie wir ihm
  sagen können, dass er etwas viele Male tun soll!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Variablen und Bedingungen reaktivieren

**Aktivität 1 - Zählen (3 Min):**

- Frage: "Wie würdet ihr mit dem, was ihr bisher kennt, die Zahlen 1 bis 5
  ausgeben?"
- Erwartete Antwort: 5 `console.log()` Statements
- Zeigen, wie mühsam das ist

```typescript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// Tedious! There must be a better way...
```

**Aktivität 2 - Vergleiche und Inkremente (5 Min):**

```typescript
let i = 0;

i < 5; // true or false?

i = i + 1; // What does this do?
```

**Fragen:**

- Was bedeutet `i = i + 1`?
- Wie oft müssten wir das machen, um von 0 auf 5 zu kommen?

**Überleitung:** "for-Schleifen machen genau das automatisch!"

---

### 💡 I - Informieren (12 Minuten)

**Ziel:** Neue Konzepte vermitteln

#### Teil 1: for-Schleifen Grundlagen (6 Min)

**Live-Coding am Beamer:**

```typescript
// Basic for loop structure
for (let i = 1; i <= 5; i = i + 1) {
    console.log(i);
}

// Output: 1, 2, 3, 4, 5

// Let's break it down:
// 1. Initialization: let i = 1 (start at 1)
// 2. Condition: i <= 5 (continue while true)
// 3. Increment: i = i + 1 (add 1 after each iteration)
// 4. Body: console.log(i) (what to repeat)
```

**Wichtige Punkte betonen:**

- Drei Teile im `for()`: Initialisierung; Bedingung; Inkrement
- `i` ist die Laufvariable (von "index" oder "iterator")
- Schleife läuft, solange die Bedingung wahr ist
- Inkrement wird nach jedem Durchlauf ausgeführt

#### Teil 2: Akkumulation in Schleifen (6 Min)

**Live-Coding am Beamer:**

```typescript
// Calculate sum of numbers 1 to 100
let sum = 0;

for (let i = 1; i <= 100; i = i + 1) {
    sum = sum + i;
}

console.log("Sum: " + sum); // 5050

// Calculate average
let count = 10;
let total = 0;

for (let i = 1; i <= count; i = i + 1) {
    total = total + i;
}

let average = total / count;
console.log("Average: " + average); // 5.5

// Countdown
for (let i = 10; i >= 1; i = i - 1) {
    console.log(i);
}
console.log("Liftoff!");
```

**Wichtige Punkte betonen:**

- Akkumulator-Variable außerhalb der Schleife initialisieren
- In jedem Durchlauf zum Akkumulator addieren
- Schleifen können auch rückwärts zählen (Dekrement)
- Flexibilität: Start, Ende, Schrittweite anpassbar

**Auf Tutorial verweisen:**

- [60.01 - Loops](../10-tutorials/60-loops/60.01-loops.md)

---

### 🔨 V - Verarbeiten (20 Minuten)

**Ziel:** Eigenständige Anwendung und Übung

#### Übung 1: Summe von 1 bis 100 (10 Min)

- [60.01 - Sum of Numbers](../../20-assignments/60-loops/60.01-sum-of-numbers/README.md)

**Einzelarbeit - Schüler:innen implementieren:**

- for-Schleife von 1 bis 100
- Summe akkumulieren
- Ergebnis ausgeben (sollte 5050 sein)

#### Übung 2: Durchschnitt berechnen (10 Min)

- [60.06 - Calculate Average](../../20-assignments/60-loops/60.06-calculate-average/README.md)

**Partner:innen-Arbeit - Erweiterte Akkumulation:**

- Mehrere Werte sammeln
- Durchschnitt berechnen
- Verständnis für Akkumulation vertiefen

---

### ✅ A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Schnelle Versteh-Checks (3 Min):**

Fragen an die Klasse:

- Was sind die drei Teile einer for-Schleife?
- Wann endet eine Schleife?
- Wofür steht `i` normalerweise?
- Wie zählt man rückwärts in einer Schleife?

**Ausblick (2 Min):**

- Nächstes Mal: Arrays (Listen von Werten)
- Motivation: "Schleifen werden noch mächtiger, wenn wir sie mit Arrays
  kombinieren!"

---

## Materialien & Vorbereitung

### Digitale Ressourcen:

- [Lernschritt](../10-tutorials/60-loops/README.md)
- [Aufgaben](../../20-assignments/60-loops/README.md)

### Backup-Plan:

Falls Zeit übrig bleibt:

- Zusätzliche Challenge: Fakultät berechnen (n!)
- Diskussion: Was passiert bei einer Endlosschleife? (Bedingung nie falsch)

---

## Tipps für die Durchführung

### Timing beachten:

- Timer stellen für jede Phase
- Pufferzeit von 2-3 Minuten einplanen
- Bei Zeitdruck: Übung 2 als Hausaufgabe

### Häufige Fehler:

- **Endlosschleife:** `i <= 100` mit `i = i - 1` → läuft ewig!
- **Off-by-one:** `i < 100` vs. `i <= 100` (Unterschied von 1)
- **Falsche Initialisierung:** Akkumulator nicht auf 0 setzen
- **Semikolon vergessen:** Zwischen den drei Teilen `;` verwenden

### Differenzierung:

- **Schnelle Schüler:innen:** Lasse sie verschachtelte Schleifen erforschen oder
  komplexere Berechnungen (Fibonacci, Primzahlen)
- **Langsame Schüler:innen:** Konzentriere dich auf einfache Zählschleifen,
  zeichne den Ablauf auf Papier

### Aktivierung:

- Schüler:innen aktiv einbinden durch Fragen
- Live-Coding: Schüler:innen sollen Ergebnisse voraussagen
- Schleifenablauf gemeinsam an der Tafel durchgehen
- Fehler absichtlich machen (Endlosschleife) und stoppen müssen
- Visualisierung: Laufvariable Schritt für Schritt zeigen

---

_This project is licensed under the [MIT License](../../LICENSE)._

---
