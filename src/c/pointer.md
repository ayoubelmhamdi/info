# array of function Pointers
like `switch` cases to run the `functions`:
- function:
```c
 int sum(int a,int b);
 int sub(int a,int b);
```
- main:
```c
int (*option[2])(int,int);
option[1]=sum;
option[2]=sub;

printf("%d",option[1](1,2)); // sum(1,2) --> 3
```
