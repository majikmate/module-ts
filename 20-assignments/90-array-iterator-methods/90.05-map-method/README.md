# map-Methode

Lerne die `map`-Methode zum Transformieren von Array-Elementen kennen.

## Anweisungen

### 1. Aufgabe

Gegeben sind diese Arrays:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["anna", "bob", "charlie"];
const prices: number[] = [10, 20, 30, 40];
```

#### a. Zahlen transformieren

- Verdopple alle Zahlen in `numbers`
- Quadriere alle Zahlen in `numbers`
- Addiere 10 zu allen Zahlen in `numbers`

#### b. Strings transformieren

- Wandle alle Namen in Großbuchstaben um
- Erstelle Begrüßungen: "Hallo, [Name]!" für jeden Namen
- Erstelle die Längen aller Namen in einem neuen Array

#### c. Preise berechnen

- Berechne alle Preise mit 19% MwSt (price * 1.19)
- Berechne 20% Rabatt auf alle Preise (price * 0.8)
- Runde die Ergebnisse auf 2 Dezimalstellen

#### d. Objekte transformieren

Gegeben:

```typescript
interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const users: User[] = [
    { firstName: "Anna", lastName: "Schmidt", age: 25 },
    { firstName: "Bob", lastName: "Müller", age: 30 },
    { firstName: "Charlie", lastName: "Weber", age: 22 },
];
```

Erstelle neue Arrays:

- Nur die vollständigen Namen: "Anna Schmidt", "Bob Müller", etc.
- Nur die Alter
- Begrüßungen: "Hallo Anna Schmidt, du bist 25 Jahre alt!"

#### e. Methodenkombination

- Filtere alle Zahlen > 2 aus `numbers` und verdopple sie
- Filtere alle Namen mit mehr als 3 Buchstaben und wandle sie in Großbuchstaben
  um
- Filtere Preise < 30 und addiere 5€

### 2. Hinweise

- `map` gibt ein NEUES Array mit transformierten Elementen zurück
- Syntax: `const transformed = array.map((element) => transformation)`
- Kombiniere mit `filter`: `array.filter(...).map(...)`
- Runden: `Math.round(zahl * 100) / 100`

### 3. Erwartete Ausgabe

```
Verdoppelt: [2, 4, 6, 8, 10]
Quadriert: [1, 4, 9, 16, 25]
Plus 10: [11, 12, 13, 14, 15]
Großbuchstaben: ["ANNA", "BOB", "CHARLIE"]
Begrüßungen: ["Hallo, anna!", "Hallo, bob!", "Hallo, charlie!"]
Längen: [4, 3, 7]
Mit MwSt: [11.90, 23.80, 35.70, 47.60]
Mit Rabatt: [8.00, 16.00, 24.00, 32.00]
Vollständige Namen: ["Anna Schmidt", "Bob Müller", "Charlie Weber"]
Nur Alter: [25, 30, 22]
Größer als 2, verdoppelt: [6, 8, 10]
Lange Namen groß: ["CHARLIE"]
Günstig plus 5: [15, 25]
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
