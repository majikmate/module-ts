# AVIVA Session Preparation: Funktionen in TypeScript

**Thema:** Funktionsdefinition, Parameter, Rückgabewerte und Arrow-Funktionen\
**Dauer:** 50 Minuten\
**Lernschritt:** [80 - Funktionen](../10-tutorials/80-functions/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Funktionen definieren und aufrufen
- Parameter an Funktionen übergeben und Rückgabewerte verwenden
- Funktionen als Werte (First-Class Functions) behandeln
- Arrow-Funktionen schreiben und anwenden
- Den Unterschied zwischen verschiedenen Funktionssyntaxen erklären

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Stellt euch vor, ihr müsst an 10 verschiedenen Stellen im
  Code zwei Zahlen addieren. Würdet ihr den Code 10 mal kopieren?"
- Lassen Sie 2-3 Schüler:innen ihre Gedanken teilen
- Überleitung: "Funktionen helfen uns, Code wiederzuverwenden und besser zu
  organisieren - wie Rezepte, die wir immer wieder nutzen können!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Code-Wiederverwendung und bekannten Funktionen
reaktivieren

**Aktivität 1 - Code-Wiederholung identifizieren (3 Min):**

```typescript
// Same calculation repeated everywhere
const sum1 = 5 + 3;
console.log(sum1);

const sum2 = 10 + 7;
console.log(sum2);

const sum3 = 2 + 9;
console.log(sum3);
// Problem: Repetitive code - hard to maintain!
```

**Fragen:**

- Was müssten wir ändern, wenn wir statt Addition Multiplikation wollen?
- Wie oft müssten wir den Code anfassen?

**Aktivität 2 - Bekannte Funktionen (5 Min):**

- Frage: "Welche Funktionen kennt ihr bereits?"
- Erwartete Antworten: `console.log()`, `prompt()`, `Math.random()`
- An der Tafel sammeln und analysieren:

```typescript
console.log("Hello"); // Takes parameter, returns nothing (void)
const input = prompt("Your name?"); // Takes parameter, returns string
const random = Math.random(); // No parameter, returns number
```

**Überleitung:** "Heute lernen wir, eigene Funktionen zu schreiben - wie diese
eingebauten Funktionen!"

---

### 💡 I - Informieren (15 Minuten)

**Ziel:** Neue Konzepte vermitteln - alle drei Tutorial-Themen abdecken

#### Teil 1: Functions Basics (6 Min)

**Auf Video-Tutorial verweisen:**

- [80.01 - Functions Basics](../10-tutorials/80-functions/80.01-functions-basics.md)

**Live-Coding am Beamer:**

```typescript
// Define a function that greets a person
function greet(name: string): void {
    console.log("Hello, " + name + "!");
}

// Call the function multiple times
greet("Alice");
greet("Bob");
greet("Charlie");

// Function with return value
function add(a: number, b: number): number {
    return a + b;
}

// Use the returned value
const sum = add(5, 3);
console.log("Sum:", sum); // 8

// Use in calculations
const result = add(10, 20) + add(5, 5);
console.log("Result:", result); // 40
```

**Wichtige Punkte betonen:**

- `function` Keyword startet Definition
- Parameter in Klammern mit Typen: `(name: string)`
- Rückgabetyp nach Doppelpunkt: `: void` oder `: number`
- `:void` bedeutet "gibt nichts zurück"
- `return` gibt einen Wert zurück und beendet die Funktion
- Funktionen können beliebig oft aufgerufen werden

#### Teil 2: Functions as Values (4 Min)

**Auf Video-Tutorial verweisen:**

- [80.02 - Functions as Values](../10-tutorials/80-functions/80.02-functions-as-values.md)

```typescript
// Functions are first-class citizens!
function multiply(a: number, b: number): number {
    return a * b;
}

// Assign function to variable
const operation = multiply;

// Call through variable
const result = operation(4, 5);
console.log("Result:", result); // 20

// Function expression - define and assign at once
const divide = function (a: number, b: number): number {
    return a / b;
};

console.log("Division:", divide(10, 2)); // 5
```

**Wichtige Punkte:**

- Funktionen sind Werte wie Zahlen oder Strings
- Können Variablen zugewiesen werden
- Function Expression: Definition ohne Namen, direkt in Variable
- Wichtig für spätere Themen (Array-Methoden!)

#### Teil 3: Arrow Functions (5 Min)

**Auf Video-Tutorial verweisen:**

- [80.03 - Arrow Functions](../10-tutorials/80-functions/80.03-arrow-functions.md)

```typescript
// Traditional function expression
const addTraditional = function (a: number, b: number): number {
    return a + b;
};

// Arrow function - shorter syntax!
const addArrow = (a: number, b: number): number => {
    return a + b;
};

// Arrow function with implicit return (single expression)
const addShort = (a: number, b: number): number => a + b;

// All three do the same!
console.log(addTraditional(2, 3)); // 5
console.log(addArrow(2, 3)); // 5
console.log(addShort(2, 3)); // 5

// Single parameter - parentheses optional
const square = (x: number): number => x * x;
console.log("Square of 5:", square(5)); // 25

// No parameters
const greet = (): void => {
    console.log("Hello, World!");
};
greet();
```

**Wichtige Punkte:**

- `=>` statt `function` Keyword
- Bei einem Ausdruck: kein `return` nötig (implicit return)
- Gleiche Funktionalität, nur kompaktere Syntax
- Sehr häufig bei Array-Methoden verwendet

---

### 🔧 V - Verarbeiten (17 Minuten)

**Ziel:** Aktive Anwendung und Übung für alle drei Tutorial-Bereiche

#### Übung 1: Function Basics (5 Min)

**Aufgabe Teil A:** Schreibt eine Funktion `welcome`, die einen Namen als
Parameter nimmt und "Willkommen, [Name]!" ausgibt.

**Aufgabe Teil B:** Schreibt eine Funktion `calculateArea`, die Länge und Breite
nimmt und die Fläche zurückgibt.

```typescript
// Solution A
function welcome(name: string): void {
    console.log("Willkommen, " + name + "!");
}
welcome("Maria");

// Solution B
function calculateArea(length: number, width: number): number {
    return length * width;
}
const area = calculateArea(5, 3);
console.log("Area:", area); // 15
```

#### Übung 2: Functions as Values (5 Min)

**Aufgabe:** Schreibt eine Funktion `subtract` als Function Expression (also
ohne `function` Keyword, direkt in eine Variable).

```typescript
// Solution
const subtract = function (a: number, b: number): number {
    return a - b;
};

console.log(subtract(10, 3)); // 7
```

#### Übung 3: Arrow Functions (7 Min)

**Aufgabe Teil A:** Wandelt diese Function Expression in eine Arrow Function um:

```typescript
const double = function (num: number): number {
    return num * 2;
};
```

**Aufgabe Teil B:** Schreibt eine Arrow Function `isPositive`, die prüft, ob
eine Zahl positiv ist (implicit return).

```typescript
// Solution A
const double = (num: number): number => num * 2;
console.log(double(7)); // 14

// Solution B
const isPositive = (num: number): boolean => num > 0;
console.log(isPositive(5)); // true
console.log(isPositive(-3)); // false
```

**Unterstützung während der Übungen:**

- Gehen Sie herum und helfen Sie bei Syntax-Problemen
- Häufige Fehler: Vergessene Typen, vergessenes `return`
- Bei Arrow Functions: Erklären Sie nochmal implicit return
- Ermutigen Sie Pair Programming

---

### 🎯 A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Reflexionsfragen an die Klasse:**

1. **Wiederverwendung:** Was ist der größte Vorteil von Funktionen?
   - _Erwartete Antwort: Code-Wiederverwendung, Vermeidung von Duplikation_
2. **void vs. return:** Wann verwenden wir `:void` als Rückgabetyp?
   - _Erwartete Antwort: Wenn die Funktion nichts zurückgibt, nur Aktionen
     ausführt_
3. **Syntax-Varianten:** Was ist der Unterschied zwischen `function` und Arrow
   Function?
   - _Erwartete Antwort: Nur unterschiedliche Syntax, gleiche Funktionalität;
     Arrow Functions sind kompakter_
4. **First-Class:** Was bedeutet es, dass Funktionen "First-Class Citizens"
   sind?
   - _Erwartete Antwort: Funktionen können wie Werte behandelt werden -
     zuweisen, übergeben_

**Quick Challenge (Optional):**

Ein:e Schüler:in kommt nach vorne und schreibt eine Arrow Function `isEven`, die
prüft, ob eine Zahl gerade ist.

```typescript
// Solution
const isEven = (num: number): boolean => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

**Zusammenfassung:**

- ✅ Funktionen organisieren Code und ermöglichen Wiederverwendung
- ✅ Parameter sind Inputs, Return-Werte sind Outputs
- ✅ Funktionen können Variablen zugewiesen werden (First-Class)
- ✅ Arrow Functions (`=>`) sind eine kompakte Alternative zu `function`
- ✅ Alle drei Formen werden wir häufig sehen - besonders Arrow Functions bei
  Array-Methoden!

---

## Hausaufgaben

**Zusätzliche Übung:**

Schreibt drei eigene Funktionen:

1. Eine Funktion `combineStrings`, die zwei Strings kombiniert und zurückgibt
2. Eine Funktion `isAdult`, die prüft, ob eine Person (Alter) volljährig ist
   (>= 18)
3. Eine Arrow Function `triple`, die eine Zahl verdreifacht

```typescript
// Examples
function combineStrings(str1: string, str2: string): string {
    return str1 + " " + str2;
}

const isAdult = (age: number): boolean => age >= 18;

const triple = (num: number): number => num * 3;
```

---

## Materialien & Ressourcen

- [Tutorial: 80.01 - Functions Basics](../10-tutorials/80-functions/80.01-functions-basics.md)
- [Tutorial: 80.02 - Functions as Values](../10-tutorials/80-functions/80.02-functions-as-values.md)
- [Tutorial: 80.03 - Arrow Functions](../10-tutorials/80-functions/80.03-arrow-functions.md)
- VS Code mit TypeScript-Unterstützung
- Beamer für Live-Coding

---

## Tipps für Lehrpersonen

- **Syntax-Fehler:** Häufige Fehler sind vergessene Typen (`:string`, `:number`)
  oder vergessene `return`-Statements
- **void vs. return:** Klarer Unterschied: `void` = macht etwas (console.log),
  `return` = gibt Wert zurück
- **Function vs. Arrow:** Betonen Sie, dass beide das Gleiche tun, nur andere
  Syntax. Arrow Functions werden häufiger in modernem Code verwendet
- **First-Class Functions:** Dieses Konzept ist fundamental für spätere Themen
  (Callbacks, Array-Iterator-Methoden)
- **Implicit Return:** Bei Arrow Functions mit nur einem Ausdruck kann `return`
  und `{}` weggelassen werden
- **Reihenfolge:** Erst traditionelle Functions erklären, dann Arrow Functions
  als Alternative zeigen
- **Praxis:** Funktionen sind fundamental - geben Sie viel Zeit zum Üben und
  Experimentieren!

---

_This project is licensed under the [CC BY-SA 4.0](../../LICENSE)._
