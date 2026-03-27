import Duolingo from 'duolingo-streak-keeper';

(async () => {
  try {
    const duo = new Duolingo(process.env.DUOLINGO_JWT);
    console.log("Încep hack-ul pentru 90 de zile...");
    
    for (let i = 0; i < 90; i++) {
      await duo.getClassicXP();
      console.log(`Lecția ${i + 1} finalizată!`);
    }

    console.log("Gata! Streak-ul tău ar trebui să fie actualizat.");
  } catch (error) {
    console.error("Eroare:", error);
    process.exit(1);
  }
})();
