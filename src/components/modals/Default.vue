<template>
    <VueFinalModal class="modal-container--container" content-class="modal-container--window"
        @update:model-value="(val) => emit('update:modelValue', val)">
        <div class="title">
            {{ title }}
        </div>
        <slot />
    </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from 'vue-final-modal'

const props = defineProps({
    title: {
        type: String,
        default: "",
        required: false,
    }
});
const emit = defineEmits(["update:modelValue"])

</script>

<style lang="scss">
.modal-container--container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container--window {
    width: 814px;
    background-color: $white;
    padding: 80px 64px;

    @include media-mobile {
        width: 100%;

    }
}
</style>
