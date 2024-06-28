document.querySelectorAll('.faq-title').forEach(item => {
    item.addEventListener('click', () => {
      const faqContent = item.nextElementSibling;
      const svgIcon = item.querySelector('svg');
      
      if (faqContent.style.maxHeight && faqContent.style.maxHeight !== '0px') {
   
        faqContent.style.maxHeight = faqContent.scrollHeight + 'px'; 
        setTimeout(() => {
          faqContent.style.maxHeight = '0px';
        }, 0); 
        svgIcon.classList.remove('bi-chevron-up');
        svgIcon.classList.add('bi-chevron-down');
      } else {

        faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
        svgIcon.classList.remove('bi-chevron-down');
        svgIcon.classList.add('bi-chevron-up');
        faqContent.addEventListener('transitionend', function handleTransitionEnd() {

          faqContent.style.maxHeight = 'none';
          faqContent.removeEventListener('transitionend', handleTransitionEnd);
        });
      }
    });
  });


  document.querySelectorAll('.faq-content').forEach((content, index) => {
    if (!content.classList.contains('max-h-0')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
