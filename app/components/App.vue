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
                <Defis />
            </Frame>
        </TabContentItem>

        <TabContentItem>
            <Frame>
                <Resultats />
            </Frame>
        </TabContentItem>

    </BottomNavigation>
</template>

<script>
import Team from "./equipe/Team.vue";
import Defis from "./defis/Defis";
import Resultats from "./resultats/Resultats";

export default {
  components: {
    Team,
    Defis,
    Resultats
  }
};
</script>

<style lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles

</style>
