const targetDate = new Date('2025-10-20T00:00:00').getTime();

function getDeclension(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector('.countdown').innerHTML = '<p>Турнир начался!</p>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.first').textContent = days;
    document.querySelector('.second').textContent = hours;
    document.querySelector('.third').textContent = minutes;
    document.querySelector('.fouth').textContent = seconds;

    const labels = document.querySelectorAll('.countdown-label');
    labels[0].textContent = getDeclension(days, 'День', 'Дня', 'Дней');
    labels[1].textContent = getDeclension(hours, 'Час', 'Часа', 'Часов');
    labels[2].textContent = getDeclension(minutes, 'Минута', 'Минуты', 'Минут');
    labels[3].textContent = getDeclension(seconds, 'Секунда', 'Секунды', 'Секунд');
}

updateCountdown();
setInterval(updateCountdown, 1000);