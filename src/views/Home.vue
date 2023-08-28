<template>
    <section class="home">
        <div class="container home__container">
            <div class="users" @click="openModal">
                <User v-for="user in store.users" :key="user.name" :user="user"></User>
            </div>
            <Button @click="addUser" class="home__add-button button--inherit">Добавить нового
                пользователя</Button>
        </div>

    </section>
</template>

<script setup>
import User from '@/components/ui-kit/User.vue'
import Button from '@/components/ui-kit/Button.vue'
import { useUserStore } from "@/stores/users"
import Default from '@/components/modals/Default.vue';
import UserController from '@/components/UserController.vue';
import { useModal } from 'vue-final-modal'

const store = useUserStore()
if (!store.isUsersLoaded) {
    store.loadUsers()
}

const { open } = useModal({
    component: Default,
    attrs: {
        title: 'Добавить пользователя',
    },
    slots: {
        default: UserController,
    },
})

const addUser = () => {
    store.setEditedUserId(-1)
    open()
}



</script>

<style lang="scss" scoped>
.home__container {
    display: block;
    margin-top: 64px;
}

.users {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.725rem;

    @include media-tablet {
        grid-template-columns: repeat(2, 1fr);
    }

    @include media-mobile {
        grid-template-columns: repeat(1, 1fr);
    }
}

.home__add-button {
    margin-top: 40px;
    margin-left: auto;
}
</style>