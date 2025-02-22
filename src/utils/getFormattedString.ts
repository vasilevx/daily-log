import type { Log } from "../types";
import { getCurrentDay } from "./getCurrentDay"

export const getFormattedString = (logs: Log[]): string => {
    const currentDayText = getCurrentDay();

    let formattedString = `#daily ${currentDayText}\n`
    const formattedLogs: string[] = []

    logs.forEach((it) => {
        if (it.content && it.author) {
            formattedLogs.push(`- ${it.author} - ${it.content}`)
        }
    })

    formattedString += `${formattedLogs.join(';\n')}.`


    return formattedString;
}