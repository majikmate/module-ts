# AVIVA Session Preparation: Benutzereingaben in TypeScript

**Thema:** User Input und Typkonvertierung\
**Dauer:** 50 Minuten\
**Lernschritt:** [30 - Inputs](../10-tutorials/30-inputs/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Die Funktion `prompt()` benennen
- Den Unterschied zwischen String- und Number-Typen erklären
- Benutzereingaben mit `prompt()` entgegennehmen
- Strings in Zahlen konvertieren
- Benutzereingaben validieren

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Welche Apps oder Programme benutzt ihr, die nach Eingaben
  fragen?"
- Beispiele sammeln: Login-Formulare, Taschenrechner, Spiele
- Überleitung: "Heute lernen wir, wie man Eingaben von Benutzern entgegennimmt!"

**Materialien:**

- Whiteboard oder Flipchart für Beispiele

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Variablen und Datentypen reaktivieren

**Aktivität 1 - Wiederholung Variablen und Typen (5 Min):**

```typescript
let name = "Anna"; // String
let age = 25; // Number
let isStudent = true; // Boolean
```

**Fragen:**

- Was ist ein String?
- Was ist eine Number?
- Wie gibt man Werte mit `console.log()` aus?

**Aktivität 2 - Wiederholung if-Statements (3 Min):**

```typescript
if (age >= 18) {
    console.log("Erwachsen");
}
```

**Überleitung:** "Jetzt lernen wir, wie Benutzer selbst Werte eingeben können!"

---

### 💡 I - Informieren (12 Minuten)

**Ziel:** Neue Konzepte vermitteln

#### Teil 1: `prompt()` Grundlagen (6 Min)

**Live-Coding am Beamer:**

```typescript
// User input with prompt()
const name = prompt("Wie heißt du?");
console.log("Hallo, " + name + "!");

// Important: prompt() always returns a STRING!
const ageInput = prompt("Wie alt bist du?");
console.log(typeof ageInput); // "string"
```

**Wichtige Punkte betonen:**

- `prompt()` zeigt eine Eingabebox
- Rückgabewert ist **immer** ein String
- Auch wenn man eine Zahl eingibt, ist es ein String!

#### Teil 2: Typkonvertierung (6 Min)

**Live-Coding am Beamer:**

```typescript
// String to Number conversion
const ageString = prompt("Wie alt bist du?");
const age = Number(ageString);

// Now we can do math!
const nextYear = age + 1;
console.log("Nächstes Jahr bist du " + nextYear);

// Alternative: parseInt()
const number = parseInt("42");
console.log(number); // 42
```

**Auf Video-Tutorial verweisen:**

- [30.01 - Inputs](../10-tutorials/30-inputs/30.01-inputs.md)

---

### 🔨 V - Verarbeiten (20 Minuten)

**Ziel:** Eigenständige Anwendung und Übung

#### Übung 1: Password Check (8 Min)

Bearbeitet das folgende Assignment:

- [30.01 - Password](../../20-assignments/30-inputs/30.01-password/README.md)

**Aufgabe:** Programm schreiben, das ein Passwort abfragt und prüft.

#### Übung 2: Calculator (12 Min)

Bearbeitet das folgende Assignment:

- [30.03 - Calculator](../../20-assignments/30-inputs/30.03-calculator/README.md)

**Aufgabe:** Taschenrechner mit zwei Zahlen und einer Rechenart (+, -, *, /).

**Partner:innen-Arbeit - Schüler:innen arbeiten zu zweit an den Lösungen**

---

### ✅ A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Kahoot Quiz (5 Min):**

- Durchführung eines Kahoot-Quiz zur Festigung der Input-Grundlagen.

---

## Materialien & Vorbereitung

### Digitale Ressourcen:

- [Lernschritt](../10-tutorials/30-inputs/README.md)
- [Aufgaben](../../20-assignments/30-inputs/README.md)

### Backup-Plan:

Falls Zeit übrig bleibt:

- Zusätzliche Challenge: Age Check oder Number Check Assignments
- Diskussion: Was passiert, wenn der Benutzer ungültige Eingaben macht?

---

## Tipps für die Durchführung

### Timing beachten:

- Timer stellen für jede Phase
- Pufferzeit von 2-3 Minuten einplanen
- Password Check ist schneller als Calculator - Zeit entsprechend anpassen

### Häufige Fehler:

- **Vergessen, String in Number zu konvertieren:** "5" + 1 = "51" statt 6
- **typeof verwechseln:** Zeige mit `typeof` den Unterschied
- **prompt() vergessen:** Eingabe kommt nie an

### Differenzierung:

- **Schnelle Schüler:innen:** Lasse sie Age Check (30.04) oder Grade Evaluation
  (30.06) machen
- **Langsame Schüler:innen:** Fokus auf Password Check, Calculator als Bonus

### Aktivierung:

- Live-Demonstration mit echten Eingaben
- Schüler:innen Beispiele nennen lassen
- Fehler bewusst machen: "5" + 1 vs. 5 + 1

---

## Reflexion nach der Session

**Für die Lehrperson - nach der Session ausfüllen:**

- Was hat gut funktioniert?
- Wo gab es Verständnisprobleme?
- Zeitmanagement OK?
- Anpassungen für nächstes Mal:

---

_This project is licensed under the [MIT License](../../LICENSE)._
