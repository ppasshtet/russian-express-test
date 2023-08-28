<template>
    <!-- takes in button--inherit -->
    <div class="button">
        <span class="button__text text text--action">
            <slot />
        </span>
    </div>
</template>

<style lang="scss" scoped>
.button {
    display: flex;
    position: relative;
    align-items: center;
    width: max-content;
    color: $white;


    padding: 0.6rem 1.4rem;
    background-color: $dark;
    border-radius: 0.5rem;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: rgba($dark, 0.8);
    }

    &:active {
        background-color: rgba($dark, 0.6);
    }
}

.button--inherit {
    background-color: transparent;
    border: 2px solid $dark;
    color: $dark;

    &:hover {
        background-color: $dark;
        color: $white;
    }

    &:active {
        background-color: rgba($dark, 0.8);
    }
}
</style>