import rxjs1 from "../src/rxjs1";
import rxjs2 from "../src/rxjs2";
import sub5 from "../src/sub5";
import sub1 from "../src/sub1";
import sub2 from "../src/sub2";
import op1 from "../src/op1";
import op2 from "../src/op2";
import op3 from "../src/op3";
import op4 from "../src/op4";
import obs1 from "../src/obs1";
import sub3 from "../src/sub3";
import sub4 from "../src/sub4";
import high1 from "../src/high1";
import high2 from "../src/high2";
import ject1 from "../src/ject1";
import ject2 from "../src/ject2";
import ject3 from "../src/ject3";
import ject4 from "../src/ject4";

describe('Example', () => {

    describe('rxjs', () => {
        describe('1', () => {
            it('should not crash', () => {
                rxjs1();
            });
        });

        describe('2', () => {
            it('should not crash', () => {
                rxjs2();
            });
        });
    });

    describe('obs', () => {
        describe('1', () => {
            it('should not crash', () => {
                obs1();
            });
        });
    });

    describe('sub', () => {
        describe('1', () => {
            it('should not crash', () => {
                sub1();
            });
        });

        describe('2', () => {
            it('should not crash', () => {
                sub2();
            });
        });

        describe('3', () => {
            it('should not crash', () => {
                sub3();
            });
        });

        describe('4', () => {
            it('should not crash', () => {
                sub4();
            });
        });

        describe('5', () => {
            it('should not crash', () => {
                sub5();
            });
        });
    });

    describe('op', () => {
        describe('1', () => {
            it('should not crash', () => {
                op1();
            });
        });

        describe('2', () => {
            it('should not crash', () => {
                op2();
            });
        });

        describe('3', () => {
            it('should not crash', () => {
                op3();
            });
        });

        describe('4', () => {
            it('should not crash', () => {
                op4();
            });
        });
    });

    describe('high', () => {
        describe('1', () => {
            it('should not crash', () => {
                high1();
            });
        });

        describe('2', () => {
            it('should not crash', () => {
                high2();
            });
        });
    });

    describe('ject', () => {
        describe('1', () => {
            it('should not crash', () => {
                ject1();
            });
        });

        describe('2', () => {
            it('should not crash', () => {
                ject2();
            });
        });

        describe('3', () => {
            it('should not crash', () => {
                ject3();
            });
        });

        describe('4', () => {
            it('should not crash', () => {
                ject4();
            });
        });
    });

});
