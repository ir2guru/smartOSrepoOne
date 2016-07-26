
function CheckandCreate(){
var db;
var dbVersion = 1.0;
//openDB();
}

function openDB(){
var openReq = window.indexedDB.open("sampleDatabase");
openReq.onupgradeneeded = function (event) {
    var db = event.target.result;
    db.createObjectStore("todo", {autoIncrement: true});
};
openReq.onsuccess = function (event) {
    var db = event.target.result,
        sampleItem = { 
            todo: "my todo item",
            added_on: new Date()
        };
    var addReq = db.transaction("todo", "readwrite").objectStore("todo").add(sampleItem);
    addReq.onsuccess = function (event) {
        console.log("Operation completed successfully");
    };
    addReq.onerror = function (event) {
        console.log("Operation failed");
    };
}
openReq.onerror = function (event) {
    console.log("Operation failed");
}
}