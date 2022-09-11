# fix tlmgr usermode+ pacage is 2020 but install 2021

# find a userpackage
```bash
$ tlmgr search --global --file beamerthemeShadow
```

# create manually pkg in /texmf-dist/tex/latex
```bash
$ mkdir /texmf-dist/tex/latex/pkg1
$ texhash /texmf-dist
```

# update 4:
    - tlmgr repo is old: i can go back to the old reposotory by change the`tlmgr reposotory`
    ```bash
    $ tlmgr option repository https://ftp.tu-chemnitz.de/pub/tug/historic/systems/texlive/2021/tlnet-fina
    ```

# update 3:
  - latex as bin
    ```
    $ xbps-install -Sy i texlive-20210325_2
    ```
  - latex mk
    - already include
  - tlmgr already include
    ```
    $ ln -s $HOME/scripts/latex/tlmgr /sbin
    ```

  - TeXLive/TLPDB.pm
    - already include dans `texlive-core-2021.58710_1`
    ```
    $ wget https://raw.githubusercontent.com/TeX-Live/installer/master/tlpkg/TeXLive/TLUtils.pm^C

    ```
  - latexpkg: auto install missing pkg
    ```
    $ ln -s $HOME/scripts/latex/latexpkg /sbin
    ```
  - verification de reposotory: not sure
    ```
    $ # tlmgr init-usertree
    ```
  - define tlpkg
  ```
  $ ln -s /usr/share/texmf-dist/tlpkg /
  ```
  - luatex & bibtex
  ```
  $ xbps-install -Sy texlive-LuaTeX texlive-BibTeX
  ```

# UPDATE 2:
  - init tlmgr
  ```
  $ tlmgr init-usertree
  ```
  - active usermode for root in voidlinux
    - by alias:
    ```
    $ alias tlmgr='/usr/share/texmf-dist/scripts/texlive/tlmgr.pl --usermode'
    ```
    - or sumlink
    ```
    $ cat /sbin/tmlgr
  
  
    #!/bin/sh
    exec /usr/share/texmf-dist/scripts/texlive/tlmgr.pl --usermode "$@"
    ```
  - geus

# UPDATE:
  ## xbps binary
  ```bash
  $ xbps-install -Sy texlive-20210325_2
  ```
  ## localte module
  if tmlgr can't locate TeXlive::.... 
    - link path that reaserch by tlmgr 
      ln -s /usr/share/texmf-dist /texmf-dist
    - download module manuly to /texmf-dist/scripts/texlive/TeXLive/...
    - use alias tl='$(which tlmgr) --usermode'


# OLD:

```bash
$ xbps-install -Sy texlive2021-bin-2021_1
```

## fix version 2021
 ```
$ vim `which tlmgr` or 
$ vim TEXMFDIST/scripts/texlive/tlmgr.pl

 and replace $Master = "$Master/../.."; with $Master = "${Master}/../../..";
 ```
  - download la `latexmk` and make symbloic link
```bash
$ ln -s /opt/texlive2021-installer/texmf-dist/scripts/latexmk/latexmk.pl /usr/bin/latexmk 
```
  - alias use script to create `tlmgr`
  ```
  alias tlmgr="/opt/texlive2021-installer/texmf-dist/scripts/texlive/tlmgr.pl --usermode"
  ````
