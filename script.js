//////////////////////////////////////////////
//////////////////////////////////////////////
// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
        console.log(2018 - this.yearOfBirth);
    }

Person.prototype.lastName = 'Smith';

//Person.prototype.job = 'Mechanic';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
//console.log(mark.job);
//console.log(john.job);
*/

//////////////////////////////////////////////
//////////////////////////////////////////////
//Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.year.OfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'techer';

var jane = Object.create(personProto,
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
})
*/

//////////////////////////////////////////////
//////////////////////////////////////////////
// Primitives vs objects
// Primitives
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city); 
*/

//////////////////////////////////////////////
//////////////////////////////////////////////
// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(element) {
    return 2018 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
    return Math.round (206.9 - (0.67 * element));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge)
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

//////////////////////////////////////////////
//////////////////////////////////////////////
// Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you tech, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('techar')('Mark');
*/

//////////////////////////////////////////////
//////////////////////////////////////////////
// IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/
/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

//////////////////////////////////////////////
//////////////////////////////////////////////
// Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);



retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
*/

//retirement(66)(1990);

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you tech, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
*/
/*
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you tech, ' + name + '?');    
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

//////////////////////////////////////////////
//////////////////////////////////////////////
// Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'techer',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentelmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('evening');






var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(element) {
    return 2018 - element;
}

function isFullAge(limit, element) {
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again!');
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', 
                          ['Yes', 'No'], 
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?', 
                          ['John', 'Michael', 'Jonas'], 
                          2);

    var q3 =new Question('What does best describe coding?', 
                        ['Boring', 'Hard', 'Fun', 'Tedious'],
                        2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt (prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
*/
/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again!');
            
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' +score);
        console.log('----------------------------------------');
    }
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?', 
                          ['Yes', 'No'], 
                          0);

    var q2 = new Question('What is the name of this course\'s teacher?', 
                          ['John', 'Michael', 'Jonas'], 
                          2);

    var q3 =new Question('What does best describe coding?', 
                        ['Boring', 'Hard', 'Fun', 'Tedious'],
                        2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            } return sc;
        }
    }
    
    var keepScore = score();
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();
    
})();
*/


//////////////////////////////////////////////
//////////////////////////////////////////////
// Operator precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 -6 = 32 - 6 = 26
console.log(x);

x *= 2;
console.log(x);
x += 20;
console.log(x);
x++;
console.log(x);
*/
//////////////////////////////////////////////
//////////////////////////////////////////////
// CHALLENGE 1
/*
var heightMark = 1.60;
var massMark = 55;
var heightJohn = 1.85;
var massJohn = 110;

var MarkBMI = massMark / (heightMark * heightMark)
console.log(MarkBMI);

var JohnBMI = massJohn / (heightJohn * heightJohn);
console.log(JohnBMI);

// Option first
var johnHigherBMI = JohnBMI > MarkBMI;
console.log(johnHigherBMI);

// Option second
var heigherBMI = function() {
    if (MarkBMI > JohnBMI) {
        console.log('Mark is fat');
    } else {
        console.log('John is fat');
    }
}

heigherBMI();
*/
//////////////////////////////////////////////
//////////////////////////////////////////////
// Boolean logic
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // 13-20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/
//////////////////////////////////////////////
//////////////////////////////////////////////
// Truthy and Falsy values and equality operators
// Falsy values: undefined, null, 0, '', Nan 
// Truthy values: NOT falsy values
/*
var height;

height = 0;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
*/
//////////////////////////////////////////////
//////////////////////////////////////////////
// CHALLENGE 2
/*
var JTS1 = 89;
var JTS2 = 120;
var JTS3 = 103;

var MTS1 = 116;
var MTS2 = 94;
var MTS3 = 123;

var averageJohnTeam = (JTS1 + JTS2 + JTS3) / 3;
console.log(averageJohnTeam); //104

var averageMikeTeam = (MTS1 + MTS2 + MTS3) / 3;
console.log(averageMikeTeam); //111

if (averageJohnTeam > averageMikeTeam) {
    console.log('John team win. They have ' + averageJohnTeam + ' points.');
} else if (averageJohnTeam < averageMikeTeam) {
    console.log('Mike team win. They have ' + averageMikeTeam + ' points.');
} else {
    console.log('Draw. They have ' + averageJohnTeam + ' points.');
}*/
/*
if (averageJohnTeam > averageMikeTeam) {
    console.log('John team is better. They have ' + averageJohnTeam + ' score.');
} else if (averageJohnTeam = averageMikeTeam) {
    console.log('Draw. They have both ' + averageJohnTeam + ' points.');
} /*else if (averageJohnTeam < averageMikeTeam) {
    console.log('Mike team is better. They have ' + averageMikeTeam + ' score.');
}*/

// CHALLENGE 2.5

var JTS1 = 89;
var JTS2 = 120;
var JTS3 = 103;

var MTS1 = 116;
var MTS2 = 94;
var MTS3 = 123;

var ETS1 = 97;
var ETS2 = 134;
var ETS3 = 105;

var averageJohnTeam = (JTS1 + JTS2 + JTS3) / 3;
console.log(averageJohnTeam); //104

var averageMikeTeam = (MTS1 + MTS2 + MTS3) / 3;
console.log(averageMikeTeam); //111

var averageEvaTeam = (ETS1 + ETS2 + ETS3) / 3;
console.log(averageEvaTeam); //112

if (averageJohnTeam > averageMikeTeam && averageJohnTeam > averageEvaTeam) {
    console.log('John team win. They have ' + averageJohnTeam + ' points.');
} else if (averageJohnTeam < averageMikeTeam && averageMikeTeam > averageEvaTeam) {
    console.log('Mike team win. They have ' + averageMikeTeam + ' points.');
} else if (averageEvaTeam > averageJohnTeam && averageEvaTeam > averageMikeTeam) {
    console.log('Eva team win. They have ' + averageEvaTeam + ' points.');
} else if (averageEvaTeam === averageJohnTeam && averageJohnTeam === averageMikeTeam) {
    console.log('Draw.');
} else {
    console.log('Something other.');
}









