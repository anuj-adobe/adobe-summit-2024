
export default function decorate(block) {
  // Add class to the block for styling
  block.classList.add('columns-register');

  // Extract the inner divs
  const innerDivs = block.querySelectorAll(':scope > div > div');
  
  // Add classes for styling
  if (innerDivs.length > 0) {
    innerDivs[0].classList.add('text-content');
    innerDivs[1].classList.add('image-content');
  }
  
  // Add a class to the h1
  const heading = block.querySelector('h1');
  if (heading) {
    heading.classList.add('heading');
  }

  // Add a class to the first paragraph
  const paragraphs = block.querySelectorAll('p');
  if (paragraphs.length > 0) {
    paragraphs[0].classList.add('description');
  }

  // Add a class to the link
  const link = block.querySelector('a');
  if (link) {
    link.classList.add('register-link');
  }
}
