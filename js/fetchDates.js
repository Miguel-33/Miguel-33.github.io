document.addEventListener('DOMContentLoaded', async () => {
    const sections = {
        "Family Mediation": "weekend-family",
        "Civil Mediation": "weekend-civil",
        "Family to Civil": "weekend-family-to-civil",
        "Civil to Family": "weekend-civil-to-family",
        "Domestic Violence": "weekend-domestic-violence",
    };

    const apiEndpoints = {
        "Family Mediation": 'https://miguel-33-github-io.vercel.app/api/getFamilyDates',
        "Civil Mediation": 'https://miguel-33-github-io.vercel.app/api/getCivilDates',
        "Family to Civil": 'https://miguel-33-github-io.vercel.app/api/getFamilyToCivilDates',
        "Civil to Family": 'https://miguel-33-github-io.vercel.app/api/getCivilToFamilyDates',
        "Domestic Violence": 'https://miguel-33-github-io.vercel.app/api/getDomesticViolenceDates',
    };

    // Function to fetch and populate dates for a specific category
    async function fetchAndDisplayDates(category, endpoint) {
        const container = document.getElementById(sections[category]);
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            
            // Assuming the dates are in the `values` property of the response data
            const dates = data.values;

            if (dates && dates.length > 0) {
                const dateList = document.createElement('ul');
                dates.forEach(row => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${row[0]}, Time: ${row[1]} - ${row[2]}`;
                    dateList.appendChild(listItem);
                });
                container.appendChild(dateList);
            } else {
                container.textContent = `No dates available for ${category}`;
            }
        } catch (error) {
            container.textContent = `Error fetching ${category} dates`;
            console.error(`Error fetching ${category} dates:`, error);
        }
    }

    // Loop through all categories and fetch their dates
    for (const [category, endpoint] of Object.entries(apiEndpoints)) {
        await fetchAndDisplayDates(category, endpoint);
    }
});
