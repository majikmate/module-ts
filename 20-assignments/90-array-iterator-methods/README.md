# Array-Iterator-Methoden - Aufgaben

Dieses Kapitel enthält Übungsaufgaben zu den wichtigsten Array-Iterator-Methoden
in TypeScript.

## Übersicht

- [90.01 forEach-Methode](./90.01-foreach-practice/README.md) - Iteriere über
  Arrays mit forEach
- [90.02 find-Methode](./90.02-find-method/README.md) - Suche Elemente in Arrays
- [90.03 some & every](./90.03-some-every-methods/README.md) - Prüfe
  Array-Bedingungen
- [90.04 filter-Methode](./90.04-filter-method/README.md) - Filtere
  Array-Elemente
- [90.05 map-Methode](./90.05-map-method/README.md) - Transformiere Arrays

## Lernziele

Nach Abschluss dieser Aufgaben kannst du:

- `forEach` verwenden um Arrays zu durchlaufen
- `find` verwenden um spezifische Elemente zu finden
- `some` und `every` verwenden um Array-Bedingungen zu prüfen
- `filter` verwenden um Arrays zu filtern
- `map` verwenden um Arrays zu transformieren
- Mehrere Methoden kombinieren (z.B. `filter().map()`)

## Methodenübersicht

| Methode   | Rückgabewert     | Zweck                                                  |
| --------- | ---------------- | ------------------------------------------------------ |
| `forEach` | `void`           | Führt Code für jedes Element aus                       |
| `find`    | `T \| undefined` | Findet das erste Element das eine Bedingung erfüllt    |
| `some`    | `boolean`        | Prüft ob mindestens ein Element eine Bedingung erfüllt |
| `every`   | `boolean`        | Prüft ob alle Elemente eine Bedingung erfüllen         |
| `filter`  | `T[]`            | Erstellt ein neues Array mit gefilterten Elementen     |
| `map`     | `U[]`            | Erstellt ein neues Array mit transformierten Elementen |

## Verwendung

Jede Aufgabe enthält:

1. Eine `README.md` Datei mit den Anweisungen
2. Ein `workspace/main.ts` Datei zum Implementieren deiner Lösung

## Referenzen

Siehe auch die Tutorials zu diesem Thema:

- [10-course/10-tutorials/90-array-iterator-methods/](../../10-course/10-tutorials/90-array-iterator-methods/README.md)

---

_This project is licensed under the [CC BY-SA 4.0](../../LICENSE)._
