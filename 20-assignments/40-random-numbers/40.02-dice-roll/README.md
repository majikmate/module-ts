# Dice Roll - Würfelwurf

Simuliere einen Würfelwurf mit Zufallszahlen.

## Anweisungen

### Teil 1: Einzelner Würfel

- Erzeuge eine Zufallszahl zwischen 1 und 6 (inklusive) und speichere sie in der
  Variable `dice`
- Verwende `Math.floor(Math.random() * 6) + 1`
- Gib das Ergebnis aus: "Du hast eine [Zahl] gewürfelt!"

### Teil 2: Zwei Würfel

- Erzeuge zwei Zufallszahlen für zwei Würfel: `dice1` und `dice2`
- Berechne die Summe der beiden Würfel
- Gib folgende Ausgaben:
  - "Würfel 1: [Zahl]"
  - "Würfel 2: [Zahl]"
  - "Summe: [Summe]"

## Hinweise

**Formel für Zufallszahlen von 1 bis 6:**

- `Math.random()` erzeugt eine Zahl zwischen 0 und 1 (z.B. 0.7234)
- `Math.random() * 6` skaliert auf 0 bis 6 (z.B. 4.3404)
- `Math.floor()` rundet ab auf 0 bis 5 (z.B. 4)
- `+ 1` verschiebt den Bereich auf 1 bis 6 (z.B. 5)

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
