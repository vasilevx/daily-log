<script setup lang="ts">
import { useAuthorsStore, useLogsStore, useMessagesStore, useParkovkaStore } from '../store/store';
import { useToast } from 'primevue';

const logsStore = useLogsStore()
const authorsStore = useAuthorsStore()
const messagesStore = useMessagesStore()
const parkovkaStore = useParkovkaStore()

const toast = useToast();

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(logsStore.formattedString)
        toast.add({ severity: 'info', summary: 'Copied', life: 3000 });
    } catch {
        toast.add({ severity: 'error', summary: 'Failed to copy', life: 3000 });
    }
}

const onKeyDownAuthor = (event: KeyboardEvent, index: number) => {
    if (index === logsStore.logs.length - 1 && event.key === 'Enter') {
        logsStore.addLog()
    }

}
</script>

<template>
    <Toast position="bottom-center" />
    <Form class="form">
        <div>
            <InputGroup v-for="(item, index) in logsStore.logs" :key="index" size="small">
                <Button icon="pi pi-trash" aria-label="Clear" @click="logsStore.removeLog(index)" />
                <InputText type="text" v-model="item.author" @input="authorsStore.editAuthor(index, item.author)"
                    @keydown="(event) => onKeyDownAuthor(event, index)" size="small" />
                <Textarea v-model="item.content" @input="messagesStore.editMessage(index, item.content)" autoResize
                    rows="2" size="small" cols="30" />
            </InputGroup>
        </div>
        <div>
            <Button icon="pi pi-plus" aria-label="New item" @click="logsStore.addLog()" />
            <Button icon="pi pi-clone" aria-label="Copy" @click="copyToClipboard" />
            <Button icon="pi pi-trash" aria-label="Clear" @click="messagesStore.clear()" />
        </div>
        <Textarea autoResize rows="6" size="small" cols="30" fluid v-model="parkovkaStore.parkovka" />
    </Form>

</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>
