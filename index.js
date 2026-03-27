import Duolingo from './duo.js';

(async () => {
  try {
    // Verificăm dacă avem cheia (Token-ul)
    if (!process.env.DUOLINGO_JWT) {
      throw new Error("Lipsește DUOLINGO_JWT din Settings -> Secrets!");
    }

    const duo = new Duolingo(process.env.DUOLINGO_JWT);
    console.log("Pornesc hack-ul pentru 90 de zile...");
    
    for (let i = 0; i < 90; i++) {
      await duo.getClassicXP();
      console.log(`Lecția ${i + 1} terminată cu succes!`);
    }

    console.log("Gata! Verifică-ți streak-ul pe Duolingo.");
  } catch (error) {
    console.error("Eroare la rulare:", error);
    process.exit(1);
  }
})();
