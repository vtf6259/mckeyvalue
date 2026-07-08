
/**
* Use this file to define custom functions and blocks.
* Read more at https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace mcKeyValue {
    class kvpElement {
        key: any
        value: any
    }
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * Get a value from a kvp
     * @param kvp Your kvp variable
     * @param value You kvp value
     */
    //% block
    export function getFromKvp(kvp: kvpElement[], value: any): any {
        let ret: any = null
        for(let i = 0; i < kvp.length; i++) {
            if(kvp[i].key == value) {
                ret = kvp[i].value
                break
            }
        }
        if(ret == null) return "404notfound"
        return ret
    }
    /**
     * Add a value to a kvp
     * @param kvp Your kvp variable
     * @param key Your kvp key
     * @param Your kvp value
     */
    //% block
    export function addToKvp(kvp: kvpElement[], key: any, value: any): kvpElement[] {
        let ret: kvpElement[] = kvp
        let element: kvpElement = new kvpElement()
        element.key = key
        element.value = value
        ret.push(element)
        return ret
    }
    /**
     * Create a new arrsy typed to kvpElement[]
     */
    //% block
    export function newKvp(): kvpElement[] {
        return []
    }
}
