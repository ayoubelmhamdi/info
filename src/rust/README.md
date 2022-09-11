Rust
======

- [C like](./c-like.md)
- [Error](./rust-error.md)
- [Struct](./struct.md)

Notion
=======

- `mut` , all variables are `const`, to make it `modifiable` added the `mut`
- `Result` of a `.method_name()` is an `enum`.
- We call each possible state of `Result` a `variant`.
- `Result`'s `variants` for `.read_line()` are `Ok` and `Err`.
- The blocks of code after `if`: called arms `{}`
- `let mut s="jjj"` not allowed,
- `let mut s=String::from("jjj")` allowed using the heap mémoire
-  `let s2 = s1`: `s1` `move` to `s2`, then `s1` will be droped


re-use Var: shadows
--------------------
```rust
let x=10;
let x="ll";
```
- `mut` not allowing the shadows
```rust
let mut x=10
x="ll";

```
variables
=========
```rust
let x : i32= 4; // u32,u8..
let x : i32= 4_000; // 4_000 == 4000

let y: f32 = 3.0; // defualt is f64
let floored = 2 / 3; // Results in 0

let t: bool = false;

let heart_eyed_cat: char = '😻';// 'z' ...should use single for char
```

Tuple
=====
```rust
let tup:(i32, f64, u8) = (500, 6.4, 1.5);
let (x, y, z) = tup;
println!("The value of z is: {z} or {} or {tup.2} or {}",tup.2); // {tup.2} -> not allowed
```
Arr
====

Unlike a tuple, every element of an array must have the same type. Unlike
arrays in some other languages, arrays in Rust have a fixed length.
```rust
let a = [1, 2, 3, 4, 5];
let first = a[0];
```

What Is Ownership?
==================

Memory is managed through a system of ownership with a set of rules that the
compiler checks. If any of the rules are violated, the program won’t compile.
None of the features of ownership will slow down your program while it’s
running.
- Ownership Rules
    - Each value in Rust has an owner.
    - There can only be one owner at a time.
    - When the owner goes out of scope, the value will be dropped.
- the error `double free error` is solved by `shallow copy`

`shallow copy`: not drop the `heap data` of `var` if this `data` shared between
another `var`
- `deep copy`, `s1` and `s2` will be separated
```rust
let s1 = String::from("hello");
let s2 = s1.clone();
```
- types that used head memory used move and other used copy function
```rust
    let s = String::from("hello");
    takes_ownership(s);
    s:String("new"); // not allowed because moved from this scope
```
