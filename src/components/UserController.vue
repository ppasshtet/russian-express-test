<template>
    <div class="user-controller">
        <div class="user-controller__container">
            <FieldInput :title="'Имя'" v-model="editedUser.name" :validate="[checkIsEmpty]">
            </FieldInput>

            <FieldInput :title="'Email'" v-model="editedUser.email" :validate="[checkIsEmpty, checkEmail]">
            </FieldInput>

            <FieldInput :title="'Website'" v-model="editedUser.website" :validate="[checkIsEmpty]">
            </FieldInput>

            <Button @click="action" class="user-controller__button">{{ store.isNewUser ?
                "Добавить" :
                "Редактировать" }}</Button>
        </div>
    </div>
</template>

<script setup>
import FieldInput from '@/components/ui-kit/FieldInput.vue'
import Button from '@/components/ui-kit/Button.vue'
import { useUserStore } from "@/stores/users"
import { reactive } from 'vue'

const store = useUserStore()

const editedUser = reactive(store.isNewUser ? {
    name: '',
    email: '',
    website: ''
} : JSON.parse(JSON.stringify(store.users[store.users.findIndex(user => user.id === store.editedUserId)])))


const action = () => {
    if (!(editedUser.name && editedUser.email && editedUser.website)) {
        alert('Все поля обязательны для заполнения')
        return
    }

    if (store.isNewUser) {
        store.addUser(editedUser)
    } else {
        store.editUser(editedUser)
    }
}

const checkIsEmpty = (event) => {
    if (event.target.value) {
        return null
    }
    return "Обязательно для заполнения"
}

const checkEmail = (event) => {
    const emailRegExp = /.+@.+\..+/;

    if (emailRegExp.test(event.target.value)) {
        return null
    }
    return "Введите корректный email"
}

</script>

<style scoped>
.user-controller__container {
    display: block;
    margin-top: 64px;
}

.user-controller__button {
    margin-top: 24px;
}
</style>