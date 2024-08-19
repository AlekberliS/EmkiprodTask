
document.addEventListener("DOMContentLoaded", function() {
    const concertDetails = JSON.parse(localStorage.getItem('selectedPost'));
    const concertContainer = document.getElementById('concert-details');

    if (concertDetails) {
        concertContainer.innerHTML = `
            <img src="${concertDetails.imageSrc}" alt="concert image" class="w-full h-full object-cover rounded-lg mb-6">
            <h1 class="text-base md:text-4xl font-bold mb-4">${concertDetails.title}</h1>
            <p class="text-xs md:text-lg text-textCol">${concertDetails.content}</p>
        `;

    } else {
        concertContainer.innerHTML = '<p>No concert details available.</p>';
    }
});
