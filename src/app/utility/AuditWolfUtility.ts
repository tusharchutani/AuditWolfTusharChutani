import * as _ from "lodash";


export function sortData(data, params){
    return _.filter(data, function(item){
        for (var property in params) {
        if((item[property] != undefined || item[property] != null ) && item[property].toLowerCase() != params[property].toLowerCase()){
            return false
        }
        }
        return true;
    });
}
