"use strict";

module.exports = function(context){
    var admin=context.user.rol==='admin';
    return context.be.tableDefAdapt({
        name:'alumnos',
        title:'Alumnos',
        editable:true,
        editableFieldDef:true,
        fields:[
            {name:'apellido_nombres'   , typeName:'text'                                              },
            {name:'email'              , typeName:'text'                                              },
            {name:'dni'                , typeName:'text'                                              },
            {name:'celular'            , typeName:'text'                                              },
            {name:'localidad'          , typeName:'text'                                              },
            {name:'titulo'             , typeName:'text'                                              },
            {name:'titulo_emisor'      , typeName:'text'                                              },
            {name:'annio_egreso'       , typeName:'text'                                              },
            {name:'posgrado'           , typeName:'text'                                              },
            {name:'posgrado_emisor'    , typeName:'text'                                              },
            {name:'especializacion'    , typeName:'text'                                              },
            {name:'trabaja'            , typeName:'boolean'                                           },
            {name:'trabajo_lugar'      , typeName:'text'                                              },
            {name:'trabajo_des'        , typeName:'text'   , label:'Descripción trabajo'              },
            {name:'experiencia_laboral', typeName:'boolean'                                           },
            {name:'exp_descripcion'    , typeName:'text'   , label:'Descripción experiencia laboral'  },
            {name:'motivos'            , typeName:'text'   , label: '¿cómo se enteró de la maestría?' },
            {name:'area'               , typeName:'text'   , label: 'Área principal o de interés'     },
            {name:'expectativas'       , typeName:'text'   , label: 'Expectativas de la maestría'     },
            {name:'orientacion'        , typeName:'text'   , label: 'Orientación de interés'          },
        ],
        primaryKey:['dni'],
    }, context);
}