# Begrüßungs-Funktionen

Schreibe verschiedene Funktionen für Begrüßungen mit Parametern und
Rückgabewerten.

## Anweisungen

### 1. Aufgabe

Schreibe folgende Funktionen:

#### a. `greet(name: string): void`

- Die Funktion nimmt einen Namen als Parameter
- Sie gibt "Hallo, [Name]!" aus
- Rufe die Funktion mit drei verschiedenen Namen auf

#### b. `greetWithTime(name: string, time: string): void`

- Die Funktion nimmt Namen und Tageszeit als Parameter
- Sie gibt "Guten [Zeit], [Name]!" aus
- Rufe die Funktion mit verschiedenen Kombinationen auf
- Beispiel: "Guten Morgen, Anna!"

#### c. `createWelcomeMessage(name: string, age: number): string`

- Die Funktion nimmt Namen und Alter als Parameter
- Sie gibt einen String zurück: "Willkommen [Name], du bist [Alter] Jahre alt!"
- Speichere den Rückgabewert in einer Variablen
- Gib den gespeicherten Wert aus

### 2. Hinweise

- Funktionen mit `: void` geben nichts zurück und verwenden `console.log()`
- Funktionen mit `: string` geben einen Wert zurück und verwenden `return`
- Verwende String-Konkatenation mit `+` oder Template Strings mit
  \`${variable}\`

### 3. Erwartete Ausgabe

```
Hallo, Alice!
Hallo, Bob!
Hallo, Charlie!
Guten Morgen, Maria!
Guten Abend, Tom!
Willkommen Anna, du bist 15 Jahre alt!
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
