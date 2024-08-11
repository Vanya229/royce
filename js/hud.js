let hud = document.getElementById("hud");
let hudGun = document.getElementById("gun");
let hudAmmo = document.getElementById("ammo1");
let hudAmmo2 = document.getElementById("ammo2");
let hudHealth = document.getElementById("hud_health");
let hudArmor = document.getElementById("hud_armor");
let hudHunger = document.getElementById("hud_hunger");
let hudMoney = document.getElementById("hud_money");

cef.emit("game:hud:setComponentVisible", "interface", false);
cef.emit("game:data:pollPlayerStats", true, 50);
cef.on("game:data:playerStats", (hp, max_hp, arm, breath, wanted, weapon, ammo, max_ammo, money, speed) => {
    hudHealth.innerHTML = Math.round(hp);
    hudArmor.innerHTML = Math.round(arm);
    hudMoney.innerHTML = Math.round(money);
    hudGun.src = './images/guns/' + weapon + '.png';
    hudAmmo.innerHTML = ammo;
    hudAmmo2.innerHTML = max_ammo;
});

cef.on("update-hunger", (value) => {
    hudHunger.innerHTML = Math.round(value);
});

cef.on("show-hud", () => {
    hud.style = "display: block";
});

cef.on("hide-hud", () => {
    hud.style = "display: none";
});