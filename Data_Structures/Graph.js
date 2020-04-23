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
    // recursive
    DFSR(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        //iife
        (function DFS(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return DFS(neighbor);
                }
            });
        })(start)
        return result;
    }
    // iterative
    DFSI(start){
        const stack = [start];
        const visited = {};
        const result = [];
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            // visit all currentVertex neighbors
            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    BFS(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            //visit all currentVertex neighbors
            this.adjacencyList[currentVertex].forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}
const newGraph = new Graph();

newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addVertex('C');
newGraph.addVertex('D');
newGraph.addVertex('E');
newGraph.addVertex('F');

newGraph.addEdge('A', 'B')
newGraph.addEdge('A', 'C')
newGraph.addEdge('B', 'D')
newGraph.addEdge('C', 'E')
newGraph.addEdge('D', 'E')
newGraph.addEdge('D', 'F')
newGraph.addEdge('E','F')
console.log(newGraph.adjacencyList);
console.log(newGraph.BFS('A'));

