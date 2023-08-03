// Kon Variable kothay declare hbe 
// Kokhon ekta value assign hbe and etar access pawa jabe

var a = 100
// newPrint(a)

print(10)

var newPrint = print
newPrint(45)

function print(a) {
    console.log(a)
}
print(a)

// creational phase
// a = undefined
// newPrint = undefined
// print = Reference

// Executional Phase
// a = 100
// newPrint(a) error
// newPrint = ref 

