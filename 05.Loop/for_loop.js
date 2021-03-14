// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement

for (var step = 0; step < 10; step++){
    console.log((step+1) +" time running")
}

console.log("\n\n")

for (var step = 1; step < 20; step++){
    if (step % 2 == 0) {
        console.log(step)
    }
}

console.log("\n\n")

for (var step = 1; step < 20; step++){
    if (step % 2 != 0) {
        console.log(step)
    }
}

console.log("\n\n")

var sum=0
for (var step = 0; step < 10; step++){
    sum=sum+step
}
console.log(sum)

console.log("\n\n")

msum=0
for (var step = 1; step <= 10; step++){
    console.log(5 +" * " + step +" = " + (5*step))
}

console.log("\n\n")

for (var step = 10; step > 0; step--){
    console.log(step +" time running")
}