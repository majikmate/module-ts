# Zahlen-Validierungsfunktionen

Schreibe Funktionen, die Eigenschaften von Zahlen überprüfen.

## Anweisungen

### 1. Aufgabe

Schreibe folgende Funktionen:

#### a. `isEven(num: number): boolean`

- Prüft, ob eine Zahl gerade ist
- Gibt `true` zurück wenn gerade, `false` wenn ungerade
- Tipp: Verwende den Modulo-Operator `%`

#### b. `isPositive(num: number): boolean`

- Prüft, ob eine Zahl positiv ist (> 0)
- Gibt `true` oder `false` zurück

#### c. `isInRange(num: number, min: number, max: number): boolean`

- Prüft, ob eine Zahl zwischen min und max liegt (inklusive)
- Gibt `true` zurück wenn in Range, sonst `false`

#### d. `printNumberInfo(num: number): void`

- Nimmt eine Zahl als Parameter
- Verwendet die anderen Funktionen um die Zahl zu analysieren
- Gibt aus:
  - "[Zahl] ist gerade" oder "[Zahl] ist ungerade"
  - "[Zahl] ist positiv" oder "[Zahl] ist negativ oder null"

### 2. Verwendung

- Teste `isEven()` mit: 4, 7, 0
- Teste `isPositive()` mit: 10, -5, 0
- Teste `isInRange()` mit: (5, 1, 10), (15, 1, 10), (1, 1, 10)
- Teste `printNumberInfo()` mit: 8, -3

### 3. Erwartete Ausgabe

```
4 ist gerade: true
7 ist ungerade: false
0 ist gerade: true
10 ist positiv: true
-5 ist positiv: false
5 ist zwischen 1 und 10: true
15 ist zwischen 1 und 10: false
8 ist gerade
8 ist positiv
-3 ist ungerade
-3 ist negativ oder null
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
