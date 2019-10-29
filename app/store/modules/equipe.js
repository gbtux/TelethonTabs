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
        },
        participant: function(state) {
            return (index) => {
                return state.equipe.participants[index]
            }
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
        },
        removeParticipant(state, { participant }) {
            state.equipe.participants.splice(participant, 1);
        }
    },

    actions: {
        createEquipe: function(context, { equipe }) {
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
        },

        deleteParticipant: function(context, { p }) {
            return new Promise((resolve, reject) => {
                context.commit('removeParticipant', { participant : p })
                resolve()
            })
        }
    }
}