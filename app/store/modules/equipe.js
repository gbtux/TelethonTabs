export default {
    namespaced: true,
    state: {
        equipes: [],
        equipe: {
            id: null,
            participants: []
        }
    },

    getters: {
        equipes: function (state) {
            return state.equipes
        },
        equipe: function (state) {
            return state.equipe
        }
    },

    mutations: {
        setEquipes(state, { equipes }) {
            state.equipes = equipes
        },
        setEquipe(state, { equipe }) {
            state.equipe = equipe
        },
        addParticipant(state, { participant }) {
            state.equipe.participants.push(participant)
        }
    },

    actions: {
        createEquipe: function(context, { equipe }) {
            console.log(equipe)
            //TODO : save in backend 
            return new Promise((resolve, reject) => {
                context.commit('setEquipe', { equipe : equipe })
                resolve()
            })
        },

        addParticipant: function(context, { participant }) {
            return new Promise((resolve, reject) => {
                context.commit('addParticipant', { participant : participant })
                resolve()
            })
        }
    }
}