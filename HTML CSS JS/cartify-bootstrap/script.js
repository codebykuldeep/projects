let productCount = 0;

const spinner = document.getElementById("spinner");
const productContainer = document.querySelector(".product-container");
const productList = document.querySelector(".product-list");
const loadBtn = document.getElementById("get-more");

const API_URL = "https://fakestoreapi.com/products";
let currentDataURL =API_URL ;

let productCardArray;
// const spinnerModal =document.querySelector('#spinnerModal');
const modalContent = document.querySelector(".modal-content");

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
  
};

const insertData = async (url) => {
  const data = await getData(url);

  const arr = data.slice(productCount, productCount + 6);
  productCount += 6;
  arr.forEach((item) => {
    let html = `<div class="col" >
                    <div class="card flex-row">
                      <div class='img-box'><img src="${item.image}" alt="..." /></div>
                      <div class="card-body  d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title product-card" data-bs-toggle="modal"  data-bs-target="#Modal" data-id=${item.id}
                            >${item.title}
                            </h5>
                            <h6 class="card-subtitle">${item.category}</h6>
                        </div>
                       
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="price">$${item.price}</div>
                            <a class="btn btn-outline-secondary">Buy</a>
                        </div>
                      </div>
                    </div>
                  </div>`;

    productList.insertAdjacentHTML("beforeend", html);
  });

  productCardArray = document.querySelectorAll(".product-card");
  productCardArray.forEach((card) => {
    card.addEventListener("click", (e) => {
    
      openModal(e);
    });
  });
};

const UpdateUI = async (url) => {
  spinner.classList.remove("d-none");
  productContainer.classList.add("d-none");
  productList.innerHTML='';

  await insertData(url);

  spinner.classList.toggle("d-none");
  productContainer.classList.toggle("d-none");
};


loadBtn.addEventListener("click", async () => {
  loadBtn.innerHTML = `<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>`;

  await insertData(currentDataURL);

  loadBtn.innerHTML = "Load More";
});

UpdateUI(API_URL);

let spinnerHTML = `<div class="spinner text-center my-5" id="spinnerModal">
            <div
              class="spinner-border spinner-border-xl"
              style="width: 5rem; height: 5rem"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`;

async function openModal(e) {
  modalContent.innerHTML = spinnerHTML;
  // console.log(e.target.dataset);

  const product = await getData(`${API_URL}/${e.target.dataset.id}`);
  

  let html = `<div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              onclick='switchSpinnerModal()'></button>
            </div>

            <div class="modal-body flex-row">
                <div class='img-box text-center'><img src="${product.image}" alt="..." /></div>
                <div class="card-body  d-flex flex-column justify-content-between mt-3">
                  <div>
                      <h6>Description</h6>
                      <p class="card-text">
                        ${product.description}
                      </p>
                      <h6 class="card-subtitle">Category : ${product.category}</h6>
                  </div>
                 
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="price">Price : $${product.price}</div>
                      <a href="#" class="btn btn-outline-secondary">Buy</a>
                      <div onclick='switchSpinnerModal()>here</div>
                  </div>
                </div>
              </div>
              
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>`;
  modalContent.innerHTML = html;
  // spinnerModal.classList.toggle('d-none')
}
function switchSpinnerModal() {
  // spinnerModal.classList.toggle('d-none');
  modalContent.innerHTML = spinnerHTML;
}


//GET PRODUCT BY CATEGORY
const categoryCard = document.querySelectorAll('.category-item');

categoryCard.forEach(category=>{
  category.addEventListener('click',(e)=>{
    console.log(category.dataset);
    let getDataURL =`${API_URL}/${category.dataset.category}`;


    //UI UPDATION
    productCount=0;
    UpdateUI(getDataURL);
    currentDataURL=getDataURL;
  })
})
