"use strict";

function slugify(title) {
  const lowcaseSlugify = title.toLowerCase();
  const splitSlugify = lowcaseSlugify.split(" ");
  const resultSlugify = splitSlugify.join("-");
  console.log(resultSlugify);
}
slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");
