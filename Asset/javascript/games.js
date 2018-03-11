< script text = "text/javascript" >
    $(document).ready(function() {
            var Random = Math.floor(Math.Random() * 101 + 19)

            $("#randomNumber").text(Random);

            var num1 = Math.floor(Math.random() * 11 + 1) //setting up random number for each
            var num2 = Math.floor(Math.random() * 11 + 1)
            var num3 = Math.floor(Math.random() * 11 + 1)
            var num4 = Math.floor(Math.random() * 11 + 1)

            //Declare var 
            var userTotal = 0;
            var Wins = 0;
            var Losses = 0;

            //reseting the whole game
            $("numberWins").text(Wins);
            $("numberLosses").text(Losses);


            //create a reset function
            function reset() {
                Random = Math.floor(Math.random() * 101 + 19);
                console.log(Random)
                $("#randomNumber").text(Random);
                num1 = Math.floor(Math.random() * 11 + 1);
                num2 = Math.floor(Math.random() * 11 + 1);
                num3 = Math.floor(Math.random() * 11 + 1);
                num4 = Math.floor(Math.random() * 11 + 1);
                userTotal = 0;
                $("#finalTotal").text(userTotal);

            }
            //create win function
            function Yay() {
                alert("You Won!")
                Wins++;
                $("#numberwins").text(Wins);
                reset();
            }
            //create loss function

            function lost() {
                alert("You Lose!");
                Losses++;
                $("#numberwins").text(Losses);
                reset();
            }
            //clicker
            $("#one").on("click", function() {
                userTotal = userTotal + num1;
                console.log("New userTotal" + userTotal);
                $("#finalTotal").text(userTotal);

                //create if statement within this function for win/lose
                if (userTotal == Random) {
                    Yay();
                } else if (userTotal > Random) {
                    lost();

                }
            })
            $("#two").on("click", function() {
                userTotal = userTotal + num2;
                console.log("New userTotal" + userTotal);
                $("#finalTotal").text(userTotal);

                //create if statement within this function for win/lose
                if (userTotal == Random) {
                    Yay();
                } else if (userTotal > Random) {
                    lost();

                }

            })
            $("#three").on("click", function() {
                userTotal = userTotal + num3;
                console.log("New userTotal" + userTotal);
                $("#finalTotal").text(userTotal);

                //create if statement within this function for win/lose
                if (userTotal == Random) {
                    Yay();
                } else if (userTotal > Random) {
                    lost();

                }

            })
            $("#four").on("click", function() {
                userTotal = userTotal + num4;
                console.log("New userTotal" + userTotal);
                $("#finalTotal").text(userTotal);

                //create if statement within this function for win/lose
                if (userTotal == Random) {
                    Yay();
                } else if (userTotal > Random) {
                    lost();

                }

            })