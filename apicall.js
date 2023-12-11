const microurl = "http://24.199.127.136:8000/stats/";

let game_stats = {
    "1" : true,
    "2" : true,
    "3" : true,
    "4" : true,
    "5" : true,
    "6" : true,
    "7" : false,
    "8" : true,
    "9" : false,
    "10" : false
};

console.log("Attempting to reach microservice...");

async function postFinalStats(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    return response.json(); 
  }
  
  postFinalStats(microurl, game_stats).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
