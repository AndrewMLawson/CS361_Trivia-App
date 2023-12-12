const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 8777;

const app = express ();
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.get("/status", (request, response) => {
        const status = {
        "Status": "Running"
    };
    
    response.send(status);
});

app.post("/stats/", (request, response) => {
    data = request.body;
    console.log(data);
    let numberTotal = 0;
    let numberCorrect = 0;
    let score = 0;
    let letterGrade = "";
    let streak = 0;
    let longestStreak = 0;

    if (data){
        for(const question  in data){
            numberTotal = numberTotal + 1;

            if(data[question] === true){
                numberCorrect += 1;
                streak += 1;
            }

            if(streak > longestStreak){
                longestStreak = streak;
            }

            if(data[question] === false){
                streak = 0;
            }
        }

        score = Math.round((numberCorrect/numberTotal) * 100);

        if(score >= 90){
            letterGrade = "A";
        }

        if(score <= 89 && score >= 80){
            letterGrade = "B";
        }

        if(score <= 79 && score >= 70){
            letterGrade = "C";
        }

        if(score <= 69 && score >= 60){
            letterGrade = "D";
        }

        if(score < 60){
            letterGrade = "F";
        }

        newDict = {
            "correctAnswers": numberCorrect,
            "totalQuestions": numberTotal,
            "overallScore": score,
            "longestStreak": longestStreak,
            "finalGrade": letterGrade
        }
        let response_data = JSON.stringify(newDict)
        response.send(response_data);
        console.log(response_data0);

    } else {
        response.send("Error!!!");
    };
});