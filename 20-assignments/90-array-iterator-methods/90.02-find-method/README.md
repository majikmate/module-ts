# find-Methode

Lerne die `find`-Methode zum Suchen von Array-Elementen kennen.

## Anweisungen

### 1. Aufgabe

Gegeben sind diese Arrays:

```typescript
const numbers: number[] = [3, 7, 12, 18, 25, 30];
const names: string[] = ["Alice", "Bob", "Charlie", "David", "Emma"];
const ages: number[] = [15, 22, 17, 30, 14, 19];
```

#### a. Erste Zahl finden

- Finde die erste Zahl größer als 15
- Finde die erste Zahl größer als 50
- Gib beide Ergebnisse aus (beachte: nicht gefunden = `undefined`)

#### b. Namen suchen

- Finde den ersten Namen der mit "C" beginnt
- Finde den ersten Namen der mit "Z" beginnt
- Tipp: Verwende `name[0]` für den ersten Buchstaben

#### c. Volljährige Person

- Finde das erste Alter >= 18
- Finde das erste Alter >= 25
- Gib aus ob eine volljährige Person gefunden wurde

#### d. Benutzerdefinierte Suche

Gegeben:

```typescript
interface Person {
    name: string;
    age: number;
    city: string;
}

const people: Person[] = [
    { name: "Anna", age: 25, city: "Berlin" },
    { name: "Bob", age: 30, city: "München" },
    { name: "Charlie", age: 22, city: "Hamburg" },
];
```

- Finde die Person die "Bob" heißt
- Finde die erste Person aus "Hamburg"
- Finde die erste Person über 28 Jahre

### 2. Hinweise

- Syntax: `array.find((element) => bedingung)`
- `find` gibt das erste Element zurück, das die Bedingung erfüllt
- Wenn nichts gefunden wird, gibt `find` `undefined` zurück

### 3. Erwartete Ausgabe

```
Erste Zahl > 15: 18
Erste Zahl > 50: undefined
Name mit C: Charlie
Name mit Z: undefined
Erste Person >= 18: 22
Bob gefunden: { name: "Bob", age: 30, city: "München" }
Person aus Hamburg: { name: "Charlie", age: 22, city: "Hamburg" }
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
