# Callback-Funktionen

Lerne Callback-Funktionen zu verwenden.

## Anweisungen

### 1. Aufgabe

#### a. Einfacher Callback

Schreibe eine Funktion `processNumber`:

- Parameter: `num: number`, `callback: (n: number) => void`
- Ruft die callback-Funktion mit `num` auf

Erstelle zwei Arrow-Funktionen:

- `printDouble: (n: number) => void` - Gibt `n * 2` aus
- `printSquare: (n: number) => void` - Gibt `n * n` aus

Teste `processNumber` mit verschiedenen Callbacks.

#### b. Callback mit Return-Wert

Schreibe eine Funktion `calculate`:

- Parameter: `a: number`, `b: number`,
  `operation: (x: number, y: number) => number`
- Ruft die operation-Funktion auf und gibt das Ergebnis zurück

Erstelle Arrow-Funktionen:

- `add: (x: number, y: number) => number`
- `multiply: (x: number, y: number) => number`
- `power: (x: number, y: number) => number`

Teste `calculate` mit verschiedenen Operationen.

#### c. Array-Processor

Schreibe eine Funktion `processArray`:

- Parameter: `arr: number[]`, `processor: (n: number) => number`
- Wendet die processor-Funktion auf jedes Element an
- Gibt ein neues Array mit den Ergebnissen zurück

Teste mit verschiedenen processor-Funktionen (double, triple, square).

### 2. Erwartete Ausgabe

```
20
100
5 + 3 = 8
5 * 3 = 15
2^8 = 256
Verdoppelt: [2, 4, 6, 8, 10]
Quadriert: [1, 4, 9, 16, 25]
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
