# AVIVA Session Preparation: Arrays in TypeScript

**Thema:** Arrays und Iteration\
**Dauer:** 50 Minuten\
**Lernschritt:** [70 - Arrays](../10-tutorials/70-arrays/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Arrays deklarieren und initialisieren
- Auf Array-Elemente über Indizes zugreifen
- Arrays mit for-Schleifen durchlaufen
- Array-Werte aggregieren (Summen, Durchschnitte)

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Stellt euch vor, ihr müsst die Noten von 25 Schüler:innen
  speichern - wie würdet ihr das mit dem machen, was ihr bisher kennt?"
- Lassen Sie 2-3 Schüler:innen ihre Ideen teilen (vermutlich: einzelne
  Variablen)
- Überleitung: "Heute lernen wir eine elegantere Lösung kennen: Arrays!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Variablen und Schleifen reaktivieren

**Aktivität 1 - Wiederholung Variablen (3 Min):**

```typescript
let grade1 = 1;
let grade2 = 3;
let grade3 = 2;
// ... Problem becomes visible!
```

**Aktivität 2 - Wiederholung for-Schleifen (5 Min):**

```typescript
for (let i = 1; i <= 5; i = i + 1) {
    console.log(i);
}
```

**Fragen:**

- Was macht eine for-Schleife?
- Wofür steht `i`?
- Wann endet die Schleife?

**Überleitung:** "Arrays und Schleifen sind beste Freunde - gleich seht ihr
warum!"

---

### 💡 I - Informieren (12 Minuten)

**Ziel:** Neue Konzepte vermitteln

#### Teil 1: Array-Grundlagen (6 Min)

**Live-Coding am Beamer:**

```typescript
// Declare and initialize array
const grades = [1, 3, 2];

// Add new elements
grades.push(4);
grades.push(1);

// Access individual elements
console.log(grades[0]); // 1 (first element!)
console.log(grades[2]); // 2

// Array length
console.log(grades.length); // 5
```

**Wichtige Punkte betonen:**

- Arrays beginnen bei Index 0!
- `.push()` fügt Elemente am Ende hinzu
- `.length` gibt die Anzahl der Elemente zurück
- Arrays können beliebig viele Werte speichern
- Zugriff ausserhalb der Array Grenzen liefert `undefined`

#### Teil 2: Arrays und for-Schleife (6 Min)

**Live-Coding am Beamer:**

```typescript
// We use the 'grades' array from Part 1: [1, 3, 2, 4, 1]

// Output all grades
for (let i = 0; i < grades.length; i = i + 1) {
    console.log(grades[i]);
}

// Calculate sum
let sum = 0;
for (let i = 0; i < grades.length; i = i + 1) {
    sum = sum + grades[i];
}
console.log("Sum: " + sum); // 11

// Calculate average
let average = sum / grades.length;
console.log("Average: " + average); // 2.2
```

**Auf Video-Tutorial verweisen:**

- [70.01 - Arrays & for loop](../10-tutorials/70-arrays/70.01-arrays-and-for-loop.md)

---

### 🔨 V - Verarbeiten (20 Minuten)

**Ziel:** Eigenständige Anwendung und Übung

#### Übung: Array-Operationen

- [70.01 - Values](../../20-assignments/70-arrays/70.01-values/README.md)

**Partner:innen-Arbeit - Schüler:innen arbeiten zu zweit an der Lösung**

---

### ✅ A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Quiz (5 Min):**

- [Kahoot](https://create.kahoot.it/share/typescript-arrays/35caecc7-fd05-4af3-b5ce-18af984ddd10)

---

## Materialien & Vorbereitung

### Digitale Ressourcen:

- [Lernschritt](../10-tutorials/70-arrays/README.md)
- [Aufgaben](../../20-assignments/70-arrays/README.md)

### Backup-Plan:

Falls Zeit übrig bleibt:

- Zusätzliche Challenge: Maximum/Minimum in einem Array finden
- Frage: Kann ein Array verschiedene Datentypen enthalten? (in TypeScript: nein,
  außer mit mixed types)

---

## Tipps für die Durchführung

### Timing beachten:

- Timer stellen für jede Phase
- Pufferzeit von 2-3 Minuten einplanen
- Bei Zeitdruck: Übung 3 verkürzen

### Häufige Fehler:

- **Index-Fehler:** Schüler:innen vergessen, dass Arrays bei 0 beginnen
- **Schleifen-Fehler:** `i <= length` statt `i < length` → ArrayIndexOutOfBounds
- **Off-by-one Fehler:** Immer wieder betonen!

### Differenzierung:

- **Schnelle Schüler:innen:** Lasse sie Arrays mit Strings oder gemischten
  Aufgaben erstellen
- **Langsame Schüler:innen:** Gib mehr Hilfestellung, arbeite mit kleineren
  Arrays (3 Elemente)

### Aktivierung:

- Schüler:innen aktiv einbinden durch Fragen
- Live-Coding: Schüler:innen sollen Ergebnisse voraussagen
- Fehler absichtlich machen und korrigieren lassen

---

## Reflexion nach der Session

**Für die Lehrperson - nach der Session ausfüllen:**

- Was hat gut funktioniert?
- Wo gab es Verständnisprobleme?
- Zeitmanagement OK?
- Anpassungen für nächstes Mal:

---

_This project is licensed under the [MIT License](../../LICENSE)._
