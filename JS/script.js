// const container = document.querySelector(".js-add-btn");

// container.addEventListener("click", onClick);

// function onClick(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   console.log(event.target.nodeName);
//   console.log(event.target.textContent);
// }

// OPTION 1 (Вибір однієї кнопки)

// const tagsContainer = document.querySelector(".js-tags");
// let selectedTag = null;

// tagsContainer.addEventListener("click", onTagsContainerClick);

// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveBtn = document.querySelector(".tags-btn__active");

//   //   console.log(currentActiveBtn);
//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags-btn__active");

//     //   currentActiveBtn?.classList.remove("tags-btn__active"); - instead of if
//   }
//   //   console.log(event.target);

//   const nextActiveBtn = event.target;
//   nextActiveBtn.classList.add("tags-btn__active");
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

// OPTION 1 (Вибір кількох кнопок)

const tagsContainer = document.querySelector(".js-tags");

const selectedTags = new Set();

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const isActive = event.target.classList.contains("tags-btn__active");

  if (isActive) {
    selectedTags.delete(event.target.dataset.value);
  } else {
    selectedTags.add(event.target.dataset.value);
  }

  event.target.classList.toggle("tags-btn__active");

  console.log(selectedTags);
}
