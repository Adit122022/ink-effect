const banner = document.querySelector('.banner');

banner.addEventListener('mousemove', (e) => {
  const { left, top } = banner.getBoundingClientRect();
  const x = e.clientX - left; // Mouse X position relative to the banner
  const y = e.clientY - top;  // Mouse Y position relative to the banner

  const maskSize = 500; // Match the mask size defined in your CSS

  // Center the mask around the cursor
  const maskX = x - maskSize / 2;
  const maskY = y - maskSize / 2;   
//   console.log(maskX, maskY);

  // Update CSS variables to move the mask
  banner.style.setProperty('--mask-x', `${maskX}px`);
  banner.style.setProperty('--mask-y', `${maskY}px`);
});
