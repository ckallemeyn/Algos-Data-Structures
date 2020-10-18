class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v1);
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      let v2 = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, v2)
    }

  }

  depthFirstRecursive(vertex) {
    // create a results array, visited object, and scoped adjacency list
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    // helper function that takes one vertex
    const dfs = (v) => {
      // check if that vertex is empty if it is return null
      if (!v) {
        return null;
      }
      // place the vertex into the visited object and push that vertex into the result array
      visited[v] = true;
      results.push(v);
      // iterate over all the values in adjList for that vertix
      adjacencyList[v].forEach((neighbor) => {
        // if any vals have not been visited
        if (!visited[neighbor]) {
          // recursively invoke helper function with that vertex
          return dfs(neighbor);
        }
      })
    }

    dfs(vertex);

    return results;
  }

  depthFirstIterative(vertex) {
    // create a stack, visited and results array
    const visited = {};
    const results = [];
    const stack = [vertex];
    let currentVertex;
    // add vertex to the visited obj and mark it true
    visited[vertex] = true;
    // while the stack has something in it
    while (stack.length > 0) {
      // pop the next vertex from the stack
      currentVertex = stack.pop();
      results.push(currentVertex)
      // iterate through the adjacency list
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }
  }


}


let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

let g2 = new Graph();

g2.addVertex('A');
g2.addVertex('B');
g2.addVertex('C');
g2.addVertex('D');
g2.addVertex('E');
g2.addVertex('F');

g2.addEdge('A', 'B');
g2.addEdge('A', 'C');
g2.addEdge('B', 'D');
g2.addEdge('C', 'E');
g2.addEdge('D', 'E');
g2.addEdge('D', 'F');
g2.addEdge('E', 'F');

console.log(g2.depthFirstRecursive('A'));