# some und every

Lerne die `some`- und `every`-Methoden zum Prüfen von Array-Bedingungen kennen.

## Anweisungen

### 1. Aufgabe

Gegeben sind diese Arrays:

```typescript
const numbers: number[] = [2, 4, 6, 8, 10];
const mixed: number[] = [1, 3, 5, 8, 11];
const ages: number[] = [15, 17, 14, 16, 13];
const adultAges: number[] = [20, 25, 30, 22, 28];
```

#### a. some - Mindestens ein Element

Prüfe mit `some`:

- Gibt es in `numbers` eine ungerade Zahl?
- Gibt es in `mixed` eine ungerade Zahl?
- Gibt es in `ages` eine Person >= 18?
- Gibt es in `adultAges` eine Person >= 18?

#### b. every - Alle Elemente

Prüfe mit `every`:

- Sind alle Zahlen in `numbers` gerade?
- Sind alle Zahlen in `mixed` gerade?
- Sind alle Personen in `ages` minderjährig (< 18)?
- Sind alle Personen in `adultAges` volljährig (>= 18)?

#### c. Komplexere Prüfungen

Gegeben:

```typescript
const grades: number[] = [85, 92, 78, 95, 88];
const passwords: string[] = ["pass123", "securePassword!", "abc", "MyP@ssw0rd"];
```

Prüfe:

- Gibt es eine Note < 80? (some)
- Sind alle Noten >= 60? (every)
- Gibt es ein Passwort mit weniger als 8 Zeichen? (some)
- Sind alle Passwörter mindestens 8 Zeichen lang? (every)

### 2. Hinweise

- `some`: Gibt `true` zurück wenn MINDESTENS EIN Element die Bedingung erfüllt
- `every`: Gibt `true` zurück wenn ALLE Elemente die Bedingung erfüllen
- Syntax: `array.some((element) => bedingung)`
- Syntax: `array.every((element) => bedingung)`

### 3. Erwartete Ausgabe

```
Ungerade in numbers: false
Ungerade in mixed: true
Volljährig in ages: false
Volljährig in adultAges: true
Alle gerade in numbers: true
Alle gerade in mixed: false
Alle minderjährig in ages: true
Alle volljährig in adultAges: true
Note < 80: true
Alle >= 60: true
Kurzes Passwort: true
Alle lang genug: false
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
