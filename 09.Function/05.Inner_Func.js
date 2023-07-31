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
            return Name.split(" ")[1]
        }
        
    }
    var message = greet + " " + getfirstname(); // child function should be called within the parent funtion
                                                // child function can access parent funtion valu or property
    console.log(message)
}

hehe("Hello" ,"Md Mynuddin")
