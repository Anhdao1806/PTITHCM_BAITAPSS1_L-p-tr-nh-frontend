
console.log("Hình a:");
for (let i = 10; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
console.log("\nHình b:");
for (let i = 1; i <= 10; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
console.log("\nHình c:");
for (let i = 1; i <= 10; i++) {
    let line = "";
    for (let j = 1; j <= 10 - i; j++) {
        line += " ";
    }
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}
console.log("\nHình d:");
for (let i = 10; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= 10 - i; j++) {
        line += " ";
    }
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}