<template>
    <Page class="page" style="background-color : #fbc62d;">
        <ActionBarLogo />
        <ScrollView>
            <StackLayout dock="center" class="preload" >
                <card-view ripple margin="10" class="whiteCard">
                    <GridLayout rows="auto, *" class="content">
                        <StackLayout class="form-header">
                                <Label class="lbl h2 m-t-5 m-b-5" text="Modifier mon équipe"/>
                        </StackLayout>
                        <ScrollView row="1">
                            <StackLayout class="form form-content">
                                <StackLayout class="form form-content">
                                    <Label class="lbl lbl-light m-t-5" text="Nom de l'équipe" />
                                    <TextField class="form-input m-t-10" hint="ma super équipe" 
                                                autocorrect="false" id="txtMobile"
                                            autocapitalizationType="none" returnKeyType="next" v-model="lequipe.nom" />
                                    <Label class="lbl lbl-light m-t-20" text="Ville du challenge Téléthon" />
                                    <TextField class="form-input m-t-10" hint="ville" 
                                            autocorrect="false" 
                                            autocapitalizationType="none" returnKeyType="next" v-model="lequipe.ville"/>
                                    <GridLayout rows="auto" columns="*, 80" horizontalAlignment="left" verticalAlignment="bottom">
                                        <Label text="Equipe organisatrice ?" class="m-r-10 ar-flashlight" horizontalAlignment="right"/>
                                        <Switch col="1" checked="false" class="switch-light" v-model="lequipe.isOrganisatrice" />
                                    </GridLayout>
                                    <GridLayout rows="auto" columns="*, 80" horizontalAlignment="left" verticalAlignment="bottom">
                                        <Label text="Equipe coordinatrice ?" class="m-r-10 ar-flashlight" horizontalAlignment="right"/>
                                        <Switch col="1" checked="false" class="switch-light" v-model="lequipe.isCoordinatrice" />
                                    </GridLayout>
                                    <Button class="btn btn-primary" text="Enregistrer" @tap="submitForm" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                    </GridLayout>
                </card-view>
                <Label class="lbl h3 info" text="Participants"/>
                    <card-view ripple margin="5" class="whiteCard">
                        <FlexboxLayout flexDirection="column">
                            <GridLayout rows="*" columns="auto, *" v-for="(participant, index) in equipe.participants" :key="index">
                                <Image col="0" :src="participant.icon" class="avatar thumb img-circle" margin="10"></Image>
                                <Label col="1" class="info" :text="participant.nom"></Label>
                            </GridLayout>
                            <Button class="btn btn-primary" text="Ajouter" @tap="addParticipant" />
                        </FlexboxLayout>
                    </card-view>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import {mapGetters} from 'vuex'
import ActionBarLogo from '../include/ActionBarLogo'
import TeamParticipantCreate from './TeamParticipantCreate';

export default {
    components: { ActionBarLogo },
    computed: {
        lequipe() {
            return {
                id: this.equipe.id,
                nom: this.equipe.nom,
                ville: this.equipe.ville,
                isOrganisatrice: this.equipe.isOrganisatrice,
                isCoordinatrice: this.equipe.isCoordinatrice
            }
        },
        ...mapGetters('equipe', { equipe : 'equipe' }),
    },
    methods: {
        submitForm() {

        },
        addParticipant() {
            this.$navigateTo(TeamParticipantCreate);
        }
    }
}
</script>

<style scoped lang="scss">
    .lbl{
        color: #0f5765;
    }
    .content{
        padding: 20px;
    }
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