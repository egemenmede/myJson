/**
 * User: DeliPenguen
 * Date: 21.04.2014
 * Time: 16:46
 * Web: http://www.delipenguen.com
 */
my = {};
my.jsonLoad = function (key){
    return JSON.parse(localStorage[key]);
};
my.jsonSave = function(obj, key) {
    localStorage[key] = JSON.stringify(obj);
};