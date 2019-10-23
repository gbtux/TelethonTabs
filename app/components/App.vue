<template lang="html">
    <BottomNavigation>
        <TabStrip>
            <TabStripItem>
                <Label text="Equipe"></Label>
                <Image src.decode="font://&#xf0c0;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Défis"></Label>
                <Image src.decode="font://&#xf164;" class="fa t-36"></Image>
            </TabStripItem>
            <TabStripItem>
                <Label text="Résultats"></Label>
                <Image src.decode="font://&#xf201;" class="fa t-36"></Image>
            </TabStripItem>
        </TabStrip>

        <TabContentItem>
            <Frame>
                <Team />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Browse />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Search />
            </Frame>
        </TabContentItem>

    </BottomNavigation>
</template>

<script>
import Team from "./Team.vue";
import Browse from "./Browse.vue";
import Search from "./Search.vue";

export default {
  components: {
    Team,
    Browse,
    Search
  }
};
</script>

<style lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles

</style>
