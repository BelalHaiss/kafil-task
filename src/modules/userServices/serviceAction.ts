const serviceHearts = document.querySelectorAll('.service-heart-container');

serviceHearts.forEach((element) => {
  element.addEventListener('click', (_) => {
    for (const svgElement of element.children) {
      handleSVGClasses(svgElement as SVGAElement);
    }
  });
});

const handleSVGClasses = (element: SVGAElement) => {
  const isHidden = element.classList.contains('hide');

  if (isHidden) {
    element.classList.add('show');
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
    element.classList.remove('show');
  }
};
