// Short Circuit

let a = 5

// q 01
// let exp1 = ((4 + 5) && 'abc' || false + 'test') * (a-- || --a) || (false && (++a + 1)) * 'end';
//         (9 && "abc" || false + "test") --> "abc" || "falsetest" --> "falsetest" * (5 || 3) 
//          "falsetest" * 5 --> NaN    Result = NaN
// console.log(exp1);


// q 02
// let exp2 = 10 * ("foo" && 5 + (++a) || 'bar') && (false + "test") || 0 && true;
//              ("foo" && 5 + (++a) || "bar")  --> ("foo" && 11)  --> 11  ( 11 || "bar") -->  11 
//         10 * 11 --> 110 && (false + "test")  --> ("false + test")  
//              110 && "falsetest" || 0  --> falsetest        Result = "falsetest"             
// console.log(exp2);


// q 03
// let exp3 = 3 + (a-- || 'start') * 4 && (--a + "value") * (1 + 2) + 'result';
//             (a--  || "start")  --> 5 --> 5*4 -- 20 --> 3 + 20 --> 23
//                  23 && (--a + "value") --> 3value + 3 + "result";
//             Result = NaNResult
// console.log(exp3);


// q 04
// let exp4 ="hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
//                  (6  + 1) --> 7   --> "hello" * 7  --> NaN
//                   NaN  ||  (6  * "abc")  --> NaN * 1 --> NaN + "xyz" --> NaNxyz  && 0
// console.log(exp4);


// q 05
// let exp5 = (true || (0 + 1) *'test' && 4) || (false && 3 + 'value') * a-- + 2;
//         (1  || NaN  && 4) --> true  || (0 && 3 + "value") --> 0 * 5 + 2 -- 2
//         (true || NaN)  || (false && 3value) --> false
//         (true || NaN)  || (false * a-- + 2) 
//         Result = true
// console.log(exp5);

// q 06
// let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
//          6  + "abc" &&   8  +  3   ||   1   &&  NaN || 6           
//              6abc   &&  11  --> 11   || 1  && NaN --> NaN  6
//              11        ||      NaN     ||   6
// console.log(exp6);


//q 07
// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "resuit";
//         foo5   *   7    ||   9     ||      result
//              NaN        ||   9     ||      result

// console.log(exp7);


// q 08
// let exp8 = (0 + 1) && (true + 1) || (false + "test") * 4 && 3 + 2 || "value";
//            1   &&      1      ||      falssetest  * 4 &&  5   || value
//                   true        ||           NaN       &&   5   || value
// console.log(exp8);


// q 09
// let exp9 = 3 * 'abc' + (true + 1) || (++a + "test") && (3 + "result") || null;
//            NaN      +       2  ||  6test        ||   3result   || null
//                     NaN        ||  6test  &&  3result          ||   null
// console.log(exp9);


// q 10
// let exp10 = (++a + false) && 'start' || 0 + 1 && 'value' || 5 * 'end' && a++;
//            6     &&   start  || 1    &&   value  ||  NaN   && 6
// console.log(exp10);


// q 11
// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
//             0   && "hello"  +  20  || "3test"     
// console.log(exp11);


// q 12
// let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
//                 "hello3"          ||     3   &&  "result"
// console.log(exp12);


// q 13
// let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
//              27  ||  0   &&  "falsetest"
// console.log(exp13);


// q 14
// let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
//              Nan   ||  Nan  ||  "end"
// console.log(exp14);


// q 15
// let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
//              Nan   + "Nanresult"
// console.log(exp15);


// q 16
// let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
//             Nan    ||   false  ||   "start22" && "null"
// console.log(exp16);


// q 17
// let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
//            Nan  && 15  || "0value" && 4      
// console.log(exp17);


// q 18
// let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
//               "Start"    &&      Nan     || "21result" && 0
// console.log(exp18);


// q 19
// let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
//              6   &&  "foo"  ||  Nan 
// console.log(exp19);


// q 20
// let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
//            "6hello" &&  Nan   ||  "end5" || 0
// console.log(exp20);


// q 21
// let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// console.log(exp21);


// q 22
// let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// console.log(exp22);


// q 23
// let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// console.log(exp23);


// q 24
// let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// console.log(exp24);


// q 25
// let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
// console.log(exp25);


// q 26
// let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
// console.log(exp26);


// q 27
// let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// console.log(exp27);


// q 28
// let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// console.log(exp28);


// q 29
// let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// console.log(exp29);


// q 30
// let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// console.log(exp30);


// q 31
// let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// console.log(exp31);


// q 32
// let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// console.log(exp32);


// q 33
// let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// console.log(exp33);


// q 34
// let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// console.log(exp34);


// q 35
// let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// console.log(exp35);


// q 36
// let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// console.log(exp36);


// q 37
// let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// console.log(exp37);


// q 38
// let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// console.log(exp38);


// q 39
// let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// console.log(exp39);


// q 40
// let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// console.log(exp40);


// q 41
// let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// console.log(exp41);


// q 42
// let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// console.log(exp42);


// q 43
// let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// console.log(exp43);


// q 44
// let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// console.log(exp44);


// q 45
// let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// console.log(exp45);


// q 46
// let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// console.log(exp46);


// q 47
// let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
// console.log(exp47);


// q 48
// let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// console.log(exp48);


// q 49
// let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// console.log(exp49);


// q 50
// let exp50 = 32 && true - ++a && "" || true; 
// console.log(exp50);


// q 51
// let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// console.log(exp51);

// q 52
// let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// console.log(exp52);


// q 53
// let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// console.log(exp53);


// q 54
// let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// console.log(exp54);


// q 55
// let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// console.log(exp55);


// q 56
// let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// console.log(exp56);

// q 57
// let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
// console.log(exp57);


// q 58
// let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
// console.log(exp58);

// q 59
// let exp59 = 5 * (a-- + 3) + "test" || (false && "start") + 2;
// console.log(exp59);


// q 60
// let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// console.log(exp60);


// q 61
// let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// console.log(exp61);


// q 62
// let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
// console.log(exp62);


// q 63
// let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// console.log(exp63);



// q 64
// let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
// console.log(exp64);


// q 65
// let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
// console.log(exp65);


// q 66
// let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
// console.log(exp66);


// q 67
// let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
// console.log(exp67);


// q 68
// let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
// console.log(exp68);


// q 69
// let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// console.log(exp69);


// q 70
// let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// console.log(exp70);


// q 71
// let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// console.log(exp71);


// q 72
// let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// console.log(exp72);


// q 73
// let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// console.log(exp73);


// q 74
// let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// console.log(exp74);


// q 75
// let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
// console.log(exp75);