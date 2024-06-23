dataPorto = [
  {
    imgurl: "../images/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg",
    filter: "branding",
  },
  {
    imgurl: "../images/portofolio image/1.jpeg",
    filter: "product",
  },
  {
    imgurl: "../images/portofolio image/14.jpg",
    filter: "branding",
  },
  {
    imgurl: "../images/Tanpa Judul.jpeg",
    filter: "product",
  },
  {
    imgurl: "../images/img2.jpg",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/13.jpg",
    filter: "books",
  },
  {
    imgurl: "../images/aboutUs.jpeg",
    filter: "app",
  },
  {
    imgurl: "../images/2213.jpg",
    filter: "books",
  },
  {
    imgurl: "../images/3333.jpg",
    filter: "branding",
  },
  {
    imgurl: "../images/Hero.jpg",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/10.jpg",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/2.jpg",
    filter: "branding",
  },
  {
    imgurl: "../images/portofolio image/3.jpg",
    filter: "branding",
  },
  {
    imgurl: "../images/portofolio image/4.jpg",
    filter: "branding",
  },
  {
    imgurl: "../images/portofolio image/5.jpg",
    filter: "books",
  },
  {
    imgurl: "../images/portofolio image/6.jpeg",
    filter: "books",
  },
  {
    imgurl: "../images/portofolio image/7.png",
    filter: "books",
  },
  {
    imgurl: "../images/portofolio image/8.jpg",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/15.jpg",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/11.jpeg",
    filter: "product",
  },
  {
    imgurl: "../images/portofolio image/12.jpg",
    filter: "product",
  },
];


document.getElementById("photos").innerHTML = dataPorto.map(data => {
  return (
    `  
    <div class="col-xl-4 col-md-6 portfolio-item filter-${data.filter}">
      <div class="portfolio-wrap">
        <a href="${data.imgurl}" data-gallery="portfolio-gallery-app" class="glightbox"><img src="${data.imgurl}" class="img-fluid" alt="err[i]"></a>
        <div class="portfolio-info">
          <h4>${data.filter}</h4>
        </div>
      </div>
    </div>
    `
  )
}).join(' ');
