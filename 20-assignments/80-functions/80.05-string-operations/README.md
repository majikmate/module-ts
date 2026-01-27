# String-Operationen

Schreibe Funktionen für verschiedene String-Operationen.

## Anweisungen

### 1. Aufgabe

Schreibe folgende Funktionen:

#### a. `getLength(text: string): number`

- Gibt die Länge eines Strings zurück
- Verwende die `.length` Eigenschaft

#### b. `toUpperCase(text: string): string`

- Wandelt einen String in Großbuchstaben um
- Verwende die `.toUpperCase()` Methode
- Gibt den umgewandelten String zurück

#### c. `combineStrings(str1: string, str2: string, separator: string): string`

- Verbindet zwei Strings mit einem Trennzeichen
- Gibt den kombinierten String zurück
- Beispiel: `combineStrings("Hallo", "Welt", " ")` → "Hallo Welt"

#### d. `repeatString(text: string, times: number): string`

- Wiederholt einen String mehrmals
- Verwende eine Schleife
- Gibt den wiederholten String zurück
- Beispiel: `repeatString("Ha", 3)` → "HaHaHa"

#### e. `countVowels(text: string): number`

- Zählt die Anzahl der Vokale (a, e, i, o, u) in einem String
- Ignoriere Groß-/Kleinschreibung
- Gib die Anzahl zurück

### 2. Verwendung

Teste jede Funktion mit verschiedenen Werten und gib die Ergebnisse aus.

### 3. Hinweise

- Verwende `.toLowerCase()` um Strings zu vergleichen
- Für `countVowels()`: Durchlaufe den String mit einer Schleife
- String-Zugriff: `text[i]` gibt das Zeichen an Position i

### 4. Erwartete Ausgabe

```
Länge von "Hallo": 5
"Hallo" in Großbuchstaben: HALLO
Kombiniert: Hallo Welt
Wiederholt: HaHaHa
Vokale in "Hallo": 2
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
