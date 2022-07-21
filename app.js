const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get("/", function (req, res) {
    var date1=new Date();
    var time=date1.getHours();
    var greeting="";
    if(time>=0&&time<=12)
    greeting="Morning";
    else if(time>=12&&time<=16)
    greeting="Afternoon";
    else
    greeting="Evening";
    res.render('home',{greet:greeting});
});
app.get("/about", function (req, res) {
    var date1=new Date();
    var time=date1.getHours();
    var greeting="";
    if(time>=0&&time<=12)
    greeting="Morning";
    else if(time>=12&&time<=16)
    greeting="Afternoon";
    else
    greeting="Evening";
    res.render('about',{greet:greeting});
});
app.get("/contact", function (req, res) {
    res.render('contact');
});
app.get("/platform-wise", function (req, res) {
    res.render('platform-wise');
});
app.get("/codechef", function (req, res) {
    const query = "code_chef";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('codechef', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    });
});
app.get("/hackerrank", function (req, res) {
    const query = "hacker_rank";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('hackerrank', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    });
});

app.get("/hackerearth", function (req, res) {
    const query = "hacker_earth";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('hackerearth', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    });
});
app.get("/kickstart", function (req, res) {
    const query = "kick_start";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('kickstart', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    });
});
app.get("/atcoder", function (req, res) {
    const query = "at_coder";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('atcoder', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    });
});
app.get("/leetcode", function (req, res) {
    const query = "leet_code";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('leetcode', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    });
});
app.get("/csacademy", function (req, res) {
    const query = "cs_academy";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('csacademy', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    });
});
app.get("/codeforces", function (req, res) {
    const query = "codeforces";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('codeforces', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    });
});
app.get("/all", function (req, res) {
    const query = "all";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('all', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }

    });
});
app.get("/topcoder", function (req, res) {
    const query = "top_coder";
    const url = "https://kontests.net/api/v1/" + query;
    https.get(url, function (response) {

        try {
            let result = '';
            response.on("data", (data) => {
                result += data;
            });
            response.on("end", () => {
                let contestData = JSON.parse(result);
                res.render('topcoder', { articles: contestData });
            });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }

    });
});


app.listen(process.env.PORT||3000, function () {
    console.log("Server started at port 3000");
});
