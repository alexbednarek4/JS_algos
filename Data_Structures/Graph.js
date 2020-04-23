//? Adjacency Matrix
    // takes up more space (in sparse graphs)
    // slower to iterate over all edges
    // faster to lookup speciic edge

//? Adjacency List:
    // takes up less space (in sparse graphs)
    // faster to iterate over all edges
    // can be slowed to look up specific edge

class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        } 
        delete this.adjacencyList[vertex];
    }
}
const newGraph = new Graph();

newGraph.addVertex('Tokyo');
newGraph.addVertex('San_Francisco');
newGraph.addVertex('NYC');
newGraph.addEdge('Tokyo', 'NYC');
newGraph.addEdge('NYC', 'San_Francisco');
// console.log(newGraph.adjacencyList);
newGraph.removeEdge('Tokyo', 'NYC');
console.log(newGraph.adjacencyList);

