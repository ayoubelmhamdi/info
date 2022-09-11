# fix luatex/xetex/pdftex
```tex
\documentclass[a4paper,11pt,twoside]{report} %twoside pour une présentation différente des pages paires/impaires, car dans la classe report, l'option oneside est par défaut
\usepackage{iftex}
\ifPDFTeX
  \usepackage[mathletters]{ucs}
  \usepackage[utf8x]{inputenc}
   % \usepackage[utf8]{inputenc}
   \usepackage[T1]{fontenc}
   \usepackage{lmodern}
\else
   \ifXeTeX
     % \usepackage[mathletters]{ucs}
     % \usepackage[utf8x]{inputenc}
     \usepackage{fontspec}
   \else 
     \usepackage{luatextra}
   \fi
   \defaultfontfeatures{Ligatures=TeX}
\fi
```

# zref-abspage.sty
```fish
$ set zref set zref zref-abspage.sty zref-abspos.sty zref-base.sty zref-counter.sty zref-dotfill.sty zref-env.sty zref-hyperref.sty zref-lastpage.sty zref-marks.sty zref-nextpage.sty zref-pageattr.sty zref-pagelayout.sty zref-perpage.sty zref-runs.sty zref-savepos.sty zref-thepage.sty zref-titleref.sty zref-totpages.sty zref-user.sty zref-xr.sty zref.sty
$ for file in $zref;wget 'https://raw.githubusercontent.com/manuels/texlive.js/master/texlive/texmf-dist/tex/latex/oberdiek/'$file;end
$ output to $prefix/texmf/tex/latex not $prefix/texmf-dist/tex/latex
$ ln -s /texmf-dist/tex/latex/oberdiek ~/texmf/tex/latex
```
# declare
must start with include then declar command
