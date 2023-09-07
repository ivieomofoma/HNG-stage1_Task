function updateDayOfTheWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = daysOfWeek[now.getUTCDay()];

    
}

function updateUTCTime() {
    let currentUTCTime = Date.now();
    let UTCTimeEelement = document.querySelector('[data-testid="currentUTCTime"]');
    UTCTimeEelement.textContent = currentUTCTime;
}

    updateDayOfTheWeek();
    updateUTCTime();

    setInterval(updateDayOfTheWeek, 1000);
    setInterval(updateUTCTime, 1000);