document.addEventListener("DOMContentLoaded", function() {
    fetch('/EmkiprodTask/public/data.json')
        .then(response => response.json())
        .then(data => {
            const blogsContainer = document.querySelector('.blogs');
            data.concerts.forEach((concert, index) => {
                const blogElement = document.createElement('div');
                blogElement.classList.add('flex', 'items-center', 'p-0', 'flex-wrap', 'gap-10', 'justify-center', 'w-350', 'lg:w-98');

                blogElement.innerHTML = `
                    <div class="relative flex flex-col w-98 cursor-pointer h-auto bg-transparent rounded-lg shadow-lg group transition-colors group-hover:bg-white duration-300">
                        <div class="relative flex flex-col items-center overflow-hidden rounded-t-lg">
                            <img class="w-98 h-60 object-cover rounded-lg" src="${concert.img}" alt="concert image">
                            <h2 class="absolute bottom-3 text-xl flex flex-nowrap text-white font-semibold w-full text-center p-2 ">
                                ${concert.header.substring(0,30)}
                            </h2>
                        </div>
                        <p class="py-3 px-2 text-white text-base opacity-95 bg-transparent rounded-b-lg group-hover:text-black group-hover:bg-white transition-colors duration-300">
                            ${concert.description.substring(0, 80)}...
                        </p>
                        <div class="absolute w-36 h-10 rounded m-24 inset-0 flex items-center justify-center bg-pink-500 bg-opacity-100 text-white text-lg font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 read-more-btn" data-index="${index}">
                            Read More
                        </div>
                    </div>
                `;

                blogsContainer.appendChild(blogElement);
            });

            //  "Read More" buttons
            const readMoreButtons = document.querySelectorAll('.read-more-btn');
            readMoreButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.dataset.index;
                    localStorage.setItem('selectedConcert', JSON.stringify(data.concerts[index]));
                    window.location.href = 'detail.html';
                });
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});
