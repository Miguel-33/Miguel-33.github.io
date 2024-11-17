document.addEventListener('DOMContentLoaded', async () => {
    const weekend1Container = document.getElementById('weekend-1');
    const weekend2Container = document.getElementById('weekend-2');

    try {
        const response = await fetch('https://your-vercel-app.vercel.app/api/getClassDates');
        const data = await response.json();

        // Process and display the dates as needed
    } catch (error) {
        console.error('Error fetching data:', error);
        weekend1Container.textContent = 'Error loading class dates.';
        weekend2Container.textContent = 'Error loading class dates.';
    }
});
