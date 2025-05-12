const bg = document.querySelector('.background');

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const xPercent = (e.clientX / innerWidth - 0.5) * 100;
  const yPercent = (e.clientY / innerHeight - 0.5) * 100;

  bg.style.transform = `translate(${-50 + xPercent * 0.2}%, ${-50 + yPercent * 0.2}%)`;
});

const bg = document.querySelector('.dots-bg');

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 100;
  const y = (e.clientY / innerHeight - 0.5) * 100;

  // Move the background to give infinite scrolling illusion
  bg.style.transform = `translate(${x}%, ${y}%)`;
});
