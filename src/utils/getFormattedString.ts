import type { Log } from "../types";
import { getCurrentDay } from "./getCurrentDay"

export const getFormattedString = (logs: Log[], parkovka: string): string => {
    const currentDayText = getCurrentDay();

    let formattedString = `#daily ${currentDayText}`
    const formattedLogs: string[] = []



    if (logs.length > 0) {
        logs.forEach((it, index) => {
            if (it.content && it.author) {
                formattedLogs.push(`- ${it.author} - ${it.content}${index === logs.length - 1 ? '.' : ''}`)
            }
        })
        formattedString += `\n${formattedLogs.join(';\n')}`

    }

    if (parkovka) {
        formattedString += `\nПарковка:\n${parkovka}`
    }


    return formattedString;
}