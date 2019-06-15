function initializeReadMore() {
  const elements = Array.from(document.querySelectorAll(".content"));
  elements.forEach((element) => {
    if (element.clientHeight > 130) {
      element.style.height = "6em";
      element.classList.add('canExpand');
      const button = document.createElement("button");
      button.onclick = growDiv;
      button.textContent = "Read More";
      insertAfter(element, button);
    }
  })
}
initializeReadMore();


function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function growDiv(e) {
  const button = e.target;
  const element = button.previousElementSibling;
  if (element.classList.contains("expanded")) {
    element.style.height = "6em";
    button.textContent = "Read More";
  } else {
    element.style.height = element.scrollHeight + "px";
    button.textContent = "Show Less";
  }
  element.classList.toggle('expanded');
}