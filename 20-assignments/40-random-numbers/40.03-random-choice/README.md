# Random Choice - Zufällige Auswahl

Nutze Zufallszahlen, um zufällige Entscheidungen zu treffen.

## Anweisungen

### Teil 1: Zufällige Farbe

- Erzeuge eine Zufallszahl zwischen 0 und 2 (für 3 Farben) und speichere sie in
  `colorIndex`
- Verwende `Math.floor(Math.random() * 3)`
- Nutze if-else-if, um basierend auf der Zahl eine Farbe auszugeben:
  - 0 → "Die Farbe ist Rot"
  - 1 → "Die Farbe ist Grün"
  - 2 → "Die Farbe ist Blau"

### Teil 2: Münzwurf (Coin Flip)

- Erzeuge eine Zufallszahl zwischen 0 und 1 (für 2 Seiten) und speichere sie in
  `coin`
- Verwende `Math.floor(Math.random() * 2)`
- Nutze if-else, um das Ergebnis auszugeben:
  - 0 → "Kopf!"
  - 1 → "Zahl!"

## Hinweise

**Formel für Zufallszahlen von 0 bis N-1:**

- `Math.random() * N` erzeugt Werte von 0 bis N (exklusiv)
- `Math.floor()` rundet ab und erzeugt ganzzahlige Werte: 0, 1, 2, ... N-1

**Alternative Schreibweise (optional):** Du kannst auch den ternären Operator
verwenden:

```typescript
const result = (coin === 0) ? "Kopf" : "Zahl";
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
