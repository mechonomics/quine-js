var q = 34; // Quotation mark character
var l = [
    "var q = 34; // Quotation mark character",
    "var l = [",
    "    ",
    "];",
    "for(var i = 0; i < 2; i++) // Print opening code",
    "    document.writeln(l[i]);",
    "for(var i = 0; i < 10; i++) // Print quoted code",
    "    document.writeln(l[2] + String.fromCharCode(q) + l[i] + String.fromCharCode(q) + ',');",
    "for(var i = 3; i < 10; i++) // Print this code",
    "    document.writeln(l[i]);",
];
for(var i = 0; i < 2; i++) // Print opening code
    document.writeln(l[i]);
for(var i = 0; i < 10; i++) // Print quoted code
    document.writeln(l[2] + String.fromCharCode(q) + l[i] + String.fromCharCode(q) + ',');
for(var i = 3; i < 10; i++) // Print this code
    document.writeln(l[i]);