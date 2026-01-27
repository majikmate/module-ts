# AVIVA Session Preparation: Array-Iterator-Methoden in TypeScript

**Thema:** forEach, find, some/every, filter und map\
**Dauer:** 50 Minuten\
**Lernschritt:**
[90 - Array-Iterator-Methoden](../10-tutorials/90-array-iterator-methods/README.md)

## Lernziele

Die Schüler:innen können nach dieser Session:

- Mit `forEach()` über Arrays iterieren
- Mit `find()` das erste passende Element suchen
- Mit `some()` und `every()` Bedingungen prüfen
- Mit `filter()` Arrays nach Kriterien filtern
- Mit `map()` Arrays transformieren
- Array-Methoden kombinieren und verketten

---

## AVIVA-Phasen (50 Minuten)

### 📍 A - Ankommen (5 Minuten)

**Ziel:** Aktivierung und mentale Vorbereitung

**Aktivität:**

- Begrüßung und kurze Vorstellungsrunde zum Thema
- Frage in die Runde: "Ihr habt ein Array mit 100 Zahlen und wollt nur die
  geraden Zahlen. Wie würdet ihr das mit for-Schleifen machen?"
- Lassen Sie 2-3 Schüler:innen kurz beschreiben (for-Schleife, if-Statement,
  neues Array...)
- Überleitung: "Es gibt elegantere Wege! Array-Methoden nehmen uns viel Arbeit
  ab - wie ein Schweizer Taschenmesser für Arrays!"

**Materialien:**

- Whiteboard oder Flipchart für Schülerantworten

---

### 🧠 V - Vorwissen aktivieren (8 Minuten)

**Ziel:** Bisheriges Wissen zu Arrays, Schleifen und Funktionen reaktivieren

**Aktivität 1 - Arrays und for-Schleifen (4 Min):**

```typescript
const numbers = [1, 2, 3, 4, 5];

// Traditional way with for loop
for (let i = 0; i < numbers.length; i = i + 1) {
    console.log(numbers[i]);
}

// or with for-of
for (const num of numbers) {
    console.log(num);
}
```

**Fragen:**

- Wie greifen wir auf Array-Elemente zu?
- Was macht `length`?

**Aktivität 2 - Arrow Functions Review (4 Min):**

```typescript
// Functions can be passed as parameters!
const double = (x: number): number => x * 2;

console.log(double(5)); // 10
```

- Kurze Wiederholung: Arrow Function Syntax
- Betonen: Array-Methoden nehmen Funktionen als Parameter!

**Überleitung:** "Array-Iterator-Methoden kombinieren Arrays mit Funktionen - so
wird Code elegant und lesbar!"

---

### 💡 I - Informieren (18 Minuten)

**Ziel:** Neue Konzepte vermitteln - alle fünf Tutorial-Themen abdecken

#### Teil 1: forEach() - Iteration (3 Min)

**Auf Video-Tutorial verweisen:**

- [90.01 - ForEach Method](../10-tutorials/90-array-iterator-methods/90.01-foreach-method.md)

**Live-Coding am Beamer:**

```typescript
const numbers = [1, 2, 3, 4, 5];

// forEach - execute function for each element
numbers.forEach((num) => {
    console.log("Number:", num);
});

// With index parameter
const names = ["Alice", "Bob", "Charlie"];
names.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});
// Output: 1. Alice, 2. Bob, 3. Charlie

// Side effects - accumulate sum
let sum = 0;
numbers.forEach((num) => {
    sum = sum + num;
});
console.log("Sum:", sum); // 15
```

**Wichtige Punkte:**

- `forEach()` führt Funktion für jedes Element aus
- Gibt **nichts** zurück (undefined)
- Nimmt Callback-Funktion (oft Arrow Function)
- Parameter: Element, Index (optional)

#### Teil 2: find() - Suche (3 Min)

**Auf Video-Tutorial verweisen:**

- [90.02 - Find Method](../10-tutorials/90-array-iterator-methods/90.02-find-method.md)

```typescript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find first even number
const firstEven = numbers.find((num) => num % 2 === 0);
console.log("First even:", firstEven); // 2

// Find number greater than 5
const greaterThanFive = numbers.find((num) => num > 5);
console.log("First > 5:", greaterThanFive); // 6

// Returns undefined if nothing matches
const greaterThanTen = numbers.find((num) => num > 10);
console.log("Greater than 10:", greaterThanTen); // undefined

// Practical: Find in objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
const user = users.find((u) => u.age > 28);
console.log("User:", user); // { name: "Bob", age: 30 }
```

**Wichtige Punkte:**

- `find()` gibt **erstes** passendes Element zurück
- Gibt `undefined` wenn nichts gefunden
- Stoppt bei erstem Match (effizient!)

