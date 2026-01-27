# Temperatur-Umrechner

Schreibe Funktionen zur Umrechnung von Temperaturen zwischen Celsius und
Fahrenheit.

## Anweisungen

### 1. Aufgabe

Schreibe folgende Funktionen:

#### a. `celsiusToFahrenheit(celsius: number): number`

- Wandelt Celsius in Fahrenheit um
- Formel: `(celsius * 9/5) + 32`
- Gibt das Ergebnis zurück

#### b. `fahrenheitToCelsius(fahrenheit: number): number`

- Wandelt Fahrenheit in Celsius um
- Formel: `(fahrenheit - 32) * 5/9`
- Gibt das Ergebnis zurück

#### c. `printTemperature(celsius: number): void`

- Nimmt eine Celsius-Temperatur als Parameter
- Berechnet Fahrenheit mit der Funktion `celsiusToFahrenheit()`
- Gibt aus: "[Celsius]°C = [Fahrenheit]°F"

### 2. Verwendung

- Teste `celsiusToFahrenheit()` mit: 0, 25, 100
- Teste `fahrenheitToCelsius()` mit: 32, 77, 212
- Verwende `printTemperature()` für: 20, 37

### 3. Hinweise

- Eine Funktion kann eine andere Funktion aufrufen
- Runde die Ergebnisse auf 1 Dezimalstelle: `Math.round(wert * 10) / 10`

### 4. Erwartete Ausgabe

```
0°C = 32°F
25°C = 77°F
100°C = 212°F
32°F = 0°C
77°F = 25°C
212°F = 100°C
20°C = 68°F
37°C = 98.6°F
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
