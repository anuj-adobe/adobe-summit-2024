
export default function decorate(block) {
  // Add class to the block
  block.classList.add('columns-recommendation');

  // Get all child divs inside the block
  const items = block.querySelectorAll(':scope > div > div');
  items.forEach((item) => {
    // Add a class to each item
    item.classList.add('recommendation-item');

    // Move the image to be a background of the heading
    const img = item.querySelector('img');
    if (img) {
      const title = item.querySelector('h3');
      if (title) {
        title.style.backgroundImage = `url(${img.src})`;
        title.style.backgroundSize = 'cover';
        title.style.backgroundPosition = 'center';
        img.remove();
      }
    }
  });

  // Get all h3 elements and add a class
  const titles = block.querySelectorAll('h3');
  titles.forEach((title) => {
    title.classList.add('recommendation-title');
  });

  // Get all p elements and add a class
  const paragraphs = block.querySelectorAll('p');
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add('recommendation-paragraph');
  });

  // Get all a elements and add a class
  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.classList.add('recommendation-link');
  });
}
