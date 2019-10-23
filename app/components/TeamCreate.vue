<template>
    <Page class="page" style="background-color : #fbc62d;">
        <ActionBarLogo />
        
            <StackLayout dock="center" class="preload" >
                <card-view ripple margin="10" class="whiteCard">
                    <GridLayout rows="auto, *" class="content">
                        <StackLayout class="form-header">
                                <Label class="lbl h2 m-t-5 m-b-5" text="Créer une équipe"/>
                        </StackLayout>
                        <ScrollView row="1">
                            <StackLayout class="form form-content">
                                <StackLayout class="form form-content">
                                    <Label class="lbl lbl-light m-t-5" text="Nom de l'équipe" />
                                    <TextField class="form-input m-t-10" hint="ma super équipe" 
                                                autocorrect="false" id="txtMobile"
                                            autocapitalizationType="none" returnKeyType="next" v-model="form.nom" />
                                    <Label class="lbl lbl-light m-t-20" text="Ville du challenge Téléthon" />
                                    <TextField class="form-input m-t-10" hint="ville" 
                                            autocorrect="false" 
                                            autocapitalizationType="none" returnKeyType="next" v-model="form.ville"/>
                                    <Label class="lbl lbl-light m-t-20" text="Mot de passe" />
                                    <TextField class="form-input m-t-10" secure="true" autocorrect="false" 
                                            id="txtPassword1" autocapitalizationType="none" returnKeyType="next" 
                                            v-model="form.password" />
                                    <GridLayout rows="auto" columns="*, 80" horizontalAlignment="left" verticalAlignment="bottom">
                                        <Label text="Equipe organisatrice ?" class="m-r-10 ar-flashlight" horizontalAlignment="right"/>
                                        <Switch col="1" checked="false" class="switch-light" v-model="form.isOrganisatrice" />
                                    </GridLayout>
                                    <GridLayout rows="auto" columns="*, 80" horizontalAlignment="left" verticalAlignment="bottom">
                                        <Label text="Equipe coordinatrice ?" class="m-r-10 ar-flashlight" horizontalAlignment="right"/>
                                        <Switch col="1" checked="false" class="switch-light" v-model="form.isCoordinatrice" />
                                    </GridLayout>
                                    <Button class="btn btn-primary" text="Créer" @tap="submitForm" />
                                </StackLayout>
                            </StackLayout>
                        </ScrollView>
                    </GridLayout>
                </card-view>
            </StackLayout>
        
    </Page>
</template>

<script>
import ActionBarLogo from './include/ActionBarLogo'
import Team from './Team'

export default {
    components: { ActionBarLogo },
    data() {
        return {
            form: {
                nom: '',
                ville: '',
                password: '',
                isOrganisatrice: false,
                isCoordinatrice: false
            }
        }
    },
    methods: {
        submitForm() {
            //todo : submit form in store
            //then redirect team (if OK)
            this.$navigateTo(Team);
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
    
</style>