// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Table of content</li><li class="chapter-item expanded "><a href="matlab/index.html"><strong aria-hidden="true">1.</strong> Matlab</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="matlab/basic.html"><strong aria-hidden="true">1.1.</strong> Basic</a></li><li class="chapter-item expanded "><a href="matlab/loop.html"><strong aria-hidden="true">1.2.</strong> Loop</a></li><li class="chapter-item expanded "><a href="matlab/gui.html"><strong aria-hidden="true">1.3.</strong> Gui</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="bash/index.html"><strong aria-hidden="true">2.</strong> Bash</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bash/array.html"><strong aria-hidden="true">2.1.</strong> Array</a></li><li class="chapter-item expanded "><a href="bash/array-from-file.html"><strong aria-hidden="true">2.2.</strong> Array from file</a></li><li class="chapter-item expanded "><a href="bash/bash-args.html"><strong aria-hidden="true">2.3.</strong> Args</a></li><li class="chapter-item expanded "><a href="bash/bash-find-binary.html"><strong aria-hidden="true">2.4.</strong> Find binary</a></li><li class="chapter-item expanded "><a href="bash/color.html"><strong aria-hidden="true">2.5.</strong> Color</a></li><li class="chapter-item expanded "><a href="bash/file.html"><strong aria-hidden="true">2.6.</strong> read file</a></li><li class="chapter-item expanded "><a href="bash/shellspell.html"><strong aria-hidden="true">2.7.</strong> Shellspell</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="c/index.html"><strong aria-hidden="true">3.</strong> C</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="c/concate_tree_string.html"><strong aria-hidden="true">3.1.</strong> concate tree string</a></li><li class="chapter-item expanded "><a href="c/criterion.html"><strong aria-hidden="true">3.2.</strong> criterion</a></li><li class="chapter-item expanded "><a href="c/file.html"><strong aria-hidden="true">3.3.</strong> file</a></li><li class="chapter-item expanded "><a href="c/flags.html"><strong aria-hidden="true">3.4.</strong> flags</a></li><li class="chapter-item expanded "><a href="c/gdb.html"><strong aria-hidden="true">3.5.</strong> gdb</a></li><li class="chapter-item expanded "><a href="c/make.html"><strong aria-hidden="true">3.6.</strong> make</a></li><li class="chapter-item expanded "><a href="c/mylib.html"><strong aria-hidden="true">3.7.</strong> mylib</a></li><li class="chapter-item expanded "><a href="c/ctags.html"><strong aria-hidden="true">3.8.</strong> ctags</a></li><li class="chapter-item expanded "><a href="c/compile_commands.json.html"><strong aria-hidden="true">3.9.</strong> compile_commands.json</a></li><li class="chapter-item expanded "><a href="c/pointer.html"><strong aria-hidden="true">3.10.</strong> pointer</a></li><li class="chapter-item expanded "><a href="c/share_lib.html"><strong aria-hidden="true">3.11.</strong> share lib</a></li><li class="chapter-item expanded "><a href="c/sleep.html"><strong aria-hidden="true">3.12.</strong> sleep</a></li><li class="chapter-item expanded "><a href="c/string.html"><strong aria-hidden="true">3.13.</strong> string</a></li><li class="chapter-item expanded "><a href="c/str_to_int.html"><strong aria-hidden="true">3.14.</strong> str_to_int</a></li><li class="chapter-item expanded "><a href="c/struct.html"><strong aria-hidden="true">3.15.</strong> struct</a></li><li class="chapter-item expanded "><a href="c/time.html"><strong aria-hidden="true">3.16.</strong> time</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="rust/index.html"><strong aria-hidden="true">4.</strong> Rust</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rust/c-like.html"><strong aria-hidden="true">4.1.</strong> C like</a></li><li class="chapter-item expanded "><a href="rust/rust-error.html"><strong aria-hidden="true">4.2.</strong> Error</a></li><li class="chapter-item expanded "><a href="rust/struct.html"><strong aria-hidden="true">4.3.</strong> Struct</a></li><li class="chapter-item expanded "><a href="rust/match.html"><strong aria-hidden="true">4.4.</strong> match</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="dart/index.html"><strong aria-hidden="true">5.</strong> Dart</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="dart/basic.html"><strong aria-hidden="true">5.1.</strong> basic</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="flutter/index.html"><strong aria-hidden="true">6.</strong> Flutter</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="flutter/assets-in-yaml.html"><strong aria-hidden="true">6.1.</strong> assets in yaml</a></li><li class="chapter-item expanded "><a href="flutter/hot-reload.html"><strong aria-hidden="true">6.2.</strong> Hot reload</a></li><li class="chapter-item expanded "><a href="flutter/flutter-fix.html"><strong aria-hidden="true">6.3.</strong> Flutter fix</a></li><li class="chapter-item expanded "><a href="flutter/listview.html"><strong aria-hidden="true">6.4.</strong> listview</a></li><li class="chapter-item expanded "><a href="flutter/model.html"><strong aria-hidden="true">6.5.</strong> model</a></li><li class="chapter-item expanded "><a href="flutter/route.html"><strong aria-hidden="true">6.6.</strong> route</a></li><li class="chapter-item expanded "><a href="flutter/widget.html"><strong aria-hidden="true">6.7.</strong> widget</a></li><li class="chapter-item expanded "><a href="flutter/install-in-linux.html"><strong aria-hidden="true">6.8.</strong> Install in linux</a></li><li class="chapter-item expanded "><a href="flutter/string-format.html"><strong aria-hidden="true">6.9.</strong> Format String</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="lua/index.html"><strong aria-hidden="true">7.</strong> lua</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lua/string.html"><strong aria-hidden="true">7.1.</strong> string</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="js/index.html"><strong aria-hidden="true">8.</strong> JavaScipt</a></li><li class="chapter-item expanded affix "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="latex/index.html"><strong aria-hidden="true">9.</strong> Latex</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="latex/animation.html"><strong aria-hidden="true">9.1.</strong> animation</a></li><li class="chapter-item expanded "><a href="latex/convert.html"><strong aria-hidden="true">9.2.</strong> convert</a></li><li class="chapter-item expanded "><a href="latex/fix.html"><strong aria-hidden="true">9.3.</strong> fix</a></li><li class="chapter-item expanded "><a href="latex/inslatter.html"><strong aria-hidden="true">9.4.</strong> inslatter</a></li><li class="chapter-item expanded "><a href="latex/latexindent.html"><strong aria-hidden="true">9.5.</strong> latexindent</a></li><li class="chapter-item expanded "><a href="latex/remove-cpan.html"><strong aria-hidden="true">9.6.</strong> remove cpan</a></li><li class="chapter-item expanded "><a href="latex/symbol-insertion.html"><strong aria-hidden="true">9.7.</strong> symbol insertion</a></li><li class="chapter-item expanded "><a href="latex/tikz.html"><strong aria-hidden="true">9.8.</strong> tikz</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="vim/index.html"><strong aria-hidden="true">10.</strong> vim</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="vim/buffer.html"><strong aria-hidden="true">10.1.</strong> buffer</a></li><li class="chapter-item expanded "><a href="vim/change-nvim-dir.html"><strong aria-hidden="true">10.2.</strong> change-nvim-dir</a></li><li class="chapter-item expanded "><a href="vim/fr.html"><strong aria-hidden="true">10.3.</strong> fr</a></li><li class="chapter-item expanded "><a href="vim/gruvbox.html"><strong aria-hidden="true">10.4.</strong> gruvbox</a></li><li class="chapter-item expanded "><a href="vim/lsp.html"><strong aria-hidden="true">10.5.</strong> lsp</a></li><li class="chapter-item expanded "><a href="vim/luarcok-packer.html"><strong aria-hidden="true">10.6.</strong> luarcok-packer</a></li><li class="chapter-item expanded "><a href="vim/make.html"><strong aria-hidden="true">10.7.</strong> make</a></li><li class="chapter-item expanded "><a href="vim/map.html"><strong aria-hidden="true">10.8.</strong> map</a></li><li class="chapter-item expanded "><a href="vim/spell.html"><strong aria-hidden="true">10.9.</strong> spell</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="nasm/index.html"><strong aria-hidden="true">11.</strong> Nasm</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
