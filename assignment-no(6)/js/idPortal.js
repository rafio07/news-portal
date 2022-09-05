

const dynamicID = async (theId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${theId}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCategoryByID(data.data);
    } catch (error) {
        console.log(error);
    }

}

const displayCategoryByID = ids => {

    const categoryDetailsContainer = document.getElementById('category-id-container');
    categoryDetailsContainer.textContent = '';
    const totalItem = document.getElementById('no-item-found');
    totalItem.innerHTML = `
    <h3 class=" text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"> ${ids.length} item
 found for this catagory</h3>
    `;

    const noItem = document.getElementById('toast-danger')
    if (ids.length === 0) {
        noItem.classList.remove('hidden')
    } else {
        noItem.classList.add('hidden');
    }
    ids.forEach(id => {
        const { image_url, title, details, author, total_view
        } = id;

        const div = document.createElement('div');
        div.classList.add('shadow-lg');

        div.innerHTML = `

        <div class="p-4 bg-white mt-4 rounded-lg border  rounded-lg md:p-8 dark:bg-gray-800">

    
        <div class=" margin-zero grid max-w-screen-xl  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="lg:mt-0 lg:col-span-5 lg:flex">
                <img src="${image_url}" alt="mockup">
            </div>
    
            <div class=" margin-left flex flex-wrap mr-auto place-self-center lg:col-span-7">
                <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    ${title ? title : "no title found"}
                </h2>
                <p class="mb-3 text-gray-500 dark:text-gray-400">
                    ${details.slice(0, 400)}...
                </p >


    <div class="flex flex-col justify-center items-centerl  ">
        <div class="flex flex-col justify-center items-center">
            <figcaption class="flex justify-center items-center space-x-3">
                <img class="w-9 h-9 rounded-full"
                    src="${author.img}"
                    alt="profile picture">
                    <div class="space-y-0.5 font-medium dark:text-white text-left mb-3 ">
                        <div>${author.name ? author.name : "no name found"}</div>
                        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                            ${author.published_date ? author.published_date : "no date found"}</div>
                    </div>
            </figcaption>
        </div>

        <div class="flex flex-col justify-center items-centerl">
            <a href="#"
                class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <svg class="mr-2 -ml-1 w-5 h-5  " fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
                    </path>
                </svg>

                ${total_view ? total_view : "No view result found"}M

            </a>
        </div>
        <div class=" mt-4 flex flex-col justify-center items-centerl">
            <a href="#"
                class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button" data-modal-toggle="defaultModal">
                <svg class="mr-2 -ml-1 w-5 h-5  " fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
                    </path>
                </svg>

                View Details

            </a>
            
            
        </div>
        
        
    </div>
            </div >   
        </div >
    </div >



    `;

        categoryDetailsContainer.appendChild(div)
        theLoader(false)



    });
}



function loadId(c) {
    theLoader(true)
    const theId = c;
    dynamicID(theId);
}



const theLoader = isLoading => {
    const loadingSection = document.getElementById('loader');
    if (isLoading) {
        loadingSection.classList.remove('hidden')
    } else {
        loadingSection.classList.add('hidden')
    }



}

const blogs = () => {
    const categoryDetailsContainer = document.getElementById('category-id-container');
    categoryDetailsContainer.textContent = '';

    const blogContainer = document.getElementById('blogContainer');

    blogContainer.classList.remove('hidden')
    blogContainer.innerHTML = `
    <article class="format lg:format-lg">
    <h1 class ="text-4xl" >var vs let vs const</h1>
    <p class="lead">- hoisted (always declared at top of scope, global if none)
        - function scope
        let:
        - block scope
        - not redeclarable
        const:
        - block scope
        - not reassignable
        - not redeclarable</p>
    <h1  class ="text-4xl">Difference between arrow function and regular function</h1>
    <p class="lead">here are two major benefits of using Arrow functions.
        One is that it's a shorter syntax and thus requires less code. The main benefit is that it removes
        the several pain points associated with the this operator.</p>
    <h1  class ="text-4xl">why template string?</h1>
    <p class="lead">Template strings are a powerful feature of modern
        JavaScript released in ES6. It lets us insert/interpolate variables and expressions into strings
        without needing to concatenate like in older versions of JavaScript. It allows us to create strings
        that are complex and contain dynamic elements.</p>


</article>
    `;
    blogContainer.appendChild(divBlog);

}






dynamicID();