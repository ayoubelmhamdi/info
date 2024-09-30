# Clang need compile_commands.json file

the easy way for me is to use `Makefile` in my project then install `Bear` than

```bash
bear -- make game
ls compile_commands.json
```

then clang read the structure of my setup without ctags at all.
