$(document).ready(
    function ()
    {
        $("#generateWord").click(generateWord)
        $("#userLetter").change(checkLetter)

        var possibleWords = ["RHINOCEROS", "HIPPOPOTAMUS", "GUPPY", "KANGAROO", "GIRAFFE", "PLATYPUS", "OCTOPUS", "SQUIRREL", "MOOSE", "TIGER", "CAPYBARA", "NARWHAL"];
        var randomNumber = Math.floor(Math.random() * 12) + 1;
        var selectedWord = possibleWords[randomNumber];
        var dashedWord = [];
        var counter = 0;

        function generateWord()
        {
            //selectedWord.replaceAll(/([a-zA-Z])/g, " - ");
            for (var i = 0; i < selectedWord.length; i++)
            {
                dashedWord.push(" - ");
            }

            $("#dashedWord").append(dashedWord);
        }

        function checkLetter()
        {
            var guessInput = $("#userLetter").val();
            var guess = guessInput.toUpperCase();
            $("#guessedLetters").append(guess + ", ");

            if (selectedWord.includes(guess))
            {
                for (var i = 0; i < selectedWord.length; i++)
                {
                    if (selectedWord[i] === guess)
                    {
                        dashedWord[i] = guess;
                        $("#guessedWrong").text("You guessed correctly.");
                    }
                }
                $("#dashedWord").empty();
                $("#dashedWord").append(dashedWord);
            }
            else if(!selectedWord.includes(guess))
            {
                $("#guessedWrong").text("You guessed incorrectly.");
                counter++;
                $("#numWrongGuesses").text(counter);
            }

            if (counter === 6)
            {
                $("#guessedWrong").text(`Game over, the word was ${selectedWord}`);
            }
            else if (!dashedWord.includes(" - "))
            {
                $("#guessedWrong").text(`You win!, the word was ${selectedWord}`);
            }
        }
    }
);