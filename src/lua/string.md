# string.format
```lua
string.format("%s %q", "Hello", "Lua user!")   -- string and quoted string
```
```
Hello "Lua user!"
```
```lua
string.sub("taaaaaaest.lua",1,-5)
```
```
taaaaaaest
```

# gmatch
```lua
for word in string.gmatch("Hello Lua user", "%a+") do
    print(word)
end
```
```
Hello
Lua
user
```
- match pattern in lua
```
%d matches a digit
%u matches an uppercase letter
%a: letter %s: whitespace
```
```lua
string.match("%*^", '%%%*%^')
```
```
%*^
```
