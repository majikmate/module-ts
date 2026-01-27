# Skip Numbers (continue)

Schreibe ein Programm, das alle Zahlen von 1 bis 20 ausgibt, außer den
Vielfachen von 3.

## Anweisungen

### 1. Aufgabe

- Verwende eine Schleife, um durch die Zahlen von 1 bis 20 zu iterieren
- Überspringe alle Zahlen, die durch 3 teilbar sind (Vielfache von 3)
- Gib alle anderen Zahlen aus

### 2. Hinweise

- 👉 **Hint:** Verwende `if (i % 3 === 0) continue;`
- Das `continue`-Statement überspringt den Rest der Schleife und geht direkt zur
  nächsten Iteration
- Eine Zahl ist durch 3 teilbar, wenn `i % 3 === 0`

### 3. Erwartete Ausgabe

```
1
2
4
5
7
8
10
11
13
14
16
17
19
20
```

(Die Zahlen 3, 6, 9, 12, 15, 18 werden übersprungen)

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
