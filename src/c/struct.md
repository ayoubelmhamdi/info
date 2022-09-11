# pass arry of sruct
- [my answer in stackoverflow](https://stackoverflow.com/a/71350239/12387614)
- struct:
```c
typedef struct top {
    int tot;
    char s[100];
} top;  
```
- main:
```c
int main() {
    top **t_array = malloc(100 * sizeof(top *));
    t_array[0] = malloc(sizeof(top));
    t_array[0]->tot = 10;
    f1(t_array);
}
```
- function:
```c
void f1(top **t_array) {
    t_array[0] = malloc(sizeof(top));
    t_array[0]->tot = 11;
}
```

# without array
```c
typedef struct top {
    int tot;
} top;
```
- main
```
top *array1 = malloc(MAX * sizeof(top));
array1->tot=11;
```
# swap (permutaion) tow struct
```c
top* tmp = t_trie[j];
t_trie[j] = t_trie[i];
t_trie[i] = tmp;
```
