
#include <iostream>
#include <vector>
#include "Graph.h"
#include "menu.h"
#include <string>
int x = 49;
int y = 10;
int w = 21;
int h = 2;
void header();
void border();
void menu(int color=0, int index=0);
void menu_1();
void input(int tmp);
void listInput(int color = 0, int index = 0);
void inputMatrix(Graph *_graph, int number, int tmp);
void inputAdjList(Graph *_graph, int number, int tmp);
void algorithm(Graph *_graph);
void listAlgorithm(int color=0, int index=0);

int main()
{
    menu_1();
    return 0;
}



 void header()
 {
     gotoxy(36, 4);
     textcolor(2);
     std::cout << "THUAT TOAN TIM KIEM BFS (Breadth first search)";
     gotoxy(54, 6);
     std::cout << "TREN DO THI";
 }
 void border()
 {
     textcolor(7);
     for (int j = 26; j <= 90; j++)
     {
         gotoxy(j, 2);
         std::cout << "+";
         gotoxy(j, 20);
         std::cout << "+";
     }

     for (int i = 2; i <= 20; i++)
     {
         gotoxy(26, i);
         std::cout << "+";
         gotoxy(90, i);
         std::cout << "+";
     }
 }

 void menu(int color, int index)
{
    std::vector<std::string> list1;
    list1.push_back("  DO THI VO HUONG");
    list1.push_back("  DO THI CO HUONG");
    list1.push_back("      THOAT");
    header();
    for (int i = 0; i < list1.size(); i++)
    {
        box(x, y+i*h, w, h);
        if (index == y+i*h)
        {
            choose(x, y + i * h, w, h,0);
            setColor(15);
        }
        else {
            choose(x, y + i * h, w, h, 224);
            setColor(color);
        }
        gotoxy(x+2, y+ i * h+1 );
        std::cout << list1[i];
        textcolor(7);
    }
    border();
}

 void menu_1()
 {
     char key_press;
     int ascii_value;
     int tmp1, tmp2;
     tmp1 = x;
     tmp2 = y;
     int tmp=0;
     while(true)
     {
         ShowCur(false);
         menu(0,tmp);
         key_press = _getch();
         ascii_value = key_press;
         if (ascii_value == 72)
         {

             if (tmp2 > y)
             {
                 tmp2 -= 2;
             }
             else {
                 tmp2 += 4;
             }
             tmp = tmp2;

         }
         if (ascii_value == 80)
         {

             if (tmp2 < y + 4)
             {
                 tmp2 += 2;
             }
             else {
                 tmp2 -= 4;
             }
             tmp = tmp2;
         }
         if (ascii_value == 13)
         {

             switch (tmp2)
             {
             case 10:
                 input(1);
                 break;
             case 12:
                 input(2);
                 break;
             case 14:
                 exit(0);
             default:
                 break;
             }
         }
         if (ascii_value==27)
         {
             exit(0);
         }
         
     }
 }
 void input(int tmp)
 {
     system("cls");
    char key_press;
    int ascii_value;
    int tmp1, tmp2;
    tmp1 = x;
    tmp2 = y;
    Graph* _graph;
    int number, index;
    bool test = true;
    header();
    border();
    int index1 = 0;
    while (test)
    {
        listInput(0,index1);
        key_press = _getch();
        ascii_value = key_press;
        if (ascii_value == 72)
        {
            if (tmp2 > y)
            {
                tmp2 -= 2;
            }
            else {
                tmp2 += 2;
            }
            index1 = tmp2;
        }


        if (ascii_value == 80)
        {
            if (tmp2 < y + 2)
            {
                tmp2 += 2;
            }
            else {
                tmp2 -= 2;
            }
            index1 = tmp2;
        }
        if (ascii_value == 13)
        {
            system("cls");
            header();
            border();
            ShowCur(true);
            gotoxy(x, 8);
            std::cout << "Nhap so luong dinh:";
            std::cin >> number;
            _graph = new Graph(number);
            if (tmp2 == 10)
            {
                inputMatrix(_graph,number, tmp);
               
                
            }
            if (tmp2 == 12)
            {
               inputAdjList(_graph,number, tmp);
            }
            algorithm(_graph);
            test = false;
        }
    }
 }
 void listInput(int color, int index)
 {
     std::vector<std::string>list;
     list.push_back("    MA TRAN KE");
     list.push_back("   DANH SACH KE");
     for (int i = 0; i < list.size(); i++)
     {
         box(x, y + i * h, w, h);
         if (index == y + i * h)
         {
             choose(x, y + i * h, w, h, 0);
             setColor(15);
         }
         else {
             choose(x, y + i * h, w, h, 224);
             setColor(color);
         }
         gotoxy(x + 2, y + i * h + 1);
         std::cout << list[i];
         textcolor(7);
     }
     
 }

 void inputMatrix(Graph *_graph, int number, int tmp)
 {
     gotoxy(x-6, 8 + 1);
     std::cout << "Nhap ma tran ke:";
     int** arr = new int* [number];
     for (int i = 0; i < number; i++)
     {
         arr[i] = new int[number];
         gotoxy(x+3, 8 + 2 + i);
         for (int j = 0; j < number; j++)
         {
             std::cin >> arr[i][j];
             if (arr[i][j] = !0)
             {
                 if (tmp == 1)
                 {
                     _graph->addEdge(i, j);
                 }
                 else {
                     _graph->addArc(i, j);
                 }
             }
         }

     }
     for (int i = 0; i < number; i++)
     {
         delete arr[i];
     }
     delete[]arr;
 }
 
 void inputAdjList(Graph *_graph,int number, int tmp)
 {
     int i = 0;
     int index;
     gotoxy(x - 13, 9);
     std::cout << "*nhap dinh ke nho hon 0 de qua dinh tiep theo";
     while (i < number)
     {
         do {
             gotoxy(x-6, 8 + 2 + i);
             std::cout << "Cac dinh ke voi dinh " << i << " : ";
             std::cin >> index;
             if (index >= 0)
             {
                 if (tmp == 1)
                 {
                     _graph->addEdge(i, index);
                 }
                 else {
                     _graph->addArc(i, index);
                 }
             }
         } while (index >= 0);
         i++;
     }
 }
 
 void listAlgorithm(int color, int index )
 {
     std::vector<std::string>list2;
     list2.push_back("       BFS");
     list2.push_back("  T.P LIEN THONG");
     list2.push_back("   TIM DUONG DI");
     list2.push_back("     GO BACK");
     for (int i = 0; i < list2.size(); i++)
     {
         box(x, y + i * h, w, h);
         if (index == y + i * h)
         {
             choose(x, y + i * h, w, h, 0);
             setColor(15);
         }
         else {
             choose(x, y + i * h, w, h, 224);
             setColor(color);
         }
         gotoxy(x + 2, y + i * h + 1);
         std::cout << list2[i];
         textcolor(7);
     }

 }

 void algorithm(Graph *_graph)
 {
     system("cls");
     ShowCur(false);
     char key_press;
     int ascii_value;
     int tmp1, tmp2;
     tmp1 = x;
     tmp2 = y;
     int number1,number2, index;
     bool test = true;
     bool test1 = true;
     header();
     border();
     int index1 = 0;
     while (test)
     {
         listAlgorithm(0, index1);
         key_press = _getch();
         ascii_value = key_press;
         if (ascii_value == 72)
         {
             if (tmp2 > y)
             {
                 tmp2 -= 2;
             }
             else {
                 tmp2 += 6;
             }
             index1 = tmp2;
         }


         if (ascii_value == 80)
         {
             if (tmp2 < y + 6)
             {
                 tmp2 += 2;
             }
             else {
                 tmp2 -= 6;
             }
             index1 = tmp2;
         }
         if (ascii_value == 13)
         {
             system("cls");
             gotoxy(x, y);
             ShowCur(true);
             header();
             border();
             if (tmp2 == y)
             {
                 gotoxy(x, y);
                 std::cout << "Dinh bat dau:";
                 std::cin >> number1;
                 if (number1 < 0 || number1 >= _graph->temp)
                 {
                     gotoxy(x-3, y + 1);
                     std::cout << "Khong ton tai duong di";
                 }
                 else
                 {
                     _graph->BFS(number1);
                    gotoxy(x, y + 2);
                    std::cout << "Ket qua thuat toan:";
                    gotoxy(x, y + 3);
                    _graph->output();
                    test1 = false;
                 }
             }
             if (tmp2 == y + 2)
             {
                 gotoxy(36, y);
                 std::cout << "So luong thanh phan lien thong cua do thi:";
                 gotoxy(56, y + 1);
                 std::cout<<(_graph->interconnection());
                 test1 = false;
             }
             if (tmp2 == y + 4)
             {
                 gotoxy(x, y);
                 std::cout << "Dinh bat dau:";
                 std::cin >> number1;
                 if (number1 < 0 || number1 >= _graph->temp)
                 {
                     gotoxy(x - 3, y + 1);
                     std::cout << "Khong ton tai duong di";
                 }
                 else {
                     gotoxy(x , y + 1);
                     std::cout << "Dinh ket thuc:";
                     std::cin >> number2;
                     if ((number2 < 0 || number2 >= _graph->temp) && number2!=number1)
                     {
                         gotoxy(x - 3, y + 1);
                         std::cout << "Khong ton tai duong di";
                     }
                     else {

                         gotoxy(x, y + 2);
                         std::cout << "Ket qua thuat toan:";
                         gotoxy(x, y + 3);
                         _graph->findStep(number1, number2);
                         test1 = false;
                     }
                 }
             }
              gotoxy(x , y + h+2);
              std::cout << " ";
              ShowCur(false);
             if (test1 == false || tmp2==y+6)
             {
                 if (!test1)
                 {
                     system("pause");
                     system("cls");
                 }
                test = false;
                 _graph->~Graph();
             }
             else {
                 system("pause");
                 system("cls");
             }
         }
     }
 }