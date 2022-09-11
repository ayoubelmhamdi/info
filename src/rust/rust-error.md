# ERROR

- double free error :
```rust
let s1 = String::from("hello");
let s2 = s1;
```
This is a problem: when `s2` and `s1` go out of scope, they will both try to free
the same memory. This is known as a `double free error` and is one of the `memory
safety bugs` we mentioned previously. Freeing memory twice can lead to memory
corruption, which can potentially lead to security vulnerabilities.
