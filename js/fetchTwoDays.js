document.addEventListener('DOMContentLoaded', async () => {
    const day1Container = document.getElementById('day-1');
    const day2Container = document.getElementById('day-2');

    try {
        const response = await fetch('https://miguel-33-github-io.vercel.app/getClassDates'); // Use your backend URL here
        const data = await response.json();
        
        // Assuming the dates are in the values property of the response data
        const dates = data.values;

        // Check if we have enough dates (at least 2)
        if (dates && dates.length >= 2) {
            const dateListDay1 = document.createElement('ul');
            const dateListDay2 = document.createElement('ul');
            
            // Get the first date for Day 1
            const listItemDay1 = document.createElement('li');
            listItemDay1.textContent = `${dates[0][0]}, Time: ${dates[0][1]} - ${dates[0][2]}`;
            dateListDay1.appendChild(listItemDay1);

            // Get the second date for Day 2
            const listItemDay2 = document.createElement('li');
            listItemDay2.textContent = `${dates[1][0]}, Time: ${dates[1][1]} - ${dates[1][2]}`;
            dateListDay2.appendChild(listItemDay2);

            // Append the lists to their respective containers
            day1Container.appendChild(dateListDay1);
            day2Container.appendChild(dateListDay2);
        } else {
            // If we don't have enough dates, show a message
            day1Container.textContent = 'Not enough dates available for Day 1';
            day2Container.textContent = 'Not enough dates available for Day 2';
        }
    } catch (error) {
        day1Container.textContent = 'Error fetching class dates';
        day2Container.textContent = 'Error fetching class dates';
        console.error('Error:', error);
    }
});
