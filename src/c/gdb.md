# GDB
## go back : gdb prev
```
$ target record-full
$ run
$ reverse-next
$ reverse-step
```


## change var value from 3 to 7
```c
main(){
  int i=7
}
```
```
$ set variable i = 7
```
## change string value
```c
int main(){
  char[] person = "Bob";
}
```
```
$ set main::person = "Sam"
```

## gdb config
```
$ cat ~/.gdbinit
```

## gdb source view
```
$ gdb -tui
```

## gdb in vim
```
$ let g:termdebug_wide = 10 | packadd termdebug | Termdebug
```
