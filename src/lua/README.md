# Error

### function
When I use `local M={}`, in some file, i can call any `M.function` or global function, but i can't called some `private` functions from `M.function`, because `M.function` is called externally.
- solution: any private functions, you can't called without make it public, you should, move it to the top (top of this function that will be called the private function`
