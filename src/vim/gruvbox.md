
- change color of `dar1`
```diff
\$ diff lua/gruvebox/color.lua

 dark0_soft = hsl("#32302f"),
-dark1 = hsl("#3c3836"),
+dark1 = hsl("#272727"),
 dark2 = hsl("#504945"),
```

- change curlsorline cursor   
```diff
\$ diff lua/gruvebox/base.lua

 LineNr {fg = bg4, bg = number_column},
-CursorLineNr {fg = yellow, bg = bg1},
+CursorLineNr {fg = bg4, bg = number_column}
```
