import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { getFormattedString } from '..'

describe("getCurrentDay", () => {
    beforeEach(() => {
        const fakeDate = new Date("2025-02-22")
        vi.useFakeTimers({ now: fakeDate.getTime() })
    })
    afterEach(() => {
        vi.useRealTimers()
    })

    test("should return valid date with 21 day", () => {


        expect(getFormattedString([
            { author: 'Alice', content: '12123' },
            { author: 'Bob', content: '' },
            { author: '', content: '??' },
            { author: 'Nick', content: 'Have done something' },
        ])).toBe('#daily 22.02.2025\n- Alice - 12123;\n- Nick - Have done something.')
    })


})

