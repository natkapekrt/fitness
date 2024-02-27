let totalExercises = 0;
let totalTime = 0;

function recordActivity() {
    const activityType = document.getElementById('activity-type').value;
    const duration = parseInt(document.getElementById('duration').value);
    const distance = parseInt(document.getElementById('distance').value);
    const notes = document.getElementById('notes').value;

    if (isNaN(duration) || duration <= 0 || activityType.trim() === '') {
        alert('Please enter valid activity information.');
        return;
    }

    totalExercises++;
    totalTime += duration;

    updateSummary();

    const activityItem = document.createElement('li');
    activityItem.innerHTML = `
        <strong>${activityType}</strong> - ${duration} minutes
        ${distance ? `- ${distance} km` : ''}
        ${notes ? `<br><em>${notes}</em>` : ''}
    `;
    document.getElementById('activity-list').appendChild(activityItem);
}

function updateSummary() {
    document.getElementById('total-exercises').innerText = totalExercises;
    document.getElementById('total-time').innerText = totalTime;
}