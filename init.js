let par = {min: 0, max: 0};
const scoreTerms = {
    "Infinity": {name: "Infinity", animation: 10},
    "1000000000000": {name: "1,160 Years", col: "#000"},
    "1000000000": {name: "Dedication?", col: "#38d238"},
    "1000000": {name: "Why", col: "#24dabf"},
    "1000": {name: "How", col: "#d43ee5"},
    "100": {name: "Garbage", col: "#555"},
    "60": {name: "Disappointment", col: "#4b4866"},
    "30": {name: "Sadness", col: "#395aa2"},
    "15": {name: "Wills", col: "#637012"},
    "10": {name: "Ben", animation: 0.1},
    "7": {name: "Ultra Bogey", col: "#600"},
    "6": {name: "Giga Bogey", col: "#700"},
    "5": {name: "Mega Bogey", col: "#800"},
    "4": {name: "Quadruple Bogey", col: "#900"},
    "3": {name: "Triple Bogey", col: "#a00"},
    "2": {name: "Double Bogey", col: "#b00"},
    "1": {name: "Bogey", col: "#c00"},
    "0": {name: "Par", col: "#ccc"},
    "-1": {name: "Birdie", animation: 4},
    "-2": {name: "Eagle", animation: 6},
    "-3": {name: "Albatross", animation: 4},
    "-4": {name: "Condor", animation: 3},
    "-5": {name: "Ostrich", animation: 3},
    "-6": {name: "Falcon", col: "#773f1f"},
    "-7": {name: "Raven", col: "#281541"},
    "-8": {name: "Phoenix", animation: 4},
    "-9": {name: "Griffin", col: "#e19e58"},
    "-10": {name: "Pigeon", col: "#80bacb"},
    "-11": {name: "Penguin", animation: 3},
    "-12": {name: "Kelly", col: "#414554"},
    "-13": {name: "Pterodactyl", col: "#f8ff37"},
    "-14": {name: "Cardinal", col: "#f00"},
    "-15": {name: "Parrot", animation: 8},
    "-16": {name: "Mockingbird", col: "#4e00ad"},
    "-17": {name: "Chicken", col: "#ad550d"},
    "-18": {name: "Flamingo", col: "#ff75a0"},
    "-19": {name: "Goose", animation: 4},
    "-20": {name: "Dragon", animation: 4},
    "-21": {name: "Roc", animation: 4},
    "-22": {name: "Minokawa", animation: 4},
    "-Infinity": {name: "Infinity", animation: 10}
};

par.min = stats(Object.keys(scoreTerms)).min;
par.max = stats(Object.keys(scoreTerms)).max;