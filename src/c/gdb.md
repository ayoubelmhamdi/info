# GDB

### print
- string
```bash
p s
```
- first 3 element in any `arrays`
```bash
p s@3
```

## go back : gdb prev
```bash
target record-full
run
reverse-next
reverse-step
```


## change var value from 3 to 7
```c
main(){
  int i=7
}
```

```bash
set variable i = 7
```
## change string value
```c
int main(){
  char[] person = "Bob";
}
```
```bash
set main::person = "Sam"
```

## gdb config
```bash
cat ~/.gdbinit
```

## gdb source view
```bash
gdb -tui
```

## gdb in vim
```bash
let g:termdebug_wide = 10 | packadd termdebug | Termdebug
```
