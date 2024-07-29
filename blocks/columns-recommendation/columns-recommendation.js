
export default function decorate(block) {
  // Add a class to the block for styling
  block.classList.add('columns-recommendation');

  // Get all child div elements
  const items = block.querySelectorAll(':scope > div > div');

  items.forEach((item) => {
    // Add a class to each item for styling
    item.classList.add('recommendation-item');

    // Add a class to the picture element
    const picture = item.querySelector('picture');
    if (picture) {
      picture.classList.add('recommendation-image');
    }

    // Add a class to the h3 element
    const heading = item.querySelector('h3');
    if (heading) {
      heading.classList.add('recommendation-title');
    }

    // Add a class to the paragraph elements
    const paragraphs = item.querySelectorAll('p');
    paragraphs.forEach((paragraph, index) => {
      if (index === 0) {
        paragraph.classList.add('recommendation-description');
      } else if (index === 1) {
        paragraph.classList.add('recommendation-link-container');
      }
    });

    // Add a class to the link element
    const link = item.querySelector('a');
    if (link) {
      link.classList.add('recommendation-link');
    }
  });
}
