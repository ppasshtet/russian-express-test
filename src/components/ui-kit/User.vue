<template>
    <div class="user">
        <div class="user__description">
            <div class="user__name">{{ user.name }}</div>
            <div class="user__price">{{ user.email }}</div>
            <div class="user__website"><a target="_blank" :href="user.website">{{ user.website }}</a></div>
        </div>
        <Button class="user__edit" @click="() => editUser(user.id)">Редактировать</Button>
        <div class="user__close" @click="deleteUser">
            <img class="user__close-image" src="@/assets/images/ui-kit/crest.svg">
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/ui-kit/Button.vue'
import { useUserStore } from "@/stores/users"
import Default from '@/components/modals/Default.vue';
import UserController from '@/components/UserController.vue';
import { useModal } from 'vue-final-modal'

const store = useUserStore()

const props = defineProps({
    user: Object,
});

const deleteUser = () => {
    store.deleteUser(props.user.id)
}

const { open } = useModal({
    component: Default,
    attrs: {
        title: 'Редактировать пользователя',
    },
    slots: {
        default: UserController,
    },
})
const editUser = (id) => {
    store.setEditedUserId(id)
    open()
}

</script>

<style lang="scss">
.user {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, .10), 0 0 1px rgba(30, 30, 30, .24), 0 12px 20px rgba(30, 30, 30, .16);

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.625rem;

    font-family: 'Roboto';
    font-weight: 500;
}

.user__name {
    font-size: 24px;
    margin-bottom: 12px;

}

.user__price,
.user__website {
    font-size: 16px;
    font-weight: 400;

    &:not(:last-child) {
        margin-bottom: 6px;
    }
}

.user__website {
    text-decoration: underline;
}


.user__description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.user__edit {
    margin-top: 10px;
    margin-left: auto;
}

.user__close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    width: 20px;
    height: 20px;

    &-image {
        width: 100%;
        height: 100%;
    }
}
</style>