#### Teil 3: some() und every() - Bedingungen prüfen (4 Min)

**Auf Video-Tutorial verweisen:**

- [90.03 - Some and Every Methods](../10-tutorials/90-array-iterator-methods/90.03-some-and-every-methods.md)

```typescript
const numbers = [1, 2, 3, 4, 5];

// some() - at least ONE element matches
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("Has even:", hasEven); // true

// every() - ALL elements must match
const allPositive = numbers.every((num) => num > 0);
console.log("All positive:", allPositive); // true

const allEven = numbers.every((num) => num % 2 === 0);
console.log("All even:", allEven); // false

// Practical validation example
const ages = [18, 21, 25, 30];
const allAdults = ages.every((age) => age >= 18);
console.log("All adults:", allAdults); // true

const hasMinor = ages.some((age) => age < 18);
console.log("Has minor:", hasMinor); // false
```

**Wichtige Punkte:**

- `some()` → true wenn **mindestens ein** Element passt
- `every()` → true wenn **alle** Elemente passen
- Beide geben **boolean** zurück
- Perfekt für Validierung und Prüfungen

#### Teil 4: filter() - Filtern (4 Min)

**Auf Video-Tutorial verweisen:**

- [90.04 - Filter Method](../10-tutorials/90-array-iterator-methods/90.04-filter-method.md)

```typescript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Evens:", evens); // [2, 4, 6, 8, 10]

// Filter numbers greater than 5
const big = numbers.filter((num) => num > 5);
console.log("Big:", big); // [6, 7, 8, 9, 10]

// Filter strings by length
const names = ["Alice", "Bob", "Charlie", "Diana", "Ed"];
const longNames = names.filter((name) => name.length > 4);
console.log("Long names:", longNames); // ["Alice", "Charlie", "Diana"]

// Original array unchanged!
console.log("Original:", numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

**Wichtige Punkte:**

- `filter()` erstellt **neues Array** mit passenden Elementen
- Original bleibt unverändert (immutability)
- Callback gibt boolean zurück (keep or discard)
- Neues Array kann kürzer sein oder leer

#### Teil 5: map() - Transformation (4 Min)

**Auf Video-Tutorial verweisen:**

- [90.05 - Map Method](../10-tutorials/90-array-iterator-methods/90.05-map-method.md)

```typescript
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// Convert to strings
const strings = numbers.map((num) => "Number: " + num);
console.log(strings); // ["Number: 1", "Number: 2", ...]

// Square each number
const squared = numbers.map((num) => num * num);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]

// Transform to objects
const names = ["Alice", "Bob", "Charlie"];
const users = names.map((name) => ({ name: name, length: name.length }));
console.log(users);
// [{ name: "Alice", length: 5 }, { name: "Bob", length: 3 }, ...]

// Original unchanged
console.log("Original:", numbers); // [1, 2, 3, 4, 5]
```

**Wichtige Punkte:**

- `map()` transformiert **jedes** Element
- Erstellt neues Array **gleicher Länge**
- Original bleibt unverändert
- Perfekt für Umwandlungen und Transformationen

---

### 🔧 V - Verarbeiten (14 Minuten)

**Ziel:** Aktive Anwendung für alle fünf Methoden

#### Übung 1: forEach und find (4 Min)

**Aufgabe Teil A:** Gegeben ist ein Array mit Zahlen. Gebt alle Zahlen mit
`forEach()` aus.

**Aufgabe Teil B:** Findet die erste Zahl größer als 7.

```typescript
const numbers = [2, 5, 8, 3, 9, 1, 10];

// Solution A
numbers.forEach((num) => console.log("Number:", num));

// Solution B
const firstBig = numbers.find((num) => num > 7);
console.log("First > 7:", firstBig); // 8
```

#### Übung 2: some, every und filter (5 Min)

**Aufgabe Teil A:** Prüft, ob mindestens eine Zahl größer als 15 ist.

**Aufgabe Teil B:** Prüft, ob alle Zahlen positiv sind.

**Aufgabe Teil C:** Filtert alle ungeraden Zahlen.

```typescript
const numbers = [5, 12, 8, 20, 3];

// Solution A
const hasBig = numbers.some((num) => num > 15);
console.log("Has > 15:", hasBig); // true

// Solution B
const allPos = numbers.every((num) => num > 0);
console.log("All positive:", allPos); // true

// Solution C
const odds = numbers.filter((num) => num % 2 !== 0);
console.log("Odds:", odds); // [5, 3]
```

#### Übung 3: map Transformation (5 Min)

**Aufgabe Teil A:** Verdoppelt alle Zahlen.

**Aufgabe Teil B:** Wandelt ein Array von Namen in Begrüßungen um.

```typescript
const numbers = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie"];

