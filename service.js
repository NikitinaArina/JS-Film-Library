let films = [];
let filter2;
let reviews = [];
let str = "films";
let fil;
start();
let div = document.querySelector(".add_film");
let form = document.querySelector(".form");
function openService() {
    if (div.style.display == "flex") {
        div.style.display = "none";
        form.style.display = "none";
    } else {
        div.style.display = "flex";
        form.style.display = "flex";
    }
}
function closeService() {
    addFilm();
    div.style.display = "none";
    form.style.display = "none";
    return false;
}
class Film {
    constructor(title, country,
        genre,
        director,
        scenario,
        producer,
        operator,
        composer,
        budget,
        worldFees,
        age,
        time,
        year,
        photo,
        reviews) {
        this.title = title;
        this.country = country;
        this.genre = genre;
        this.director = director;
        this.scenario = scenario;
        this.producer = producer;
        this.operator = operator;
        this.composer = composer;
        this.budget = budget;
        this.worldFees = worldFees;
        this.age = age;
        this.time = time;
        this.year = year;
        this.photo = photo;
        this.reviews = reviews;
    }
}
class Filters {
    constructor(title, index) {
        this.title = title;
        this.index = index;
    }
}
class Reviews {
    constructor(id, name, occupation, text, assessment) {
        this.id = id;
        this.name = name;
        this.occupation = occupation;
        this.text = text;
        this.assessment = assessment;
    }
}
let text;
let title;
let country;
let genre;
let director;
let scenario;
let producer2;
let operator;
let composer;
let budget;
let worldFees;
let age;
let time;
let date;
let image;
function checkParams() {
    title = document.getElementById("name").value;
    country = document.getElementById("country").value;
    genre = document.getElementById("genre").value;
    director = document.getElementById("producer").value;
    scenario = document.getElementById("scenario").value;
    producer2 = document.getElementById("producer2").value;
    operator = document.getElementById("operator").value;
    composer = document.getElementById("composer").value;
    budget = document.getElementById("budget").value;
    worldFees = document.getElementById("worldFees").value;
    age = document.getElementById("age").value;
    time = document.getElementById("time").value;
    date = document.getElementById("date").valueAsNumber;
    image = document.getElementById("image").value;
    let btn = document.getElementById("button");
    if (title.length != 0 && country.length != 0 && genre.length != 0
        && director.length != 0 && scenario.length != 0 && producer2.length != 0
        && operator.length != 0 && composer.length != 0 && budget.length != 0
        && worldFees.length != 0 && age.length != 0 && time.length != 0 && date.length != 0 && image.length != 0) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "disabled");
    }
}
function start() {
    if (localStorage.getItem("films") == null) {
        localStorage.setItem("films", JSON.stringify([]));
    }
    if (JSON.parse(localStorage.getItem("films")).length >= 1) {
        films = JSON.parse(localStorage.getItem("films"));
    }
}
function addFilm() {
    films.push(new Film(
        title,
        "0" + country,
        "0" + genre,
        director,
        scenario,
        producer2,
        operator,
        composer,
        budget,
        worldFees,
        age,
        time,
        "0" + date,
        image,
        []
    ))
    localStorage.setItem("films", JSON.stringify(films));
    printResults(str);
    addToFilter();
}

