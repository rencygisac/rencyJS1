function calculateSum() {
    let x = prompt("Enter a number between 0 & 1 million"); // Get input via prompt

    x = parseInt(x); // Convert input to integer

    if(x > 0 && x <= 1000000) { // Check if input is valid (between 0 and 1 million)
        let Num = 0;

        // Loop to calculate the sum of numbers up to x
        for(let i = 0; i <= x; i++) {
            Num = Num + i;
        }

        // Display the result
        document.writeln("Sum of numbers up to " + x + " is " + Num);
    } 
    else {
        // Display error message
        document.write("Enter correct number");
    }
}
