
// function addTwoNumbers(a, b) {
//     try {
//         const c = a + b;
//         console.log('Successful: ' + (c + 5));
//         console.log('Successful: ' + (c += 5));
//     } catch (e) {
//         console.error('You screwed up and got the following error ', e);
//     } finally {
//         console.log('This part executes no matter what');
//     }
// }

// addTwoNumbers(5, 7)

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Greete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    console.log('Entering buildGraph()');
    console.log(`buildGraph edges = ${edges}`);
    let graph = Object.create(null);
    console.log(graph);
    function addEdge(from, to) {
        console.log(graph);
        console.log(`addEdge from = ${from}, to = ${to}`);
        console.log(`is from in graph? ${from in graph}`);
        if (from in graph) {
            console.log(`graph[from] = ${graph[from]}`)
            graph[from].push(to);
            console.log(`after push(to), graph[from] = ${graph[from]}`)
        } else {
            graph[from] = [to];
            console.log(graph)
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    console.log(graph);
}

const roadGraph = buildGraph(roads);