# loop in array

```bash
declare -a arr=(
      "already"
      "amssymb"
      "array"
)

for item in "\${arr[@]}";do
  #...
done
```

# pass array to function
```bash
f() {
    declare -a argAry1=("\${!1}")
    echo "\${argAry1[@]}"
}

arr1=(
    "a"
    "b"
)
f arr1[@] arg2 arg3
```
