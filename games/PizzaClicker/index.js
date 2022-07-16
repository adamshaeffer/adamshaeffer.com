let cash = 0;//variable for current money
let slice = 0;//current amount of pizzas
let worktime = 0;//variable to run the make money gif
let buytime = 0;//variable to run the buy pizza gif
let question = 1;
let name = '[player name]';
const money = document.getElementById('money');//display of current money
const clicker = document.getElementById('moneyclick');//button for Make Money
const moneygif = document.getElementById("moneygif");//gif for making money
const pizza = document.getElementById('pizza');//display of current number of pizzas
const pizzaclick = document.getElementById('pizzaclick');//button for Buy Pizza
const pizzagif = document.getElementById('pizzagif');//gif for buying pizza
const frijoles = document.getElementById('frijoles');

setInterval(update, 1000);//runs the upddate function every second

const makeMoney = () => {//Method when click 'Make Money!' button
    worktime = 2;
    moneygif.style.display = "inline-block";
    clicker.style.display = "none";
}

const buyPizza =  () => {//Method when click 'Buy Pizza!' button
    if(cash>=10) {
        buytime = 5;
        pizzagif.style.display = "inline-block";
        pizzaclick.style.display = "none";    
    }
}

function update() {//function to allow gifs to appear and disappear
    if(worktime > 0) {
        worktime--;
        if(worktime == 0) {
            clicker.style.display = "inline-block";
            moneygif.style.display = "none";
            cash++;
            cash+=4;//Admin powers to make more money and test the game out
            money.innerHTML = `$${cash}`;
            if(cash%5==0 && question<5) {
                dialogue();
            }
            if(cash>=20) {
                pizzaclick.style.display = "block";
                pizza.style.display = "block";
                pizzaclick.style.textAlign = "center";
            }
        }
    }
    if(buytime > 0) {
        buytime--;
        if(buytime == 0) {
            pizzaclick.style.display = "inline-block";
            pizzagif.style.display = "none";
            slice++;
            cash-=10;
            pizza.innerHTML = `Pizzas: ${slice}`;
            money.innerHTML = `$${cash}`;
            if(slice>0) {
                dialogue();
            }
        }
    }
}

function dialogue() {
    if(question == 1) {
        frijoles.innerHTML = "Hey dude, how's it going?";
    }
    if(question == 2) {
        frijoles.innerHTML = "The name's Frijoles, what's yours?";
    }
    if(question == 3) {
        frijoles.innerHTML = `Nice to meet ya ${name}! Soooo, whatcha gonna do with all that dough?`;
    }
    if(question == 4) {
        frijoles.innerHTML = `Well, if you needin' a suggestion, you could buy me a pizza! I'm starvin'!`
    }
    if(question == 5) {
        frijoles.innerHTML = "Yooooo! Dude! You're the flippin' best! Thanks a ton! I'm still kinda hungry though..."
    }
    question++;
}