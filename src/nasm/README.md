# NASM
---



```gdb
(gdb) xrsp
0x7fffffffd1a0: 0x0000000000000003
0x7fffffffd1a8: 0x00007fffffffd7b9
0x7fffffffd1b0: 0x00007fffffffd7d9
0x7fffffffd1b8: 0x00007fffffffd7dd
```

- gdb alias `xrsp` stand for print 4 top addresses of stack pointer, the first is argc, then program name, then argv, then envp ...
- to print the argc, we can use `p *(int **)  0x7fffffffd1a0` or `x/d 0x7fffffffd1a0`
- to print the argc, we can use `p *(char **)  0x7fffffffd1a8` or `x/c *(char**) 0x7fffffffd1a8`

