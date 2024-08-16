
document.addEventListener("DOMContentLoaded", function() {
    const concertDetails = JSON.parse(localStorage.getItem('selectedConcert'));
    if (concertDetails) {
        const concertContainer = document.getElementById('concert-details');
        concertContainer.innerHTML = `
            <img src="${concertDetails.img}" alt="concert image" class="w-full h-full object-cover rounded-lg mb-6">
            <h1 class=" text-base md:text-4xl font-bold mb-4">${concertDetails.header}</h1>
            <p class="text-base md:text-lg text-textCol">${concertDetails.description}</p>
        `;
    } else {
       
        const concertContainer = document.getElementById('concert-details');
        concertContainer.innerHTML = '<p>No concert details available.</p>';
    }
});
