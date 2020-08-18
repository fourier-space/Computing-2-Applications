var XoroShiro128Plus = (function () {
    function XoroShiro128Plus(s01, s00, s11, s10) {
        this.s01 = s01;
        this.s00 = s00;
        this.s11 = s11;
        this.s10 = s10;
    }
    XoroShiro128Plus.prototype.min = function () {
        return -0x80000000;
    };
    XoroShiro128Plus.prototype.max = function () {
        return 0x7fffffff;
    };
    XoroShiro128Plus.prototype.next = function () {
        var a0 = this.s10 ^ this.s00;
        var a1 = this.s11 ^ this.s01;
        var ns00 = (this.s00 << 24) ^ (this.s01 >>> 8) ^ a0 ^ (a0 << 16);
        var ns01 = (this.s01 << 24) ^ (this.s00 >>> 8) ^ a1 ^ ((a1 << 16) | (a0 >>> 16));
        var ns10 = (a1 << 5) ^ (a0 >>> 27);
        var ns11 = (a0 << 5) ^ (a1 >>> 27);
        return [(this.s00 + this.s10) | 0, new XoroShiro128Plus(ns01, ns00, ns11, ns10)];
    };
    XoroShiro128Plus.prototype.jump = function () {
        var rngRunner = this;
        var ns01 = 0;
        var ns00 = 0;
        var ns11 = 0;
        var ns10 = 0;
        var jump = [0xd8f554a5, 0xdf900294, 0x4b3201fc, 0x170865df];
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
        return new XoroShiro128Plus(ns01, ns00, ns11, ns10);
    };
    return XoroShiro128Plus;
}());
export var xoroshiro128plus = function (seed) {
    return new XoroShiro128Plus(-1, ~seed, seed | 0, 0);
};
