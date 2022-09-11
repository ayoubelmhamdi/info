# my function in mylib
- read first line from `*file` and return fist `&line` 
```c
void readFirstLine(char *file, char *line);
```

- read nth line from `*file` and return the nth `&line` 
```c
void readOneLine(char *file, char *s, int N);
```

- read `int` from `*file` and return `x`
```c
int fgetint(char *file);
```

- read `*file` and return as `&string`
```c
void fgetString(char *file, char *s);
```

- run `shell coomad` and return output as `&string`
```c
void stdoutOneline(char *s_in, char *s_out);
```
