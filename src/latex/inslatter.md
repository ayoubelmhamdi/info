## TeX Live 2025 on Void Linux

### 1. Install via xbps
we need to install the latest that include bins and latex pkg manager called `tlmgr`:
`texlive-20250308_2` depend on `texlive-core`, so we do not need to install `texlive2025-bin-2025_2`


Verify key paths are present:

```bash
$ xlocate tlmgr | grep 'scripts/texlive/tlmgr.pl'
texlive-core-20250308_2    /usr/share/texmf-dist/scripts/texlive/tlmgr.pl
texlive2025-bin-2025_2     /opt/texlive2025-installer/texmf-dist/scripts/texlive/tlmgr.pl
$ xlocate pdftex | grep bin
texlive-20250308_2         /usr/bin/amstex -> /usr/bin/pdftex
```

### 2. Fix Perl module version mismatch
avoid using an old latex perl modules:

**Root cause:** `tlmgr.pl` from xbps may newer than the TeXLive Perl modules in `~/tlpkg/TeXLive/`, causing errors like: `Global symbol "$TeXLiveServerURLRegexp" requires explicit package name`

Download the matching upstream modules:

```bash
BASE="https://tug.ctan.org/systems/texlive/tlnet/tlpkg/TeXLive"

for mod in TLConfig TLUtils TLCrypto TLPDB TLPOBJ TLPSRC \
           TLPaper TLConfFile TLDownload TLWinGoo TLTREE \
           TeXCatalogue; do
  curl -sL "$BASE/$mod.pm" -o ~/tlpkg/TeXLive/$mod.pm
done

curl -sL "$BASE/trans.pl" -o ~/tlpkg/TeXLive/trans.pl
```

### 3. Fix broken directory layout (Void-specific)

Void places `tlpkg/` under `/usr/share/` instead of the standard `/usr/share/texmf-dist/`. Create the symlinks and directories tlmgr expects:

`tlmgr` resolves `../../tlpkg` relative to the script location backup directory required by tlmgr:
`config.guess` is required for architecture detection

```bash
sudo ln -s /usr/share/tlpkg /usr/share/texmf-dist/tlpkg

sudo mkdir -p /usr/share/tlpkg/installer
sudo ln -s /usr/share/automake-1.16/config.guess /usr/share/tlpkg/installer/config.guess
```

### 4. Set up user-mode tlmgr (no root needed)
to be able to make user insatall latex pkg we should to initialise the user tree at ~/texmf.
then Point to the frozen 2025 repository (avoids version mismatch with xbps)


```bash
/usr/share/texmf-dist/scripts/texlive/tlmgr.pl init-usertree
mkdir /home/mhamdi/.texmf/tlpkg/backups
/usr/share/texmf-dist/scripts/texlive/tlmgr.pl --usermode option repository https://ftp.math.utah.edu/pub/tex/historic/systems/texlive/2025/tlnet-final/
```

### 5. Usage

check if tlmgr is work and apt to update pkgs:
```bash
/usr/share/texmf-dist/scripts/texlive/tlmgr.pl --usermode update --all
```

