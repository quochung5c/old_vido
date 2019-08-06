// Slide đầu trang index
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

/* Biến mất */


function clearHT() {
  ht = document.getElementById('hinhThuc').value;
  hire = document.getElementById('input-1');
  sell = document.getElementById('input-2');
  if (ht === "sell") {
    hire.disabled = true;
    sell.disabled = false;
  } else if (ht == "hire") {
    hire.disabled = false;
    sell.disabled = true;
  } else {
    hire.disabled = false;
    sell.disabled = false;
  }
}
/* FOR BOOK */
$(function() {
  var imagesPreview = function(input, divSlot) { if (input.files) {var soLuongFileUpload = input.files.length;for (i = 0; i < soLuongFileUpload; i++) {var reader = new FileReader(); reader.onload = function(event) {
          var labelClass = "cate-label";var x = $($.parseHTML("<div>"))
            .appendTo(divSlot).addClass("template alert-dismissible");
          $($.parseHTML("<img>")).attr("src", event.target.result).appendTo(x).addClass("icon");
          $($.parseHTML("<label>")).text("Tên sản phẩm (*)").appendTo(x).addClass(labelClass);
          $($.parseHTML("<input>"))
            .attr("type", "text")
            .appendTo(x)
            .addClass("form-control");

          $($.parseHTML("<label>"))
            .text("Mô tả sản phẩm  (*)")
            .appendTo(x)
            .addClass(labelClass);

          $($.parseHTML("<textarea>"))
            .attr("placeholder", "Thêm mô tả...")
            .appendTo(x)
            .addClass("form-control");

          $($.parseHTML("<label>"))
            .text("Hiện trạng sản phẩm")
            .appendTo(x)
            .addClass(labelClass);

          $($.parseHTML("<textarea>"))
            .attr("placeholder", "Hiện trạng sản phẩm") 
            .appendTo(x)
            .addClass("form-control");

          $($.parseHTML("<button>"))
            .attr("class", "close")
            .text("x")
            .appendTo(x)
            .addClass(labelClass, "close x-close")
            .on("click", function() {
              $(".template").addClass("nothing");
              alert("Deleted");
            });
        };
        reader.readAsDataURL(input.files[i]);
      }
    }
  };
  $("#gallery-photo-add").on("change", function() {
    imagesPreview(this, "div.gallery");
  });
});

function bookForm() {
  var resx = document.getElementById('not-for-book');
  var resy = document.getElementById('for-book');
  var x = document.getElementById('book').value;
  if (x === "book") {
    resy.style.display = "block";
    resx.style.display = "none";
    console.log('For book');
  }
  else if (x === "default"){
    resy.style.display = "none";
    resx.style.display = "none";
    console.log('No event found');
  }
  else {
    resy.style.display = "none";
    resx.style.display = "block";
    console.log('Not for book');
  }
  console.log(x)
}
