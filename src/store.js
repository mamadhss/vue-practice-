import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import axios from 'axios';

export default new Vuex.Store({
    state: {
        messages:[]

    },
    mutations: {
        updateMessages(state,messages) {
            state.messages = messages
        },
        newMessage(state,message) {
            state.messages.push(message)
        }
    },
    actions: {
        async getMessages({commit}) {
            let messages = (await axios.get('http://127.0.0.1:8000/api/messages/')).data
            commit('updateMessages',messages)
        },
        async newMessage({commit},messageBody) {
            let msg = await (axios.post('http://127.0.0.1:8000/api/messages/',{message:messageBody})).data
            commit('newMessage',msg.message)

        },
        async getMessage({commit},id) {
            return axios.get(`http://127.0.0.1:8000/api/messages/${id}`)
        }
    }
})





