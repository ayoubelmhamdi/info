# STRING

## pass `char[][]` to function 
- [stackoverflow](https://stackoverflow.com/questions/41431070/read-file-into-multidimensional-character-array-in-c)
- [check no duplocate from my github](git@github.com:ay-learn/noduplicate)

- function to read char[][] `2D`
```c
void readMatrix( char *matrix[][cols]) {
    matrix[i][j] = "aaa";
}
```

```c
char *mat[rows][cols];
readMatrix(mat);

```

- with maloc and pointer
```c
void readMatrix(char**** matrix){
    *matrix = malloc(rowNum*sizeof(char**));
    for(int i=0;i<rowNum;i++){
        *(*matrix+i) = malloc(columnNum*sizeof(char*));
    }

    *(*(*matrix+i)+j) = malloc(MAX_WORD_SIZE*sizeof(char));
    scanf("%s",*(*(*matrix+i)+j));
}
char*** inputMatrix;
readMatrix(&inputMatrix);
printf("%s ",*(*(inputMatrix+i)+j));
```

## Read string with white space from file with fscanf

```c
    char s[40];
    fscanf (fp, "%d,%f,%[a-zA-Z ]\n", &i, &x, s);

```
