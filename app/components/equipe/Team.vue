<template>
  <Page class="page" actionBarHidden="true" style="background-color : #fbc62d;">
    <DockLayout stretchLastChild="true">
        <Header dock="top" />
        <ScrollView>
            <StackLayout dock="center" class="preload">
                <card-view ripple margin="5" class="whiteCard">
                    <GridLayout rows="200, auto, auto" columns="*, *" v-if="!equipe.nom">
                        <Image src="~/assets/noteam-unsplash.jpg" stretch="aspectFill" margin="10" colSpan="2" row="0" ></Image>
                        <Label text="Aucune équipe configurée" class="info" textWrap="true" row="1" colSpan="2" />
                        <Button text="Créer une équipe" class="blue" row="2" col="1" @tap="createTeam"/>
                    </GridLayout>
                    <GridLayout rows="200, auto, auto" columns="*, *" v-else>
                        <Image src="~/assets/noteam-unsplash.jpg" stretch="aspectFill" margin="10" colSpan="2" row="0" ></Image>
                        <Label :text="equipe.nom" class="info" textWrap="true" row="1" colSpan="2" />
                        <!-- <Button text="Créer une équipe" class="blue" row="2" col="1" @tap="createTeam"/> -->
                        <!-- <Button row="1" col="2" class="fa" :text="'fa-plus' | fonticon"/> -->
                        <Button row="1" col="2" text.decode="&#xf35a;" width="36" class="primary m-r-15 pull-right far t-36 btn-rounded-lg" @tap="modifyTeam"></Button>
                    </GridLayout>
                </card-view>
                <Label class="lbl h3 info" text="Participants" v-if="equipe.nom && equipe.participants.length > 0"/>
                <card-view ripple margin="5" class="whiteCard" v-if="equipe.nom">
                    <FlexboxLayout flexDirection="column" v-if="equipe.participants.length > 0">
                        <GridLayout rows="*" columns="auto, *" v-for="(participant, index) in participants" :key="index">
                            <Image col="0" :src="participant.icon" class="avatar thumb img-circle" margin="10"></Image>
                            <Label col="1" class="info" :text="participant.nom"></Label>
                        </GridLayout>
                    </FlexboxLayout>
                    <FlexboxLayout flexDirection="column" v-else>
                        <GridLayout rows="*" columns="auto, *"  v-for="(participant, index) in equipe.participants" :key="index">
                            <Image col="0" src="participant.icon" class="avatar thumb img-circle" margin="10"></Image>
                            <Label col="1" class="info" text="personne dans la Team !"></Label>
                        </GridLayout>
                    </FlexboxLayout>
                </card-view>
            </StackLayout>
        </ScrollView>
    </DockLayout>
  </Page>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from "../include/header";
import TeamCreate from './TeamCreate';
import TeamUpdate from './TeamUpdate';

export default {
    components: { Header},
    data() {
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
    computed: {
        ...mapGetters('equipe', { equipe: 'equipe'})
    },
    methods: {
        createTeam() {
            this.$navigateTo(TeamCreate);
        },
        modifyTeam() {
            console.log('navigate')
            this.$navigateTo(TeamUpdate);
        }
    }
};
</script>

<style scoped lang="scss">
// Start custom common variables
//@import "../../app-variables";
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