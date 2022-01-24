const inbox = document.querySelector("#inbox");
const star = document.querySelector("#star");
const sent = document.querySelector("#sentMail");
const drafts = document.querySelector("#drafts");

inbox.addEventListener("click", () => {
  inbox.style.backgroundColor = "#EDE1FD";
  inbox.style.color = "#6200EE";
  star.style.color = "black";
  star.style.backgroundColor = "white";
  sent.style.color = "black";
  sent.style.backgroundColor = "white";
  drafts.style.color = "black";
  drafts.style.backgroundColor = "white";
});
star.addEventListener("click", () => {
    star.style.backgroundColor = "#EDE1FD";
    star.style.color = "#6200EE";
    inbox.style.backgroundColor = "white";
    inbox.style.color = "black";
    sent.style.color = "black";
    sent.style.backgroundColor = "white";
    drafts.style.color = "black";
    drafts.style.backgroundColor = "white";
});
sent.addEventListener("click", () => {
    sent.style.backgroundColor = "#EDE1FD";
    sent.style.color = "#6200EE";
    inbox.style.backgroundColor = "white";
    inbox.style.color = "black";
    star.style.color = "black";
    star.style.backgroundColor = "white";
    drafts.style.color = "black";
    drafts.style.backgroundColor = "white";
});
drafts.addEventListener("click", () => {
    drafts.style.backgroundColor = "#EDE1FD";
    drafts.style.color = "#6200EE";
    inbox.style.backgroundColor = "white";
    inbox.style.color = "black";
    star.style.color = "black";
    star.style.backgroundColor = "white";
    sent.style.color = "black";
    sent.style.backgroundColor = "white";
});
