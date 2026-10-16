// EDIT ME
const CONFIG = {
  name: "NIDHI",
  // SHA-256 of the birthdate written as DDMMYYYY (no slashes). Currently 17102004.
  // To make a new one, open the browser console and run:
  // crypto.subtle.digest("SHA-256", new TextEncoder().encode("17102004")).then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("")))
  dobHash: "ff4a3e6b596ef3a9d52428b9f3e09e5356dc539a34ea14d0e934077fd53f95de"
};
