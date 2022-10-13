# Basics
--------

```matlab
clc        % clear command window
clear      % clear memory
;          % no result displayed if command is terminated with semikolon
CTRL + C   % Shortcut to stop Matlab (exit infinite loop)
```


```matlab
MATRICES / VECTORS
ones(3,4)			generate 3x4 matrix filled with ones
zeros(3,4)			generate 3x4 matrix filled with zeros
eye(N)			generates a NxN identity matrix (Einheitsmartix)
m = [1,2 ; 3,4]		generates matrix m =	[1 2]
					[3 4]

m[1,2]	get value of 1st row, 2nd column of matrix m
m[2,:]			generates a vector with values of 2nd row 
v = 1:5			generate vector v = [1 2 3 4 5]

numel(x)	counts number of elements in x (works for vectors & matrix)



COMMENTS						
%			code on current line will be ignored
%%			new comment-section



CONSTANTS						
pi			Pi
exp(1)			e^1 (Eulersche Zahl)



FUNCTIONS (anonymous)					
name =@(x) x^2;		define function name=x^2 with x as input
name(2);			computes functionvalue of function name at x=2

name2 =@(a,b) a^2 + b^2;	define function f=a^2+b^2 with a and b as input
name2(2,3);		computes functionvalue of function name2 at 2



IMPLIZIT PLOTS!
ezplot('x.^3 + x.*y + y.^2 - 36',[-10 10 -10 10]);

[x,fval] = fminsearch(@(x)  x(1).^2 + x(2).^2, [2 1])

WRITE TO CONSOLE
fprintf('message with %s', 'asd');
disp('message with asd');

ERROR MESSAGE IN RED
fprintf(2,'my error(warning) message in RED!\n' );
```

### `CELLS`
```matlab
C = cell(3,1);                 % initialize cellarray (3x1)
C(1) = cellstr('test1');       % convert string to cellarray
C(3) = cellstr('test2');       % convert string to cellarray
disp(C);                       % display cellarray (1 empty value)
disp(C(~cellfun('isempty',C))  % delete empty entries

% convert cell to string
C = cell({'t1','t2',''});  % generate cell
str1 = char(C(1));         % convert 1st element of cell-array 
str2 = char(C(2));         % convert 2nd element of cell-array 
str3 = char(C(3));         % empty 1-by-0 matrix
```

