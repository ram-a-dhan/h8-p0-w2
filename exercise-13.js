function xo(str) {
    console.log('the string in question: ' + str);
    var x = 0, o = 0, i = 0;
    while (i < str.length) {
        switch (str[i]) {
            case 'x':
                x++;
                break;
            case 'o':
                o++;
                break;
            default:
                break;
        }
        i++;
    }
    console.log('number of x\'s: ' + x);
    console.log('number of o\'s: ' + o);
    console.log('are they equal in number?');
    return x === o ? true : false;
}

var xoo = 'xooxooxo';
console.log(xo(xoo));

var lope = 'love you xoxoxoxxoxoxooxxoxooxxoxooxoxooxxoxxxo';
console.log(xo(lope));
