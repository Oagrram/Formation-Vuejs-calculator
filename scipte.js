let RESULT = 0;

let OPERATION = "";



const calculate = (operations) => {

    let i = 1;



    operations = operations.split(" ")
    RESULT = parseInt(operations[0])
    console.log("before " + RESULT)
    while (operations[i]) {

        if (operations[i - 1] === "+")
            RESULT += parseInt(operations[i]);
        else if (operations[i - 1] === "-")
            RESULT -= parseInt(operations[i]);
        else if (operations[i - 1] === "*")
            RESULT *= parseInt(operations[i]);
        else if (operations[i - 1] === "/")
            RESULT /= parseInt(operations[i]);
        i++;
    }
    console.log(RESULT.toString())
    console.log(document.querySelector("#result"))
    document.querySelector("#result").textContent = RESULT;
    OPERATION = RESULT.toString()
    RESULT = 0;

}



const getid = (id) => {

    if (id === "=") {
        calculate(OPERATION)
    }
    else if (id === "AC") {
        OPERATION = "0"
        document.querySelector("#result").textContent = OPERATION;
    }
    else if (id === "+" || id === "-" || id === "/" || id === "*") {
        if (OPERATION === "0")
            OPERATION = ""
        OPERATION = OPERATION.concat(" ", id, " ");
    }
    else {
        if (OPERATION === "0")
            OPERATION = ""
        OPERATION = OPERATION.concat(id);
    }

    document.querySelector("#result").textContent = OPERATION;
    console.log(OPERATION)

}

