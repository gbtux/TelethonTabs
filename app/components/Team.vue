<template>
  <Page class="page" actionBarHidden="true" style="background-color : #fbc62d;">
    <DockLayout stretchLastChild="true">
        <Header dock="top" />
        <ScrollView>
            <StackLayout dock="center" class="preload" >
                <card-view ripple margin="5" class="whiteCard">
                    <GridLayout rows="200, auto, auto" columns="*, *">
                        <Image src="~/assets/noteam-unsplash.jpg" stretch="aspectFill" margin="10" colSpan="2" row="0" ></Image>
                        <Label text="Aucune équipe configurée" class="info" textWrap="true" row="1" colSpan="2" />
                        <Button text="Créer une équipe" class="blue" row="2" col="1" @tap="createTeam"/>
                    </GridLayout>
                </card-view>
                <Label class="lbl h3 info" text="Participants"/>
                <card-view ripple margin="5" class="whiteCard">
                    <ListView for="participant in participants" class="list-group">
                        <v-template>
                            <GridLayout rows="50" columns="auto, *">
                                <Image col="0" :src="participant.icon" class="avatar thumb img-circle" margin="10"></Image>
                                <Label col="1" class="info" :text="participant.nom"></Label>
                            </GridLayout>
                        </v-template>
                    </ListView>
                </card-view>
            </StackLayout>
        </ScrollView>
    </DockLayout>
  </Page>
</template>

<script>
import Header from "./include/header";
import TeamCreate from './TeamCreate';

export default {
    components: { Header},
    data: () => {
        return {
            participants: [
                { 
                    icon: "~/assets/avatars/iconfinder_man_male_avatar_portrait_4043260.png", 
                    nom: "Bob l'eponge"
                },{
                    icon: "~/assets/avatars/iconfinder_girl_female_woman_avatar_4043251.png", 
                    nom: "Jocelyne Brown"
                }
            ]
        }
    },
    methods: {
        createTeam() {
            this.$navigateTo(TeamCreate);
        }
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import "../app-variables";
// End custom common variables

// Custom styles
.page{
   background-color : #fbc62d;
}
.info {
  font-size: 20;
  margin: 10;
}
.blue {
  background-color: #0f5765;
  color: whitesmoke;
}
.avatar {
    width: 30;
    height: 30;
}

</style>