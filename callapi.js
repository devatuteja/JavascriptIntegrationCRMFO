

//added by dilshad


    function GetRoleName(roleId)
{
    debugger;
    var serverUrl= Xrm.Page.context.getClientUrl();
    var odataSelect= "http://192.168.10.60/api/Account";
    var roleName= null;
    var retrieveReq = new XMLHttpRequest();
    retrieveReq.open("GET", encodeURI(odataSelect), false);
    retrieveReq.setRequestHeader("OData-MaxVersion", "4.0");
    retrieveReq.setRequestHeader("OData-Version", "4.0");
    retrieveReq.setRequestHeader("Accept", "application/json");
    retrieveReq.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    retrieveReq.onreadystatechange = function ()
    {
    if (retrieveReq.readyState == 4 && retrieveReq.status == 200)
        {                               
        var retrieved = JSON.parse(retrieveReq.responseText).d;
        roleName = retrieved.results[0].Name;
        }
    };
    retrieveReq.send();     
    return roleName;
}



function getData(){
debugger;
    var serverUrl= Xrm.Page.context.getClientUrl();
    var odataSelect= "http://192.168.10.60/api/account";
    var AccName= null;
    var retrieveReq = new XMLHttpRequest();
    retrieveReq.open("GET", encodeURI(odataSelect), false);
    retrieveReq.setRequestHeader("OData-MaxVersion", "4.0");
    retrieveReq.setRequestHeader("OData-Version", "4.0");
    retrieveReq.setRequestHeader("Accept", "application/json");
    retrieveReq.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    retrieveReq.onreadystatechange = function ()
    {
    if (retrieveReq.readyState == 4 && retrieveReq.status == 200)
        {                               
        var retrieved = JSON.parse(retrieveReq.responseText);
         var abc = retrieveReq.responseText;
        AccName = retrieved.data[0].AccountName;
        var phone = retrieved.data[0].Phone;
        }
    };
    retrieveReq.send();     
    }
    