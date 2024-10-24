document.addEventListener('DOMContentLoaded', async () => {
    const weekend1Container = document.getElementById('weekend-1');
    const weekend2Container = document.getElementById('weekend-2');

    try {
        const response = await fetch('https://miguel-33.github.io/backend/getClassDates'); // Use your backend URL here
        const data = await response.json();
        
        // Assuming the dates are in the values property of the response data
        const dates = data.values;

        // Check if we have enough dates (at least 6)
        if (dates && dates.length >= 6) {
            const dateListWeekend1 = document.createElement('ul');
            const dateListWeekend2 = document.createElement('ul');
            
            // Get first 3 dates for 1st weekend
            for (let i = 0; i < 3; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = `${dates[i][0]}, Time: ${dates[i][1]} - ${dates[i][2]}`;
                dateListWeekend1.appendChild(listItem);
            }

            // Get next 3 dates for 2nd weekend
            for (let i = 3; i < 6; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = `${dates[i][0]}, Time: ${dates[i][1]} - ${dates[i][2]}`;
                dateListWeekend2.appendChild(listItem);
            }

            // Append the lists to their respective containers
            weekend1Container.appendChild(dateListWeekend1);
            weekend2Container.appendChild(dateListWeekend2);
        } else {
            // If we don't have enough dates, show a message
            weekend1Container.textContent = 'Not enough dates available for 1st weekend';
            weekend2Container.textContent = 'Not enough dates available for 2nd weekend';
        }
    } catch (error) {
        weekend1Container.textContent = 'Error fetching class dates';
        weekend2Container.textContent = 'Error fetching class dates';
        console.error('Error:', error);
    }
});
