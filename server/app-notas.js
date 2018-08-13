"use strict";

var fs = require('fs-extra');
var Path = require('path');
var backendPlus = require("backend-plus");
var MiniTools = require('mini-tools');
var html = require('js-to-html').html;
var bestGlobals = require('best-globals');

var changing = require('best-globals').changing;

class AppNotas extends backendPlus.AppBackend{
    constructor(){
        super();
        this.permisosSuperuser={};
        this.rootPath=Path.resolve(__dirname,'..');
    }
    addLoggedServices(){
        var be = this;
        super.addLoggedServices();
    }
    getProcedures(){
        var be = this;
        return super.getProcedures().then(function(procedures){
           // return procedures;
            return procedures.concat(
                require('./procedures-notas.js').map(be.procedureDefCompleter, be)
            );
        });
    }
    postConfig(){
        return
    }
    getContext(req){
        var be = this;
        var context = super.getContext(req);
        return context;
    }
    getContextForDump(req){
        var context = super.getContextForDump(req);
        context.superuser=true;
        context.puede=this.permisosSuperuser;
        return context;
    }
    getClientSetupForSendToFrontEnd(req){
        var be = this;
        var clientSetup=super.getClientSetupForSendToFrontEnd(req);
        return clientSetup;
    }
    getMenu(context){
        return {menu:[
            {menuType:'table'      , name:'alumnos' },
            {menuType:'table'      , name:'usuarios'},
        ]}
    }
    csss(){
        return super.csss().concat('css/menu.css');
    }
    getTables(){
        return super.getTables().concat([
            'alumnos',
            'usuarios',
        ]);
    }
}

module.exports = AppNotas;
