# Funktionen als Werte

Übe das Speichern und Übergeben von Funktionen als Werte.

## Anweisungen

### 1. Aufgabe

#### a. Funktionen in Variablen speichern

Erstelle folgende Arrow-Funktionen und speichere sie in Variablen:

- `greet: (name: string) => string` - Gibt "Hallo, [name]!" zurück
- `farewell: (name: string) => string` - Gibt "Auf Wiedersehen, [name]!" zurück

#### b. Funktion als Parameter

Schreibe eine Funktion `applyToName`, die:

- Drei Parameter nimmt: `name: string`, `func: (name: string) => string`,
  `times: number`
- Die übergebene Funktion `times` mal mit dem Namen aufruft
- Jedes Ergebnis ausgibt

Beispiel:

```typescript
applyToName("Alice", greet, 2);
// Gibt aus:
// Hallo, Alice!
// Hallo, Alice!
```

#### c. Array von Funktionen

- Erstelle ein Array das `greet` und `farewell` enthält
- Durchlaufe das Array mit einer Schleife
- Rufe jede Funktion mit "Max" auf und gib das Ergebnis aus

### 2. Hinweise

- Funktionen sind Werte und können wie andere Variablen behandelt werden
- Funktionstyp: `(param: type) => returnType`
- Array-Typ: `Array<(param: type) => returnType>`

### 3. Erwartete Ausgabe

```
Hallo, Alice!
Hallo, Alice!
Auf Wiedersehen, Bob!
Auf Wiedersehen, Bob!
Auf Wiedersehen, Bob!
Hallo, Max!
Auf Wiedersehen, Max!
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
