// Inner function or nested function

function X(x, y) {
    function showinfo() {
        console.log(x,y)
    }
    showinfo();
}

X("Hello" ,"Md Mynuddin")




function hehe(greet, Name) {
    function getfirstname() {
        if (Name) {
            return Name.split(" ")[0]
        }
        
    }
    var message = greet + " " +getfirstname();
    console.log(message)
}

hehe("Hello" ,"Md Mynuddin")
