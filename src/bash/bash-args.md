# use args
```bash
while getopts "a:b:r:c:C:T:Kk:l:i:I:s:o:p:v:h" opt; do
    case \$opt in
        a) BASE_ARCH="\$OPTARG";;
        b) BASE_SYSTEM_PKG="\$OPTARG";;
        r) XBPS_REPOSITORY="--repository=\$OPTARG \$XBPS_REPOSITORY";;
        c) XBPS_CACHEDIR="\$OPTARG";;
        K) readonly KEEP_BUILDDIR=1;;
        k) KEYMAP="\$OPTARG";;
        l) LOCALE="\$OPTARG";;
        i) INITRAMFS_COMPRESSION="\$OPTARG";;
        I) INCLUDE_DIRECTORY="\$OPTARG";;
        s) SQUASHFS_COMPRESSION="\$OPTARG";;
        o) OUTPUT_FILE="\$OPTARG";;
        p) PACKAGE_LIST="\$OPTARG";;
        C) BOOT_CMDLINE="\$OPTARG";;
        T) BOOT_TITLE="\$OPTARG";;
        v) LINUX_VERSION="\$OPTARG";;
        h) usage;;
	*) usage;;
    esac
done
```
