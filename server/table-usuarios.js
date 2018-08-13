"use strict";

module.exports = function(context){
    var admin = context.user.rol==='admin';
    return context.be.tableDefAdapt({
        name:'usuarios',
        title:'Usuarios',
        editable:admin,
        fields:[
            {name:'usuario'               , typeName:'text'   , nullable:false},
            {name:'clave'                 , typeName:'text'                   },
            {name:'activo_hasta'          , typeName:'date'                   },
            {name:'bloqueado_desde'       , typeName:'date'                   },
            {name:'rol'                   , typeName:'text'                   },
        ],
        primaryKey:['usuario']
    });
}