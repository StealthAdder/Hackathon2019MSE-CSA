
var SCI=0,ART=0,COM=0;

var checks = document.getElementsByClassName('checks');
var divLvL1 = document.querySelector("#lvl1");
var divLvL2 = document.querySelector("#lvl2");
var divLvL3 = document.querySelector("#lvl3");
const next1 = document.getElementById("next1");

const que= document.querySelector("#Q2")
const btn1= document.querySelector("#btn1")
const btn2= document.querySelector("#btn2")
const btn3= document.querySelector("#btn3")
const test = document.querySelector("#test");

const career1 = document.querySelector("#career1");

var count=4;
var qb = ["q1","q2","q3","q4","q5"]
var RAND
var val,L

next1.addEventListener('click',function(){
    SCI=0,ART=0,COM=0;
    if(checks[0].checked) SCI+=2,ART+=1,COM+=0;
    if(checks[1].checked) SCI+=2,ART+=0,COM+=0;
    if(checks[2].checked) SCI+=4,ART+=0,COM+=0;
    if(checks[3].checked) SCI+=2,ART+=1,COM+=0;
    if(checks[4].checked) SCI+=0,ART+=4,COM+=0;
    if(checks[5].checked) SCI+=0,ART+=2,COM+=0;
    if(checks[6].checked) SCI+=0,ART+=2,COM+=0;
    if(checks[7].checked) SCI+=0,ART+=0,COM+=2;
    if(checks[8].checked) SCI+=0,ART+=0,COM+=2;
    if(checks[9].checked) SCI+=0,ART+=0,COM+=4;

    divLvL1.classList.add("hide");
    divLvL2.classList.remove("hide");

    console.log(SCI+" "+ART+" "+COM);
    RAND= Math.floor(Math.random() * 5);
    val = qb[RAND]
    working(SCI,ART,COM,val);

})

// test.addEventListener('click',function(){
//     const net = new brain.NeuralNetwork();

//     net.train([{input: { SCI: 8, ART: 0, COM: 0 }, output: { Doctor: 1 }},
//             {input: { SCI: 5, ART: 5, COM: 5}, output: { CS: 1 }},
//             {input: { SCI: 4, ART: 2, COM: 1 }, output: { IT: 1 }},
//             {input: { SCI: 3, ART: 3, COM: 3 }, output: { BM: 1 }},
//             {input: { SCI: 3, ART: 3, COM: 3 }, output: { Teaching: 1 }},
//             {input: { SCI: 0, ART: 0, COM: 4 }, output: { Accountant: 1 }},
//             {input: { SCI: 0, ART: 3, COM: 2 }, output: { MC: 1 }},
//             {input: { SCI: 0, ART: 3, COM: 0 }, output: { LS: 1 }}]);

//     const output = net.run({ SCI: 3, ART: 3, COM: 3 });
//     console.log(output)
//     let highestValue = 0;
//     let highestCareer = '';
//     for(let i in output){
//         if(output[i] > highestValue)
//         {
//             highestValue = output[i];
//             highestCareer = `${i}`;
//         }
//     }
//     console.log("HN : "+highestCareer+" HV : "+highestValue);
//     //console.log(`The predicted Color is ${output['Doctor']}`);
// })

btn1.addEventListener('click',function(){
    L = large(SCI,ART,COM)
    if(L == "SCI") core_value = SCIENCE["A"]
    if(L == "ART") core_value = ARTS["A"]
    if(L == "COM") core_value = COMMERCE["A"]
    RAND= Math.floor(Math.random() * 5);
    val = qb[RAND]
    Score = core_value[`${val}`].y
    SCI+=Score['SCI'];
    ART+=Score['ART'];
    COM+=Score['COM'];
    console.log(`SCI ${SCI} ART ${ART} COM ${COM}`);
    if(count==0)
    {
        divLvL2.classList.add("hide");
        console.log("END")
        predict(SCI,ART,COM)
    }
    else
    {
        working(SCI,ART,COM,val)
        count--;
    }
})

