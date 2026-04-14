# Template Strings

Template Strings (auch Template Literals genannt) bieten eine moderne und
lesbare Art, Variablen und Ausdrücke in Strings einzufügen. Sie verwenden
Backticks `` ` `` anstelle von Anführungszeichen und `${}` für
Variablen/Ausdrücke.

## Angaben

Erstelle folgende Variablen:

- `productName` mit dem Wert `"Laptop"`
- `price` mit dem Wert `899.99`
- `quantity` mit dem Wert `3`
- `taxRate` mit dem Wert `0.2` (20% Mehrwertsteuer)

## Aufgaben

Verwende **ausschließlich Template Strings** für alle Ausgaben!

1. Gib folgendes aus:\
   `Product: Laptop`

2. Gib folgendes aus:\
   `Price per unit: 899.99€`

3. Berechne den Gesamtpreis (quantity \* price) und gib aus:\
   `Total price for 3 units: 2699.97€`

4. Berechne den Steuerbetrag (totalPrice \* taxRate) und gib aus:\
   `Tax amount (20%): 539.994€`

5. Berechne den Endpreis inklusive Steuern und gib aus:\
   `Final price including tax: 3239.964€`

6. Gib eine zusammenfassende Rechnung aus:

   ```
   ========================================
   RECHNUNG
   ========================================
   Produkt: Laptop
   Einzelpreis: 899.99€
   Menge: 3
   ----------------------------------------
   Zwischensumme: 2699.97€
   Steuern (20%): 539.994€
   ========================================
   GESAMT: 3239.964€
   ========================================
   ```

**Wichtig:** Verwende für alle Ausgaben Template Strings mit Backticks `` ` ``
und `${}` für die Variablen und Berechnungen!

## Beispiel

```typescript
const name = "Anna";
const age = 25;

// Mit Template String:
console.log(`Ich heiße ${name} und bin ${age} Jahre alt.`);

// Ausgabe: Ich heiße Anna und bin 25 Jahre alt.
```

# Abgabe

Bitte gibt deine Arbeit in der Datei `main.ts` innerhalb des ordners `workspace`
ab:

[workspace/main.ts](./workspace/main.ts)

---

_This project is licensed under the [CC BY-SA 4.0](../../../LICENSE)._
