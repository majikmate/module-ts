# AVIVA Session Preparation: Zufallszahlen in TypeScript

**Thema:** Generierung und Verwendung von Zufallszahlen\
**Dauer:** 50 Minuten\
**Lernschritt:**
[40 - Zufallszahlen](../10-tutorials/40-random-numbers/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- `Math.random()` verwenden, um Zufallszahlen zu generieren
- Zufallszahlen auf bestimmte Bereiche skalieren
- `Math.floor()` nutzen, um ganzzahlige Zufallswerte zu erhalten
- Die Berechnungsformel für Zufallsbereiche anwenden
- Zufallszahlen in praktischen Programmen einsetzen

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Welche Spiele kennt ihr, die mit Würfeln oder Zufall
  funktionieren?"
- Lassen Sie 2-3 Schüler:innen ihre Beispiele teilen (Würfelspiele, Lotto,
  Kartenspiele)
- Überleitung: "Heute lernen wir, wie wir solche Zufallselemente in unseren
  Programmen einbauen können!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten
- Optional: Echter Würfel zum Demonstrieren

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu mathematischen Funktionen reaktivieren

**Aktivität 1 - Mathematische Funktionen (4 Min):**

```typescript
// What do these functions do?
Math.floor(3.7); // ?
Math.floor(2.1); // ?
Math.floor(5.9); // ?
```

**Fragen:**

- Was macht `Math.floor()`?
- Warum könnten wir das brauchen?

**Aktivität 2 - Bereiche und Skalierung (4 Min):**

- Frage: "Ein Würfel zeigt Zahlen von 1 bis 6. Wie viele verschiedene Werte sind
  das?"
- Diskussion über Bereiche: Von-Bis, Anzahl der Werte
- Überleitung: "`Math.random()` gibt uns Zahlen von 0 bis 1 - wir müssen sie
  transformieren!"

---

### 💡 I - Informieren (12 Minuten)

**Ziel:** Neue Konzepte vermitteln

#### Teil 1: Math.random() Grundlagen (6 Min)

**Live-Coding am Beamer:**

```typescript
// Math.random() returns a number between 0 and 1
console.log(Math.random()); // e.g., 0.7234
console.log(Math.random()); // e.g., 0.2891
console.log(Math.random()); // e.g., 0.5432

// Always a different number (almost)!

// Scale to 0-10
let scaled = Math.random() * 10;
console.log(scaled); // e.g., 7.234

// Make it an integer
let integer = Math.floor(Math.random() * 10);
console.log(integer); // e.g., 7 (values: 0-9)
```

**Wichtige Punkte betonen:**

- `Math.random()` gibt Werte zwischen 0 (inklusive) und 1 (exklusive)
- Multiplikation skaliert den Bereich
- `Math.floor()` rundet ab zur nächsten Ganzzahl
- Jeder Aufruf gibt eine neue Zufallszahl

#### Teil 2: Würfel-Simulation (6 Min)

**Live-Coding am Beamer:**

```typescript
// Dice roll: 1 to 6
// Step by step:

// 1. Math.random() → 0 to 1 (e.g., 0.7234)
// 2. Math.random() * 6 → 0 to 6 (e.g., 4.3404)
// 3. Math.floor(Math.random() * 6) → 0 to 5 (e.g., 4)
// 4. Math.floor(Math.random() * 6) + 1 → 1 to 6 (e.g., 5)

let dice = Math.floor(Math.random() * 6) + 1;
console.log("You rolled: " + dice);

// General formula for range [min, max]:
// Math.floor(Math.random() * (max - min + 1)) + min

// Example: Random number from 10 to 20
let randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
console.log(randomNumber);
```

**Wichtige Punkte betonen:**

- Formel für Würfel: `Math.floor(Math.random() * 6) + 1`
- Allgemeine Formel: `Math.floor(Math.random() * (max - min + 1)) + min`
- Schrittweise Erklärung hilft beim Verstehen

**Auf Tutorial verweisen:**

- [04.01 - Random Numbers](../10-tutorials/40-random-numbers/04.01-random-numbers.md)

---

### 🔨 V - Verarbeiten (20 Minuten)

**Ziel:** Eigenständige Anwendung und Übung

#### Übung 1: Würfelwurf (10 Min)

- [40.02 - Dice Roll](../../20-assignments/40-random-numbers/40.02-dice-roll/README.md)

**Einzelarbeit - Schüler:innen implementieren:**

- Einzelnen Würfelwurf (1-6)
- Zwei Würfel werfen und Summe berechnen
- Ausgabe formatieren

#### Übung 2: Zufällige Auswahl (10 Min)

- [40.03 - Random Choice](../../20-assignments/40-random-numbers/40.03-random-choice/README.md)

**Partner:innen-Arbeit - Praktische Anwendung:**

- Zufällige Auswahl aus Optionen
- Kreative Nutzung von Zufallszahlen

---

### ✅ A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Schnelle Versteh-Checks (3 Min):**

Fragen an die Klasse:

- Was ist der Wertebereich von `Math.random()`?
- Warum brauchen wir `Math.floor()`?
- Wie erzeugt man eine Zufallszahl von 1 bis 10?

**Ausblick (2 Min):**

- Nächstes Mal: Logische Operatoren (`&&`, `||`, `!`)
- Motivation: "Mit Zufallszahlen könnt ihr Spiele viel interessanter machen!"

---

## Materialien & Vorbereitung

### Digitale Ressourcen:

- [Lernschritt](../10-tutorials/40-random-numbers/README.md)
- [Aufgaben](../../20-assignments/40-random-numbers/README.md)

### Backup-Plan:

Falls Zeit übrig bleibt:

- Zusätzliche Challenge: Münzwurf-Simulation (Kopf oder Zahl)
- Diskussion: Sind Computer-Zufallszahlen wirklich zufällig? (Pseudozufall)

---

## Tipps für die Durchführung

### Timing beachten:

- Timer stellen für jede Phase
- Pufferzeit von 2-3 Minuten einplanen
- Bei Zeitdruck: Übung 2 verkürzen oder als Hausaufgabe

### Häufige Fehler:

- **Bereich falsch:** `* 6` ergibt 0-5, nicht 1-6 (daher `+ 1`)
- **Math.floor vergessen:** Dezimalzahlen statt Ganzzahlen
- **Formel verwechseln:** Immer die allgemeine Formel zeigen

### Differenzierung:

- **Schnelle Schüler:innen:** Lasse sie komplexere Zufallssysteme erstellen
  (z.B. gewichtete Zufallszahlen, Lotterie-Simulation)
- **Langsame Schüler:innen:** Konzentriere dich auf einfache Würfelwürfe, gib
  die Formel vor

### Aktivierung:

- Schüler:innen aktiv einbinden durch Fragen
- Live-Coding: Schüler:innen sollen Bereiche voraussagen
- Praktische Beispiele nutzen (Spiele, Lotto, etc.)
- Mehrmals würfeln lassen, um Zufall zu demonstrieren

---

_This project is licensed under the [MIT License](../../LICENSE)._

---
