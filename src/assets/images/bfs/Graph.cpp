#include "Graph.h"
#include <vector>
#include <iostream>

Graph::Graph(int vertices)
{
	numVertices = vertices;
	temp = vertices;
	adjList.resize(vertices,std::vector<int>());
	visited.resize(numVertices);
	visited.assign(visited.size(), false);
	number1 = 0;

}
std::vector <int> Graph::getadjList(int vertex)
{
	return this->adjList[vertex];
}
void Graph::addEdge(int src, int dest)
{
	adjList[src].push_back(dest);
}
void Graph::addArc(int src, int dest)
{
	adjList[src].push_back(dest);
}
void Graph::BFS(int startVertex)
{
	
	std::vector<int>queue;
	queue.push_back(startVertex);
	visited[startVertex] = true;
	while (!queue.empty())
	{
		int tmp = queue.front();
		queue.erase(queue.begin());
		for (int x = 0; x < adjList[tmp].size(); x++)
		{
			if (visited[adjList[tmp][x]] != true)
			{
				queue.push_back(adjList[tmp][x]);
				visited[adjList[tmp][x]] = true;
			}
		}
		Step.push_back(tmp);
	}
}

int Graph::interconnection()
{
	for (int i = 0; i < numVertices; i++)
	{
		if (!visited[i])
		{
			++number1;
			BFS(i);
		}
	}
	return number1;
}

void Graph::findStep(int startVertex, int endVertex)
{
	BFS(startVertex);
	bool test = false;
	int index = 0;
	for (int i = 0; i < Step.size(); i++)
	{
		if (Step[i] == endVertex)
		{
			index = i;
			test = true;
			break;
		}
	}
	if (test)
	{
		for (int i = 0; i <= index; i++)
		{
			std::cout << Step[i] << " ";
		}
	}
	else {
		std::cout << "Khong ton tai duong di";
	}
}

void Graph::output()
{
	for (int i = 0; i < Step.size(); i++)
	{
		std::cout << Step[i] << " ";
	}
}

Graph::~Graph()
{
	adjList.clear();
	visited.clear();
}
