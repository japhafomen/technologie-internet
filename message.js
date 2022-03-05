const MESSAGES = "APP_COURRIEL_MESSAGES";
var messages = getMsg();

// generate the table and it contents.
function sendMessage() {
  let email = document.getElementById("inputEmailD").value;
  let msg = document.getElementById("inputMsg").value;
  const val = {
    id: messages.length + 1,
    email: email,
    msg: msg,
    date:
      new Date().getDate() +
      "/" +
      new Date().getMonth() +
      1 +
      "/" +
      new Date().getFullYear(),

    heure: new Date().toLocaleTimeString("fr-FR", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    }),
  };
  messages.push(val);
  printMsg(val);



  saveMsg(messages);
}

/*function editMsg(id, name, email) {
  messages.forEach((item) => {
    if (item.id == id) {
      if (item.name != name) item.name = name;
      if (item.email != email) item.email = email;
    }
  });

  saveMsg(messages);
}*/

// save in localstorage
function saveMsg(value) {
  localStorage.setItem(MESSAGES, JSON.stringify(value));
}
//take from localstorage
function getMsg() {
  if (JSON.parse(localStorage.getItem(MESSAGES)) != null)
    return JSON.parse(localStorage.getItem(MESSAGES));
  else return [];
}

//print on the web 
function printMsg(item) {
  
  var liSave = document.createElement("li");
  var divContainer = document.createElement("div");
  var divHeader = document.createElement("div");
  var pMsg = document.createElement("p");
  
 

  pMsg.appendChild(document.createTextNode(item.msg));
  divHeader.appendChild(document.createTextNode(item.email+" "+item.heure+" "+item.date));

  divContainer.setAttribute("class", "ms-2 me-auto");
  divHeader.setAttribute("class", "fw-bold");
  pMsg.setAttribute("class", "text-wrap");

  divContainer.appendChild(divHeader);
  divContainer.appendChild(pMsg);
  liSave.appendChild(divContainer);

  liSave.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-start"
  );

  var listOl = document.getElementById("msgList");
  listOl.appendChild(liSave);

  document.getElementById("inputMsg").value = "";
  document.getElementById("inputEmailD").value = "";


  }

