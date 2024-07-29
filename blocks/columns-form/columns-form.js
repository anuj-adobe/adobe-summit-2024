
export default function decorate(block) {
  // Clear block content
  while (block.firstChild) {
    block.removeChild(block.firstChild);
  }

  // Create the left and right containers
  const leftContainer = document.createElement('div');
  leftContainer.classList.add('left-container');

  const rightContainer = document.createElement('div');
  rightContainer.classList.add('right-container');

  // Create and append the left content
  const leftContent = `
    <div>
      <h1 id="digital-trends-core-report-featuring-genai">2024 Digital Trends core report (featuring GenAI)</h1>
      <p>Adobe, in collaboration with Econsultancy, surveyed over 8,000 digital experience professionals — from executives to practitioners — and over 6,000 customers globally. Our research shows customers expect seamless, connected experiences. Read the report to learn about effective ways on how to leverage generative AI.</p>
    </div>
  `;
  leftContainer.innerHTML = leftContent;

  // Create and append the right content
  const rightContent = `
    <div class="right-content">
      <p class="form-title">Get Access Now</p>
      <div class="form-group">
        <label for="first-name">First name</label>
        <input type="text" id="first-name" placeholder="First name">
      </div>
      <div class="form-group">
        <label for="last-name">Last name</label>
        <input type="text" id="last-name" placeholder="Last name">
      </div>
      <div class="form-group">
        <label for="business-email">Business email</label>
        <input type="email" id="business-email" placeholder="Business email">
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <select id="country">
          <option value="">Country*</option>
        </select>
      </div>
      <p class="required">Required</p>
      <button class="get-report-button">Get my report</button>
    </div>
  `;
  rightContainer.innerHTML = rightContent;

  // Append containers to the block
  block.appendChild(leftContainer);
  block.appendChild(rightContainer);
}
