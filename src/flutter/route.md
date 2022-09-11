# rooting 
  - use `routes:{key:val,...}`
  - import layout
    ```dart
    import 'package:app9/pages/choose_location.dart';
    import 'package:app9/pages/home.dart';
    import 'package:app9/pages/looding.dart';
    import 'package:flutter/material.dart';

    void main() => runApp(MaterialApp(
          initialRoute:'/',
          routes: {
            '/': (context) => Loading(),
            '/home': (context) => Home(),
          },
        ));
    ```

 - don't use  duplique roationg, like:
   ```dart
   runApp(
       Home(),
       routes:{'/home'}
   )
   ```

