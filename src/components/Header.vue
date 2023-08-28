<template>
    <div class="header">
        <div class="container header__container">
            <div class="subtitle">
                Пользователи
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 80px;
    background-color: $white;
    box-shadow: 0px 4px 6px rgba($dark, 0.1);
}

.header__container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}

.header__logo {
    height: 48px;
}
</style>