```c
#include <criterion/criterion.h>
// https://github.com/Snaipe/Criterion/blob/bleeding/samples/asserts.c
```
# str1 == str2: eq
```c
// need for str,...
#include <criterion/new/assert.h>

Test(..., ...) {
    cr_assert(eq(str, "hello", "hello"));
}
```

# function return 1 or bool
```c
Test(..., ...) {
    cr_assert(true);
}
```

# str1 == "":
```c
Test(..., ...) {
    char s1="";
    cr_assert(zero(str, s1));
    cr_assert(not (zero(str, s1)));
}
```

# init/finish
```c
void setup(void)
{
    puts("Runs before the test");
}

void teardown(void)
{
    puts("Runs after the test");
}

// must add this args at the end
Test(..., ..., .init = setup, .fini = teardown){
}
```
