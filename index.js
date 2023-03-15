const btn = document.getElementById("dice-btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteId = document.getElementById("quote-id");

btn.addEventListener("click", function () {
  var category = "happiness";
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: { "X-Api-Key": "ZFT0d5W2vBsB3u2ncYKlXw==AbfuYajjObcGoljq" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      quote.innerHTML = '"' + result[0].quote + '"';
      author.innerHTML = "- " + result[0].author;
      quoteId.innerHTML = parseInt(quoteId.innerHTML) + 1;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
});
