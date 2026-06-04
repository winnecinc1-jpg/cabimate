const products = [
  {
    skus: [
      "A25-000",
      "A25-128",
      "A25-192",
      "A25-320",
      "A25-A18"
    ],
    name: "belfast",
    url: "/details/Belfast.html"
  },

  {
    skus: [
      "A23-000",
      "A23-128",
      "A23-160",
      "A23-320"
    ],
    name: "bradford",
    url: "/details/Bradford.html"
  },

  {
    skus: [
      "A32-000",
      "A32-128",
      "A32-160",
      "A32-320"
    ],
    name: "brimingham",
    url: "/details/Briminghan.html"
  },

  {
    skus: [
      "A24-000",
      "A24-128",
      "A24-160",
      "A24-320"
    ],
    name: "bristol",
    url: "/details/Bristol.html"
  }
];

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {

      const keyword = this.value.trim().toLowerCase();

      const match = products.find(product =>
        product.name.toLowerCase().includes(keyword) ||
        product.skus.some(sku =>
          sku.toLowerCase().includes(keyword)
        )
      );

      if (match) {
        window.location.href = match.url;
      } else {
        alert("No product found");
      }
    }
  });
}