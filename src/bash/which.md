- [stack](https://unix.stackexchange.com/a/517357)

The answer about `${+name}` variable expansion basically solves the problem. 

I just wanna add some info about the speed comparison to complete the topic. The reason why `(($+commands[tree]))` style command is used is that, searching commands in an array is faster than `command -v tree`, `which -a tree`.

```bash
❯ export TIMEFMT=$'%U user %S system %P cpu %*E total'

❯ time (for i ({1..100}) if (($+commands[tree])); then echo 1 &>/dev/null; fi)
0.00s user 0.00s system 89% cpu 0.006 total

❯ time (for i ({1..100}) if command -v tree &>/dev/null; then echo 1 &>/dev/null; fi)
0.00s user 0.00s system 95% cpu 0.010 total

❯ time (for i ({1..100}) if which -a tree &>/dev/null; then echo 1 &>/dev/null; fi)
0.01s user 0.01s system 97% cpu 0.021 total
```

