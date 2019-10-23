<template>
    <ActionBar>
        <StackLayout orientation="horizontal"
            ios:horizontalAlignment="center"
            android:horizontalAlignment="center">
            <Image src="~/assets/logo/telethon-transparence.png" class="action-image"></Image>
        </StackLayout>
    </ActionBar>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .action-image {
        width: 150;
        height: 50;
        vertical-align: center;
    }
</style>