# fix 
make all command `\bo` declared after using

# position of text
```
A---------B
1    2    3
```
for write text below A,
```
  \draw (A) node[below]{1} -- (B) ;
```
for write text below Midle of (A,B),
```
  \draw (A)                -- node[below]{2} (B) ;
```
for write text below B,
```
  \draw (A)                --                (B) node[below]{3};
```

# variable
```
\pgfmathsetmacro{\angle}{60}
```
# fuction like cos and sin
```
4*cos{\angle}, % not cos() with parentecise
```

# loop
```
foreach \x in {0,...,5} {
  \draw (A) -- (0,\x)
};
```