// Solution A
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// Solution B
const greetings = names.map((name) => "Hello, " + name + "!");
console.log(greetings);
// ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
```

**Unterstützung:**

- Betonen Sie den Unterschied: forEach (keine Rückgabe) vs. map/filter (neue
  Arrays)
- Helfen Sie bei Callback-Syntax
- Zeigen Sie häufige Fehler (vergessene Klammern, return bei multi-line)

---

### 🎯 A - Auswerten (5 Minuten)

**Ziel:** Reflexion und Festigung

**Methoden-Kombination Demonstration (3 Min):**

Zeigen Sie, wie elegant Methoden kombiniert werden können:

```typescript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain methods: filter evens, double them, output
const result = numbers
    .filter((num) => num % 2 === 0) // [2, 4, 6, 8, 10]
    .map((num) => num * 2); // [4, 8, 12, 16, 20]

console.log("Result:", result);
```

**Reflexionsfragen (2 Min):**

1. **Rückgabewerte:** Was gibt `forEach()` zurück? Was gibt `map()` zurück?
   - _forEach: undefined, map: neues Array_
2. **Suchen:** Was ist der Unterschied zwischen `find()` und `filter()`?
   - _find: erstes Element, filter: alle passenden Elemente_
3. **Prüfungen:** Wann verwendet man `some()`, wann `every()`?
   - _some: mindestens eins, every: alle_
4. **Immutability:** Ändern diese Methoden das Original-Array?
   - _Nein, sie erstellen neue Arrays_

**Übersichtstabelle an der Tafel:**

| Methode    | Zweck           | Rückgabe      | Ändert Original? |
| ---------- | --------------- | ------------- | ---------------- |
| `forEach() | Iteration       | undefined     | Nein             |
| `find()`   | Suche (erstes)  | Element/undef | Nein             |
| `some()`   | Existenzprüfung | boolean       | Nein             |
| `every()`  | Vollständigkeit | boolean       | Nein             |
| `filter()` | Filtern         | neues Array   | Nein             |
| `map()`    | Transformation  | neues Array   | Nein             |

---

## Hausaufgaben

**Zusätzliche Übung mit Produkten:**

```typescript
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 300 },
];
```

Aufgaben:

1. Filtert alle Produkte unter 100€
2. Erstellt ein Array nur mit den Produktnamen
3. Findet das erste Produkt über 500€
4. Prüft, ob alle Produkte unter 2000€ sind
5. Prüft, ob mindestens ein Produkt unter 50€ ist

```typescript
// Solutions
const cheap = products.filter((p) => p.price < 100);
const names = products.map((p) => p.name);
const expensive = products.find((p) => p.price > 500);
const allAffordable = products.every((p) => p.price < 2000);
const hasVeryChea = products.some((p) => p.price < 50);
```

---

## Materialien & Ressourcen

- [Tutorial: 90.01 - ForEach Method](../10-tutorials/90-array-iterator-methods/90.01-foreach-method.md)
- [Tutorial: 90.02 - Find Method](../10-tutorials/90-array-iterator-methods/90.02-find-method.md)
- [Tutorial: 90.03 - Some and Every Methods](../10-tutorials/90-array-iterator-methods/90.03-some-and-every-methods.md)
- [Tutorial: 90.04 - Filter Method](../10-tutorials/90-array-iterator-methods/90.04-filter-method.md)
- [Tutorial: 90.05 - Map Method](../10-tutorials/90-array-iterator-methods/90.05-map-method.md)
- VS Code mit TypeScript-Unterstützung
- Beamer für Live-Coding

---

## Tipps für Lehrpersonen

- **Callback-Syntax:** Viele Schüler:innen haben initial Schwierigkeiten mit
  Arrow-Function-Callbacks - wiederholen Sie diese kurz
- **Immutability:** Betonen Sie stark, dass map/filter/etc. neue Arrays
  erstellen und Originale nicht ändern
- **forEach vs. map:** Klären Sie den Unterschied: forEach für Side-Effects
  (console.log), map für Transformationen (neues Array)
- **Method Chaining:** Zeigen Sie die Eleganz von verketteten Methoden -
  `.filter().map()`
- **Praktische Beispiele:** Verwenden Sie reale Daten (Produkte, Benutzer,
  Noten) statt nur Zahlen
- **find vs. filter:** Betonen Sie: find gibt EIN Element, filter gibt ARRAY
- **Reihenfolge:** Die gewählte Reihenfolge (forEach → find → some/every →
  filter → map) baut logisch aufeinander auf
- **Performance:** Optional erwähnen, dass diese Methoden intern Schleifen
  verwenden, aber lesbarer sind

---

_This project is licensed under the [CC BY-SA 4.0](../../LICENSE)._
