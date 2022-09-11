# pubspec.yaml
```yaml
dependencies:
  sprintf:
```

# main.dart
```dart
import 'package:sprintf/sprintf.dart';

  String numbers = sprintf('Your score is %2.2f points.', [score]);
  String sentence = sprintf('Hello %s, You have %d years old.', [name, years]);
```
