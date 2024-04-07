$('h1,h2,h3,h4,span,li,label,img').bind('selectstart mousedown', function () { return false; });
$('h1,h2,h3,h4,span,li,label,img').on('mousemove', function () {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else {
    document.selection.empty();
  }
});


//------------------navigation------------------------
$('label[for="checkbox-1"]').click();
(function ($) {
  $.fn.nextForm = function () {
    $(this).click(function () {
      var parent = $(this).parent();
      parent.next().css('display', 'block');
      parent.css('display', 'none');
      if (parent.attr('id') == "formOne") {
        $('label[for="checkbox-2"]').click();
      } else if (parent.attr('id') == "formTwo") {
        $('label[for="checkbox-3"]').click();
      } else if (parent.attr('id') == "formThree") {
        $('label[for="checkbox-4"]').click();
      };
    });
  };
})(jQuery);


(function ($) {
  $.fn.previousForm = function () {
    $(this).click(function () {
      var parent = $(this).parent();
      parent.prev().css('display', 'block');
      parent.css('display', 'none');
      if (parent.attr('id') == "formTwo") {
        $('label[for="checkbox-1"]').click();
      } else if (parent.attr('id') == "formThree") {
        $('label[for="checkbox-2"]').click();
      } else if (parent.attr('id') == "formFour") {
        $('label[for="checkbox-3"]').click();
      };
    });
  };
})(jQuery);


(function ($) {
  $.fn.nav = function () {
    $(this).click(function () {
      if ($(this).attr('for') == "checkbox-1") {
        $('.formWrapper').each(function (index, value) {
          $(this).css('display', 'none');
        });
        $('#formOne').css('display', 'block');
      } else if ($(this).attr('for') == "checkbox-2") {
        $('.formWrapper').each(function (index, value) {
          $(this).css('display', 'none');
        });
        $('#formTwo').css('display', 'block');
      } else if ($(this).attr('for') == "checkbox-3") {
        $('.formWrapper').each(function (index, value) {
          $(this).css('display', 'none');
        });
        $('#formThree').css('display', 'block');
      } else if ($(this).attr('for') == "checkbox-4") {
        $('.formWrapper').each(function (index, value) {
          $(this).css('display', 'none');
        });
        $('#formFour').css('display', 'block');
      }
    });
  };
})(jQuery);

$('.next').nextForm();
$('.previous').previousForm();
$('.nav-label').nav();


//------------------select------------------------
$("body").on('click', selectMenu);

function selectMenu(event) {
  var $target = $(event.target);
  if ($($target).hasClass('line-select-arrow-inner')
    || $($target).hasClass('dimension-select-arrow-inner')) {
    var menu = $($target).parent().next();
    showHideMenu(menu);
  } else if ($($target).hasClass('line-select-arrow-inner-triangle')
    || $($target).hasClass('dimension-select-arrow-inner-triangle')) {
    var menu = $($target).parent().parent().next()
    showHideMenu(menu);
  } else {
    $(".line-select-options, .dimension-select-options").attr('data-select', 0);
    $(".line-select-options, .dimension-select-options").hide();
  }
}

function showHideMenu(elem) {
  $(".line-select-options, .dimension-select-options").hide();
  if (elem.attr('data-select') == 0) {
    elem.attr('data-select', 1);
    elem.slideDown(200);
  } else if (elem.attr('data-select') == 1) {
    elem.attr('data-select', 0);
    elem.slideUp(200);
  }
}

//-----------------select-menu------------------------

$("#formTwo .line-select-options li").click({ text: "Название ингредиента" }, selectElem);
$("#formThree .line-select-options li").click({ text: "Выбирите из списка" }, selectElem);

function selectElem(event) {
  var text = this.innerHTML.slice(1);
  var spanInfo = $(this).parent().parent().prev().prev();
  $(this).siblings().each(function () {
    $(this).removeClass('selected-dimension');
  });
  $(this).addClass('selected-dimension');
  if ($(this).text().slice(1) != spanInfo.text()) {
    spanInfo.text(text);
    spanInfo.addClass('active');
  } else {
    spanInfo.text(event.data.text);
    spanInfo.removeClass('active');
    $(this).siblings().each(function () {
      $(this).removeClass('selected-dimension');
    });
  }
  $(this).parent().parent().hide();
}

//-----------------quantity------------------------

$(".line-quantity-arrows div").on('click', quantityChanger);

function quantityChanger(event) {
  var inp = $(this).parent().prev();
  var inpVal = inp.val();
  if ($(this).hasClass("line-quantity-arrows-up")) {
    inpVal++;
  } else if ($(this).hasClass("line-quantity-arrows-down")) {
    inpVal--;
    if (inpVal < 1) {
      inpVal = 1;
    }
  }
  inp.val(inpVal);
}

//-----------------dimension-select-menu------------------------

$("#formTwo .dimension-select-options li").click({ text: "мл" }, dimensionSelectElem);
$("#formThree .dimension-select-options li").click({ text: "5 мин." }, dimensionSelectElem);

function dimensionSelectElem(event) {
  var text = this.innerHTML.slice(1);
  var spanInfo = $(this).parent().parent().prev().prev();
  $(this).siblings().each(function () {
    $(this).removeClass('selected-dimension');
  });
  $(this).addClass('selected-dimension');
  if ($(this).text().slice(1) != spanInfo.text()) {
    spanInfo.text(text);
  } else {
    spanInfo.text(event.data.text);
    $(this).siblings().each(function () {
      $(this).removeClass('selected-dimension');
    });
  }
  $(this).parent().parent().hide();
}


//-----------------checked goblet------------------------

(function ($) {
  $.fn.checkedGoblet = function () {
    $(this).click(function () {
      if ($(this).is(':checked')) {
        $(this).next().find('span').text("Выбрано");
      } else {
        $(this).next().find('span').text("Выбрать");
      }
    });
  };
})(jQuery);

$('.gobletChoose').checkedGoblet();



