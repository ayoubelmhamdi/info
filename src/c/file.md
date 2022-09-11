# read line by line 
```c
  while (!feof (fp)) {
    if (fgets(line, sizeof (line), fp)) {
      printf("next line= %s\n", line);
    }
  }
```

# read to char or first line
```c
   fscanf(fp, "%[^\n]", line);
   printf("Data from the file:\n%s", line);
```
- `void readFirstLine(char *file,char *line)` in `ayoub/file`
