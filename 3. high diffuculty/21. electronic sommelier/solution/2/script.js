$('#add_ing_form').click(function () {
  var ing_name = $('#name_ing').val();
  var ing_num = $('#num_ing').val();
  var ing_type_size = $('#type_size_ing').val();
  $('.ingrid-list').append('<li>');
  $('.ingrid-list > li:last-child').append('<p>');
  $('.ingrid-list > li:last-child > p').text(ing_name);
  $('.ingrid-list > li:last-child').append('<span>');
  $('.ingrid-list > li:last-child > span').text(ing_num + " ");
  $('.ingrid-list > li:last-child > span').append('<span>');
  $('.ingrid-list > li:last-child > span > span').text(ing_type_size);
  $('.ingrid-list > li:last-child').append('<div>');
  $('.ingrid-list > li:last-child > div').text('+');
});
$(function () {
  $('.scroll-pane').jScrollPane({ showArrows: true, scrollbarWidth: 20, verticalDragMaxHeight: 63, autoReinitialise: true, verticalDragMaxWidth: 2, stickToBottom: true });
  $('.core-block').jScrollPane({ showArrows: true, scrollbarWidth: 20, verticalDragMaxHeight: 103 });
  $('.method-block').jScrollPane({ showArrows: true, scrollbarWidth: 20, verticalDragMaxHeight: 20 });
  $('.jewel-block').jScrollPane({ showArrows: true, scrollbarWidth: 20, verticalDragMaxHeight: 123 });
  $('.tag-block').jScrollPane({ showArrows: true, scrollbarWidth: 20, verticalDragMaxHeight: 123 });

  $('.first-block > div > p:last-child > span').text($('.bokal-block > div > label').length);
  $('.second-block > div > p:last-child > span').text($('.type-block label').length);
  $('.third-block > div > p:last-child > span').text($('.strong-block label').length);
  $('.fourth-block > div > p:last-child > span').text($('.core-block label').length);
  $('.met-b > div > p:last-child > span').text($('.method-block label').length);
  $('.jew-b > div > p:last-child > span').text($('.jewel-block label').length);
  $('.tag-b > div > p:last-child > span').text($('.tag-block label').length);
});
$('.no-scroll').mousewheel(function () {
  return false;
});
$('.first-block > input').change(function () {
  check_block();
});
function check_block() {
  for (i = 0; i <= $('.first-block > input').length; i++) {
    if ($('#ig_' + i).is(":checked")) {
      var clas = i;
    };
  }
  /* 
    Всё что без преставки "_alc" и "_cor" относится к типам.
  
    Типы(16):					_cor(14):				Бокалы(8):
    1 - Аперитивы				1 - Абсент				1 - Для белого вина
    2 - Диджестивы				2 - Водка				2 - Рюмка
    3 - Горячие					3 - Джин				3 - Тумблер(рокс)
    4 - Молочные				4 - Виски				4 - Бокал для пива
    5 - Десертные				5 - Бренди				5 - Бокал для шампанского
    6 - Слоистые				6 - Ликер				6 - Бокал для мартини
    7 - Дейзи					7 - Кальвадос			7 - Шот(буллет)
    8 - Джулепы					8 - Текила    			8 - Коньячка
    9 - Смеш					9 - Квас				
    10 - Физы					10 - Вино
    11 - Сангари				11 - Ром
    12 - Кулеры					12 - Пиво
    13 - Слинги 				13 - Сакэ
    14 - Коблеры				14 - Самогон
    15 - Кардинал
    16 - Эг-Ног
  
    ********************************************************************			
    _alc(4):
    1 - Безалкогольные
    2 - Слабоградусные		6..15%
    3 - Полукрепкие		16..22%
    4 - Крепкие 	23%
  */
  var vini = new Array(4, 5, 7, 8, 13, 15);
  var vini_cor = new Array(1, 2, 3, 4, 5, 6, 8, 11, 13, 14);
  var rumk = new Array(1, 6, 10, 12, 15, 16);
  var rumk_alc = new Array(1, 0);
  var rumk_cor = new Array(10, 12);
  var rock = new Array(1, 2, 3, 6);
  var rock_cor = new Array(8, 13);
  var beer = new Array(1, 4, 5, 15);
  var beer_cor = new Array(1, 2, 3, 4, 5, 6, 8, 11, 13);
  var sham = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  var sham_alc = new Array(4, 1);
  var sham_cor = new Array(1, 2, 3, 4, 5, 8, 11, 13);
  var mart = new Array(1, 3, 5, 7, 9, 11, 13, 15);
  var mart_cor = new Array(1, 9, 10, 12, 14);
  var shot = new Array(2, 4, 6, 8, 10, 12, 14, 16);
  var shot_alc = new Array(1, 0);
  var shot_cor = new Array(1, 9, 10, 12);
  var conc = new Array(1, 4, 7, 10, 13, 16);
  var tb_path = $('.type-block input');
  var sb_path = $('.strong-block input');
  var cb_path = $('.core-block input');
  var tb_id = "#" + tb_path.attr('id').replace(/[0-9]/g, '');
  var sb_id = "#" + sb_path.attr('id').replace(/[0-9]/g, '');
  var cb_id = "#" + cb_path.attr('id').replace(/[0-9]/g, '');
  tb_path.each(function (a) {
    a++;
    var typ = tb_id + a;
    $(typ).attr("disabled", false);
    if ($(typ).is(":checked")) {
      $(typ).attr("checked", false);
    }
  });
  sb_path.each(function (a) {
    a++;
    var typ = sb_id + a;
    $(typ).attr("disabled", false);
    if ($(typ).is(":checked")) {
      $(typ).attr("checked", false);
    }
  });
  cb_path.each(function (a) {
    a++;
    var typ = cb_id + a;
    $(typ).attr("disabled", false);
    if ($(typ).is(":checked")) {
      $(typ).attr("checked", false);
    }
  });
  if (clas == 1) { //Бокал для белого вина
    tb_path.each(function (y) {
      $(tb_id + vini[y]).attr("disabled", true);
    });
    cb_path.each(function (y) {
      $(cb_id + vini_cor[y]).attr("disabled", true);
    });
  } else if (clas == 2) {  //Рюмка
    tb_path.each(function (y) {
      $(tb_id + rumk[y]).attr("disabled", true);
    });
    sb_path.each(function (y) {
      $(sb_id + rumk_alc[y]).attr("disabled", true);
    });
    cb_path.each(function (y) {
      $(cb_id + rumk_cor[y]).attr("disabled", true);
    });
  } else if (clas == 3) {  //Тумблер(рокс)
    tb_path.each(function (y) {
      $(tb_id + rock[y]).attr("disabled", true);
    });
    cb_path.each(function (y) {
      $(cb_id + rock_cor[y]).attr("disabled", true);
    });
  } else if (clas == 4) {  //Бокал для пива
    tb_path.each(function (y) {
      $(tb_id + beer[y]).attr("disabled", true);
    });
    cb_path.each(function (y) {
      $(cb_id + beer_cor[y]).attr("disabled", true);
    });
  } else if (clas == 5) {	//Бокал для шампанского
    tb_path.each(function (y) {
      $(tb_id + sham[y]).attr("disabled", true);
    });
    sb_path.each(function (y) {
      $(sb_id + sham_alc[y]).attr("disabled", true);
    });
    cb_path.each(function (y) {
      $(cb_id + sham_cor[y]).attr("disabled", true);
    });
  } else if (clas == 6) {	//Бокал для мартини
    tb_path.each(function (y) {
      $(tb_id + mart[y]).attr("disabled", true);
    });
    cb_path.each(function (y) {
      $(cb_id + mart_cor[y]).attr("disabled", true);
    });
  } else if (clas == 7) {	//Шот(буллет)
    tb_path.each(function (y) {
      $(tb_id + shot[y]).attr("disabled", true);
    });
    sb_path.each(function (y) {
      $(sb_id + shot_alc[y]).attr("disabled", true);
    });
    cb_path.each(function (y) {
      $(cb_id + shot_cor[y]).attr("disabled", true);
    });
  } else if (clas == 8) {	//Коньячка
    tb_path.each(function (y) {
      $(tb_id + conc[y]).attr("disabled", true);
    });
  } else {
    tb_path.each(function (a) {
      a++;
      $(tb_id + a).attr("disabled", false);
    });
    sb_path.each(function (a) {
      a++;
      $(sb_id + a).attr("disabled", false);
    });
    cb_path.each(function (a) {
      a++;
      $(cb_id + a).attr("disabled", false);
    });
  }
}
var dis = 0;
$('.lower-mid-b > input').change(function () {
  if ($(this).is(':checked')) {
    $('.hard-block > ul > li').each(function (b) {
      if ($('#complicated_' + b).is(':checked')) {
        window.chek_id = b;
      }
      $('#complicated_' + b).attr('checked', false);
      $('#complicated_' + b).attr('disabled', true);
    });
    window.dis = 1;
  } else {
    //console.log(chek_id);
    $('#complicated_' + chek_id).attr('checked', true);
    $('.hard-block > ul > li').each(function (d) {
      $('#complicated_' + d).attr('disabled', false);
    });
    window.dis = 0;
  }
});
function scrolling_plug(path, scrolling, swich, intOverallDelta) {
  var taked_path = "#" + path.attr('id').replace(/[0-9]/g, '');
  if (!taked_path) {
    taked_path = "#" + path.find('input').attr('id').replace(/[0-9]/g, '');
  }
  if (swich != 1) {
    var item_scroll = path.length - 1;
  } else {
    var item_scroll = path.length;
  }
  var disabl = 0;
  for (var i = 1; i <= item_scroll; i++) {
    if ($(taked_path + i).is(':checked')) {
      var start_num = i;
    }
  };
  scrolling.click(function () {
    for (var s = 1; s <= item_scroll; s++) {
      if ($(taked_path + s).is(':checked')) {
        intOverallDelta = s;
      }
    }
  });
  var sc = 0;
  if (swich != 1) {
    sc = -1;
  }
  intOverallDelta = start_num;
  scrolling.mousewheel(function (objEvent, intDelta) {
    if (intDelta > 0) {
      if (dis == 0) {
        intOverallDelta++;
        if (intOverallDelta == (item_scroll + 1)) {
          intOverallDelta = item_scroll;
          if (swich == 1) {
            intOverallDelta = 1;
          }
        }
        $(taked_path + (intOverallDelta + 1)).attr('checked', false);
        $(taked_path + (intOverallDelta - 1)).attr('checked', false);
        $(taked_path + intOverallDelta).attr({ checked: 'checked' });
      }
      check_block();
    }
    else if (intDelta < 0) {
      if (dis == 0) {
        intOverallDelta--;
        if (intOverallDelta == sc) {
          if (swich != 1) {
            intOverallDelta = swich;
          } else {
            intOverallDelta = item_scroll;
          }
        }
        $(taked_path + (intOverallDelta + 1)).attr('checked', false);
        $(taked_path + (intOverallDelta - 1)).attr('checked', false);
        $(taked_path + intOverallDelta).attr({ checked: 'checked' });
      }
      check_block();
    }
  });
};
//scrolling_plug($('.first-block > input'), $('.bokal-block'), 1, 1);
scrolling_plug($('.portion-block input'), $('.portion-block'), 0, 0);
scrolling_plug($('.min-time input'), $('.min-time'), 0, 0);
scrolling_plug($('.max-time input'), $('.max-time'), 0, 0);
scrolling_plug($('.hard-block input'), $('.hard-block'), 0, 0);
$('.range-block label').mouseup(function () {
  $(this).click();
});
$('label[for=add_ing]').click(function () {
  $('#name_ing').val('');
});
$('.ingrid-list').hover(function () {
  $('.ingrid-list > li > div').click(function () {
    //console.log($(this).parent().attr('class'));
    $(this).parent().remove();
  });
});