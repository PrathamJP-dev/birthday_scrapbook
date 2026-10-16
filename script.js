document.getElementById("nm").textContent = CONFIG.name;
document.getElementById("nm2").textContent = CONFIG.name;
const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2, "0");
const words = {18:"EIGHTEEN",19:"NINETEEN",20:"TWENTY",21:"TWENTY-ONE",22:"TWENTY-TWO",23:"TWENTY-THREE",24:"TWENTY-FOUR",25:"TWENTY-FIVE"};

async function sha(t) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
}

function pop() {
  for (let k = 0; k < 30; k++) {
    const e = document.createElement("div");
    e.className = "pop";
    const z = 16 + Math.random() * 40;
    e.style.width = e.style.height = z + "px";
    e.style.left = Math.random() * 100 + "vw";
    e.style.bottom = "-60px";
    e.style.animationDelay = Math.random() * 0.7 + "s";
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 3400);
  }
}

function showAge(d, m, y) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const bd = new Date(now.getFullYear(), m - 1, d);
  const turning = now.getFullYear() - y;
  const cap = $("cap");
  if (today.getTime() === bd.getTime()) cap.textContent = "Today is the day. Welcome to " + turning + "!";
  else if (today > bd) cap.textContent = "Another year of you, and it keeps getting better.";
  else {
    const days = Math.ceil((bd - today) / 864e5);
    cap.textContent = "Only " + days + " day" + (days === 1 ? "" : "s") + " to go until you turn " + turning + ".";
  }
  $("age").textContent = turning;
  $("ageword").textContent = words[turning] || turning;
}

async function unlock() {
  const box = $("box"), msg = $("msg");
  const d = parseInt($("dd").value, 10), m = parseInt($("mm").value, 10), y = parseInt($("yy").value, 10);
  if (!crypto.subtle) { msg.textContent = "Open this over https or localhost (see README)."; return; }
  const ok = d && m && y && (await sha(pad(d) + pad(m) + y)) === CONFIG.dobHash;
  if (ok) {
    pop();
    showAge(d, m, y);
    $("lock").style.display = "none";
    $("site").style.display = "block";
    window.scrollTo(0, 0);
  } else {
    msg.textContent = "Oops, that is not the right date. Try again!";
    box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
  }
}

$("go").addEventListener("click", unlock);
["dd", "mm", "yy"].forEach((id, i, a) => {
  const el = $(id);
  el.addEventListener("input", () => { if (el.value.length >= el.maxLength && a[i + 1]) $(a[i + 1]).focus(); });
  el.addEventListener("keydown", e => { if (e.key === "Enter") unlock(); });
});
