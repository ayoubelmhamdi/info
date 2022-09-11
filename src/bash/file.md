# read file by while
```bash
while IFS= read -r line; do
    echo "Text read from file: $line"
done < my_filename.txt
```
