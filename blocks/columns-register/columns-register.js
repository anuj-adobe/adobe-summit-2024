
export default function decorate(block) {
  // Create a wrapper div for the text content
  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text-wrapper');

  // Move the h1 and paragraphs into the text wrapper
  const heading = block.querySelector('h1');
  const paragraphs = block.querySelectorAll('p');
  textWrapper.appendChild(heading);
  paragraphs.forEach(p => textWrapper.appendChild(p));

  // Create a wrapper div for the image content
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');

  // Move the picture element into the image wrapper
  const picture = block.querySelector('picture');
  imageWrapper.appendChild(picture);

  // Append the wrappers to the block
  block.appendChild(textWrapper);
  block.appendChild(imageWrapper);

  // Add a class to the register link
  const registerLink = block.querySelector('a');
  registerLink.classList.add('register-link');
}
