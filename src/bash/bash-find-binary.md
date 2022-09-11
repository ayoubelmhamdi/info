# find files that's binaty
```bash
find . -type f ! -size 0 -exec grep -IL . "{}" \;
```
