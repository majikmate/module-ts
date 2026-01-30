# AVIVA Session Preparation: Logische Operatoren und Ausdrücke

**Thema:** Boolesche Logik und logische Verknüpfungen\
**Dauer:** 50 Minuten\
**Lernschritt:**
[50 - Logische Operatoren](../10-tutorials/50-boolean-statements-and-expressions/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Logische Operatoren (`&&`, `||`, `!`) benennen und verwenden
- Den Unterschied zwischen Statements und Expressions erklären
- Komplexe Bedingungen mit logischen Operatoren erstellen
- Wahrheitstabellen verstehen und anwenden
- Die Operatorrangfolge (NOT vor AND vor OR) beachten

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Stellt euch vor, ihr dürft nur ins Kino, wenn ihr alt
  genug SIND UND genug Geld habt. Was bedeutet dieses UND?"
- Lassen Sie 2-3 Schüler:innen erklären (beide Bedingungen müssen stimmen)
- Überleitung: "Heute lernen wir, wie wir solche logischen Verknüpfungen in
  unseren Programmen verwenden!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Bedingungen reaktivieren

**Aktivität 1 - Alltags-Logik (4 Min):**

- Sammle Beispiele aus dem Alltag:
  - "Ich gehe schwimmen, wenn es warm ist UND nicht regnet"
  - "Ich nehme den Bus ODER das Fahrrad"
  - "Es ist NICHT kalt"
- Betone die Wörter UND, ODER, NICHT

**Aktivität 2 - Boolean-Wiederholung (4 Min):**

```typescript
let age = 15;
let hasTicket = true;

// What are the results?
age > 12; // true or false?
hasTicket; // true or false?
age == 18; // true or false?
```

**Fragen:**

- Was ist ein boolean-Wert?
- Welche zwei Werte kann ein boolean haben?

**Überleitung:** "Jetzt lernen wir, wie wir mehrere boolean-Werte kombinieren!"

---

### 💡 I - Informieren (12 Minuten)

**Ziel:** Neue Konzepte vermitteln

#### Teil 1: Logische Operatoren (6 Min)

**Live-Coding am Beamer:**

```typescript
// AND (&&) - Both conditions must be true
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive!");
}

// OR (||) - At least one condition must be true
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("You can sleep in!");
}

// NOT (!) - Inverts the boolean value
let isRaining = false;

if (!isRaining) {
    console.log("You can go outside!");
}
```

**Wichtige Punkte betonen:**

- `&&` (AND): Beide Bedingungen müssen wahr sein
- `||` (OR): Mindestens eine Bedingung muss wahr sein
- `!` (NOT): Kehrt den Wert um (true → false, false → true)

#### Teil 2: Wahrheitstabellen und Komplexität (6 Min)

**Live-Coding am Beamer:**

```typescript
// Truth tables demonstration
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// Complex conditions
let temperature = 22;
let humidity = 55;

// Perfect outdoor conditions
if (temperature >= 20 && temperature <= 25 && humidity < 60) {
    console.log("Perfect day for outdoor activities!");
}

// Operator precedence: NOT before AND before OR
// ! → && → ||

let x = true;
let y = false;
let z = true;

// Evaluated as: x || (y && z)
console.log(x || y && z); // true
```

**Wichtige Punkte betonen:**

- Wahrheitstabellen helfen beim Verstehen
- Komplexe Bedingungen durch Kombination
- Rangfolge: NOT vor AND vor OR
- Klammern für bessere Lesbarkeit

**Auf Tutorial verweisen:**

- [50.01 - Boolean Operations](../10-tutorials/50-boolean-statements-and-expressions/50.01-boolean-operations.md)
- [50.02 - Statements and Expressions](../10-tutorials/50-boolean-statements-and-expressions/50.02-statements-and-expressions.md)

---

### 🔨 V - Verarbeiten (20 Minuten)

**Ziel:** Eigenständige Anwendung und Übung

#### Übung 1: Outdoor Activities (10 Min)

- [40.01 - Outdoor Activities](../../20-assignments/50-logical-operators/40.01-outdoor-activities/README.md)

**Einzelarbeit - Schüler:innen implementieren:**

- Temperatur- und Feuchtigkeits-Check mit `&&`
- Entscheidung über Outdoor-Aktivitäten
- Verstehen der AND-Verknüpfung

#### Übung 2: Movie Ticket Checker (10 Min)

- [40.04 - Movie Ticket Checker](../../20-assignments/50-logical-operators/40.04-movie-ticket-checker/README.md)

**Partner:innen-Arbeit - Komplexere Bedingungen:**

- Verwendung von AND, OR und NOT
- Mehrere Bedingungen kombinieren
- Praktische Anwendung der Operatoren

---

### ✅ A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Schnelle Quiz-Runde (3 Min):**

Fragen an die Klasse:

- Was ist das Ergebnis von `true && false`?
- Was ist das Ergebnis von `true || false`?
- Was macht der `!` Operator?
- Welcher Operator hat höhere Priorität: `&&` oder `||`?

**Ausblick (2 Min):**

- Nächstes Mal: Schleifen (for-Loops)
- Motivation: "Mit logischen Operatoren könnt ihr sehr präzise Bedingungen
  formulieren!"

---

## Materialien & Vorbereitung

### Digitale Ressourcen:

- [Lernschritt](../10-tutorials/50-boolean-statements-and-expressions/README.md)
- [Aufgaben](../../20-assignments/50-logical-operators/README.md)

### Backup-Plan:

Falls Zeit übrig bleibt:

- Zusätzliche Challenge: Verschachtelte logische Ausdrücke
- Diskussion: De Morgan's Gesetze (erweitert)

---

## Tipps für die Durchführung

### Timing beachten:

- Timer stellen für jede Phase
- Pufferzeit von 2-3 Minuten einplanen
- Bei Zeitdruck: Übung 2 verkürzen oder als Hausaufgabe

### Häufige Fehler:

- **`&` statt `&&`:** Bitweiser vs. logischer Operator
- **`|` statt `||`:** Gleicher Fehler wie bei AND
- **Operatorrangfolge:** Ohne Klammern kann es verwirrend werden
- **Doppelte Verneinung:** `!!x` ist kompliziert

### Differenzierung:

- **Schnelle Schüler:innen:** Lasse sie De Morgan's Gesetze erforschen oder sehr
  komplexe Bedingungen formulieren
- **Langsame Schüler:innen:** Konzentriere dich auf einfache AND/OR Beispiele,
  nutze visuelle Wahrheitstabellen

### Aktivierung:

- Schüler:innen aktiv einbinden durch Fragen
- Live-Coding: Schüler:innen sollen Ergebnisse voraussagen
- Wahrheitstabellen gemeinsam ausfüllen
- Alltagsbeispiele verwenden (Kino, Wetter, Spiele)
- Fehler absichtlich machen und korrigieren lassen

---

_This project is licensed under the [CC BY-SA 4.0](../../LICENSE)._

---
