  
# How to change default nvim directory  
  ## Fist time:
  * change global var to new dirs:  
  ```
  XDG_CONFIG_HOME=~/.config  
  XDG_DATA_HOME=~/.local  
  ```
  `XDG_CONFIG_HOME` change to something like `~/test/`  
  `XDG_DATA_HOME` change to something like `~/test/local`  
  `mkdir -p ~/test/{local,nvim}` for create this tree of dirs:  
  ```
    test
    ├── local
    └── nvim
  ```
  `~/test/nvim` contian `init.vim` or `init.lua  
  `~/test/local` contian plug manager as Packer/Plug/Vundel  
  * Sync plugin for first time by run config file init.lua or init.vim  
   ```
   nvim ~/TEST-Cris/nvim/init.lua  
   ```
  ## Seconde time:  
  * run `~/file.txt` for example:  
  ## without alias
  ```
  export XDG_CONFIG_HOME=~/test ;export XDG_DATA_HOME=~/test/local; nvim ~/file.txt 
  ```
  ## with alias
  with alias is fast , you should be add to .bashrc or ... 
  * alias vi
  ```
  alias vi='export XDG_CONFIG_HOME=~/test ;export XDG_DATA_HOME=~/test/local; nvim' 
  ```
  * run `~/file.txt` for example:  
  ```
  vi ~/file.txt  
  ```
