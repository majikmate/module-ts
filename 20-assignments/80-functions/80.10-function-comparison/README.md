# Funktions-Vergleich

Vergleiche traditionelle Funktionen mit Arrow-Funktionen in verschiedenen
Szenarien.

## Anweisungen

### 1. Aufgabe

#### a. Beide Syntaxen implementieren

Implementiere jede Funktion in beiden Syntaxen:

**Funktion 1: Factorial (Fakultät)**

- Berechnet n! = n * (n-1) * (n-2) * ... * 1
- Traditionell: `function factorial(n: number): number`
- Arrow: `const factorialArrow: (n: number) => number`

**Funktion 2: isPalindrome**

- Prüft ob ein String ein Palindrom ist (vorwärts = rückwärts)
- Traditionell: `function isPalindrome(text: string): boolean`
- Arrow: `const isPalindromeArrow: (text: string) => boolean`

#### b. Performance-Vergleich

Für jede Funktion:

- Teste mit mehreren Werten
- Miss die Zeit mit `console.time()` und `console.timeEnd()`
- Vergleiche die Ergebnisse

#### c. Analyse

Schreibe Kommentare im Code:

- Wann ist die traditionelle Syntax besser?
- Wann ist die Arrow-Syntax besser?
- Gibt es Performance-Unterschiede?

### 2. Hinweise

- Fakultät von 5: 5 * 4 * 3 * 2 * 1 = 120
- Palindrom: "otto" liest sich vorwärts und rückwärts gleich
- Zeit messen:
  ```typescript
  console.time("test");
  // Code hier
  console.timeEnd("test");
  ```

### 3. Erwartete Ausgabe

```
factorial(5) = 120
factorialArrow(5) = 120
isPalindrome("otto") = true
isPalindromeArrow("anna") = true
isPalindrome("hello") = false
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
