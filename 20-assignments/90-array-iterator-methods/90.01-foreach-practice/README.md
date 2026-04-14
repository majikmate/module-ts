# forEach-Methode

Lerne die `forEach`-Methode für Array-Iteration kennen.

## Anweisungen

### 1. Aufgabe

#### a. Einfache Ausgabe

Gegeben sind diese Arrays:

```typescript
const fruits: string[] = ["Apfel", "Banane", "Orange", "Traube"];
const numbers: number[] = [10, 20, 30, 40, 50];
```

- Verwende `forEach` um alle Früchte auszugeben
- Verwende `forEach` um alle Zahlen auszugeben

#### b. Mit Index

- Verwende `forEach` um jede Frucht mit ihrer Position auszugeben
- Format: "1. Apfel", "2. Banane", etc.
- Tipp: `forEach` hat einen zweiten Parameter für den Index

#### c. Summe berechnen

- Erstelle eine Variable `sum: number = 0`
- Verwende `forEach` um alle Zahlen zu addieren
- Gib die Summe aus

#### d. Array transformieren

Gegeben:

```typescript
const names: string[] = ["anna", "bob", "charlie"];
```

- Erstelle ein leeres Array `upperNames: string[]`
- Verwende `forEach` um jeden Namen in Großbuchstaben zu wandeln
- Füge die Ergebnisse zu `upperNames` hinzu
- Gib das neue Array aus

### 2. Hinweise

- Syntax: `array.forEach((element) => { /* code */ })`
- Mit Index: `array.forEach((element, index) => { /* code */ })`
- `forEach` gibt keinen Wert zurück, es führt nur Code aus

### 3. Erwartete Ausgabe

```
Apfel
Banane
Orange
Traube
10
20
30
40
50
1. Apfel
2. Banane
3. Orange
4. Traube
Summe: 150
["ANNA", "BOB", "CHARLIE"]
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