btn2.addEventListener('click',function(){
    L = large(SCI,ART,COM)
    if(L == "SCI") core_value = SCIENCE["A"]
    if(L == "ART") core_value = ARTS["A"]
    if(L == "COM") core_value = COMMERCE["A"]
    RAND= Math.floor(Math.random() * 5);
    val = qb[RAND]
    Score = core_value[`${val}`].n
    SCI+=Score['SCI'];
    ART+=Score['ART'];
    COM+=Score['COM'];
    console.log(`SCI ${SCI} ART ${ART} COM ${COM}`);
    if(count==0)
    {
        divLvL2.classList.add("hide");
        console.log("END")
        predict(SCI,ART,COM)
    }
    else
    {
        working(SCI,ART,COM,val)
        count--;
    }
})

btn3.addEventListener('click',function(){
    L = large(SCI,ART,COM)
    if(L == "SCI") core_value = SCIENCE["A"]
    if(L == "ART") core_value = ARTS["A"]
    if(L == "COM") core_value = COMMERCE["A"]
    SCI+=0
    ART+=0
    COM+=0
    if(count==0)
    {
        divLvL2.classList.add("hide");
        console.log("END")
        predict(SCI,ART,COM)
    }
    else
    {
        working(SCI,ART,COM,val)
        count--;
    }
})

function predict(S,A,C)
{

    divLvL3.classList.remove("hide");
    const net = new brain.NeuralNetwork();

    net.train([{input: { SCI: 8, ART: 0, COM: 0 }, output: { Doctor: 1 }},
            {input: { SCI: 5, ART: 5, COM: 5}, output: { CS: 1 }},
            {input: { SCI: 4, ART: 2, COM: 1 }, output: { IT: 1 }},
            {input: { SCI: 3, ART: 3, COM: 3 }, output: { BM: 1 }},
            {input: { SCI: 3, ART: 3, COM: 3 }, output: { Teaching: 1 }},
            {input: { SCI: 0, ART: 0, COM: 4 }, output: { Accountant: 1 }},
            {input: { SCI: 0, ART: 3, COM: 2 }, output: { MC: 1 }},
            {input: { SCI: 0, ART: 3, COM: 0 }, output: { LS: 1 }}]);

    const output = net.run({ SCI: `${S}`, ART: `${A}`, COM: `${C}` });
    console.log(output)
    let highestValue = 0;
    let highestCareer = '';
    for(let i in output){
        if(output[i] > highestValue)
        {
            highestValue = output[i];
            highestCareer = `${i}`;
        }
    }
    console.log("HN : "+highestCareer+" HV : "+highestValue+" Name: "+CAREER[highestCareer].Name);
    career1.innerHTML = CAREER[highestCareer].Name;
}

function large(SCI,ART,COM)
{
    if(SCI>ART && SCI>COM)
    return "SCI";
    else if(COM>ART)
    return "COM";
    else 
    return "ART";
}

function question(L,val)
{
    switch(L)
    {
        case "SCI": 
                    scienceQ = SCIENCE["Q"]
                    que.innerHTML=scienceQ[`${val}`]
        break;
        case "ART":
                    artsQ = ARTS["Q"]
                    que.innerHTML=artsQ[`${val}`]
        break;
        case "COM":
                    commerceQ = COMMERCE["Q"]
                    que.innerHTML=commerceQ[`${val}`]
        break;
    }
}

function working(SCI,ART,COM,val)
{
    console.log(RAND + "RAND VAL")
    L = large(SCI,ART,COM);
    question(L,val);
}

function RoundZero(value)
{
    if(value<=0) return value = 0;
}

