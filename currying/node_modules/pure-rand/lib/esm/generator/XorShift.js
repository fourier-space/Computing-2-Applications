var XorShift128Plus = (function () {
    function XorShift128Plus(s01, s00, s11, s10) {
        this.s01 = s01;
        this.s00 = s00;
        this.s11 = s11;
        this.s10 = s10;
    }
    XorShift128Plus.prototype.min = function () {
        return -0x80000000;
    };
    XorShift128Plus.prototype.max = function () {
        return 0x7fffffff;
    };
    XorShift128Plus.prototype.next = function () {
        var a0 = this.s00 ^ (this.s00 << 23);
        var a1 = this.s01 ^ ((this.s01 << 23) | (this.s00 >>> 9));
        var b0 = a0 ^ this.s10 ^ ((a0 >>> 18) | (a1 << 14)) ^ ((this.s10 >>> 5) | (this.s11 << 27));
        var b1 = a1 ^ this.s11 ^ (a1 >>> 18) ^ (this.s11 >>> 5);
        return [(this.s00 + this.s10) | 0, new XorShift128Plus(this.s11, this.s10, b1, b0)];
    };
    XorShift128Plus.prototype.jump = function () {
        var rngRunner = this;
        var ns01 = 0;
        var ns00 = 0;
        var ns11 = 0;
        var ns10 = 0;
        var jump = [0x635d2dff, 0x8a5cd789, 0x5c472f96, 0x121fd215];
        for (var i = 0; i !== 4; ++i) {
            for (var mask = 1; mask; mask <<= 1) {
                if (jump[i] & mask) {
                    ns01 ^= rngRunner.s01;
                    ns00 ^= rngRunner.s00;
                    ns11 ^= rngRunner.s11;
                    ns10 ^= rngRunner.s10;
                }
                rngRunner = rngRunner.next()[1];
            }
        }
        return new XorShift128Plus(ns01, ns00, ns11, ns10);
    };
    return XorShift128Plus;
}());
export var xorshift128plus = function (seed) {
    return new XorShift128Plus(-1, ~seed, seed | 0, 0);
};
