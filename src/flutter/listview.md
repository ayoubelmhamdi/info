# map listview
main:
```dart
class MyApp....{}
class _MyAppState extends State<MyApp> {
  late final Quote quote;
  List<Quote> quotes = [
    Quote(text: 'fsm mks', author: 'ayoub'),
    Quote(text: 'fsm rabat', author: 'aly'),
    Quote(text: 'fsm mauritanya', author: 'rachid'),
  ];
  @override
  Widget build(BuildContext context) {
    return Column(
      children: quotes.map((quote) => Text('\${quote.text}- \${quote.author}')).toList(),
    );
```

to

- main:
```dart
class MyApp....{}
class _MyAppState extends State<MyApp> {
  late final Quote quote;
  List<Quote> quotes = [
    Quote(text: 'fsf mks', author: 'ayoub'),
    Quote(text: 'fsm rabat', author: 'aly'),
    Quote(text: 'fsm mauritanya', author: 'rachid'),
  ];
  @override
  Widget build(BuildContext context) {
    return Column( 
        children: quotes .map((quote) => Mycard(quote:quote)) .toList(),
    );
```
- class:
```dart
//import...

class Mycard extends StatelessWidget {
    final Quote quote;
    const Mycard({Key? key, required this.quote}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      child: Card(child: Text('\${quote.text} -- \${quote.author}')),
    );
  }
}
```
