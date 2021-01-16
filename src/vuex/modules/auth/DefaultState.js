const defaultstate = {
    isLoggedIn: !!localStorage.getItem('token'),
  // isLoggedIn: true,
     user: localStorage.getItem('user'),
   // user: localStorage.getItem('user'),
    champVide: false,
    loader: false,
    error: false,
    errorMessage: undefined,
    type_uas: [],
    utilisateur:[],
    roles:[],
    affectation:[],
    affectationGroupeUser:[],
    uniteAdministrativeByUser:[],
    groupe:[],
    equipe_cf:[],
    menu:[],
    module:[],
    ancien_password:false,
    menuModuleSidcf:"",
    serviceCF:[],
    affectationServiceCF:[]

};

 export default defaultstate