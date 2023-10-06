import UnionFind from "./UnionFind";


const minCostToConnectCities = (n: number, connections: number[][]): number => {
    const uf = new UnionFind(n);

    // Sort connections by cost
    connections.sort((a,b) => a[2] - b[2]);

    let totalCost = 0;
    
    connections.forEach((connection) => {
        if(!uf.connected(connection[0]-1, connection[1]-1)){
            uf.union(connection[0]-1, connection[1]-1)
            totalCost += connection[2];
        }
    })
    return totalCost;
}

const cities = 4;
const connections = [
  [1, 2, 5], // Connect city 1 and city 2 with cost 5
  [1, 3, 8], // Connect city 1 and city 3 with cost 8
  [2, 3, 6], // Connect city 2 and city 3 with cost 6
  [2, 4, 7], // Connect city 2 and city 4 with cost 7
  [3, 4, 9], // Connect city 3 and city 4 with cost 9
];

const minimumCost = minCostToConnectCities(cities, connections);
console.log("Minimum cost to connect all cities:", minimumCost);
