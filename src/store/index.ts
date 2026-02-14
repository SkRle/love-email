import { createStore } from 'vuex'

export interface State {
    userName: string;
    quizAnswers: string[];
    ticketScanned: boolean;
}

export default createStore<State>({
    state: {
        userName: '',
        quizAnswers: [] as string[],
        ticketScanned: false
    },
    mutations: {
        setUserName(state: State, name: string) {
            state.userName = name
        },
        addQuizAnswer(state: State, answer: string) {
            state.quizAnswers.push(answer)
        },
        scanTicket(state: State) {
            state.ticketScanned = true
        }
    },
    actions: {
    },
    modules: {
    }
})
