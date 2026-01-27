# filter-Methode

Lerne die `filter`-Methode zum Filtern von Array-Elementen kennen.

## Anweisungen

### 1. Aufgabe

Gegeben sind diese Arrays:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words: string[] = [
    "Hallo",
    "Welt",
    "TypeScript",
    "Code",
    "JavaScript",
    "HTML",
];
const ages: number[] = [12, 25, 17, 30, 15, 22, 14, 28];
```

#### a. Zahlen filtern

- Filtere alle geraden Zahlen aus `numbers`
- Filtere alle Zahlen > 5 aus `numbers`
- Filtere alle Zahlen zwischen 3 und 7 (inklusive)

#### b. Strings filtern

- Filtere alle Wörter mit mehr als 5 Buchstaben
- Filtere alle Wörter die mit "H" beginnen
- Filtere alle Wörter die mit "t" enden

#### c. Altersgruppen

- Filtere alle Minderjährigen (< 18)
- Filtere alle Erwachsenen (>= 18)
- Filtere alle Personen zwischen 20 und 30 Jahren

#### d. Komplexe Objekte

Gegeben:

```typescript
interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Mouse", price: 25, inStock: true },
    { name: "Keyboard", price: 75, inStock: false },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Webcam", price: 50, inStock: false },
];
```

- Filtere alle verfügbaren Produkte (inStock === true)
- Filtere alle Produkte unter 100€
- Filtere alle verfügbaren Produkte unter 100€

### 2. Hinweise

- `filter` gibt ein NEUES Array mit allen Elementen zurück, die die Bedingung
  erfüllen
- Syntax: `const filtered = array.filter((element) => bedingung)`
- Die Bedingung muss `true` oder `false` zurückgeben

### 3. Erwartete Ausgabe

```
Gerade: [2, 4, 6, 8, 10]
Größer als 5: [6, 7, 8, 9, 10]
Zwischen 3 und 7: [3, 4, 5, 6, 7]
Lange Wörter: ["TypeScript", "JavaScript"]
Mit H: ["Hallo", "HTML"]
Minderjährige: [12, 17, 15, 14]
Erwachsene: [25, 30, 22, 28]
Verfügbare Produkte: 3
Günstige Produkte: 2
Günstig und verfügbar: 1
```

## Abgabe

Bitte gib deine Arbeit in der Datei `main.ts` im Ordner `workspace` ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
