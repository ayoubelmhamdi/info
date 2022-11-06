# Install latex on voidlinux
-----------------------------

should use `^texlive-20210325_4' is you want to use binary
```bash
xbps-install -Sy texlive-20210325_4
```

### Bash Var
```bash
export TEXMFHOME=~/.texmf
export PERL5LIB="/usr/share/texmf-dist/tlpkg:$HOME/tlpkg:$HOME/.cpan/build:$PERL5LIB"
```

### Stow
`latex` in dotfile continent `TLConfig.pm ...`
```bash
stow latex
```

### link
this version not continent `tlpkg/installer/tlconfig.guess`
```bash
sudo chown ${USER}:users /
ln -sf /usr/share/texmf-dist/tlpkg /tlpkg
```
