function loop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // cause error beacuse i is blick scope cannot access from outside of scope
}
loop();