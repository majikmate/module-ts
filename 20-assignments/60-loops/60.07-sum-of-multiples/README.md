# Sum of Multiples

Schreibe ein Programm, das die Summe aller Zahlen von 1 bis 100 berechnet, die
durch 5 teilbar sind.

## Anweisungen

### 1. Aufgabe

Verwende eine Schleife, um durch die Zahlen von 1 bis 100 zu iterieren:

- Prüfe für jede Zahl, ob sie durch 5 teilbar ist (verwende den Modulo-Operator
  `%`)
- Wenn die Zahl durch 5 teilbar ist, addiere sie zu einer Summenvariable
- Gib am Ende die Gesamtsumme aus

### 2. Hinweise

- Erstelle eine Variable für die Summe (z.B. `sum`) und initialisiere sie mit 0
- Eine Zahl ist durch 5 teilbar, wenn `number % 5 === 0`
- Die erwartete Summe ist: 5 + 10 + 15 + 20 + ... + 95 + 100

### 3. Erwartete Ausgabe

Die Ausgabe sollte so aussehen:

```
1050
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
