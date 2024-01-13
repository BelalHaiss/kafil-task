import Splide from '@splidejs/splide';

const splide = new Splide('#image-carousel', {
  type: 'loop',
  autoplay: true,
  rewindSpeed: 700
});

splide.on('pagination:updated', function (data) {
  // You can add your class to the UL element
  data.list.classList.add('bottom-[13%]');
  data.items.forEach(function (item) {
    item.button.classList.add('bg-white');
    const isSelected = item.button.ariaSelected;
    isSelected
      ? item.button.classList.add('!bg-green-500')
      : item.button.classList.remove('!bg-green-500');
  });
});

splide.mount();
