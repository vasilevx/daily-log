<script setup lang="ts">
import Button from 'primevue/button';
import { useAuthorsStore, useLogsStore, useMessagesStore } from '../store/store';

const logsStore = useLogsStore()
const authorsStore = useAuthorsStore()
const messagesStore = useMessagesStore()
</script>

<template>
    <h1>{{ logsStore.logs.length }}</h1>
    <InputGroup v-for="(item, index) in logsStore.logs" :key="index">
        <Button icon="pi pi-trash" aria-label="Clear" @click="logsStore.removeLog(index)" />
        <InputText type="text" v-model="item.author" @input="authorsStore.editAuthor(index, item.author)" /> <Textarea
            v-model="item.content" @input="messagesStore.editMessage(index, item.content)" autoResize rows="5"
            cols="30" />
    </InputGroup>
    <Button icon="pi pi-plus" aria-label="New item" @click="logsStore.addLog()" />
    <Button icon="pi pi-clone" aria-label="Copy" @click="console.log(logsStore.formattedString)" />
    <Button icon="pi pi-trash" aria-label="Clear" @click="messagesStore.clear()" />

</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
