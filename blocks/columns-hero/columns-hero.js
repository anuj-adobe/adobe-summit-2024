
export default function decorate(block) {
  // Add class to the block element
  block.classList.add('columns-hero');

  // Create the structure for the left column
  const leftColumn = document.createElement('div');
  leftColumn.classList.add('left-column');

  const title = block.querySelector('h1');
  const paragraphs = block.querySelectorAll('p');
  const learnMoreLinks = block.querySelectorAll('p a');

  // Move the title and the first two paragraphs to the left column
  leftColumn.appendChild(title);
  leftColumn.appendChild(paragraphs[0]);
  leftColumn.appendChild(learnMoreLinks[0].parentElement);
  leftColumn.appendChild(paragraphs[1]);

  // Create the structure for the right column
  const rightColumn = document.createElement('div');
  rightColumn.classList.add('right-column');

  const videoLink = block.querySelector('p a[href*="video.tv.adobe.com"]');
  rightColumn.appendChild(videoLink.parentElement);

  // Append the new columns to the block
  block.innerHTML = '';
  block.appendChild(leftColumn);
  block.appendChild(rightColumn);
}
