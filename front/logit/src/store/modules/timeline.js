import router from "@/router";
import axiosConnector from "@/utils/axios-connector"

const timeline = {
    namespaced: true,
    state:{
        sidebar: true,
        growths: [],
        jobs: [],
    },
    getters: {

    },
    mutations: {
        GET_GROWTHS(state, payload){
            state.growths = payload
        },
        GET_JOBS(state, payload){
            state.jobs = payload
            router.push({name: 'TimeLine'})
        },
    },
    actions: {
        getGrowths({commit}) {
            axiosConnector.get(`growth/get_mine`
            ).then((res)=> {
                commit('GET_GROWTHS', res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },
        getJobs({commit}) {
            axiosConnector.get(`job`
            ).then((res)=>{
                commit('GET_JOBS', res.data)
            }).catch((err)=>{
                console.log(err)
            })
        },
        timelineSetting({dispatch}){
            dispatch('getGrowths')
            dispatch('getJobs')
        }
    }

}

export default timeline;