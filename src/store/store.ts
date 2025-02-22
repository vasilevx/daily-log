import { defineStore } from "pinia";
import type { Log } from "../types";
import { getFormattedString } from "../utils";

type AuthorsState = {
    authors: string[]
}

export const useAuthorsStore = defineStore('authors', {
    state: (): AuthorsState => {
        const localStorageValue = localStorage.getItem('authors')

        return {
            authors: localStorageValue ? JSON.parse(localStorageValue) : []
        }
    },
    actions: {
        addAuthor() {
            this.authors.push('')
        },
        removeAuthor(index: number) {
            this.authors = this.authors.filter((_, i) => i !== index)
        },
        editAuthor(index: number, s: string) {
            this.authors[index] = s
        }
    },
})

type MessagesState = {
    messages: Record<number, string>
}

export const useMessagesStore = defineStore('messages', {
    state: (): MessagesState => {
        const localStorageValue = localStorage.getItem('messages')

        return {
            messages: localStorageValue ? JSON.parse(localStorageValue) : {}
        }
    },
    actions: {
        editMessage(index: number, message: string) {
            this.messages[index] = message
        },
        removeMessage(index: number) {
            delete this.messages[index]
        },
        clear(){
            this.messages = {}
        }
    },
})

export const useLogsStore = defineStore('logs', {
    getters: {
        logs: (): Log[] => {
            const authorsStore = useAuthorsStore()
            const messagesStore = useMessagesStore()

            return authorsStore.authors.map((author, index) => {
                return { author, content: messagesStore.messages[index] ?? '' }
            })
        },
        formattedString(): string {
            return getFormattedString(this.logs)
        }
    },
    actions: {
        addLog: () => {
            const authorsStore = useAuthorsStore()

            authorsStore.addAuthor()
        },
        removeLog: (index: number) => {
            const authorsStore = useAuthorsStore()
            const messagesStore = useMessagesStore()

            authorsStore.removeAuthor(index)
            messagesStore.removeMessage(index)
        }
    }
})