import axiosConnector from "@/utils/axios-connector";



const tempJob = {
    namespaced: true,
    state:{
        jobs: [
            {   
                "jobId": 1,
                "title": "카카오",
                "startDate": new Date(2023,0,10),
                "endDate": new Date(2023,0,10),
                "progress": true,
                "size": 4,
                "datas": [
                    {
                        "stepId": 4,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "INTERVIEW",
                        "name": "HI",
                        "list": [
                            {
                                "id": 8,
                                "question": "자기소개 해주세요",
                                "answer": "나는 공진호",
                                "category": "인성면접"
                            },
                            {
                                "id": 9,
                                "question": "자신의 강점은?",
                                "answer": "컴퓨터 게임을 잘합니다.",
                                "category": "기술면접"
                            }
                        ]
                    },
                    {
                        "stepId": 5,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "CODINGTEST",
                        "name": "HI",
                        "list": [
                            {
                                "id": 6,
                                "content": "DFS 문제중에서는 난이도가 어려웠다. 아무말이나 적고 싶다. 더미 데이터를 분석해 보는것은 의미가 있을까? 프로그래머스에서 문제를 더 찾아봐야겠다. 코테는 언제나 즐겁다.",
                                "category": "DFS"
                            },
                            {
                                "id": 7,
                                "content": "다이나믹 프로그래밍 공부를 더 해야곘다. 앞으로는 어떤 이용한 알고리즘 문제였다. 어려웠다.",
                                "category": "DP"
                            }
                        ]
                    },
                    {
                        "stepId": 12,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "DOCUMENT",
                        "name": "HI",
                        "list": [
                            {
                                "id": 13,
                                "question": "이 회사에 지원한 이유는?",
                                "answer": "돈을 많이 줍니다."
                            },
                            {
                                "id": 14,
                                "question": "장점은 무엇인가요?",
                                "answer": "일을 잘합니다."
                            },
                            {
                                "id": 13,
                                "question": "장기자랑 해보세요.",
                                "answer": "아 싫어요"
                            },
                        ]
                    }
                ]
            },
            {   
                "jobId": 2,
                "title": "네이버",
                "startDate": new Date(2023,0,10),
                "endDate": new Date(2023,0,10),
                "progress": true,
                "size": 4,
                "datas": [
                    {
                        "stepId": 3,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "ETC",
                        "name": "HI",
                        "list": [
                            {
                                "id": 10,
                                "content": "1차면접"
                            },
                            {
                                "id": 11,
                                "content": "1차면접"
                            }
                        ]
                    },
                    {
                        "stepId": 4,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "INTERVIEW",
                        "name": "HI",
                        "list": [
                            {
                                "id": 8,
                                "question": "자기소개 해주세요2",
                                "answer": "나는 공진호",
                                "category": "NETWORK"
                            },
                            {
                                "id": 9,
                                "question": "자기소개 해주세요2",
                                "answer": "나는 공진호",
                                "category": "NETWORK"
                            }
                        ]
                    },
                    {
                        "stepId": 5,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "CODINGTEST",
                        "name": "HI",
                        "list": [
                            {
                                "id": 6,
                                "content": "DFS를 이용한 알고리즘 문제였다. 어려웠다.",
                                "category": "DFS"
                            },
                            {
                                "id": 7,
                                "content": "DFS를 이용한 알고리즘 문제였다. 어려웠다.",
                                "category": "DP"
                            }
                        ]
                    },
                    {
                        "stepId": 12,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "DOCUMENT",
                        "name": "HI",
                        "list": [
                            {
                                "id": 13,
                                "question": "이 회사에 지원한 이유는?",
                                "answer": "돈을 많이 줍니다."
                            },
                            {
                                "id": 14,
                                "question": "장점은 무엇인가요?",
                                "answer": "일을 잘합니다."
                            },
                            {
                                "id": 13,
                                "question": "장기자랑 해보세요.",
                                "answer": "아 싫어요"
                            },
                        ]
                    }
                ]
            },
            {   
                "jobId": 3,
                "title": "삼성",
                "startDate": new Date(2023,0,10),
                "endDate": new Date(2023,0,10),
                "progress": false,
                "size": 4,
                "datas": [
                    {
                        "stepId": 3,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "ETC",
                        "name": "HI",
                        "list": [
                            {
                                "id": 10,
                                "content": "1차면접"
                            },
                            {
                                "id": 11,
                                "content": "1차면접"
                            }
                        ]
                    },
                    {
                        "stepId": 4,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "INTERVIEW",
                        "name": "HI",
                        "list": [
                            {
                                "id": 8,
                                "question": "자기소개 해주세요2",
                                "answer": "나는 공진호",
                                "category": "NETWORK"
                            },
                            {
                                "id": 9,
                                "question": "자기소개 해주세요2",
                                "answer": "나는 공진호",
                                "category": "NETWORK"
                            }
                        ]
                    },
                    {
                        "stepId": 5,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "CODINGTEST",
                        "name": "HI",
                        "list": [
                            {
                                "id": 6,
                                "content": "2023-02-03",
                                "category": "DFS"
                            },
                            {
                                "id": 7,
                                "content": "2023-02-03",
                                "category": "DFS"
                            }
                        ]
                    },
                    {
                        "stepId": 12,
                        "resultStatus": "INPROGRESS",
                        "jobCategory": "DOCUMENT",
                        "name": "HI",
                        "list": [
                            {
                                "id": 13,
                                "question": "이 회사에 지원한 이유는?",
                                "answer": "돈을 많이 줍니다."
                            },
                            {
                                "id": 14,
                                "question": "장점은 무엇인가요?",
                                "answer": "일을 잘합니다."
                            },
                            {
                                "id": 13,
                                "question": "장기자랑 해보세요.",
                                "answer": "아 싫어요"
                            },
                        ]
                    }
                ]
            },
        ]
    },
    getters: {
        getCategoryCnt(state) {
            return state.category.length;
        }
    },
    mutations: {
        GET_DATAS(state, payload) {
            state.jobs = payload
        }

    },
    actions: {
        getJobs({commit}, jobs) {
            axiosConnector.get('job', jobs
            ).then((res)=> {
                commit('GET_DATAS', res.jobs)
            }).catch((err)=> {
                console.log(err)
            })
            

        }

        
    },

}

export default tempJob;