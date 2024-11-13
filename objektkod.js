/*1. Börja med att skapa en skola som ett objekt. 
Objektet ska existera innuti en variabel som ni namnger med skolans namn för att göra det simpel. 
Skolan ska innehålla egenskaperna: 
name, address, zipcode, city, students med värdet av en tom array och teachers som en tom array.*/


let teknikhögskolan = {
  name: "teknikhögskolan",
  adress: "kalkstensvägen",
  zipcode: "6",
  city: "lund",
  students: [],
  teachers: [],

  
};

/*2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel motsvarande namnet på ämnet. 
Egenskaperna ska vara name, students som en tom array och teacher som ett tomt objekt.*/


let mathematics = {
  name: "mathematics",
  students: [],
  teacher: {},
};

let chemistry = {
  name: "chemistry",
  students: [],
  teacher: {},
};

let biology = {
  name: "biology",
  students: [],
  teacher: {},
};

/*3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. 
Egenskaperna ska vara name, age, gender och subjects som en tom array.*/

let Adam = {
  name: "Adam",
  age: 20, //vänster sida är keys, höger är values. Därför är det kolon istället för likhetstecken,
  gender: "male", //i arrays. Så är det alltid när det är objekt.
  subjects: [],
};

let Bertil = {
  name: "Bertil",
  age: 25,
  gender: "male",
  subjects: [],
};

let Cecilia = {
  name: "Cecilia",
  age: 30,
  gender: "female",
  subjects: [],
};

let David = {
  name: "David",
  age: 35,
  gender: "male",
  subjects: [],
};

let Fredrik = {
  name: "Fredrik",
  age: 40,
  gender: "male",
  subjects: [],
};

/*4.Skapa två stycken lärare med namnet som variabel 
och egenskaperna name och subjects som en tom array.*/

let Gustav = {
  name: "Gustav",
  subjects: [],
};

let Hanna = {
  name: "Hanna",
  subjects: [],

//8. Börjar
  addSubjectToTeacher: function (subject) {

  this.subjects.push(subject);
  subject.teacher=this;
  return `${this.name} was assigned to ${subject.name}`;

  }
//8 Slutar

};



/*7. För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här fall lägga till 
kopplingen i båda objekten. Alltså vi börjar med att lägga till ett ämne i en lärarens ämnesarray, 
och sen byter vi ut det tomma lärarobjekten i ämnet mot läraren. Då har vi en referens på båda sidorna. 
Egentligen är detta något som kallas för en cirkulär referens vilket vi helst vill undvika när vi programmerar, 
då kan orsaka krashar i vissa fall, men i syftet för uppgiften så är det ingen fara. 
Skapa nu en funktion som heter addSubjectToTeacher som tar emot ett ämne och en lärare, 
och parar ihop dessa. Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.*/


/*5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift(). 
Kommer du ihåg skillnaden på dem två? Skriv sen ut både läraren och ämnet du valde i konsolen och 
inspektera dem. Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola, 
och tycker du den är komplett? Vad saknas?*/

Hanna.subjects.push("biology");

console.log(Hanna.subjects);

/*6. Lägg till en student i ett ämnes studentarray. 
Skriv ut och inspektera i konsolen.*/

chemistry.students.push("Adam");

console.log(chemistry);

/*7. För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här fall 
lägga till kopplingen i båda objekten. Alltså vi börjar med att lägga till ett ämne i 
en lärarens ämnesarray, och sen byter vi ut det tomma lärarobjekten i ämnet mot läraren. 
Då har vi en referens på båda sidorna. Egentligen är detta något som kallas för en cirkulär referens 
vilket vi helst vill undvika när vi programmerar, då kan orsaka krashar i vissa fall, 
men i syftet för uppgiften så är det ingen fara. Skapa nu en funktion som heter 
addSubjectToTeacher som tar emot ett ämne och en lärare, 
och parar ihop dessa. Returnera sen läraren så du kan se förändringen i lärarens ämnesarray.*/

function addSubjectToTeacher(t, s) {
  t.subjects.push(s);
  s.teacher = t;
  return t;
}

addSubjectToTeacher(Hanna, mathematics);

console.log(Hanna);
console.log(mathematics);


/*8. Varför ha en fristående funktion som lägger till ämne till en lärare? 
Varför inte bara lägga till en funktion (alltså en metod eftersom funktionen då är 
kopplad till ett specifikt objekt) i lärarnas objekt som en egenskap? Till exempel: */






/*9.Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera gånger 
fast på olika objekt med olika logik) och lägg in de i rätt typ av objekt: 
addTeacher, enlistToSubject, addStudent, addSubject*/

