<template>
    <Page class="page" style="background-color : #fbc62d;">
        <ActionBarLogo />
        <ScrollView>
            <StackLayout dock="center" class="preload" >
                <Label class="lbl h2 m-t-5 m-b-5 m-l-10" :text="'Participant : ' + participant.nom"/>
                <card-view ripple margin="10" class="whiteCard">
                    <GridLayout rows="auto, *" class="content">    
                        <StackLayout class="form form-content">
                            <Image row="1" height="300px" :src="participant.icon"></Image>
                            <Button class="btn btn-error" text="Supprimer" @tap="deleteParticipant" />
                        </StackLayout>
                    </GridLayout>
                </card-view>
                <Label class="lbl h3 info m-l-10" text="Résultats des défis"/>
                <card-view ripple margin="10" class="whiteCard">
                    <FlexboxLayout flexDirection="column">
                        <GridLayout rows="*" columns="auto, *">
                            <Label col="0" class="info" text="Défi 1 : "></Label>
                            <Label col="1" class="info" text="10 points"></Label>
                        </GridLayout>
                    </FlexboxLayout>
                </card-view>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
import ActionBarLogo from '../include/ActionBarLogo'
import Team from './Team'

export default {
    props: {
        index: String
    },
    components: { ActionBarLogo },
    computed: {
        participant() {
            return this.$store.getters['equipe/participant'](this.index)
        } 
    },
    methods: {
        deleteParticipant() {
            this.$store.dispatch('equipe/deleteParticipant', {p: this.index}).then(() => {
                this.$navigateTo(Team);
            });
        }
    },
}
</script>

<style scoped lang="scss">
    .lbl{
        color: #0f5765;
    }
    .content{
        padding: 20px;
    }
    .info {
        font-size: 20;
        margin: 10;
    }
    
</style>