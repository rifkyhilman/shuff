dataPorto = [
  {
    imgurl: "../images/portofolio/preweding-1.jpg",
    filter: "prewedding",
  },
  {
    imgurl: "../images/portofolio/product-1.jpg",
    filter: "product",
  },
  {
    imgurl: "../images/portofolio/preweding-2.jpg",
    filter: "prewedding",
  },
  {
    imgurl: "../images/portofolio/product-2.jpg",
    filter: "product",
  },
  {
    imgurl: "../images/portofolio/nature-1.jpg",
    filter: "nature",
  },
  {
    imgurl: "../images/portofolio/concert-1.jpg",
    filter: "concert",
  },
  {
    imgurl: "../images/portofolio/nature-2.jpg",
    filter: "nature",
  },
  {
    imgurl: "../images/portofolio/concert-2.jpg",
    filter: "concert",
  },
  {
    imgurl: "../images/portofolio/preweding-3.jpg",
    filter: "prewedding",
  },
  {
    imgurl: "../images/portofolio/nature-3.jpeg",
    filter: "nature",
  },
  {
    imgurl: "../images/portofolio/nature-4.jpg",
    filter: "nature",
  },
  {
    imgurl: "../images/portofolio/preweding-4.jpg",
    filter: "prewedding",
  },
  {
    imgurl: "../images/portofolio/preweding-5.jpg",
    filter: "prewedding",
  },
  {
    imgurl: "../images/portofolio/preweding-6.jpg",
    filter: "prewedding",
  },
  {
    imgurl: "../images/portofolio/concert-3.jpg",
    filter: "concert",
  },
  {
    imgurl: "../images/portofolio/concert-4.jpg",
    filter: "concert",
  },
  {
    imgurl: "../images/portofolio/concert-5.jpg",
    filter: "concert",
  },
  {
    imgurl: "../images/portofolio/nature-5.jpg",
    filter: "nature",
  },
  {
    imgurl: "../images/portofolio/nature-6.jpeg",
    filter: "nature",
  },
  {
    imgurl: "../images/portofolio/product-3.jpg",
    filter: "product",
  },
  {
    imgurl: "../images/portofolio/product-4.jpg",
    filter: "product",
  },
];


document.getElementById("photos").innerHTML = dataPorto.map(data => {
  return (
    `  
    <div class="col-xl-4 col-md-6 portfolio-item filter-${data.filter}">
      <div class="portfolio-wrap">
        <a href="${data.imgurl}" data-gallery="portfolio-gallery-app" class="glightbox"><img src="${data.imgurl}" class="img-fluid" alt="err[i]"></a>
      </div>
    </div>
    `
  )
}).join(' ');
