- Give a error whenever a function is used before being declared
```
\$ gcc -Werror-implicit-function-declaration
```

- Give a error whenever a function is used without prototypes
```
\$ gcc -Wstrict-prototypes -Wmissing-prototypes
```

- option makes using -S to inspect the assembly output much, much nicer.
```
\$ gcc -masm=intel
```

- esstentiel
```
\$ gcc -Wall -Wextra -Wfloat-equal -Os -ggdb
```
- stops the compilation if has and big warrning
```
\$ gcc -Werror
```

- small executable
```
\$ gcc -s
```

- cheack printf and scanf 
```
\$ gcc -Wformat=2
```

- gcc version
```
\$ gcc -std=c99
```
