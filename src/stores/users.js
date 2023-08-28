import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { findMaxID } from '@/utils/common.js'


export const useUserStore = defineStore('users', () => {
    const users = ref([])
    const isUsersLoaded = ref(false)

    async function loadUsers() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        users.value.push(...data)
        isUsersLoaded.value = true
    }

    const editedUserId = ref(1)
    const setEditedUserId = (id) => {
        editedUserId.value = id
    }

    const addUser = ({ name, email, website }) => {
        users.value.push({
            name, email, website,
            id: findMaxID(users.value) + 1
        })
    }

    const editUser = ({ name, email, website, id }) => {
        const index = users.value.findIndex(user => user.id === id)
        users.value.splice(index, 1, { name, email, website, id })
    }

    const deleteUser = (id) => {
        const index = users.value.findIndex(user => user.id === id)
        users.value.splice(index, 1)
    }

    const isNewUser = computed(() => {
        return editedUserId.value === -1
    })


    return {
        users,
        editedUserId,
        editUser,
        isNewUser,
        setEditedUserId,
        loadUsers,
        isUsersLoaded,
        addUser,
        deleteUser
    }
})