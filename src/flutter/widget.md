# alignment: left/start/right ..
```dart
child: Column(...,crossAxisAlignment: CrossAxisAlignment.start)
```

# image
```yaml
flutter:
  assets:
    - assets/images/
```
```dart
child: Image(
  height: 100,
  image: AssetImage('assets/images/img1.png'),
),
```

# Text

```dart
// const int grey50 = 0xFFFAFAFA;
const Text(
  'Name',
  style: TextStyle(
    fontSize: 14,
    color: Color(grey400),
  ),
),
```
# Separateur Divider

```dart
const SizedBox(height: 20),
```
# Column

-  column inside scafold
```flutter
return Scaffold(
  appBar: AppBar(
    title: const Text('Material App Bar'),
  ),
  body: Column(
    children: <Widget>[
      const Center(
        child: Image(),
        ),
    ],
  ),
);
```
- scafold->padding...->column
```flutter
return Scaffold(
  body: Padding(
    child: Column(
      children: <Widget>[
        const Center(
          child: Image(),
        ),
      ],
    ),
  ),
);
```

# Icon
```dart
children: [Icon(Icons.tv)],
```
```dart
children: [
ElevatedButton.icon(
    onPressed: (){},
    icon: const Icon(Icons.delete),
    label: const Text('delete quote'),
)
],
```

# button
```dart
```
