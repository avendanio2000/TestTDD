(function (window) {
    function add(stringNumbers) {
        if (stringNumbers == '')
            return 0;
        else
            return -1;
    };

    function long(stringP) {
        return stringP.length;
    };

    function sum(n1, n2) {
        return n1 + n2;
    };

    window.add = add;
    window.long = long;
    window.sum = sum;
})(window);