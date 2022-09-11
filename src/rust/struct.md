Struct
======
```rust
#fn main() {
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
    user1.email = String::from("anotheremail@example.com");
#}
```
return a struct
---------------
```rust
struct User {
    //...
}

fn build_user() -> User {
    User {
        //...
    }
}

fn main() {
    let user1 = build_user(...);
}
```

Merge tow struct
-------------------------------
```rust
fn main() {
    let user1 = User {
         // ....
        };

    let user2 = User {
        email: String::from("another@example.com"),
        ..user1
    };
}
```

struct as tuple
---------------

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}

```
Ownership of Struct Data
------------------------

we used the owned `String` type rather than the `&str` string slice type. for that
data to be valid for as long as the entire `struct` is valid.

to store references to data owned by something else, it's require to use the
`lifetimes`, to ensure the data referenced by a `struct` is valid for
as long as the `struct` is.

Methode with struct
====================
```rust
#struct Rectangle {
#    width: u32,
#    height: u32,
#}
#
// snip ...
impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}
#
#fn main() {
#    let rect1 = Rectangle {
#        width: 30,
#        height: 50,
#    };
#   let rect2 = Rectangle {
#       width: 10,
#       height: 40,
#   };
#
#    println!(
#        "The area of the rectangle is {} square pixels.",
#        rect1.area()
#    );
#    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
#}
```

enum
=====
```rust
enum IpAddrKind {
    V4,
    V6,
}

fn main() {
    let four = IpAddrKind::V4;
    let six = IpAddrKind::V6;

    route(IpAddrKind::V4);
    route(IpAddrKind::V6);
}

fn route(ip_kind: IpAddrKind) {}

```
Enum with struct
-----------
```rust
fn main() {
    enum IpAddrKind {
        V4,
        V6,
    }

    struct IpAddr {
        kind: IpAddrKind,
        address: String,
    }

    let home = IpAddr {
        kind: IpAddrKind::V4,
        address: String::from("127.0.0.1"),
    };

    let loopback = IpAddr {
        kind: IpAddrKind::V6,
        address: String::from("::1"),
    };
}

```
Enum as args as tuple
----------------------
```rust
#fn main() {
    enum IpAddr {
        V4(u8, u8, u8, u8),
        V6(String),
    }

    let home     = IpAddr::V4(127, 0, 0, 1);
    let loopback = IpAddr::V6(String::from("::1"));
#}
```

Example
---------
```rust
enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}

fn main() {
    value_in_cents(Coin::Quarter(UsState::Alaska));
}
```
- how to use `value_in_cents`:
    - how to call it
    - how to receive return value, is there always the same type `u8,int...`
    - tow to send and `enum` or one `variant` from enum

with if, the expression needs to return a Boolean value, but here, it can
return any type. The type of coin in this example is the Coin enum




```rust
# #[derive(Debug)] // so we can inspect the state in a minute
enum UsState {
    Alabama,
    Alaska,
    // --snip--
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}
#
#fn main() {}
```
