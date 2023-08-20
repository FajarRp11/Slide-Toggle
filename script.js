function slideToggle(e) {
  const target = $(e.target);
  const item = $(target.parents(".faq-items"));
  const detail = $(item.children(".faq-items-detail"));

  if ($(target).hasClass("active")) {
    $(target).html("+").removeClass("active");
  } else {
    $(target).html("-").addClass("active");
  }

  detail.slideToggle();
}
