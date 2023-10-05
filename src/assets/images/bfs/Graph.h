#pragma once
#include <vector> 
class Graph
{
private:
    int number1;
    int numVertices;
    std::vector<int>Step;
    std::vector< std::vector<int> > adjList;
    std::vector<bool>visited;
public:
    int temp;
    Graph(int vertices);
    std::vector<int> getadjList(int vertex);
    void addEdge(int src, int dest);
    void addArc(int src, int dest);
    void BFS(int startVertex);
    int interconnection();
    void findStep(int startVertex, int endVertex);
    void output();
    ~Graph();
};

