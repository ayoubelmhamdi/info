# Bash

# random by max number of case
```bash
echo \${RANDOM:0:3}
```

# substitution
- remove dirname
```bash
f="./4-Attya-anatomie/expose.pdf"
echo \${f##*/}
```
```
expose.pdf
```
- remove file from dirname
```bash
f=/dir1/dir2/file.txt
dirname \$f
```
```
/dir1/dir2
```

- remove extension
```bash
file=ra.pdf
echo "\${file:0:-4}"
```
```
ra
```

```bash
f="/etc/resolv.conf"
echo "\${f#/etc/}"

resolv.conf
```

- not determiner fisrt match
```bash
f="/etc/resolv.conf"
echo "\${f#*/}"

resolv.conf
```

# interpreted var : eval it
```bash
hello=2020
var="hello"
echo \${!var}
# 2020
```
# format string like a table
- select words
- add spaces
- trim spaces: by accept only `14` char
```bash
sed 's/\(\(\w\|+\| \)\{14\}\) */\1'
```
