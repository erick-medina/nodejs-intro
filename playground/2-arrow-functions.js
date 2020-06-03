
/*const square = (x) => {
    return x * x
}*/

const square = (x) => x * x;

console.log(square('3'));

const event = {
    name: 'Erick\'s party',
    guestList: ['Peter', 'Marisol', 'Alice'],
    printGuestList(profession) {
        console.log(`You are at ${this.name} and he is a ${profession}`)

        this.guestList.forEach((guest) => {
            console.log(`${guest} is attending to ${this.name}`)
        })
    }
}

event.printGuestList('designer');