const NAME = "picture";
const YEAR = "YEAR";
const DATE = "DATE";
const GENRE = "GENRE";
const COUNTRY = "COUNTRY";
let count;
printResults(str);
function printResults(string) {
    count = 0;
    let container = document.querySelector(".results");
    fil = JSON.parse(localStorage.getItem(string));
    container.innerHTML = "";
    fil.forEach(function (print) {
        let title = document.createElement("h2"),
            poster = document.createElement("img"),
            Genre = document.createElement("p"),
            Producer = document.createElement("p"),
            Scenario = document.createElement("p"),
            Producer2 = document.createElement("p"),
            Operator = document.createElement("p"),
            Composer = document.createElement("p"),
            Budget = document.createElement("p"),
            WorldFees = document.createElement("p"),
            Age = document.createElement("p"),
            Time = document.createElement("p"),
            Country = document.createElement("p"),
            Year = document.createElement("p"),
            divbtn = document.createElement("div"),
            div2 = document.createElement("div"),
            containerForRes = document.createElement("div"),
            containerForInfo = document.createElement("div"),
            mainContainer = document.createElement("div"),
            addReview = document.createElement("button");
        poster.src = "" + print.photo;
        title.innerText = print.title;
        Genre.innerText = "Жанр: " + print.genre.substr(1);
        Country.innerText = "Страна: " + print.country.substr(1);
        let yr = parseInt(print.year.toString().substr(1));
        Year.setAttribute(YEAR, new Date(yr).getFullYear());
        Year.innerText = "Дата выпуска: " + new Date(yr).getDate() + "." + (new Date(yr).getMonth() + 1) + "." + new Date(yr).getFullYear();
        Producer.innerText = "Режиссер: " + print.director;
        Scenario.innerText = "Сценарий: " + print.scenario;
        Producer2.innerText = "Продюсер " + print.producer;
        Operator.innerText = "Оператор: " + print.operator;
        Composer.innerText = "Композитор: " + print.composer;
        Budget.innerText = "Бюждет: " + print.budget;
        WorldFees.innerText = "Мировые сборы: " + print.worldFees;
        Age.innerText = "Рейтинг возраста: " + print.age;
        Time.innerText = "Дата выхода: " + print.time;
        div2.classList.add("container__forImg");
        divbtn.classList.add("modal_btn-delete");
        mainContainer.classList.add("main_container");
        divbtn.innerText = "×";
        addReview.innerText = "Добавить отзыв";
        addReview.classList.add("review");
        divbtn.setAttribute(NAME, count);
        addReview.setAttribute("id", count);
        divbtn.setAttribute(DATE, new Date(yr).getFullYear());
        divbtn.setAttribute(COUNTRY, print.country.substr(1));
        divbtn.setAttribute(GENRE, print.genre.substr(1));
        divbtn.addEventListener("click", deleteFilm);
        addReview.addEventListener("click", openFormForReview);
        containerForRes.classList.add("container__forRes");
        containerForInfo.classList.add("container__forInfo");
        div2.appendChild(poster);
        containerForRes.appendChild(div2);
        containerForInfo.appendChild(divbtn);
        containerForInfo.appendChild(title);
        containerForInfo.appendChild(Country);
        containerForInfo.appendChild(Genre);
        containerForInfo.appendChild(Producer);
        containerForInfo.appendChild(Scenario);
        containerForInfo.appendChild(Producer2);
        containerForInfo.appendChild(Operator);
        containerForInfo.appendChild(Composer);
        containerForInfo.appendChild(Budget);
        containerForInfo.appendChild(WorldFees);
        containerForInfo.appendChild(Age);
        containerForInfo.appendChild(Time);
        containerForInfo.appendChild(Year);
        containerForRes.appendChild(containerForInfo);
        mainContainer.appendChild(containerForRes);
        mainContainer.appendChild(addReview);
        container.appendChild(mainContainer);
        count++;
    });
}
function deleteFilm(e) {
    let button = e.target;
    let atr = button.getAttribute(NAME);
    let atrCountry = button.getAttribute(COUNTRY);
    let atrDate = button.getAttribute(DATE);
    let atrGenre = button.getAttribute(GENRE);
    films.splice(atr, 1);
    if (checkGenre != false || checkDate != false || checkCountry != false) {
        filter.splice(atr, 1);
        localStorage.setItem("filt", JSON.stringify(filter));
        checkFilter(atrCountry, atrGenre, atrDate);
        printResults(filter2);
    } else {
        localStorage.setItem("films", JSON.stringify(films));
        checkFilter(atrCountry, atrGenre, atrDate);
        printResults(str);
    }
}
let textReview;
let nameReview;
let assessment2;
let occupation;
function checkParamsReview() {
    let btn = document.querySelector(".add_Reviews");
    textReview = document.getElementById("text");
    nameReview = document.getElementById("nameReview");
    occupation = document.getElementById("occupation");
    assessment2 = assessment.options[assessment.selectedIndex].text;
    console.log(assessment2);
    if (textReview.value.length != 0 && nameReview.value.length != 0 && occupation.value.length != 0) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "disabled");
    }
}
let atrReview;
function openFormForReview(e) {
    let button = e.target;
    atrReview = button.getAttribute("id");
    console.log(atrReview);
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("window");
    document.body.appendChild(mainContainer);
    let formContainer = document.querySelector(".form_div");
    formContainer.style.display = "flex";
    let btnAddReview = document.querySelector(".add_Reviews");
    mainContainer.onclick = function () {
        mainContainer.parentNode.removeChild(mainContainer);
        formContainer.style.display = "none";
        return false;
    }
}
function addReview() {
    console.log(atrReview);
    reviews.push(
        new Reviews(atrReview, nameReview.value, occupation.value, textReview.value, assessment2)
    )
    if (films[atrReview].reviews == null) {
    films[atrReview].reviews = [new Reviews(atrReview, nameReview.value, occupation.value, textReview.value, assessment2)];
    } else films[atrReview].reviews.push(new Reviews(atrReview, nameReview.value, occupation.value, textReview.value, assessment2));
    nameReview.value = "";
    occupation.value = "";
    textReview.value = "";
    assessment2.value = "";
}
let allFilms;
let arrayc = [], arrayg = [], arrayd = [];
let arrayF = [];
addToFilter();
function addToFilter() {
    allFilms = JSON.parse(localStorage.getItem("films"));
    allFilms.forEach(function (option) {
        let text = "" + new Date(parseInt(option.year.toString().substr(1))).getFullYear();
        if (arrayd.indexOf(text) == -1) {
            arrayd.push(text);
            arrayF.push(new Filters(text, 1));
            let newOption = new Option(text, "data");
            dates.append(newOption);
        } else {
            for (let i = 0; i < arrayF.length; i++) {
                if (arrayF[i].title == text) {
                    arrayF[i].index += 1;
                }
            }
        }
    });
    allFilms.forEach(function (option) {
        let text = "" + option.genre.substr(1);
        if (arrayg.indexOf(text) == -1) {
            arrayg.push(text);
            arrayF.push(new Filters(text, 1));
            let newOption = new Option(text, "genre");
            genres.append(newOption);
        } else {
            for (let i = 0; i < arrayF.length; i++) {
                if (arrayF[i].title == text) {
                    arrayF[i].index += 1;
                }
            }
        }
    });
    allFilms.forEach(function (option) {
        let text = "" + option.country.substr(1);
        if (arrayc.indexOf(text) == -1) {
            arrayc.push(text);
            arrayF.push(new Filters(text, 1));
            let newOption = new Option(text, "country");
            countries.append(newOption);
        }
        else {
            for (let i = 0; i < arrayF.length; i++) {
                if (arrayF[i].title == text) {
                    arrayF[i].index += 1;
                }
            }
        }
    });
}
let checkGenre = false, checkDate = false, checkCountry = false;
let selectGenre, selectDate, selectCountry;
function startFilter() {
    selectGenre = genres.options[genres.selectedIndex].text;
    selectDate = dates.options[dates.selectedIndex].text;
    selectCountry = countries.options[countries.selectedIndex].text;
    doFilter();
}
let filter;
function doFilter() {
    filter2 = "filt";
    if (selectCountry == "Все страны") {
        checkCountry = false;
        selectCountry = "0";
    } else checkCountry = true;
    if (selectGenre == "Все жанры") {
        checkGenre = false;
        selectGenre = "0";
    } else checkGenre = true;
    if (selectDate == "Все даты") {
        checkDate = false;
        selectDate = "0";
    } else checkDate = true;
    filter = films.filter(
        (e) =>
            e.country.indexOf(selectCountry) != -1
    )
    filter = filter.filter(
        (e) =>
            e.genre.indexOf(selectGenre) != -1
    );

    filter = filter.filter(
        (e) =>
            selectDate == "0" ? e.year.indexOf(selectDate) != -1 : (new Date(parseInt(e.year.toString().substr(1))).getFullYear() == selectDate)
    )
    localStorage.setItem("filt", JSON.stringify(filter));
    printResults(filter2);
}
let index;
function checkFilter(atrCountry, atrGenre, atrDate) {
    for (let i = 0; i < arrayF.length; i++) {
        if (arrayF[i].title == atrCountry) {
            arrayF[i].index -= 1;
            if (arrayF[i].index < 1) {
                for (let i = 0; i < countries.options.length; i++) {
                    if (countries.options[i].label == atrCountry && (index = arrayc.indexOf(atrCountry))) {
                        countries.options.remove(i);
                        arrayc.splice(index, 1);
                    }
                }
            }
        }
        if (arrayF[i].title == atrDate) {
            arrayF[i].index -= 1;
            if (arrayF[i].index < 1) {
                for (let i = 0; i < dates.options.length; i++) {
                    if (dates.options[i].label == atrDate && (index = arrayd.indexOf(atrDate))) {
                        dates.options.remove(i);
                        arrayd.splice(index, 1);
                    }
                }
            }
        }
        if (arrayF[i].title == atrGenre) {
            arrayF[i].index -= 1;
            if (arrayF[i].index < 1) {
                for (let i = 0; i < genres.options.length; i++) {
                    if (genres.options[i].label == atrGenre && (index = arrayg.indexOf(atrGenre))) {
                        genres.options.remove(i);
                        arrayg.splice(index, 1);
                    }
                }
            }
        }
    }
}