
const deafaultCatagory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCategory(data.data.news_category);
    } catch (error) {
        console.log(error);
    }

}
const displayCategory = cats => {
    const ul = document.getElementById('default-catagory');
    cats.forEach(cat => {
        const { category_name, category_id } = cat;
        const li = document.createElement('li');
        li.classList.add('mr-2');
        li.innerHTML = `
        <button id = ""  onclick="loadId('${category_id}')"type="button"
        class=" text-2xl inline-block p-4 color-muted hover:text-purple ">${category_name}</button>
        `;
        ul.appendChild(li);

    });

}


deafaultCatagory();
