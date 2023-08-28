<template>
    <Field :title="title" class="field-input-wrapper" :isFocused="isFieldFocused" :error="error">
        <input :maxlength="maxLength" class="input field-input" :ref="'field'" type="text" :class="{
            'field-input--filled': inputValue || isFieldFocused,
        }" :value="inputValue" @input="onInput" @focus="onFocus" @blur="onBlur" />
    </Field>
</template>

<script setup>
import Field from '@/components/ui-kit/Field.vue';
import { ref } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        default: "",
        required: true,
    },
    title: {
        type: String,
        default: "",
        required: false,
    },
    validate: {
        type: Array,
        required: true
    },
    maxLength: {
        type: Number,
        required: false
    }
});

const emit = defineEmits(["update:modelValue"])

const inputValue = ref(props.modelValue);
const error = ref('')

function onInput(event) {
    if (!event.target) return;
    const value = event.target.value;
    inputValue.value = value;
    emit("update:modelValue", value);
}

const isFieldFocused = ref(false);
const onFocus = (event) => {
    error.value = null
    isFieldFocused.value = true;
};
const onBlur = (event) => {
    const validateValue = props.validate.map(validate => validate(event)).filter(item => item)
    if (validateValue[0]) {
        error.value = validateValue[0]
    }
    isFieldFocused.value = false;
};
</script>


<style lang="scss" scoped>
.field-input-wrapper {
    position: relative;
}

.field-input {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: 0px;

    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    /* identical to box height, or 20px */
    padding: 0 16px;

    color: rgba($dark, 0.77);
    position: relative;
}

.field-input__title {
    font-family: "Plain", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    user-select: none;
    cursor: text;

    color: rgba(230, 230, 235, 0.37);
}
</style>
