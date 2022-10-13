# Some color for bash
```bash
# Color
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

function red {
    printf "\${RED}\$@\${NC}\n"
}

function green {
    printf "\${GREEN}\$@\${NC}\n"
}

function yellow {
    printf "\${YELLOW}\$@\${NC}\n"
}
```
