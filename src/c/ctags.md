# Raylib
the Raylib use a preprocessing in the header file, that need a more ctags flags to create the `./tags` file.

```c
#if defined(__cplusplus)
extern "C" {            // Prevents name mangling of functions
#endif

RLAPI void InitWindow(int width, int height, const char *title);
#if defined(__cplusplus)
}
#endif
```

- `ctgs` command:
```bash
ctags --c++-kinds=+p --fields=+iaS --extras=+q --language-force=C -f tags -R raylib.h
```
