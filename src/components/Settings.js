import React from 'react';

export function Settings(){

    let trivia_categories = [
        {
            id: 9,
            name: "General Knowledge"
        },
        {
            id: 10,
            name: "Entertainment: Books"
        },
        {
            id: 11,
            name: "Entertainment: Film"
        },
        {
            id: 12,
            name: "Entertainment: Music"
        },
        {
            id: 13,
            name: "Entertainment: Musicals & Theatres"
        },
        {
            id: 14,
            name: "Entertainment: Television"
        },
        {
            id: 15,
            name: "Entertainment: Video Games"
        },
        {
            id: 16,
            name: "Entertainment: Board Games"
        },
        {
            id: 17,
            name: "Science & Nature"
        },
        {
            id: 18,
            name: "Science: Computers"
        },
        {
            id: 19,
            name: "Science: Mathematics"
        },
        {
            id: 20,
            name: "Mythology"
        },
        {
            id: 21,
            name: "Sports"
        },
        {
            id: 22,
            name: "Geography"
        },
        {
            id: 23,
            name: "History"
        },
        {
            id: 24,
            name: "Politics"
        },
        {
            id: 25,
            name: "Art"
        },
        {
            id: 26,
            name: "Celebrities"
        },
        {
            id: 27,
            name: "Animals"
        },
        {
            id: 28,
            name: "Vehicles"
        },
        {
            id: 29,
            name: "Entertainment: Comics"
        },
        {
            id: 30,
            name: "Science: Gadgets"
        },
        {
            id: 31,
            name: "Entertainment: Japanese Anime & Manga"
        },
        {
            id: 32,
            name: "Entertainment: Cartoon & Animations"
        }
    ];

    let category_options = trivia_categories.map((category)=> {
        return(
            <>
                <input key={category.id} type="radio" id={category.id} value={category.name} name="category" /> <label for={category.id}>{category.name}</label>
            </>
        );
    });

    function handleSubmission(formData){
        console.log(formData);
    }


    return(
        <div>
            <h2>Settings</h2>
            <form onSubmit={handleSubmission}>
                <h3>Categories</h3>
                <div>
                    {category_options}
                </div>
                <h3>Number of Questions</h3>
                <input type="number" name="numofquestions" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
