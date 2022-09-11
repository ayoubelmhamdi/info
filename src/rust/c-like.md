# C like

### import
```rust
use std::io;
```
### c scanf in rust
```rust
io::stdin()
    .read_line(&mut guess)
    .expect("Failed to read line");
```
### c #define in rust
```rust
// #define ABC 40 * 60 * 3
const ABC: u32 = 60 * 60 * 3;
```


### c rand() in rust
```rust
use rand::Rng;
let secret_number = rand::thread_rng().gen_range(1..=100);
```
### compare value to another value
```rust
use std::cmp::Ordering;
match guess.cmp(&secret_number) {
    Ordering::Less => println!("Too small!"),
    Ordering::Greater => println!("Too big!"),
    Ordering::Equal => println!("You win!"),
}
```
### cast
```rust
let guess: u32 = "42".parse().expect("Not a number!");
```

## if
```rust
if number < 5 {
    println!("condition was true");
} else {
    println!("condition was false");
}
```
```rust
let number = if condition { 5 } else { 6 };
```

## loop
- simple break
```rust
let result = loop {
    counter += 1;

    if counter == 10 {
        break counter * 2;
    }
};
```
- break outside and inside
```bash
fn main() {
    let mut count = 0;
    'counting_up: loop {
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'counting_up;
            }
            remaining -= 1;
        }

        count += 1;
    }
    println!("End count = {count}");
}
```

### while
```rust
while number != 0 {}
```

### for
```rust
let a = [10, 20, 30, 40, 50];

for element in a {}
for number in (1..4).rev() {}
```
