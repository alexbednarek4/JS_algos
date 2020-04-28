// Creating graph using Map data structure

// Here is a list of airports, and also a list of routes connecting these airports
// Connect them using a graph

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];
// Represented in an adjacency list because takes up less space than adjacency matrix
// The graph
const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// Now we want to find if there is connection between Phoenix and Bangkok
const bfs = (start) => {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);
    for (let destination of destinations) {
      if (destination === "BKK") {
        console.log("Connection confirmed!");
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        // destination only gets enqueued if it has not been visited already
        queue.push(destination);
      }
    }
  }
};

const dfs = (start, visited = new Set()) => {
  console.log(start);
  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (destination of destinations) {
    if (destination === "BKK") {
      console.log("Connection confirmed using DFS");
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
};
// dfs('PHX')
