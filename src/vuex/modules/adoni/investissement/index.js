import * as actions from './Actions';
import * as mutations from './mutations';
import * as getters from './Getters';
import defaultstate from './DefaultState';

export default {

    namespaced:true,
    state: defaultstate,
    actions,
    mutations,
    getters
}