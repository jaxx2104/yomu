import * as types from "./types"

export const state = () => ({
  isLoading: false
})

export const getters = {}

export const mutations = {
  [types.SET_LOADING](state, isLoading) {
    state.isLoading = isLoading || !state.isLoading
  }
}

export const actions = {}
