# Arrow-Funktionen: Grundlagen

Schreibe einfache Arrow-Funktionen und vergleiche sie mit traditionellen
Funktionen.

## Anweisungen

### 1. Aufgabe

#### a. Traditionelle Funktion konvertieren

Gegeben ist diese traditionelle Funktion:

```typescript
function double(num: number): number {
    return num * 2;
}
```

- Schreibe sie als Arrow-Funktion
- Teste beide Versionen mit den Zahlen 5, 10, 15

#### b. Arrow-Funktionen mit implizitem Return

Schreibe folgende Arrow-Funktionen mit implizitem Return (ohne geschweifte
Klammern):

- `triple: (num: number) => number` - Multipliziert mit 3
- `square: (num: number) => number` - Quadriert die Zahl (num * num)
- `isAdult: (age: number) => boolean` - Gibt true zurück wenn age >= 18

#### c. Arrow-Funktionen mit mehreren Parametern

- `add: (a: number, b: number) => number` - Addiert zwei Zahlen
- `max: (a: number, b: number) => number` - Gibt die größere Zahl zurück

### 2. Verwendung

Teste jede Funktion mit verschiedenen Werten und gib die Ergebnisse aus.

### 3. Hinweise

- Arrow-Funktion mit implizitem Return: `const func = (param) => param * 2`
- Arrow-Funktion mit explizitem Return:
  `const func = (param) => { return param * 2; }`
- Mehrere Parameter: `const func = (a, b) => a + b`

### 4. Erwartete Ausgabe

```
double(5) = 10
arrow double(5) = 10
triple(4) = 12
square(5) = 25
isAdult(20) = true
isAdult(15) = false
add(3, 7) = 10
max(5, 8) = 8
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
