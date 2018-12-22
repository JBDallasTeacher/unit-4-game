
var randomResult;
var lostScore = 0;
var winScore = 0;
var cummulativeAdd = 0;

var restarValues = function () {
    randomResult = Math.floor(Math.random() * 102 + 19);
    console.log(randomResult);
    $(".crystals").empty();

    var pictures = ["assets/images/crystal01.jpg","assets/images/crystal02.jpg",
    "assets/images/crystal03.jpg","assets/images/crystal04.jpg"];
console.log(pictures);
    //document.write(lostScore + " " + winScore);
    $("#result").html("Random Result: " + randomResult);

    for (var i = 0; i < 4; i++) {

        randomNumber = Math.floor(Math.random() * 12 + 1);
        console.log(randomNumber);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": randomNumber,
        });

        crystal.css ({
            "background-image": "url('"+ pictures[i]+"')",
            "background-size":"cover",
            "background-position":"center"
        });

        $(".crystals").append(crystal);
    }
    $("#cummulativeAdd").html("Total Points:"+ cummulativeAdd);
}

restarValues();

$(document).on('click', ".crystal", function () {

    var numCristalValue = parseInt($(this).attr("data-random"));
    cummulativeAdd += numCristalValue;

    $("#cummulativeAdd").html("Total Points:"+ cummulativeAdd);

    if (cummulativeAdd > randomResult) {
        lostScore++;
        console.log(cummulativeAdd + " you lost" + randomResult);
        $("#lost").html("you lost" + lostScore);
        cummulativeAdd = 0;
        //$("#cummulativeAdd").html(cummulativeAdd);
        restarValues();
    } else {
        if (cummulativeAdd === randomResult) {
            winScore++;
            console.log(cummulativeAdd + " you win" + randomResult);
            $("#wins").html("you win" + winScore);
            cummulativeAdd = 0;
            //$("#cummulativeAdd").html(cummulativeAdd);
            restarValues();
        }
    }


});






function popCrystal01(event, getCrystal) {
    //document.getElementById(getCrystal).style.float = "right";
    alert('entro');
}

function popCrystal02(event, getCrystal) {
    //document.getElementById(getCrystal).style.float = "right";
    alert('entro de nuevo');
} 