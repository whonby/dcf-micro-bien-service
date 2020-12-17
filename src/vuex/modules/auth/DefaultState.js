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
    uniteAdministrativeByUser:[],
    groupe:[],
    equipe_cf:[],
    menu:[],
    ancien_password:false,
    menuModuleSidcf:"",

};

 export default defaultstate