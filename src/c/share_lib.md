# how to make so/share library
```bash
\$ gcc -o libx.so -fpic -shared libx.c # libx.c -> libx.so
\$ ln -s x.h /usr/include/ayoub/x.h
\$ ln -s libx.so /lib                  #
\$ gcc -c main.c -o main.o             # main.c -> main.o
\$ gcc -o main main.o -lx              # main.o +  mylib
```

# how to use it in Makefile
just add `-lx` to `cflags`

# Check for lib
to view the `function` that already define or undefine(need `lib.so`)
```bash
\$ nm a.out
```

# how to view shared lib from app
```bash
\$ ldd a.aout
```
