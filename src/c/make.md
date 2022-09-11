# MAKE
look some [CFLAGS](./flags.md)

 ```bash
 clang -c a.c # it's create a.o
 clang a.o f.o -o a
 ./a
 ```

- use cflags without quote: `'` or `"`
```
CFLAGS=-Wno-deprecated-declarations -Wno-format-security -lm `pkg-config --cflags --libs gtk+-3.0` -export-dynamic
LDFLAGS=`pkg-config --libs gtk+-3.0`
```
- use `all: app` not `all app:`
- help clangd and ccls
```bash
bear -- make > compile_commands.json
```
