//// spec
//describe('toBeSafeInteger', function () {
//  describe('when invoked', function () {
//    describe('when value is a safe integer', function () {
//      it('should confirm', function () {
//        expect(Number.MAX_SAFE_INTEGER).toBeSafeInteger();
//        expect(3).toBeSafeInteger();
//        expect(3.0).toBeSafeInteger();
//        expect(Math.pow(2, 53) - 1).toBeSafeInteger();
//        expect(765434).toBeSafeInteger();
//      });
//    });
//    describe('when value is NOT a safe integer', function () {
//      it('should deny', function () {
//        expect(Number.MIN_SAFE_INTEGER).not.toBeSafeInteger();
//        expect(null).not.toBeSafeInteger();
//        expect('3').not.toBeSafeInteger();
//        expect(3.1).not.toBeSafeInteger();
//        expect(NaN).not.toBeSafeInteger();
//        expect(Infinity).not.toBeSafeInteger();
//        expect(Math.pow(2, 53)).not.toBeSafeInteger();
//      });
//    });
//  });
//});
