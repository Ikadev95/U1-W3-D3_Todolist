const Add = document.getElementById("addListItem");
//recupero il bottone + che aggiunge un elemento alla lista

Add.addEventListener("click", function () {
    const modale = document.querySelector(".modalecontainer");
    modale.style.display = "block";
});
// creo un addeventlistener per cui una volta cliccato il bottone il container della modale va in block

const form = document.querySelector("form");
//recupero il nodo del form
let counter = 1;
//contatore per generare gli ID diversi

form.onsubmit = function (event) {
    event.preventDefault();
    //elimino il default così non si ricarica la pagina

    const Title = document.getElementById("titolo");
    const Task = document.getElementById("task");
    //recupero tramite Id titolo e task

    const item = {
        titolo: Title.value,
        task: Task.value
    };
    //genero un oggetto con dentro titolo e task

    const Container = document.getElementById("container");
    // recupero tramite Id il container in cui inserire il list item

    Container.innerHTML += `
        <div class="Item">
            <input type="checkbox" id="task${counter}" class="checkbox" />
            <label for="task${counter}"> ${item.titolo} : ${item.task} </label>
        </div>
    `;
    // inserisco il nuovo list item

    form.reset();
    //resetto il form

    const modale = document.querySelector(".modalecontainer");
    modale.style.display = "none";
    //faccio scomparire la modale

    counter++;
    // aumento il counter per il prossimo list item

    const Checkbox = document.querySelectorAll(".checkbox");
    // seleziono tutti i checkbox
    Checkbox.forEach((check) => {
        if (check) {
            check.addEventListener("click", function () {
                check.parentElement.style.display = "none";
            });
        }
    });
    // li ciclo e se cliccati li faccio scomparire
};
