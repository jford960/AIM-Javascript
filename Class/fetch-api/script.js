// const starships = [];
// fetch('https://swapi.dev./api/people/1/')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.name);
//         return data;
//     })
//     .then(data => {
//         document.getElementById('character-name').textContent = data.name;
//         return data;
//     })
//     .then(data => {
//         data.starships.forEach(element => {
//             fetch(element)
//                 .then(response => response.json())
//                 .then(shipData => {
//                     starships.push(shipData.name)
//                 })
//         });
//         console.log(starships);
//         //     const ships = document.getElementById('ships');
//         //     ships.textContent = 'Luke has piloted the following ships:'
//         //     starships.forEach((ship) => {
//         //         ships.innerHTML = '<span>' + ship + '/<span>';
//         //     })
//     })
//     .catch(error => console.log(error))

const starships = [];
const getPerson = async () => {
    const response = await fetch('https://swapi.dev/api/people/1/');

    if (response.status > 199 && response.status < 300) {
        const data = await response.json();
        return data;
    } else if (response.status === 404) {
        throw new Error('People resource not found');
    } else {
        throw new Error('Cannot process people request');
    }
};

const getShips = async (data) => {
    data.starships.forEach((url) => {
        const response = async () => {
            await fetch(url);
            const data = await response.json();
            console.log(data);
            return data;

            // if (response.status > 199 && response.status < 300) {
            //     const data = await response.json();
            //     starships.push(data.name);
            // } else if (response.status === 404) {
            //     throw new Error('Starship resource not found');
            // } else {
            //     throw new Error('Cannot process starship request');
            // }
        }
    })
}


const printShipsOnPage = (data) => {
    starships.forEach((ship) => {
        document.getElementById('ships').innerHTML += '<span>$'
    })
}

getPerson()
    .then(data => getShips(data))
    .then()