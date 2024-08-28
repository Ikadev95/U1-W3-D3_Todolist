const Add = document.getElementById("addListItem");

Add.addEventListener("click", function () {
    const modale = document.querySelector(".modalecontainer");
    modale.style.display = "block";
});

const form = document.querySelector("form");
let counter = 1;

form.onsubmit = function (event) {
    event.preventDefault();

    const Title = document.getElementById("titolo");
    const Task = document.getElementById("task");

    const item = {
        titolo: Title.value,
        task: Task.value
    };

    const Container = document.getElementById("container");

    Container.innerHTML += `
        <div class="Item">
            <input type="checkbox" id="task${counter}" class="checkbox" />
            <label for="task${counter}"> ${item.titolo} : ${item.task} </label>
        </div>
    `;

    const newCheckbox = document.getElementById(`task${counter}`);
    newCheckbox.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });

    form.reset();

    const modale = document.querySelector(".modalecontainer");
    modale.style.display = "none";

    counter++;
};

const initialCheckbox = document.querySelector(".checkbox");
if (initialCheckbox) {
    initialCheckbox.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });
}
