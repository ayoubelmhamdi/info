# NASM
---



```gdb
(gdb) xrsp
0x7fffffffd1a0: 0x0000000000000003  ; [rsp + 0] => 3
0x7fffffffd1a8: 0x00007fffffffd7b9  ; [rsp + 8] => /home/user/bin/cmd1
0x7fffffffd1b0: 0x00007fffffffd7d9  ; [rsp +16] => foo
0x7fffffffd1b8: 0x00007fffffffd7dd  ; [rsp +24] => bar
```

- gdb alias `xrsp` stand for print 4 top addresses of stack pointer, the first is argc, then program name, then argv, then envp ...
- to print the argc, we can use:
    - `x/d 0x7fffffffd1a0`
    - `x/d $rsp`.
    - `p *(int **)  0x7fffffffd1a0`.
    - `p *(int*) $rsp`
- to print the argc, we can use:
    - `x/3c *(char**) 0x7fffffffd1a8`.
    - `x/3c *(char**) ($rsp+16)`.
    - `p *(char **)  0x7fffffffd1a8`.
    - `p *(char **) ($rsp+16)`.

- in nasm to see the first value in stack pointer argc, we can use `mov rax, [rsp]` we use bracket here to dereference the address stored in rsp register.
- to see the argv[2] the forth value in stack pointer, we can use `mov rax, [rsp+24]`

