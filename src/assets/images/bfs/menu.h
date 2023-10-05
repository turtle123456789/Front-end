#pragma once
#include "menu.h"
#include <conio.h>
#include <Windows.h>
#include <iostream>

void textcolor(int x)
{
	HANDLE mau;
	mau = GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleTextAttribute(mau, x);
}
void gotoxy(int x, int y)
{
	HANDLE hConsoleOutput;
	COORD Cursor_an_Pos = { x - 1,y - 1 };
	hConsoleOutput = GetStdHandle(STD_OUTPUT_HANDLE);
	SetConsoleCursorPosition(hConsoleOutput, Cursor_an_Pos);
}
void clearscreen()
{
	HANDLE hOut;
	COORD Position;
	hOut = GetStdHandle(STD_OUTPUT_HANDLE);
	Position.X = 0;
	Position.Y = 0;
	SetConsoleCursorPosition(hOut, Position);
}

void setColor(int color)
{
	WORD wColor;


	HANDLE hStdOut = GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_SCREEN_BUFFER_INFO csbi;
	if (GetConsoleScreenBufferInfo(hStdOut, &csbi))
	{
		wColor = (csbi.wAttributes & 0xF0) + (color & 0x0F);
		SetConsoleTextAttribute(hStdOut, wColor);
	}
}
void ShowCur(bool CursorVisibility)
{
	HANDLE handle = GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO ConCurInf;

	ConCurInf.dwSize = 10;
	ConCurInf.bVisible = CursorVisibility;

	SetConsoleCursorInfo(handle, &ConCurInf);
}
void box(int x, int y, int w, int h )
{
	
	
	if (h < 1 || w < 1)return;
	textcolor(7);
	for (int ix = x; ix <= x + w; ix++)
	{
		gotoxy(ix, y);
		std::cout << "=";
		gotoxy(ix, y + h);
		std::cout << "=";
	}
	for (int iy = y; iy <= y + h; iy++)
	{
		gotoxy(x, iy);
		std::cout << "#";
		gotoxy(x + w, iy);
		std::cout << "#";
	}
	textcolor(7);
}
void choose(int x, int y,int w, int h, int color=224)
{
	textcolor(color);
	for (int iy = y+1; iy < y + h; iy++)
	{
		for (int ix = x+1; ix < x + w; ix++)
		{
			gotoxy(ix, iy);
			std::cout << " ";
		}
	}
}