const student = {
    nom: "Yassine",
    age: 20,
    ville: "Safi",
    notes: [12, 15, 8, 17],
    actif: true
};
    student.age = 21;
    student.email = "yassine@gmail.com";
    student.notes.push(14);
let somme = 0;
for (let i of student.notes){
    somme += i
    }
    let moyenne = somme / student.notes.length
    console.log(student);
    console.log(somme)
    
