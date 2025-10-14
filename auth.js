const authSection = document.getElementById('auth-section');
const playerSection = document.getElementById('player-section');
const welcome = document.getElementById('welcome');

auth.onAuthStateChanged(user => {
  if(user){
    authSection.style.display = "none";
    playerSection.style.display = "block";
    welcome.innerText = `Hoş geldin, ${user.email}`;
  } else {
    authSection.style.display = "block";
    playerSection.style.display = "none";
  }
});

function register(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      db.collection('users').doc(userCredential.user.uid).set({
        email: email,
        tarih: new Date()
      });
      alert("✅ Kayıt başarılı!");
    })
    .catch(err => alert(err.message));
}

function login(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email,password)
    .catch(err => alert(err.message));
}

function logout(){
  auth.signOut();
}
