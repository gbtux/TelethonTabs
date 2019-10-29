<template>
  <Page class="page" style="background-color : #fbc62d;">
        <ActionBarLogo />
        <StackLayout dock="center" class="preload" >
            <card-view ripple margin="10" class="whiteCard">
                <GridLayout rows="auto, *" class="content">
                    <StackLayout class="form-header">
                            <Label class="lbl h2 m-t-5 m-b-5" text="Ajouter un participant"/>
                    </StackLayout>
                    <StackLayout class="form form-content m-t-30">
                        <StackLayout class="form form-content m-t-5">
                            <Label class="lbl lbl-light m-t-5" text="Pseudo" />
                            <TextField class="form-input m-t-10" hint="bob" 
                                        autocorrect="false" id="txtMobile"
                                    autocapitalizationType="none" returnKeyType="next" v-model="form.nom" />        
                            <Pager height="50%" for="item in items" v-on:selectedIndexChange="onAvatarChange">
                                <v-template>
                                    <GridLayout class="pager-item" rows="auto, *" columns="*">
                                        <!-- <Label :text="item.title"></Label> -->
                                        <Image row="1" height="300px" :src="item.image"></Image>
                                    </GridLayout>
                                </v-template>
                            </Pager>
                            <Label class="lbl lbl-light m-t-5" style="align:center" text="swiper pour changer d'avatar" />
                            <Button class="btn btn-primary" text="Ajouter" @tap="submitForm" />
                        </StackLayout>
                    </StackLayout>
                </GridLayout>
            </card-view>
        </StackLayout>
  </Page>
</template>

<script>
import ActionBarLogo from '../include/ActionBarLogo'
import Team from './Team';

export default {
    components: { ActionBarLogo },
    data() {
        return {
            form : {
                nom: '',
                icon: '~/assets/avatars/512/iconfinder_man_male_avatar_portrait_4043260.png'
            },
            items: [
                { title: '1', image: '~/assets/avatars/512/iconfinder_man_male_avatar_portrait_4043260.png'},
                { title: '2', image: '~/assets/avatars/512/iconfinder_girl_female_woman_avatar_4043251.png'}
            ]
        }
    },
    methods: {
        submitForm() {
            this.$store.dispatch('equipe/addParticipant', { participant : this.form}).then(() => {
                this.$navigateTo(Team);
            });
        },
        onAvatarChange(index) {
            console.log(index)
            this.form.icon = this.items[index].image
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
    
</style>