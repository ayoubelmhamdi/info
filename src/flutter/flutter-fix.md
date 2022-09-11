
- if you want to pass function `delete` from `class A` to `class B`  
    - don't use : `final Function? delete`;   
    - but use   : `final VoidCallback? delete`;  

- if you get the error `null`:  
  use `String foo?` ; `foo!`;

- if you want to use `wait B.fun(await ...)` in `class A`:  
    - you must add  `Future<void/int> fun(){await ...}` in `class B`
    - than use the `await B.fun..` in `class A` 
    - but don't forget to add `async` in `class A`..
- if you want to use the `hot reload` by plugin `flutter-tools` 
    - use the script to `kill` the `pid` of app that running 
