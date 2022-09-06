if (document.readyState !== "loading") {
  console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting");
    initializeCode();
  });
}

function initializeCode() {
  const button = document.getElementById("my-button");
  const addData = document.getElementById("add-data");

  button.addEventListener("click", function () {
    console.log("hello world");
    const headerText = document.getElementById("my-header-text");
    headerText.innerText = "My notebook";
  });

  addData.addEventListener("click", function () {
    const ulList = document.getElementById("ul-list");
    const textArea = document.getElementById("text-area");
    var text = textArea.value;

    let newListElement = document.createElement("li");
    newListElement.appendChild(document.createTextNode(text));

    ulList.appendChild(newListElement);
  });
}
