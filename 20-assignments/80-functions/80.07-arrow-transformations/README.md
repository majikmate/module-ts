# Array-Transformationen mit Arrow-Funktionen

Verwende Arrow-Funktionen um Arrays zu transformieren.

## Anweisungen

### 1. Aufgabe

Gegeben sind folgende Arrays:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["anna", "bob", "charlie"];
```

#### a. Zahlen verdoppeln

- Schreibe eine Arrow-Funktion `doubleValue: (n: number) => number`
- Verwende eine Schleife um alle Zahlen zu verdoppeln
- Speichere die Ergebnisse in einem neuen Array
- Gib das Array aus

#### b. Namen in Großbuchstaben

- Schreibe eine Arrow-Funktion `toUpper: (s: string) => string`
- Verwende eine Schleife um alle Namen in Großbuchstaben zu wandeln
- Speichere die Ergebnisse in einem neuen Array
- Gib das Array aus

#### c. Zahlen filtern

- Schreibe eine Arrow-Funktion `isGreaterThan3: (n: number) => boolean`
- Verwende eine Schleife um nur Zahlen > 3 zu sammeln
- Speichere die Ergebnisse in einem neuen Array
- Gib das Array aus

### 2. Hinweise

- Erstelle leere Arrays mit `const result: number[] = [];`
- Füge Elemente hinzu mit `result.push(element)`
- Verwende die Arrow-Funktionen innerhalb der Schleife

### 3. Erwartete Ausgabe

```
Verdoppelt: [2, 4, 6, 8, 10]
Großbuchstaben: ["ANNA", "BOB", "CHARLIE"]
Größer als 3: [4, 5]
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