//Questions Database
//SCIENCE Answers to be added
var SCIENCE = {
    "Q":{
        "q1":"Are you interested in Biology and can you take it up as a profession?",
        "q2":"Are you good at Maths?",
        "q3":"Are you good at solving Physics and does it interests you?",
        "q4":"Do you want to take pure Science?",
        "q5":"Does Mechnaics and Automation interesting to you?"
    },
    "A":{ 
        "q1":{ "y":{ "SCI":2,"ART":-1,"COM":-1 }, "n":{ "SCI":-2,"ART":0,"COM":0 }},
        "q2":{ "y":{ "SCI":1,"ART":1,"COM":1 }, "n":{ "SCI":-1,"ART":0,"COM":0 }},
        "q3":{ "y":{ "SCI":1,"ART":-1,"COM":-1 }, "n":{ "SCI":-1,"ART":0,"COM":0 }},
        "q4":{ "y":{ "SCI":2,"ART":-1,"COM":-1 }, "n":{ "SCI":-2,"ART":0,"COM":0 }},
        "q5":{ "y":{ "SCI":2,"ART":1,"COM":1 }, "n":{ "SCI":-2,"ART":0,"COM":0 }}
    }
}
//ARTS need to be added
var ARTS = {
    "Q":{
        "q1":"Would you like to be an artist in future?",
        "q2":"Do you think being a reporter is your kind of job?",
        "q3":"Are you good at understanding and manipulating others?",
        "q4":"Do you like exploring the history?",
        "q5":"Do you find learning about enviroment and geography interesting?"
    },
    "A":{ 
        "q1":{ "y":{ "SCI":-1,"ART":1,"COM":1 }, "n":{ "SCI":0,"ART":-1,"COM":0 }},
        "q2":{ "y":{ "SCI":-1,"ART":1,"COM":1 }, "n":{ "SCI":0,"ART":-1,"COM":0 }},
        "q3":{ "y":{ "SCI":-1,"ART":2,"COM":0 }, "n":{ "SCI":0,"ART":-2,"COM":0 }},
        "q4":{ "y":{ "SCI":-1,"ART":1,"COM":-1 }, "n":{ "SCI":0,"ART":-1,"COM":0 }},
        "q5":{ "y":{ "SCI":-1,"ART":1,"COM":-1 }, "n":{ "SCI":0,"ART":-1,"COM":0 }}
    }
}
//COMMERCE need to be added
var COMMERCE = {
    "Q":{
        "q1":"Are you good at managing money?",
        "q2":"Would you dare to risk your money to start your own buisness?",
        "q3":"Want to be a Banker?",
        "q4":"Are you good at accounts?",
        "q5":"Are you good at marketing for new buissness products?"
    },
    "A":{ 
        "q1":{ "y":{ "SCI":-1,"ART":-1,"COM":1 }, "n":{ "SCI":0,"ART":0,"COM":-1 }},
        "q2":{ "y":{ "SCI":-1,"ART":-1,"COM":2 }, "n":{ "SCI":0,"ART":0,"COM":-2 }},
        "q3":{ "y":{ "SCI":0,"ART":-1,"COM":1 }, "n":{ "SCI":0,"ART":0,"COM":-1 }},
        "q4":{ "y":{ "SCI":0,"ART":-1,"COM":2 }, "n":{ "SCI":0,"ART":0,"COM":-2 }},
        "q5":{ "y":{ "SCI":-1,"ART":1,"COM":2 }, "n":{ "SCI":0,"ART":0,"COM":-2 }}
    }
}

//output - database
//CAREER data need to be added
var CAREER = {
    "Doctor":{ "SCI":14,"ART":0,"COM":0,"Name":"Doctor" },
    "CS":{ "SCI":7,"ART":7,"COM":7,"Name":"Civil Services"},
    "IT":{ "SCI":10,"ART":2,"COM":2,"Name":"Information Technology"},
    "BM":{ "SCI":3,"ART":5,"COM":7,"Name":"Business Management" },
    "Teaching":{ "SCI":6,"ART":6,"COM":6,"Name":"Teaching"},
    "Accountant":{ "SCI":0,"ART":0,"COM":7,"Name":"Accountant" },
    "MC":{ "SCI":0,"ART":6,"COM":4,"Name":"Mass Communication"},
    "LS":{ "SCI":0,"ART":6,"COM":0,"Name":"Liberal Studies" }
}