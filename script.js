```
const startDate = new Date("2024-08-15T09:15:00").getTime();

// Função para atualizar o contador
function updateTime() {
    const now = new Date().getTime();
    const diff = now - startDate;
    
    // Cálculos de tempo
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.42));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.42)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Exibindo o contador no site
    document.getElementById("time").innerHTML = `years anos,{months} meses, days dias,{hours} horas, minutes minutos,{seconds} segundos`;
}

// Atualizar o contador a cada segundo
setInterval(updateTime, 1000);
```
