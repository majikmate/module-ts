// für die Zahlen 2, 6, 9, 18
// bereche ob die Zahl eine gerade oder ungerade Zahl ist

let num = 2;

// ist 2 eine gerade Zahl?
if (num % 2 == 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}

// ist 6 eine gerade Zahl?
num = 6;
if (num % 2 == 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}

// ist 9 eine gerade Zahl?
num = 9;
if (num % 2 == 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}

// ist 18 eine gerade Zahl?
num = 18;
if (num % 2 == 0) {
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}

// function isEven(num: number): boolean {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Verbesserte Version von isEven
//
// nachdem num % 2 == 0 eine expression ist, die entweder true oder false ergibt,
// können wir diese expression direkt für das return verwenden und können uns somit
// das if / else ersparen
function isEven(num: number): boolean {
    return num % 2 == 0;
}

// Function log to console if the number is even or odd
//
// Eine Funktion kann eine andere Funktion aufrufen und jedes andere beliebige
// statement innerhalb des Function Body, also alles was zwischen den { } klammern steht,
// ausführen
function logIsEven(num: number): void {
    if (isEven(num)) {
        console.log(`${num} is an even number`);
    } else {
        console.log(`${num} is an odd number`);
    }
}

console.log("======");

// Mit diesen 2 Funktionen haben wir nun die Logik im Programm
// auf zwei zentrale Stellen optimiert, die Function isEven und logIsEven.
logIsEven(2);
logIsEven(6);
logIsEven(9);
logIsEven(18);

// Wenn immer wir einen Fehler in einer der Funktionen haben, müssen wir
// daher den Fehler nur an einer einzigen Stelle beheben. Zudem
// müssen wir die Logik nicht doppelt und dreifach implementieren sondern
// können einfach auf die Funktion zurückgreifen und die Funktion verwenden
//
// Zentrales Prinzip ist daher, dass wir alles, was wir öfters brauchen
// in eine Funktion geben und dann den genau gleichen Code immer wieder
// aufrufen können.
//
// Das folgt ganz dem DRY Prinzip, Don't Repeat Yourself

// Eine Funktion, die einen Wert zurückliefert, kann auch in jeder
// Expression verwendet werden, hier z.B. auch direkt an
// console.log übergeben werden.
console.log(isEven(7));

// a function with two parameter
function add(a: number, b: number) {
    return a + b;
}

console.log(add(17, 29));
