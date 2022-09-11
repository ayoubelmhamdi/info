# make c file
```vim
:set makeprg=gcc\ -Wall\ -g\ %\ -o\ %<
:nnoremap ll :silent make<cr>:vs<cr>:term ./tp<cr>
```
