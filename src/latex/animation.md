# successive
```latex
\newcommand{\myitem}{\item[$\blacksquare$]}

\begin{frame}{Historique}
    \begin{itemize}[<+-|alert@+>]
        \myitem 1950
        \myitem 1970
    \end{itemize}

    \only<1>{
    \begin{exampleblock}{XXXX}
        ...
    \end{exampleblock}
    }

    \only<2>{
    \begin{exampleblock} {YYY}
        ..
    \end{exampleblock}
    }

    \vspace{80mm}
\end{frame}
```
