function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } 
    else if (input == "yes") {
        return "In which course you are looking help for?";
    }
    else if (input == "dance") {
        return "Currently available dance courses are -> Kathak, Kuchipudi, Barathnatyam, Bollywood Dance, Garba";
    } 
    else if (input == "singing") {
        return "Currently available courses are -> Bollywood singing, Classical Singing";
    }
    else if (input == "instrumental") {
        return "Currently available courses are -> Basuri, Guitar, Piano, Tabla, Violin ";
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try saying something else!";
    }
}