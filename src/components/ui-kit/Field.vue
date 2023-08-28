<template>
    <div class="field-wrapper" :class="{ 'field-wrapper--error': error }">
        <div class="text field__title">
            {{ title }}
        </div>
        <div class="field" :class="{ 'field--focused': isFocused }">
            <slot></slot>
        </div>

        <div class="field-input__footer">
            <div v-if="error">
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        default: "",
        required: false,
    },
    title: {
        type: String,
        default: "",
        required: false,
    },
    error: {
        type: String,
        default: "",
        required: false,
    },
    title: {
        type: String,
        default: "",
        required: false,
    },
    isFocused: {
        type: Boolean,
        default: false,
        required: false,
    }
});
</script>

<style lang="scss" scoped>
.field {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 48px;
    border: 1px solid rgba(82, 82, 82, 0.37);
    border-radius: 4px;

    &--focused {
        box-shadow: 0px 0px 0px 2px rgba(153, 179, 203, 0.2);
    }
}

.field-input__footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 8px;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: $brand;
}

.field-input__error {}

.field-wrapper {
    &--error:v-deep(*:not(input)) {
        color: $brand !important;
    }
}

.field-wrapper--error {
    .field {
        border-color: $brand;
    }
}
</style>
