import { afterEach, describe, expect, test, vi } from 'vitest'
import { getCurrentDay } from '../'

describe("getCurrentDay", () => {
    afterEach(() => {
        vi.useRealTimers()
    })

    test("should return valid date with 21 day", () => {
        const fakeDate = new Date("2025-02-21")
        vi.useFakeTimers({ now: fakeDate.getTime() })
        
        expect(getCurrentDay()).toBe('21.02.2025')
    })

    test("should return valid date with 1 day", () => {
        const fakeDate = new Date("2025-02-01")
        vi.useFakeTimers({ now: fakeDate.getTime() })

        expect(getCurrentDay()).toBe('01.02.2025')
    })
})

